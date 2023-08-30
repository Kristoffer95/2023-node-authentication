import { Router } from 'express'
import { AccountController } from '../controllers/account.controllers'
import { authed, guest } from '../middlewares'

const router = Router()

router.route('/register').post(guest, AccountController.register)

router.route('/login').post(guest, AccountController.login)

router.route('/logout').post(authed, AccountController.logout)

// Send reset email
router
	.route('/reset')
	.get(guest, AccountController.sendPasswordResetEmail)
	.post(AccountController.updatePassword)

// Reset password

export default router
