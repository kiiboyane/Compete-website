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
router.get('/competitorsinfos' , function(req , res , next){
	Competitor.find({}).then(function(competitors){
		     var users = []; 
		     var data  = {"_id" : []} ; 
			 for (var i = competitors.length - 1; i >= 0; i--) {
			  	   data["_id"].push(competitors[i].idCompetitor);
			  } 
			   User.find(data).then(function(user){
			    	 users = user;
			    }).then(()=> res.send(users));
	});

});



//delete a competitor
router.delete('/deletecompetitor/:_id' , function(req , res, next){
	 Competitor.findByIdAndRemove(req.params).then(function(competitor){
     				res.send(competitor); 
	 }); 
}); 


// finding competitor by email 
router.get('/competitor' , function(req, res, next){
	 var query = {"email" : req.body.email}  ; 
	 console.log(query);
	 User.find(query).then(function(user){
	 	  console.log(user[0]);
	 	  var data = {"idCompetitor" : user[0]._id };  
	 	  console.log(data);
	 	  Competitor.find(data).then(function(competitor){
	 	  	     console.log(competitor); 
	 	  	     res.send(user); 
	 	});
	});
});



module.exports = router; 
