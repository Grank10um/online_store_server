const Router = require('express')
const router = new Router
const customerController = require('../controllers/customerController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/',checkRole('ADMIN'), customerController.create)
router.get('/', customerController.getAll)
router.get('/:id', customerController.getOne)


module.exports = router