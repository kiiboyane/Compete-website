const express = require('express');
const router = express.Router(); 
const Contest = require("../models/contest.js") ; 
const Admin = require("../models/admin.js") ; 


/*
I have added the next argument in the callback functions
which refers to the next middleware , in my case the error handler
middleware . :P 
*/

function compareDates(registrationDate, submissionDate, ResultDate){
 		if(registrationDate && submissionDate &&  new Date(submissionDate).getTime() -new Date(registrationDate).getTime()  <= 0) return false; 
 		if(ResultDate && submissionDate &&  new Date(ResultDate).getTime() - new Date(submissionDate).getTime() < 0 )return false; 
 
 		return true;
}

// getting a list of all Contests 
router.get('/contests' , function(req , res , next){
	Contest.find({}).then(function(contests){
		      console.log(contests);
			  res.send(contests); 
	});
}); 


//getting a Contest with an _id 
router.get('/Contest' , function(req , res , next){
	 var query = { "_id" : req.body._id}  ; 
	 Contest.find(query).then(function(Contest){
	 	  res.send(Contest);     
	 });
});
   
//adding a  new Contest , the idadmin should be included in the body 
router.get('/addcontest' , function(req , res , next){
	//create is a Promise so we have to wait it until it finishes  
	var idAdmin =  req.body.idadmin ; 
	if(idAdmin){
         Admin.find({"_id" : idAdmin}).then(function(admin){
           	    if(admin.length>0){
           	    	var condition = compareDates(req.body.registrationDate, req.body.submissionDate, req.body.ResultDate);
					if(condition){
						Contest.create(req.body).then(function(contest){
								res.send(contest);
						}).catch(next); 
					}else{
						res.send("the  dates should be in this order registrationDate  <  submissionDate < ResultDate ")
					}
           	    }else{
                    res.send("the id of the Admin is not valid "); 
           	    }
           }); 
	}else{
        res.send("the  request body should include idAdmin"); 
	}
	
}); 


//delete a Contest 
router.delete('/deleteContest/:_id/:idadmin' , function(req , res, next){
	var idAdmin =  req.params.idadmin ; 
	if(idAdmin){
         Admin.find({"_id" : idAdmin}).then(function(admin){
         	    console.log(admin); 
           	    if(admin.length>0){
					 Contest.findByIdAndRemove({"_id" : req.params._id}).then(function(contest){
     						res.send(contest); 
					}); 
           	    }else{
                    res.send("the id of the Admin is not valid "); 
           	    }
           });
	}else{
        res.send("the  request url should include idAdmin as a second variable "); 
	}
}); 

//update a Contest 
router.put('/updateContest/:_id/:idadmin' , function(req , res , next){
	var idAdmin =  req.params.idadmin ; 
	if(idAdmin){
         Admin.find({"_id" : idAdmin}).then(function(admin){
           	    if(admin.length>0){
					 Contest.findByIdAndUpdate({_id : req.params._id} , req.body).then(function(){
			              Contest.findOne({_id : req.params._id}).then(function(contest){
			              	  console.log(contest); 
			              	  res.send(contest); 
		                  }); 
	 				});
           	    }else{
                    res.send("the id of the Admin is not valid "); 
           	    }
           });
	}else{  
        res.send("the  request url should include idAdmin as a second variable "); 
	}
}); 


router.get('/searchcontest' , function (req , res , next ){
     console.log(req.body.term); 
	 Contest.search({query_string: {
	    query: req.body.term 
	  }
	}, function(err, results) {
		console.log(results);
        res.send (results); 
	});
 
});

module.exports = router; 
