
function myFun(){
    let get =JSON.parse(localStorage.getItem("user")) || []; 
    alert("Payment Successful")
let obj = {
name : form.cname.value,
card : form.ccnum.value,
exp : form.expmonth.value,
year : form.expyear.value,
cvv : form.cvv.value,
paymentOption : form.cardOption.value
}

get.push(obj);


localStorage.setItem("user", JSON.stringify(get))

}