import type { ErrorRequestHandler, Request, Response } from "express";
import { ZodError } from "zod";
import { ErrorResponse } from "../../modules/utils/errors";
import { HTTP_STATUS } from "../config/statusCode.config";

export const formatZodError = (res: Response, error: ZodError) => {
	const formattedErrors = error.issues.map((issue) => ({
		field: issue.path.join("."),
		message: issue.message,
	}));

	return res
		.status(HTTP_STATUS.BAD_REQUEST.code)
		.json(
			new ErrorResponse(
				HTTP_STATUS.BAD_REQUEST.key,
				HTTP_STATUS.BAD_REQUEST.reason,
				formattedErrors,
			),
		);
};

export const errorHandlerMiddleware: ErrorRequestHandler = (
	error,
	_: Request,
	res: Response,
	__,
) => {
	if (error instanceof ZodError) {
		return formatZodError(res, error);
	}

	if (error instanceof ErrorResponse) {
		return res.status(error.error.code).json(error);
	}

	return res
		.status(HTTP_STATUS.INTERNAL_SERVER_ERROR.code)
		.json(new ErrorResponse());
};
