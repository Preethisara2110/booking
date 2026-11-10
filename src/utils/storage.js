const KEY = "bookings";

export function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function addBooking(booking) {
  const all = getBookings();
  all.push({ ...booking, bookingId: Date.now() + Math.random().toString(16).slice(2) });
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function removeBooking(bookingId) {
  localStorage.setItem(KEY, JSON.stringify(getBookings().filter((b) => b.bookingId !== bookingId)));
}
