import { useMemo, useState } from "react";
import { addBooking } from "../utils/storage.js";

const SLOTS = {
  Morning: ["11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"],
};

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export default function BookingPanel({ restaurant }) {
  // today + the next 7 days (book up to a week in advance)
  const days = useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + i); return d;
  }), []);
  const [selected, setSelected] = useState(days[0]);
  const [booked, setBooked] = useState("");

  const isToday = iso(selected) === iso(days[0]);
  const label = isToday ? "Today" : selected.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  // Clicking a time slot books it immediately and saves to localStorage.
  const book = (time) => {
    addBooking({
      id: restaurant.id,
      name: restaurant.name,
      restaurantName: restaurant.name,
      "Restaurant Name": restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      state: restaurant.state,
      rating: restaurant.rating,
      bookingDate: iso(selected),
      bookingTime: time,
    });
    setBooked(`Booked ${restaurant.name} on ${label} at ${time}. See it in My Bookings.`);
  };

  return (
    <div className="booking">
      <div className="calendar" aria-label="Select date">
        {days.map((d) => (
          <button key={iso(d)} type="button" className={`day ${iso(d) === iso(selected) ? "sel" : ""}`}
            onClick={() => { setSelected(d); setBooked(""); }}>
            <span>{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
            <b>{d.getDate()}</b>
            <span>{d.toLocaleDateString("en-US", { month: "short" })}</span>
          </button>
        ))}
      </div>
      <p className="day-label">{label}</p>
      {Object.entries(SLOTS).map(([period, times]) => (
        <div key={period} className="period">
          <p className="period-name">{period}</p>
          <div className="slots">
            {times.map((t) => (
              <button key={t} type="button" className="slot" onClick={() => book(t)}>{t}</button>
            ))}
          </div>
        </div>
      ))}
      {booked && <div className="toast" role="status">{booked}</div>}
    </div>
  );
}
