import { Router } from 'express'
import { ProfileController } from '../controllers/profile.controllers'
import { authed } from '../middlewares'

const router = Router()

router.route('/').get(authed, ProfileController.fetchProfiles)
router
	.route('/:id')
	.get(authed, ProfileController.fetchProfileById)
	.patch(authed, ProfileController.updateProfileById)

export default router
