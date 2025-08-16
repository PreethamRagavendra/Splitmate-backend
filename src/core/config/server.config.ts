import cors from "cors";
import express from "express";
import helmet from "helmet";

import { ENV } from "./env.config";

const createServer = () => {
	const server = express();

	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
	server.use(helmet());
	server.use(
		cors({
			origin: ENV.FRONTEND_ORIGIN,
			credentials: true,
		}),
	);

	return server;
};

export default createServer;
