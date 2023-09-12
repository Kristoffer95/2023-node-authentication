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

export const authed = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!isLoggedIn(req)) {
		// return next(new Error('You are not logged in'))
		return res
			.status(401)
			.json({ message: 'You are not logged in' })
	}

	next()
}
