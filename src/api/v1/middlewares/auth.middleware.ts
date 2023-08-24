import { Request, Response, NextFunction } from 'express'
import { isLoggedIn } from '../utils/auth.utils'

export const guest = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (isLoggedIn(req)) {
		return next(new Error('You are already logged in'))
	}

	next()
}
