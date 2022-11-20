const ApiError = require('../error/ApiError')
const {Valuation, User} = require('../models/model')
const { Op } = require('sequelize')

class ValuationController {
    async create(req, res, next) {
        try {
            let {val_type, val_sum,val_info,val_date,apartmentId,customerId} = req.body
            const valuation = await Valuation.create({val_type, val_sum,val_info,val_date,apartmentId,customerId})
            return res.json(valuation)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let valuations;
        valuations=await Valuation.findAll()
        return res.json(valuations)

    }

    async getOne(req,res) {
        const {id} = req.params
        const valuation = await Valuation.findOne(
            {
                where: {id}
            },
        )
        return res.json(valuation)
    }

    async getSumByOne(req,res) {
        const {id} = req.params
        const valuation = await Valuation.sum('val_sum',{
            where: {apartmentId: id,
                val_type:{
                [Op.notIn]: [0]

                } } })
        return res.json(valuation)
    }

    async getDetailsByOne(req,res) {
        const {id} = req.params
        const valuation = await Valuation.findAll({
            where: {apartmentId: id},
            //order: [Valuation, 'createdAt' , 'DESC']
            //include: [{model: User, as: 'user', attributes:['email']}]
        })
        return res.json(valuation)
    }

}

module.exports = new ValuationController()