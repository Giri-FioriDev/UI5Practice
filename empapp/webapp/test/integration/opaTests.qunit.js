/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/demo/empapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
