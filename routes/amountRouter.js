const Router = require('express')
const amountController = require('../controllers/amountController')
const router = new Router


router.post('/',amountController.create)
router.get('/',amountController.getAll)
router.get('/:id',amountController.getOne)

module.exports = router