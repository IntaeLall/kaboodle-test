import mongoose from "mongoose";
import { DbClient } from "../types/dbClient";

const uri = 'mongodb://mongodb:27017/test';

const dbCLient: DbClient = {
  connect: async function() {
    try {
      const db = await mongoose.connect(uri);
      db.syncIndexes()
      console.log("connected");
    } catch (e) {
      console.error(e);
    }
  },
  disconnect: async function() {
    await mongoose.disconnect()
  }
};

export default dbCLient;