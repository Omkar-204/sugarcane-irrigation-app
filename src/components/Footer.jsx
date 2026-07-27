import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="furrows on-dark" style={{ marginBottom: 44, opacity: 0.5 }} />
      <div className="wrap footer-grid">
        <div>
          <div className="brand" style={{ color: "var(--paper)", marginBottom: 14 }}>
            Cane &amp; Current
          </div>
          <p style={{ maxWidth: 320, opacity: 0.82 }}>
            An AI-enabled irrigation advisory system for sugarcane, built around field
            sensors, weather forecasts and geospatial data — helping farmers irrigate
            on the crop's schedule, not on guesswork.
          </p>
        </div>

        <div>
          <div className="eyebrow" style={{ color: "var(--gold-2)", marginBottom: 14 }}>
            Explore
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/dashboard">Advisory dashboard</Link>
            <Link to="/register">Farmer registration</Link>
            <Link to="/team">Project team</Link>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: "var(--gold-2)", marginBottom: 14 }}>
            Project
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, opacity: 0.82 }}>
            <span>Use Case ID: KJS-AGR-01</span>
            <span>KIAAR &amp; Godavari Biorefineries Ltd.</span>
            <span>Northern Karnataka</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Cane &amp; Current — student project.</span>
        <span>Built for the AI Use Case Integration assignment.</span>
      </div>
    </footer>
  );
}
