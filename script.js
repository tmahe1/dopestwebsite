// use variables to simplify your life!
var a = document.getElementById("logo");
var b = document.getElementById("murdoc");
var c = document.getElementById("2d");
var d = document.getElementById("noodle");
var e = document.getElementById("russel");
var f = document.getElementById("truck");
var g = document.getElementById("band");

// functions for the faces
function changeImage1(){
	document.getElementById("murdoc").src = "images/murdoc.gif";
	document.getElementById("murdoc").classList.remove("all-grey")
	document.getElementById("murdoc").classList.remove("opaque")
	document.getElementById("murdoc").classList.remove("yes-cursor")
}

function changeImage2(){
	c.src = "images/2d.gif";
	c.classList.remove("all-grey")
	c.classList.remove("opaque")
	c.classList.remove("yes-cursor")
}

function changeImage3(){
	d.src = "images/noodle.gif";
	d.classList.remove("all-grey")
	d.classList.remove("opaque")
	d.classList.remove("yes-cursor")
}

function changeImage4(){
	e.src = "images/russel.gif";
	e.classList.remove("all-grey")
	e.classList.remove("opaque")
	e.classList.remove("yes-cursor")
}

// function for the truck
function engineStart(){
a.classList.add("green");
f.src=("images/band_truck.gif");
f.classList.remove("yes-cursor");
f.classList.remove("opaque");
}

// functions for UX when user clicks on images
function grayScaleGone(el) {

}

function noOpaque(el) {
	
}