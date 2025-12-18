import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* 
  ICON STRATEGY:
  - Unicode emojis = 100% copyright-free
*/

const SERVICES = [
  {
    id: "ac",
    icon: "❄️",
    title: "Super saving offers",
    tagline: "",
    banner:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Split AC installation (2 ACs)", desc: "Applicable for only split AC's", price: "₹2400" },
      { name: "Foam-jet service (2  ACs)", desc: "Applicable for both window and split AC's", desc1: "Indoor unit deep cleaning with foam & jet spray", price: "₹990" },

    ],
  }, {
    id: "ac",
    icon: "❄️",
    title: "AC Services",
    tagline: "Cooling restored by verified professionals",
    banner:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Foam-jet service ", desc: "Applicable for both window and split AC's", desc1: "Indoor unit deep cleaning with foam & jet spray", price: "₹549" },
      { name: "General AC service", desc: "Applicable for both window and split AC's", price: "₹350" },
    ]
  },
  {
    id: "ac",
    icon: "❄️",
    title: "Repair & gas refill",
    tagline: "Cooling restored by verified professionals",
    banner:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "AC less/no cooling repair ", desc: "Applicable for both window and split AC's", price: "₹299" },
      { name: "AC power issue repiar", desc: "Applicable for both window and split AC's", price: "₹259" },
      { name: "AC water leakage repair", desc: "Applicable for both window and split AC's", price: "₹459" },
      { name: "Gas refill and check-up", desc: "Applicable for both window and split AC's", price: "₹2500" },
      { name: "AC nosie/smell repair", desc: "Applicable for both window and split AC's", price: "₹499" },
      { name: "AC water leakage repair", desc: "Applicable for both window and split AC's", price: "₹599" },
    ]
  },{
    id: "ac",
    icon: "❄️",
    title: "Installation/uninsatallation",
    tagline: "Cooling restored by verified professionals",
    banner:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Insatallation(Spilt AC)", desc: " ✅warranty for 3 months", price: "₹1500" },
      { name: "Window AC installation",desc:"", price: "₹259" },
      { name: "Split AC uninstallation", desc: "", price: "₹850" },
      { name: "Window AC uninstallation", desc: "", price: "₹699" },
    ]
  }

];

export default function ApplianceServices() {
  const navigate = useNavigate();
  const [bannerIndex, setBannerIndex] = useState(0);


  /* 🔄 AUTO-SCROLL BANNER */
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const active = SERVICES[bannerIndex];

  const handleBook = (serviceTitle, problem) => {
    navigate("/booking", {
      state: {
        service: "AC's & Appliances",
        subService: `${serviceTitle} - ${problem}`,
      },
    });
  };

  return (
    <div className="p-4 pb-28">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded bg-gray-200">
          ← Back
        </button>
        <h2 className="text-lg font-bold">Appliance Services</h2>
        <div />
      </div>



      {/* 🔥 HERO BANNER */}
      <div
        className="relative h-44 rounded-2xl overflow-hidden shadow mb-6 transition-all duration-700"
        style={{
          backgroundImage: `url(${active.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full p-4 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-bold">{active.title}</h3>
            <p className="text-sm opacity-90">{active.tagline}</p>
          </div>

          {/* ✅ CALL + WHATSAPP (REPLACED BOOK NOW) */}
          <div className="flex gap-2">
            <a
              href="tel:7661045308"
              className="px-4 py-2 bg-green-600 rounded-xl text-white font-semibold shadow"
            >
              📞 Call
            </a>

            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-green-500 rounded-xl text-white font-semibold shadow"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* INFO CARD */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <p className="text-sm text-gray-600">
          Get your appliances serviced by experienced professionals.<br />
          ✅ QS covers upto 30days warranty on repairs.

        </p>
      </div>

      {/* SERVICES LIST (UNCHANGED) */}
      <div className="space-y-6">
        {SERVICES.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-xs text-gray-500">{section.tagline}</p>
              </div>
            </div>

            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-2xl shadow border flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                    <div className="text-sm text-gray-600">{item.desc1}</div>
                    <div className="text-sm font-semibold text-qsBlue-500">
                      {item.price}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBook(section.title, item.name)}
                    className="px-4 py-2 rounded-xl bg-qsBlue-500 text-white"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
