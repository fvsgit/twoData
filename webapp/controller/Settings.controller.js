sap.ui.define([
	"twodata/controller/BaseController",
	"sap/m/GroupHeaderListItem",
	"sap/ui/model/json/JSONModel"
], function(BaseController, GroupHeaderListItem, JSONModel) {
	"use strict";

	return BaseController.extend("twodata.controller.Settings", {

		onInit: function() {
			
			//Setup the json models for the view 
			this._setViewModels();
			
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
		},
		
		/** 
		 * Creating and setting json models to the view
		 * @function
		 * @private
		 */
		_setViewModels: function(){
			
			//Create the model for data on the screen =
			var oViewModel = new JSONModel({
				"ScreenOrientation": "Auto Rotate"
			});
			this.getView().setModel(oViewModel, "ViewModel");
		}
	});

});