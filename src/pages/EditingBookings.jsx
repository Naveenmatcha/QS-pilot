import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EditingBookings() {
  const { id } = useParams();
  const nav = useNavigate();

  const [booking, setBooking] = useState(null);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("01");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("AM");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const docRef = doc(db, "bookings", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setBooking(data);
          setDate(data.date || "");

          if (data.time) {
            const [t, ap] = data.time.split(" ");
            const [h, m] = t.split(":");
            setHour(h.padStart(2, "0"));
            setMinute(m);
            setAmpm(ap);
          }

          setAddress(data.address || "");
          setPhone(data.phone || "");
          setNotes(data.notes || "");
        }
      } catch (err) {
        console.error("Error fetching booking:", err);
        alert("Failed to load booking");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!booking) return <p className="p-4">Booking not found</p>;

  const saveChanges = async () => {
    if (!date || !hour || !minute) {
      alert("Please fill in all required fields");
      return;
    }

    const finalTime = `${hour.padStart(2, "0")}:${minute} ${ampm}`;

    try {
      const docRef = doc(db, "bookings", id);
      await updateDoc(docRef, {
        date,
        time: finalTime,
        address: address.trim(),
        phone: phone.trim(),
        notes: notes.trim(),
        lastModifiedAt: new Date().toISOString(),
        modificationRequested: true,
      });

      alert("Changes saved! Our team will review and confirm shortly.");
      nav("/my");
    } catch (err) {
      console.error("Error saving changes:", err);
      alert("Failed to save changes");
    }
  };

  return (
    <div className="p-4 pb-28">
      <div className="flex items-center justify-between">
        <button onClick={() => nav(-1)} className="p-2 rounded bg-qsGray-light">
          ← Back
        </button>
        <h3 className="font-semibold">Edit Booking</h3>
        <div />
      </div>

      <div className="mt-4 p-3 bg-white rounded-qs border">
        <div className="font-semibold">{booking.service}</div>
        <div className="text-sm text-gray-600">Booking ID: #{booking.id}</div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <label className="block text-sm mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 rounded-qs border"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Time</label>
          <div className="flex gap-2">
            <select value={hour} onChange={(e) => setHour(e.target.value)} className="p-3 rounded-qs border">
              {Array.from({ length: 12 }).map((_, i) => (
                <option key={i}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>

            <select value={minute} onChange={(e) => setMinute(e.target.value)} className="p-3 rounded-qs border">
              <option>00</option>
              <option>15</option>
              <option>30</option>
              <option>45</option>
            </select>

            <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className="p-3 rounded-qs border">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-3 rounded-qs border" />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 rounded-qs border" />
        </div>

        <div>
          <label className="block text-sm mb-1">Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-3 rounded-qs border" />
        </div>

        <button onClick={saveChanges} className="w-full mt-3 p-3 rounded-qs bg-qsBlue-500 text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}
