import { Router } from 'express'
// import controllers from './item.controllers'

const controller = (req, res) => {
  res.send({ message: 'Hello from controller' })
}

const router = Router()

// /api/item endpoint
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/item/:id endpoint
router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
