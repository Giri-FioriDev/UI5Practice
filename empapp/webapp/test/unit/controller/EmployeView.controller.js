/*global QUnit*/

sap.ui.define([
	"com/demo/empapp/controller/EmployeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeView Controller");

	QUnit.test("I should test the EmployeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
