"use client";

import React, { useState, useRef, useEffect } from "react";
import PrivateRoute from "@/app/privateRoute";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/app/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUser } from "@/app/authcont";
import { useSurveyContext } from "@/app/survpages/survcont.jsx";
import { useDarkMode } from "@/app/Modules/darkmodecont";
import {
  fetchSurveyByUser,
  fetchSurveyById,
  saveSurveyData,
} from "@/app/Modules/utilsfirebase.js";
import toast from "react-hot-toast";
import AutoMarkButton from "@/app/Modules/automark";
import { toast as custom } from "react-hot-toast";
import { Switch, Input, Button, Modal } from "antd";
import Checkbox from "antd/es/checkbox";

const { TextArea } = Input;

const Survey = () => {
  const router = useRouter();

  function createQuestionId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return String(crypto.randomUUID());
    }

    return String(
      `question-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    );
  }

  const createEmptySection = () => ({
    id: Date.now() + Math.random(),
    title: "",
    objective: "",
    note: "",
    showNote: false,
    numberingMode: "continue",
    subsections: [],
  });

  const createEmptySubsection = () => ({
    id: Date.now() + Math.random(),
    title: "",
    note: "",
    showNote: false,
  });

  const [activeSectionId, setActiveSectionId] = useState(null);

  const normalizeQuestionId = (value) => String(value ?? "");

  const [components, setComponents] = useState([
    {
      id: createQuestionId(),
      text: "",
      showMultipleChoice: false,
      openAnswer: false,
      choices: [""],
      booleans: false,
      correctAnswer: null,
      // subQuestion is either null or an object
      subQuestion: null,
      checkboxes: false,
      otherOption: false,
      ratingMode: false,
      checkboxLabelType: "numbers",
      sectionId: null,
    },
  ]);

  const { surveyData, setSurveyData } = useSurveyContext();
  const [sections, setSections] = useState(
    surveyData?.sections || [createEmptySection()],
  );

  const [numberedQuestions, setNumberedQuestions] = useState(false);

  const [previewData, setPreviewData] = useState(false);

  const inputRefs = useRef({});
  const subInputRefs = useRef({});

  const titleInputRef = useRef(null);

  const { user } = useUser();
  const [userSurveys, setUserSurveys] = useState([]);
  const [showSurveySelection, setShowSurveySelection] = useState(false);

  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [surveyUrl, setSurveyUrl] = useState("");

  const normalizeSection = (section, index = 0) => ({
    id: section?.id ?? `${Date.now()}-${index}-${Math.random()}`,
    title: section?.title ?? "",
    objective: section?.objective ?? "",
    note: section?.note ?? "",
    showNote: Boolean(section?.showNote),
    numberingMode: section?.numberingMode || "continue",
    subsections: Array.isArray(section?.subsections)
      ? section.subsections.map((subsection, subsectionIndex) => ({
          id:
            subsection?.id ??
            `${Date.now()}-${index}-${subsectionIndex}-${Math.random()}`,
          title: subsection?.title ?? "",
          note: subsection?.note ?? "",
          showNote: Boolean(subsection?.showNote),
        }))
      : [],
  });

  const normalizeSurveyPayload = (payload) => {
    const cleanedPayload = Object.fromEntries(
      Object.entries(payload).filter(([, value]) => value !== undefined),
    );

    const normalizedSections = Array.isArray(cleanedPayload.sections)
      ? cleanedPayload.sections.map(normalizeSection)
      : [createEmptySection()];

    return {
      ...cleanedPayload,
      expectedResponses:
        cleanedPayload.expectedResponses === "" ||
        cleanedPayload.expectedResponses === null ||
        cleanedPayload.expectedResponses === undefined
          ? 0
          : Number(cleanedPayload.expectedResponses) || 0,
      sections: normalizedSections,
    };
  };

  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [autoMark, setAutoMark] = useState(false);
  const [emails, setEmails] = useState(false);
  const { darkMode } = useDarkMode();
  const [share, setShare] = useState(false);

  const { title, expectedResponses, anonymous, country, state } =
    surveyData || {};

  const [editableTitle, setEditableTitle] = useState(title || "");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  const getCheckboxLabel = (index, type = "numbers") => {
    if (type === "letters") {
      return String.fromCharCode(65 + index);
    }
    return String(index + 1);
  };

  const getRatingChoices = () =>
    Array.from({ length: 5 }, (_, index) => String(index + 1));

  const addCheckboxChoice = (id, isSub = false) => {
    updateComponent(id, (prev) => {
      const labelType = prev.checkboxLabelType || "numbers";
      const maxLength = prev.ratingMode ? 5 : 50;

      if (!isSub) {
        if (prev.choices.length >= maxLength) return prev;
        const nextChoice = prev.ratingMode
          ? getCheckboxLabel(prev.choices.length, labelType)
          : "";
        return { choices: [...prev.choices, nextChoice] };
      }

      const sub = prev.subQuestion || {
        text: "",
        showMultipleChoice: false,
        openAnswer: false,
        choices: [""],
        booleans: false,
        correctAnswer: null,
        checkboxes: false,
        otherOption: false,
        ratingMode: false,
        checkboxLabelType: "numbers",
      };

      if (sub.choices.length >= maxLength) return prev;
      const nextChoice = sub.ratingMode
        ? getCheckboxLabel(
            sub.choices.length,
            sub.checkboxLabelType || "numbers",
          )
        : "";
      return {
        subQuestion: {
          ...sub,
          choices: [...sub.choices, nextChoice],
        },
      };
    });
  };

  const toggleRatingMode = (event, id, isSub = false) => {
    event.preventDefault();
    updateComponent(id, (prev) => {
      const labelType = prev.checkboxLabelType || "numbers";
      const nextRatingMode = !prev.ratingMode;
      const ratingChoices = getRatingChoices();

      if (!isSub) {
        return {
          ...prev,
          checkboxes: true,
          ratingMode: nextRatingMode,
          choices: nextRatingMode
            ? ratingChoices
            : prev.choices.length
              ? prev.choices
              : [""],
          correctAnswer: nextRatingMode ? [] : prev.correctAnswer,
        };
      }

      const sub = prev.subQuestion || {
        text: "",
        showMultipleChoice: false,
        openAnswer: false,
        choices: [""],
        booleans: false,
        correctAnswer: null,
        checkboxes: false,
        otherOption: false,
        ratingMode: false,
        checkboxLabelType: "numbers",
      };

      return {
        subQuestion: {
          ...sub,
          checkboxes: true,
          ratingMode: nextRatingMode,
          choices: nextRatingMode
            ? ratingChoices
            : sub.choices.length
              ? sub.choices
              : [""],
          correctAnswer: nextRatingMode ? [] : sub.correctAnswer,
        },
      };
    });
  };

  const setCheckboxLabelType = (id, nextType, isSub = false) => {
    updateComponent(id, (prev) => {
      const base = isSub ? prev.subQuestion || prev : prev;
      const nextChoices = base.ratingMode
        ? getRatingChoices().map((choice, index) =>
            getCheckboxLabel(index, nextType),
          )
        : Array.isArray(base.choices) && base.choices.length
          ? base.choices
          : [""];

      if (!isSub) {
        return { ...prev, checkboxLabelType: nextType, choices: nextChoices };
      }

      return {
        subQuestion: {
          ...base,
          checkboxLabelType: nextType,
          choices: nextChoices,
        },
      };
    });
  };

  // ----- Email helpers -----
  const addEmail = () => {
    const trimmed = emailInput.trim();
    if (!trimmed) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Invalid email format.");
      return;
    }

    if (emailList.includes(trimmed)) {
      toast.error("Duplicate email.");
      return;
    }

    if (emailList.length >= 10) {
      toast.error("Max 10 emails allowed.");
      return;
    }

    setEmailList([...emailList, trimmed]);
    setEmailInput("");
  };

  const handleKeyDown = (e) => {
    if (["Enter", ",", " "].includes(e.key)) {
      e.preventDefault();
      addEmail();
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmailList(emailList.filter((email) => email !== emailToRemove));
  };

  // ----- Component utility functions (subQuestion aware) -----
  const adjustHeight = (event, id) => {
    const textarea = event.target;
    if (textarea.value !== "") {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    updateComponent(id, { text: textarea.value });
  };

  const toggleMultipleChoices = (event, id, isSub = false) => {
    event.preventDefault();
    if (!isSub) {
      updateComponent(id, (prev) => ({
        showMultipleChoice: !prev.showMultipleChoice,
        openAnswer: false,
        booleans: false,
        checkboxes: false,
      }));
    } else {
      updateComponent(id, (prev) => {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
          checkboxes: false,
        };
        const newSub = {
          ...sub,
          showMultipleChoice: !sub.showMultipleChoice,
          openAnswer: false,
          booleans: false,
          checkboxes: false,
        };
        return { subQuestion: newSub };
      });
    }
  };

  const toggleOpenAnswer = (event, id, isSub = false) => {
    event.preventDefault();
    if (!isSub) {
      updateComponent(id, (prev) => ({
        openAnswer: !prev.openAnswer,
        showMultipleChoice: false,
        booleans: false,
        checkboxes: false,
      }));
    } else {
      updateComponent(id, (prev) => {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
          checkboxes: false,
        };
        return {
          subQuestion: {
            ...sub,
            openAnswer: !sub.openAnswer,
            showMultipleChoice: false,
            booleans: false,
            checkboxes: false,
          },
        };
      });
    }
  };

  const toggleBooleans = (event, id, isSub = false) => {
    event.preventDefault();
    if (!isSub) {
      updateComponent(id, (prev) => ({
        booleans: !prev.booleans,
        showMultipleChoice: false,
        openAnswer: false,
        checkboxes: false,
      }));
    } else {
      updateComponent(id, (prev) => {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
          checkboxes: false,
        };
        return {
          subQuestion: {
            ...sub,
            booleans: !sub.booleans,
            showMultipleChoice: false,
            openAnswer: false,
            checkboxes: false,
          },
        };
      });
    }
  };

  const toggleCheckboxes = (event, id, isSub = false) => {
    event.preventDefault();
    if (!isSub) {
      updateComponent(id, (prev) => ({
        checkboxes: !prev.checkboxes,
        booleans: false,
        showMultipleChoice: false,
        openAnswer: false,
      }));
    } else {
      updateComponent(id, (prev) => {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
          checkboxes: false,
        };
        return {
          subQuestion: {
            ...sub,
            checkboxes: !sub.checkboxes,
            booleans: false,
            showMultipleChoice: false,
            openAnswer: false,
          },
        };
      });
    }
  };

  const handleInputChange = (id, index, value, isSub = false) => {
    updateComponent(id, (prev) => {
      if (!isSub) {
        const updatedChoices = [...prev.choices];
        updatedChoices[index] = value;
        return { choices: updatedChoices };
      } else {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
        };
        const updatedChoices = [...(sub.choices || [])];
        updatedChoices[index] = value;
        return { subQuestion: { ...sub, choices: updatedChoices } };
      }
    });
  };

  const setCorrectAnswer = (id, choice, isSub = false) => {
    if (!isSub) updateComponent(id, { correctAnswer: choice });
    else
      updateComponent(id, (prev) => {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
        };
        return { subQuestion: { ...sub, correctAnswer: choice } };
      });
  };

  const toggleCheckboxCorrectAnswer = (id, choice, checked, isSub = false) => {
    updateComponent(id, (prev) => {
      const current = Array.isArray(prev.correctAnswer)
        ? prev.correctAnswer
        : [];
      const next = checked
        ? [...new Set([...current, choice])]
        : current.filter((item) => item !== choice);
      if (!isSub) return { correctAnswer: next };

      const sub = prev.subQuestion || {
        text: "",
        showMultipleChoice: false,
        openAnswer: false,
        choices: [""],
        booleans: false,
        correctAnswer: [],
      };
      return { subQuestion: { ...sub, correctAnswer: next } };
    });
  };

  const handleKeyPress = (e, id, index, isSub = false) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (e.target.value.trim() === "") return;

    let nextKey = null;

    updateComponent(id, (prev) => {
      const maxChoices = prev.ratingMode ? 5 : 50;

      if (!isSub) {
        if (prev.choices.length < maxChoices) {
          const newIndex = prev.choices.length;
          nextKey = `${id}-${newIndex}`;
          const nextChoice = prev.ratingMode
            ? getCheckboxLabel(newIndex, prev.checkboxLabelType || "numbers")
            : "";
          return { choices: [...prev.choices, nextChoice] };
        }
        return prev;
      } else {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
          checkboxes: false,
          otherOption: false,
          ratingMode: false,
          checkboxLabelType: "numbers",
        };

        if (sub.choices.length < (sub.ratingMode ? 5 : 50)) {
          const newIndex = sub.choices.length;
          nextKey = `${id}-${newIndex}`;
          const nextChoice = sub.ratingMode
            ? getCheckboxLabel(newIndex, sub.checkboxLabelType || "numbers")
            : "";
          return {
            subQuestion: { ...sub, choices: [...sub.choices, nextChoice] },
          };
        }
        return prev;
      }
    });

    setTimeout(() => {
      const targetRefs = isSub ? subInputRefs.current : inputRefs.current;
      const nextInput = targetRefs[nextKey];
      if (nextInput?.focus) {
        nextInput.focus();
      }
    }, 50);
  };

  const removeChoice = (id, index, isSub = false) => {
    updateComponent(id, (prev) => {
      if (!isSub) {
        if (prev.ratingMode && prev.choices.length <= 2) {
          return prev;
        }
        if (prev.choices.length === 1) {
          const updatedChoices = [...prev.choices];
          updatedChoices[index] = "";
          return { choices: updatedChoices };
        } else {
          return { choices: prev.choices.filter((_, i) => i !== index) };
        }
      } else {
        const sub = prev.subQuestion || {
          text: "",
          showMultipleChoice: false,
          openAnswer: false,
          choices: [""],
          booleans: false,
          correctAnswer: null,
        };
        if (sub.ratingMode && sub.choices.length <= 2) {
          return prev;
        }
        if (sub.choices.length === 1) {
          return { subQuestion: { ...sub, choices: [""] } };
        } else {
          return {
            subQuestion: {
              ...sub,
              choices: sub.choices.filter((_, i) => i !== index),
            },
          };
        }
      }
    });
  };

  const updateComponent = (id, updates) => {
    const targetId = normalizeQuestionId(id);

    setComponents((prev) =>
      prev.map((component) => {
        if (normalizeQuestionId(component.id) === targetId) {
          const newState =
            typeof updates === "function" ? updates(component) : updates;
          return { ...component, ...newState };
        }
        return component;
      }),
    );
  };

  const cloneComponent = (
    sectionId = activeSectionId,
    openAnswer = false,
    subsectionId = null,
  ) => {
    const targetSectionId = sectionId || sections[0]?.id || null;

    const newComponent = {
      id: createQuestionId(),

      text: "",
      showMultipleChoice: false,
      openAnswer,
      choices: [""],
      booleans: false,
      correctAnswer: null,
      subQuestion: null,
      checkboxes: false,
      otherOption: false,
      ratingMode: false,
      checkboxLabelType: "numbers",

      sectionId: targetSectionId,
      subsectionId,
    };

    setComponents((prev) => [...prev, newComponent]);
  };

  const removeComponent = async (questionId) => {
    const idToDelete = normalizeQuestionId(questionId);

    if (!idToDelete) {
      toast.error("Cannot delete question: missing question ID.");
      return false;
    }

    const targetIndex = components.findIndex(
      (component) => normalizeQuestionId(component.id) === idToDelete,
    );

    if (targetIndex === -1) {
      console.error("Question not found:", idToDelete);

      toast.error("The selected question could not be found.");
      return false;
    }

    const targetComponent = components[targetIndex];

    console.log("===== DELETE QUESTION =====");
    console.log("Deleting ID:", idToDelete);
    console.log("Deleting question:", targetComponent.text);
    console.log("Deleting section:", targetComponent.sectionId);

    /*
     * Build the new array BEFORE changing React state.
     * This guarantees Firebase receives the exact array
     * we intend to keep.
     */
    const nextComponents = components.filter(
      (component) => normalizeQuestionId(component.id) !== idToDelete,
    );

    try {
      if (selectedSurvey?.id || surveyId) {
        await persistSurveyState(nextComponents, {
          silent: true,
          surveyDocumentId: selectedSurvey?.id || surveyId,
        });

        /*
         * Verify that THIS exact question ID no longer
         * exists in Firebase.
         */
        const verifyRef = doc(
          db,
          "surveys",
          normalizeQuestionId(selectedSurvey?.id || surveyId),
        );

        const verifySnap = await getDoc(verifyRef);

        if (!verifySnap.exists()) {
          throw new Error("Survey disappeared while verifying deletion.");
        }

        const firebaseQuestions = Array.isArray(verifySnap.data().questions)
          ? verifySnap.data().questions
          : [];

        const stillExists = firebaseQuestions.some(
          (question) => normalizeQuestionId(question.id) === idToDelete,
        );

        if (stillExists) {
          throw new Error("The deleted question still exists in Firebase.");
        }
      }

      /*
       * Only update the UI AFTER Firebase confirms
       * the deletion.
       */
      setComponents(nextComponents);

      setHasUnsavedChanges(false);

      toast.success("Question deleted.");

      console.log("Successfully deleted question:", idToDelete);

      return true;
    } catch (error) {
      console.error("QUESTION DELETE FAILED:", error);

      toast.error("Question was not deleted from Firebase.");

      return false;
    }
  };

  useEffect(() => {
    if (!sections.length) {
      const firstSection = createEmptySection();
      setSections([firstSection]);
      setActiveSectionId(firstSection.id);
      return;
    }

    const firstSectionId = sections[0].id;
    // Set activeSectionId to first section if not set or invalid
    if (
      !activeSectionId ||
      !sections.some((section) => section.id === activeSectionId)
    ) {
      setActiveSectionId(firstSectionId);
    }

    // Assign any questions with null sectionId to the first section
    setComponents((prev) =>
      prev.map((component) =>
        component.sectionId === null
          ? { ...component, sectionId: firstSectionId }
          : component,
      ),
    );
  }, [sections]);

  // toggle adding/removing a subquestion on a component
  const toggleSubQuestion = (id) => {
    updateComponent(id, (prev) => {
      if (prev.subQuestion) {
        return { subQuestion: null };
      } else {
        return {
          subQuestion: {
            text: "",
            showMultipleChoice: false,
            openAnswer: false,
            choices: [""],
            booleans: false,
            correctAnswer: null,
          },
        };
      }
    });
  };

  const buildPersistedSections = (
    sourceSections = sections,
    sourceComponents = components,
  ) => {
    return sourceSections.filter((section) => {
      const hasQuestions = sourceComponents.some(
        (component) =>
          normalizeQuestionId(component.sectionId) ===
          normalizeQuestionId(section.id),
      );

      const hasContent =
        Boolean(section.title?.trim()) ||
        Boolean(section.objective?.trim()) ||
        Boolean(section.note?.trim()) ||
        Boolean(section.showNote) ||
        Boolean(section.subsections?.length);

      return hasQuestions || hasContent;
    });
  };

  const buildCompiledQuestions = (sourceComponents = components) => {
    return sourceComponents.map((component) => ({
      id: normalizeQuestionId(component.id),

      question: component.text || "",

      sectionId:
        component.sectionId || activeSectionId || sections[0]?.id || null,

      subsectionId: component.subsectionId || null,

      answerType: component.checkboxes
        ? "Checkboxes"
        : component.showMultipleChoice
          ? "Multiple Choice"
          : component.booleans
            ? "Boolean"
            : "Open Answer",

      choices:
        component.showMultipleChoice || component.checkboxes
          ? component.choices
          : null,

      ratingMode: Boolean(component.ratingMode),

      checkboxLabelType: component.checkboxLabelType || "numbers",

      correctAnswer:
        component.showMultipleChoice ||
        component.booleans ||
        component.checkboxes
          ? component.correctAnswer !== undefined
            ? component.correctAnswer
            : null
          : null,

      otherOption: Boolean(component.otherOption),

      otherValue: component.otherValue || "",

      subQuestion: component.subQuestion
        ? {
            question: component.subQuestion.text || "",

            answerType: component.subQuestion.checkboxes
              ? "Checkboxes"
              : component.subQuestion.showMultipleChoice
                ? "Multiple Choice"
                : component.subQuestion.booleans
                  ? "Boolean"
                  : "Open Answer",

            choices:
              component.subQuestion.showMultipleChoice ||
              component.subQuestion.checkboxes
                ? component.subQuestion.choices
                : null,

            ratingMode: Boolean(component.subQuestion.ratingMode),

            checkboxLabelType:
              component.subQuestion.checkboxLabelType || "numbers",

            correctAnswer:
              component.subQuestion.showMultipleChoice ||
              component.subQuestion.booleans ||
              component.subQuestion.checkboxes
                ? component.subQuestion.correctAnswer !== undefined
                  ? component.subQuestion.correctAnswer
                  : null
                : null,

            otherOption: Boolean(component.subQuestion.otherOption),

            otherValue: component.subQuestion.otherValue || "",
          }
        : null,
    }));
  };

  const persistSurveyState = async (sourceComponents, options = {}) => {
    const {
      silent = false,
      successMessage = "Survey saved successfully.",
      surveyDocumentId = selectedSurvey?.id || surveyId,
    } = options;

    const normalizedSurveyId = normalizeQuestionId(surveyDocumentId);

    if (!normalizedSurveyId) {
      throw new Error("Cannot save survey: missing Firebase survey ID.");
    }

    const compiled = buildCompiledQuestions(sourceComponents);

    const persistedSections = buildPersistedSections(
      sections,
      sourceComponents,
    );

    const payload = normalizeSurveyPayload({
      title: title || editableTitle,
      expectedResponses,
      userId: user?.uid,
      country,
      state,
      anonymous,
      autoMark,
      numberedQuestions,
      approved: false,

      // THIS IS THE EXACT CURRENT QUESTION ARRAY
      questions: compiled,

      objectives: surveyData?.objectives || {
        main: "",
        secondary: "",
        specific: [],
      },

      sections: persistedSections,

      // Preserve original createdAt when editing
      createdAt: selectedSurvey?.createdAt || new Date().toISOString(),
    });

    const docRef = doc(db, "surveys", normalizedSurveyId);

    console.log("===== FIREBASE SURVEY WRITE =====");
    console.log("Survey ID:", normalizedSurveyId);
    console.log("Questions being written:", compiled);
    console.log("Question count:", compiled.length);
    console.log("Sections being written:", persistedSections);

    /*
     * IMPORTANT:
     * merge:false means the existing survey document is
     * replaced with this exact survey state.
     *
     * Therefore an old question that is absent from
     * `compiled` cannot remain in `questions`.
     */
    await setDoc(
      docRef,
      {
        ...payload,
        questions: compiled,
      },
      {
        merge: false,
      },
    );

    // Verify immediately against Firebase.
    const verificationSnap = await getDoc(docRef);

    if (!verificationSnap.exists()) {
      throw new Error(
        "Firebase survey document could not be read after saving.",
      );
    }

    const firebaseData = verificationSnap.data();

    const firebaseQuestions = Array.isArray(firebaseData.questions)
      ? firebaseData.questions
      : [];

    console.log("Firebase questions AFTER WRITE:", firebaseQuestions);

    if (firebaseQuestions.length !== compiled.length) {
      throw new Error(
        `Firebase verification failed. Expected ${compiled.length} questions but found ${firebaseQuestions.length}.`,
      );
    }

    setSelectedSurvey((prev) =>
      prev
        ? {
            ...prev,
            ...payload,
            id: normalizedSurveyId,
            questions: compiled,
          }
        : {
            id: normalizedSurveyId,
            ...payload,
            questions: compiled,
          },
    );

    setHasUnsavedChanges(false);

    if (!silent) {
      toast.success(successMessage);
    }

    return compiled;
  };

  // compile preview (includes numbering flag and subquestions)
  const compilePreviewData = (e) => {
    e.preventDefault();
    const compiled = buildCompiledQuestions();
    setPreviewData(compiled);
  };

  const saveToDataBase = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    const compiled = buildCompiledQuestions();

    if (autoMark) {
      const hasInvalid = compiled.some((q) => {
        const invalidMain =
          (q.answerType !== "Multiple Choice" &&
            q.answerType !== "Boolean" &&
            q.answerType !== "Checkboxes") ||
          q.correctAnswer === null ||
          q.correctAnswer === undefined ||
          (Array.isArray(q.correctAnswer) && q.correctAnswer.length === 0) ||
          (typeof q.correctAnswer === "string" &&
            q.correctAnswer.trim() === "");

        const invalidSub =
          q.subQuestion &&
          ((q.subQuestion.answerType !== "Multiple Choice" &&
            q.subQuestion.answerType !== "Boolean" &&
            q.subQuestion.answerType !== "Checkboxes") ||
            q.subQuestion.correctAnswer === null ||
            q.subQuestion.correctAnswer === undefined ||
            (Array.isArray(q.subQuestion.correctAnswer) &&
              q.subQuestion.correctAnswer.length === 0) ||
            (typeof q.subQuestion.correctAnswer === "string" &&
              q.subQuestion.correctAnswer.trim() === ""));

        return invalidMain || invalidSub;
      });

      if (hasInvalid) {
        toast.error(
          "AutoMark is enabled: All questions and sub-questions must be Multiple Choice, True/False, or Checkboxes with a correct answer.",
        );
        setIsSaving(false);
        return;
      }
    }

    const payload = normalizeSurveyPayload({
      title: title || editableTitle,
      expectedResponses: expectedResponses,
      userId: user?.uid,
      country: country,
      state: state,
      anonymous: anonymous,
      autoMark,
      numberedQuestions,
      approved: false,
      questions: compiled,
      objectives: surveyData?.objectives || {
        main: "",
        secondary: "",
        specific: [],
      },
      sections: sections.filter(
        (section) =>
          section.title ||
          section.objective ||
          section.note ||
          section.showNote,
      ),
      createdAt: new Date().toISOString(),
    });

    try {
      if (!payload.title) {
        toast.error("Cannot save survey without title");
        return;
      }

      if (selectedSurvey) {
        custom(
          (t) => (
            <div className="p-4">
              <p className="font-semibold mb-2">What would you like to do?</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={async () => {
                    toast.dismiss(t.id);

                    if (!selectedSurvey?.id) {
                      toast.error("No valid survey selected for overwrite");
                      return;
                    }

                    try {
                      const cleanedPayload = Object.fromEntries(
                        Object.entries(payload).filter(
                          ([_, value]) => value !== undefined,
                        ),
                      );

                      const docRef = doc(
                        db,
                        "surveys",
                        String(selectedSurvey.id),
                      );

                      console.log("=================================");
                      console.log("UPDATING SURVEY");
                      console.log("Survey ID:", selectedSurvey.id);
                      console.log("Questions:", cleanedPayload.questions);
                      console.log(
                        "Question count:",
                        cleanedPayload.questions?.length,
                      );
                      console.log("=================================");

                      await setDoc(docRef, {
                        ...cleanedPayload,
                        questions: cleanedPayload.questions,
                      });

                      setHasUnsavedChanges(false);

                      toast.success("Survey updated successfully!");

                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    } catch (error) {
                      console.error("FIREBASE UPDATE FAILED:", error);
                      toast.error("Failed to update survey.");
                    }
                  }}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Overwrite
                </button>
                <button
                  onClick={async () => {
                    toast.dismiss(t.id);
                    const newSurveyId = await saveSurveyData(payload);
                    setSelectedSurvey({ id: newSurveyId, ...payload });
                    toast.success("Survey saved as new!");
                    try {
                      await fetch("/api/notify-newsurvey", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          title: payload.title,
                          userEmail: user?.email,
                          userId: user?.uid,
                        }),
                      });
                      console.log("Notification email sent successfully");
                    } catch (err) {
                      console.error("Failed to send notification email:", err);
                    }
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Save New
                </button>
              </div>
            </div>
          ),
          { duration: Infinity },
        );
      } else {
        const newSurveyId = await saveSurveyData(payload);
        setSelectedSurvey({ id: newSurveyId, ...payload });
        toast.success("Survey saved successfully!");
        try {
          await fetch("/api/notify-newsurvey", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: payload.title,
              userEmail: user?.email,
              userId: user?.uid,
            }),
          });
          console.log("Notification email sent successfully");
        } catch (err) {
          console.error("Failed to send notification email:", err);
        }

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error("Error saving survey:", error);
      toast.error("Failed to save survey.");
    } finally {
      setIsSaving(false);
    }
  };

  //When loading existing survey, transform to components (including numberedQuestions + subQuestion)
  const handleSurveySelection = async (surveyIdParam) => {
    if (!surveyIdParam) return;

    const survey = await fetchSurveyById(surveyIdParam);

    if (survey) {
      setSelectedSurvey(survey);
      setEditableTitle(survey.title || "");

      const normalizedSections =
        Array.isArray(survey.sections) && survey.sections.length
          ? survey.sections.map(normalizeSection)
          : [createEmptySection()];

      const firstSectionId = normalizedSections[0]?.id || null;
      const surveyQuestions = Array.isArray(survey.questions)
        ? survey.questions
        : [];

      const usedQuestionIds = new Set();

      // Create a map of normalized section IDs to actual section IDs
      const sectionIdMap = new Map();
      normalizedSections.forEach((section) => {
        sectionIdMap.set(normalizeQuestionId(section.id), section.id);
      });

      const transformedComponents = surveyQuestions.map((q) => {
        /*
         * ---------------------------------------------------------
         * QUESTION ID
         * ---------------------------------------------------------
         * Preserve a valid existing ID.
         * Generate a new ID only when:
         *   - the old question has no ID, or
         *   - the old ID is duplicated.
         *
         * This ID is the question's permanent identity and must
         * never depend on its array position.
         */
        let questionId = normalizeQuestionId(q.id);

        if (!questionId || usedQuestionIds.has(questionId)) {
          questionId = createQuestionId();
        }

        usedQuestionIds.add(questionId);

        /*
         * ---------------------------------------------------------
         * SECTION ID
         * ---------------------------------------------------------
         * Preserve the saved section when it still exists.
         * Otherwise move the question to the first valid section.
         * Always use the actual section ID from normalizedSections,
         * not a stringified version.
         */
        const savedSectionId = normalizeQuestionId(q.sectionId);
        const mappedSectionId = sectionIdMap.get(savedSectionId);

        const resolvedSectionId =
          mappedSectionId !== undefined ? mappedSectionId : firstSectionId;

        /*
         * ---------------------------------------------------------
         * MAIN QUESTION RATING DETECTION
         * ---------------------------------------------------------
         */
        const isLegacyRating =
          q.answerType === "Checkboxes" &&
          Array.isArray(q.choices) &&
          q.choices.length === 5 &&
          q.choices.every(
            (choice, choiceIndex) => String(choice) === String(choiceIndex + 1),
          );

        /*
         * ---------------------------------------------------------
         * MAIN QUESTION
         * ---------------------------------------------------------
         */
        return {
          id: questionId,

          text: q.question || "",

          showMultipleChoice: q.answerType === "Multiple Choice",

          openAnswer: q.answerType === "Open Answer",

          booleans: q.answerType === "Boolean",

          checkboxes: q.answerType === "Checkboxes",

          choices:
            Array.isArray(q.choices) && q.choices.length > 0
              ? [...q.choices]
              : [""],

          ratingMode: Boolean(q.ratingMode || isLegacyRating),

          checkboxLabelType: q.checkboxLabelType || "numbers",

          otherOption: Boolean(q.otherOption),

          otherValue: q.otherValue || "",

          correctAnswer:
            q.correctAnswer !== undefined && q.correctAnswer !== null
              ? q.correctAnswer
              : null,

          sectionId: resolvedSectionId,

          /*
           * Keep subsection relationship only if one was actually
           * saved. The subsection itself belongs to the section.
           */
          subsectionId: q.subsectionId || null,

          /*
           * -------------------------------------------------------
           * SUB-QUESTION
           * -------------------------------------------------------
           */
          subQuestion: q.subQuestion
            ? (() => {
                const sub = q.subQuestion;

                const subChoices =
                  Array.isArray(sub.choices) && sub.choices.length > 0
                    ? [...sub.choices]
                    : [""];

                const isLegacySubRating =
                  sub.answerType === "Checkboxes" &&
                  subChoices.length === 5 &&
                  subChoices.every(
                    (choice, choiceIndex) =>
                      String(choice) === String(choiceIndex + 1),
                  );

                return {
                  text: sub.question || "",

                  showMultipleChoice: sub.answerType === "Multiple Choice",

                  openAnswer: sub.answerType === "Open Answer",

                  booleans: sub.answerType === "Boolean",

                  checkboxes: sub.answerType === "Checkboxes",

                  choices: subChoices,

                  ratingMode: Boolean(sub.ratingMode || isLegacySubRating),

                  checkboxLabelType: sub.checkboxLabelType || "numbers",

                  otherOption: Boolean(sub.otherOption),

                  otherValue: sub.otherValue || "",

                  correctAnswer:
                    sub.correctAnswer !== undefined &&
                    sub.correctAnswer !== null
                      ? sub.correctAnswer
                      : null,
                };
              })()
            : null,
        };
      });

      /*
       * ---------------------------------------------------------
       * SET COMPONENTS
       * ---------------------------------------------------------
       *
       * If Firebase has questions, load exactly those questions.
       * Do not create an additional question.
       *
       * Only create the empty question when the survey truly has
       * zero questions.
       */
      setComponents(
        transformedComponents.length > 0
          ? transformedComponents
          : [
              {
                id: createQuestionId(),
                text: "",
                showMultipleChoice: false,
                openAnswer: false,
                choices: [""],
                booleans: false,
                correctAnswer: null,
                subQuestion: null,
                checkboxes: false,
                otherOption: false,
                ratingMode: false,
                checkboxLabelType: "numbers",
                sectionId: firstSectionId,
                subsectionId: null,
              },
            ],
      );

      /*
       * ---------------------------------------------------------
       * SET SURVEY/SECTION STATE
       * ---------------------------------------------------------
       */
      setSections(normalizedSections);
      setActiveSectionId(firstSectionId);

      setSurveyData((prev) => ({
        ...prev,
        title: survey.title || prev.title || "",
        expectedResponses:
          survey.expectedResponses ?? prev.expectedResponses ?? 0,
        objectives: survey.objectives ||
          prev.objectives || {
            main: "",
            secondary: "",
            specific: [],
          },
        sections: normalizedSections,
      }));

      setAutoMark(Boolean(survey.autoMark));
      setNumberedQuestions(Boolean(survey.numberedQuestions));

      /*
       * This survey is now synchronized with Firebase.
       */
      setHasUnsavedChanges(false);

      setShowSurveySelection(false);

      console.log("Loaded survey from Firebase:", {
        surveyId: surveyIdParam,
        title: survey.title,
        questionCount: surveyQuestions.length,
        questions: surveyQuestions,
        sections: normalizedSections,
        transformedComponents,
      });
    }
  };

  useEffect(() => {
    if (!surveyId || !user) return;
    handleSurveySelection(surveyId).catch((error) => {
      console.error("Error loading survey:", error);
      toast.error("Failed to load survey.");
    });
  }, [surveyId, user]);

  useEffect(() => {
    if (!user) return;
    fetchSurveyByUser(user.uid)
      .then(setUserSurveys)
      .catch((error) => {
        console.error("Error loading user surveys:", error);
        toast.error("Failed to load your surveys.");
      });
  }, [user]);

  useEffect(() => {
    setEditableTitle(title || "");
  }, [title]);

  useEffect(() => {
    if (surveyData) {
      const allEmpty = Object.values(surveyData).every(
        (val) => val === "" || val === null || val === undefined,
      );

      if (allEmpty) {
        const userChoice = window.confirm(
          "Your survey details seem empty.\nWould you like to go back to the Params page to fill them in?",
        );

        if (userChoice) {
          router.push("/survpages/params");
        } else {
          // They chose to remain — optional: you can show a warning toast or message
          console.log("User decided to stay on the survey page.");
        }
      }
    }
  }, [surveyData, router]);

  // ----- Rendering -----//
  const getQuestionNumber = (section, sectionIdx, questionIdx) => {
    if (!numberedQuestions || section.numberingMode === "blank") {
      return "";
    }
    // Renumber from 1 inside this section
    if (section.numberingMode === "renumber") {
      return `${questionIdx + 1}.`;
    }
    // Continue numbering from previous non-blank sections
    let previousQuestionCount = 0;
    sections.slice(0, sectionIdx).forEach((previousSection) => {
      if (previousSection.numberingMode === "blank") {
        return;
      }
      previousQuestionCount += components.filter(
        (component) => component.sectionId === previousSection.id,
      ).length;
    });
    return `${previousQuestionCount + questionIdx + 1}.`;
  };

  return (
    <PrivateRoute>
      <div
        id="application"
        className={`flex flex-col items-center justify-center w-full min-h-screen transition-colors`}
      >
        <div
          id="surveyTitle"
          className="border-4 border-black flex justify-center p-2 rounded-lg"
          style={{
            width: "min(45rem, 90vw)",
            minHeight: "3rem",
            alignItems: "center",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
            paddingInline: "1rem",
          }}
          onClick={() => {
            setIsEditingTitle(true);
            setTimeout(() => titleInputRef.current?.focus(), 0);
          }}
        >
          {isEditingTitle ? (
            <input
              ref={titleInputRef}
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              onBlur={() => {
                setIsEditingTitle(false);
                setSurveyData((prev) => ({ ...prev, title: editableTitle }));
                setSelectedSurvey((prev) =>
                  prev ? { ...prev, title: editableTitle } : prev,
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsEditingTitle(false);
                  setSurveyData({ ...surveyData, title: editableTitle });
                }
              }}
              className="w-full text-center bg-transparent border-none outline-none"
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
            />
          ) : (
            <span className="cursor-pointer text-center w-full break-words leading-snug">
              {title || editableTitle || "Enter Title"}
            </span>
          )}
        </div>
        <AutoMarkButton
          autoMark={autoMark}
          setAutoMark={setAutoMark}
          darkMode={darkMode}
        />
        {/* Numbered Questions toggle */}
        <div className="w-11/12 lg:w-3/4 mt-3 flex items-center gap-3">
          <span className="text-sm">Numbered Questions</span>
          <Switch
            checked={numberedQuestions}
            onChange={(checked) => setNumberedQuestions(checked)}
            checkedChildren="On"
            unCheckedChildren="Off"
          />
          <span className="text-xs text-gray-500">
            Toggle live numbering for all questions (saved with survey)
          </span>
        </div>

        <div id="mainFormcontainer" className="w-11/12 mt-4">
          <form id="mainForm" className="space-y-8">
            {sections.map((section, sectionIdx) => {
              const sectionQuestions = components.filter(
                (component) => component.sectionId === section.id,
              );
              return (
                <div key={section.id} className="shadow-md rounded p-6">
                  {/* Section header */}
                  <div className="mb-6 pb-4 border-b-2 border-gray-300">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-600">
                        Section {sectionIdx + 1}
                      </span>
                      <Input
                        value={section.title}
                        onChange={(e) =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? { ...item, title: e.target.value }
                                : item,
                            ),
                          )
                        }
                        placeholder="Section title"
                        variant="borderless"
                        className="!w-auto min-w-0 flex-1 !px-1 !text-base !font-semibold"
                      />
                    </div>
                    <div className="mb-3 rounded border border-dashed border-gray-300 bg-gray-50 p-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <label
                          htmlFor={`section-note-${section.id}`}
                          className="text-sm font-medium text-gray-700"
                        >
                          Section instructions / note
                        </label>
                        <Switch
                          size="small"
                          checked={section.showNote}
                          checkedChildren="Shown"
                          unCheckedChildren="Hidden"
                          onChange={(checked) =>
                            setSections((prev) =>
                              prev.map((item) =>
                                item.id === section.id
                                  ? { ...item, showNote: checked }
                                  : item,
                              ),
                            )
                          }
                        />
                      </div>
                      <TextArea
                        id={`section-note-${section.id}`}
                        value={section.note}
                        onChange={(e) =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? { ...item, note: e.target.value }
                                : item,
                            ),
                          )
                        }
                        placeholder="Explain what respondents should do in this section"
                        autoSize={{ minRows: 2, maxRows: 5 }}
                      />
                    </div>
                    {section.note && section.showNote && (
                      <p className="text-sm text-gray-700 mb-2 italic">
                        {section.note}
                      </p>
                    )}
                    {section.objective && section.showNote && (
                      <p className="text-sm text-gray-600">
                        <strong>Objective:</strong> {section.objective}
                      </p>
                    )}

                    {(section.subsections || []).map((subsection) => (
                      <div
                        key={subsection.id}
                        className="mb-2 rounded border border-gray-200 bg-white p-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-500">
                            Subsection
                          </span>
                          <Input
                            value={subsection.title}
                            onChange={(e) =>
                              setSections((prev) =>
                                prev.map((item) =>
                                  item.id === section.id
                                    ? {
                                        ...item,
                                        subsections: (
                                          item.subsections || []
                                        ).map((current) =>
                                          current.id === subsection.id
                                            ? {
                                                ...current,
                                                title: e.target.value,
                                              }
                                            : current,
                                        ),
                                      }
                                    : item,
                                ),
                              )
                            }
                            placeholder="Subsection title"
                            variant="borderless"
                            className="!px-1 !text-sm !font-semibold"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              cloneComponent(section.id, false, subsection.id)
                            }
                            className="ml-auto rounded bg-green-600 px-2 py-1 text-xs text-white"
                          >
                            + Question
                          </button>
                        </div>
                        <TextArea
                          value={subsection.note}
                          onChange={(e) =>
                            setSections((prev) =>
                              prev.map((item) =>
                                item.id === section.id
                                  ? {
                                      ...item,
                                      subsections: (item.subsections || []).map(
                                        (current) =>
                                          current.id === subsection.id
                                            ? {
                                                ...current,
                                                note: e.target.value,
                                              }
                                            : current,
                                      ),
                                    }
                                  : item,
                              ),
                            )
                          }
                          placeholder="Subsection instructions (optional)"
                          autoSize={{ minRows: 1, maxRows: 3 }}
                        />
                      </div>
                    ))}

                    {/* Section controls */}
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? { ...item, numberingMode: "continue" }
                                : item,
                            ),
                          )
                        }
                        className={`px-2 py-1 rounded text-xs border ${section.numberingMode === "continue" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}`}
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? { ...item, numberingMode: "renumber" }
                                : item,
                            ),
                          )
                        }
                        className={`px-2 py-1 rounded text-xs border ${section.numberingMode === "renumber" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}`}
                      >
                        Renumber
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? { ...item, numberingMode: "blank" }
                                : item,
                            ),
                          )
                        }
                        className={`px-2 py-1 rounded text-xs border ${section.numberingMode === "blank" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}`}
                      >
                        Blank
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSectionId(section.id);
                          cloneComponent(section.id);
                        }}
                        className="px-2 py-1 rounded text-xs bg-green-600 text-white hover:bg-green-700"
                      >
                        + Question
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSectionId(section.id);
                          cloneComponent(section.id, true);
                        }}
                        className="px-2 py-1 rounded text-xs bg-amber-500 text-white hover:bg-amber-600"
                      >
                        + Open-ended
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSections((prev) =>
                            prev.map((item) =>
                              item.id === section.id
                                ? {
                                    ...item,
                                    subsections: [
                                      ...item.subsections,
                                      createEmptySubsection(),
                                    ],
                                  }
                                : item,
                            ),
                          )
                        }
                        className="px-2 py-1 rounded text-xs bg-purple-600 text-white hover:bg-purple-700"
                      >
                        + Subsection
                      </button>
                      {sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            setSections((prev) =>
                              prev.filter((item) => item.id !== section.id),
                            )
                          }
                          className="text-red-600 text-sm hover:text-red-800"
                        >
                          Remove Section
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Questions in this section */}
                  <div className="space-y-6">
                    {sectionQuestions.map((component, index) => (
                      <React.Fragment key={`component-${component.id}`}>
                        {component.subsectionId &&
                          section.subsections.find(
                            (subsection) =>
                              subsection.id === component.subsectionId,
                          ) &&
                          (index === 0 ||
                            sectionQuestions[index - 1]?.subsectionId !==
                              component.subsectionId) && (
                            <div className="border-l-4 border-purple-400 bg-purple-50 px-3 py-2">
                              <div className="font-semibold text-purple-900">
                                {section.subsections.find(
                                  (subsection) =>
                                    subsection.id === component.subsectionId,
                                )?.title || "Untitled subsection"}
                              </div>
                              {section.subsections.find(
                                (subsection) =>
                                  subsection.id === component.subsectionId,
                              )?.note && (
                                <div className="text-xs italic text-purple-800">
                                  {
                                    section.subsections.find(
                                      (subsection) =>
                                        subsection.id ===
                                        component.subsectionId,
                                    ).note
                                  }
                                </div>
                              )}
                            </div>
                          )}
                        <div
                          id={`component-${component.id}`}
                          className="border-4 border-black p-4 rounded-lg text-black "
                        >
                          {/* Show numbering live */}
                          <div className="flex items-start gap-4">
                            <div className="w-8 text-right pt-2">
                              {getQuestionNumber(section, sectionIdx, index)}
                            </div>
                            <div className="flex-1">
                              <textarea
                                id={component.id}
                                className="w-full p-2 rounded-md border-2 mb-4"
                                onInput={(e) => adjustHeight(e, component.id)}
                                value={component.text}
                                placeholder="Enter your question here ..."
                              ></textarea>

                              <div className="flex gap-2 mb-4">
                                <button
                                  title="Multiple-Choices"
                                  style={{ alignItems: "center" }}
                                  className="w-10 h-6 bg-white rounded hover:bg-gray-200 border flex justify-center  text-sm"
                                  onClick={(e) =>
                                    toggleMultipleChoices(e, component.id)
                                  }
                                >
                                  MC
                                </button>

                                <button
                                  title="Open - Answer"
                                  style={{ alignItems: "center" }}
                                  className="w-10 h-6  flex justify-center    bg-white rounded hover:bg-gray-200 border text-sm"
                                  onClick={(e) =>
                                    toggleOpenAnswer(e, component.id)
                                  }
                                >
                                  OA
                                </button>

                                <button
                                  title="True or False"
                                  style={{ alignItems: "center" }}
                                  className="w-10 h-6   flex justify-center       bg-white rounded hover:bg-gray-200 border text-sm"
                                  onClick={(e) =>
                                    toggleBooleans(e, component.id)
                                  }
                                >
                                  T/F
                                </button>
                                <button
                                  title="Check boxes"
                                  style={{ alignItems: "center" }}
                                  className="w-10 h-6   flex justify-center       bg-white rounded hover:bg-gray-200 border text-sm"
                                  onClick={(e) =>
                                    toggleCheckboxes(e, component.id)
                                  }
                                >
                                  CB
                                </button>

                                <button
                                  title="Add / Remove Sub-question"
                                  style={{ alignItems: "center" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleSubQuestion(component.id);
                                  }}
                                  className="w-28 h-6 flex justify-center     bg-white rounded hover:bg-gray-200 border text-sm"
                                >
                                  {component.subQuestion
                                    ? "Remove SubQ"
                                    : "Add SubQ"}
                                </button>

                                <button
                                  type="button"
                                  title="Delete Question"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    setQuestionToDelete(component.id);
                                    setShowDeleteConfirm(true);
                                  }}
                                  className="ml-auto"
                                >
                                  <img
                                    title="DELETE QUESTION"
                                    src="/bin.png"
                                    alt="Delete"
                                    className="w-6 h-6 rounded-sm hover:bg-red-600"
                                  />
                                </button>
                              </div>

                              {/* Open Answer description */}
                              {component.openAnswer && (
                                <div
                                  id="openAnswerInput"
                                  className="w-full flex items-center justify-center mt-4"
                                >
                                  <div
                                    className="italic bg-slate-200 flex items-center justify-center"
                                    style={{
                                      width: "80%",
                                      textAlign: "center",
                                    }}
                                  >
                                    An empty textarea will be presented to the
                                    respondent that takes any kind of input
                                  </div>
                                </div>
                              )}

                              {/* Booleans (T/F) */}
                              {component.booleans && (
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-gray-700 font-semibold">
                                    Correct Answer:
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCorrectAnswer(component.id, true);
                                    }}
                                    className={`px-4 py-1 rounded ${component.correctAnswer === true ? "bg-green-500 text-white" : "bg-white border border-gray-400"}`}
                                  >
                                    True
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCorrectAnswer(component.id, false);
                                    }}
                                    className={`px-4 py-1 rounded ${component.correctAnswer === false ? "bg-red-500 text-white" : "bg-white border border-gray-400"}`}
                                  >
                                    False
                                  </button>
                                </div>
                              )}
                              {/* Checkboxes*/}

                              {component.checkboxes && (
                                <div className="mt-3 space-y-3">
                                  <div className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700">
                                    <span>Checkbox options</span>
                                    <span className="text-xs text-gray-500">
                                      Max 50
                                    </span>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        addCheckboxChoice(component.id)
                                      }
                                      className="rounded border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-100"
                                    >
                                      Add option
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) =>
                                        toggleRatingMode(e, component.id)
                                      }
                                      className="rounded border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-100"
                                    >
                                      {component.ratingMode
                                        ? "Exit rating"
                                        : "Rating mode"}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        updateComponent(
                                          component.id,
                                          (prev) => ({
                                            otherOption: !prev.otherOption,
                                          }),
                                        )
                                      }
                                      className="rounded border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-100"
                                    >
                                      {component.otherOption
                                        ? "Remove Other"
                                        : "Add Other"}
                                    </button>
                                  </div>

                                  {component.ratingMode && (
                                    <p className="text-xs text-gray-600">
                                      1 Strongly Disagree | 2 Disagree | 3
                                      Neutral | 4 Agree | 5 Strongly Agree
                                    </p>
                                  )}

                                  <div
                                    className={`grid gap-3 ${component.ratingMode ? "grid-cols-5" : "grid-cols-2"}`}
                                  >
                                    {component.choices.map((choice, idx) => {
                                      const isCorrect =
                                        Array.isArray(
                                          component.correctAnswer,
                                        ) &&
                                        component.correctAnswer.includes(
                                          choice,
                                        );
                                      return (
                                        <div
                                          key={`${component.id}-check-${idx}`}
                                          className={`flex items-center gap-2 p-2 rounded border ${isCorrect ? "bg-green-100 border-green-400" : "bg-white border-gray-300"}`}
                                        >
                                          <Checkbox
                                            checked={isCorrect}
                                            onChange={(e) =>
                                              toggleCheckboxCorrectAnswer(
                                                component.id,
                                                choice,
                                                e.target.checked,
                                              )
                                            }
                                          />
                                          {component.ratingMode ? (
                                            <span className="flex h-8 min-w-8 items-center justify-center rounded border border-gray-300 bg-gray-50 px-2 text-sm font-semibold text-gray-700">
                                              {idx + 1}
                                            </span>
                                          ) : (
                                            <Input
                                              ref={(node) => {
                                                if (node) {
                                                  inputRefs.current[
                                                    `${component.id}-${idx}`
                                                  ] = node.input || node;
                                                }
                                              }}
                                              value={choice}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  component.id,
                                                  idx,
                                                  e.target.value,
                                                )
                                              }
                                              onKeyDown={(e) =>
                                                handleKeyPress(
                                                  e,
                                                  component.id,
                                                  idx,
                                                )
                                              }
                                              placeholder={`Option ${idx + 1}`}
                                              className="flex-1"
                                            />
                                          )}
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              removeChoice(component.id, idx);
                                            }}
                                            className="w-8 h-8 rounded hover:opacity-80 transition"
                                          >
                                            <img
                                              src="/bin.png"
                                              alt="Delete"
                                              className="w-full h-full object-contain"
                                            />
                                          </button>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {component.otherOption && (
                                    <div className="rounded border border-dashed border-gray-400 bg-white p-3">
                                      <div className="mb-2 text-sm font-medium text-gray-700">
                                        Other (respondent can type their own
                                        answer)
                                      </div>
                                      <TextArea
                                        value={component.otherValue || ""}
                                        onChange={(e) =>
                                          updateComponent(component.id, {
                                            otherValue: e.target.value,
                                          })
                                        }
                                        placeholder="Other option label (optional)"
                                        autoSize={{ minRows: 2, maxRows: 4 }}
                                      />
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Multiple Choice */}
                              {component.showMultipleChoice && (
                                <div
                                  id="multipleChoiceContainer"
                                  className="grid grid-cols-2 gap-4"
                                >
                                  {component.choices.map((choice, idx) => (
                                    <div
                                      key={`${component.id}-${idx}`}
                                      className={`flex gap-2 items-center p-2 rounded cursor-pointer ${component.correctAnswer === choice ? "bg-green-600 border-black" : "bg-white border-black"}`}
                                      onDoubleClick={() =>
                                        setCorrectAnswer(component.id, choice)
                                      }
                                    >
                                      <TextArea
                                        ref={(el) => {
                                          if (
                                            el &&
                                            el.resizableTextArea?.textArea
                                          ) {
                                            inputRefs.current[
                                              `${component.id}-${idx}`
                                            ] = el.resizableTextArea.textArea;
                                          }
                                        }}
                                        value={choice}
                                        onChange={(e) =>
                                          handleInputChange(
                                            component.id,
                                            idx,
                                            e.target.value,
                                          )
                                        }
                                        onKeyDown={(e) =>
                                          handleKeyPress(e, component.id, idx)
                                        }
                                        placeholder={`Choice ${idx + 1}`}
                                        autoSize={{ minRows: 1, maxRows: 3 }}
                                        className="flex-1 p-2 rounded-md resize-none overflow-hidden text-gray-900"
                                      />
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          removeChoice(component.id, idx);
                                        }}
                                        className="w-8 h-8 rounded hover:opacity-80 transition"
                                      >
                                        <img
                                          src="/bin.png"
                                          alt="Delete"
                                          className="w-full h-full object-contain"
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* --- SUBQUESTION SECTION --- */}
                              {component.subQuestion && (
                                <div className="border-t-4 border-black mt-6 pt-4">
                                  <textarea
                                    className="w-full p-2 rounded-md border-2 mb-4"
                                    value={component.subQuestion.text}
                                    onInput={(e) =>
                                      updateComponent(component.id, (prev) => ({
                                        subQuestion: {
                                          ...prev.subQuestion,
                                          text: e.target.value,
                                        },
                                      }))
                                    }
                                    placeholder="Enter sub-question here..."
                                  ></textarea>

                                  <div className="flex gap-2 mb-4">
                                    <button
                                      title="Multiple-Choices"
                                      style={{ alignItems: "center" }}
                                      className="w-10 h-6 bg-white rounded flex justify-center  hover:bg-gray-200 border text-sm"
                                      onClick={(e) =>
                                        toggleMultipleChoices(
                                          e,
                                          component.id,
                                          true,
                                        )
                                      }
                                    >
                                      MC
                                    </button>

                                    <button
                                      title="Open - Answer"
                                      style={{ alignItems: "center" }}
                                      className="w-10 h-6 bg-white    flex justify-center   rounded hover:bg-gray-200 border text-sm"
                                      onClick={(e) =>
                                        toggleOpenAnswer(e, component.id, true)
                                      }
                                    >
                                      OA
                                    </button>

                                    <button
                                      title="True or False"
                                      style={{ alignItems: "center" }}
                                      className="w-10 h-6     flex justify-center  bg-white rounded hover:bg-gray-200 border text-sm"
                                      onClick={(e) =>
                                        toggleBooleans(e, component.id, true)
                                      }
                                    >
                                      T/F
                                    </button>

                                    <button
                                      type="button"
                                      title="Rating scale"
                                      className="h-6 rounded border bg-white px-2 text-sm hover:bg-gray-200"
                                      onClick={(e) =>
                                        toggleRatingMode(e, component.id, true)
                                      }
                                    >
                                      {component.subQuestion.ratingMode
                                        ? "Exit rating"
                                        : "Rating"}
                                    </button>

                                    <button
                                      title="Delete Sub-question"
                                      style={{ alignItems: "center" }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        updateComponent(component.id, {
                                          subQuestion: null,
                                        });
                                      }}
                                      className="ml-auto"
                                    >
                                      <img
                                        src="/bin.png"
                                        alt="Delete SubQ"
                                        className="w-6 h-6 rounded-sm hover:bg-red-600"
                                      />
                                    </button>
                                  </div>

                                  {/* Sub-question Open Answer */}
                                  {component.subQuestion.openAnswer && (
                                    <div className="italic bg-slate-200 p-2 text-center rounded">
                                      An empty textarea will be shown to the
                                      respondent for free-form input.
                                    </div>
                                  )}

                                  {/* Sub-question Booleans */}
                                  {component.subQuestion.booleans && (
                                    <div className="flex items-center gap-4 mt-2">
                                      <span className="text-gray-700 font-semibold">
                                        Correct Answer:
                                      </span>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setCorrectAnswer(
                                            component.id,
                                            true,
                                            true,
                                          );
                                        }}
                                        className={`px-4 py-1 rounded ${
                                          component.subQuestion
                                            .correctAnswer === true
                                            ? "bg-green-500 text-white"
                                            : "bg-white border border-gray-400"
                                        }`}
                                      >
                                        True
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setCorrectAnswer(
                                            component.id,
                                            false,
                                            true,
                                          );
                                        }}
                                        className={`px-4 py-1 rounded ${
                                          component.subQuestion
                                            .correctAnswer === false
                                            ? "bg-red-500 text-white"
                                            : "bg-white border border-gray-400"
                                        }`}
                                      >
                                        False
                                      </button>
                                    </div>
                                  )}

                                  {/* Sub-question Multiple Choice */}
                                  {component.subQuestion.showMultipleChoice && (
                                    <div
                                      className={`grid gap-4 mt-4 ${component.subQuestion.ratingMode ? "grid-cols-5" : "grid-cols-2"}`}
                                    >
                                      {component.subQuestion.choices.map(
                                        (choice, sidx) => (
                                          <div
                                            key={`${component.id}-sub-${sidx}`}
                                            className={`flex gap-2 items-center p-2 rounded cursor-pointer ${
                                              component.subQuestion
                                                .correctAnswer === choice
                                                ? "bg-green-600 border-black"
                                                : "bg-white border-black"
                                            }`}
                                            onDoubleClick={() =>
                                              setCorrectAnswer(
                                                component.id,
                                                choice,
                                                true,
                                              )
                                            }
                                          >
                                            <TextArea
                                              ref={(el) => {
                                                if (
                                                  el &&
                                                  el.resizableTextArea?.textArea
                                                ) {
                                                  subInputRefs.current[
                                                    `${component.id}-${sidx}`
                                                  ] =
                                                    el.resizableTextArea.textArea;
                                                }
                                              }}
                                              value={choice}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  component.id,
                                                  sidx,
                                                  e.target.value,
                                                  true,
                                                )
                                              }
                                              onKeyDown={(e) =>
                                                handleKeyPress(
                                                  e,
                                                  component.id,
                                                  sidx,
                                                  true,
                                                )
                                              }
                                              placeholder={`Choice ${sidx + 1}`}
                                              autoSize={{
                                                minRows: 1,
                                                maxRows: 3,
                                              }}
                                              className="flex-1 p-2 rounded-md resize-none overflow-hidden text-gray-900"
                                            />

                                            <button
                                              onClick={(e) => {
                                                e.preventDefault();
                                                removeChoice(
                                                  component.id,
                                                  sidx,
                                                  true,
                                                );
                                              }}
                                              className="w-8 h-8 rounded hover:opacity-80 transition"
                                            >
                                              <img
                                                src="/bin.png"
                                                alt="Delete"
                                                className="w-6 h-6"
                                              />
                                            </button>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}

                                  {component.subQuestion.checkboxes && (
                                    <div className="mt-3 space-y-3">
                                      <div className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700">
                                        <span>Checkbox options</span>
                                        <span className="text-xs text-gray-500">
                                          Max 50
                                        </span>
                                      </div>

                                      <div className="flex flex-wrap gap-2">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            addCheckboxChoice(
                                              component.id,
                                              true,
                                            )
                                          }
                                          className="rounded border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-100"
                                        >
                                          Add option
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateComponent(
                                              component.id,
                                              (prev) => ({
                                                subQuestion: {
                                                  ...prev.subQuestion,
                                                  otherOption:
                                                    !prev.subQuestion
                                                      ?.otherOption,
                                                },
                                              }),
                                            )
                                          }
                                          className="rounded border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-100"
                                        >
                                          {component.subQuestion.otherOption
                                            ? "Remove Other"
                                            : "Add Other"}
                                        </button>
                                      </div>

                                      <div
                                        className={`grid gap-3 ${component.subQuestion.ratingMode ? "grid-cols-5" : "grid-cols-2"}`}
                                      >
                                        {component.subQuestion.choices.map(
                                          (choice, sidx) => {
                                            const isCorrect =
                                              Array.isArray(
                                                component.subQuestion
                                                  .correctAnswer,
                                              ) &&
                                              component.subQuestion.correctAnswer.includes(
                                                choice,
                                              );
                                            return (
                                              <div
                                                key={`${component.id}-sub-check-${sidx}`}
                                                className={`flex items-center gap-2 p-2 rounded border ${isCorrect ? "bg-green-100 border-green-400" : "bg-white border-gray-300"}`}
                                              >
                                                <Checkbox
                                                  checked={isCorrect}
                                                  onChange={(e) =>
                                                    toggleCheckboxCorrectAnswer(
                                                      component.id,
                                                      choice,
                                                      e.target.checked,
                                                      true,
                                                    )
                                                  }
                                                />
                                                {component.subQuestion
                                                  .ratingMode ? (
                                                  <span className="flex h-8 min-w-8 items-center justify-center rounded border border-gray-300 bg-gray-50 px-2 text-sm font-semibold text-gray-700">
                                                    {sidx + 1}
                                                  </span>
                                                ) : (
                                                  <Input
                                                    ref={(node) => {
                                                      if (node) {
                                                        subInputRefs.current[
                                                          `${component.id}-${sidx}`
                                                        ] = node.input || node;
                                                      }
                                                    }}
                                                    value={choice}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        component.id,
                                                        sidx,
                                                        e.target.value,
                                                        true,
                                                      )
                                                    }
                                                    onKeyDown={(e) =>
                                                      handleKeyPress(
                                                        e,
                                                        component.id,
                                                        sidx,
                                                        true,
                                                      )
                                                    }
                                                    placeholder={`Option ${sidx + 1}`}
                                                    className="flex-1"
                                                  />
                                                )}
                                                <button
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    removeChoice(
                                                      component.id,
                                                      sidx,
                                                      true,
                                                    );
                                                  }}
                                                  className="w-8 h-8 rounded hover:opacity-80 transition"
                                                >
                                                  <img
                                                    src="/bin.png"
                                                    alt="Delete"
                                                    className="w-full h-full object-contain"
                                                  />
                                                </button>
                                              </div>
                                            );
                                          },
                                        )}
                                      </div>

                                      {component.subQuestion.otherOption && (
                                        <div className="rounded border border-dashed border-gray-400 bg-white p-3">
                                          <div className="mb-2 text-sm font-medium text-gray-700">
                                            Other (respondent can type their own
                                            answer)
                                          </div>
                                          <TextArea
                                            value={
                                              component.subQuestion
                                                .otherValue || ""
                                            }
                                            onChange={(e) =>
                                              updateComponent(
                                                component.id,
                                                (prev) => ({
                                                  subQuestion: {
                                                    ...prev.subQuestion,
                                                    otherValue: e.target.value,
                                                  },
                                                }),
                                              )
                                            }
                                            placeholder="Other option label (optional)"
                                            autoSize={{
                                              minRows: 2,
                                              maxRows: 4,
                                            }}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </form>

          {/* Add Section Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                const newSection = createEmptySection();
                setSections((prev) => [...prev, newSection]);
                setActiveSectionId(newSection.id);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
            >
              + Add New Section
            </button>
          </div>
        </div>
        {previewData && (
          <div
            className={`absolute h-auto border border-black shadow-2xl transform hover:translate-y-2 transition-colors duration-300 ease-in-out z-10 text-black p-4 rounded ${darkMode ? "bg-[rgb(159,127,127)]  text-white" : "bg-gray-100 text-black"}`}
            style={{ width: "80%", top: "95px", left: "163px" }}
          >
            <h2 className="font-bold mb-4  ml-4">Preview</h2>

            <div className="mb-5 rounded border border-blue-200 bg-blue-50 p-3">
              {sections.map((section, sectionIdx) => (
                <div
                  key={`preview-section-${section.id}`}
                  className="mb-3 last:mb-0"
                >
                  <div className="font-semibold text-blue-900">
                    Section {sectionIdx + 1}: {section.title || "Untitled"}
                  </div>
                  {section.showNote && section.note && (
                    <div className="text-sm italic text-blue-800">
                      {section.note}
                    </div>
                  )}
                  {(section.subsections || []).map((subsection) => (
                    <div
                      key={`preview-subsection-${subsection.id}`}
                      className="ml-4 text-sm text-purple-900"
                    >
                      <strong>
                        {subsection.title || "Untitled subsection"}
                      </strong>
                      {subsection.showNote && subsection.note
                        ? `: ${subsection.note}`
                        : ""}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {previewData.map((item, idx) => (
              <div key={`preview-${idx}`} className="mb-4 ml-4">
                <p>
                  <strong>{numberedQuestions ? `Q${idx + 1}: ` : "Q: "}</strong>
                  <span style={{ marginLeft: "10px" }}>{item.question}</span>
                </p>

                {item.answerType === "Multiple Choice" && item.choices ? (
                  <ul className="pl-4 list-none">
                    {item.choices.map((choice, i) => (
                      <li
                        key={i}
                        className={`relative pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8 ${item.correctAnswer === choice ? "bg-yellow-300 text-black font-semibold" : ""}`}
                        style={{
                          width: "calc(50% - 1rem)",
                          boxSizing: "border-box",
                        }}
                      >
                        {choice}
                      </li>
                    ))}
                  </ul>
                ) : item.answerType === "Checkboxes" && item.choices ? (
                  <ul className="grid grid-cols-5 gap-2">
                    {item.choices.map((choice, i) => (
                      <li
                        key={i}
                        className="rounded border border-neutral-950 p-2 text-center"
                      >
                        <span className="block text-xs">
                          {item.ratingMode ? i + 1 : choice}
                        </span>
                        <span>
                          {item.correctAnswer?.includes?.(choice)
                            ? "Selected"
                            : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : item.answerType === "Boolean" ? (
                  <div
                    className="pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8"
                    style={{ marginLeft: "19px", width: "150px" }}
                  >
                    <span className="font-semibold text-blue-700">
                      {item.correctAnswer === true ? "True" : "False"}
                    </span>
                  </div>
                ) : (
                  <div
                    className="relative pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8"
                    style={{ height: "50px" }}
                  ></div>
                )}

                {/* preview subquestion */}
                {item.subQuestion && (
                  <div className="mt-3 ml-6 p-2 border-l-2 border-dashed">
                    <p>
                      <strong>Sub:</strong> {item.subQuestion.question}
                    </p>
                    {item.subQuestion.answerType === "Multiple Choice" &&
                    item.subQuestion.choices ? (
                      <ul className="pl-4 list-none">
                        {item.subQuestion.choices.map((choice, i) => (
                          <li
                            key={i}
                            className={`relative pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8 ${item.subQuestion.correctAnswer === choice ? "bg-yellow-300 text-black font-semibold" : ""}`}
                            style={{
                              width: "calc(50% - 1rem)",
                              boxSizing: "border-box",
                            }}
                          >
                            {choice}
                          </li>
                        ))}
                      </ul>
                    ) : item.subQuestion.answerType === "Boolean" ? (
                      <div
                        className="pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8"
                        style={{ width: "150px" }}
                      >
                        <span className="font-semibold text-blue-700">
                          {item.subQuestion.correctAnswer === true
                            ? "True"
                            : "False"}
                        </span>
                      </div>
                    ) : (
                      <div
                        className="relative pt-3 mt-3 mb-2 border border-neutral-950 rounded-md p-2 pl-8"
                        style={{ height: "50px" }}
                      ></div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => setPreviewData(null)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              cloneComponent();
            }}
            className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-100 hover:text-black px-4 py-2 rounded mt-4"
          >
            New Question
          </button>

          <button
            title="A clear view of your questions and answers"
            onClick={compilePreviewData}
            className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-100 hover:text-black px-4 py-2 rounded mt-4"
          >
            Preview
          </button>

          <button
            title="Save to database"
            disabled={isSaving}
            onClick={saveToDataBase}
            className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-100 hover:text-black px-4 py-2 rounded mt-4"
          >
            {isSaving ? "Saving..." : "Save"}
          </button>

          <button
            title="Share Survey and Get Responses"
            onClick={(e) => {
              e.preventDefault();
              setShowSurveySelection(false);
              setShare(true);
            }}
            className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-100 hover:text-black px-4 py-2 rounded mt-4"
          >
            Share
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setShare(false);
              setShowSurveySelection(true);
            }}
            className="bg-white text-gray-700 border border-gray-400 hover:bg-gray-100 hover:text-black px-4 py-2 rounded mt-4"
          >
            Retrieve
          </button>
        </div>

        {/* Survey selection modal */}
        {showSurveySelection && (
          <div className="modal border border-gray-200">
            <h3 className=" ml-4 ">SELECT A SURVEY</h3>
            <ul className="grid grid-cols-3 gap-4">
              {userSurveys.map((survey, idx) => (
                <li key={`${survey.id}-${idx}`} className="m-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSurveySelection(survey.id);
                    }}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-100 hover:text-black"
                  >
                    {survey.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  setShowSurveySelection(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Share modal */}
        {share && (
          <div className="sharing-section">
            <button
              className="m-4 p-1 border-2 rounded-md"

              style={{ backgroundColor: "chartreuse" }}
              onClick={async (e) => {
                e.preventDefault();
                if (!selectedSurvey || !selectedSurvey.id) {
                  toast.error("No survey selected!");
                  return;
                }
                try {
                  const docRef = doc(db, "surveys", selectedSurvey.id);
                  const docSnap = await getDoc(docRef);
                  if (!docSnap.exists()) {
                    toast.error("Survey not found");
                    return;
                  }
                  const data = docSnap.data();
                  if (!data.approved) {
                    toast.error(
                      "This Survey has not been approved yet. Check in 5-10 minutes. Thank You",
                    );
                    return;
                  }
                  const baseUrl = window.location.origin;
                  const responseUrl = `${baseUrl}/survpages/responseCol?surveyId=${selectedSurvey.id}`;
                  setSurveyUrl(responseUrl);
                  navigator.clipboard.writeText(responseUrl);
                  toast.success("Survey link copied to clipboard!");
                } catch (error) {
                  console.error("Error checking approval status:", error);
                  toast.error("Failed to copy survey link.");
                }
              }}
            >
              Copy Survey Link
            </button>

            <button
              onClick={async (e) => {
                e.preventDefault();
                if (!selectedSurvey || !selectedSurvey.id) {
                  toast.error("No survey selected!");
                  return;
                }
                try {
                  const docRef = doc(db, "surveys", selectedSurvey.id);
                  const docSnap = await getDoc(docRef);

                  if (!docSnap.exists()) {
                    toast.error("Survey not found");
                    return;
                  }

                  const data = docSnap.data();
                  console.log(data);
                  if (!data.approved) {
                    toast.error(
                      "This Survey has not been approved yet. Check in 5-10 minutes. Thank You",
                    );
                    return;
                  }

                  const baseUrl = window.location.origin;
                  const responseUrl = `${baseUrl}/survpages/responseCol?surveyId=${selectedSurvey.id}`;
                  setSurveyUrl(responseUrl);
                  setShowEmbedCode(true);
                } catch (error) {
                  console.error("Error checking approval status:", error);
                  toast.error("Failed to get embed code.");
                }
              }}
              className="ml-4 border-2 p-1 rounded-md"
              style={{ backgroundColor: "blueviolet" }}
            >
              Get Embed Code
            </button>

            <button
              type="button"
              style={{ backgroundColor: "coral" }}
              className="ml-4 border-2 p-1 rounded-md"
              onClick={async (e) => {
                e.preventDefault();
                if (!selectedSurvey || !selectedSurvey.id) {
                  toast.error("No survey selected!");
                  return;
                }
                try {
                  const docRef = doc(db, "surveys", selectedSurvey.id);
                  const docSnap = await getDoc(docRef);
                  if (!docSnap.exists()) {
                    toast.error("Survey not found");
                    return;
                  }
                  const data = docSnap.data();
                  if (!data.approved) {
                    toast.error(
                      "This Survey has not been approved yet. Check in 5-10 minutes. Thank You",
                    );
                    return;
                  }
                  setEmails((prev) => !prev);
                } catch (error) {
                  console.error("Error checking approval status:", error);
                  toast.error("Failed to show email input.");
                }
              }}
            >
              Share Via Email
            </button>

            {showEmbedCode && (
              <div className="modal">
                <div className="flex justify-center">
                  <iframe
                    src={`${surveyUrl}`}
                    width="800"
                    height="800"
                  ></iframe>
                </div>
                <CopyToClipboard
                  text={`<iframe src="${surveyUrl}" width="600" height="800"></iframe>`}
                >
                  <button
                    style={{ backgroundColor: "blueviolet" }}
                    className="mt-10 mb-6  p-2 rounded-md border-2 border-black"
                  >
                    Copy Embed Code
                  </button>
                </CopyToClipboard>
              </div>
            )}

            {emails && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter recipient emails (max 10)
                </label>
                <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md shadow-sm">
                  {emailList.map((email, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {email}
                      <button
                        type="button"
                        className="text-red-600 hover:text-red-800 font-bold ml-1"
                        onClick={() => removeEmail(email)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type email and press Enter"
                    className="flex-grow p-1 outline-none min-w-[150px]"
                  />
                </div>

                <button
                  type="button"
                  className="mt-4 border-2 p-1 rounded-md"
                  onClick={async () => {
                    if (emailList.length === 0) {
                      toast.error("Please enter at least one email.");
                      return;
                    }
                    if (!selectedSurvey?.id) {
                      toast.error("Survey ID missing. Cannot generate link.");
                      return;
                    }
                    const surveyUrlLocal = `${window.location.origin}/survpages/responseCol?surveyId=${selectedSurvey.id}`;
                    try {
                      const response = await fetch("/api/sendsurvema", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          emails: emailList,
                          surveyLink: surveyUrlLocal,
                          title: selectedSurvey?.title || "Survey",
                        }),
                      });
                      if (response.ok) {
                        toast.success("Survey sent successfully!");
                      } else {
                        toast.error("Failed to send emails.");
                      }
                    } catch (err) {
                      console.error(err);
                      toast.error("An error occurred while sending emails.");
                    }
                  }}
                >
                  Send via Email
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setShare(false);
              }}
              className="ml-6"
            >
              <img
                title="Close Share Options"
                src="/bin.png"
                alt="Delete"
                className="w-6 h-6 rounded-sm hover:bg-red-600"
              />
            </button>
          </div>
        )}
        {showDeleteConfirm &&
          questionToDelete &&
          (() => {
            const questionToDeleteData = components.find(
              (component) =>
                normalizeQuestionId(component.id) ===
                normalizeQuestionId(questionToDelete),
            );

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="w-[90%] max-w-md rounded-xl bg-white p-6 shadow-2xl">
                  <h2 className="mb-3 text-lg font-semibold text-gray-900">
                    Delete Question?
                  </h2>

                  <p className="mb-2 text-sm text-gray-500">
                    Are you sure you want to delete this question?
                  </p>

                  <div className="mb-5 rounded-lg border border-gray-300 bg-gray-50 p-3">
                    <p className="text-sm font-medium text-gray-800">
                      {questionToDeleteData?.text?.trim()
                        ? questionToDeleteData.text
                        : "Untitled question"}
                    </p>
                  </div>

                  <p className="mb-5 text-xs text-red-600">
                    This will also remove any linked sub-question.
                  </p>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowDeleteConfirm(false);
                        setQuestionToDelete(null);
                      }}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        const idToDelete =
                          normalizeQuestionId(questionToDelete);

                        setShowDeleteConfirm(false);
                        setQuestionToDelete(null);

                        const deleted = await removeComponent(idToDelete);

                        if (!deleted) {
                          console.error(
                            "Deletion failed for question:",
                            idToDelete,
                          );
                        }
                      }}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </PrivateRoute>
  );
};

export default Survey;
