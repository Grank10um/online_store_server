const sequelize = require('../db')
const {DataTypes}=require('sequelize')
const { model } = require('../db')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Trades = sequelize.define('trades',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    trade_type: {type: DataTypes.STRING},
    bank: {type: DataTypes.STRING},
    info: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    price_1: {type: DataTypes.INTEGER},
    tradeDate: {type: DataTypes.DATE, defaultValue: new Date()}
})

const Apartment = sequelize.define('apartment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ap_adress: {type: DataTypes.STRING}
})

const Status = sequelize.define('status',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_name: {type: DataTypes.STRING},
})

const Customer = sequelize.define('customer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cus_name: {type: DataTypes.STRING}
})

const Valuation = sequelize.define('valuation',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    val_type: {type: DataTypes.INTEGER},
    val_sum: {type: DataTypes.INTEGER},
    val_info: {type: DataTypes.STRING},
    val_date: {type: DataTypes.DATE, defaultValue: new Date()}
})

const Wallet = sequelize.define('wallet',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    wal_type: {type: DataTypes.STRING},
    wal_value: {type: DataTypes.INTEGER},
    wal_notation: {type: DataTypes.STRING},
    wal_date: {type: DataTypes.DATE, defaultValue: new Date()}
})

// const Apatr_Val = sequelize.define('apart_val',{
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

User.hasMany(Trades)
Trades.belongsTo(User)

Apartment.hasMany(Trades)
Trades.belongsTo(Apartment)

Status.hasOne(Apartment)
Apartment.belongsTo(Status)

// Apartment.belongsToMany(Valuation, {through: Apatr_Val})
// Valuation.belongsToMany(Apartment,{through: Apatr_Val})

Apartment.hasMany(Valuation)
Valuation.belongsTo(Apartment)

Customer.hasMany(Valuation)
Valuation.belongsTo(Customer)

Customer.hasMany(Trades)
Trades.belongsTo(Customer)

module.exports = {
    User,
    Trades,
    Apartment,
    Status,
    Valuation,
    Customer,
    Wallet
}