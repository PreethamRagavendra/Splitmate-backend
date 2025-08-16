import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
	PORT: z.string().length(4),
	NODE_ENV: z.enum(["development", "production", "test"]),
	BASE_PATH: z.string(),
	FRONTEND_ORIGIN: z.url(),
	MONGO_URI: z.url().refine(
		(val) => {
			return val.startsWith("mongodb://") || val.startsWith("mongodb+srv://");
		},
		{
			error: "Invalid MongoDB Connection string",
		},
	),
	JWT_SECRET: z.string(),
	JWT_EXPIRES_IN: jwtExpiryValidation(true),
	JWT_SECRET_REFRESH: z.string(),
	JWT_REFRESH_EXPIRES_IN: jwtExpiryValidation(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
	console.error("Invalid environment variables:", parsed.error);
	process.exit(1);
}

function jwtExpiryValidation(onlyMinutes = false) {
	return z
		.string()
		.regex(
			/^\d+(s|m|h|d)$/i,
			"Invalid expiry format. Use like '15m', '7d', '1h', '30s'",
		)
		.superRefine((value, ctx) => {
			const unit = value.slice(-1).toLowerCase();
			const num = Number(value.slice(0, -1));

			if (num <= 0) {
				ctx.addIssue({
					code: "custom",
					message: "Expiry must be greater than 0",
					input: value,
				});
			}

			if (onlyMinutes && unit !== "m") {
				ctx.addIssue({
					code: "custom",
					input: value,
					message: "JWT expiry must be in minutes (e.g., '15m')",
				});
			}
		});
}

export const ENV = parsed.data;
