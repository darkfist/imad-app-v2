// counter code
var button = getElementById("counter");
var counter = 0;
button.onClick = function() {
    
    
    
     counter = counter + 1;    
     var span = getElementById("count");
     span.innerHTML = counter.toString();
};
