// import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import userRoute from './api/v1/routes/user.routes.js';

// const prisma = new PrismaClient()
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());


// app.use('/', (req, res) => {
//   res.send('Hello World!'); 
// })


// app.get('/', async (req, res) => {
//     // res.send('Hello World!');
//     // res.json({ message: 'Hello World!' });

//     try {
//       const users = await prisma.users.findMany();

//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).send(null)
//     }
//   })

// app.post('/', async (req: Request, res: Response) => {
//   // PrismaClient
//   try {
//     const user = await prisma.users.create({
//       data: req.body  
//     })

//     console.log(user);
    

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).send(null)
//   }
// })

app.use("/api/v1", userRoute);


const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})