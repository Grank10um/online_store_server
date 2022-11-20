const Router = require('express')
const router = new Router
const tradesController = require('../controllers/tradesController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/',checkRole('ADMIN'),tradesController.create)
router.get('/',tradesController.getAll)
router.get('/:id',tradesController.getOne)


module.exports = router