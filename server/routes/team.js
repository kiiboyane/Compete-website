const express = require('express');
const router = express.Router(); 
const User = require("../models/user.js") ; 
const Competitor = require("../models/competitor.js") ; 
const Jury = require("../models/jury.js") ; 
const Admin = require("../models/admin.js"); 
const Team = require("../models/Team.js"); 


/*
I have added the next argument in the callback functions
which refers to the next middleware , in my case the error handler
middleware . :P 
*/


// getting a list of all teams 
router.get('/teams' , function(req , res , next){
	Team.find({}).then(function(teams){
			  res.send(teams); 
	});
}); 


//getting a team with an id  
router.get('/team' , function(req , res , next){
	 var query = { "_id" : req.body._id}  ; 
	 Team.find(query).then(function(team){
	 	  res.send(team); 
	 });
});

//getting a team members   who are users 
router.get('/teammembers' , function(req , res , next){
	 var query = { "_id" : req.body._id};
	 console.log(req.body._id);
	 if(req.body._id == undefined ) res.send("il faut donner l'id de l'équipe ! "); 
	 else{
		 Team.find(query).then(function(team){
		 	  var data = {"email" :[]}; 
		 	  for (var i = team[0].CompetitorsEmails.length - 1; i >= 0; i--) {
		 	  	   data["email"].push(team[0].CompetitorsEmails[i]); 
		 	  }
		 	  User.find(data).then(function(users){
		 	        res.send(users); 
		 	  });
		 });
	 }
});

//getting a team members'emails 
router.get('/Allteammembers' , function(req , res , next){
	 var query = { "_id" : req.body._id};
	 console.log(req.body._id);
	 if(req.body._id == undefined ) res.send("il faut donner l'id de l'équipe ! "); 
	 else{
		 Team.find(query).then(function(team){
		 	        res.send( team[0].CompetitorsEmails); 
		 });
	 }
});

//adding a  new Team
router.get('/addTeam' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes 
	Team.find({"CompetitorsEmails" : req.body.CompetitorsEmails , "idContest" : req.body.idContest}).then(function(result){
		if(result.length>0){
               res.send(" the Team already exists"); 
		}else {
			Team.create(req.body).then(function(team){
				res.send(team);
			}).catch(next); 
		}
	}); 
}); 


//delete a Team
router.delete('/deleteTeam/:_id' , function(req , res, next){
	 console.log(req.params._id);
	 Team.findOneAndRemove({_id : req.params._id}).then(function(team){
	 		res.send(team); 
	});

}); 



//update a Team 
router.put('/updateTeam/:id'  , function(req , res , next){
	console.log(req.params.id);
	 Team.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
			Team.findOne({_id : req.params.id}).then(function(team){
				    res.send(team); 
		  }); 
	 }); 
});




module.exports = router; 
