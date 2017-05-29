var t_newsRoll_8;

function Marquee_newsRoll_8(){

if(parseInt(document.getElementById('Div_newsRoll_8_Top').style.height)>parseInt(document.getElementById('Div_newsRoll_8_Middle').offsetHeight))
{
	var h = parseInt(document.getElementById('Div_newsRoll_8_Top').style.height)-parseInt( document.getElementById('Div_newsRoll_8_Middle').offsetHeight);
	 document.getElementById('Div_newsRoll_8_Middle').innerHTML += "<table width='100%' boder=0 height='"+h+"'><tr><td>&nbsp;</td></tr></table>";
	 document.getElementById('Div_newsRoll_8_Bottom').innerHTML += "<table width='100%' boder=0 height='"+h+"'><tr><td>&nbsp;</td></tr></table>";
}
 if(document.getElementById('Div_newsRoll_8_Bottom').offsetTop-document.getElementById('Div_newsRoll_8_Top').scrollTop<=0) { 
 document.getElementById('Div_newsRoll_8_Top').scrollTop-=document.getElementById('Div_newsRoll_8_Middle').offsetHeight; 
 } else { 
 var p = document.getElementById('Div_newsRoll_8_Top').scrollTop;
 document.getElementById('Div_newsRoll_8_Top').scrollTop+=1;
 var l = document.getElementById('Div_newsRoll_8_Top').scrollTop;
 if(p == l) { 
 document.getElementById('Div_newsRoll_8_Top').scrollTop-=document.getElementById('Div_newsRoll_8_Middle').offsetHeight;
 } 
 }
}

function StartScroll_newsRoll_8(){
var ScrollObj_newsRoll_8=setInterval(Marquee_newsRoll_8,120);
 document.getElementById('Div_newsRoll_8_Top').onmouseover=function(){clearInterval(ScrollObj_newsRoll_8)};
 document.getElementById('Div_newsRoll_8_Top').onmouseout=function(){ScrollObj_newsRoll_8=setInterval(Marquee_newsRoll_8,120)};
}StartScroll_newsRoll_8();








 