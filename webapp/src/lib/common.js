
//当页面加载状态改变的时候执行这个方法.
$(function(){
	document.getElementsByTagName("title")[0].innerHTML ="UKKID";
	//document.getElementsByTagName("head")[0] <link rel="icon" type="image/x-icon" href="images/002x.png">
})
document.onreadystatechange = subSomething;
function subSomething() { 
	$("#jindu").addClass("window-mask");
	if(document.readyState == "complete"){
		$("#jindu").removeClass("window-mask");
	} //当页面加载状态 
		
}
//清除缓存
function sessprder(){
	createJson("addrename");
	createJson("addretel");
	createJson("province");
	createJson("city");
	createJson("district");
	createJson("addxiang");
	var json =jsonCreate();
	console.log(json);
}
function chongxin(){
	setTimeout(function(){
		window.location.href="../denglu.html";
		sessionStorage.clear(); 	
		localStorage.clear();
	}, 1000);
}
function chongxinss(){
	setTimeout(function(){
		sessionStorage.clear(); 	
		localStorage.clear();
		window.location.href="denglu.html";
	}, 1000);
}
$(function (){
	//setTimeout("ysjx()", 20000);
});
function CheckImgExists(imgurl) {  
    var ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;  
    //没有图片，则返回-1  
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
        return true;  
    } else {  
        return false;
    }  
}
function ysjx(){
	console.log("验证")
	var json = jsonCreate();
	var houtai = jsonhoutai();
	console.log(json);
	var url = Images("/denglu.html");
	if(json==null){
		if(houtai==null){
			//window.location.href=Images("");
		}else{
			window.location.href=url;
		}
	}else{
		$.post("getuser.do?uid="+json.uid+"&token="+json.token,function(data){
			console.log(data);
			var json = toJson(data);
			if(json.return_code=="1000"){
				
			}else{
				window.location.href=url;
			}
		});
	}
}
/*
	提示信息
*/
function tishide(str){
	$("#tishitiao").text("");
		$("#tishitiao").text(str);
		setTimeout(function(){
			$("#tishitiao").text("");
		} , 2000);	

}
function toJson(str){
	var json = eval('(' + str + ')');
	 return json;
}

