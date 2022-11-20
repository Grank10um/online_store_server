const ApiError = require('../error/ApiError')
const {Apartment, Status} = require('../models/model')

class ApartmentController {
    async create(req, res, next) {
        try {
            const {ap_adress, statusId} = req.body
            const apartment = await Apartment.create({ap_adress, statusId});
            let apartmentMessage = res.json(JSON.parse(apartment.id))
            return (apartmentMessage)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let apartments;
        apartments = await Apartment.findAll(
            {include: [{model: Status, as: 'status', attributes:['status_name']}]}
        )
        return res.json(apartments)
    }

    async getOne(req, res) {
        const {id} = req.params
        const apartment = await Apartment.findOne(
            {
                where: {id}
            },
        )
        return res.json(apartment)
    }

}

module.exports = new ApartmentController()