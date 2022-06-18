var userArr=JSON.parse(localStorage.getItem("userDatas")) || [];
    
    
    document.querySelector("#sam3").addEventListener("submit",function(){
        event.preventDefault();
        let mobile = document.getElementById("mobile").value;
        console.log(mobile);

        var data={
            usermobile:mobile,
            // userotp:sam3.otp.value,
            email:sam3.email.value,
            password:sam3.password.value,
        }    
             console.log(data)
             

        
      
        localStorage.setItem("userDatas",JSON.stringify(data));
        window.location.href="login.html"
    })

    import navbar from "./navbar.js";

document.getElementById("navbar1").innerHTML= navbar();

document.getElementById("logo_1").addEventListener("click",func)

function func(){
     
    window.location.href="index.html"
}