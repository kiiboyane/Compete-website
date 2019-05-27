const express = require('express');
const router = express.Router(); 
const User = require("../models/user.js") ; 
const Competitor = require("../models/competitor.js") ; 
const Jury = require("../models/jury.js") ; 
const Admin = require("../models/admin.js") ; 
const ContestSolution = require("../models/contestSolution.js") ; 



/*
I have added the next argument in the callback functions
which refers to the next middleware , in my case the error handler
middleware . :P 
*/

// getting a list of all ContestSolutions 
router.get('/ContestSolutions' , function(req , res , next){
	ContestSolution.find({}).then(function(contestSolutions){
			  res.send(contestSolutions); 
	});
}); 


//getting a ContestSolution with an juryid and teamid  
router.get('/ContestSolution' , function(req , res , next){
	 var query = { "juryid" : req.body.juryid , "teamid"  : req.body.teamid}; 
	 ContestSolution.find(query).then(function(contestSolution){
	 	  res.send(contestSolution); 
	 });
});

//getting a ContestSolution with am id  
router.post('/ContestSolution/:id' , function(req , res , next){
	 var query = { "_id" : req.params.id}  ; 
	 ContestSolution.find(query).then(function(contestSolution){
	 	  res.send(contestSolution); 
	 });
});


//adding a  new ContestSolution
router.get('/addContestSolution' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes 
	 var query = { "juryid" : req.body.juryid , "teamid"  : req.body.teamid}; 
	ContestSolution.find(query).then(function(result){
		if(result.length>0){
               res.send(" the ContestSolution already exists"); 
		}else {
			/*console.log("req") ; 
			console.log(req.body) ;*/
			ContestSolution.create(req.body).then(function(contestSolution){
				//console.log(ContestSolution); 
				res.send(contestSolution);
			}).catch(next); 
		}
	}) ; 
	
}); 


//delete a ContestSolution // quand tu supprimes un utilisateur tu dois supprimer ses comptes admin et competitor ect 
router.delete('/deleteContestSolution/:_id' , function(req , res, next){
	 console.log(req.params._id);
	 ContestSolution.findOneAndRemove({_id : req.params._id}).then(function(ContestSolution){
	 		       res.send(ContestSolution); 
	});
}); 



//update a ContestSolution 
router.put('/updateContestSolution/:id'  , function(req , res , next){
	console.log(req.params.id);
	 ContestSolution.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
			ContestSolution.findOne({_id : req.params.id}).then(function(contestSolution){
				    res.send(contestSolution); 
		    }); 
	 }); 
}); 


//elastic search 
router.get('/updateContestSolution'  , function(req , res , next){
	  var query   = {  r}
	 ContestSolution.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
			ContestSolution.findOne({_id : req.params.id}).then(function(contestSolution){
				    res.send(contestSolution); 
		    }); 
	 }); 
}); 

module.exports = router; 
