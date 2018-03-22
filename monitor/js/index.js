(function(){


	function bindEvent() {


		//坐标点显示/隐藏 点击
		$("#btn-display").on("click", function(e) {
			if($(".display-menu").hasClass("active")) {
				$(".display-menu").toggleClass("active");
				setTimeout(function() {
					$(".display-menu").hide();
				},300)
			}
			else {
				$(".display-menu").show();
				setTimeout(function() {
					$(".display-menu").toggleClass("active");
				},100)
			}
		});

		$(".display-menu").on('click', 'li', function(event) {
			event.preventDefault();
			var i = $(this).index()
			api.map.togglePoints(i+1);
			$(this).toggleClass("checked");
		});


		$(".pop").on('click', '.x', function(event) {
			event.preventDefault();
			/* Act on the event */
		});


	}


	window.onload = function() {
		api.map.init();
		bindEvent();

		api.chart.renderCompanyChart();
	}

})()
