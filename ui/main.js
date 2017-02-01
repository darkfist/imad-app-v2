// counter code
var button = document.getElementById("counter");

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }  
      // not done yet
    };
    
    // make the request
    request.open('GET', 'http://darkfist.imad.hasura-app.io/counter', true);
    request.send(null);
};

// submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              // 
          }
      }  
      // not done yet
    };
    
    // make the request
    request.open('GET', 'http://darkfist.imad.hasura-app.io/counter', true);
    request.send(null);
};