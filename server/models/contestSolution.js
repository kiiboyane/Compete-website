const mongoose = require("mongoose"); 
const Schema = mongoose.Schema ; 


const ContestSolutionSchema = new Schema({
	juryid : {
           type : String , 
           required : true
	},
    teamid : {
           type : String , 
           required : true
	},
    grid_marks : [] 

}); 

const  ContestSolution = mongoose.model('contestSolution' , ContestSolutionSchema);

module.exports = ContestSolution; 
