const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const TeamSchema = new Schema({
	idCompetitors :[],
    idContest : {
        type : String, 
        required : [true , "L'id de la compétition est obligatoire !! "]  
    },
    apk : {
        type : String  , 
        unique :true
    }
}); 

const  Team = mongoose.model('team' , TeamSchema);

module.exports = Team; 
