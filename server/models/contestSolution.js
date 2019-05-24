const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 


const ContestSolution = new Schema({
	juryid : {
        type : String , 
        unique : true 
    },
    teamid : {
    	type : string , 
    	unique : true
    },
    grid_marks : [] ;

}); 

const  Team = mongoose.model('team' , TeamSchema);

module.exports = Team; 
