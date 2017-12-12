sap.ui.define([
	"twodata/controller/BaseController",
	"sap/m/GroupHeaderListItem"
], function(BaseController, GroupHeaderListItem) {
	"use strict";

	return BaseController.extend("twodata.controller.Settings", {

		onInit: function() {

			//Attach the pattern matched event
			this.getRouter().getRoute("settings").attachPatternMatched(this.onObjectMatched, this);

		},
		onObjectMatched: function(oEvent) {
			// //Get the list
			// var oList = this.getView().byId("lstSettings");
			// //Get the master data mmodel
			// var oModel = this.getModel("masterData").getData();
			// //Check that the model is not undefined
			// if(oModel !== undefined){
			// 	for(var i=0;i<oModel.Settings.length;i++){
			// 		this.getView().addContent(new sap.m.Label({ text: "test"}));
			// 		this.getView().addContent(new sap.ui.core.SeparatorItem());
			// 		// var oNewListItem = new sap.m.CustomListItem({ title: oModel.Settings[i].Title, description: oModel.Settings[i].Subtitle });
			// 		// oNewListItem.addContent(new sap.m.Switch({ state: true }));
			// 		// oList.addItem(oNewListItem);
			// 	}
			// }
		},
		onNavBack: function() {
			this.navigateBack();
		},
		getGroupHeader: function(oGroup) {
			return new GroupHeaderListItem({
				title: oGroup.key,
				upperCase: true
			});
		}
	});

});