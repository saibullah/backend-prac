const admin =(req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(403).json({
            message:"admin can only acces this page"
        })
    }
    next()
}
module.exports=admin