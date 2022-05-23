const Router = require('express')
const router = new Router
const valuationController = require('../controllers/valuationController')
const checkRole = require('../middleware/CheckRoleMiddleware')


router.post('/', valuationController.create)
router.get('/', valuationController.getAll)
router.get('/:id', valuationController.getOne)


module.exports = router