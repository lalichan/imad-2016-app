//Counter code
var button = document.getElementById('counter');

button.onclick= function() {
 
 // create the request object
 var request = new XMLHttpRequest();
 // Capture the response and store it in a variable
 request.onreadystatechange = function() {
 if (request.readyState === XMLHttpRequest.DONE) {
 // Take some action
 if (request.status === 200) {
     var counter = request.responseText;
     var span = document.getElementById('count');
     span.innerHTML=counter.toString();
 }
 }  
 // not done yet
 };
 // Make a request 
 request.open('GET','http://lalichan.imad.hasura-app.io/counter',true);
 request.send(null);
};
//select name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit.btn');
submit.onclick = function() {
    // make arequest to the server and send the name
    
    //capture the list of names and render it as list
   var name = ['name1','name2','name3','name4']; 
   var list = '';
   for (var I=0, I < names.length, I++) {
    list : '<li>' + names[I] + '</li>'; 
    }

   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
};