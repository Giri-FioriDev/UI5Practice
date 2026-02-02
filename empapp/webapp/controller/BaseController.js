sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/m/MessageBox",
    "sap/ui/core/BusyIndicator"
], (Controller, MessageToast,Filter,MessageBox,BusyIndicator) => {
    "use strict";

    return Controller.extend("com.demo.empapp.controller.BaseController", {
        /**
         * Get the router from component
         * @returns {sap.m.routing.Router} The application router
         */
        getRouter() {
            return this.getOwnerComponent().getRouter();
        },

        /**
         * Get a model by name
         * @param {string} sModelName The model name
         * @returns {sap.ui.model.Model} The model
         */
        getModel(sModelName) {
            return this.getView().getModel(sModelName);
        },

        /**
         * Set a model to the view
         * @param {sap.ui.model.Model} oModel The model to set
         * @param {string} sModelName The model name
         */
        setModel(oModel, sModelName) {
            return this.getView().setModel(oModel, sModelName);
        },
        /**
        * Generic OData Read Function
        * @param {string} sModelName - The name of the model defined in manifest.json (e.g., "myModel" or undefined for default)
        * @param {string} sPath - The path to the EntitySet (e.g., "/Products")
        * @param {sap.ui.model.Filter[]} [aFilters] - Array of SAP UI5 Filter objects
        * @param {string} [sExpand] - Navigation properties to expand (e.g., "Category,Supplier")
        * @returns {Promise} - Returns a Promise that resolves with the data or rejects with an error
        **/
        fnODataRead: function (sModelName, sPath, aFilters, sExpand) {
            return new Promise((resolve, reject) => {
                // 1. Get the model instance using the passed model name
                const oModel = this.getOwnerComponent().getModel(sModelName);

                if (!oModel) {
                    reject("Model not found: " + sModelName);
                    return;
                }
                // 2. Add $expand parameter if provided
                if (sExpand) {
                    mParameters.urlParameters = {
                        "$expand": sExpand
                    };
                }


                // 3. Prepare the parameters object for the read call
                const mParameters = {
                    filters: aFilters || [], // Handle case where filters are undefined
                    success: function (oData, oResponse) {
                        // Resolve the Promise with the data
                        resolve(oData);
                    },
                    error: function (oError) {
                        // Reject the Promise with the error
                        reject(oError);
                    }   
                };

                
                // 4. Execute the read call
                oModel.read(sPath, mParameters);
            });
        },
        /**
         * Show a message toast
         * @param {string} sMessage The message text
         */
        showToastMessage(sMessage) {
            MessageToast.show(sMessage);
        },
        showErrorMessage(sMessage) {
            MessageBox.error(sMessage);
        },
        /**
         * Navigate back to the previous page
         */
        onNavBack() {
            this.getRouter().navTo("RouteEmployeView");
        }
    });
});
