import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

export default function ServiceDetail() {
  const nav = useNavigate();
  const { state } = useLocation();

  // SAFE FALLBACK (prevents blank page)
  const safeState = state || {
    service: "Electrician",
    subService: "Switch / Socket repair & replacement",
  };

  // ✅ USE GLOBAL CART (NOT LOCAL STATE)
  const { cart, addItem, removeItem, updateQty } = useCart();

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
  ];

  let items = [
    { name: "Regular switch", price: 69, rating: "4.82 (67K reviews)", img: "https://i.ibb.co/VBzrQFZ/switch1.png" },
    { name: "Power switch (16 AMP)", price: 89, rating: "4.82 (22K reviews)", img: "https://i.ibb.co/grMGg8T/switch2.png" },
    { name: "Power socket (16 AMP)", price: 129, rating: "4.82 (30K reviews)", img: "https://i.ibb.co/3Yh3PjH/switch3.png" },
  ];

  if (safeState.service === "Washing Machine") {
    items = WM_SERVICES.flatMap(s => s.items).map(i => ({
      name: i.name,
      price: i.price,
      rating: "4.9 (10K reviews)",
      img: "https://i.ibb.co/VH4NnyP/wm2.png",
    }));
  }

  if (safeState.service === "AC & Appliances") {
    items = AC_SERVICES.flatMap(s => s.items).map(i => ({
      name: i.name,
      price: i.price,
      rating: "4.9 (10K reviews)",
      img: "https://i.ibb.co/8X7jJ2F/ac.png",
    }));
  }

  // ADD TO CART
  const handleAdd = (item) => {
    addItem({
      name: item.name,
      price: item.price,
      service: safeState.service,
    });
  };

  // REMOVE OR DECREASE QTY
  const handleMinus = (name) => {
    const existing = cart[name];
    if (!existing) return;

    if (existing.qty === 1) {
      removeItem(name);
    } else {
      updateQty(name, existing.qty - 1);
    }
  };

  // TOTAL
  const total = Object.values(cart).reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const handleProceed = () => {
    if (!total) return alert("Please add at least 1 item");

    const selectedItems = Object.values(cart).map((i) => ({
      name: i.name,
      qty: i.qty,
      price: i.price,
    }));

    nav("/booking", {
      state: {
        service: safeState.service,
        subService: safeState.subService,
        price: `₹${total}`,
        items: selectedItems,
        totalAmount: total,
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
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => nav(-1)} className="p-2 rounded bg-gray-200">
          ← Back
        </button>
        <h2 className="text-lg font-bold">{safeState.subService}</h2>
        <div />
      </div>

      <div className="bg-white rounded-3xl shadow p-4 mb-5">
        <p className="text-xl font-semibold">{safeState.subService}</p>
        <p className="text-sm mt-1">⭐ 4.82 (91K reviews)</p>

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
                  onClick={() => handleAdd(i)}
                >
                  Add
                </button>
              ) : (
                <div className="flex justify-between items-center mt-2 border rounded-xl px-2 py-1">
                  <button onClick={() => handleMinus(i.name)} className="text-xl">−</button>
                  <span>{cart[i.name].qty}</span>
                  <button onClick={() => handleAdd(i)} className="text-xl">+</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xl font-bold mt-6 mb-2">Frequently asked questions</p>
        {FAQS.map((f, i) => (
          <div key={i} className="border-b">
            <button
              className="w-full flex justify-between py-3"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span>{f.q}</span>
              <span>⌄</span>
            </button>
            {openFaq === i && (
              <p className="pb-3 text-sm text-gray-600">{f.a}</p>
            )}
          </div>
        ))}
      </div>

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
