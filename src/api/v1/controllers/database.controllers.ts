import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { catchAsync } from '../middlewares';


const prisma = new PrismaClient()

export const DatabaseController = {
  truncate: catchAsync(async (req: Request, res: Response) => {

    await prisma.user.deleteMany()
    // await prisma.role.deleteMany()
    
    res.json({ message: 'Truncate done!' });
  },)
}
