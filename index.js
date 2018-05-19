const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/users');
var emailExistence = require('email-existence');

app.set('port', (process.env.PORT) || 5000);

// set the view engine to ejs
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

var allUsers = {};
var count = 0;

app.get('/', (req, res) => {
   res.render('pages/first');
});

app.get('/confirm', (req, res) => {
   res.render('pages/confirm', { count: count++ });
});
/* 
app.get('/log', (req, res) => {
   res.render('pages/login');
}); */

app.post('/login', (req, res) => {
   var name = req.body.name;
   var pass = req.body.pass;
   if(name === "AkasH" && pass === "ChetaN") {
      res.redirect("thisissecretpage");
   } else {
      res.redirect("confirm?");
   }
});

app.get('/thisissecretpage', (req, res) => {
   User.find({}, (err, users) => {
      allUsers = users;
   });
   res.render('pages/show_user', { users: allUsers });
});

app.post('/first', (req, res) => {
   var value = req.body.capital;
   console.log(value);
   res.render('pages/second');
});

app.post('/second', (req, res) => {
   var value = req.body.taj;
   console.log(value);
   res.render('pages/third');
});

app.post('/third', (req, res) => {
   var value = req.body.india_captain;
   console.log(value);
   res.render('pages/fourth');
});

app.post('/fourth', (req, res) => {
   var value = req.body.chief_minister;
   console.log(value);
   user_detail = true;
   res.render('pages/user_detail');
   user_detail = false;
});

app.post('/tax', (req, res) => {
   var firstname = req.body.firstname;
   var lastname = req.body.lastname;
   var email = req.body.email;
   var number = req.body.number.toString();
   
   console.log(typeof number);
   
   var newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      number: number
   });
   newUser.save(function(err, user) {
      if (err) {
         throw err;
      }
      console.log("User Successfully created.");
   });
   res.render('pages/tax');
});


app.listen(app.get('port'), function() {
   console.log('Node app is running on port ', app.get('portppac'));
});
