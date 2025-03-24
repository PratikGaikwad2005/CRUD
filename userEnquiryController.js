let Enquiry = require("../../models/enquiry.model")

// Insert into the Database
let enquiryInsert = (req,res)=>{
    let {name,email ,phone,message} = req.body;
    let enquiry = new Enquiry({
        name,
        email,
        phone,
        message
    })
    enquiry.save().then(()=>{
        res.send({status:1 , msg:"data insert sucessfully",data:enquiry})
    }).catch((err)=>{
        res.send({status:0 , msg:"data insert failed",data:err})
    })
    
}

// View from the Database
let enquiryView =async (req,res)=>{
    let viewData =await Enquiry.find()
    res.send({status:1,msg:"Data view successfully",data:viewData})
}

let enquiryUpdate =async (req,res)=>{
    let EnquiryId = req.params.id;
    let {name,email,phone,message} = req.body
    let obj = {
        name,
        email,
        phone,
        message
    }
    let updateData = await Enquiry.updateOne({_id:EnquiryId},obj)
    res.send({status:1 , msg:"data update sucessfully" , data:updateData})
}

// delete from the Database
let enquiryDelete =async (req,res)=>{
    let EnquiryId = req.params.id
    let deletedata =await Enquiry.deleteOne({_id:EnquiryId})
    res.send({status:1 , msg:"deleted data successfully",data:deletedata})
}

module.exports = {enquiryInsert,enquiryView,enquiryUpdate,enquiryDelete}