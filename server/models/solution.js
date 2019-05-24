const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const SolutionSchema = new Schema({
	ContestCompetitorID : {
        type : String  , 
        required : [true , "L'id du compétiteur est obligatoire !! "]  , 
        unique :true
    }
    apk : {
        type : String  , 
        required : [true , "L'id du compétiteur est obligatoire !! "]  , 
        unique :true
    }
}); 

const  Competitor = mongoose.model('competitor' , AdminSchema);

module.exports = Competitor; 
