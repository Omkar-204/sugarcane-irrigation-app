import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/dashboard", label: "Advisory Dashboard" },
  { to: "/register", label: "Farmer Registration" },
  { to: "/team", label: "Team" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 64 64">
              <path
                d="M32 52 C 32 40, 22 36, 22 24 C 22 16, 28 10, 32 8 C 36 10, 42 16, 42 24 C 42 36, 32 40, 32 52 Z"
                fill="#c99a2b"
              />
            </svg>
          </span>
          Cane &amp; Current
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
