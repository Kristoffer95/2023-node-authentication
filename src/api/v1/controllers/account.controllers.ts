import { Request, Response } from 'express';
import { isValidEmail, accountExist } from '../helpers/index.js';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const AccountController = {

  register: async (req: Request, res: Response) => {
    const { email, username, password, name } = req.body;

    try {
      if (await accountExist({email, username})) {
        res.status(400).json({ message: 'Account already exist' });
        return
      };
  
      
      if (isValidEmail(email)) {
        const user = await prisma.users.create({
          data: {
            email: email,
            username: username,
            password: password,
            name: name,
            role: 'USER'
          }
        })
  
        res.json({ message: `Successfully registered email ${user.email}` });
  
        return
      }
    } catch (error) {
      return res.status(500).json({ message: 'Unable to register at the moment.' });
    }
  }
}
