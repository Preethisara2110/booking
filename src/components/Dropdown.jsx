import { useEffect, useRef, useState } from "react";

// Custom dropdown; the wrapper div receives the id (e.g. "state" / "city").
export default function Dropdown({ id, placeholder, options, value, onChange, disabled, loading }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div id={id} ref={ref} className={`dropdown ${disabled ? "disabled" : ""}`}>
      <div className="dropdown-head" onClick={() => !disabled && setOpen(!open)} role="combobox" aria-expanded={open}>
        <span className="icon">🔍</span>
        <span className={value ? "val" : "ph"}>{value || placeholder}</span>
        <span className="caret">▾</span>
      </div>
      {open && (
        <ul className="dropdown-list" role="listbox">
          {loading && <li className="muted">Loading…</li>}
          {!loading && options.length === 0 && <li className="muted">No options</li>}
          {options.map((o) => (
            <li key={o} role="option" data-value={o} aria-selected={o === value}
              onClick={() => { onChange(o); setOpen(false); }}>
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
