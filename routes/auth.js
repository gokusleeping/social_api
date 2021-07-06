const router= require("express").Router();
const User= require("../models/User")

//register

router.get("/register", async (req,res)=>{
    try {
        const user = await new User({
            username: "john",
            email: "dada@gmail.com",
            password: "123456"
        })
        const data = await user.save();
        res.json(await data.json())
    } catch (error) {
        res.json({error: error.message}) // Client too should know of errors
    }
});


module.exports = router