//二级菜单
		 $(function(){
	 $(".navmenu").mouseover(function(){
		 $(this).children("ul").show();
		 })
	 $(".navmenu").mouseout(function(){
		 $(this).children("ul").hide();
		 })
	  })
		 
//显示时间			
setInterval("time.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);
		 
//轮播		 
window.onload = function () {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 4;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 200;//位移总时间
                var inteval = 5;//位移间隔时间
                var speed = offset/(time/inteval);//每次位移量
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);//10毫秒之后调用go
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -1024 * len + 'px';
                        }
                        if(left<(-1024 * len)) {
                            list.style.left = '-1024px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 4) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1024);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 4;
                }
                else {
                    index -= 1;
                }
                animate(1024);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1024 * (myIndex - index);
                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

        }		 
		 
		 
		 
 //图片展示上移效果
		 function showdatail(){
				var divheight=160;//高度可以改变
				var div=document.getElementById('piclist').getElementsByTagName('div');
				for( var i=0;i<div.length;i++){
					div[i].onmouseover=showmeg;
					div[i].onmouseout=hidemeg;
				}
				function showmeg(){
					this.getElementsByTagName('a')[0].style.top=0;
				}
				function hidemeg(){
					this.getElementsByTagName('a')[0].style.top=divheight+'px';
				}
				
			}showdatail();	



