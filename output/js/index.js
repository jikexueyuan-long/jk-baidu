$(document).ready(function() {
	//换肤事件
	$('.top-left-menus .changeSkin ').click(function(event) {
       $('.cscontainer').slideDown(200);
    });
    $('.csshou ').click(function(event) {
       $('.cscontainer').slideUp(200);
    });
    $('.s-skin-content li') .eq(0).show();
    $('.s-skin-page0').click(function(event) {	
        $('.s-skin-content>li').eq(1).fadeOut(200);
        $('.s-skin-content>li') .eq(0).fadeIn(200);
        $(this).addClass('s-skin-pm').siblings().removeClass('s-skin-pm');
    });
    $('.s-skin-page1').click(function(event) {
        $('.s-skin-content>li').eq(0).fadeOut(200);
        $('.s-skin-content>li').eq(1).fadeIn(200);
        $(this).addClass('s-skin-pm').siblings().removeClass('s-skin-pm');
    });
    var i=0;
    $('.s-skin-next').click(function(event) {
        ++i;
        if(Math.floor(i/2)===i/2){
           $('.s-skin-content>li').eq(0).fadeOut(200);
           $('.s-skin-content>li').eq(1).fadeIn(200);
           $('.s-skin-page ul li').eq(2).addClass('s-skin-pm');
           $('.s-skin-page ul li').eq(1).removeClass('s-skin-pm'); 
        }else{
           $('.s-skin-content>li').eq(1).fadeOut(200);
           $('.s-skin-content>li') .eq(0).fadeIn(200);
           $('.s-skin-page ul li').eq(2).removeClass('s-skin-pm');
           $('.s-skin-page ul li').eq(1).addClass('s-skin-pm');
           
        }
        
    });
    $('.s-skin-content li').hover(function() {
       var tt=$(this).children('img').attr('src');
        $('.skin-prew-body img').attr({
           'src': tt,           
        });
        
    }, function() {
        $('.skin-prew-body img').attr({
           'src': 'images/skin/prew-skin.jpg',            
        });
    });
    $('.skin-img-item img').click(function(event) {
    	$('.contentb img').attr('src','images/logo_white.png');
    	var tt=$(this).attr('src');
    	var yy="url("+tt+")";
    	//console.log(yy);
    	$('body').css({'background-image':yy});
    	$('body').css({'background-size':'cover'});
    });
	//页面头部右侧更多产品hiden部分，当鼠标移动到蓝色更多产品时触发
	$('.pc-menuuse').hover(function(event) {
		$('.pc-menu-use').show();
	},function(){
		$('.pc-menu-use').hide();
	});
	$('.mnavsetting').hover(function(event) {
		$('.pc-menu-set-list').show();
	},function(){
		$('.pc-menu-set-list').hide();
	});
	$('#topmore').mouseover(function() {
		$('.topmorehiden').show();
	});
	//当鼠标离开灰色更多产品的部分时触发函数
	$('.topmorehiden').mouseleave(function(event) {
		$('.topmorehiden').hide();
	});
	//滚动条，搜索栏置顶效果
	var topmenu = $("#form_sl");
	var toppt = $(".mousedownlogo");
	var topmenu_top = topmenu.offset().top;
	var toppt_top = toppt.offset().top;
	// 监听滚动条滚动事件
	window.onscroll = function() {
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		if (top > topmenu_top - 15) {
			$('#form_sl').addClass('form_sl');
			$('.mousedownlogo').css('display', 'block');
			$('.tophr').css('display', 'block');
		} else {
			$('#form_sl').removeClass('form_sl');
			$('.mousedownlogo').css('display', 'none');
			$('.tophr').css('display', 'none');
		}
	};
	//首页网页导航切换功能
	var timeoutid;//设置切换的延时效果
	//当切换是为导航标签栏改变样式
	$("#tabfirst li").each(function(index) {
		var linode = $(this);
		$(this).mouseover(function(event) {
			timeoutid = setTimeout(function() {
				$(".content").removeClass("content");
				$("#tabfirst li.tabin").removeClass("tabin");
				$("div").eq(index).addClass('content');
				linode.addClass('tabin');
			}, 300);
		}).mouseout(function() {
			clearTimeout(timeoutid);
		});
	});
	//当页面首页加载时自动加载一个页面
	$("#realcontent").load("first.html");
	//根据导航的切换，加载不同的页面显示
	$("#tabsecond li").each(function(index) {
		$(this).click(function() {
			$("#tabsecond li.tabin").removeClass("tabin");
			$(this).addClass('tabin');
			if (index == 0 ) {
				$("#realcontent").load("first.html");

			} else if (index == 1) {
				$("#realcontent").load("tv.html");

			} else if (index == 2) {
				$("#realcontent").load("shopping.html");

			}else if (index == 3) {
				$("#realcontent").load("novel.html ");

			}
			
		});
	});
});
