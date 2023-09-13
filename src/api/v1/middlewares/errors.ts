import {
	Request,
	Response,
	NextFunction,
	RequestHandler,
} from 'express'
import { AppError } from '../utils'

export const catchAsync =
	(handler: RequestHandler) =>
	(...args: [Request, Response, NextFunction]) => {
		new Promise((resolve) => {
			resolve(handler(...args))
		}).catch(args[2])

		// handler(...args).catch(args[2])
	}

export const globalErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	// If the response is already sent, pass to next middleware/error handler
	if (res.headersSent) {
		return next(err)
	}

	// Check if the error is an instance of your custom AppError
	if (err instanceof AppError) {
		// Send your custom response
		return res.status(err.statusCode).send({
			errorCode: err.errorCode,
			message: err.message,
		})
	}

	// For any other errors, you can decide to log them and send a generic message
	console.error(err) // Log the error for debugging

	return res.status(500).json({
		message: 'Internal Server Error',
	})
}
