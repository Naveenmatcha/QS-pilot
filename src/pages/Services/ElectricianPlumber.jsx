import React from "react";
import { useNavigate } from "react-router-dom";
import bannerElectrician from "../../assets/eletrican banner.png";
import allfans from "../../assets/allfans.png";
import switchs from "../../assets/switch.jpg";
import switchboards from "../../assets/switchboard.jpg";
import newbox from "../../assets/newswitchboard.jpg";
import fanrepairs from "../../assets/fan repair.png";
import regulator from "../../assets/fan regulator.png";
import karbanfan from "../../assets/Karban fan.png";
import fancylight from "../../assets/Fancylight.png";
import Blub from "../../assets/blub.png";
import Tubelight from "../../assets/tubelight.png";
import Cellinglight from "../../assets/cellinglight.png";
import Hanglight from "../../assets/hanginglight.png";
import chandelier from "../../assets/chandler.png";
import Internal from "../../assets/internal.png";
import External from "../../assets/external.png";
import Regularbell from "../../assets/regulardoorbell.png";
import videoDoorbell from "../../assets/videodoorbell.png";
import Mcb from "../../assets/mcb.png";
import Inverterfuse from "../../assets/inverterfuse.png";
import Submeter from "../../assets/submeter.png";
import Tvinstall from "../../assets/tvinstall.png";
import Tvuninstall from "../../assets/tvuninstall.png";
import Inverterinstall from "../../assets/inverterinstall.png";
import InverterService from "../../assets/inverterservice.png";
import InverterCheck from "../../assets/invertercheckup.png";
import Inverteruninstall from "../../assets/inverteruninstall.png";
import Stabizer from "../../assets/stabilizer.png";
import { useCart } from "../../utils/CartContext";



const SUBS_EP = [
  { id: "e1", label: "Switchboard Repair / Replacement", desc: "Fix or replace damaged switchboard safely", price: "₹99", tag: "Bestseller", time: "20–30 mins", warranty: "30 Days", image: switchboards },
  { id: "e2", label: "Switch / Socket Repair / Replacement", desc: "Repair broken switches and loose sockets", price: "₹149", tag: "Popular", time: "20–40 mins", warranty: "30 Days", image: switchs },
  { id: "e3", label: "New Switch Box Installation", desc: "Install a brand new switch box securely", price: "₹149", time: "25–40 mins", warranty: "30 Days", image: newbox },
  { id: "e4", label: "Fan Repair", desc: "Fix fan not working, noise or slow speed", price: "₹149", tag: "Trending", time: "25–45 mins", warranty: "30 Days", image: fanrepairs },
  { id: "e5", label: "Exhaust / Pedestal / Tower Fan Installation", desc: "Professional fan fitting with neat wiring", price: "₹99", time: "20–30 mins", warranty: "30 Days", image: allfans },
  { id: "e6", label: "Fan Regulator Replacement", desc: "Replace faulty fan speed regulator", price: "₹79", time: "15–20 mins", warranty: "30 Days", image: regulator },
  { id: "e21", label: "Karban Airzone Fan Installation", desc: "Install premium Airzone fan safely", price: "₹399", time: "30–45 mins", warranty: "30 Days", image: karbanfan },
  { id: "e7", label: "Fancy Light Installation / Replacement", desc: "Install or replace designer fancy lights", price: "₹149", tag: "Popular", time: "20–35 mins", warranty: "30 Days", image: fancylight },
  { id: "e8", label: "Tubelight Installation", desc: "Safe and quick tube light installation", price: "₹99", time: "15–20 mins", warranty: "30 Days", image: Tubelight },
  { id: "e9", label: "Bulb Installation", desc: "Install bulb in any room or space", price: "₹49", time: "10 mins", warranty: "30 Days", image: Blub },
  { id: "e10", label: "Ceiling Light Installation", desc: "Fix ceiling lights properly and safely", price: "₹89", time: "15–25 mins", warranty: "30 Days", image: Cellinglight },
  { id: "e11", label: "Hanging Light Installation", desc: "Install hanging lights with proper support", price: "₹199", time: "25–40 mins", warranty: "30 Days", image: Hanglight },
  { id: "e12", label: "Chandelier Installation", desc: "Expert chandelier fitting with care", price: "₹499", tag: "Premium", time: "40–60 mins", warranty: "45 Days", image: chandelier },
  { id: "e13", label: "Internal Wiring (Per Meter)", desc: "New internal electrical wiring work", price: "₹40", time: "Depends on work", warranty: "30 Days", image: Internal },
  { id: "e14", label: "External Wiring (Per Meter)", desc: "Safe and neat external wiring setup", price: "₹24", time: "Depends on work", warranty: "30 Days", image: External },
  { id: "e15", label: "Regular Doorbell Installation", desc: "Install normal doorbell at your home", price: "₹99", time: "15–20 mins", warranty: "30 Days", image: Regularbell },
  { id: "e16", label: "Video Doorbell Installation", desc: "Install smart video doorbell securely", price: "₹600", tag: "Bestseller", time: "40–60 mins", warranty: "45 Days", image: videoDoorbell },
  { id: "e17", label: "MCB / Fuse Repair", desc: "Fix tripping MCBs or blown fuses", price: "₹149", time: "20–30 mins", warranty: "30 Days", image: Mcb },
  { id: "e18", label: "Sub Meter Installation", desc: "Install separate home / room meter", price: "₹249", time: "35–50 mins", warranty: "45 Days", image: Submeter },
  { id: "e19", label: "TV Installation", desc: "Wall mount and setup your television", price: "₹299", time: "30–45 mins", warranty: "30 Days", image: Tvinstall },
  { id: "e20", label: "TV Uninstallation", desc: "Remove TV safely without damage", price: "₹200", time: "20–30 mins", warranty: "30 Days", image: Tvuninstall },
  { id: "e22", label: "Inverter Installation", desc: "Install inverter with proper connections", price: "₹450", tag: "Popular", time: "35–50 mins", warranty: "45 Days", image: Inverterinstall },
  { id: "e23", label: "Inverter Fuse Replacement", desc: "Replace damaged inverter fuse", price: "₹99", time: "10–15 mins", warranty: "30 Days", image: Inverterfuse },
  { id: "e24", label: "Inverter Servicing", desc: "Full health check and service of inverter", price: "₹249", time: "30–45 mins", warranty: "30 Days", image: InverterService },
  { id: "e25", label: "Inverter Check-up", desc: "Basic inverter health inspection", price: "₹160", time: "15–25 mins", warranty: "30 Days", image: InverterCheck },
  { id: "e26", label: "Inverter Uninstallation", desc: "Remove inverter safely and cleanly", price: "₹499", time: "30–45 mins", warranty: "30 Days", image: Inverteruninstall },
  { id: "e27", label: "Stabilizer Installation", desc: "Install stabilizer for safe voltage use", price: "₹149", time: "20–30 mins", warranty: "30 Days", image: Stabizer },
];

