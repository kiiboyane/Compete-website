const express = require('express');
const adminrouter = express.Router(); 
const Admin = require("../models/admin.js") ; 
const User = require("../models/user.js") ; 
const { check } = require('express-validator/check');


// getting a list of all admins 
adminrouter.get('/admins' , function(req , res , next){
	Admin.find({}).then(function(admins){
			  res.send(admins); 
	});
}); 
adminrouter.get('/adminsinfo' , function(req , res , next){
	Admin.find({}).then(function(admins){
	         var users = []; 
		     var data  = {"_id" : []} ; 
			 for (var i = admins.length - 1; i >= 0; i--) {
			  	data["_id"].push(admins[i].idUser);
			  }
			   User.find(data).then(function(user){
			    	 users = user;
			    }).then(()=> res.send(users));
	}); 
}); 


//getting a admin with an email 
adminrouter.get('/admin' , function(req , res , next){
	 var query = { "email" : req.body.email}; 
	 User.find(query).then(function(user){
	 	   console.log(user)
	 	   if(user.length>0){
		 	   var anotherquery = {"idUser" : user[0]._id}; 
		 	   Admin.find(anotherquery).then(function(admin){
		 	   	   if(admin.length>0) 
		 	   	   	       res.send(user);
		 	   	   	else res.send("the user is not an admin"); 
		 	   });
	 	   }else{
	 	   	    res.send("the email belong to no user");
	 	   }
	 });
});

//adding a  new admin
adminrouter.post('/addadmin' , function(req , res , next){
	//console.log(req.body); 
	//create is a Promise so we have to wait it until it finishes
	var id =  req.body.idUser ;  
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		User.findById(req.body.idUser).then(function(user) {
			console.log(user); 
			if (user) {
				 Admin.find(req.body.idUser).then(function(value){
                         if(value.length>0){
                                res.send("the user already is an admin "); 
						 }else {
						 	    var data = {"idUser" : req.body.idUser}; 
								Admin.create(data).then(function(admin){
									res.send(admin);
							   }).catch(next);
						 }
				 }); 
			}else {
				 return res.send("the admin must be already a user") ;
			}
		  });  
	}else res.send("the id does not match the id format") ; 
    
	 
}); 
//adding a  new admin by email
adminrouter.post('/addadminbyemail' , function(req , res , next){
	//console.log(req.body); 
	//create is a Promise so we have to wait it until it finishes
	var id =  req.body.email ;  
		User.find({"email" :req.body.email}).then(function(user) {
			if (user.length>0) {
				 Admin.find({"idUser" :user[0]._id}).then(function(value){
				 	     console.log(value);
                         if(value.length>0){
                                res.send("the user already is an admin "); 
						 }else {
						 	    console.log(user[0]._id); 
						 	    var data = {"idUser" : user[0]._id }; 
								Admin.create(data).then(function(admin){
									res.send(admin);
							   }).catch(next);
						 }
				 }); 
			}else {
				 return res.send("the admin must be already a user") ;
			}
		  });  
    
	 
}); 

//delete an admin  
adminrouter.delete('/deleteadmin/:id' , function(req , res, next){
	 Admin.findByIdAndRemove({_id : req.params.id}).then(function(admin){
     				res.send(admin); 
	 }); 
}); 




module.exports = adminrouter; 
