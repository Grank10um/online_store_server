const Router = require('express')
const router = new Router
const valuationController = require('../controllers/valuationController')
const checkRole = require('../middleware/CheckRoleMiddleware')


router.post('/',checkRole('ADMIN'), valuationController.create)
router.get('/', valuationController.getAll)
router.get('/:id', valuationController.getOne)
router.get('/:id/sum', valuationController.getSumByOne)
router.get('/apartment/:id', valuationController.getDetailsByOne)


module.exports = router