function createJson(prop, val) {
	var str = localStorage.getItem("shuju");
	//var str = sessionStorage.getItem("shuju");
	if(str==undefined){
		var shuju={};
	}else{
		var shuju =  JSON.parse(str);
	}
    // 如果 val 被忽略
    if(typeof val === "undefined") {
        // 删除属性
        delete shuju[prop];
    } else {
        // 添加 或 修改
    	shuju[prop] = val;
    }
    var str = JSON.stringify(shuju);
    localStorage.setItem("shuju",str);
//    sessionStorage.setItem("shuju",str);
}
function jsonCreate(){
//	var str = sessionStorage.getItem("shuju");
	var str = localStorage.getItem("shuju");
	var shuju =  JSON.parse(str);
	return shuju;
}
function createhoutai(prop, val) {
	var str = sessionStorage.getItem("houtai");
	if(str==undefined){
		var houtai={};
	}else{
		var houtai =  JSON.parse(str);
	}
    // 如果 val 被忽略
    if(typeof val === "undefined") {
        // 删除属性
        delete houtai[prop];
    }
    else {
        // 添加 或 修改
    	houtai[prop] = val;
    }
    var str = JSON.stringify(houtai);
    sessionStorage.setItem("houtai",str);
}
function jsonhoutai(){
	var str = sessionStorage.getItem("houtai");
	var houtai =  JSON.parse(str);
	return houtai;
}
function typelei(prop, val) {
	var str = sessionStorage.getItem("typelei");
	if(str==undefined){
		var typelei={};
	}else{
		var typelei =  JSON.parse(str);
	}
    // 如果 val 被忽略
    if(typeof val === "undefined") {
        // 删除属性
        delete typelei[prop];
    }
    else {
        // 添加 或 修改
    	typelei[prop] = val;
    }
    var str = JSON.stringify(typelei);
    sessionStorage.setItem("typelei",str);
}
function leitype(){
	var str = sessionStorage.getItem("typelei");
	var typelei =  JSON.parse(str);
	return typelei;
}
function typeer(prop, val) {
	var str = sessionStorage.getItem("typeer");
	if(str==undefined){
		var typeer={};
	}else{
		var typeer =  JSON.parse(str);
	}
	// 如果 val 被忽略
	if(typeof val === "undefined") {
		// 删除属性
		delete typeer[prop];
	}
	else {
		// 添加 或 修改
		typeer[prop] = val;
	}
	var str = JSON.stringify(typeer);
	sessionStorage.setItem("typeer",str);
}
function ertype(){
	var str = sessionStorage.getItem("typeer");
	var typeer =  JSON.parse(str);
	return typeer;
}
function typethis(prop, val) {
	var str = sessionStorage.getItem("typethis");
	if(str==undefined){
		var typethis={};
	}else{
		var typethis =  JSON.parse(str);
	}
	// 如果 val 被忽略
	if(typeof val === "undefined") {
		// 删除属性
		delete typethis[prop];
	}
	else {
		// 添加 或 修改
		typethis[prop] = val;
	}
	var str = JSON.stringify(typethis);
	sessionStorage.setItem("typethis",str);
}
function thtype(){
	var str = sessionStorage.getItem("typethis");
	var typeer =  JSON.parse(str);
	return typeer;
}
function weixinacctole(prop, val) {
	var str = sessionStorage.getItem("weixinacctole");
	if(str==undefined){
		var typethis={};
	}else{
		var typethis =  JSON.parse(str);
	}
	// 如果 val 被忽略
	if(typeof val === "undefined") {
		// 删除属性
		delete typethis[prop];
	}
	else {
		// 添加 或 修改
		typethis[prop] = val;
	}
	var str = JSON.stringify(typethis);
	sessionStorage.setItem("weixinacctole",str);
}
function acctoleweixin(){
	var str = sessionStorage.getItem("weixinacctole");
	var typeer =  JSON.parse(str);
	return typeer;
}
/*
 *访问地址
 *
 */
$(function(){
	//访问地址
	//var url="http://192.168.31.250:8080/lefu/";
	var url="http://192.168.31.114:8080/wnqs/";
//	var url="http://121.42.38.88:8080/wnqs/";
	//储存地址
	sessionStorage.setItem("urlN",url);
});
function jiekou(str){
	var url="http://192.168.31.250:8080/lefu/";
	return url+str;
}
//图片预加载
function loadImage(url, callback) { 
	var img = new Image(); //创建一个Image对象，实现图片的预下载 
	img.src = url; 
	if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数 
	callback.call(img); 
	return; // 直接返回，不用再处理onload事件 
	} 
	img.onload = function () { //图片下载完毕时异步调用callback函数。 
	callback.call(img);//将回调函数的this替换为Image对象 
	}; 
};
function adapt(){ 
	var tableWidth = parseInt($(window).width()); //表格宽度 
	var img = new Image(); 
	img.src =$('.yanyu img').attr("src") ; 
	var imgWidth = img.width; //图片实际宽度 
	$('.yanyu').css("text-align","center");
	if(imgWidth<tableWidth){ 
	$('.yanyu img').attr("style","width: auto;margin:5% auto;"); 
	}else{ 
	$('.yanyu img').attr("style","width: 100%"); 
	} 
	} 
