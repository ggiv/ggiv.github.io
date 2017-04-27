var menu;
window.onload=function(){
	menu=document.getElementById("menu");
	var	myHamburgerMenu=newHamburgerButton("menuButton");
	//uncomment a line to change the menu button appearance 
	//myHamburgerMenu.size(200);
	//myHamburgerMenu.position(200,100);
	//myHamburgerMenu.lineColor("#ff00ff");
	//myHamburgerMenu.lineWidth(15);
	//myHamburgerMenu.color("#e7026b");
}

function newHamburgerButton(menu_div){
	var menu=document.getElementById("menu");
	var menuButton=document.getElementById(menu_div);
	var menuContainer=document.getElementById("menu_nav");
	menuButton.innerHTML='\
				<svg id="svg" viewBox="0 0 100 100">\
				</svg>\
				';
	var line1,line2,line3;
	var icon=document.getElementById("svg");
	menuButton.addEventListener("click",menuClicked);
	menuButton.state="not_active";
	setupIcon();

	function menuClicked(){
		if(this.state=="not_active"){
			this.state="active";
			this.className="expand";
			animateIconToX();
			setTimeout(function(){
				menu.className="show";
			//	menuContainer.style.display="block";
				menuContainer.className="show";
				menuButton.className="endExpand";
				menu.style.left=(menu.offsetWidth-menu.clientWidth)+"px";
			},400)
		}else{
			animateIconToHamburger();
			menu.classList.remove("show");
			//menuContainer.style.display="none";
			menuContainer.classList="";
			this.state="not_active";
			this.classList.remove("expand");
		}
	}
	function setupIcon(){
		var icon=Snap("#svg");
		icon.clear();
		line1=icon.line(10,30,90,30);
		line2=icon.line(10,50,90,50);
		line3=icon.line(10,70,90,70);
	}
	function animateIconToX(){
		line1.animate({y2:70,x1:30,x2:70},200);
		line2.animate({x1:50,x2:50},200);
		line3.animate({y2:30,x1:30,x2:70},200);
	}
	function animateIconToHamburger(){
		line1.animate({y2:30,x1:10,x2:90},200);
		line2.animate({x1:10,x2:90},200);
		line3.animate({y2:70,x1:10,x2:90},200);
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
