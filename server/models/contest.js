const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const ContestSchema = new Schema({
	publicationDate :{
		type : Date 
	},
	registrationDate :{
		type : Date 
	},
	submissionDate :{
		type : Date
	},
	Desciption :{
		type : String , 
		required : [true , " Chaque compétition doit y avoir une description !! "]
	}
	titre :{
		type : String , 
		required : [true , " Chaque compétition doit y avoir un titre !! "]
	}
}) ; 

const  Contest = mongoose.model('contest' , UserSchema);

module.exports = Contest  ; 
