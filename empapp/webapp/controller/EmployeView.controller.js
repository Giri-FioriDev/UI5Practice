sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.demo.empapp.controller.EmployeView", {
        onInit() {
        },
        onNavigateToDetails() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteEmployeDetails");
        },

    });
});