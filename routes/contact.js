const express=require('express')
const contact = require('../model/contact')

const contactRouter= express.Router()
///////////////////////////////////////////////---------------ajout de schema----------------------/////////////////////
//const contactschema= require('../model/contact') 
 const{getcontact,adduser,updateUser,deletUser,getUser}= require('../controllers/contact')

////////////////////////grt all users ------------------------------------------//////////////////////////////////
contactRouter.get('/',getcontact)

////////////////////////////////////--------------------post all users-------------------------/////////////////////////
contactRouter.post('/',adduser)

/////////////////////////////////-------------------uploade a user----------------------------------///////////////////
contactRouter.put('/:id',updateUser)

///////////////////////////////--------------------------delate a user-------------------------////////////////////////////////

contactRouter.delete('/:id',deletUser)


////////////////////////////////////get a user by id--------------------------------////////////////////////////
contactRouter.get('/:id',getUser)



module.exports=contactRouter