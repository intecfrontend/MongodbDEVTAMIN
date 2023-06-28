const express = require('express')
// const mongoose = require('mongoose')
// const Product = require('./models/productModel')
const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (req, res) => {
  res.send('Hello NODE API')
})



app.listen(3000, () => {
  console.log(`Node API app is running on port 3000`)
})