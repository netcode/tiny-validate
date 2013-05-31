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

        var processFunctions : {
        	'required':function(val){
        		return (val != '')
        	},
        	'number':function(val){

        	},
        	'email':function(val){
        		return /e@e.com/.exec(val);
        	},
        	'match':function(val,nextVal){
        		return (val == nextVal);
        	}
        }
		
		this.each(function(){
			var Obj = $(this);
			Obj.on('submit',function(){
				var requiredFields = Obj.find('.required');
				var numberFields = obj.find('.number');
				var emailFields = obj.find('.email');
			})
		});
	};		
	
}(jQuery));