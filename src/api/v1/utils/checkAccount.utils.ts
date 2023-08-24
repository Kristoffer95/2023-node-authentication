import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

interface accountExist {
	email: string
	username: string
}

export const accountExist = async ({
	email,
	username,
}: accountExist) => {
	try {
		const isEmailExist: User | null =
			await prisma.user.findUnique({
				where: {
					email: email,
				},
			})

		const isUsernameExist: User | null =
			await prisma.user.findUnique({
				where: {
					username: username,
				},
			})

		if (isEmailExist || isUsernameExist) {
			return true
		}

		return false
	} catch (error) {
		throw new Error('Something went wrong.')
	}
}

// export const usernameExist = async (username: string) => {}
