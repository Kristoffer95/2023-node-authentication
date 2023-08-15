import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const UserController = {
  fetchUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.users.findMany();

      if (!users) res.status(404).send(null)

      res.json({ users });
    } catch (error) {
      res.status(500).send(null)
    }
  },

  fetchUserById: (req: Request, res: Response) => {
    const { id } = req.params
    
    res.json({ message: `id is ${id}` });
  },
}
