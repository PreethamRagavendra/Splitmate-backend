// Base shape for all errors
export interface ErrorResponseType<TDetails = undefined> {
	success: false;
	error: {
		code: string; // Ex: "SUCCESS"
		message: string; // message
		status: number; // Ex: 200
		details?: TDetails; // strictly typed details
		timestamp: string; // Date string
		stack?: string;
	};
}
