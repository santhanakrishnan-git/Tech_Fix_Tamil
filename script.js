function display_fun(z) {
        z.style.display="block"; 
}
function icon_fun(y) {
    var x=document.getElementById("nav-bar");
    console.log(y)
    if(x.style.display=="block"){
        x.style.display="none";
        y.classList.toggle("change"); 
    }else{
        x.style.display="block";
        x.style.transition="2s";
        y.classList.toggle("change");
    }
    
  }