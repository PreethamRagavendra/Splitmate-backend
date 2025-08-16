import type {
	HttpStatusCodesType,
	HttpStatusType,
} from "../../core/config/statusCode.config";
import { HTTP_STATUS } from "../../core/config/statusCode.config";

export class ErrorResponse<TDetails = unknown> extends Error {
	public success: false = false;
	public error: {
		code: HttpStatusCodesType;
		message: string;
		status: HttpStatusType;
		details?: TDetails | undefined;
		timestamp: string;
		stack?: string | undefined;
	};

	constructor(
		status: HttpStatusType = HTTP_STATUS.INTERNAL_SERVER_ERROR.key,
		message: string = HTTP_STATUS[status].reason,
		details?: TDetails,
	) {
		super(message);
		// Fix prototype chain so instanceof works
		Object.setPrototypeOf(this, new.target.prototype);

		// Capture clean stack trace
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
		this.error = {
			code: HTTP_STATUS[status].code,
			message: message || HTTP_STATUS.INTERNAL_SERVER_ERROR.reason,
			status: status,
			details: details,
			timestamp: new Date().toISOString(),
			stack: this.stack,
		};
	}
}
