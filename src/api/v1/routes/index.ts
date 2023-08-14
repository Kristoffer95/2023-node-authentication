import express, { Router } from 'express';

import userRoutes from './user.routes.js';

const app = express();
const router = Router();

app.use('/users', userRoutes);

// router.route('/users').get(userRoutes);


export default router