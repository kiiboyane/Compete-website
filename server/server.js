
const express = require('express');
const bodyParser = require("body-parser"); 
const mongoose  = require("mongoose"); 

// for the communication with the client 
const cors = require('cors'); 
const fileUpload = require('express-fileupload');



// setting up my app
const app = express();

// connecting to mongodb :)
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/Compete", { useNewUrlParser: true }) ; 
mongoose.Promise = global.Promise; 

app.use(cors());
app.use(fileUpload());
// servng static files 
app.use(express.static("public"));

//first middleware to parse the req to json 
app.use(bodyParser.json()); 

//initializing routes 
app.use("/api", require("./routes/admin")); 
app.use("/api", require("./routes/user")); 
app.use("/api", require("./routes/competitor")); 

// the error handler middleware
app.use(function( err , req , res , next){
  // console.log(err.message.errors) ; 
    res.status(422).send({message : err.message});
});



app.listen(process.env.port || 3001 , function (){
  console.log("now listening for requests ")
});  












/*const http = require ('http'); 



var server = http.createServer(function (request , response){
  response.writeHead(200, {"Context-Type": "text/plain"}) ; 
  response.end("Hello World \n"); 
  //add_freopen(Compile_Execute);
});

server.listen(4000);



*/


//====LIST DEPENDENCIES===//
//const parseurl = require('parseurl');
//const bodyParser = require('body-parser');
//const path = require('path');
//const expressValidator = require('express-validator');
//const mongoose = require('mongoose');
//const Signature = require('./models/Compete.js')
//const url = 'mongodb://localhost:27017/Compete';
//=========================//


//====MONGOOSE CONNECT===//
/*mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});*/
//==========================//

//const mongoose = require('mongoose');
//let Schema = mongoose.Schema;
/*const competeSchema = new Schema({
  logins: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})*/
//const Compete = mongoose.model('Compete', competeSchema);
//module.exports = Compete;


//====GET ALL SIGNATURES===//
/*app.get('/api/compete', function(req, res) {
  Compete.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })*/
//==========================//
//====POST NEW SIGNATURE===//
/*app.post('/api/compete', function(req, res) {
  Compete.create({
    logins: req.body.logins,
    message: req.body.MessageofGuest,
  }).then(compete => {
    res.json(compete)
  });
});*/


//==========================//

