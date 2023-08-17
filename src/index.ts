import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv';

import routes from './api/v1/routes/index.js';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'))

app.use("/api/v1/", routes);

app.use((req, res: Response, next) => {
  res.status(404).json({ message: 'Not Found'})
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({
    message: 'Internal Server Error'
  })
})

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})


