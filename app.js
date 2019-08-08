var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var schedule = require('node-schedule');
const request = require('request');
var _ = require('lodash');
var fs = require('fs');
const axios = require('axios');
var app = express();


var { listPrimes , isPrime} =  require('./helpers/helperisPrime');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//______________________________//





































async function getQuestions()
{








  let res = await axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/discover?token=30c052c9-13d2-43e4-b2ba-3805a64dff19');

  let body = res.data;
 // console.log("data" + body);

 /*body = _.reverse(body);

 Math.floor(Math.random()*items.length)
 body = body.slice(0, 4);*/

//_____GET random question____//


var question=body[Math.floor(Math.random()*body.length)];


console.log('question'+ JSON.stringify(question));

var stringArray = question.hint.split(/(\s+)/);


switch (question.type) {
  case 'CALCULUS':
  //_____check type__________//
  switch (stringArray[6]) {
    case 'times':
      var result = Number(stringArray[4])*Number(stringArray[8]);
      console.log('times'+ result +' '+stringArray[4]  +' '+ stringArray[8]);
     //console.log('val._id' +val._id);
       answerQuestins(question._id,result) 
      break;
    case 'plus':
    var result = Number(stringArray[4])+Number(stringArray[8]);
      answerQuestins(question._id,result)
      break;
    case 'minus':
    var result = Number(stringArray[4])-Number(stringArray[8]);
     answerQuestins(question._id,result)
      break;
    
  
  
  
  }
 
    break;
  case 'PRIME':
      console.log('PRIME');
    break;
  default:
    console.log('MAXOIMUM')
   /* text = "Looking forward to the Weekend";
    var stringArray = question.hint.split(/(\s+)/);
    var result = Number(stringArray[4])*Number(stringArray[8]);
    console.log('times'+ result +' '+stringArray[4]  +' '+ stringArray[8]);
   //console.log('val._id' +val._id);
     answerQuestins(val._id,result) */
}


//filter 
//body
//var Calculs = _.filter(body, {type: 'CALCULUS'});


/*for(let val of Calculs) {
  //console.log(val)
var stringArray = val.hint.split(/(\s+)/);




console.log("number one" + stringArray[4]); 
console.log("number two " + stringArray[8]);

console.log("operation" + stringArray[6])

switch (stringArray[6]) {
  case 'times':
    var result = Number(stringArray[4])*Number(stringArray[8]);
    console.log('times'+ result +' '+stringArray[4]  +' '+ stringArray[8]);
   //console.log('val._id' +val._id);
     answerQuestins(val._id,result) 
    break;
  case 'plus':
  var result = Number(stringArray[4])+Number(stringArray[8]);
    answerQuestins(val._id,result)
    break;
  case 'minus':
  var result = Number(stringArray[4])-Number(stringArray[8]);
   answerQuestins(val._id,result)
    break;
  



}
/*console.log('contain' + val.hint.includes('times'))

console.log('plus' + val.hint.includes('plus'))

console.log('plus' + val.hint.includes('minus'))

}


var PRIME = _.filter(body, {type: 'PRIME'});



//console.log('Prime' + JSON.stringify(PRIME));


for(let val of PRIME) {
  //console.log(val)
  var stringArray = val.hint.split(/(\s+)/);

  //console.log('ss' + JSON.stringify(stringArray));
  var nbr = stringArray[6].replace('th',''); ;
  console.log('nbr'+ nbr);
  var fs = require('fs'); 

try {  
    var data = fs.readFileSync('test.txt', 'utf8');
    //console.log(data.toString());  

    console.log('tehe nbr' + data.indexOf(nbr) + 'nbr'+ nbr);
    answerQuestins(val._id, data.indexOf(nbr) );
    
      
} catch(e) {
    console.log('Error:', e.stack);
}
  
  

}  
 





var MAX = _.filter(body, {type: 'MAX'});






//});*/

  



}














function answerQuestins(id,trigger)
{


 


  
 


request('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+trigger, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


});


}




function attaqueUsers()
{



request('http://hackathon.internal.ats-digital.com:3333/api/users/all', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.


  body = JSON.parse(body);


  var randomuser=body[Math.floor(Math.random()*body.length)];
  
  


if(randomuser.role!="admin")
{

  request('http://hackathon.internal.ats-digital.com:3333/api/users/' +randomuser._id+ '/attack?token=30c052c9-13d2-43e4-b2ba-3805a64dff19', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('success attaque', body);

})

}
   

  



});


}





//attaqueUsers();

function attaquSomene(id)
{
  

  request('http://hackathon.internal.ats-digital.com:3333/api/users/5d4ae7e32148b811339222ff'+ '/attack?token=30c052c9-13d2-43e4-b2ba-3805a64dff19', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body);

})
}







var j = schedule.scheduleJob('*/5 * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  attaqueUsers();
 //getQuestions();
});


app.listen(3007, () => console.log(`Example app listening on port !`))






module.exports = app;
