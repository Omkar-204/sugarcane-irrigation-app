import { Link } from "react-router-dom";

const PROBLEMS = [
  ["Water wastage", "Over-irrigation from guesswork, not soil data."],
  ["Yield loss", "Moisture stress goes unnoticed until it's costly."],
  ["Wasted power", "Pumps run on habit, not on need."],
  ["No visibility", "25,000 farms, no way to monitor them at once."]
];

const BENEFICIARIES = [
  ["18–25k", "sugarcane farmers across Northern Karnataka"],
  ["1", "unified advisory reaching every geofenced plot"],
  ["4", "languages for advisory delivery: EN, KN, MR, HI"]
];

export default function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap grid-2">
          <div>
            <span className="eyebrow">Use Case KJS-AGR-01 · Agriculture</span>
            <h1 style={{ fontSize: "3.2rem", marginTop: 14 }}>
              Tell the field what it needs, <em style={{ color: "var(--gold)" }}>before</em> it has
              to ask.
            </h1>
            <p style={{ marginTop: 20, fontSize: "1.08rem", opacity: 0.82, maxWidth: 480 }}>
              An AI-driven irrigation advisory system that reads soil moisture, weather
              forecasts and crop stage for every sugarcane plot — and turns it into one
              plain-language instruction: irrigate, wait, or hold.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
              <Link to="/dashboard" className="btn btn-gold">
                View the advisory dashboard
              </Link>
              <Link to="/how-it-works" className="btn btn-outline">
                See how it works
              </Link>
            </div>
          </div>

          <div className="card-dark" aria-hidden="true">
            <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
              Plot-12 · Live read
            </span>
            <div className="stat-row" style={{ marginTop: 10 }}>
              <span className="stat-num">2.5</span>
              <span style={{ opacity: 0.8 }}>hrs irrigation recommended tomorrow AM</span>
            </div>
            <div className="furrows on-dark" style={{ margin: "22px 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: "0.86rem" }}>
              <div>
                <div style={{ opacity: 0.65 }}>Soil moisture (30cm)</div>
                <div style={{ fontSize: "1.3rem", marginTop: 4 }}>22.4%</div>
              </div>
              <div>
                <div style={{ opacity: 0.65 }}>Water stress index</div>
                <div style={{ fontSize: "1.3rem", marginTop: 4, color: "var(--gold-2)" }}>0.38 · Medium</div>
              </div>
              <div>
                <div style={{ opacity: 0.65 }}>Rainfall (24h)</div>
                <div style={{ fontSize: "1.3rem", marginTop: 4 }}>0.0 mm</div>
              </div>
              <div>
                <div style={{ opacity: 0.65 }}>Predicted yield</div>
                <div style={{ fontSize: "1.3rem", marginTop: 4 }}>102.6 t/ha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="furrows wrap" />

      <section className="section-tight">
        <div className="wrap">
          <span className="eyebrow">The problem</span>
          <h2 style={{ fontSize: "1.9rem", marginTop: 10, maxWidth: 640 }}>
            Sugarcane is thirsty, and most irrigation decisions are still made by feel.
          </h2>
          <div className="grid-4" style={{ marginTop: 36 }}>
            {PROBLEMS.map(([title, body]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: "1.1rem" }}>{title}</h3>
                <p style={{ marginTop: 10, opacity: 0.75, fontSize: "0.92rem" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="grid-3">
            {BENEFICIARIES.map(([num, label]) => (
              <div key={label}>
                <div className="stat-num">{num}</div>
                <p style={{ opacity: 0.75, marginTop: 6 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <span className="eyebrow">Get started</span>
            <h2 style={{ fontSize: "1.9rem", marginTop: 10 }}>
              Are you a farmer, field supervisor, or agronomist?
            </h2>
            <p style={{ marginTop: 14, opacity: 0.78, maxWidth: 420 }}>
              Register a plot to receive plot-specific advisories, or explore a live
              sample of the dashboard supervisors and farmers see every morning.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/register" className="btn btn-gold">
              Register a plot
            </Link>
            <Link to="/dashboard" className="btn btn-outline">
              Explore the dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
