const express = require('express');
const router = express.Router(); 
const User = require("../models/user.js") ; 
const Competitor = require("../models/competitor.js") ; 
const Jury = require("../models/jury.js") ; 
const Admin = require("../models/admin.js") ; 


/*
I have added the next argument in the callback functions
which refers to the next middleware , in my case the error handler
middleware . :P 
*/


// getting a list of all users 
router.get('/users' , function(req , res , next){
	User.find({}).then(function(users){
			  res.send(users); 
	});
}); 


//getting a user with an email 
router.get('/user' , function(req , res , next){
	 var query = { "email" : req.body.email}  ; 
	 User.find(query).then(function(user){
	 	  res.send(user); 
	 });
});

//getting a user with an email 
router.post('/user/:id' , function(req , res , next){
	 var query = { "_id" : req.params.id}  ; 
	 User.find(query).then(function(user){
	 	  res.send(user); 
	 });
});

//adding a  new user
router.get('/adduser' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes 
	User.find({"email" :req.body.email}).then(function(result){
		if(result.length>0){
               res.send(" the user already exists"); 
		}else {
			/*console.log("req") ; 
			console.log(req.body) ; */
			User.create(req.body).then(function(user){
				//console.log(user); 
				res.send(user);
			}).catch(next); 
		}
	}) ; 
	
}); 


//delete a user // quand tu supprimes un utilisateur tu dois supprimer ses comptes admin et competitor ect 
router.delete('/deleteuser/:_id' , function(req , res, next){
	 console.log(req.params._id);
	 User.findOneAndRemove({_id : req.params._id}).then(function(user){
	 	Admin.findOneAndRemove({"idUser" : req.params._id}).then(function(admin){
	 		  Jury.findOneAndRemove({"idUser" : req.params._id}).then(function(jury){
	 		      Competitor.findOneAndRemove({"idCompetitor" : req.params._id}).then(function(competitor){
	 		            res.send(user); 
	 	          }); 
	 	     });
	 	});


	});

}); 



//update a user 
router.put('/updateuser/:id'  , function(req , res , next){
	console.log(req.params.id);
	 User.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
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
		  else res.json(user); 
	});
});

module.exports = router; 
