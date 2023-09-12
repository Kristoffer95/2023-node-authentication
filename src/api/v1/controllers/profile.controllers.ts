import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { catchAsync } from '../middlewares'

const prisma = new PrismaClient()

export const ProfileController = {
	fetchProfiles: catchAsync(
		async (req: Request, res: Response) => {
			const profiles = await prisma.profile.findMany()

			if (!profiles) res.status(404).send(null)

			res.json({ profiles })
		},
	),

	fetchProfileById: (req: Request, res: Response) => {
		const { id } = req.params

		res.json({ message: `id is ${id}` })
	},

	updateProfileById: (req: Request, res: Response) => {
		res.json({ message: 'TO DO: updateProfileById' })
	},
}
