var menu;
var IEVERSION;
window.onload=function(){
	menu=document.getElementById("menu");
	var	myHamburgerMenu=newHamburgerButton("menuButton");
	IEVERSION=detectIEversion();
	if(IEVERSION<9&&IEVERSION!=false){
		document.body.style.overflow="hidden";
		document.getElementById("menu_nav").style.width="30%";
		document.getElementById("menu_nav").style["zIndex"]="1";
	}
	//uncomment a line to change the menu button appearance 
	//myHamburgerMenu.size(200);
	//myHamburgerMenu.position(200,100);
	//myHamburgerMenu.lineColor("#ff00ff");
	//myHamburgerMenu.lineWidth(15);
	//myHamburgerMenu.color("#e7026b");

	

	

}
/*
	function menuClicked2(){
		if(state=="not_active"){
			state="active";
			this.className="expand";
			//animateIconToX();
			setTimeout(function(){
				menu.className="show";
				menuContainer.className="show";
				menuButton.className="endExpand";
				menu.style.left=(menu.offsetWidth-menu.clientWidth)+"px";
			},400)
		}else{
			//animateIconToHamburger();
			menu.className="";
			//menuContainer.style.display="none";
			menuContainer.display="none";
			menuContainer.className="";
			state="not_active";
			this.className="";
		}
	}
*/

function detectIEversion () {
  var ie = navigator.userAgent;
  ie=ie.toLowerCase();
  return (ie.indexOf('msie') != -1) ? parseInt(ie.split('msie')[1]) : false;
}

function newHamburgerButton(menu_div){
	var menu=document.getElementById("menu");
	var menuButton=document.getElementById(menu_div);
	var menuContainer=document.getElementById("menu_nav");
	var mainContainer=document.getElementById("container");

	menuButton.innerHTML='\
				<svg id="svg" viewBox="0 0 100 100">\
				</svg>\
				';
	var line1,line2,line3;
	var icon=document.getElementById("svg");
	
	try{

		menuButton.attachEvent("onclick",menuClicked);
	}
	catch(e){
		console.log(e);
		menuButton.addEventListener("click",menuClicked);
	};
	menuButton.state="not_active";
	setupIcon();
	var state="not_active"

	function menuClicked(){
		if(state=="not_active"){
			state="active";
			this.className="expand";
			menuButton.className="expand";
			animateIconToX();
			setTimeout(function(){
				menu.className="show";
			//	menuContainer.style.display="block";
				menuContainer.className="show";
				menu.style.display="block";
				menuButton.className="endExpand";
				menu.style.left=(menu.offsetWidth-menu.clientWidth)+"px";
				mainContainer.style.visibility="visible";
			},400)
		}else{
			animateIconToHamburger();
			menu.className="";
			//menuContainer.style.display="none";
			menu.style.display="none";
			menuContainer.className="";
			state="not_active";
			menuButton.className="collapse";
			//this.className="collapsed";
			mainContainer.style.visibility="hidden";
	
		}
	}
	function setupIcon(){
		if(detectIEversion()>=9||detectIEversion()==false){
			var icon=Snap("#svg");
			icon.clear();
			line1=icon.line(10,30,90,30);
			line2=icon.line(10,50,90,50);
			line3=icon.line(10,70,90,70);
		}else{
			//menuButton.innerHTML="<p style='font-size:3em;position:fixed;top:35%;left:4%'>...</p>";
			menuButton.innerHTML="<img id='linesIcon' src='lines.png'></img>";
			menuContainer.style.left="30%";

		}
	}
	function animateIconToX(){
		if(detectIEversion()>=9||detectIEversion()==false){
			line2.animate({x1:50,x2:50},200);
			line1.animate({y2:70,x1:30,x2:70},200);
			line3.animate({y2:30,x1:30,x2:70},200);
		
			if(detectIEversion()==9||detectIEversion()==8){
				menuButton.innerHTML='\
					<svg id="svg" viewBox="0 0 100 100">\
					<line x1="30" y1="30" x2="70" y2="70"/>\
					<line x1="70" y1="30" x2="30" y2="70"/>\
					</svg>\
					';
			}
		}else{
			//menuButton.innerHTML="<p style='font-size:3em;position:fixed;top:36%;left:4%;font-family:arial'>X</p>";
			menuButton.innerHTML="<img id='linesIcon' src='x.png'></img>";

		}
	}
	function animateIconToHamburger(){
		if(detectIEversion()>=9||detectIEversion()==false){
			line1.animate({y2:30,x1:10,x2:90},200);
			line2.animate({x1:10,x2:90},200);
			line3.animate({y2:70,x1:10,x2:90},200);
			if(detectIEversion()==9||detectIEversion()==8){
				menuButton.innerHTML='\
					<svg id="svg" viewBox="0 0 100 100">\
					<line x1="10" y1="30" x2="90" y2="30"/>\
					<line x1="10" y1="50" x2="90" y2="50"/>\
					<line x1="10" y1="70" x2="90" y2="70"/>\
					</svg>\
					';
			}
		}else{
			//menuButton.innerHTML="<p style='font-size:3em;position:fixed;top:35%;left:4%'>...</p>";
			menuButton.innerHTML="<img id='linesIcon' src='lines.png'></img>";

		}
	}
	function size(n){
		menuButton.style.width=n+"px";
		menuButton.style.height=n+"px";
		console.log(size);
	}
	function position(x,y){
		menuButton.style.position="absolute";
		menuButton.style.left=x+"px";
		menuButton.style.top=y+"px";
	}
function lineColor(color){
		menuButton.style["border-color"]=color;
		icon.style.stroke=color;
	}
	function lineWidth(n){
		menuButton.style["border-width"]=n+"px";
		icon.style.strokeWidth=n+"px";
	}
	function color(color){
		menuButton.style.background=color;
	}
	return {size:size,position:position,lineColor:lineColor,lineWidth:lineWidth,color:color};

}
