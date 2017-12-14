sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("twodata.controller.BaseController", {
		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		/**
		 * Convenience method for getting the view model by name.
		 * @public
		 * @param {string} [sName] the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function(sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * Getter for the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		 * Event handler when the share by E-Mail button has been clicked
		 * @public
		 */
		onShareEmailPress: function() {
			var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
			sap.m.URLHelper.triggerEmail(
				null,
				oViewModel.getProperty("/shareSendEmailSubject"),
				oViewModel.getProperty("/shareSendEmailMessage")
			);
		},

		navigateToPath: function(sPath) {

			var sArgs = sPath.split("/");

			if (sArgs !== undefined && sArgs.length >= 1) {

				//Get the target in the first position
				var sTarget = sArgs[0];

				//Check if the target is "company"
				if (sTarget === "company") {
					//To navigate to a company, the company ID is needed. Therfore at least one other parametr is needed
					if (sArgs.length >= 2) {
						//Perfom the navigation to the target
						this.getRouter().navTo("company", {
							companyId: sArgs[1]
						}, true);
					} else {
						console.log("CompanyID is needed as part of the navigation path");
					}
				} else {
					this.getRouter().navTo(sTarget, {}, true);
				}
			}
		},
		
		navigateBack: function(){
			
			// //Get an instance of the history object
			// var oHistory = History.getInstance();
			// //Get the previous navigation path
			// var sPreviousHash = oHistory.getPreviousHash();
			// //Check is there is a previous path
			// if (sPreviousHash !== undefined) {
			// 	//Navigate to the previous path
			// 	window.history.go(-1);
			// } else {
				//Navigate to the main path 
				this.getRouter().navTo("main", true);
			// }
		},
		
		deviceIsPhone: function(){
			
			//Get the device model and retur the value of the phone setting
			return this.getModel("device").getData().system.phone;
		},
		
		switchTheme: function(){
			//Get the selected theme and set it
			sap.ui.getCore().applyTheme(this.getModel("settings").getProperty("/Theme"));
		}

	});

});