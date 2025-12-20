import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechAccept() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const accept = async () => {
      try {
        await updateDoc(doc(db, "bookings", bookingId), {
          status: "Accepted",
          technicianResponseAt: new Date().toISOString(),
        });
        setStatus("done");
      } catch (e) {
        setStatus("error");
      }
    };

    accept();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Accepting job…</div>;

  if (status === "error")
    return (
      <div className="p-6 text-center text-red-600">
        Failed to accept job
      </div>
    );

  return <div className="p-6 text-center">✅ Job Accepted</div>;
}
