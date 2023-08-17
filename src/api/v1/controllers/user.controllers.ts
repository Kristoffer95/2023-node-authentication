import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { catchAsync } from '../middlewares/index.js';


const prisma = new PrismaClient()

export const UserController = {
  fetchUsers: catchAsync(async (req: Request, res: Response) => {
      const users = await prisma.user.findMany();

      if (!users) res.status(404).send(null)

      res.json({ users });
  }),

  fetchUserById: (req: Request, res: Response) => {
    const { id } = req.params
    
    res.json({ message: `id is ${id}` });
  },
}
