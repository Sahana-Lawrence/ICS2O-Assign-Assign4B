// JavaScript File

// variables assigned to calculate the area and circumference of a circle
function Area(){
var diameter = document.getElementById("diameter");
var radius = document.getElementById("radius");
var diametervalue = +diameter.value;
var radiusvalue = +(diameter/2).value;
var result1 = ((diameter/2).value*(diameter/2).value*Math.PI);
var result2  = (2*(diameter/2).value*Math.PI);
var divresult1 = document.getElementById("divresult1");
var divresult2 = document.getElementById("divresult2");
divresult1.innerHTML = result1;
divresult2.innerHTML = result2;
}