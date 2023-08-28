const express = require('express');
const app =express();
const dotenv =require('dotenv').config()
app.use(express.json())
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json())

const DBconnection =require('./config/db')
const port = process.env.PORT

DBconnection()

app.use("/api/v1",require("./routes/userRoutes"))

app.use('/api/v1',require('./routes/blogRoutes'))



app.listen(port,()=>{
   console.log(`server is running on port ${port}`)
})