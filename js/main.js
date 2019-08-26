var running;var i=0;var sentence="";function ToDBC(txtstring){var tmp="";for(var i=0;i<txtstring.length;i++){if(txtstring.charCodeAt(i)==32){tmp=tmp+ String.fromCharCode(12288);}else{if(txtstring.charCodeAt(i)<127){tmp=tmp+ String.fromCharCode(txtstring.charCodeAt(i)+ 65248);}else{tmp+=txtstring[i];}}}
return tmp;}
$(function(){if(localStorage['speed']){$('#speed').val(localStorage['speed']);}else{localStorage['speed']=15;}
/*设置默认速度，原版speed为12，不同的浏览器打开离线页面修改速度后，会自动保存，下次打开仍不变*/ 
function reset(deleteinput){i=0;if(deleteinput){sentence="";$('#input').val("");}
$('#go').text('快读啦').removeClass('btn-danger').addClass('btn-success');window.clearInterval(running);running=null;$('#display').text('。。。');}
$('#display').fitText(0.4);function holdPosition(){$('body').css('padding-top', /*($(window).height()- $('#main').height())/ 2*/ 0 + "px");
}
/*
此段注释内容会使body的padding-top属性始终会有一段距离，原版即使手动删除后顶端的距离会重置
($(window).height()- $('#main').height())/ 2
*/ 
holdPosition();window.onresize=holdPosition;$('#input').change(function(){sentence=ToDBC($('#input').val());});$('#go').click(pause);$('#speed').change(function(){localStorage['speed']=parseInt($('#speed').val());pause();pause();});function pause(){if(running==null){running=window.setInterval(function(){$('#display').text(((sentence.length>i)?sentence[i]:"")+((sentence.length>i+ 1)?sentence[i+ 1]:"")+((sentence.length>i+ 2)?sentence[i+ 2]:""));i=i+ 1;if(i>=sentence.length){reset(false);}},1000/parseInt($('#speed').val()));$('#go').text('暂停').removeClass('btn-success').addClass('btn-danger');}else{window.clearInterval(running);running=null;$('#go').text('快读啦').removeClass('btn-danger').addClass('btn-success');}}
$('#reset').click(reset);if(got=="")
$('#input').text("十九八七六五四三二一开始！欢迎使用“快读啦”，你可以不用移动你的眼球就能阅读，在屏幕下方也可以下载谷歌浏览器的插件更方便地使用，相信大家已经明白怎么使用了，请尽兴！");else
$('#input').text("十九八七六五四三二一开始！"+ got);window.setTimeout(function(){$('#input').trigger('change');$('#go').trigger('click');},100);});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-48583436-1','kuaidula.com');ga('send','pageview');