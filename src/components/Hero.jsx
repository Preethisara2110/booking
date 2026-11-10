import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

const tabs = [
  ["Restaurants", "🏢"], ["Locations", "🌍"], ["Reservations", "🍽️"], ["Special Menus", "🏷️"], ["Services", "⚙️"],
];

export default function Hero() {
  const [active, setActive] = useState("Reservations");
  return (
    <section className="hero" id="find">
      <div className="hero-inner">
        <div className="hero-text">
          <h4>Skip the wait! Reserve Online</h4>
          <h1>Table <span>Reservation</span></h1>
          <p>Connect instantly with our platform to reserve tables at your favorite restaurants.</p>
          <a href="#search-card" className="btn">Find Restaurants</a>
        </div>
        <div className="hero-art">
          <div className="chef-circle">
            <img src="chef.png" alt="Chef" />
          </div>
        </div>
      </div>
      <div className="search-card" id="search-card">
        <SearchBar />
        <p className="looking">You may be looking for</p>
        <div className="tabs">
          {tabs.map(([t, icon]) => (
            <button key={t} type="button" className={`tab ${active === t ? "active" : ""}`} onClick={() => setActive(t)}>
              <span>{icon}</span>{t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
