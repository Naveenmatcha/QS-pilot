import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechDecline() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const declineJob = async () => {
      try {
        const ref = doc(db, "bookings", bookingId);

        await updateDoc(ref, {
          status: "Declined",
          technicianResponseAt: new Date().toISOString(),
        });

        setStatus("declined");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    declineJob();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Declining job…</div>;

  if (status === "error")
    return (
      <div className="p-6 text-center text-red-600">
        Failed to decline job
      </div>
    );

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-2">❌ Job Declined</h2>
      <p>The admin has been notified.</p>
    </div>
  );
}
