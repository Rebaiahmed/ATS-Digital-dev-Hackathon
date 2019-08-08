export function answerPrimeQuestion(question){
    console.log("function a");
}



export function answerMAXQuestion(question){
    console.log("function a");
}




export function answerCalculusQuestion(question){
    console.log("function a");
}



export function discoverQuestions(url, token)
{

}


export function answerQuestins(id,trigger)
{


 


  
 


request('http://hackathon.internal.ats-digital.com:3333/api/nuggets/'+id+'/claim?token=30c052c9-13d2-43e4-b2ba-3805a64dff19&trigger='+trigger, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


});


}


export function attaquSomene(id)
{
  

  request('http://hackathon.internal.ats-digital.com:3333/api/users/5d4ae7e32148b811339222ff'+ '/attack?token=30c052c9-13d2-43e4-b2ba-3805a64dff19', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body);

})
}