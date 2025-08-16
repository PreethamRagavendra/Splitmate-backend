import { ENV } from "./core/config/env.config";
import createServer from "./core/config/server.config";
import { errorHandlerMiddleware } from "./core/middlewares/errorHandler.middleware";

const server = createServer();

server.use(errorHandlerMiddleware);
server.listen(ENV.PORT, async () => {
	// await connectDatabase();
	console.log(`server is running on port ${ENV.PORT}`);
});
