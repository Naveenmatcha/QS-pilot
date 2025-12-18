import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nav = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user") || "null");
    if (!u) { nav("/login"); return; }

    setUser(u);
    setName(u.name || "");
    setPhoto(u.photo || "");

    setTimeout(() => setLoading(false), 900);
  }, []);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    const updated = { ...user, name, photo };
    localStorage.setItem("user", JSON.stringify(updated));
    alert("Saved");
    nav("/");
  };

  if (loading) {
    return (
      <div className="p-4 pb-28">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto animate-pulse" />
        <div className="h-4 bg-gray-300 rounded w-36 mx-auto mt-4 animate-pulse" />
        <div className="h-4 bg-gray-300 rounded w-48 mx-auto mt-2 animate-pulse" />

        <div className="h-10 bg-gray-300 rounded-xl mt-6 animate-pulse" />
        <div className="h-10 bg-gray-300 rounded-xl mt-3 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="p-4 pb-28">
      <button onClick={() => nav(-1)} className="p-2 rounded bg-qsGray-light">← Back</button>

      <h2 className="mt-4 font-semibold">My Profile</h2>

      <div className="flex flex-col items-center mt-4">
        <img src={photo || user.photo || "https://i.pravatar.cc/150"} className="w-24 h-24 rounded-full" />

        <label className="mt-2 px-3 py-2 bg-qsGray-light rounded cursor-pointer">
          Change Photo <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
        </label>
      </div>

      <div className="mt-4">
        <label className="block text-sm mb-1">Name</label>
        <input className="w-full p-3 rounded-qs border" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="mt-4">
        <label className="block text-sm mb-1">Phone</label>
        <input disabled className="w-full p-3 rounded-qs border bg-gray-100" value={user.phone || ""} />
      </div>

      <button onClick={saveProfile} className="w-full mt-4 p-3 rounded-qs bg-qsBlue-500 text-white">Save</button>
    </div>
  );
}
