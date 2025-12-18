export const getBookings = () => JSON.parse(localStorage.getItem("bookings") || "[]");
export const saveBookings = (arr) => localStorage.setItem("bookings", JSON.stringify(arr));
export const getUser = () => JSON.parse(localStorage.getItem("user") || "null");
export const saveUser = (u) => localStorage.setItem("user", JSON.stringify(u));
