const express = require('express')
//ROUTES PLACEHOLDER
//const productsRouter = require('./src/routes/products')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))

//using strategies to login
//require('./src/utils/auth')

//using routes
//app.use('/products', productsRouter)

module.exports = app