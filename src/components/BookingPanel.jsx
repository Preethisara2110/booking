import { useMemo, useState } from "react";
import { addBooking } from "../utils/storage.js";

const SLOTS = {
  Morning: ["11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"],
};

const toMinutes = (t) => {
  const [hm, ap] = t.split(" ");
  let [h, m] = hm.split(":").map(Number);
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + m;
};
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export default function BookingPanel({ restaurant, onBooked }) {
  // today + the next 7 days (book up to a week in advance)
  const days = useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + i); return d;
  }), []);
  const [selected, setSelected] = useState(days[0]);
  const [time, setTime] = useState("");

  const isToday = iso(selected) === iso(days[0]);
  const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
  const label = isToday ? "Today" : selected.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  const confirm = () => {
    if (!time) return;
    addBooking({
      id: restaurant.id, name: restaurant.name, address: restaurant.address,
      city: restaurant.city, state: restaurant.state, rating: restaurant.rating,
      bookingDate: iso(selected), bookingTime: time,
    });
    onBooked?.();
  };

  return (
    <div className="booking">
      <div className="calendar" role="tablist" aria-label="Select date">
        {days.map((d) => (
          <button key={iso(d)} type="button" className={`day ${iso(d) === iso(selected) ? "sel" : ""}`}
            onClick={() => { setSelected(d); setTime(""); }}>
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
            {times.map((t) => {
              const past = isToday && toMinutes(t) <= nowMin;
              return (
                <button key={t} type="button" disabled={past}
                  className={`slot ${time === t ? "sel" : ""}`} onClick={() => setTime(t)}>{t}</button>
              );
            })}
          </div>
        </div>
      ))}
      <button type="button" className="btn confirm" disabled={!time} onClick={confirm}>
        Confirm booking{time ? ` · ${time}` : ""}
      </button>
    </div>
  );
}
