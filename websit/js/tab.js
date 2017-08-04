
	var lis=document.querySelectorAll("li");
	
		$(".header").on("click","li",function(){
			$(this).addClass("bor").siblings().removeClass("bor")
			
		})
