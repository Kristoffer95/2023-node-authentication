import express, { Router } from 'express'
import { UserController } from '../controllers/index.js'

const router = Router();

// router.route('/').post(UserController.fetchUsers)
router.route('/users').get(UserController.fetchUsers)
router.route('/users/:id').get(UserController.fetchUserById)

export default router;