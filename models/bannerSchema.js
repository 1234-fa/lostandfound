const mongoose=require('mongoose')
const {Schema}= mongoose


const bannerSchema=new Schema({
    image:{
        type:String,
        reqired:true
    },
    title:{
        type:String,
        required:ture
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String
    },
    startDate:{
        type:Date,
        required:true
    },
    enddate:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Banner',bannerSchema)