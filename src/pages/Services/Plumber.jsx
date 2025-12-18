import React from "react";
import { useNavigate } from "react-router-dom";

const SUBS_EP = [
    { id: "e1", label: "Tap repair", price: "₹99" },
    { id: "e2", label: "Tap accessory", price: "₹79" },
    { id: "e3", label: "Tap installation", price: "₹99" },
    { id: "e4", label: "Jet spray replace", price: "₹99" },
    { id: "e5", label: "Toilet seat cover installation", price: "₹99" },
    { id: "e6", label: "Flush tank repair", price: "₹149" },
    { id: "e7", label: "Indian toilet repair/installation", price: "₹649" },
    { id: "e8", label: "Western toilet repair(wall mount)", price: "₹699" },
    { id: "e9", label: "Western toilet repair(floor-mount)", price: "₹699" },
    { id: "e10", label: "Shower installation", price: "₹99" },
    { id: "e11", label: "Shower filter installation", price: "₹99" },
    { id: "e12", label: "Wash basin leakage", price: "₹99" },
    { id: "e13", label: "Wash basin blockage removal", price: "₹199" },
    { id: "e14", label: "Wash basin installation)", price: "₹469" },
    { id: "e15", label: "Waste coupling installation", price: "₹149" },
    { id: "e16", label: "Drain cover installation", price: "₹149" },
    { id: "e17", label: "Drain blockage removal", price: "₹199" },
    { id: "e18", label: "Shut-off valve leakage repair", price: "89" },
    { id: "e19", label: "Washing machine inlet installation", price: "₹99" },
    { id: "e20", label: "Ro water connection installation", price: "₹99" },
    { id: "e21", label: "Geyser Connection leakage repair", price: "₹99" },
    { id: "e22", label: "Overhead water tank installation", price: "₹650" },
    { id: "e23", label: "Water tank repair", price: "₹99" },
    { id: "e24", label: "Motor installation", price: "₹249" },
    

];

export default function Plumber() {
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
                <h2 className="text-lg font-bold">Plumber</h2>
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
                        <h3 className="text-xl font-semibold">Safe & Reliable Repairs</h3>
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
