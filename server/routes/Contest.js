const express = require('express');
const router = express.Router(); 
const User = require("../models/user.js") ; 


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
		  else res.json(user); 
	});
});

module.exports = router; 
