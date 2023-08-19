import { Router } from 'express';
import { AccountController } from '../controllers/account.controllers.js';
import { guest } from '../middlewares/index.js';


const router = Router();

router.route('/register').post(guest, AccountController.register)

export default router