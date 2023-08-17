import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import bcrypt from 'bcrypt';

import { isValidEmail, accountExist } from '../helpers/index.js';
import { PrismaClient } from '@prisma/client';
import { sendEmail } from '../helpers/sendEmail.js';

const prisma = new PrismaClient();

export const AccountController = {
  register: async (req: Request, res: Response) => {
    const { 
      email,
      username,
      password,
      first_name,
      last_name,
      role_id
    } = req.body;

    try {
      if (await accountExist({ email, username })) {
        res.status(400).json({ message: 'Account already exist' });
        return;
      }

      if (isValidEmail(email)) {

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
          data: {
            email,
            username,
            password: hashedPassword,
            first_name,
            last_name,
            role_id,
            email_verification_token: randomBytes(64).toString('hex'),
          },
        });

        sendEmail({
          to: email,
          subject: 'Account Verification',
          text: `Hello ${first_name}, This is an email verification for ${email}.`,
        });

        res.json({ 
          message: `Successfully registered email ${user.email}`,
          data: user
        });

        return;
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Unable to register at the moment.' });
    }
  },
};
