import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { catchAsync } from '../middlewares'

const prisma = new PrismaClient()

interface TypeQuery {
	token?: string
}

export const EmailVerificationController = {
	verify: catchAsync(async (req: Request, res: Response) => {
		const { token }: TypeQuery = req.query

		const user = await prisma.user.findFirst({
			where: {
				email_verification_token: {
					equals: token,
				},
			},
		})

		if (user?.email_verified) {
			return res
				.status(400)
				.json({ message: 'Already Verified' })
		}

		const updatedUser = await prisma.user.update({
			where: {
				email: user!.email,
			},
			data: {
				email_verified: true,
			},
		})

		if (updatedUser) {
			res.json({
				message: `Email ${user!.email} is now verified`,
			})
		}
	}),
}
