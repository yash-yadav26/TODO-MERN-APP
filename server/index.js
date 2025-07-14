// cors ka use ye h ki frontend alg port mein run hota h or backend alg port mein to dono ko communicate krane ke kam h ata h
// morgan hame terminal mein ye dikha dega ki konse method se apni url hit ho rhi h  , kitni der mein ho rhi h , konsa route
let express = require('express')
let morgan = require("morgan")
let cors = require('cors') 
let mongoose = require('mongoose')
let app = express()
require("dotenv").config()
app.use(express.json())
app.use(morgan('dev')) 
app.use(cors())

// Routers
app.use("/api/v1/user" , require('./Routers/userroute'))
app.use("/api/v1/todo" , require('./Routers/todoroute'))
app.use("/api/v1" , require('./Routers/testroute'))


// mongoDb connection
mongoose.connect(process.env.DBURL).then(()=>{
    console.log('conntected to mongoDb');
app.listen(process.env.PORT , ()=>{
    console.log(`server running on the port ${process.env.PORT}`); 
})
})