//跨域
function jsoncall(url,type){
	//var urlN="http://192.168.31.250:8080/wnqs/";
	var urlN="http://192.168.31.114:8080/wnqs/";
//	var urlN="http://121.42.38.88:8080/wnqs/";
	if(type==1){
		return urlN+url+"jsoncallback=?";
	}else if(type==2){
		return urlN+url;
	}else{
		return urlN+url;
	}
}
//图片
function Images(image){
//	var urlN="http://192.168.31.113:80/lefu";

	
	var urlN="http://192.168.31.220:8080/UKKID";
	
	
	//var urlN="http://118.190.40.82:80/lefu";
//	var urlN="http://120.26.162.132:80/lefu";
//	var urlN="http://127.0.0.1:8080/lefu";
	return urlN+image;
}
//返回数字，并且保留n为小数
function toFixed(num,n){
	num = Number(num);//将String转换为Number类型
	return num.toFixed(n);
}
//计算钱数，保留n位小数，并返回
function toFix(th,n){
	var num = $(th).val();
	//if(num.indexOf(".")!=-1){//判断有没有小数点，有就返回
		num = Number(num).toFixed(n);
		return $(th).val(num);
	//}
}
//转换对象
function  ObjStory(value,name) //声明对象
{
    this.value = value;
    this.name= name;
//    this.Author= author;
//    this.Type = type;
}
//对象装换成字符串，进行sessionStorage储存
function sessionStorageSet(name ,object){
	var data = JSON.stringify(object);
	sessionStorage.setItem(name,data);
}
//获取sessionStorage储存的数值，获取
function sessionStorageGet(name){
	var data = sessionStorage.getItem(name);
	return JSON.parse(data);
}
//地址跳转
//name 要跳转的网址
function localtion(name){
	window.location.href=name;
}
//判断千分位
function Convert(money) 
{ 
var s = money; //获取小数型数据 
s += ""; 
if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00 
if (/\.\d$/.test(s)) s += "0"; //正则判断 
while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换 
s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个 
return s; 
} 
//将数字进行两位小数的格式化 
function changeTwoDecimal_f(x) { 
	var f_x = parseFloat(x); 
	if (isNaN(f_x)) { 
	//alert('function:changeTwoDecimal->parameter error'); 
	return false; 
	} 
	f_x = Math.round(f_x * 100) / 100; 
	var s_x = f_x.toString(); 
	var pos_decimal = s_x.indexOf('.'); 
	if (pos_decimal < 0) { 
	pos_decimal = s_x.length; 
	s_x += '.'; 
	} 
	while (s_x.length <= pos_decimal + 2) { 
	s_x += '0'; 
	} 
	return s_x; 
} 
//获取网址参数
function getUrlPara(paraName) { 
	var sUrl = location.href; 
	var sReg = "(?://?|&){1}" + paraName + "=([^&]*)" ;
	var re = new RegExp(sReg, "g"); 
	re.exec(sUrl); 
	return RegExp.$1; 
} 

