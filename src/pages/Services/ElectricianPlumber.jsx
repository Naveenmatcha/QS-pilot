import React from "react";
import { useNavigate } from "react-router-dom";

const SUBS_EP = [
  { id: "e1", label: "Switchboard repair / change", price: "₹99" },
  { id: "e2", label: "Switch/socket repair /change", price: "₹149" },
  { id: "e3", label: "New switchbox installation", price: "₹149" },
  { id: "e4", label: "Fan repair", price: "₹149" },
  { id: "e5", label: "Exhaust/pedestal/tower fan installation", price: "₹99" },
  { id: "e6", label: "Fan regulator replacement", price: "₹79" },
  { id: "e7", label: "Fancy light installation/replace", price: "₹149" },
  { id: "e8", label: "Tubelight installation", price: "₹99" },
  { id: "e9", label: "Bulb installation", price: "₹49" },
  { id: "e10", label: "Ceiling light installation", price: "₹89" },
  { id: "e11", label: "Hanging light installation", price: "₹199" },
  { id: "e12", label: "Chandelier installation", price: "₹499" },
  { id: "e13", label: "New internal wiring(per 1m)", price: "₹40" },
  { id: "e14", label: "New external wiring(per 1m)", price: "₹24" },
  { id: "e15", label: "Regular doorbell installation", price: "₹99" },
  { id: "e16", label: "Video doorbell installation", price: "₹600" },
  { id: "e17", label: "MCB/fuse repair", price: "₹149" },
  { id: "e18", label: "Submeter installation", price: "249" },
  { id: "e19", label: "Tv installation", price: "₹299" },
    { id: "e20", label: "Tv uninstallation", price: "₹200" },
      { id: "e21", label: "Karban Airzone fan installation", price: "₹399" },
        { id: "e22", label: "Inverter installation", price: "₹450" },
          { id: "e23", label: "Inverter fuse replacement", price: "₹99" },
            { id: "e24", label: "Inverter servicing", price: "₹249" },
              { id: "e25", label: "Inverter Check-up", price: "₹160" },
                { id: "e26", label: "Inverter uninstallation", price: "₹499" },
          { id: "e27", label: "Stabiliser installation", price: "₹149" },
            
];

export default function ElectricianPlumber() {
  const nav = useNavigate();

  /* 📞 SUPPORT CONFIG */
  const supportPhone = "919000000000"; // 🔁 replace with real QS number
  const whatsappMessage = encodeURIComponent(
    "Hi QuickSeva, I need help with Electrician & Plumber services."
  );

  return (
    <div className="p-4 pb-28">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => nav(-1)}
          className="p-2 rounded bg-gray-200"
        >
          ← Back
        </button>
        <h2 className="text-lg font-bold">Electrician</h2>
        <div />
      </div>

      {/* 🔥 HERO BANNER */}
      <div
        className="relative h-44 rounded-2xl overflow-hidden shadow mb-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581092919535-7146c1c9c6c9)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full p-4 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-bold">Safe & Reliable Repairs</h3>
            <p className="text-sm opacity-90">
              Certified electricians & plumbers at your doorstep
            </p>
          </div>

          {/* ✅ CALL + WHATSAPP */}
          <div className="flex gap-2">
            <a
              href={`tel:+${supportPhone}`}
              className="px-4 py-2 bg-green-600 rounded-xl font-semibold shadow"
            >
              📞 Call
            </a>

            <a
              href={`https://wa.me/${supportPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-green-500 rounded-xl font-semibold shadow"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* INFO CARD */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <p className="text-sm text-gray-600">
          Certified electricians and plumbers for safe and fast repairs at home.
        </p>
      </div>

      {/* SERVICES */}
      <h3 className="font-semibold mb-2"></h3>

      <div className="space-y-3">
        {SUBS_EP.map((s) => (
          <div
            key={s.id}
            className="bg-white p-3 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{s.label}</div>
              <div className="text-sm font-semibold text-blue-500">{s.price}</div>
            </div>

            <button
              onClick={() =>
                nav("/booking", {
                  state: {
                    service: "Electrician & Plumber",
                    subService: s.label,
                    price: s.price,
                  },
                })
              }
              className="px-4 py-2 rounded-2xl bg-qsBlue-500 text-white"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
