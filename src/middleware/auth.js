const adminAuth = (req,res,next) => {
        console.log("res 1");
        const token = "xyz";
        const isAuthorized = token === "xyz";
        if(!isAuthorized){
            res.status(401).send("Unauthorized")
        }else{
            next()
        }
    }

module.exports = {adminAuth}