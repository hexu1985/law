$(document).ready(function(){
	$.ajax({
		type:"POST",
		url:"/cgi/RnewsActioncount.do",
		data:"rid="+$("#rid").html().replace(/,/g,""),
		cache:false,
		success:function(data){
			/*
			if(data!=null){
				$("#count").html(data);
			}*/
		console.log("----统计访问量："+data);
		}
	});
});

