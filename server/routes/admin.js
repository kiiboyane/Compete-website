const express = require('express');
const adminrouter = express.Router(); 
const Admin = require("../models/admin.js") ; 
const User = require("../models/user.js") ; 
const { check } = require('express-validator/check');


// getting a list of all admins 
adminrouter.get('/admin' , function(req , res , next){
	Admin.find({}).then(function(admins){
			  res.send(admins); 
	});
}); 

/*
//getting a admin with an email 
router.get('/admin' , function(req , res , next){
	// var query = { "email" : req.query.email}  ; 
	 Admin.find(query).then(function(admin){
	 	  res.send(admin); 
	 });
});*/

//adding a  new admin
adminrouter.post('/addadmin' , function(req , res , next){
	//console.log(req.body); 
	//create is a Promise so we have to wait it until it finishes
	var id =  req.body.idUser ; 
	console.log(id); 
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		User.findById( req.body.idUser).then(function(user) {
			console.log(user); 
			if (user) {
				 Admin.find(req.body).then(function(value){
                         if(value.length>0){
							    console.log(value); 
                                res.send("the user already is an admin "); 
						 }else {
								Admin.create(req.body).then(function(admin){
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



//delete a user 
adminrouter.delete('/deleteadmin/:id' , function(req , res, next){
	 Admin.findByIdAndRemove({_id : req.params.id}).then(function(admin){
     				res.send(admin); 
	 }); 
}); 

//update a user 
adminrouter.put('/updateadmin/:id' , function(req , res , next){
	 Admin.findByIdAndUpdate({_id : req.params.id} , req.body).then(function(){
			Admin.findOne({_id : req.params.id}).then(function(admin){
				res.send(admin); 
		    }); 
	 }); 
}); 

/*// check the user if it exists and the password if it is correct 
router.post('/logincheck' , function(req , res , next){
	var query = req.body  ; 
	User.find(query).then(function(user){
		  if(user.length<1) res.json({"response" : false}); 
		  else res.json({"response" : true}); 
	});
});*/

module.exports = adminrouter; 
