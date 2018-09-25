var colr=document.querySelector('.abb1');
var colr2=document.querySelector('.abb2');
var cssGradient=document.querySelector('h3');



colr.addEventListener("input",colorSet);


colr2.addEventListener("input",colorSet);


function colorSet(){
var a=document.querySelector("body").style.background="linear-gradient(to right,"+colr.value+","+colr2.value+")";
cssGradient.innerHTML=a;
};
