import { Router } from 'express'
import { TestController } from '../controllers/test.controllers'
// import { authed, guest } from '../middlewares'

const router = Router()

router.route('/error').get(TestController.test)

export default router
