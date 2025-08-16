import { connectDatabase } from "./core/config/db.config";
import { ENV } from "./core/config/env.config";
import createServer from "./core/config/server.config";

const server = createServer();

server.listen(ENV.PORT, async () => {
	await connectDatabase();
	console.log(`server is running on port ${ENV.PORT}`);
});
