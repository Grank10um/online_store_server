const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMiddleWare = require('../middleware/AuthMiddleWare')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWare, userController.check)
router.get('/users', userController.getAll)


module.exports = router