const CATEGORIES = [
  { key: "switch", title: "Switch & Socket", icon: "⚡", match: ["switch", "socket", "board", "box"] },
  { key: "fan", title: "Fan Services", icon: "🌀", match: ["fan", "regulator"] },
  { key: "lights", title: "Lights & Chandelier", icon: "💡", match: ["light", "bulb", "tube", "chandelier"] },
  { key: "wiring", title: "Wiring Work", icon: "🧰", match: ["wiring"] },
  { key: "doorbell", title: "Doorbell", icon: "🔔", match: ["doorbell"] },
  { key: "mcb", title: "Fuse & Safety", icon: "🛡️", match: ["mcb", "fuse"] },
  { key: "meter", title: "Meter Work", icon: "⚙️", match: ["meter"] },
  { key: "tv", title: "TV Services", icon: "📺", match: ["tv"] },
  { key: "inverter", title: "Inverter", icon: "🔋", match: ["inverter"] },
  { key: "stabilizer", title: "Stabilizer", icon: "⚙️", match: ["stabilizer"] },
];

export default function ElectricianPlumber() {
  const nav = useNavigate();
  const supportPhone = "7661045308";

  const { cart, addItem } = useCart();

  const total = Object.values(cart).reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const filterByCategory = (keywords) =>
    SUBS_EP.filter((s) =>
      keywords.some((k) => s.label.toLowerCase().includes(k))
    );

  return (
    <div className="p-4 pb-28 service-container">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => nav(-1)} className="p-2 rounded bg-gray-200">
          ← Back
        </button>
        <h2 className="text-lg font-bold">Electrician</h2>
        <div />
      </div>

      {/* HERO */}
      <div
        className="relative h-44 rounded-2xl overflow-hidden shadow mb-6"
        style={{
          backgroundImage: `url(${bannerElectrician})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full p-4 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-bold">Safe & Reliable Electrical Work</h3>
            <p className="text-sm opacity-90">
              Certified electricians for quick & safe service
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTIONS */}
      <div className="space-y-6 service-grid">
        {CATEGORIES.map((cat) => {
          const items = filterByCategory(cat.match);
          if (!items.length) return null;

          return (
            <div key={cat.key}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>

              <div className="service-grid">
                {items.map((s) => (
                  <div
                    key={s.id}
                    className="service-card bg-white p-3 rounded-2xl shadow border flex flex-col md:flex-row gap-3"
                  >
                    <div>
                      <p className="font-medium">{s.label}</p>
                      <img
                        src={s.image}
                        alt={s.label}
                        className="w-full md:w-36 h-32 object-cover rounded-xl bg-gray-100"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
                      <p className="text-sm font-semibold text-qsBlue-500 mt-1">
                        {s.price}
                      </p>
                    </div>

                    <button
                      onClick={() => addItem(s)}
                      className="px-4 py-2 rounded-2xl bg-green-500 text-white mt-2 sm:mt-0"
                    >
                      + ADD
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM CART BAR */}
      {total > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-qsBlue-500 text-white p-4 flex justify-between items-center z-50">
          <div>
            <p className="font-bold">🛒 {Object.keys(cart).length} items</p>
            <p className="text-sm">₹{total}</p>
          </div>
          <button
            onClick={() => nav("/cart")}
            className="bg-white text-qsBlue-500 px-4 py-2 rounded-xl font-semibold"
          >
            VIEW CART →
          </button>
        </div>
      )}
    </div>
  );
}
