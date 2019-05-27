const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const TeamSchema = new Schema({
	CompetitorsEmails :[],
    idContest : {
        type : String, 
        required : [true , "L'id de la compétition est obligatoire !! "]  
    },
    apk : {
        type : String   ,
        unique: true,
        sparse: true // za3ma it is unique if it is not null 
    }
}); 

const  Team = mongoose.model('team' , TeamSchema);

module.exports = Team; 
