
import navbar from "./navbar.js";

document.getElementById("navbar1").innerHTML= navbar();



let dest = new Date("june 24, 2022 12:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();

let diff = dest-now;

var days = Math.floor(diff/ (1000*60*60*24));

var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
var mins = Math.floor((diff % (1000*60*60)) / (1000*60));
var secs = Math.floor((diff % (1000*60)) / (1000));

let timer = document.getElementById("timerBox").innerHTML = `
<ul>
<li id="hour">
  ${hours} :<br />
  <span>hours</span>
</li>
<li id="min">
  ${mins} :<br />
  <span>mins</span>
</li>
<li id="second">
 ${secs} <br />
  <span>secs</span>
</li>
</ul>
`;

//console.log(timer);

}, 1000);



import footer from "./footer.js"

document.getElementById("vinay-footer").innerHTML = footer();




