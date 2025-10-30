$(function(){
	var url = "/cgi/RnewsActiongetXhGg.do";
	$.ajax( {
		type : "POST",
		url : url,
		data : {
			"time" : new Date().getTime()
		},
		dataType : "json",
		cache : false,
		success : function(data) {
			if( data != null && data != "" ){
				$.each(data , function (index,item){
					var html = "<li ><a href=\"/cgi/RnewsActiondetail.do?rid="+item.ext2+"\" target=\"_blank\">"+item.ext1+"</a></li>" ;
					$(".zwlist").append(html) ;
				});
			}
		}
	});
});
		
