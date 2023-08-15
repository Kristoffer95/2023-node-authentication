import Router from 'express';

import { AccountController, UserController } from '../controllers/index.js'


const router = Router();

// Account
router.route('/account/register').post(AccountController.register)

// Users
router.route('/users').get(UserController.fetchUsers)
router.route('/users/:id').get(UserController.fetchUserById)

export default router