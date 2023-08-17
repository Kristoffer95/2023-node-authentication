import Router from 'express';

import { AccountController, EmailVerificationController, UserController } from '../controllers/index.js'
import { DatabaseController } from '../controllers/database.controllers.js';


const router = Router();

// Account
router.route('/account/register').post(AccountController.register)

// Email Verification
router.route('/verify-email').get(EmailVerificationController.verify)

// Users
router.route('/users').get(UserController.fetchUsers)
router.route('/users/:id').get(UserController.fetchUserById)


// Truncate
router.route('/truncate').get(DatabaseController.truncate)

export default router