var FUllV=JSON.parse(localStorage.getItem("Fullviwe")) || []

function display(FUllV){
   
//console.log(FUllV)
FUllV.forEach(function (elem,index) {

var box = document.createElement("div");
var Product = document.createElement("img");
Product.src= elem.p1
var Brand = document.createElement("h2");
Brand.innerText = elem.p2;
var Product_discription = document.createElement("h3");
Product_discription.innerText = elem.p3;
var Product_amount = document.createElement("h3");
Product_amount.innerText = elem.p4;
var Adding = document.createElement("button")
Adding.innerText = "Remove"
Adding.setAttribute("id","Siddhu")
// style.cursor="pointer"
Adding.addEventListener("click",function(){
       Remove(elem,index)
})





// box.append(Brand, Product_discription, Product_amount,Adding);
document.querySelector("#full1").append(Product,Adding);
document.querySelector("#full2").append(Brand, Product_discription, Product_amount)
});

}

display(FUllV)

function Remove(elem,index){
  FUllV.splice(index,1)
  alert("Your Product Rmoved Successfully")
  window.location.reload()
  localStorage.setItem("Fullviwe",JSON.stringify(FUllV))
}

import navbar from "./navbar.js";

document.getElementById("navbar1").innerHTML= navbar();

document.getElementById("logo_1").addEventListener("click",func)

function func(){
     
    window.location.href="index.html"
}