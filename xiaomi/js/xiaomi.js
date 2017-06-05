$("#shop").mouseover(function(){
			$(this).children("div").stop().slideDown();
		});
		$("#shop").mouseout(function(){
			$(this).children("div").stop().slideUp();
		});
		$(".con-nav>ul>li").mouseover(function(){
			$(this).children("div").slideDown("slow");
		});
		$(".con-nav>ul>li").mouseout(function(){
			$(this).children("div").stop().hide();
		});
		$(".search").click(function(e){
			$(this).children("a").hide()
			$(".right-input>ul").show();
			$(this).css("border","1px solid #ff6700");
			$("input").css("border-right","1px solid #ff6700");
			e.stopPropagation();
			$(document).click(function(){
				$(".right-input>ul").hide();
				$(".search").css("border","1px solid #e0e0e0");
				$(".search").children("a").show();
				$("input").css("border-right","1px solid #e0e0e0");
			})
		})
		$(function () {
            var container = $('.container');
            var list = $('#list');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 5;
            var interval = 3000;
            var timer;
            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -1200){
                        list.css('left', -1200 * len);
                    }
                    if(left < (-1200 * len)) {
                        list.css('left', -1200);
                    }
                });
            }
            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }
            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }
            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1200);
                showButton();
            });
            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1200);
                showButton();
            });
            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1200 * (myIndex - index);
                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });
            container.hover(stop, play);
            play();
        });
        $(".nav-left").mouseover(function(){
        	$(this).children("ul>li>a").css("background","#ff6700");
        })