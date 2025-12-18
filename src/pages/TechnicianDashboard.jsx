import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TechnicianDashboard() {
  const nav = useNavigate();
  const tech = JSON.parse(localStorage.getItem("technician"));
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (!tech) {
      nav("/tech-login");
      return;
    }

    const all = JSON.parse(localStorage.getItem("bookings") || "[]");
    setJobs(all.filter((b) => b.technicianId === tech.id));
  }, []);

  const completeJob = (id) => {
    const all = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updated = all.map((b) =>
      b.id === id ? { ...b, status: "Completed" } : b
    );
    localStorage.setItem("bookings", JSON.stringify(updated));
    setJobs(updated.filter((b) => b.technicianId === tech.id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Welcome, {tech?.name}
      </h2>

      {jobs.map((b) => (
        <div key={b.id} className="bg-white p-4 mb-3 rounded shadow">
          <strong>{b.service}</strong>
          <p>{b.address}</p>
          <p>{b.date}</p>

          {b.status !== "Completed" && (
            <button
              onClick={() => completeJob(b.id)}
              className="mt-2 px-4 py-1 bg-green-600 text-white rounded"
            >
              Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
