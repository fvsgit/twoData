sap.ui.define([
	"twodata/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("twodata.controller.Main", {

		onInit: function() {},
		onSelect_MenuItem: function(oEvent) {
			this.navigateToPath(oEvent.getSource().data("navPath"));
			
			//Only toggle the side menu when the device is a phone
			if (this.deviceIsPhone()) {
				this.toggleSideNavigation();
			}
		},
		onTilePress: function(oEvent) {
			this.getRouter().navTo("tasks", {
				companyId: 1
			});
		},
		toggleSideNavigation: function() {
			var oToolPage = this.getView().byId("tlpMainToolPage");
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		}
	});

});