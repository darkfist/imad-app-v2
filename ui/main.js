// submit username and password
var submit = document.getElementById('submit_btn');

submit.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              // capture a list of names and render it
              console.log('success');
              alert('success');
          } else if (request.status === 403) {
              alert('failed');
          } else if (request.status === 500) {
              alert('failed2');
          }
      }  
      // not done yet
    };
    
    // make the request
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    request.open('POST', 'http://darkfist.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};