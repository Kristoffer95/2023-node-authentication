import { Router } from 'express'

import { EmailVerificationController } from '../controllers'
import { DatabaseController } from '../controllers/database.controllers'
// import { guest } from '../middlewares/auth.middleware';

import AccountRoutes from './account.routes'
import UserRoutes from './users.routes'
import ProfileRoutes from './profile.routes'

const router = Router()

// Account
router.use('/account', AccountRoutes)

// User
router.use('/users', UserRoutes)

// Profile
router.use('/profiles', ProfileRoutes)

// Reset
router.route('/truncate').get(DatabaseController.truncate)

/**
 * NOTE: Better to include this inside the account routes
 * - update GET to DELETE
 */
router
	.route('/verify-email')
	.get(EmailVerificationController.verify)

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
