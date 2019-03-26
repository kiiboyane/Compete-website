const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 

const AdminSchema = new Schema({
	idUser : {
        type : String  , 
        required : [true , "L'id d'utilisateur est obligatoire !! "]  , 
        unique :true
    }
}); 

const  Admin = mongoose.model('admin' , AdminSchema);

module.exports = Admin; 
