const mongoose = require("mongoose")

const donarSchema = new mongoose.Schema({
    name:{type: String , required:true},
    email:{type: String , required:true, unique: true},
    age:{type: Number, required:true},
    gender:{type: String,required:true},
    location:{type: String, required:true},
    bloodGroup:{type: String, required:true},
    createdAt:{type: Date , default:Date.now}

});

const Donar= mongoose.model("Donar",donarSchema);
module.exports = Donar;