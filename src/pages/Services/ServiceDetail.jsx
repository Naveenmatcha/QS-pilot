import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ServiceDetail() {
  const nav = useNavigate();
  const { state } = useLocation();

  const [cart, setCart] = useState({});
  

  /* ===============================
      WASHING MACHINE SERVICES
  =============================== */
  const WM_SERVICES = [
    {
      id: "popular",
      items: [
        { name: "Full Deep Service (2 Machines)", price: 999 },
        { name: "Jet Cleaning Service (2 Machines)", price: 1199 },
      ],
    },
    {
      id: "service",
      items: [
        { name: "General Service", price: 399 },
        { name: "Full Deep Cleaning", price: 699 },
      ],
    },
    {
      id: "repair",
      items: [
        { name: "Machine Not Spinning", price: 249 },
        { name: "Power / Start Problem", price: 299 },
        { name: "Water Leakage Fix", price: 349 },
        { name: "Noise / Vibration Issue", price: 299 },
        { name: "Error Code Repair", price: 349 },
      ],
    },
    {
      id: "install",
      items: [
        { name: "Installation", price: 799 },
        { name: "Uninstallation", price: 499 },
      ],
    },
  ];
  /* ===============================
    AC SERVICES
=============================== */
const AC_SERVICES = [
  {
    id: "ac1",
    items: [
      { name: "Split AC installation (2 ACs)", price: 2400 },
      { name: "Foam-jet service (2 ACs)", price: 990 },
    ],
  },
  {
    id: "ac2",
    items: [
      { name: "Foam-jet service", price: 549 },
      { name: "General AC service", price: 350 },
      { name: "Indoor Coil Deep Cleaning", price: 699 },
      { name: "Outdoor Unit Service", price: 499 },
    ],
  },
  {
    id: "ac3",
    items: [
      { name: "Low / No Cooling Repair", price: 299 },
      { name: "AC Power Issue Repair", price: 259 },
      { name: "Water Leakage Repair", price: 459 },
      { name: "Gas Refill + Cooling Check", price: 2500 },
      { name: "PCB / Sensor Repair", price: 799 },
      { name: "Noise / Smell Fix", price: 499 },
    ],
  },
  {
    id: "ac4",
    items: [
      { name: "Split AC Installation", price: 1500 },
      { name: "Window AC Installation", price: 799 },
      { name: "Split AC Uninstallation", price: 850 },
      { name: "Window AC Uninstallation", price: 699 },
    ],
  },
];
/* ===============================
    PLUMBER SERVICES
=============================== */
const PLUMB_SERVICES = [
  {
    id: "p1",
    items: [
      { name: "Tap Leakage Repair", price: 149 },
      { name: "Bathroom Leakage Fix", price: 249 },
      { name: "Kitchen Sink Leakage Repair", price: 199 },
    ],
  },
  {
    id: "p2",
    items: [
      { name: "Wash Basin Installation", price: 499 },
      { name: "Tap Installation", price: 149 },
      { name: "Hand Shower Installation", price: 249 },
    ],
  },
  {
    id: "p3",
    items: [
      { name: "Wash Basin Block Removal", price: 199 },
      { name: "Bathroom Drain Block Removal", price: 249 },
      { name: "Kitchen Drain Block Removal", price: 299 },
    ],
  },
];
/* ===============================
    FRIDGE SERVICES
=============================== */
const FRIDGE_SERVICES = [
  {
    id: "fr1",
    items: [
      { name: "Single Door Service Pack", price: 499 },
      { name: "Double Door Service Pack", price: 699 },
      { name: "Side-by-Side / French Door Service Pack", price: 899 },
    ],
  },
  {
    id: "fr2",
    items: [
      { name: "General fridge service", price: 299 },
      { name: "Deep cleaning service", price: 499 },
      { name: "Premium fridge service", price: 699 },
    ],
  },
  {
    id: "fr3",
    items: [
      { name: "Fridge not cooling repair", price: 349 },
      { name: "Power / wiring issue repair", price: 299 },
      { name: "Water leakage repair", price: 399 },
      { name: "Noise / vibration repair", price: 349 },
    ],
  },
  {
    id: "fr4",
    items: [
      { name: "Gas refill (Home fridge)", price: 1800 },
      { name: "Compressor health check", price: 299 },
      { name: "Thermostat / Sensor Repair", price: 499 },
    ],
  },
  {
    id: "fr5",
    items: [
      { name: "Deep Freezer Service", price: 899 },
      { name: "Visi Cooler / Display Fridge", price: 999 },
      { name: "Commercial Gas Refill", price: 2600 },
      { name: "Commercial Cooling Repair", price: 899 },
    ],
  },
];



  /* ===============================
      DEFAULT ELECTRICIAN ITEMS
  =============================== */
  let items = [
    { name: "Regular switch", price: 69, rating: "4.82 (67K reviews)", img: "https://i.ibb.co/VBzrQFZ/switch1.png" },
    { name: "Power switch (16 AMP)", price: 89, rating: "4.82 (22K reviews)", img: "https://i.ibb.co/grMGg8T/switch2.png" },
    { name: "Power socket (16 AMP)", price: 129, rating: "4.82 (30K reviews)", img: "https://i.ibb.co/3Yh3PjH/switch3.png" },
  ];

  // If Washing Machine → Replace items
  if (state?.service === "Washing Machine") {
    items = WM_SERVICES.flatMap(s => s.items).map(i => ({
      name: i.name,
      price: i.price,
      rating: "4.9 (10K reviews)",
      img: "https://i.ibb.co/VH4NnyP/wm2.png",
    }));
  }
  /* Plumber */
if (
  state?.service === "Plumber" ||
  state?.service === "Plumbing" ||
  state?.service === "Plumber Services"
) {
  items = PLUMB_SERVICES.flatMap(s => s.items).map(i => ({
    name: i.name,
    price: i.price,
    rating: "4.9 (9K reviews)",
    img: "https://i.ibb.co/qnKpV5s/plumber.png",
  }));
}
/* Fridge */
if (
  state?.service === "Fridge" ||
  state?.service === "Fridge Repair" ||
  state?.service === "Refrigerator"
) {
  items = FRIDGE_SERVICES.flatMap(s => s.items).map(i => ({
    name: i.name,
    price: i.price,
    rating: "4.9 (8K reviews)",
    img: "https://i.ibb.co/7rYF0yQ/fridge.png",
  }));
}

/* ===============================
    CARPENTER SERVICES
=============================== */
const CARPENTER_SERVICES = [
  {
    id: "c1",
    items: [
      { name: "Door Repair", price: 249 },
      { name: "Door Lock Repair", price: 199 },
    ],
  },
  {
    id: "c2",
    items: [
      { name: "Chair Repair", price: 149 },
      { name: "Table Repair", price: 249 },
    ],
  },
];

    // If AC & Appliances → Replace items
    if (state?.service === "AC & Appliances") {
      items = AC_SERVICES.flatMap(s => s.items).map(i => ({
        name: i.name,
        price: i.price,
        rating: "4.9 (10K reviews)",
        img: "https://i.ibb.co/8X7jJ2F/ac.png",
      }));
    }

    /* Carpenter */
if (
  state?.service === "Carpenter" ||
  state?.service === "Carpentry" ||
  state?.service === "Carpenter Services"
) {
  items = CARPENTER_SERVICES.flatMap(s => s.items).map(i => ({
    name: i.name,
    price: i.price,
    rating: "4.9 (6K reviews)",
    img: "https://i.ibb.co/CKw6Rcx/carpenter.png",
  }));
}


  const toggleQty = (name, type) => {
    setCart((prev) => {
      const qty = prev[name] || 0;
      if (type === "add") return { ...prev, [name]: qty + 1 };

      if (qty === 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }

      return { ...prev, [name]: qty - 1 };
    });
  };

  const total = Object.keys(cart).reduce((sum, key) => {
    const item = items.find((i) => i.name === key);
    return sum + (cart[key] * item.price);
  }, 0);

  const handleProceed = () => {
    if (!total) return alert("Please add at least 1 item");

    const selectedItems = Object.keys(cart).map((key) => ({
      name: key,
      qty: cart[key],
      price: items.find((i) => i.name === key)?.price,
    }));

    nav("/booking", {
      state: {
        service: state?.service || "Electrician",
        subService: state?.subService || "Switch / Socket repair & replacement",
        price: `₹${total}`,
        items: selectedItems,
      },
    });
  };

  const FAQS = [
    { q: "Does the cost include spare parts?", a: "No, prices do not include spare part charges. Technician will share estimate." },
    { q: "What if the same issue occurs again?", a: "Service is covered under warranty period shown on service page." },
    { q: "What if anything gets damaged?", a: "Damage cover up to ₹10,000 as per policy." },
    { q: "Are spare parts covered under warranty?", a: "Yes. Company warranty applies on installed parts." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="p-4 pb-28">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => nav(-1)} className="p-2 rounded bg-gray-200">
          ← Back
        </button>
        <h2 className="text-lg font-bold">{state?.subService || "Electrician"}</h2>
        <div />
      </div>

      {/* WHITE SHEET */}
      <div className="bg-white rounded-3xl shadow p-4 mb-5">
        <p className="text-xl font-semibold">
          {state?.subService || "Switch / Socket repair & replacement"}
        </p>
        <p className="text-sm mt-1">⭐ 4.82 (91K reviews)</p>

        {/* PRODUCTS */}
        <div className="flex gap-3 overflow-x-auto mt-4 no-scrollbar">
          {items.map((i, idx) => (
            <div key={idx} className="min-w-[150px] p-3 rounded-2xl border shadow-sm">
              <img src={i.img} className="w-full h-20 object-contain" />
              <p className="font-semibold mt-2">{i.name}</p>
              <p className="text-xs text-gray-600">⭐ {i.rating}</p>
              <p className="font-semibold mt-1">₹{i.price}</p>

              {!cart[i.name] ? (
                <button
                  className="w-full mt-2 py-1 border rounded-xl text-purple-600 font-semibold"
                  onClick={() => toggleQty(i.name, "add")}
                >
                  Add
                </button>
              ) : (
                <div className="flex justify-between items-center mt-2 border rounded-xl px-2 py-1">
                  <button onClick={() => toggleQty(i.name, "minus")} className="text-xl">−</button>
                  <span>{cart[i.name]}</span>
                  <button onClick={() => toggleQty(i.name, "add")} className="text-xl">+</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* OUR PROCESS */}
        <h3 className="text-xl font-bold mt-6 mb-3">Our process</h3>
        {[
          { t: "Inspection", d: "We inspect and share a repair quote for approval" },
          { t: "Quote approval", d: "Approve quote or pay visiting charges if declined" },
          { t: "Repair & spare parts", d: "Spare parts sourced if required" },
          { t: "Replacement if needed", d: "If repair not possible, replacement done" },
          { t: "Warranty activation", d: "Warranty after repair" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-3 mb-3">
            <div className="w-7 h-7 flex justify-center items-center bg-gray-200 rounded-full font-bold">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold">{s.t}</p>
              <p className="text-sm text-gray-600">{s.d}</p>
            </div>
          </div>
        ))}

        {/* EXCLUDED */}
        <div className="mt-4 bg-gray-50 rounded-2xl p-3">
          <p className="font-bold text-lg">What is excluded?</p>
          <p className="text-sm mt-2">❌ Wiring beyond 2 meters is not included.</p>
        </div>

        {/* TECHNICIANS */}
        <div className="mt-6">
          <p className="text-xl font-bold">Top technicians</p>
          <p className="mt-2">✔ Background verified</p>
          <p>✔ Trained across brands</p>
          <p>✔ Certified</p>
        </div>

        {/* PROMISE */}
        <div className="mt-6 bg-gray-50 rounded-2xl p-3">
          <p className="text-xl font-bold">QS Promise</p>
          <p className="mt-2">🛡 Warranty</p>
          <p>💰 Damage cover</p>
        </div>

        {/* FAQ */}
        <p className="text-xl font-bold mt-6 mb-2">Frequently asked questions</p>

        {FAQS.map((f, i) => (
          <div key={i} className="border-b">
            <button className="w-full flex justify-between py-3"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <span>{f.q}</span>
              <span>⌄</span>
            </button>
            {openFaq === i && (
              <p className="pb-3 text-sm text-gray-600">{f.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">₹{total || 0}</p>
          <p className="text-xs text-gray-500">Including selected items</p>
        </div>

        <button
          onClick={handleProceed}
          disabled={!total}
          className={`px-6 py-3 rounded-xl text-white font-semibold ${
            total ? "bg-qsBlue-500" : "bg-gray-400"
          }`}
        >
          Proceed to Booking →
        </button>
      </div>
    </div>
  );
}
