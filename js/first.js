$(document).ready(function() {
	//对导航的三角淡入淡出设计的单例模式
	var trigleSite={
    	init:function(){
    		this.render();
    		this.bind();
    	},
    	render:function(){
		    this.btn=$("#emicon");					
		},
		bind:function(){
			var self=this;
			 this.btn.addClass('emicon');
			this.btn.click(function(){
				self.btn.toggleClass('emicon2');
				$('.fbody').toggle();
			});	
		}
    }    
    trigleSite.init();		
});

