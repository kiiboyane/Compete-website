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

//adding a new competitor with his email
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
			 /*   User.find({"_id" :competitors[i].idCompetitor}).then(function(user){
			    	 data 
			    }); */

			  } 
	});
});



//delete a competitor
router.delete('/deletecompetitor/:id' , function(req , res, next){
	 Competitor.findByIdAndRemove({_id : req.params.id}).then(function(competitor){
     				res.send(competitor); 
	 }); 
}); 

//update a competitor 
router.put('/updatecompetitor/:id' , function(req , res , next){
	 Competitor.findByIdAndUpdate({_id : req.params.id} , req.body).then(function(){
			Competitor.findOne({_id : req.params.id}).then(function(competitor){
				res.send(competitor); 
		    }); 
	 }); 
}); 


//getting a user with an email 
router.get('/competitor' , function(req , res , next){
	 var query = { "email" : req.query.email}  ; 
	 User.find(query).then(function(competitor){
	 	  res.send(competitor); 
	 });
});

 



module.exports = router; 
