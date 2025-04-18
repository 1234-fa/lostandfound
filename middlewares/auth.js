const User= require('../models/userSchema')


const userAuth=(req,res,next)=>{
    if(req.session.user){
        User.findById(req.session.user)
            .then(data=>{
                if(data &!data.isBlocked){
                    next();
                }else{
                    res.redirect('/login');
                }
            })
            .catch(error=>{
                console.log("error in user auth middleware");
                res.status(500).send("Internal server error");
                
            })
        }else{
            res.redirect('/login')
        }
    }
const adminAuth=(req,res,next)=>{
    User.findOne({isAdmin:true})
    .then(data=>{
        if(data){
            next();
        }else{
            res.redirect('/admin/login')
        }
    })
    .catch(error=>{
        console.log("error in adminAuth MiddleWare");
        res.status(500).send("Internal server Error");
    })
}

module.exports={
    userAuth,adminAuth
}