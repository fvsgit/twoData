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

		createMasterDataModel: function() {
			var oModel = new JSONModel({
				"Companies": [{
					"Id": 1,
					"Name": "FFW Consulting",
					"Description": "SAP Consulting Services",
					"Icon": "sap-icon://activate",
					"Tasks": 4,
					"State": "Error",
					"Info": "Outstanding Tasks"
				}, {
					"Id": 2,
					"Name": "Carrus",
					"Description": "Logistics",
					"Icon": "sap-icon://shipping-status",
					"Tasks": 0,
					"State": "Success",
					"Info": "Done"
				}],
				"Settings": [{
					"Title": "Screen Orientation",
					"Subtitle": "Force the application to use a specific screen orientation",
					"Value": "Portrait",
					"Options": ["Portrait", "Landscape"],
					"Group": "General",
					"SortOder": 1
				}, {
					"Title": "History",
					"Subtitle": "Duration the history should be kept for",
					"Value": "Forever",
					"Options": ["1 Week", "1 Month", "Forever"],
					"Group": "General",
					"SortOder": 1
				}, {
					"Title": "Theme",
					"Subtitle": "Change the look of the application",
					"Value": "Light",
					"Options": ["Light", "Dark"],
					"Group": "General",
					"SortOder": 1
				}, {
					"Title": "Sync only on Wi-Fi",
					"Subtitle": "Reduces data usage",
					"Value": true,
					"Options": [true, false],
					"Group": "Data Usage",
					"SortOder": 2
				}, {
					"Title": "Auto-Sync",
					"Subtitle": "Automatically sync data when there is a network connection",
					"Value": true,
					"Options": [true, false],
					"Group": "Data Usage",
					"SortOder": 2
				}]
			});
			return oModel;
		}

	};

});