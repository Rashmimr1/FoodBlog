const mongoose= require('mongoose')

const foodSchema=new mongoose.Schema({
    title:{
        type:String
    },
    author:{
        type:String
    },
    imageURL:{
        type:String
    }
})

module.exports=mongoose.model('Food',foodSchema)