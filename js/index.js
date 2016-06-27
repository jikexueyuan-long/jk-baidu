$(document).ready(function() {
	//首页点击换肤展开换肤div设定的单例模式
    var showSkinDiv={
   	    init:function(){//初始化触发执行render(),和bind();
	        this.render();
	    	this.bind();
		},
		render:function(){//放置dom元素等
			var me=this;//this指向showSkinDiv
			me.btn=$('.changeSkin');
		},
		bind:function(){//绑定点击这个元素触发的事件
            var me=this;//this指向showSkinDiv
            me.btn.click(function(){		      
		      me.test();//把触发的事件调给test()执行
		    });
		},
		test:function(){
            $('.cscontainer').slideDown(200);
		}
    };
    //点击皮肤模块的收起时将div隐藏而设定的单例模式
    var closeSkinDiv={
        init:function(){//初始化触发执行render(),和bind();
	    	this.render();
	    	this.bind();
		},
		render:function(){//放置dom元素等
			var me=this;//this指向closeSkinDiv
			me.btn=$('.csshou');
		},
		bind:function(){//绑定点击这个元素触发的事件
            var me=this;//this指向closeSkinDiv
            me.btn.click(function(){		      
		      me.test();//把触发的事件调给test()执行
		    });
		},
		test:function(){
            $('.cscontainer').slideUp(200);
		}
    };
    showSkinDiv.init();
    closeSkinDiv.init();
    //换肤页小点切换
    var dotChangeImgPage={
   	    init:function(){//初始化触发执行render(),和bind();
	        this.render();
	    	this.bind();
		},
		render:function(){//放置dom元素等
			var me=this;//this指向dotChangeImgPage
			me.btntwo=$('.s-skin-page1');
			me.btnone=$('.s-skin-page0');
		},
		bind:function(){//绑定点击这个元素触发的事件
            var me=this;//this指向dotChangeImgPage
            me.btntwo.click(function(){		      
		      me.testTwo();//把触发的事件调给testTwo()执行
		    });
		    me.btnone.click(function(){		      
		      me.testOne();//把触发的事件调给testOne()执行
		    });
		},
		testTwo:function(){
			var me=this;
			$('.content-1000').fadeOut(200);
			$('.content-1001').fadeIn(200);
			this.btnone.removeClass('s-skin-pm');
            this.btntwo.addClass('s-skin-pm');        	
        },
		testOne:function(){
			$('.content-1001').fadeOut(200);
			$('.content-1000').fadeIn(200);
            this.btntwo.removeClass('s-skin-pm');       	
        	this.btnone.addClass('s-skin-pm');  
		}
    };
    dotChangeImgPage.init();
 	//点击皮肤图片下的尖角模块而设定的单例模式
    var ChangeImgPage={
        init:function(){//初始化触发执行render(),和bind();
	    	this.render();
	    	this.bind();
		},
		render:function(){//放置dom元素等
			var me=this;//this指向ChangeImgPage
			me.btn=$('.s-skin-next');//获取尖角dom			
		},
		bind:function(){//绑定点击这个元素触发的事件
            var me=this;//this指向closeSkinDiv
            me.btn.click(function(){
               if($('.content-1000').is(':visible')){
               	   dotChangeImgPage.testTwo();//把触发的事件调给dotChangeImgPage.testTwo()执行
               }else{
                   dotChangeImgPage.testOne();//把触发的事件调给dotChangeImgPage.testOne()执行
               }		      
		     
		    });
		}
    };
 	ChangeImgPage.init();
	//当点击到皮肤图片时触发的动态而设定的单例模式
	var imgClick={
	    init:function(){//初始化触发执行render(),和bind();
		    	this.render();
		    	this.bind();
		},
		render:function(){//放置dom元素等
			var me=this;//this指向imgClick
			me.btn=$('.skin-img-item img')//获取click,hover到的图片dom		
		},
		isClick:false,//初始皮肤图像是未点击		
		bind:function(){//绑定点击这个元素触发的事件
	        var me=this;//this指向imgClick
	        me.btn.click(function(){
	        	var imgsrc=$(this).attr('src');
	          	me.imgClickfn(imgsrc);//当鼠标click调用imgClickfn()	
	          	me.isClick=true;
	          	me.isClickSrc= imgsrc;
	          	$(this).class         			     		         
		    });
		    me.btn.hover(function(){
	        	var imgsrc=$(this).attr('src');
	          	me.imgClickfn(imgsrc);//当鼠标hover进入调用imgClickfn()	          			     		         
		    },function(){
		    	me.hoverLever();//当鼠标hover离开时进入调用imgClickfn()
		    });		  
		},
		imgClickfn:function(e){
			var me=this;//this指向imgClick
			var imgsrc=e;
			//console.log(imgsrc);
			$('.skin-prew-body img').attr({'src':imgsrc});
			$('.contentb img').attr('src','images/logo_white.png');
			$('.body').css({'background-image':"url("+imgsrc+")"});
			$('.body').css({'background-size':'cover'});
		},
		hoverLever:function(){
			var me=this;
            if(me.isClick){//判断hover之前是否被点击过
            	me.imgClickfn(me.isClickSrc);//被点击过后重新执行imgClickfn()
            }else{//当未被点击时恢复原来的设置
                 $('.contentb img').attr('src','images/baidulogo.png');
         	     $('.skin-prew-body img').attr({'src': "images/skin/prew-skin.jpg"});
          	     $('.body').css({'background-image':"none"});
            }
		}

	};
	imgClick.init();

	//对顶端nav的右侧用户user隐藏部分的单例设计
	var user={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.btn=$('.pc-menuuse');
		},
		bind:function(){
			var self=this;
			this.btn.hover(function(){
	            self.hoverInfn();
			},function(){
	            self.hoverInOut();
			});
		},
		hoverInfn:function(){
	        $('.pc-menu-use').show();
		},
		hoverInOut:function(){
	        $('.pc-menu-use').hide();
		}
	};
	//对顶端nav的右侧用户user隐藏部分的单例设计
	var setting={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.btn=$('.mnavsetting');
		},
		bind:function(){
			var self=this;
			this.btn.hover(function(){
	            self.hoverInfn();
			},function(){
	            self.hoverInOut();
			});
		},
		hoverInfn:function(){
	        $('.pc-menu-set-list').show();
		},
		hoverInOut:function(){
	        $('.pc-menu-set-list').hide();
		}
	};
	//对顶端nav的右侧更多隐藏部分的单例设计
	var more={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.mo=$('#topmore');
			this.ml=$('.topmorehiden');
		},
		bind:function(){
			var self=this;
			this.mo.mouseover(function(){
	            self.hoverInfn();
			});
			this.ml.mouseleave(function() {
				self.hoverInOut();
			});
		},
		hoverInfn:function(){
	        this.ml.show();
		},
		hoverInOut:function(){
	        this.ml.hide();
		}
	};
	user.init();
	setting.init();
	more.init();
	//对滚动条事件的触发
	var scroll={
		init:function(){//初始化触发执行render(),和bind();
	    	this.render();
	    	this.bind();
		},
		render:function(){//放置dom元素等					
		    this.topmenu_top = $("#form_sl").offset().top;		    
		},
		bind:function(){
            var self=this;
            window.onscroll = function(){
            	this.scrollHeight=document.documentElement.scrollTop || document.body.scrollTop;
            	if(this.scrollHeight> self.topmenu_top - 15){
            		self.showTop();//将百度搜索置顶;
            	}else{
            		self.showBack();//以原状态显示；
            	}
            }
		},
		showTop:function(){
            $("#form_sl").addClass('form_sl');
			$(".mousedownlogo").css('display', 'block');
			$('.tophr').css('display', 'block');
		},
		showBack:function(){
            $("#form_sl").removeClass('form_sl');
			$(".mousedownlogo").css('display', 'none');
			$('.tophr').css('display', 'none');
		}
	};
	scroll.init();
	//首页个人网页推荐内容页面的切换
    var changeTab={
    	init:function(){
    		this.render();
    		this.bind();
    	},
    	render:function(){
            this.timeoutid;
            this.tabLi= $("#tabsecond li");
    	},
    	bind:function(){
    		$("#realcontent").load("first.html");//当页面首页加载时自动加载一个页面
            this.tabLi.each(function(index){
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
    	}
    };
    changeTab.init();
    //first.html页面小三角的切换
    
});
