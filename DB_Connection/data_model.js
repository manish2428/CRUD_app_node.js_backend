
const mongoose=require('mongoose')

//create a schema of a data
const dataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    created_at:{
        type:String,
        required:false
    },
    updated_at:{
        type:String,
        required:false,
        default:"not updated yet"
    }

})

//creating a model out of schema
const Data=mongoose.model('Data',dataSchema)

module.exports=Data