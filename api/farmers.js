import { getDb } from "./_lib/db.js";

const REQUIRED_FIELDS = [
  "name",
  "mobile",
  "village",
  "taluk",
  "district",
  "plotSize",
  "cropVariety",
  "plantingDate"
];

export default async function handler(req, res) {
  try {
    const db = await getDb();
    const farmers = db.collection("farmers");

    if (req.method === "GET") {
      const recent = await farmers
        .find({}, { projection: { mobile: 0 } }) // never expose phone numbers publicly
        .sort({ createdAt: -1 })
        .limit(6)
        .toArray();

      return res.status(200).json({ farmers: recent });
    }

    if (req.method === "POST") {
      const body = req.body || {};

      const missing = REQUIRED_FIELDS.filter((f) => !String(body[f] ?? "").trim());
      if (missing.length > 0) {
        return res.status(400).json({ error: `Missing required field(s): ${missing.join(", ")}` });
      }

      const doc = {
        name: String(body.name).trim(),
        mobile: String(body.mobile).trim(),
        village: String(body.village).trim(),
        taluk: String(body.taluk).trim(),
        district: String(body.district).trim(),
        plotSize: Number(body.plotSize),
        cropVariety: String(body.cropVariety).trim(),
        plantingDate: String(body.plantingDate).trim(),
        createdAt: new Date()
      };

      const result = await farmers.insertOne(doc);
      return res.status(201).json({ id: result.insertedId });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("api/farmers error:", err);
    return res.status(500).json({ error: "Something went wrong saving your registration." });
  }
}
