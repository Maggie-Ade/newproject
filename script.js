


// rey.addEventListener("click" ,function(){
//     alert.style.display = "block";
// })\

function log(){
    let alert = document.getElementById("alert");
        
            alert.style.display = "block";
       
    }

    window.onload = function (){
        setTimeout(function(){
            document.getElementById("loader").style.display="none"
            document.getElementById("main").style.display="block"

    },3000)
    }