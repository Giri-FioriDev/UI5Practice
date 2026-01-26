sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.empapp.controller.EmployeDetails", {
        onInit() {
        },
        onNavBack() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteEmployeView");
        }
    });
});