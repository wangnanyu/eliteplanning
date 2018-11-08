$(function(){
	var houtai = jsonhoutai();

	if(houtai==null||houtai.USER==""  ){
		var denglu =false;//已登录
	}else{
		var denglu =true;
	}
  

  if (denglu== true ){

    $("#touicon").html(
        "<div class='head_nav'>"+
        "<a href='home.html'><img src='img/logo.png' alt='logo图'/></a>"+
        "<ul class='daohang'>"+
        "<li><a href='vip.html' >VIP</a></li>"+
        "<li><a href='kecheng.html'>优质课程</a></li>"+
        "<li><a href='abouus.html'>关于我们</a></li>"+
        "<li><a href='news.html'>新闻</a></li>"+
        "<li style='    width: 50%;text-align: right;'><a href=''style='font-family: -webkit-pictograph;'>E-MAIL:CONTACT@UKKID.COM</a></li>"+
        "<li><a href='self.html'>个人中心</a></li>"+
        "<span style='clear:both;display: block;'></span>"+
        " </ul>"+
        "   <div style='clear: both;'></div>"+
        "    </div>"+
        "    <img src='img/xiantiao.gif' alt='' style=' width: 100%;position: absolute;'>"
    )
  }else{
    $("#touicon").html(
        "<div class='head_nav'>"+
        "<a href='home.html'><img src='img/logo.png' alt='logo图'/></a>"+
        "<ul class='daohang'>"+
        "<li><a href='vip.html' >VIP</a></li>"+
        "<li><a href='kecheng.html'>优质课程</a></li>"+
        "<li><a href='abouus.html'>关于我们</a></li>"+
        "<li><a href='news.html'>新闻</a></li>"+
        "<li style='    width: 50%;text-align: right;'><a href='' style='font-family: -webkit-pictograph;'>E-MAIL:liulimingjn17@163.com</a></li>"+
        "<li><a href='login.html'>登录</a></li>"+
        "<span style='clear:both;display: block;'></span>"+
        " </ul>"+
        "   <div style='clear: both;'></div>"+
        "    </div>"+
        "    <img src='img/xiantiao.gif' alt='' style=' width: 100%;position: absolute;'>"
    )
  }


  args=window.location.href.split("/");
  var test =args[args.length-1];
  asd=test.split("?");
  var asd = $("#touicon").find("a").length;
  for(var i=0;i<asd;i++){
    var href = $("#touicon").find("a").eq(i).attr("href")
    if(href==args[args.length-1]){
      $("#touicon").find("a").eq(i).addClass("morentitle")
    }
  }

  
  
  
  $("#footer").html("<div class='footer_top'>"+
			"<div class='footer_left'>"+
				"<h5><img src='img/zaixianjiaoyu.png'/></h5>"+
				"<p>英国UKKID Education Limited Co. Ltd教育公司 (简称UKKID)， 是英式教育行业在线模式引领者。UK Junior以“培养中国孩子的英式思维和贵族气质”为教育理念, 致力于让国内卓越少儿在家享受到纯正英式教育， 帮助海外留学的少儿打开通往世界的大门，制定未来海外留学人生规划的系统解决方案。我们在这里， 期待您的加入。</p>"+
			"</div>"+
			"<div class='footer_center'>"+
				"<h5>联系方式 /CONTACT US</h5>"+
				"<p>E-MAIL：&nbsp;&nbsp;&nbsp;&nbsp;liulimingjn17@163.com</p>"+
				"<p>TEL：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07749093980 (英国)</p>"+
				"<p>TEL：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15165161300 (中国)</p>"+
				"<h5>订阅新闻 /NEWSLETTER</h5>"+
				"<p class='input'><input type='text' placeholder='请输入您的邮箱' id='tijiaoyouxiang'> <span onclick='tijiaoyouxiang()' style='    cursor: pointer;'>提交</span></p>"+
			"</div>"+
			"<div class='footer_right'>"+
				"<h5>网站地图 /MAP</h5>"+
				"<p><a href='vip.html'>VIP</a></p>"+
				"<p><a href='kecheng.html'>优质课程</a></p>"+
				"<p><a href='abouus.html'>关于我们</a></p>"+
				"<p><a href='news.html'>新闻</a></p>"+
			"</div>"+
			"<span style='clear:both;display:block;'></span>"+
		"</div>"+
		"<div class='footer_bottom'>"+
			"<p> © 2018. WWW.UKK<span>ID.COM</span></p>"+
		"</div>"+
		"<div style='clear: both;'></div>"+
		"<p id='tishiEmail'style='display:none;position: fixed;bottom: 100px;  background: #000; color: #fff; background: #b0893c;width: 16%; left: 42%; text-align: center; border-radius: 5px;opacity: 0.8; height: 50px;line-height: 50px;'></p>")
  
})
function tijiaoyouxiang(){
	var email = $("#tijiaoyouxiang").val();
	if(email!=""){
		 $.getJSON("../AddNewsFeeds.do?e_mail="+email,function(data){
		        console.log(data)
		        if(data.return_code=="1000"){
		            $("#tishiEmail").show();
		            $("#tishiEmail").text("提交成功");
		        }else{
		            $("#tishiEmail").show();
		            $("#tishiEmail").text("提交失败");
		        }
		        setTimeout(function(){
		        	$("#tishiEmail").hide();
		        	$("#tijiaoyouxiang").val("");
		        },2000)
		    })
	}else{
		$("#tishiEmail").show();
        $("#tishiEmail").text("请填写邮箱");
        setTimeout(function(){
        	$("#tishiEmail").hide();
        },2000)
	}
}
