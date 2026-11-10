const cols = [
  ["About Our Restaurant", "Menu", "Photo Gallery", "Contact Us", "Terms of Service"],
  ["Reservations", "Special Events", "Private Dining", "Customer Support", "Gift Cards"],
  ["Our Cuisine", "Wine List", "Chef's Special", "Catering Services", "Loyalty Program"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <img src="/logo.svg" alt="Restaurant" className="flogo" />
          <div className="social">{["f", "t", "▶", "p"].map((s) => <span key={s}>{s}</span>)}</div>
        </div>
        {cols.map((c, i) => (
          <ul key={i}>{c.map((l) => <li key={l}>› {l}</li>)}</ul>
        ))}
      </div>
      <div className="copy">Copyright ©2025 FineDining.com. All Rights Reserved</div>
    </footer>
  );
}
