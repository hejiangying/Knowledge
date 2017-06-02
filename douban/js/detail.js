$(document).ready(function(){
//加的效果
$(".add").click(function(){
var n=$(this).prev().val();
var num=parseInt(n)+1;
if(num==0){ return;}
$(this).prev().val(num);
});
//减的效果
$(".jian").click(function(){
var n=$(this).next().val();
var num=parseInt(n)-1;
if(num==0){ return}
$(this).next().val(num);
});
})
//tab切换
$(function(){
    	$(".tab li").click(function(){
    		$(this).addClass("on").siblings().removeClass("on");
    		var index =$(this).index();
    		$(".tabbox div").eq(index).removeClass("no").siblings().addClass("no");
    	  
    	});
    	
    });
//购物车商品数量加1
$(function(){
$(".foot-mid").click(function(){
	var n=$(this).prev(".foot-left").children(".number").val();
	var num=parseInt(n)+1;
	if(num==0){ return;}
	$(this).prev(".foot-left").children(".number").val(num);
})
});

