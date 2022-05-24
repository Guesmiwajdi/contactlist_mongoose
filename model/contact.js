const mongoose=require('mongoose')




/////////////////////////////////-----------------creation l schema mta3 contact ---------------------------------------////////////////////////



const contactschema=mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique :true
    }
})


//////////////////////////////////////////////////////----------------------hedha l export mta3 contact-------------------------------//////////////////////////
module.exports=mongoose.model('contactee',contactschema)