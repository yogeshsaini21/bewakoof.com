var form=document.querySelector("form");
    var userDatas=JSON.parse(localStorage.getItem("userDatas"));

    console.log(userDatas)

    let remail = userDatas.email;
    let rpassword = userDatas.password;
    console.log(remail,rpassword)

   let  log= document.getElementById("submit")
    log.addEventListener("click",login)
function login(){
    let lemail=document.getElementById("email").value;
    let lpassword=document.getElementById("password").value;

    if(remail===lemail && rpassword===lpassword){
        alert("logged in")
        window.location.href="index.html"
    }
    else alert("try agian")
}
  
import navbar from "./navbar.js";

document.getElementById("navbar1").innerHTML= navbar();

document.getElementById("logo_1").addEventListener("click",func)

function func(){
     
    window.location.href="index.html"
}