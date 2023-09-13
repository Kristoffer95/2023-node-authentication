import { NextFunction, Request, Response } from 'express'
import { AppError } from '../utils/appError.utils'
import { UNAUTHORIZED } from '../utils/appErrorCode'
import { catchAsync } from '../middlewares'

export const TestController = {
	test: catchAsync(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		async (req: Request, res: Response, next: NextFunction) => {
			// new AppError(+UNAUTHORIZED, 'test error 2', 401),
			return Promise.reject(
				new AppError(+UNAUTHORIZED, 'Test error', 401),
			)
		},
	),
}
