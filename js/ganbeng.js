function ganbeng(shijian){
	var myrightbut = document.getElementById("rightbut123");
	var myleftbut = document.getElementById("leftbut123");
	var mytulis = document.getElementById("tuul123").getElementsByTagName("li");
	var myganbeng = document.getElementById("ganbeng123");
	var timer;
	var nowimg = 0;
	timer = setInterval(youanniuyewu,shijian);
	myganbeng.onmouseover = function(){
		clearInterval(timer);
	}
	myganbeng.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(youanniuyewu,shijian);
	}
	myrightbut.onclick = youanniuyewu; 

	function youanniuyewu(){
		if(nowimg < mytulis.length - 1){
			nowimg = nowimg + 1;
		}else{
			nowimg = 0;
		}
		huantu();	
	myleftbut.onclick = function(){
		if(nowimg > 0){
			nowimg = nowimg - 1;
		}else{
			nowimg = mytulis.length - 1;
		}
		huantu();	
	}
	function huantu(){
		for(var i = 0 ; i <= mytulis.length - 1 ; i = i + 1){
			mytulis[i].className = "";
		}
		mytulis[nowimg].className = "cur123";
	}
}
}