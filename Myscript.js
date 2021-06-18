const output=document.querySelector(".output");
const button=document.querySelector("button");

console.log(button);


button.addEventListener("click", function(){
 
const cost=document.querySelector("input");

let tip=(cost.value*0.15).toFixed(2);
let temp=`<h6> You should tip $${tip} on $${cost.value} bill.</h6>`;

console.log(output);
output.innerHTML=temp;
})