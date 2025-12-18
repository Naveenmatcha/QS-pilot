export function openWhatsAppAfterBooking(booking) {
  const phone = "919876543210"; // QS official number

  const message = encodeURIComponent(
    `Hi QS 👋
Booking Confirmed ✅

Service: ${booking.service}
Issue: ${booking.subService}
Date: ${booking.date}
Time: ${booking.time}
Address: ${booking.address}

Please assign a technician.`
  );

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
