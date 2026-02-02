sap.ui.define([], function () {
    "use strict";
    return {
        formatRating: function (rating) {
            if (rating === 5) {
                return "Outstanding";
            } else if (rating === 4) {
                return "Commendable";
            }
            else if (rating === 3) {
                return "Met Expectations";
            }
            else if (rating === 2) {
                return "Needs Improvement";
            }
            else if (rating === 1) {
                return "Under Performance";
            }
        },
        formatStatusState: function (status) {
            if (status === "CONFIRMED") {
                return "Success";
            } else if (status === "PROHIBITION") {
                return "Warning";
            } else {
                return "Error";
            }
        }
    };
});