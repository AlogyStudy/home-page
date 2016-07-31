$(function() {


	//滚屏效果  -- 鼠标滚动
	var onOff = 0;
	$(document).mousewheel(
		function(event, delta) {
			onOff -= delta;

			if (onOff > 4) {
				onOff = 4;
			};
			if (onOff < 0) {
				onOff = 0;
			};


			$('#wrap').stop().animate({
				'top': -100 * onOff + '%'
			}, 1500);

			//小圆点添加样式

			$('.xiaoyuandian ul li').eq(onOff).addClass('dian_cur').siblings().removeClass('dian_cur');


			//nav 添加样式
			$('#nav_wrap li').eq(onOff).addClass('tran_cur').siblings().removeClass('tran_cur');
			$('.tran_cur a:nth-child(2)').addClass('a_cur').siblings().removeClass('a_cur');


			//标题
			var title = onOff - 1;

			if (title < 0) {
				title = 0;
			}

			$('.page h3 img').eq(title).addClass('title');

			$('.page4Text p').addClass('pCur');

		});


	//点击小圆点 

	$('.xiaoyuandian ul li').click(
		function() {
			onOff = $(this).index();

			$('#wrap').stop().animate({
				'top': -100 * onOff + '%'
			}, 1500);

			$('.xiaoyuandian ul li').eq(onOff).addClass('dian_cur').siblings().removeClass('dian_cur');

			//nav 添加样式
			$('#nav_wrap li').eq(onOff).addClass('tran_cur').siblings().removeClass('tran_cur');
			$('.tran_cur a:nth-child(2)').addClass('a_cur').siblings().removeClass('a_cur');
		});



	//导航条效果

	$('#nav_wrap li').click(function() {

		onOff = $(this).index();

		$(this).addClass('tran_cur').siblings().removeClass('tran_cur');

		$('.tran_cur a:nth-child(2)').addClass('a_cur').siblings().removeClass('a_cur');


		$('#wrap').stop().animate({
			top: -100 * onOff + '%'
		}, 1000);

		$('.xiaoyuandian ul li').eq(onOff).addClass('dian_cur').siblings().removeClass('dian_cur');


		//标题
		var title = onOff - 1;

		if (title < 0) {
			title = 0;
		}

		$('.page h3 img').eq(title).addClass('title');


	});



	//焦点图
	var _now = 0;
	setInterval(showImg, 2500);

	function showImg() {

		$('.ban ul li').eq(_now).fadeIn().siblings().fadeOut();
		$('.ban ol li').eq(_now).addClass('ban_cur').siblings().removeClass('ban_cur');
		_now++;

		if (_now > $('.ban ul li').length - 1) {
			_now = 0;
		}
	}



	//小圆点
	$('.ban ol li').click(function() {
		var newImg = $(this).index();
		$('.ban ul li').eq(newImg).fadeIn().siblings().fadeOut();

		$(this).addClass('ban_cur').siblings().removeClass('ban_cur');

	});


	//下面是作品集"ICON"
	$(".shoufengqin .shoufengqin_no0").mouseenter(
		function() {
			$(".shoufengqin ul li").stop();
			$(".shoufengqin .shoufengqin_no1").animate({
				"left": 430
			}, 400);
			$(".shoufengqin .shoufengqin_no2").animate({
				"left": 460
			}, 400);
			$(".shoufengqin .shoufengqin_no3").animate({
				"left": 490
			}, 400);
			$(".shoufengqin .shoufengqin_no4").animate({
				"left": 520
			}, 400);
		}
	);
	$(".shoufengqin .shoufengqin_no1").mouseenter(
		function() {
			$(".shoufengqin ul li").stop();
			$(".shoufengqin .shoufengqin_no1").animate({
				"left": 30
			}, 400);
			$(".shoufengqin .shoufengqin_no2").animate({
				"left": 460
			}, 400);
			$(".shoufengqin .shoufengqin_no3").animate({
				"left": 490
			}, 400);
			$(".shoufengqin .shoufengqin_no4").animate({
				"left": 520
			}, 400);
		}
	);

	$(".shoufengqin .shoufengqin_no2").mouseenter(
		function() {
			$(".shoufengqin ul li").stop();
			$(".shoufengqin .shoufengqin_no1").animate({
				"left": 30
			}, 400);
			$(".shoufengqin .shoufengqin_no2").animate({
				"left": 60
			}, 400);
			$(".shoufengqin .shoufengqin_no3").animate({
				"left": 490
			}, 400);
			$(".shoufengqin .shoufengqin_no4").animate({
				"left": 520
			}, 400);
		}
	);

	$(".shoufengqin .shoufengqin_no3").mouseenter(
		function() {
			$(".shoufengqin ul li").stop();
			$(".shoufengqin .shoufengqin_no1").animate({
				"left": 30
			}, 400);
			$(".shoufengqin .shoufengqin_no2").animate({
				"left": 60
			}, 400);
			$(".shoufengqin .shoufengqin_no3").animate({
				"left": 90
			}, 400);
			$(".shoufengqin .shoufengqin_no4").animate({
				"left": 520
			}, 400);
		}
	);
	$(".shoufengqin .shoufengqin_no4").mouseenter(
		function() {
			$(".shoufengqin ul li").stop();
			$(".shoufengqin .shoufengqin_no1").animate({
				"left": 30
			}, 400);
			$(".shoufengqin .shoufengqin_no2").animate({
				"left": 60
			}, 400);
			$(".shoufengqin .shoufengqin_no3").animate({
				"left": 90
			}, 400);
			$(".shoufengqin .shoufengqin_no4").animate({
				"left": 120
			}, 400);
		}
	);
	var nowimg = 4;
	var timer = setInterval(youanniuyewu, 1000);

	function youanniuyewu() {
		if (nowimg < 4) {
			nowimg = nowimg + 1;
		} else {
			nowimg = 0;
		}

		$(".shoufengqin ul li").eq(nowimg).trigger("mouseenter");

	}
	$(".shoufengqin").mousemove(
		function() {
			clearInterval(timer);
		}
	);
	$(".shoufengqin").mouseleave(
		function() {
			timer = setInterval(youanniuyewu, 1000);
		}
	);

})