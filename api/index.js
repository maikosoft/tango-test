const express = require("express");
var cors = require('cors');
var utils = require('./utils.js');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// main route to get fibonacci
app.get('/api/fibonacci/:sended', function (req, res) {
  let sended = req.params.sended;
  
  if(sended == '0') { // just to parse char '0' to int 0
    sended = 0;
  } else {
    sended = parseInt(req.params.sended);
  }
  
  // a simple validation 0+ validation
  if (sended < 0 || sended == null) {
    res.status(400).send('Error: sended must be a positive number or 0');
  }
  // the response object
  response = {
   sended: sended,
   answer: utils.getFibonnacci(sended),
  };
  
  res.send(response);
});

// route to return error if url not fit
app.get("*", function (req, res) {
  res.status(400).send({error: "404 - Not Found"});   
});

app.listen(3000, () => {
 console.log("Server is running on port 3000");
});