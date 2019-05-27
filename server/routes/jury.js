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
router.get('/juries' , function(req , res , next){
	Jury.find({}).then(function(juries){
			  res.send(juries); 
	});
}); 


// getting a list of all the Jury informations '
router.get('/juriesinfos' , function(req , res , next){
	Jury.find({}).then(function(juries){
		     var users = []; 
		     var data  = {"_id" : []} ; 
			 for (var i = juries.length - 1; i >= 0; i--) {
			  	   data["_id"].push(juries[i].idUser);
			  } 
			   User.find(data).then(function(user){
			    	 users = user;
			    }).then(()=> res.send(users));
	});

});

//getting a Jury with an email // to test 
router.get('/jury' , function(req , res , next){
	 var query = { "email" : req.body.email}  ; 
     User.find(query).then(function(user){
           if(user[0]){
       	 	  Jury.find({"idUser" : user[0]._id}).then(function(jury){
	 	  	     if(jury.length>0){
                       res.send(jury[0]);
 	 	  	     }else{
 	 	  	     	res.send("jury not found"); 
	 	  	     }
	 	     }); 
           }else{
           	  res.send("user not found");
           }
	 });
});

//getting a Jury with an email // to test 
router.post('/jury/:id' , function(req , res , next){
	 var query = { "_id" : req.params.id}  ; 
     Jury.find(query).then(function(jury){
	 	  	     if(jury.length>0){
                       res.send(jury[0]);
 	 	  	     }else{
 	 	  	     	res.send("jury not found"); 
	 	  	     }
	 	  }); 
	 
});


//adding a  new Jury using e-mail 
router.post('/addjury' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes 
	User.find({"email" :req.body.email}).then(function(user){
		if(user.length==0){
               res.send(" the Jury must be a user first "); 
		}else {
			Jury.find({"idUser" : user[0]._id}).then(function(jury){
			   if(jury.length>0){
                    res.send("the Jury exists !");
			   }else{
                   Jury.create({"idUser" : user[0]._id}).then(function(result){
						res.send(result);
					}).catch(next); 
			   }
			});
		}
	}) ; 
});


//delete a Jury 
router.delete('/deletejury/:id' , function(req , res, next){
	 Jury.findByIdAndRemove({_id : req.params.id}).then(function(jury){
     				res.send(jury); 
	 }); 
}); 




module.exports = router; 
