const FORECAST = [
  { day: "Today", icon: "☁️", temp: "28°/20°", rain: "0%" },
  { day: "Wed", icon: "🌤️", temp: "27°/21°", rain: "10%" },
  { day: "Thu", icon: "🌦️", temp: "27°/20°", rain: "60%" },
  { day: "Fri", icon: "⛅", temp: "26°/19°", rain: "70%" },
  { day: "Sat", icon: "🌤️", temp: "27°/20°", rain: "30%" }
];

const SENSORS = [
  ["Soil moisture (30cm)", "22.4%", "low"],
  ["Soil moisture (60cm)", "24.7%", "low"],
  ["Soil temperature", "28.6°C", "normal"],
  ["Ambient temperature", "28.3°C", "normal"],
  ["Relative humidity", "62%", "normal"]
];

const ALERTS = [
  ["Soil moisture is low in Plot-12", "10:15 AM"],
  ["Rainfall expected on 23 July", "08:00 AM"],
  ["Irrigation delayed by 3 days", "06:00 AM"]
];

function statusColor(s) {
  if (s === "low") return "var(--alert)";
  if (s === "high") return "var(--water)";
  return "var(--field)";
}

export default function Dashboard() {
  return (
    <section className="section" style={{ paddingTop: 44 }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="eyebrow">Sample advisory · Plot-12 · 5.6 acres</span>
            <h1 style={{ fontSize: "2rem", marginTop: 8 }}>Sugarcane Irrigation Advisory Dashboard</h1>
             <p style={{ opacity: 0.7, marginTop: 6 }}>Plot-12 • Ramesh Patil • Real-time irrigation recommendation dashboard</p>

            <p style={{ opacity: 0.7, marginTop: 6 }}>Sugarcane · Co 86032 · Planted 12 Nov 2025 · 6.2 months</p>
          </div>
          <span className="tag">Illustrative data — for demonstration only</span>
        </div>

        <div className="furrows" style={{ margin: "28px 0" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
          {/* Main advisory card */}
          <div className="card-dark">
            <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
              Irrigation advisory
            </span>
            <h2 style={{ fontSize: "1.7rem", marginTop: 10 }}>Irrigate tomorrow morning for 2.5 hours</h2>
            <p style={{ marginTop: 10, opacity: 0.82 }}>
              Soil moisture is low and no rainfall is expected in the next 24 hours.
            </p>
            <div
              className="mono"
              style={{
                marginTop: 26,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                fontSize: "0.82rem"
              }}
            >
              <div>
                <div style={{ opacity: 0.6 }}>Next date</div>
                <div style={{ fontSize: "1.1rem", marginTop: 4 }}>22 July</div>
              </div>
              <div>
                <div style={{ opacity: 0.6 }}>Duration</div>
                <div style={{ fontSize: "1.1rem", marginTop: 4 }}>2.5 hrs</div>
              </div>
              <div>
                <div style={{ opacity: 0.6 }}>Water req.</div>
                <div style={{ fontSize: "1.1rem", marginTop: 4 }}>18.6 mm</div>
              </div>
              <div>
                <div style={{ opacity: 0.6 }}>Stress</div>
                <div style={{ fontSize: "1.1rem", marginTop: 4, color: "var(--gold-2)" }}>Medium</div>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="card">
            <span className="eyebrow">Weather forecast</span>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
              {FORECAST.map((f) => (
                <div key={f.day} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.78rem", opacity: 0.7 }}>{f.day}</div>
                  <div style={{ fontSize: "1.4rem", margin: "8px 0" }}>{f.icon}</div>
                  <div className="mono" style={{ fontSize: "0.72rem" }}>{f.temp}</div>
                  <div className="mono" style={{ fontSize: "0.72rem", color: "var(--water)" }}>{f.rain}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: "0.85rem", opacity: 0.75 }}>
              Rainfall expected 23–24 July. Plan irrigation accordingly.
            </p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: 24, alignItems: "start" }}>
          {/* Soil sensors */}
          <div className="card">
            <span className="eyebrow">Soil &amp; sensor status</span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
              {SENSORS.map(([label, value, status]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                  <span style={{ opacity: 0.75 }}>
                    <span
                      className="badge-dot"
                      style={{ background: statusColor(status) }}
                    />
                    {label}
                  </span>
                  <span className="mono">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yield prediction */}
          <div className="card">
            <span className="eyebrow">Yield prediction</span>
            <div className="stat-row" style={{ marginTop: 14 }}>
              <span className="stat-num">102.6</span>
              <span style={{ opacity: 0.7 }}>t/ha predicted</span>
            </div>
            <p style={{ marginTop: 8, fontSize: "0.85rem", opacity: 0.7 }}>Range: 95 – 108 t/ha</p>
            <div style={{ marginTop: 18, height: 8, borderRadius: 4, background: "var(--paper-2)", overflow: "hidden" }}>
              <div style={{ width: "78%", height: "100%", background: "var(--gold)" }} />
            </div>
            <p style={{ marginTop: 10, fontSize: "0.8rem", color: "var(--alert)" }}>
              ⚠ Delay in irrigation by 5 days may cause yield loss of 6–8%.
            </p>
          </div>

          {/* Alerts */}
          <div className="card">
            <span className="eyebrow">Alerts &amp; notifications</span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              {ALERTS.map(([msg, time]) => (
                <div key={msg}>
                  <p style={{ fontSize: "0.88rem" }}>{msg}</p>
                  <span className="mono" style={{ fontSize: "0.72rem", opacity: 0.55 }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <span className="eyebrow">Fertigation advisory</span>
          <div style={{ display: "flex", gap: 40, marginTop: 16, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.9rem" }}>Next fertigation: <strong>25 July 2026</strong> (after irrigation)</p>
            </div>
            <div className="mono" style={{ fontSize: "0.82rem", display: "flex", gap: 24, flexWrap: "wrap", opacity: 0.85 }}>
              <span>Urea — 20 kg</span>
              <span>DAP — 15 kg</span>
              <span>MOP — 15 kg</span>
              <span>Sulphate of Potash — 10 kg</span>
              <span>Zinc Sulphate — 3 kg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
