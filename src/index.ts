import express, { Express } from 'express';
import dotenv from 'dotenv';

import routes from './api/v1/routes/index.js';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/", routes);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})