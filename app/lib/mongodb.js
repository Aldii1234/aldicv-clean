// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Harap atur MONGODB_URI di .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Gunakan cache global di dev agar koneksi tidak dibuat ulang setiap kali reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Di production, tidak cache
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
