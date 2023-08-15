import { PrismaClient, Users } from '@prisma/client'

const prisma = new PrismaClient()

interface accountExist {
  email: string,
  username: string
}

export const accountExist = async ({email, username}: accountExist) => {
  try {
    const isEmailExist: Users | null = await prisma.users.findUnique({
      where: {
        email: email
      }
    })

    const isUsernameExist: Users | null = await prisma.users.findUnique({
      where: {
        username: username
      }
    })
    
    if (isEmailExist || isUsernameExist) {
      return true
    }
    
    return false

  } catch (error) {
    throw new Error("Something went wrong.")
  }
}

// export const usernameExist = async (username: string) => {}