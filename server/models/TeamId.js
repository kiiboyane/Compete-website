const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const TeamIdSchema = new Schema({
	idCompetitor : {
        type : String, 
        required : [true , "L'id du compétiteur est obligatoire !! "]  
    }
    idContest : {
        type : String, 
        required : [true , "L'id de la compétition est obligatoire !! "]  
    }
}); 

const  TeamId = mongoose.model('team-id' , TeamIdSchema);

module.exports = TeamId; 
