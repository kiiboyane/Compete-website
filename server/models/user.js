const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const UserSchema = new Schema({
	prenom :{
		type : String , 
		required : [true , "Le prénom est obligatoire !! "]
	},
	nom :{
		type : String , 
		required : [true , "Le nom est obligatoire !! "]
	},
	email :{
		type : String , 
		required : [true , "L'email est obligatoire !! "], 
		unique : true 
	},
	password :{
		type : String , 
		required : [true , "Le mot de passe est obligatoire !! "]
	},
	naissance :{
		type : Date 
	},
	sex :{
		type : Boolean 
	},
	fonction : String ,
	tel : String , 
	organisation : String 

}) ; 

const  User = mongoose.model('user' , UserSchema);

module.exports = User  ; 
