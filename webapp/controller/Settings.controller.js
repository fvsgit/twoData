sap.ui.define([
	"twodata/controller/BaseController",
	"sap/m/GroupHeaderListItem",
	"sap/ui/model/json/JSONModel"
], function(BaseController, GroupHeaderListItem, JSONModel) {
	"use strict";

	return BaseController.extend("twodata.controller.Settings", {

		onInit: function() { 
			
			//Attach the pattern matched event
			this.getRouter().getRoute("settings").attachPatternMatched(this.onObjectMatched, this);

		},
		onObjectMatched: function(oEvent) { 
			
		},
		onNavBack: function() {
			this.navigateBack();
		}, 
		onSelect_btnTheme: function(oEvent){
			
			//Update the selected theme in the settings model
			this.getModel("settings").setProperty("/Theme", oEvent.getParameter("key"));
			
			//Switch the theme to the new one
			this.switchTheme();
		},
		
		getGroupHeader: function(oGroup) {
			return new GroupHeaderListItem({
				title: oGroup.key,
				upperCase: true
			});
		}
	});

});