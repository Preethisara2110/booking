import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingPanel from "./BookingPanel.jsx";

export default function RestaurantCard({ r }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="r-card">
      <div className="r-row">
        <div className="r-img">🍴</div>
        <div className="r-info">
          <h3>{r.name}</h3>
          <p className="muted">{r.address}</p>
          <p className="muted">{r.city}, {r.state}</p>
          <span className="rating">★ {r.rating}</span>
        </div>
        <div className="r-action">
          <p className="avail">Available today</p>
          <button type="button" className="btn" onClick={() => setOpen(!open)}>Book FREE Reservation</button>
        </div>
      </div>
      {open && <BookingPanel restaurant={r} onBooked={() => navigate("/my-bookings")} />}
    </div>
  );
}
