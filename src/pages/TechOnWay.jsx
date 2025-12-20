import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TechOnWay() {
  const { bookingId } = useParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const go = async () => {
      try {
        await updateDoc(doc(db, "bookings", bookingId), {
          status: "On The Way",
          onTheWayAt: new Date().toISOString(),
        });
        setStatus("done");
      } catch {
        setStatus("error");
      }
    };

    go();
  }, [bookingId]);

  if (status === "processing")
    return <div className="p-6 text-center">Updating…</div>;

  if (status === "error")
    return <div className="p-6 text-center text-red-600">Failed</div>;

  return <div className="p-6 text-center">🚗 Technician On The Way</div>;
}
