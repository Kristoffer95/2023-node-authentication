import { Router } from 'express'
import { UserController } from '../controllers/user.controllers'

const router = Router()

router.route('/').get(UserController.fetchUsers)
router.route('/:id').get(UserController.fetchUserById)

export default router
