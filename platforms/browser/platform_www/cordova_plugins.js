cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/WebViewer/www/webview.js",
        "id": "WebViewer.webview",
        "pluginId": "WebViewer",
        "clobbers": [
            "webview"
        ]
    },
    {
        "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
        "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
        "pluginId": "cordova-plugin-nativegeocoder",
        "clobbers": [
            "nativegeocoder"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
        "id": "cordova-plugin-geofence.TransitionType",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "TransitionType"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/geofence.js",
        "id": "cordova-plugin-geofence.geofence",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "geofence"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-androidx": "1.0.2",
    "WebViewer": "0.0.1",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-plugin-nativegeocoder": "3.4.0",
    "cordova-plugin-compat": "1.2.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-geofence": "0.7.0"
}
// BOTTOM OF METADATA
});