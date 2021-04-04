const router = require("express").Router()

// auth check middleware

const authCheck = function(req,res,next){
    if(req.user){
        next();
    }
    else{
        res.redirect("/auth/login")
    }
}


router.get("/",authCheck,(req,res)=>{
    res.send("<h2>Welcome to your dashboard</h2><h2>" + req.user.username+"</h2>")

})

module.exports = router;