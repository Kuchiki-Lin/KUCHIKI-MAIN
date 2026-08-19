import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const querySnapshot = await getDocs(collection(db, "researchRequests"));
      setRequests(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin: Research Requests</h1>
      <ul className="space-y-4">
        {requests.map((req) => (
          <li key={req.id} className="border p-4 rounded-lg">
            <p><strong>Topic:</strong> {req.topic}</p>
            <p><strong>Description:</strong> {req.description}</p>
            <p><strong>Urgency:</strong> {req.urgency}</p>
            <p><strong>Contact:</strong> {req.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
