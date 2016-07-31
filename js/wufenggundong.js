function wufenggundong(yunxingshijian){
	var sum = 0;
	$(".huoche").children().each(
		function(){
			sum = sum + $(this).outerWidth(true);
		}
	);
	$(".huoche").html($(".huoche").html()+$(".huoche").html());
	dongyici(yunxingshijian);
	function dongyici(time){
		$(".huoche").animate(
			{
				"left":-1 * sum
			}
			,time
			,"easieLinear"
			,function(){
				$(".huoche").css("left",0);
				dongyici(yunxingshijian);
			}
		);
	}
	$(".huoche").mouseenter(
		function(){
			$(".huoche").stop();
		}
	);

	$(".huoche").mouseleave(
		function(){
			var alreadyRun = -1 * parseInt($(".huoche").css("left"));
			var time = yunxingshijian * (sum - alreadyRun) / sum;
			dongyici(time);
		}
	);
}