import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  return (
    <header className="navbar">
      <Link to="/" className="logo"><img src="/logo.svg" alt="Restaurant" /></Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        {links.map(([label, to]) => (
          <Link key={label} to={to}>{label}</Link>
        ))}
        <NavLink to="/my-bookings" className="btn btn-sm">My Bookings</NavLink>
      </nav>
    </header>
  );
}
