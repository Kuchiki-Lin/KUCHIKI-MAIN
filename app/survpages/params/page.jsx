"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, Modal, Switch } from "antd";
import PrivateRoute from "@/app/privateRoute";
import { useSurveyContext } from "@/app/survpages/survcont.jsx";
import { useDarkMode } from "@/app/Modules/darkmodecont.js";

import { ShieldCheck, User, EyeOff } from "lucide-react";
import { Card, Form, Input, Button, Typography, Space, message } from "antd";
import CountryStateSelector from "@/app/Modules/country";
import TextArea from "antd/es/input/TextArea";

const { Title, Text } = Typography;

export default function SurvParameters() {
  const router = useRouter();
  const { darkMode } = useDarkMode();
  const { surveyData, setSurveyData } = useSurveyContext();
  const { title, targetAudience, expectedResponses, anonymous } = surveyData;
  const [objectivesOpen, setObjectivesOpen] = useState(false);
  const [showSecondaryObjectives, setShowSecondaryObjectives] = useState(
    Boolean(surveyData.objectives?.secondary),
  );
  const [showSpecificObjectives, setShowSpecificObjectives] = useState(
    (surveyData.objectives?.specific || []).length > 0,
  );
  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const handleAnonChoice = (choice) => {
    setSurveyData((prev) => ({ ...prev, anonymous: choice }));
  };

  const surveyVariables = (event) => {
    event.preventDefault();
    if (!title) return message.error("Please enter a survey title");
    router.push("/survpages/survey");
  };
  const addSpecificObjective = () => {
    setSurveyData((prev) => ({
      ...prev,
      objectives: {
        ...prev.objectives,
        specific: [...prev.objectives.specific, ""],
      },
    }));
  };

  const updateSpecificObjective = (index, value) => {
    setSurveyData((prev) => {
      const updated = [...prev.objectives.specific];
      updated[index] = value;

      return {
        ...prev,
        objectives: {
          ...prev.objectives,
          specific: updated,
        },
      };
    });
  };

  const removeSpecificObjective = (index) => {
    setSurveyData((prev) => ({
      ...prev,
      objectives: {
        ...prev.objectives,
        specific: prev.objectives.specific.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <PrivateRoute>
      <main
        className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Card
          title={
            <Title
              level={3}
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
              Survey Setup
            </Title>
          }
          className={`w-full max-w-2xl rounded-2xl shadow-lg ${
            darkMode ? " text-white border" : "bg-white text-black"
          }`}
        >
          <Form layout="vertical" onSubmitCapture={surveyVariables}>
            {/* Title */}
            <Form.Item
              label={
                <Text
                  strong
                  className={`${darkMode ? "text-white" : "text-black"}`}
                  style={{ fontSize: 18 }}
                >
                  Survey Title
                </Text>
              }
              required
            >
              <Input
                value={title}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, title: e.target.value })
                }
                onKeyDown={handleKeyDown}
                placeholder="Enter your survey title"
                className={`${darkMode ? "bg-black text-white border-gray-600" : ""}`}
                style={{
                  width: "100%",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  minHeight: "48px",
                  lineHeight: "1.5",
                }}
              />
            </Form.Item>
            <div className="mb-4">
              <Text
                strong
                className={darkMode ? "text-white" : "text-gray-900"}
                style={{ fontSize: 18 }}
              >
                Objectives
              </Text>
              <div className="mt-2">
                <Button
                  type="default"
                  onClick={() => setObjectivesOpen(true)}
                  className="w-full text-left"
                  style={{
                    height: "auto",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: darkMode ? "#111" : "#f7f7f7",
                    color: darkMode ? "#fff" : "#111",
                    borderColor: darkMode ? "#3a3a3a" : "#d9d9d9",
                  }}
                >
                  {surveyData.objectives?.main
                    ? "Edit objectives"
                    : "Add objectives"}
                </Button>
              </div>
            </div>

            <Modal
              title={
                <span className={darkMode ? "text-white" : "text-gray-900"}>
                  Survey Objectives
                </span>
              }
              open={objectivesOpen}
              onCancel={() => setObjectivesOpen(false)}
              footer={[
                <Button key="close" onClick={() => setObjectivesOpen(false)}>
                  Close
                </Button>,
              ]}
              centered
              width={720}
            >
              <div className="space-y-5 pb-2">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Text
                      strong
                      className={darkMode ? "text-white" : "text-gray-900"}
                    >
                      Main Objective
                    </Text>
                    <span className="text-xs text-red-500">Required</span>
                  </div>
                  <TextArea
                    value={surveyData.objectives?.main || ""}
                    onChange={(e) =>
                      setSurveyData((prev) => ({
                        ...prev,
                        objectives: {
                          ...prev.objectives,
                          main: e.target.value,
                        },
                      }))
                    }
                    placeholder="What is the main purpose of this survey?"
                    rows={4}
                    className={
                      darkMode
                        ? "bg-black text-white border-gray-700 placeholder-gray-600"
                        : "border-gray-300"
                    }
                  />
                </div>

                <div
                  className={`rounded-xl border p-3 ${darkMode ? "border-gray-700 bg-[#111111]" : "border-gray-200 bg-gray-50"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div
                        className={
                          darkMode
                            ? "text-white font-medium"
                            : "text-gray-900 font-medium"
                        }
                      >
                        Secondary Objective
                      </div>
                      <div className="text-xs text-gray-500">
                        Optional supporting goal
                      </div>
                    </div>
                    <Switch
                      checked={showSecondaryObjectives}
                      onChange={(checked) => {
                        setShowSecondaryObjectives(checked);
                        if (!checked) {
                          setSurveyData((prev) => ({
                            ...prev,
                            objectives: { ...prev.objectives, secondary: "" },
                          }));
                        }
                      }}
                    />
                  </div>
                  {showSecondaryObjectives && (
                    <div className="mt-3">
                      <TextArea
                        value={surveyData.objectives?.secondary || ""}
                        onChange={(e) =>
                          setSurveyData((prev) => ({
                            ...prev,
                            objectives: {
                              ...prev.objectives,
                              secondary: e.target.value,
                            },
                          }))
                        }
                        placeholder="Enter a secondary objective..."
                        rows={3}
                        className={
                          darkMode
                            ? "bg-black text-white border-gray-700 placeholder-gray-600"
                            : "border-gray-300"
                        }
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`rounded-xl border p-3 ${darkMode ? "border-gray-700 bg-[#111111]" : "border-gray-200 bg-gray-50"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div
                        className={
                          darkMode
                            ? "text-white font-medium"
                            : "text-gray-900 font-medium"
                        }
                      >
                        Specific Objectives
                      </div>
                      <div className="text-xs text-gray-500">
                        Optional measurable goals
                      </div>
                    </div>
                    <Switch
                      checked={showSpecificObjectives}
                      onChange={(checked) => {
                        setShowSpecificObjectives(checked);
                        if (
                          checked &&
                          (!surveyData.objectives?.specific ||
                            surveyData.objectives.specific.length === 0)
                        ) {
                          addSpecificObjective();
                        }
                      }}
                    />
                  </div>

                  {showSpecificObjectives && (
                    <div className="mt-3 space-y-3">
                      {(surveyData.objectives?.specific || []).map(
                        (objective, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span
                              className={`min-w-[26px] text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                            >
                              {index + 1}.
                            </span>
                            <Input
                              value={objective}
                              onChange={(e) =>
                                updateSpecificObjective(index, e.target.value)
                              }
                              placeholder="Specific objective"
                              className={
                                darkMode
                                  ? "bg-black text-white border-gray-700 placeholder-gray-600"
                                  : ""
                              }
                            />
                            <Button
                              danger
                              type="text"
                              onClick={() => removeSpecificObjective(index)}
                            >
                              Remove
                            </Button>
                          </div>
                        ),
                      )}

                      <Button
                        type="dashed"
                        onClick={addSpecificObjective}
                        className="mt-2"
                      >
                        Add objective
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Modal>

            {/* Target Audience */}
            <Form.Item
              label={
                <Text
                  strong
                  style={{ fontSize: 18 }}
                  className={`${darkMode ? "text-white" : "text-black"}`}
                >
                  Target Audience
                </Text>
              }
            >
              <Input
                value={targetAudience}
                onChange={(e) =>
                  setSurveyData({
                    ...surveyData,
                    targetAudience: e.target.value,
                  })
                }
                onKeyDown={handleKeyDown}
                placeholder="e.g. Anime Fans"
                className={`${darkMode ? "bg-black text-white border-gray-600" : ""}`}
              />
            </Form.Item>

            {/* Expected Responses */}
            <Form.Item
              label={
                <Text
                  strong
                  style={{ fontSize: 18 }}
                  className={`${darkMode ? "text-white" : "text-black"}`}
                >
                  Expected Responses
                </Text>
              }
            >
              <Input
                value={expectedResponses}
                onChange={(e) =>
                  setSurveyData({
                    ...surveyData,
                    expectedResponses: e.target.value,
                  })
                }
                onKeyDown={handleKeyDown}
                placeholder="Enter expected number of responses"
                className={`${darkMode ? "black text-white border-gray-600" : ""}`}
              />
            </Form.Item>

            {/* Response Type */}
            <Form.Item
              label={
                <Text
                  strong
                  style={{ fontSize: 18 }}
                  className={`${darkMode ? "text-white" : "text-black"}`}
                >
                  Response Type
                </Text>
              }
            >
              <Space size="middle">
                {/* Anonymous */}
                <Button
                  icon={<ShieldCheck />}
                  onClick={() => handleAnonChoice(true)}
                  style={{
                    backgroundColor:
                      anonymous === true
                        ? "#22c55e"
                        : darkMode
                          ? "#333"
                          : "transparent",
                    color:
                      anonymous === true ? "#fff" : darkMode ? "#ccc" : "#000",
                    borderColor:
                      anonymous === true
                        ? "#16a34a"
                        : darkMode
                          ? "#555"
                          : "#d9d9d9",
                    boxShadow:
                      anonymous === true
                        ? "0 0 12px rgba(34, 197, 94, 0.6)"
                        : "none",
                  }}
                >
                  Anonymous
                </Button>

                {/* Named */}
                <Button
                  icon={<User />}
                  onClick={() => handleAnonChoice(false)}
                  style={{
                    backgroundColor:
                      anonymous === false
                        ? "#22c55e"
                        : darkMode
                          ? "#333"
                          : "transparent",
                    color:
                      anonymous === false ? "#fff" : darkMode ? "#ccc" : "#000",
                    borderColor:
                      anonymous === false
                        ? "#16a34a"
                        : darkMode
                          ? "#555"
                          : "#d9d9d9",
                    boxShadow:
                      anonymous === false
                        ? "0 0 12px rgba(34, 197, 94, 0.6)"
                        : "none",
                  }}
                >
                  Named
                </Button>
              </Space>
            </Form.Item>

            {/* Status Message */}
            {anonymous !== null && (
              <div className="mb-4">
                <Text
                  strong
                  className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}
                >
                  This survey will collect{" "}
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded ${
                      anonymous
                        ? "bg-gray-700 text-white"
                        : "bg-green-500 text-black shadow-md"
                    }`}
                  >
                    {anonymous ? <EyeOff size={16} /> : <User size={16} />}
                    {anonymous ? "ANONYMOUS RESPONSES" : "NAMED RESPONSES"}
                  </span>
                </Text>
              </div>
            )}

            {/* Region Selector */}
            <Form.Item
              label={
                <Text
                  strong
                  className={`border-2 p-4 rounded-md ${darkMode ? "text-white border-white" : "text-black border-black"}`}
                >
                  Fill in case you want to collect responses from a specific
                  region
                </Text>
              }
            >
              <CountryStateSelector darkMode={darkMode} />
            </Form.Item>

            {/* Create Button */}
            <Form.Item>
              <Button
                htmlType="submit"
                block
                size="large"
                className={`font-semibold border-2 rounded-md ${
                  darkMode
                    ? "bg-white text-black border-white hover:bg-gray-300"
                    : "bg-black text-white border-black hover:bg-black"
                }`}
                style={{ fontSize: "20px" }}
              >
                CREATE SURVEY
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </main>
    </PrivateRoute>
  );
}
