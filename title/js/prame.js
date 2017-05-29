var basepath = '/E:/web/webpage/title/';

/**
 * 获取get参数
 * @Author   Maying
 * @DateTime 2017-04-22
 * @E-mail   1977905246@qq.com
 * @param    name 获取的key
 * @return   value
 */
// 获取url中参数
function getQueryStr(key) {
    var queryString = location.search.match(new RegExp("[\?\&]" + key + "=([^\&]*)(\&?)", "i")),
            val = (queryString && queryString.length > 1 && queryString[1]) || "";
    return decodeURIComponent(val);
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








