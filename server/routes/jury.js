const express = require('express');
const router = express.Router(); 
const Jury = require("../models/jury.js") ; 
const User = require("../models/user.js") ; 


/*
I have added the next argument in the callback functions
which refers to the next middleware , in my case the error handler
middleware . :P 
*/


// getting a list of all Jurys 
router.get('/jurys' , function(req , res , next){
	Jury.find({}).then(function(jurys){
			  res.send(jurys); 
	});
}); 


//getting a Jury with an email // to test 
router.get('/Jury' , function(req , res , next){
	 var query = { "email" : req.body.email}  ; 
     User.find(query).then(function(Jury){
	 	  res.send(Jury); 
	 });
});

//adding a  new Jury
/*router.get('/addjury' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes 
	Jury.find({"email" :req.body.email}).then(function(result){
		if(result.length>0){
               res.send(" the Jury already exists"); 
		}else {*/
			/*console.log("req") ; 
			console.log(req.body) ; */
/*			Jury.create(req.body).then(function(Jury){
				//console.log(Jury); 
				res.send(Jury);
			}).catch(next); 
		}
	}) ; 
	
});

*/
//delete a Jury 
router.delete('/deletejury/:id' , function(req , res, next){
	 Jury.findByIdAndRemove({_id : req.params.id}).then(function(jury){
     				res.send(jury); 
	 }); 
}); 




module.exports = router; 
