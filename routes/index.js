const Router = require('express')
const router = new Router
const apartmentRouter = require('./apartmentRouter')
const customerRouter = require('./customerRouter')
const tradesRouter = require('./tradesRouter')
const userRouter = require('./userRouter')
const amountRouter = require('./amountRouter')
const walletRouter = require('./walletRouter')
const statusRouter = require('./statusRouter')
const valuationRouter = require('./valuationRouter')

router.use('/user', userRouter)
router.use('/apartment', apartmentRouter)
router.use('/customer',customerRouter)
router.use('/trades',tradesRouter)
router.use('/amount',amountRouter)
router.use('/wallet',walletRouter)
router.use('/status',statusRouter)
router.use('/valuation', valuationRouter)




module.exports = router