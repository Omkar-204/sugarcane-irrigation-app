import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "sugarcane_irrigation";

if (!uri) {
  // Fails loudly at request time with a clear message instead of a cryptic
  // connection error, so it's obvious the env var is missing.
  console.warn("MONGODB_URI is not set. Add it in .env.local (dev) or Vercel Project Settings (prod).");
}

// Reuse the client + connection across warm serverless invocations.
// `global` survives between invocations on the same warm instance.
let cached = global._mongoClientPromise;

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!cached) {
    const client = new MongoClient(uri);
    cached = client.connect();
    global._mongoClientPromise = cached;
  }

  const client = await cached;
  return client.db(dbName);
}
