const ApiError = require('../error/ApiError')
const {Status} = require('../models/model')

class StatusController {
    async create(req, res, next) {
        try {
            let {status_name} = req.body
            const status = await Status.create({status_name})
            return res.json(status)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let statuses;
        statuses=await Status.findAll()
        return res.json(statuses)

    }


    async getOne(req,res) {
        const {id} = req.params
        const status = await Status.findOne(
            {
                where: {id}
            },
        )
        return res.json(status)
    
    }

}

module.exports = new StatusController()