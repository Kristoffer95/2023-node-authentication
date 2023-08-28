import { NextFunction, Request, Response } from 'express'
import { randomBytes } from 'crypto'
import bcrypt from 'bcrypt'

import { isValidEmail, accountExist } from '../utils'
import { PrismaClient } from '@prisma/client'
import { sendEmail } from '../utils'
import { catchAsync } from '../middlewares'
import { logIn } from '../utils'

const prisma = new PrismaClient()

export const AccountController = {
	register: catchAsync(async (req: Request, res: Response) => {
		const {
			email,
			username,
			password,
			first_name,
			last_name,
			role_id,
		} = req.body

		if (await accountExist({ email, username })) {
			res.status(400).json({ message: 'Account already exist' })
			return
		}

		if (isValidEmail(email)) {
			const hashedPassword = await bcrypt.hash(password, 10)

			const email_verification_token =
				randomBytes(64).toString('hex')

			const user = await prisma.user.create({
				data: {
					email,
					username,
					password: hashedPassword,
					first_name,
					last_name,
					role_id,
					email_verification_token,
				},
			})

			logIn(req, user.id)

			sendEmail({
				to: email,
				subject: 'Account Verification',
				text: `Hello ${first_name}, This is an email verification for ${email}.`,
				html: `<a href='http://localhost:8000/api/v1/verify-email/?token=${email_verification_token}' target='_blank'>Click to verify</b>`,
			})

			res.json({
				message: `Successfully registered email ${user.email}`,
				data: user,
			})
		}
	}),

	login: catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const { email, password } = req.body

			const user = await prisma.user.findUnique({
				where: { email },
			})

			console.log('user')
			console.log(user)

			if (!user) {
				res.status(400).json({ message: 'Invalid credentials' })
				return
			}

			if (await bcrypt.compare(password, user.password)) {
				logIn(req, user.id)

				res.json({
					message: 'Successfully logged in',
					data: user,
				})
				return
			}
			// res.status(400).json({ message: 'Invalid credentials' })
			// OR
			return next(new Error('Invalid credentials'))
		},
	),

	logout: catchAsync(async (req: Request, res: Response) => {
		req.session.destroy(() => {
			res.clearCookie(process.env.SESS_NAME!)
			res.json({ message: 'Successfully logged out' })
		})
	}),

	reset: catchAsync(async (req: Request, res: Response) => {
		// const { email } = req.body
		// const user = await prisma.user.findUnique({
		// 	where: { email },
		// })
		// if (!user) {
		// 	res.status(400).json({ message: 'Invalid credentials' })
		// 	return
		// }
		// const password_reset_token = randomBytes(64).toString('hex')
		// await prisma.user.update({
		// 	where: { id: user.id },
		// 	data: { password_reset_token },
		// })
		// sendEmail({
		// 	to: email,
		// 	subject: 'Password Reset',
		// 	text: `Hello ${user.first_name}, This is a password reset for ${email}.`,
		// 	html: `<a href='http://localhost:8000/api/v1/reset-password/?token=${password_reset_token}' target='_blank'>Click to reset</b>`,
		// })
		// res.json({
		// 	message: `Successfully sent password reset to ${user.email}`,
		// 	data: user,
		// })
	}),
}
