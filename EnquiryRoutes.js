let express = require("express")
const { enquiryUpdate, enquiryDelete, enquiryView, enquiryInsert } = require("../../controller/web/userEnquiryController")

let enquiryRoutes = express.Router()

enquiryRoutes.post("/insert" , enquiryInsert)
enquiryRoutes.get("/view" , enquiryView)
enquiryRoutes.delete("/delete/:id" , enquiryDelete)
enquiryRoutes.put("/update/:id",enquiryUpdate)

module.exports = enquiryRoutes