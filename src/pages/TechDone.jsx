import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechDone() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const complete = async () => {
      try {
        await updateDoc(doc(db, "bookings", bookingId), {
          status: "Completed",
          completedAt: new Date().toISOString(),
        });
        setStatus("done");
      } catch {
        setStatus("error");
      }
    };

    complete();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Updating…</div>;

  if (status === "error")
    return <div className="p-6 text-center text-red-600">Failed</div>;

  return <div className="p-6 text-center">🎉 Job Completed</div>;
}
