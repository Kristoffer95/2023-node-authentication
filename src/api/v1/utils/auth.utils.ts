import { Request, Response } from 'express'

declare module 'express-session' {
	export interface SessionData {
		userId: number // you can also specify a more specific type instead of 'any'
		// other custom properties can be added similarly
	}
}

export const logIn = (req: Request, user: number): boolean => {
	req.session.userId = user

	return false
}

export const logOut = (...args: [Request, Response]) => {
	const [req, res] = args

	req.session.destroy(() => {
		res.clearCookie(process.env.SESS_NAME!)
		res.json({ message: 'Successfully logged out' })
	})

	return
}

export const isLoggedIn = (req: Request) => !!req.session.userId
