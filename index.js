var numOfSquares=6;
var color=randomColorForArray(numOfSquares);
 var sq=document.querySelectorAll(".square");
 var pickedColor=pickcolor();
var clrdis=document.querySelector("#colorDisplay");
var dis=document.querySelector("#dis");
var h1=document.querySelector("#h1");
var resetButton= document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
clrdis.textContent=pickedColor;
h1.style.backgroundColor="steelblue";

easybtn.addEventListener("click",function(){
	this.classList.add("selected");
	 dis.textContent="correct!!!";
	hardbtn.classList.remove("selected");
	numOfSquares=3;

    color=randomColorForArray(numOfSquares);
	pickedColor=pickcolor();
for(var i=0;i<sq.length;i++)
{
	if(color[i])
	sq[i].style.backgroundColor=color[i];
	else
	sq[i].style.display="none";	
}


});
hardbtn.addEventListener("click",function(){
	this.classList.add("selected");
	easybtn.classList.remove("selected");
	 dis.textContent="";
	numOfSquares=6;
	 color=randomColorForArray(numOfSquares);
	pickedColor=pickcolor();
	for(var i=0;i<sq.length;i++)
{
	
	sq[i].style.backgroundColor=color[i];
	
	sq[i].style.display="block";	
}

});

resetButton.addEventListener("click",function(){
resetButton.textContent="new colors";
h1.style.backgroundColor="#232323";
color=randomColorForArray(numOfSquares);dis.textContent="";
pickedColor=pickcolor();
clrdis.textContent=pickedColor;
for (var i = 0; i < sq.length; i++) {
 	sq[i].style.backgroundColor=color[i];
}
h1.style.backgroundColor="steelblue";
});

 for (var i = 0; i < sq.length; i++) {
 	sq[i].style.backgroundColor=color[i];
 	sq[i].addEventListener("click",function(){
   var colorclicked=this.style.backgroundColor;
 	console.log(pickedColor + colorclicked);
 	if(pickedColor == colorclicked)
 	{ 
 		resetButton.textContent="play again?";
 	 dis.textContent="correct!!!";
 		clrchange(pickedColor);
 		h1.style.backgroundColor=pickedColor;
 		
 	}else
 	{dis.textContent="try again";
this.style.backgroundColor="#232323";
 	}
 	});
 }

 function clrchange(color)
 {
 	for (var i = 0; i <sq.length; i++) {
 		sq[i].style.backgroundColor=color;
 		}
 }

 function pickcolor()
 {
var ret=Math.floor(Math.random()*color.length);
return color[ret];
 }
 function randomColorForArray(n)
 {
var a=[];
while(n-->0)
{
	a.push(oneRandomColor());




}

return a;
 }
 function oneRandomColor(){

var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
 //rgb(r ,g ,b)
return "rgb("+r+", "+g+", "+b+")";


 }
