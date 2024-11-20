const Donar = require("../models/donar");

const postDonarData = async (req,res,next) => {
    try{
            const {name,email,age,gender,location,bloodGroup} = req.body;
            if(!name||!email || !age || !gender || !location || !bloodGroup){
                return res.status(400).json({error: "All fieldls are required"})
            }
            const newDonar = new Donar({
                name,email,age,gender,location,bloodGroup
            })
            await newDonar.save();
            res.status(201).json({message:"Donation form submitted successfully"})
    }catch(error){
        console.error("Error in submitting donation form:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
    
};

module.exports = {postDonarData}