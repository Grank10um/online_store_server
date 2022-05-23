const ApiError = require('../error/ApiError')
const {Valuation, Apartment} = require('../models/model')

class AmountController {
    async create(req, res, next) {
        try {
            const {val_type, val_sum, val_info, apartmentId, customerId} = req.body
            const amount = await Valuation.create({val_type, val_sum, val_info, apartmentId, customerId});
            return res.json(amount)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let amounts;
        amounts=await Valuation.findAll()
        return res.json(amounts)
    }

    async getOne(req,res) {
        const {id} = req.params
        const amount = await Valuation.findOne(
            {
                where: {id}
            },
        )
        return res.json(amount)
    }
    async getOneAmount(req,res) { //доделать суммирование
        const {id} = req.params
        const apartment = await Apartment.sum('val_sum', {where: {id}})
        return res.json(apartment)
    }
}

module.exports = new AmountController()