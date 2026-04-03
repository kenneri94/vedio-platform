import mongoose from 'mongoose';

import { ENV } from './env.js';

export const connectDB = async () => {

 try {
  
  if (!ENV.DB_URL) {
   throw new Error('DB is not defined in environment variables');
  }
  const conn = await mongoose.connect(ENV.DB_URL);
  console.log("Connected to Mongodb", conn.connection.host)
 } catch (error) {
  console.error("Error connecting MongoDB", error);
  process.exit(1) // 0 means success, 1 means failure
 }
 };