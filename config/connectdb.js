const mongoose = require('mongoose')


const connectdb=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
 console.log('you are connected to the db ')
    }catch(err){
        console.log(err)

    }
}




module.exports= connectdb ;
