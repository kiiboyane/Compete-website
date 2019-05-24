const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 


const TeamSchema = new Schema({
	ID : {
        type : String , 
        unique : true 
    }
}); 

const  Team = mongoose.model('team' , TeamSchema);

module.exports = Team; 
