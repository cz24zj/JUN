var squares = document.querySelectorAll('.square');
var rgb = document.querySelector('#rgb');
var target = "rgb(255,255,255)";
var easy = document.querySelector('.easy');
var normal = document.querySelector('.normal');
var hard = document.querySelector('.hard');
var text = document.querySelector('.text');
var h1 = document.querySelector('h1');
var mode = "easy";
var newcolor = document.querySelector('.nc');
function color() 
{
 var r = function () { return Math.floor(Math.random()*256) };
 return"rgb(" + r() +", " + r() +", " + r() +")";
};

function easy1(){
	for(var i = 0 ; i < 3; i++){
	h1.style.background = "rgb(60,140,190)";
	squares[i].style.background = color();
	squares[i].style.display = "block";
}
for(var i = 3; i < 9;i++){
	squares[i].style.display = "none";
}
target = squares[Math.floor(Math.random()*3)].style.background;
rgb.textContent = target;
};

function normal1(){
	for(var i = 0 ; i < 6; i++){
	h1.style.background = "rgb(60,140,190)";
	squares[i].style.background = color();
	squares[i].style.display = "block";
}
for(var i = 6; i < 9;i++){
	squares[i].style.display = "none";
}
target = squares[Math.floor(Math.random()*6)].style.background;
rgb.textContent = target;
};
function hard1(){
	for(var i = 0 ; i < 9; i++){
	h1.style.background = "rgb(60,140,190)";
	squares[i].style.background = color();
	squares[i].style.display = "block";
}
for(var i = 9; i < 9;i++){
	
	squares[i].style.display = "none";
}
target = squares[Math.floor(Math.random()*3)].style.background;
rgb.textContent = target;
};

newcolor.addEventListener('click',function(){
	if(mode =="easy"){
		easy1();
		pic();
	}else if(mode =="normal"){
		normal1();
		pic();
}else if(mode == "hard"){
	    hard1();
	    pic();
}});


easy.addEventListener('click',function(){
mode = "easy";
this.classList.add('btn1');
normal.classList.remove('btn2');
hard.classList.remove('btn3');
easy1();
pic();
});

normal.addEventListener('click',function(){
mode = "normal";
normal.classList.add('btn2');
easy.classList.remove('btn1');
hard.classList.remove('btn3');
normal1();
pic();
});

hard.addEventListener('click',function(){
mode = "hard";
this.classList.add('btn3');
easy.classList.remove('btn1');
normal.classList.remove('btn2');
hard1();
pic();
});

function pic(){
for(var i = 0 ; i < 9; i++){
	if(squares[i].style.display !="none"){
	    squares[i].addEventListener('click',function(){
	    	if(this.style.background!=target){
	    		text.textContent = "Try Again!";
	    		this.style.background = "none";
               }else{
	    		text.textContent = "Congratulations!";
	    		for(var i = 0 ; i < 9 ; i++){
	    			squares[i].style.background = target;
	    			h1.style.background = target;
	    		}
	    	}
	    })
	}
}
}
