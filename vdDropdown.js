/*
 * vdDropdown
 * Copyright 2013 Sarfaraz Ansari
 * website url
 * download location file url
 *
 * Version 1  
 *
 * This pluggin make easy to use dropdown for you anyplace in web
 * It is extremely lightweight and very smart.
 * In this pluggin pass parameters for example target div  animation speed
 * 
 * 
 * 
 *
 * This vdDropdown jQuery plug-in is licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 
(function($){
    $.fn.vdDropdown = function(options){
		
		var defaults = { 
			target: '',
			autoclose:true,
			activation: 'click',
		  	before: function(){},
		  	complete: function(){}
	  	};
	 	var opts = $.extend(defaults, options);
		return this.each(function(){
			var elem = $(this);
			if(opts.activation == "click"){
				elem.click(function(){
					fire_vdDrop();
					return false;
				});
			}
			
			else if(opts.activation == "hover"){
				elem.mouseover(function(){
					fire_vdDrop();
					return false;
				});
			}
			/*fire function*/
			function fire_vdDrop(){
				if( $(opts.target).is(':visible'))
					$(opts.target).slideUp('fast');
				else
					$(opts.target).slideDown('fast');
				

				$(document).unbind('mouseup');	
				$(document).mouseup(function(e){
					if(opts.autoclose)
					{
						if($(e.target).parents(opts.target).length==0){
							$(opts.target).slideUp('fast');
						}
						
					}
					else
					{	
						return false;
						
					}	
				});
				
			}
			/*end of function*/
		});
	}
	
})(jQuery);



function uiDrop(ths,target, auto){					
		if( $(target).is(':visible'))
			$(target).slideUp('fast');
		else
			$(target).slideDown('fast');
		
		$(target).mouseup(function(e){
			e.preventDefault();
			return false;
		});
		
		$(document).unbind('mouseup');	
		$(document).mouseup(function(e){
			if(auto == 'true')
			{
				if($(e.target).parent(target).length==0)
					$(target).slideUp('fast');
			}
			else
			{	
				return false;
			}	
		});
};