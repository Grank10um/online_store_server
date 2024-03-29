require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/model')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHendlingMiddleware')

const cors =require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)

//обработка ошибок в конце
app.use(errorHandler)

const start = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()
