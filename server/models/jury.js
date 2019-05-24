const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 


const JurySchema = new Schema({
	idUser : {
        type : String, 
        required : [true , "le jury doit être un utilisateur !! "]  
    }
}); 

const  Jury = mongoose.model('jury' , JurySchema);

module.exports = Jury; 
