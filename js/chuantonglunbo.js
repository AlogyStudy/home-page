function chuantonglunbo(jiangeshijian,kuandu,yunxingshijian) {
	$(".phone .left .chuantong ul.tuul2 li:first").clone().appendTo(".phone .left .chuantong ul.tuul2");
	var nowimg = 0;
	var timer;
	//设置定时器
	timer = setInterval(youanniuyewu,jiangeshijian);
	$(".chuantong").mouseenter(
		function(){
			clearInterval(timer);
		}
	);
	$(".chuantong").mouseleave(
		function(){
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	function youanniuyewu(){
		if($(".phone .left .chuantong ul.tuul2").is(":animated") == false){
			if(nowimg < $(".phone .left .chuantong ul.tuul2 li").length - 2){
				nowimg = nowimg + 1;	
				huantu(); 
			}else{
				nowimg = 0;
				$(".phone .left .chuantong ul.tuul2").animate(
					{
						"left": -1 * kuandu * ($(".phone .left .chuantong ul.tuul2 li").length - 1)
					},yunxingshijian,function(){
						$(".phone .left .chuantong ul.tuul2").css("left",0);
					}
				);
			}
		 
		}
	}
	function huantu(){
		$(".phone .left .chuantong ul.tuul2").animate(
			{
				"left":-1 * kuandu * nowimg
			},yunxingshijian
		);
	}
}