function getUrlParaanes(name) 
{ 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null; 
} 
//数组重复元素,去重返回一个新的数组
function arrayToWeight(arr){
	var array = arr.sort();
	var arrayS =[];
	for(var i=0;i<array.length;i++){
		if(array[i]==array[i+1]){ 
			 
	    }else{
	    	arrayS.push(array[i]);
	    }
	}
	return arrayS;
}
//使用正常人表达式判断数组重复	
//function mm(a) 
//{ 
//    return /(\x0f[^\x0f]+)\x0f[\s\S]*\1/.test("\x0f"+ a.join("\x0f\x0f") +"\x0f"); 
//} 
//var ary = new Array("111","22","33","112","22"); 
//封装对象
function person(firstname, lastname, age, eyecolor) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.eyecolor = eyecolor;
	function miss(name) {
		this.firstname = name;
	}
	function miss(name) {
		this.lastname = name;
	}
	function miss(name) {
		this.age = name;
	}
	function miss(name) {
		this.eyecolor = name;
	}
}
//为对象重新赋值
var myName = new person("aywiaw", "backk", "45", "#fff");
//调用对象
//alert(myName.age)
 function Reg(s, type) {  
    var objbool = false;  
    var objexp = "";  
    switch (type) {  
        case 'money': //金额格式,格式定义为带小数的正数，小数点后最多三位  
            objexp = "^[0-9]+[\.][0-9]{0,3}$";  
            break;  
        case 'numletter_': //英文字母和数字和下划线组成     
            objexp = "^[0-9a-zA-Z\_]+$";  
            break;  
        case 'numletter': //英文字母和数字组成  
            objexp = "^[0-9a-zA-Z]+$";  
            break;  
        case 'numletterchina': //汉字、字母、数字组成   
            objexp = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";  
            break;  
        case 'email': //邮件地址格式   
            objexp = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";  
            break;    
        case 'tel': //固话格式   
            objexp = /^((\d2,3)|(\d{3}\-))?(0\d2,3|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;  
            break;  
        case 'mobile': //手机号码   
            objexp = "^(13[0-9]|15[0-9]|18[0-9])([0-9]{8})$";  
            break;  
        case 'decimal': //浮点数   
            objexp = "^[0-9]+([.][0-9]+)?$";  
            break;  
        case 'url': //网址   
            objexp = "(http://|https://){0,1}[\w\/\.\?\&\=]+";  
            break;  
        case 'date': //日期 YYYY-MM-DD格式  
            objexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;  
            break;  
        case 'int': //整数   
            objexp = "^[0-9]*[1-9][0-9]*$";  
            break;  
        case 'intz': //正整数包含0  
            objexp = "^\\d+$";  
            break;  
        case 'intf': //负整数包含0  
            objexp = "^((-\\d+)|(0+))$";  
            break;  
        case 'china': //中文   
            objexp = /^[\u0391-\uFFE5]+$/;  
            break;  
    }  
    var re = new RegExp(objexp);  
    if (re.test(s)) {  
        return true;  
    }  
    else {  
        return false;  
    }  
}; 
//封装的验证  调用方式 jQuery.mCheck(s,type);返回true代表正确,返回false表示不正确
jQuery.mCheck = function (s, type) {  
    var objbool = false;  
    var objexp = "";  
    switch (type) {  
        case 'money': //金额格式,格式定义为带小数的正数，小数点后最多三位    
            objexp = "^[0-9]+[\.][0-9]{0,3}$";  
            break;  
        case 'numletter_': //英文字母和数字和下划线组成       
            objexp = "^[0-9a-zA-Z\_]+$";  
            break;  
        case 'numletter': //英文字母和数字组成    
            objexp = "^[0-9a-zA-Z]+$";  
            break;  
        case 'numletterchina': //汉字、字母、数字组成     
            objexp = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";  
            break;  
        case 'email': //邮件地址格式     
            objexp = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";  
            break;  
        case 'tel': //固话格式     
            objexp = /^((\d2,3)|(\d{3}\-))?(0\d2,3|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;  
            break;  
        case 'mobile': //手机号码     
            objexp = "^(1[0-9])([0-9]{9})$";  
            break;  
        case 'decimal': //浮点数     
            objexp = "^[0-9]+([.][0-9]+)?$";  
            break;  
        case 'url': //网址     
            objexp = "(http://|https://){0,1}[\w\/\.\?\&\=]+";  
            break;  
        case 'date': //日期 YYYY-MM-DD格式    
            objexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;  
            break;  
        case 'int': //整数     
            objexp = "^[0-9]*[1-9][0-9]*$";  
            break;  
        case 'int+': //正整数包含0    
            objexp = "^\\d+$";  
            break;  
        case 'int-': //负整数包含0    
            objexp = "^((-\\d+)|(0+))$";  
            break;  
        case 'china': //中文     
            objexp = /^[\u0391-\uFFE5]+$/;  
            break;  
    }  
    var re = new RegExp(objexp);  
    if (re.test(s)) {  
        return true;  
    }  
    else {  
        return false;  
    }  
}; 
//判断form表单下的  <input> 是否有值 都有值 返回true 没有返回false;调用判断返回值是false or true 
jQuery.Form = function (name){
	var len = name.find("input").length;
	for(var i=0;i<len;i++){
		if(name.find("input").eq(i).val()==""){
			return false;
		}
	}
	return true;
};
//清空name下所有有的input值
jQuery.Formem = function (name){
	var len = name.find("input").length;
	for(var i=0;i<len;i++){
		name.find("input").eq(i).val("");
	}
};
 function clieInput(name){
	var len = name.find("input").length;
	for(var i=0;i<len;i++){
		name.find("input").eq(i).val("");
	}
};
//
//var m= $("#subform1").children("input");
//for(var i=0;i<m.length;i++){
//		if(m[i].value==""||m[i].value==null)
//		{
//			$("#tinaxie").text("请填写所有的空格！");
//			return false;
//		}
//	}
/*
 * 在for循环中 继续往一个元素中添加循环。
 * 参数data:这个插入元素的json形式
 * 参数element:里面包含的元素
 * 参数elem:外围柏寒的元素
 * 例子：
 * var data=[{"name":"1565","value":"ajhs","comm":"sssss"},{"name":"34234","value":"ajhs","comm":"ppppp"},{"name":"7884","value":"ajhs","comm":"bbbb"}]

for(var i=0;i<5;i++){
	var obn = forEch(data, "td", "tr");
	$("#ons").append("<tr>"+
						"<td>名称</td>"+
						"<td>行呗</td>"+
						"<td><table>"+obn+"</table></td>"+
					"</tr>");
}
 * */
function forEch(data,element,elem){
	var object="";
	for(var i=0;i<data.length;i++){
		object +="<"+elem+">";
			var comm = data[i];
			for(var key in comm){
				object +="<"+element+">"+comm[key]+"</"+element+">";
		}
		object +="</"+elem+">";
	}
	return object;
}

/*textarea 计数并且超出截取
 * 参数th:对应使用的this
 * 参数number:规定的输入的长度
 * 参数name:显示文字计数的长度
 * */
function textarea(th,number,name){
	var len  = $(th).val().length;
	if(len>number){
		var value = $(th).val().substring(0,number);
		$(th).val(value);
	}else{
		$(name).html(len+"/"+number); 
	}
}
//全选与全不选
function selectAll(objSelect) {
	if (objSelect.checked == true) {
	$("input[name='chkId']").attr("checked", true);
	$("input[name='chkAll']").attr("checked", true);
	}
	else if (objSelect.checked == false) {
	$("input[name='chkId']").attr("checked", false);
	$("input[name='chkAll']").attr("checked", false);
	}
	}
//判断浏览器
function getOs() {
	if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
	return "MSIE8";
	}
	else if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
	return "MSIE6";
	}
	else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
	return "MSIE7";
	}
	else if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
	return "Firefox";
	}
	if (navigator.userAgent.indexOf("Chrome") > 0) {
	return "Chrome";
	}
	else {
	return "Other";
	}
	}
