import { Request, Response } from 'express'
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
}
