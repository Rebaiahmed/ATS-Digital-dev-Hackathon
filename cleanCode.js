const request = require('request');
var _ = require('lodash');
const fetch = require("node-fetch");
const axios = require("axios");
var schedule = require('node-schedule');







//_________________________//

const asnwerQuestion = async (id,trigger) => {
    try {
      const response = await axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+trigger)
      const data = response.data;
      console.log("data" +data);
    } catch (error) {
      console.log("error query"+ error);
    }
  };


//_____________________//
const attackAll = () =>{


}



//________________________________//
const attackUser =  (id) => {

    axios.get('http://hackathon.internal.ats-digital.com:3333/api/users/'+id+'/attack?token=30c052c9-13d2-43e4-b2ba-3805a64dff19').then(resp => {

    console.log(resp.data);
}).catch(err=>{
    console.log("err"+err);
})
    /*try {
      const response = await axios.get('http://hackathon.internal.ats-digital.com:3333/api/users/'+id+'/attack?token=30c052c9-13d2-43e4-b2ba-3805a64dff19')
      const data = response.data;
      console.log("attack user" +JSON.stringify(data));
    } catch (error) {
      console.log("error query"+ error);
    }*/
  }





  //_______________________________//








const getQuestions= async url => {
    try {
      const response = await axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/discover?token=30c052c9-13d2-43e4-b2ba-3805a64dff19');
      const data = response.data;
     // console.log("hhello"+ data);
      //data= JSON.parse(data);
      data = _.reverse(body);
      data = body.slice(0, 3);
      //_____________________________________//
      var Calculs = _.filter(data, {type: 'CALCULUS'});
      var PRIME = _.filter(data, {type: 'PRIME'});
      var MAX = _.filter(data, {type: 'MAX'});
      const promises =[];

      for(let val of Calculs) {
        //console.log(val)
        var stringArray = val.hint.split(/(\s+)/);
      
      
      
      
     /* console.log("number one" + stringArray[4]); 
      console.log("number two " + stringArray[8]);
      
      console.log("operation" + stringArray[6])*/
    
      switch (stringArray[6]) {
        case 'times':
          var result = Number(stringArray[4])*Number(stringArray[8]);
          console.log('times'+ result +' '+stringArray[4]  +' '+ stringArray[8]);
          promises.push(  asnwerQuestion(val._id, result))

         axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+val._id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+result).then(resp => {

            console.log("success" + resp.data);
        }).catch(err=>{
            console.log("err times"+err);
        })

         /* try {
            const response = await axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+val._id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+result)
            const data = response.data;
            console.log("data work hey" +data);
          } catch (error) {
            console.log("error query"+ error);
          }*/
         
        

         





          break;
        case 'plus':
        var result = Number(stringArray[4])+Number(stringArray[8]);
        //promises.push(  asnwerQuestion(val._id, result))

        axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+val._id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+result).then(resp => {

            console.log("success" + resp.data);
        }).catch(err=>{
            console.log("err times"+err);
        })
          break;
        case 'minus':
        var result = Number(stringArray[4])-Number(stringArray[8]);
        // answerQuestins(val._id,result)
        //promises.push(  asnwerQuestion(val._id, result))
        /*axios.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+val._id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+result).then(resp => {

            console.log("success" + resp.data);
        }).catch(err=>{
            console.log("err times"+err);
        })*/
          break;
        
      
      
      
      }//end of swithc





    } // end of for 

  console.log("5rahina  boucle for"+ promises.length);
  /*Promise.all(promises)
    .then((results) => {
        console.log(results); // Result of all resolve as an array
    }).catch(err => console.log(err));*/





    } catch (error) {
      console.log("error getting nuggets" +error);
    }
  };


//____call teh fucntion_________//
//console.log('working')



//attackUser('5d4b151d59836d6762cd9004');

var j = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
    getQuestions();
  });


//setTimeout(getQuestions, 1000);
 

/*setTimeout(()=>{
    console.log('each seconde');
}, 1000);*/

//const promises = urls.map(url => request(url));


asnwerQuestion('5d4b151759836d6762cd8e0a',43);