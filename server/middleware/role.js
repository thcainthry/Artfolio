const check =
    (...roles)=>
    (req, res, next)=>{
        if(!req.user){
            return res.status(401).json("Unauthorized");   
        }

        const hasRole = roles.find(role=>req.user.role===role);

        if(!hasRole){
            return res.status(401).json("Unauthorized");
        }

        return next()
    };

    const role = {check};
    module.exports = role;