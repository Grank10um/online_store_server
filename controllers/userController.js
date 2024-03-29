const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/model')

const generateJwt = (id, email, role) =>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '1h'}
        )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role}= req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный мейл или пароль'))
        }
        const candidate=await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest(`Пользователь ${email} уже существует`))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})

    }
    async login(req, res, next) {
        const {email, password}= req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Некорректный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getAll(req, res){
        let users;
        users=await User.findAll()
        return res.json(users)
    }
}
module.exports = new UserController()