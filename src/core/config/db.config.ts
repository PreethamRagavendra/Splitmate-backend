import mongoose from "mongoose";
import { ENV } from "./env.config";

export const connectDatabase = async () => {
	try {
		await mongoose.connect(ENV.MONGO_URI, {
			serverSelectionTimeoutMS: 5000,
			socketTimeoutMS: 45000,
			connectTimeoutMS: 30000,
		});
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection failed:", error);
		process.exit(1);
	}
};
