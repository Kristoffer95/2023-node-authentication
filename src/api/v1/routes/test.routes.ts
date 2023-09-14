import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'

import { TestController } from '../controllers/test.controllers'
// import { authed, guest } from '../middlewares'

const testLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5,
})

const router = Router()

router.route('/error').get(testLimiter, TestController.test)

export default router
