const ApiError = require('../error/ApiError')
const {Trades} = require('../models/model')

class TradesController {
    async create(req, res, next) {
        try {
            let {
                trade_type,
                bank,
                info,
                price,
                price_1,
                tradeDate,
                //userId,
                apartmentId,
                customerId
            } = req.body
            const trade = await Trades.create({
                trade_type,
                bank,
                info,
                price,
                price_1,
                tradeDate,
                //userId,
                apartmentId,
                customerId
            })
            return res.json(trade)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let trades;
        trades = await Trades.findAll()
        return res.json(trades)
    }

    async getOne(req, res) {
        const {id} = req.params
        const trade = await Trades.findOne(
            {
                where: {id}
            },
        )
        return res.json(trade)
    }
}

module.exports = new TradesController()