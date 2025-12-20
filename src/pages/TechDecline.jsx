import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechDecline() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const decline = async () => {
      try {
        await updateDoc(doc(db, "bookings", bookingId), {
          status: "Declined",
          technicianResponseAt: new Date().toISOString(),
        });
        setStatus("done");
      } catch (e) {
        setStatus("error");
      }
    };

    decline();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Declining job…</div>;

  if (status === "error")
    return (
      <div className="p-6 text-center text-red-600">
        Failed to decline job
      </div>
    );

  return <div className="p-6 text-center">❌ Job Declined</div>;
}