//回车事件
document.onkeypress = function (event) {
	event = (event) ? event : ((window.event) ? window.event : "");
	keyCode = event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode);
	if (keyCode == 13) {
		//事件
	}
};
//键盘事件 
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==27){ // 按 Esc 
        //要做的事情
      }
    if(e && e.keyCode==113){ // 按 F2 
         //要做的事情
       }            
     if(e && e.keyCode==13){ // enter 键
         //要做的事情
        
    }
};
// 文字溢出
function textOver(name){
	$("#"+name).css({    'overflow': 'hidden',
		'-o-text-overflow': 'ellipsis',
	    "text-overflow": "ellipsis",
	    "white-space": "nowrap",
	    "table-layout": "fixed",
		   });
	$("#"+name).find("td").css({
		'overflow': 'hidden',
		'-o-text-overflow': 'ellipsis',
	    "text-overflow": "ellipsis",
	    "white-space": "nowrap"});
	$("#"+name).children("tbody").find("td").css({
		'overflow': 'hidden',
		'-o-text-overflow': 'ellipsis',
		"text-overflow": "ellipsis",
		"white-space": "nowrap",
			"cursor":"pointer"});
}
//使table 的td发生变化
function tTD(name){
     var tTD; //用来存储当前更改宽度的Table Cell,避免快速移动鼠标的问题 
        var table = document.getElementById(name);
        	$("#"+name).css({    'overflow': 'hidden', '-o-text-overflow': 'ellipsis',
			    "text-overflow": "ellipsis",
			    "white-space": "nowrap"
				   });
        for (j = 0; j < table.rows[0].cells.length; j++) {
            table.rows[0].cells[j].onmousedown = function () {
                //记录单元格 
                tTD = this;
                if (event.offsetX > tTD.offsetWidth - 10) {
                    tTD.mouseDown = true;
                    tTD.oldX = event.x;
                    tTD.oldWidth = tTD.offsetWidth;
                }
                //记录Table宽度 
                //table = tTD; while (table.tagName != ‘TABLE') table = table.parentElement; 
                //tTD.tableWidth = table.offsetWidth; 
            };
            table.rows[0].cells[j].onmouseup = function () {
                //结束宽度调整 
                if (tTD == undefined) tTD = this;
                tTD.mouseDown = false;
                tTD.style.cursor = 'default';
            };
            table.rows[0].cells[j].onmousemove = function () {
                //更改鼠标样式 
                if (event.offsetX > this.offsetWidth - 10)
                    this.style.cursor = 'col-resize';
                else
                    this.style.cursor = 'default';
                //取出暂存的Table Cell 
                if (tTD == undefined) tTD = this;
                //调整宽度 
                if (tTD.mouseDown != null && tTD.mouseDown == true) {
                    tTD.style.cursor = 'default';
                    if (tTD.oldWidth + (event.x - tTD.oldX) > 0)
                        tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
                    //调整列宽 
                    tTD.style.width = tTD.width;
                    tTD.style.cursor = 'col-resize';
                    tTD.style.visibility = 'visible';  
                    tTD.style.paddingRight='5px';  
                    tTD.style.whiteSpace='nowrap';  
                    tTD.style.overflow='hidden';  
                    tTD.style.textOverflow='ellipsis';  
                    //调整该列中的每个Cell 
                    table = tTD; while (table.tagName != 'TABLE') table = table.parentElement;
                    for (j = 0; j < table.rows.length; j++) {
                        table.rows[j].cells[tTD.cellIndex].width = tTD.width;
                    }
                    //调整整个表 
                    table.width = tTD.tableWidth + (tTD.offsetWidth - tTD.oldWidth); 
                    table.style.width = table.width; 
                }
            };
        }
}
function myNumberic(e,len) {
    var obj=e.srcElement || e.target;
    var dot=obj.value.indexOf(".");//alert(e.which);
    len =(typeof(len)=="undefined")?2:len;
    var  key=e.keyCode|| e.which;
    if(key==8 || key==9 || key==46 || (key>=37  && key<=40))//这里为了兼容Firefox的backspace,tab,del,方向键
        return true;
    if (key<=57 && key>=48) { //数字
        if(dot==-1)//没有小数点
            return true;
        else if(obj.value.length<=dot+len)//小数位数
            return true;
        } else if((key==46) && dot==-1){//小数点
            return true;
    }       
    return false;
}
function myNumberic(e,len) {
    var obj=e.srcElement || e.target;
    var dot=obj.value.indexOf(".");//alert(e.which);
    len =(typeof(len)=="undefined")?2:len;
    var  key=e.keyCode|| e.which;
    if(key==8 || key==9 || key==46 || (key>=37  && key<=40))//这里为了兼容Firefox的backspace,tab,del,方向键
        return true;
    if (key<=57 && key>=48) { //数字
        if(dot==-1)//没有小数点
            return true;
        else if(obj.value.length<=dot+len)//小数位数
            return true;
        } else if((key==46) && dot==-1){//小数点
            return true;
    }       
    return false;
}
function urlsubindex(usename,len,endname){
	var url = location.href;
	var use_id = url.substring(url.indexOf(usename)+len, url.indexOf(endname));
	return use_id;
}


