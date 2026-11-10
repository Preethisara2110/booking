import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const links = [
  ["Find Restaurants", "/#find"],
  ["Locations", "/#locations"],
  ["Reservations", "/#reservations"],
  ["Special Menus", "/#offers"],
  ["Restaurant Management Software", "/#software"],
  ["Services", "/#services"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <Link to="/" className="logo"><img src="/logo.svg" alt="Restaurant" /></Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        {links.map(([label, to]) => (
          <Link key={label} to={to}>{label}</Link>
        ))}
        <button type="button" className="btn btn-sm" onClick={() => navigate("/my-bookings")}>My Bookings</button>
      </nav>
    </header>
  );
}
