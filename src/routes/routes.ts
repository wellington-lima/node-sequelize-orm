import express from 'express'
import UserController from '../controllers/UserController'

const router = express.Router()

router.post('/users', UserController.create)
router.get('/users', UserController.findAll)
router.get('/users/:userId', UserController.findOne)
router.put('/users/:userId', UserController.update)
router.delete('/users/:userId', UserController.destroy)

export default router