const Router = require('express')
const router = new Router
const apartmentController = require('../controllers/apartmentController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/',checkRole('ADMIN'),apartmentController.create)
router.get('/',apartmentController.getAll)
router.get('/:id',apartmentController.getOne)


module.exports = router