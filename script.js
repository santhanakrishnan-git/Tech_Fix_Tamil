function display_fun(z) {
        z.style.display="block"; 
}
function icon_fun(y) {
    var x=document.getElementById("nav-bar");
    if(x.style.display=="block"){
        x.style.display="none";
        y.classList.toggle("change"); 
    }else{
        x.style.display="block";
        y.classList.toggle("change");
    }
    
  }
  
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

