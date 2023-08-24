import { Router } from 'express'
import { AccountController } from '../controllers/account.controllers'
import { guest } from '../middlewares'


const router = Router()

router.route('/register').post(guest, AccountController.register)

export default router