const express = require('express')
const app = express()
const router = require('./routes/route')

app.use(express.json())
app.use('/api',router)

app.listen(3001,()=>{
    console.log('server is running')
}) 

