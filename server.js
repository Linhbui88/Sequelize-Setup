require('dotenv').config()

const express = require('express')
const sequelize =require('./config/connection.js')
const Book = require('./models/Book')
// const routes = require('./routes')

const PORT = process.env.PORT ||3002
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(routes)


sequelize.sync({ force: false}).then(()=>{
  console.log('Sequelize connected!')
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
})


