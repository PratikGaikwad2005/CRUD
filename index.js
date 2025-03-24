let express = require("express")
const mongoose = require("mongoose")
const enquiryRoutes = require("./App/routes/web/EnquiryRoutes")
require("dotenv").config()


let app = express()

app.use(express.json())


app.use("/web/api",enquiryRoutes)

mongoose.connect(process.env.URL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT , ()=>{
        console.log("Server is running on port " + process.env.PORT)
    })
})