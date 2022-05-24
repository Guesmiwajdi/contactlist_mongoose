const express = require('express')
const connectddb=require('./config/connectdb')
const contactRouter= require('./routes/contact')

const app =express()


//////////////////------------amalna l const mta3 l port////////////////////----------------------------------------------------------/////////////////////////
const port = process.env.port
//////////////////////////-------------dotenv require-----------------------////////////////////////////

require('dotenv').config()

////////////////link bel db
connectddb()


/////////////////////////////---------------------------partie routes------------------------------------------------------------////////////////////////////////


app.use(express.json)
app.use('/api/user',contactRouter)







/////////////////////////////-------------------------partie routed---------------------------////////////////////////////////////////
app.use(express.json)
app.use('/api/user',contactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`you did it go to the port num : ${process.env.port}`);;
})