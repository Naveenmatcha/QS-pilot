import React, { useEffect, useState } from "react";

/* ✅ LOCAL TECHNICIANS (already initialized via initTechnicians) */
export default function AdminDashboardLocal() {
  const [bookings, setBookings] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(allBookings);

    const techs = JSON.parse(localStorage.getItem("technicians") || "[]");
    setTechnicians(techs);
  }, []);

  /* ✅ ASSIGN TECHNICIAN (CORE LOGIC) */
  const assignTechnician = (bookingId, technician) => {
    const all = JSON.parse(localStorage.getItem("bookings") || "[]");

    const updated = all.map((b) =>
      b.id === bookingId
        ? {
            ...b,
            status: "Assigned",
            technicianId: technician.id,
            technicianName: technician.name,
            technicianRating: technician.rating,
          }
        : b
    );

    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            className="border rounded-lg p-3 mb-3 bg-white shadow"
          >
            <div className="font-semibold">{b.service}</div>
            <div className="text-sm text-gray-600">{b.subService}</div>
            <div className="text-sm">
              Status: <strong>{b.status}</strong>
            </div>

            {/* ✅ TECH ASSIGN DROPDOWN */}
            {b.status === "Pending" && (
              <div className="mt-3">
                <select
                  onChange={(e) => {
                    const tech = technicians.find(
                      (t) => t.id === e.target.value
                    );
                    if (tech) assignTechnician(b.id, tech);
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Assign Technician</option>
                  {technicians.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ⭐ {t.rating}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* ✅ SHOW ASSIGNED TECH (ADMIN VIEW) */}
            {b.technicianName && (
              <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
                👨‍🔧 {b.technicianName} · ⭐ {b.technicianRating}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
