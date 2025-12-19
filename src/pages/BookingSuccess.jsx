import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingSuccess() {
  const nav = useNavigate();

  // ✅ QS OFFICIAL SUPPORT DETAILS (change anytime)
  const SUPPORT_PHONE = "7661045308"; // +91XXXXXXXXXX
  const WHATSAPP_NUMBER = "7661045308";

  const whatsappMessage = encodeURIComponent(
    "Hello QuickSeva 👋 I just booked a service and need help regarding my booking."
  );

  return (
    <div className="p-6 pb-28 text-center">
      {/* SUCCESS ICON */}
      <div className="text-6xl text-green-500">✔</div>

      <h2 className="text-2xl font-bold mt-3">
        Booking Confirmed!
      </h2>

      <p className="text-gray-600 mt-2">
        Your request has been received.  
        A verified service professional will contact you shortly.
      </p>

      {/* TRUST MESSAGE */}
      <div className="mt-4 text-sm bg-green-50 text-green-700 p-3 rounded-xl">
        ✔ Verified Service Professionals  
        <br />
        ✔ 6-Month Service Warranty  
        <br />
        ✔ QuickSeva Support Always Available
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-6 space-y-3">
        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full p-3 rounded-xl bg-green-600 text-white font-medium"
        >
          💬 Chat on WhatsApp
        </a>

        {/* CALL */}
        <a
          href={`tel:+${SUPPORT_PHONE}`}
          className="block w-full p-3 rounded-xl bg-blue-600 text-white font-medium"
        >
          📞 Call QuickSeva Support
        </a>

        {/* VIEW BOOKINGS */}
        <button
          onClick={() => nav("/my")}
          className="w-full p-3 rounded-xl border font-medium"
        >
          View My Bookings
        </button>

        {/* HOME */}
        <button
          onClick={() => nav("/")}
          className="w-full p-3 rounded-xl text-gray-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
