import { Router } from 'express'
import { ProfileController } from '../controllers/profile.controllers'

const router = Router()

router.route('/').get(ProfileController.fetchProfiles)
router.route('/:id').get(ProfileController.fetchProfileById)

export default router
