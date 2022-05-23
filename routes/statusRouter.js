const Router = require('express')
const router = new Router
const statusController = require('../controllers/statusController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/',/*checkRole('ADMIN'),*/statusController.create)
router.get('/',statusController.getAll)
router.get('/:id',statusController.getOne)


module.exports = router