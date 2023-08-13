import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express';

const prisma = new PrismaClient()
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', async (req, res) => {
    // res.send('Hello World!');
    // res.json({ message: 'Hello World!' });

    try {
      const users = await prisma.users.findMany();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(null)
    }
  })

app.post('/', async (req: Request, res: Response) => {
  // PrismaClient
  try {
    const user = await prisma.users.create({
      data: req.body  
    })

    console.log(user);
    

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(null)
  }
})


const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})