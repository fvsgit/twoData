sap.ui.define([
	"twodata/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("twodata.controller.Help", { 
		
		onNavBack: function(){
			this.navigateBack();
		}
		
	});

});