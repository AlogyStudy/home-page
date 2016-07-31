function about_us_over(){
	document.getElementById("zicaidan1").style.display="block";
	document.getElementById("li2").style.background="#EE871C";
	document.getElementById("a1").style.color="white";
}
function about_us_out(){
	document.getElementById("zicaidan1").style.display="none";
	document.getElementById("li2").style.background="none";
	document.getElementById("a1").style.color="#595959 ";
}
function news_over(){
	document.getElementById("zicaidan2").style.display="block";
	document.getElementById("li3").style.background="#EE871C";
	document.getElementById("a2").style.color="white";
}
function news_out(){
	document.getElementById("zicaidan2").style.display="none";
	document.getElementById("li3").style.background="none";
	document.getElementById("a2").style.color="#595959 ";
}
function products_over(){
	document.getElementById("zicaidan3").style.display="block";
	document.getElementById("li4").style.background="#EE871C";
	document.getElementById("a3").style.color="white";
}
function products_out(){
	document.getElementById("zicaidan3").style.display="none";
	document.getElementById("li4").style.background="none";
	document.getElementById("a3").style.color="#595959 ";
}
function solve_over(){
	document.getElementById("zicaidan4").style.display="block";
	document.getElementById("li5").style.background="#EE871C";
	document.getElementById("a4").style.color="white";
}
function solve_out(){
	document.getElementById("zicaidan4").style.display="none";
	document.getElementById("li5").style.background="none";
	document.getElementById("a4").style.color="#595959 ";
}
function case_over(){
	document.getElementById("zicaidan5").style.display="block";
	document.getElementById("li6").style.background="#EE871C";
	document.getElementById("a5").style.color="white";
}
function case_out(){
	document.getElementById("zicaidan5").style.display="none";
	document.getElementById("li6").style.background="none";
	document.getElementById("a5").style.color="#595959 ";
}
function support_over(){
	document.getElementById("zicaidan6").style.display="block";
	document.getElementById("li7").style.background="#EE871C";
	document.getElementById("a6").style.color="white";
}
function support_out(){
	document.getElementById("zicaidan6").style.display="none";
	document.getElementById("li7").style.background="none";
	document.getElementById("a6").style.color="#595959 ";
}
function lunbo(){
	var nowcount = 0;
	var timer = 0;
	zidong();
	function zidong(){
			window.clearInterval(timer);
			timer = window.setInterval(
				function(){
					$("#button .right_button").trigger("click");
			}
			,4000);
			
		}
		$("#banner").mouseenter(
			function(){
				window.clearInterval(timer);
			}
		);
		$("#banner").mouseleave(
			function(){
				timer = window.setInterval(zidong);
			}
		);
	$("#button .right_button").click(
		function(){
			$("#banner .img1 ul li").eq(nowcount).fadeOut();
			if(nowcount < $("#banner .img1 ul li").length - 1){
				nowcount++;
			}else{
				nowcount = 0;
			}
			$("#banner .img1 ul li").eq(nowcount).fadeIn();
		}
	);
	$("#button .left_button").click(
		function(){
			$("#banner .img1 ul li").eq(nowcount).fadeOut();
			if(nowcount > 0){
				nowcount--;
			}else{
				nowcount = $("#banner .img1 ul li").length - 1;
			}
			
			$("#banner .img1 ul li").eq(nowcount).fadeIn();
		}
	);
}

function xuanxiangka(){
	$("#center2 .sort .top ul li").click(
		function(){
			$(this).addClass("cur").siblings().removeClass("cur").parents().siblings(".bd").children().
			eq($(this).index()).show().siblings().hide();
		}
	);
}