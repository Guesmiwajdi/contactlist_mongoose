////////////////////////////////////////-------------------exportation de contactschema------------------------------------//////////////////////
const contactschema= require('../model/contact')

/////////////////////////////////////////---------------------get all  contact------------------------------//////////////////////////
exports.getcontact= async (req,res)=>{
    try{
        const Contact= await contactschema.find()
        newContact.save()
        res.status(200).send({msg:'this is th user list',newContact})
        }catch(err){
            console.log(err);
            res.status(500).send('you have no user to get ')
        }
}


///////////////////////////////---------------------------------post a user-----------------/////////////////////////////////////////////

exports.adduser= async(req,res)=>{
    try{
        const newContact= await new contactschema(req,body)
        newContact.save()
        res.status(200).send({msg:'you did it ,the contact is added', newContact})
        }catch(err){
            console.log(err);
            res.status(500).send('could not add a user')
        }
}

 


/////////////////////////////////////////////////-------------------update a user---------------------------------//////////////////////
exports.updateUser= async (req,res)=>{
    try{
        const {id} = req.params
    const userupdate= await contactschema.findByIdAndUpdate(id,{$set:{...req,body}})
    newContact.save()
    res.status(200).send({msg:'the user is apdated', newContact})
    }catch(err){
        console.log(err);
        res.status(500).send('you coudent update it ')
    }
    
    }
    
    
///////////////////////////////////////////---------------------------deleat a user--------------------------------------//////////////

exports.deletUser=async(req,res)=>{
    try{
        const {id} = req.params
        const deletUser= await contactschema.findByIdAndDelete(id )
        newContact.save()
        res.status(200).send({msg:'you did it the contact is deleted', newContact})
        }catch(err){
            console.log(err);
            res.status(500).send('could not delety it')
        }
}

//////////////////////////////////////////////////////------------------------get a single user -----------------------------//////////////////////////

exports.getUser= async (req,res)=>{
    try{
        const {id} = req.params
        const getuser= await contactschema.findById(id)
        newContact.save()
        res.status(200).send({msg:'this is the user you asked for ', newContact})
        }catch(err){
            console.log(err);
            res.status(500).send('could not a user')
        }
}