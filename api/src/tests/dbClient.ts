import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { DbClient } from "../types/dbClient";

let mongoDb: MongoMemoryServer;

const connect = async() => {
  mongoDb = await MongoMemoryServer.create()
  const uri = mongoDb.getUri()
  await mongoose.connect(uri)
}

const disconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close()
  await mongoDb.stop()
}

const clearDatabase = () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    collection.deleteMany({});
  }
}

const dbClient: DbClient = {
  connect,
  disconnect,
  clearDatabase,
}

export default dbClient