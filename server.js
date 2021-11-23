const express = require('express')
const apiRoutes = require('./routes/users/index')

const app = express()
app.use(express.json())
app.use('/api',apiRoutes)

app.listen(3000,()=>{
    console.log("server started")
})