const WORKFLOW = [
  {
    n: "01",
    title: "Data acquisition",
    body: "Field, crop, soil, weather and geospatial data collected through sensor networks, IoT devices, satellite imagery and GIS-based plot digitization."
  },
  {
    n: "02",
    title: "Data integration",
    body: "Sensor readings, weather feeds, satellite imagery, soil reports and farmer records are merged into one agricultural data platform."
  },
  {
    n: "03",
    title: "AI analytics",
    body: "ML models forecast soil moisture, irrigation timing, water stress, fertigation needs, pump scheduling and expected yield."
  },
  {
    n: "04",
    title: "Decision support",
    body: "Plot-specific irrigation and fertigation recommendations are generated from field conditions, crop stage and forecasts."
  },
  {
    n: "05",
    title: "Advisory delivery",
    body: "Recommendations reach farmers through web and mobile dashboards — in plain, multilingual, farmer-friendly language."
  }
];

const MODELS = [
  "Next irrigation date prediction",
  "Irrigation duration prediction",
  "Crop water requirement prediction",
  "Water stress probability model",
  "Rainfall-adjusted irrigation recommendation",
  "Yield loss prediction from delayed irrigation",
  "Pump scheduling optimization",
  "Fertigation recommendation model",
  "Disease and water stress forecasting",
  "Yield prediction model",
  "Farmer-friendly advisory generation (LLM-based)"
];

const CHALLENGES = [
  ["Sensor", "Calibration, battery life and data drop-outs across thousands of remote plots."],
  ["AI", "Limited labeled data and model generalization across soil types and seasons."],
  ["Geospatial", "Keeping plot boundaries accurate as crop stages and land use shift."],
  ["Field", "Village connectivity, farmer trust, and training at scale."]
];

export default function HowItWorks() {
  return (
    <>
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <span className="eyebrow">Solution approach</span>
          <h1 style={{ fontSize: "2.6rem", marginTop: 12, maxWidth: 700 }}>
            From a soil probe to a two-line instruction a farmer can act on.
          </h1>
          <p style={{ marginTop: 16, opacity: 0.78, maxWidth: 560 }}>
            Five stages turn raw sensor and weather data into a single, trustworthy
            recommendation — with an agronomist always able to review or override it.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WORKFLOW.map((step, i) => (
              <div
                key={step.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: 24,
                  padding: "28px 0",
                  borderTop: i === 0 ? "1px solid var(--line)" : "none",
                  borderBottom: "1px solid var(--line)"
                }}
              >
                <span className="mono" style={{ color: "var(--gold)", fontSize: "1.4rem" }}>
                  {step.n}
                </span>
                <div>
                  <h3 style={{ fontSize: "1.25rem" }}>{step.title}</h3>
                  <p style={{ marginTop: 8, opacity: 0.78, maxWidth: 560 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--field)", color: "var(--paper)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
            Under the hood
          </span>
          <h2 style={{ fontSize: "1.9rem", marginTop: 10, maxWidth: 600 }}>
            Eleven prediction models, one advisory
          </h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {MODELS.map((m) => (
              <div
                key={m}
                style={{
                  padding: "16px 18px",
                  border: "1px solid var(--line-soft)",
                  borderRadius: "var(--radius)",
                  fontSize: "0.92rem"
                }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Operational reality</span>
          <h2 style={{ fontSize: "1.9rem", marginTop: 10, maxWidth: 600 }}>
            Where this gets hard
          </h2>
          <div className="grid-4" style={{ marginTop: 32 }}>
            {CHALLENGES.map(([tag, body]) => (
              <div className="card" key={tag}>
                <span className="tag">{tag}</span>
                <p style={{ marginTop: 14, opacity: 0.78, fontSize: "0.92rem" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