function isMoney(th,type){
    var regStrs = [
        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
    ];
    for(i=0; i<regStrs.length; i++){
        var reg = new RegExp(regStrs[i][0]);
        th.value = th.value.replace(reg, regStrs[i][type]);
    }
}
//快递搜索
function sousuo(th){
	var name = $(th).val();
	if(name==""){
		
	}else{
		var len = name.length;
		for(var i=0;i<$("#selec").children("option").length;i++){
			var bool = $("#selec").children("option").eq(i).text().indexOf(name);
			if(bool!=-1){
				  $("#selec").val($("#selec").children("option").eq(i).val());
				  logistics();
			}
		} 
	}
}
//将图片转换base64字符
function imgChange(e,th) {
    console.info(e.target.files[0]);//图片文件
   // var dom =$("input[id^='imgTest']")[0];
   // console.info(dom.value);//这个是文件的路径 C:\fakepath\icon (5).png
   // console.log(e.target.value);//这个也是文件的路径和上面的dom.value是一样的
    var reader = new FileReader();
    reader.onload = (function (file) {
        return function (e) {
           console.info(this.result); //这个就是base64的数据了
           // var sss=$("#showImage");
           // $("#showImage")[0].src=this.result;
           $(th).siblings("img").attr("src",this.result);
        };
    })(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
 }


/*<div style="text-align: center;">
搜索：<input type="text" id="nas" ><span onclick="sousuo()" style="margin-left:10px;display: inline-block; width:30px;height:20px;background:#3896dc;cursor: pointer;">搜索</span>
<br>输入你要搜索的物流，点击搜索，点击下拉选择框；选择<br>
<span id="sousss" style="color:red;"></span>
</div>
<div style="width:80%;margin:10px auto;height:100px;">
物流公司： 
	<select id="selec" onchange="xunwuliu(this)">
	<option value="0">请选择</option>
	<option value="1">安捷快递</option>
	<option value="2">安能物流</option>
	<option value="3">安信达快递</option>
	<option value="4">北青小红帽</option>
	<option value="5">百福东方</option>
	<option value="6">百世快运</option>
	<option value="7">CCES快递</option>
	<option value="8">城市100</option>
	<option value="9">COE东方快递</option>
	<option value="10">长沙创一</option>
	<option value="11">成都善途速运</option>
	<option value="12">德邦</option>
	<option value="13">D速物流</option>
	<option value="14">大田物流</option>
	<option value="15">EMS</option>
	<option value="16">快捷速递</option>
	<option value="17">FEDEX联邦(国内件)</option>
	<option value="18">FEDEX联邦(国际件）</option><option value="19">飞康达</option><option value="20">广东邮政</option><option value="21">共速达</option><option value="22">国通快递</option><option value="23">高铁速递</option><option value="24">汇丰物流</option><option value="25">天天快递</option><option value="26">恒路物流</option><option value="27">天地华宇</option><option value="28">华强物流</option><option value="29">百世快递</option><option value="30">华夏龙物流</option><option value="31">好来运快递</option><option value="32">京广速递</option><option value="33">九曳供应链</option><option value="34">佳吉快运</option><option value="35">嘉里物流</option><option value="36">捷特快递</option><option value="37">急先达</option><option value="38">晋越快递</option><option value="39">加运美</option><option value="40">佳怡物流</option><option value="41">跨越物流</option><option value="42">龙邦快递</option><option value="43">联昊通速递</option><option value="44">民航快递</option><option value="45">明亮物流</option><option value="46">能达速递</option><option value="47">平安达腾飞快递</option><option value="48">全晨快递</option><option value="49">全峰快递</option><option value="50">全日通快递</option><option value="51">如风达</option><option value="52">赛澳递</option><option value="53">圣安物流</option><option value="54">盛邦物流</option><option value="55">上大物流</option><option value="56">顺丰快递</option><option value="57">盛丰物流</option><option value="58">盛辉物流</option><option value="59">速通物流</option><option value="60">申通快递</option><option value="61">速腾快递</option><option value="62">速尔快递</option><option value="63">唐山申通</option><option value="64">全一快递</option><option value="65">优速快递</option><option value="66">万家物流</option><option value="67">万象物流</option><option value="68">新邦物流</option><option value="69">信丰快递</option><option value="70">希优特</option><option value="71">新杰物流</option><option value="72">源安达快递</option><option value="73">远成物流</option><option value="74">韵达快递</option><option value="75">义达国际物流</option><option value="76">越丰物流</option><option value="77">原飞航物流</option><option value="78">亚风快递</option><option value="79">运通快递</option><option value="80">圆通速递</option><option value="81">亿翔快递</option><option value="82">邮政平邮/小包</option><option value="83">增益快递</option><option value="84">汇强快递</option><option value="85">宅急送</option><option value="86">众通快递</option><option value="87">中铁快运</option><option value="88">中通速递</option><option value="89">中铁物流</option><option value="90">中邮物流</option><option value="91">亚马逊物流</option><option value="92">速必达物流</option><option value="93">瑞丰速递</option><option value="94">快客快递</option><option value="95">城际快递</option><option value="96">CNPEX中邮快递</option><option value="97">鸿桥供应链</option><option value="98">海派通物流公司</option><option value="99">澳邮专线</option><option value="100">泛捷快递</option><option value="101">PCA Express</option><option value="102">UEQ Express</option></select>
<form method="post" id="formfa" style="margin-top:20px;">
	<input type="hidden" name="logistics" id="wuliug">
	<input type="hidden" name="logisticsName" id="wuliuname">
	物流单号： <input type='number' name="logistics_id"  placeholder="填写物流单号" id='dan'>
		<input type="hidden" id="fahuId" name="sid">
</form>
<span style="color:red;width:80%;height:20px;margin:10px auto;display: inline-block;" id="fatis"></span>
</div> 
<div style="width:90%;margin:10px auto;height:30px;text-align: center;">
<div onclick="quefahuo()" style="display:inline-block;margin-right:40px; font-size: 20px;cursor:pointer;color:#fff;width:80px; height:30px;background-color: #3896dc;text-align: center;line-height: 30px;">发货</div>
<div onclick="closewindow()" style="display:inline-block;font-size: 20px;cursor:pointer;color:#fff;width:80px; height:30px;background-color: #3896dc;text-align: center;line-height: 30px;">取消</div>
</div> */

//页面导航栏固定  ZElement 子元素  PElement 父元素

function daohang(ZElement,PElement){
//var nav = $("#"+ZElement);
var nav = document.getElementById(ZElement);
    var _top = nav.offsetTop;
    var _left = nav.offsetLeft;
    nav.style.left =_left + "px";
    nav.style.top = "0px";
    window.onresize = function () {
        nav.style.left =$("#"+PElement)
                .offsetLeft + "px";
//        nav.style.left =$("#page_01")
//        .offsetLeft + "px";
    };
    document.onscroll = function () {
        var $num = document.body.scrollTop;
        if($num>_top){
            nav.style.position = "fixed";
        }else{
            nav.style.position = "static";
        };
    };
}
function daohangname(ZElement,PElement){
	var nav = $("#"+ZElement);
	//var nav = document.getElementById("header");
	    var _top = nav.offset().top;
	    var _left = nav.offset().left;
	    nav.css("left",_left + "px");
	    nav.css("top","0px");
	    window.onresize = function () {
	        nav.css("left",$("#"+PElement).offset().left + "px");
	    };
	    document.onscroll = function () {
	        var $num = $("body").scrollTop();
	        if($num>_top){
	        	nav.css("position","fixed");
	        }else{
	        	nav.css("position","static");
	        };
	    };
	}
function zhekous(ct_id, tcf_id, discounts) {
	this.ct_id = ct_id;
	this.tcf_id = tcf_id;
	this.discounts = discounts;
	function xmiss(ct_id) {
		this.ct_id = ct_id;
	}
	function xmiss(tcf_id) {
		this.tcf_id = tcf_id;
	}
	function xmiss(discounts) {
		this.discounts = discounts;
	}
}

function zkJson(prop, val) {
	var str = sessionStorage.getItem("zkdiscounts");
	if (str == undefined) {
		var xiyi = {};
	} else {
		var xiyi = JSON.parse(str);
	}
	// 如果 val 被忽略
	if (typeof val === "undefined") {
		// 删除属性
		delete xiyi[prop];
	} else {
		// 添加 或 修改
		xiyi[prop] = val;
	}
	var str = JSON.stringify(xiyi);
	sessionStorage.setItem("zkdiscounts", str);
}
function jsonzk() {
	var str = sessionStorage.getItem("zkdiscounts");
	var xiyi = JSON.parse(str);
	return xiyi;
}