const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const CompetitiorSchema = new Schema({
	idCompetitor : {
        type : String  , 
        required : [true , "L'id du compétiteur est obligatoire !! "]  , 
        unique :true
    }
}); 

const  Competitor = mongoose.model('competitor' , CompetitiorSchema);

module.exports = Competitor; 
