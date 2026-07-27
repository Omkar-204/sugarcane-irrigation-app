const OWNERS = [
  ["Dr. Shyamal Virnodkar", "Professor, Computer Engineering, K J Somaiya Institute of Technology", "PI"],
  ["Dr. Radhika Kotecha", "Professor, Information Technology, K J Somaiya Institute of Technology"],
  ["Dr. Ninad Mehendale", "Associate Professor, Electronics Engineering, K J Somaiya School of Engineering"]
];

const TEAM = [
  ["Dr. Umesh Shinde", "Associate Professor, Basic Science and Humanities, K J Somaiya Institute of Technology"],
  ["Dr. Dinesh Auti", "Assistant Professor, Electronics Engineering, K J Somaiya School of Engineering"],
  ["Dr. Balwant Singh", "Assistant Professor, Electronics Engineering, K J Somaiya School of Engineering"]
];

const PROGRAMS = ["Information Technology", "Computer Engineering", "AI & Data Science", "Electronics & Telecommunication", "Robotics & AI"];

function Person({ name, role, tag }) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3 style={{ fontSize: "1.1rem" }}>{name}</h3>
        {tag && <span className="tag">{tag}</span>}
      </div>
      <p style={{ marginTop: 8, opacity: 0.72, fontSize: "0.9rem" }}>{role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <span className="eyebrow">Part D · Inter-disciplinary faculty committee</span>
          <h1 style={{ fontSize: "2.2rem", marginTop: 12, maxWidth: 640 }}>
            The people behind the use case
          </h1>
          <p style={{ marginTop: 14, opacity: 0.78, maxWidth: 520 }}>
            This use case is jointly owned across Computer Engineering, Information
            Technology and Electronics Engineering, in partnership with KIAAR and
            Godavari Biorefineries Ltd.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <span className="eyebrow">Faculty owners</span>
          <div className="grid-3" style={{ marginTop: 20 }}>
            {OWNERS.map(([name, role, tag]) => (
              <Person key={name} name={name} role={role} tag={tag} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <span className="eyebrow">Team</span>
          <div className="grid-3" style={{ marginTop: 20 }}>
            {TEAM.map(([name, role]) => (
              <Person key={name} name={name} role={role} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--field)", color: "var(--paper)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
            Programs mapped
          </span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            {PROGRAMS.map((p) => (
              <span key={p} className="tag on-dark">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
