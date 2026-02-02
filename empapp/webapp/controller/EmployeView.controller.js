sap.ui.define([
    "com/demo/empapp/controller/BaseController",
    "sap/ui/core/BusyIndicator",
    "com/demo/empapp/model/formatter"
], (BaseController, BusyIndicator, Formatter) => {
    "use strict";

    return BaseController.extend("com.demo.empapp.controller.EmployeView", {
        formatter: Formatter,
        onInit() {
            this.fnReadTableData();
        },
        onNavigateToDetails() {
            this.getRouter().navTo("RouteEmployeDetails");
        },
        fnReadTableData() {
            var sPath = "/EmployeeSet";
            var oDataModel = "oEmpModel";
            var aFilters = [];
            var oViewModel = this.getOwnerComponent().getModel("oViewModel");
            // Show global busy indicator (use show/hide API)
            BusyIndicator.show(0);
            this.fnODataRead(oDataModel, sPath, aFilters)
                .then((oData) => {
                    // Success handler
                    oViewModel.setProperty("/EmployeeItems", oData.data && oData.data.results ? oData.data.results : (oData.results || []));
                    this.showMessage("Employee data loaded successfully.");
                    oViewModel.updateBindings(true);
                    BusyIndicator.hide();
                })
                .catch((sError) => {
                    BusyIndicator.hide();
                    // Error handler
                    this.showMessage("Error fetching employee data: " + (sError.message || sError));
                })
        }
    });
});