import { Router } from 'express'

import { EmailVerificationController } from '../controllers'
import { DatabaseController } from '../controllers/database.controllers'
// import { guest } from '../middlewares/auth.middleware';

import AccountRoutes from './account.routes'
import UserRoutes from './account.routes'

const router = Router()

// Account
router.use('/account', AccountRoutes)

// Users
router.use('/users', UserRoutes)


router.route('/truncate').get(DatabaseController.truncate)

// NOTE: Better to include this inside the account routes
router.route('/verify-email').get(EmailVerificationController.verify)

export default router





// RECHECK THIS

// // Account
// router.route('/account/register').post(guest, AccountController.register)

// // Email Verification
// router.route('/verify-email').get(EmailVerificationController.verify)

// // Users
// router.route('/users').get(UserController.fetchUsers)
// router.route('/users/:id').get(UserController.fetchUserById)


// // Truncate
// router.route('/truncate').get(DatabaseController.truncate)

// export default router


// export { router as usersRoutes } from './users.routes.js'