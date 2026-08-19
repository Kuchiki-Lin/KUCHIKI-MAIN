
import { db } from "@/app/firebaseConfig";
import { collection, addDoc, query, where, getDocs, doc, getDoc, setDoc, limit as limitDocs, } from "firebase/firestore";

export const handleSave = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const { currentUser } = auth;
  console.log(currentUser)
  if (!user) return alert("You must be logged in");

  const payload = {
    title,
    userId: user.uid,
    createdAt: serverTimestamp(),
    questions: questions.filter((q) => q.text || q.image),
  };
  console.log(payload);
  await addDoc(collection(db, "productReviews"), payload);
  alert("Review saved!");
};

export async function fetchSurveyResponses(surveyId) {
  try {
    const q = query(collection(db, "responses"), where("surveyId", "==", surveyId));
    const querySnapshot = await getDocs(q);
    let responses = [];
    querySnapshot.forEach((doc) => {
      responses.push(doc.data()); // Each response is stored as an object
    });

    console.log("Fetched Responses:", responses);
    return responses;
  } catch (error) {
    console.error("Error fetching survey responses:", error);
    return [];
  }
}


export async function saveSurveyData(surveyData) {
  try {
    const docRef = await addDoc(collection(db, "surveys"), surveyData);
    console.log("Survey saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving survey data:", error.message, error.code);
    return null;
  }
}

export async function fetchSurveyByUser(user, limitCount = null) {
  try {
    const q = query(collection(db, "surveys"), where("userId", "==", user));
    const querySnapshot = await getDocs(q);
    const surveys = [];
    querySnapshot.forEach((doc) => {
      surveys.push({ id: doc.id, ...doc.data() });
    });

    surveys.sort((a, b) => {
      const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bTime - aTime;
    });

    if (limitCount) {
      return surveys.slice(0, limitCount);
    }

    return surveys;
  } catch (error) {
    console.error("Error fetching surveys:", error);
    return [];
  }
}



export async function fetchSurveyById(surveyId) {
  try {
    const docRef = doc(db, "surveys", surveyId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return { id: surveyId, ...docSnap.data() };
    } else {
      console.error("No such survey");
      return null;
    }
  } catch (error) {
    console.error("Error fetching survey by ID:", error);
    return null;

  }
}

// utilsfirebase.js

export const fetchProductReviews = async (userId) => {
  const querySnapshot = await getDocs(query(
    collection(db, "productQuestions"),
    where("userId", "==", userId)
  ));

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};



export const fetchProductReviewResponses = async (reviewId) => {
  const q = query(
    collection(db, "productResponses"),
    where("reviewId", "==", reviewId)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};