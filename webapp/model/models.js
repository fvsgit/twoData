sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createMasterDataModel: function(){
			var oModel = new JSONModel({
				"Companies": [{
					"Id": 1,
					"Name": "FFW Consulting",
					"Description": "SAP Consulting Services",
					"Icon": "sap-icon://activate",
					"Tasks": 4,
					"State": "Error",
					"Info": "Outstanding Tasks"
				},{
					"Id": 2,
					"Name": "Carrus",
					"Description": "Logistics",
					"Icon": "sap-icon://shipping-status",
					"Tasks": 0,
					"State": "Success",
					"Info": "Done" 
				}]
			});
			return oModel;
		}

	};

});