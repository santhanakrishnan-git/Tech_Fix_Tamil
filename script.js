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
  
let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var sl = document.getElementsByClassName("mySlides");
  for (i = 0; i < sl.length; i++) {
    sl[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > sl.length) {slideIndex = 1;}
  sl[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}