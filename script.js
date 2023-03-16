var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var a = document.getElementsByClassName("mySlides");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > a.length) {slideIndex = 1;}
  a[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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
  
