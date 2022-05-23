const ApiError = require('../error/ApiError')
const {Customer} = require('../models/model')

class CustomerController {
    async create(req, res, next) {
        try {
            let {cus_name} = req.body
            const customer = await Customer.create({cus_name})
            return res.json(customer)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let customers;
        customers=await Customer.findAll()
        return res.json(customers)

    }


    async getOne(req,res) {
        const {id} = req.params
        const customer = await Customer.findOne(
            {
                where: {id}
            },
        )
        return res.json(customer)

    }

}

module.exports = new CustomerController()