export const HTTP_STATUS = {
	CONTINUE: {
		code: 100,
		reason: "Continue",
		key: "CONTINUE",
	},
	SWITCHING_PROTOCOLS: {
		code: 101,
		reason: "Switching Protocols",
		key: "SWITCHING_PROTOCOLS",
	},
	PROCESSING: {
		code: 102,
		reason: "Processing",
		key: "PROCESSING",
	},
	EARLY_HINTS: {
		code: 103,
		reason: "Early Hints",
		key: "EARLY_HINTS",
	},
	OK: {
		code: 200,
		reason: "OK",
		key: "OK",
	},
	CREATED: {
		code: 201,
		reason: "Created",
		key: "CREATED",
	},
	ACCEPTED: {
		code: 202,
		reason: "Accepted",
		key: "ACCEPTED",
	},
	NON_AUTHORITATIVE_INFORMATION: {
		code: 203,
		reason: "Non-Authoritative Information",
		key: "NON_AUTHORITATIVE_INFORMATION",
	},
	NO_CONTENT: {
		code: 204,
		reason: "No Content",
		key: "NO_CONTENT",
	},
	RESET_CONTENT: {
		code: 205,
		reason: "Reset Content",
		key: "RESET_CONTENT",
	},
	PARTIAL_CONTENT: {
		code: 206,
		reason: "Partial Content",
		key: "PARTIAL_CONTENT",
	},
	MULTI_STATUS: {
		code: 207,
		reason: "Multi-Status",
		key: "MULTI_STATUS",
	},
	ALREADY_REPORTED: {
		code: 208,
		reason: "Already Reported",
		key: "ALREADY_REPORTED",
	},
	IM_USED: {
		code: 226,
		reason: "IM Used",
		key: "IM_USED",
	},
	BAD_REQUEST: {
		code: 400,
		reason: "Bad Request",
		key: "BAD_REQUEST",
	},
	UNAUTHORIZED: {
		code: 401,
		reason: "Unauthorized",
		key: "UNAUTHORIZED",
	},
	PAYMENT_REQUIRED: {
		code: 402,
		reason: "Payment Required",
		key: "PAYMENT_REQUIRED",
	},
	FORBIDDEN: {
		code: 403,
		reason: "Forbidden",
		key: "FORBIDDEN",
	},
	NOT_FOUND: {
		code: 404,
		reason: "Not Found",
		key: "NOT_FOUND",
	},
	METHOD_NOT_ALLOWED: {
		code: 405,
		reason: "Method Not Allowed",
		key: "METHOD_NOT_ALLOWED",
	},
	NOT_ACCEPTABLE: {
		code: 406,
		reason: "Not Acceptable",
		key: "NOT_ACCEPTABLE",
	},
	PROXY_AUTHENTICATION_REQUIRED: {
		code: 407,
		reason: "Proxy Authentication Required",
		key: "PROXY_AUTHENTICATION_REQUIRED",
	},
	REQUEST_TIMEOUT: {
		code: 408,
		reason: "Request Timeout",
		key: "REQUEST_TIMEOUT",
	},
	CONFLICT: {
		code: 409,
		reason: "Conflict",
		key: "CONFLICT",
	},
	GONE: {
		code: 410,
		reason: "Gone",
		key: "GONE",
	},
	LENGTH_REQUIRED: {
		code: 411,
		reason: "Length Required",
		key: "LENGTH_REQUIRED",
	},
	PRECONDITION_FAILED: {
		code: 412,
		reason: "Precondition Failed",
		key: "PRECONDITION_FAILED",
	},
	PAYLOAD_TOO_LARGE: {
		code: 413,
		reason: "Payload Too Large",
		key: "PAYLOAD_TOO_LARGE",
	},
	URI_TOO_LONG: {
		code: 414,
		reason: "URI Too Long",
		key: "URI_TOO_LONG",
	},
	UNSUPPORTED_MEDIA_TYPE: {
		code: 415,
		reason: "Unsupported Media Type",
		key: "UNSUPPORTED_MEDIA_TYPE",
	},
	RANGE_NOT_SATISFIABLE: {
		code: 416,
		reason: "Range Not Satisfiable",
		key: "RANGE_NOT_SATISFIABLE",
	},
	EXPECTATION_FAILED: {
		code: 417,
		reason: "Expectation Failed",
		key: "EXPECTATION_FAILED",
	},
	IM_A_TEAPOT: {
		code: 418,
		reason: "I'm a teapot",
		key: "IM_A_TEAPOT",
	},
	MISDIRECTED_REQUEST: {
		code: 421,
		reason: "Misdirected Request",
		key: "MISDIRECTED_REQUEST",
	},
	UNPROCESSABLE_ENTITY: {
		code: 422,
		reason: "Unprocessable Entity",
		key: "UNPROCESSABLE_ENTITY",
	},
	LOCKED: {
		code: 423,
		reason: "Locked",
		key: "LOCKED",
	},
	FAILED_DEPENDENCY: {
		code: 424,
		reason: "Failed Dependency",
		key: "FAILED_DEPENDENCY",
	},
	TOO_EARLY: {
		code: 425,
		reason: "Too Early",
		key: "TOO_EARLY",
	},
	UPGRADE_REQUIRED: {
		code: 426,
		reason: "Upgrade Required",
		key: "UPGRADE_REQUIRED",
	},
	PRECONDITION_REQUIRED: {
		code: 428,
		reason: "Precondition Required",
		key: "PRECONDITION_REQUIRED",
	},
	TOO_MANY_REQUESTS: {
		code: 429,
		reason: "Too Many Requests",
		key: "TOO_MANY_REQUESTS",
	},
	REQUEST_HEADER_FIELDS_TOO_LARGE: {
		code: 431,
		reason: "Request Header Fields Too Large",
		key: "REQUEST_HEADER_FIELDS_TOO_LARGE",
	},
	UNAVAILABLE_FOR_LEGAL_REASONS: {
		code: 451,
		reason: "Unavailable For Legal Reasons",
		key: "UNAVAILABLE_FOR_LEGAL_REASONS",
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
		reason: "Internal Server Error",
		key: "INTERNAL_SERVER_ERROR",
	},
	NOT_IMPLEMENTED: {
		code: 501,
		reason: "Not Implemented",
		key: "NOT_IMPLEMENTED",
	},
	BAD_GATEWAY: {
		code: 502,
		reason: "Bad Gateway",
		key: "BAD_GATEWAY",
	},
	SERVICE_UNAVAILABLE: {
		code: 503,
		reason: "Service Unavailable",
		key: "SERVICE_UNAVAILABLE",
	},
	GATEWAY_TIMEOUT: {
		code: 504,
		reason: "Gateway Timeout",
		key: "GATEWAY_TIMEOUT",
	},
	HTTP_VERSION_NOT_SUPPORTED: {
		code: 505,
		reason: "HTTP Version Not Supported",
		key: "HTTP_VERSION_NOT_SUPPORTED",
	},
	VARIANT_ALSO_NEGOTIATES: {
		code: 506,
		reason: "Variant Also Negotiates",
		key: "VARIANT_ALSO_NEGOTIATES",
	},
	INSUFFICIENT_STORAGE: {
		code: 507,
		reason: "Insufficient Storage",
		key: "INSUFFICIENT_STORAGE",
	},
	LOOP_DETECTED: {
		code: 508,
		reason: "Loop Detected",
		key: "LOOP_DETECTED",
	},
	NOT_EXTENDED: {
		code: 510,
		reason: "Not Extended",
		key: "NOT_EXTENDED",
	},
	NETWORK_AUTHENTICATION_REQUIRED: {
		code: 511,
		reason: "Network Authentication Required",
		key: "NETWORK_AUTHENTICATION_REQUIRED",
	},
} as const;

type HttpStatusMap = typeof HTTP_STATUS;
export type HttpStatusType = keyof typeof HTTP_STATUS;
export type HttpStatusCodesType = HttpStatusMap[keyof HttpStatusMap]["code"];
