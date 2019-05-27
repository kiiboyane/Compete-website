const mongoose = require("mongoose"); 
const mongoosastic = require('mongoosastic');
const Schema = mongoose.Schema ;  

const ContestSchema = new Schema({
	registrationDate :{// le delai pour s'inscrire 
		type : Date 
	},
	submissionDate :{// le delai pour poser une solution au probleme 
		type : Date
	},
	ResultDate :{// le delai pour le resultat des jury 
		type : Date
	},
	Desciption :{
		type : String , 
		required : [true , " Chaque compétition doit y avoir une description !! "],
		es_indexed:true
	},
	titre :{
		type : String , 
		required : [true , " Chaque compétition doit y avoir un titre !! "]
	},
	winner : String,
	jury: [],
	consigne : []  
}) ; 
ContestSchema.plugin(mongoosastic);

const  Contest = mongoose.model('contest' , ContestSchema);

module.exports = Contest  ; 
