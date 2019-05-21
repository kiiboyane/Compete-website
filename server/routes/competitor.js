const express = require('express');
const router = express.Router(); 
const Competitor = require("../models/competitor.js") ; 
const User = require("../models/user.js") ; 





// getting a list of all the competitors 
router.get('/competitors' , function(req , res , next){
	Competitor.find({}).then(function(competitors){
			  res.send(competitors); 
	});
}); 

//adding a  new competitor with his email
router.post('/addcompetitor' , function(req , res , next){
	User.find({"email" :req.body.email}).then(function(result){
		if(result.length<1){
               res.send(" the user is unfound"); 
		}else {
			var data = {
				idCompetitor : result[0]._id
			}
			Competitor.find(data).then(function(reslt){
				if(reslt.length>0){
                     res.send("the user is already a competitor ");
				}else{
                     Competitor.create(data).then(function(competitor){
							res.send(competitor);
					}).catch(next); 
				}
			});
		}
	}).catch(next) ; 
}); 


// getting a list of all the competitors informations '
router.get('/competitorsInfo' , function(req , res , next){
	Competitor.find({}).then(function(competitors){
		     var data  = {} ; 
			 for (var i = competitors.length - 1; i >= 0; i--) {
			  	console.log(competitors[i].idCompetitor);
			    User.find({"_id" :competitors[i].idCompetitor}).then(function(user){
			    	 data 
			    }); 

			  } 
	});
});



/*
//getting a user with an email 
router.get('/user' , function(req , res , next){
	 var query = { "email" : req.query.email}  ; 
	 User.find(query).then(function(user){
	 	  res.send(user); 
	 });
});

//adding a  new user
router.post('/adduser' , function(req , res , next){
	//console.log(req.body); 
	//create is a Promise so we have to wait it until it finishes 
	User.find({"email" :req.body.email}).then(function(result){
		console.log("result") ; 
		console.log(result) ; 
		if(result.length>0){
               res.send(" the user already exists"); 
		}else {
			console.log("req") ; 
			console.log(req.body) ; 
			User.create(req.body).then(function(user){
				console.log(user); 
				res.send(user);
			}).catch(next); 
		}
	}) ; 
	
}); 



//delete a user 
router.delete('/deleteuser/:id' , function(req , res, next){
	 User.findByIdAndRemove({_id : req.params.id}).then(function(user){
     				res.send(user); 
	 }); 
}); 

//update a user 
router.put('/updateuser/:id' , function(req , res , next){
	 User.findByIdAndUpdate({_id : req.params.id} , req.body).then(function(){
			User.findOne({_id : req.params.id}).then(function(user){
				res.send(user); 
		    }); 
	 }); 
}); 

// check the user if it exists and the password if it is correct 
router.post('/logincheck' , function(req , res , next){
	var query = req.body  ; 
	User.find(query).then(function(user){
		  if(user.length<1) res.json({"response" : false}); 
		  else res.json({"response" : true}); 
	});
});
*/
module.exports = router; 
