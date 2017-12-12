sap.ui.define([
	"twodata/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("twodata.controller.Settings", { 
		
		onNavBack: function(){
			this.navigateBack();
		}
	});

});