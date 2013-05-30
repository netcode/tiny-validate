(function($){
	"use strict";
	$.fn.tinyValidate = function(options){
		 var settings = $.extend({
			// These are the defaults.
			DefaultErrorMsgs: {
				'required':'this field is required',
				'number':'this field must be number'
			},
		}, options );
		
		this.each(function(){
			var Obj = $(this);
			Obj.on('submit',function(){
				var requiredFields = Obj.find('.required');
				
			})
		});
	};		
	
}(jQuery));