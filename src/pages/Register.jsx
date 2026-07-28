import { useEffect, useState } from "react";

const EMPTY = {
  name: "",
  mobile: "",
  village: "",
  taluk: "",
  district: "",
  plotSize: "",
  cropVariety: "",
  plantingDate: ""
};

export default function Register() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | saving | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    loadRecent();
  }, []);

  async function loadRecent() {
    try {
      const res = await fetch("/api/farmers");
      if (!res.ok) return;
      const data = await res.json();
      setRecent(data.farmers ?? []);
    } catch {
      // Silently ignore — the form still works, this is just a preview list.
    }
  }

  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");

    try {
      const res = await fetch("/api/farmers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Could not save your registration.");
      }

      setStatus("success");
      setForm(EMPTY);
      loadRecent();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="wrap grid-2" style={{ alignItems: "start" }}>
        <div>
          <span className="eyebrow">Plot registration</span>
          <h1 style={{ fontSize: "2.2rem", marginTop: 12 }}>Register your sugarcane plot</h1>
          <p style={{ marginTop: 14, opacity: 0.78, maxWidth: 440 }}>
            This saves directly to the project's MongoDB Atlas database. Once
            registered, the advisory engine can start generating plot-specific
            irrigation recommendations for you.
          </p>

          {recent.length > 0 && (
            <div style={{ marginTop: 36 }}>
              <span className="eyebrow">Recently registered</span>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
                {recent.map((f) => (
                  <div key={f._id} className="card" style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                      <strong>{f.name}</strong>
                      <span className="mono" style={{ opacity: 0.6 }}>{f.plotSize} acres</span>
                    </div>
                    <div style={{ opacity: 0.65, fontSize: "0.82rem", marginTop: 4 }}>
                      {f.village}, {f.taluk} · {f.cropVariety}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="card">
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "24px 8px" }}>
              <h3 style={{ fontSize: "1.3rem" }}>Registered ✓</h3>
              <p style={{ marginTop: 10, opacity: 0.75 }}>
                Your plot has been added. You'll start seeing advisories on the
                dashboard once field data is linked.
              </p>
              <button className="btn btn-outline" style={{ marginTop: 18 }} onClick={() => setStatus("idle")}>
                Register another plot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" required value={form.name} onChange={update("name")} placeholder="Ramesh Patil" />
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  id="mobile"
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  value={form.mobile}
                  onChange={update("mobile")}
                  placeholder="9XXXXXXXXX"
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field">
                  <label htmlFor="village">Village</label>
                  <input id="village" required value={form.village} onChange={update("village")} placeholder="Satara" />
                </div>
                <div className="field">
                  <label htmlFor="taluk">Taluk</label>
                  <input id="taluk" required value={form.taluk} onChange={update("taluk")} placeholder="Daulatabad" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="district">District</label>
                <input id="district" required value={form.district} onChange={update("district")} placeholder="Belgav" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="field">
                  <label htmlFor="plotSize">Plot size (acres)</label>
                  <input
                    id="plotSize"
                    required
                    type="number"
                    step="0.1"
                    min="0"
                    value={form.plotSize}
                    onChange={update("plotSize")}
                    placeholder="5.6"
                  />
                </div>
                <div className="field">
                  <label htmlFor="cropVariety">Crop variety</label>
                  <input
                    id="cropVariety"
                    required
                    value={form.cropVariety}
                    onChange={update("cropVariety")}
                    placeholder="Co 86032"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="plantingDate">Planting date</label>
                <input
                  id="plantingDate"
                  required
                  type="date"
                  value={form.plantingDate}
                  onChange={update("plantingDate")}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "var(--alert)", fontSize: "0.85rem", marginBottom: 14 }}>{errorMsg}</p>
              )}

              <button className="btn btn-gold" type="submit" disabled={status === "saving"} style={{ width: "100%", justifyContent: "center" }}>
                {status === "saving" ? "Saving…" : "Register plot"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
