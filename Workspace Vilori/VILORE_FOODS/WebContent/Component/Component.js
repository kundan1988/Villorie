jQuery.sap.declare("VILORE_FOODS.Component.Component");

sap.ui.core.UIComponent.extend("VILORE_FOODS.Component.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "VILORE_FOODS.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");
		// "http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/";
		var url = "http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/";
		
	    var oModel = new sap.ui.model.odata.ODataModel(url, true, "efsdemo", "efsdemo");
	 	oView.setModel(oModel);

	// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});