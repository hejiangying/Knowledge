var basepath = '/E:/web/webpage/douban/';

/**
 * 获取get参数
 * @Author   Maying
 * @DateTime 2017-04-22
 * @E-mail   1977905246@qq.com
 * @param    name 获取的key
 * @return   value
 */
function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";
}

/**
 * 跳转
 * @Author   Maying
 * @DateTime 2017-04-22
 * @E-mail   1977905246@qq.com
 * @param    obj uri 请求的参数
 * @return   直接跳转
 */
function u (uri) {
	var param = new Array();
	for (var i in uri.data) {
		param.push(i + '=' + escape(uri.data[i]));
	}
	var	href = basepath+uri.url+'?' + param.join('&');
	window.location.href = href;
}
$("#first").click(function(){
	var id=getParam("id");
	window.location.href="index.html?id="+id+"";
})
$("#second").click(function(){
	var id=getParam("id");
	window.location.href="class.html?id="+id+"";
})
$("#third").click(function(){
	var id=getParam("id");
	window.location.href="shopping.html?id="+id+"";
})
$("#fouth").click(function(){
	var id=getParam("id");
	window.location.href="adress.html?id="+id+"";
})









