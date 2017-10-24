sap.ui.define([
	"twodata/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("twodata.controller.Main", {

		onInit: function() { 
		},
		onTilePress: function(oEvent){
				this.getRouter().navTo("tasks",{
				companyId: 1
			});			
		},
		toggleSideNavigation: function() {
			var oToolPage = this.getView().byId("tlpMainToolPage");
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		}
	});

});