import { Router } from 'express'
import { AccountController } from '../controllers/account.controllers'
import { authed, guest } from '../middlewares'

const router = Router()

router.route('/register').post(guest, AccountController.register)

router.route('/login').post(guest, AccountController.login)

router.route('/logout').post(authed, AccountController.logout)

router.route('/reset').post(guest, AccountController.reset)

export default router
