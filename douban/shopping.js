 $(document).ready(function(){
//加的效果
$(".add").click(function(){
var n=$(this).prev().val();
var num=parseInt(n)+1;
if(num==0){ return;}
$(this).prev().val(num);
});
//减的效果
$(".reduce").click(function(){
var n=$(this).next().val();
var num=parseInt(n)-1;
if(num==0){ return}
$(this).next().val(num);
});
})
 //全选
 $(function(){
    $("#checkall").click(function(){ 
    if(this.checked){ 
        $("input[name='checkname']").attr('checked', true)
    }else{ 
        $("input[name='checkname']").attr('checked', false)
    } 
});
});
 $(function(){
    $("#checkAll").click(function(){ 
    if(this.checked){ 
        $("input[name='checkname']").attr('checked', true)
    }else{ 
        $("input[name='checkname']").attr('checked', false)
    } 
});
});
$(function(){
	$(".operation").click(function(){
	var conf = confirm('确定删除此商品吗？');
        if (conf) {
           $(this).parent(".con").remove();
               }
})
})