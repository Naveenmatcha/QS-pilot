import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechAccept() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const acceptJob = async () => {
      try {
        const ref = doc(db, "bookings", bookingId);

        await updateDoc(ref, {
          status: "Accepted",
          technicianResponseAt: new Date().toISOString(),
        });

        setStatus("accepted");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    acceptJob();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Accepting job…</div>;

  if (status === "error")
    return (
      <div className="p-6 text-center text-red-600">
        Failed to accept job
      </div>
    );

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-2">✅ Job Accepted</h2>
      <p>You can now proceed to the service location.</p>
    </div>
  );
}
