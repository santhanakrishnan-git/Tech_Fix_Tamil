function myfun() {
    var z=document.getElementById("id1");
    if(z.style.display=="block"){
        z.style.display="none"; 
    }else{
        z.style.display="block";
    }
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