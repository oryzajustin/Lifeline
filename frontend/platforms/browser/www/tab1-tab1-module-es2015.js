(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/@ionic-native/google-maps/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic-native/google-maps/index.js ***!
  \*********************************************************/
/*! exports provided: LatLng, LatLngBounds, VisibleRegion, StreetViewSource, GoogleMapsEvent, GoogleMapsAnimation, GoogleMapsMapTypeId, GoogleMaps, BaseClass, BaseArrayClass, Circle, Environment, Geocoder, LocationService, Encoding, Poly, Spherical, StreetViewPanorama, GoogleMap, GroundOverlay, HtmlInfoWindow, Marker, MarkerCluster, Polygon, Polyline, TileOverlay, KmlOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLng", function() { return LatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLngBounds", function() { return LatLngBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibleRegion", function() { return VisibleRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewSource", function() { return StreetViewSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsEvent", function() { return GoogleMapsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAnimation", function() { return GoogleMapsAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsMapTypeId", function() { return GoogleMapsMapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseArrayClass", function() { return BaseArrayClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geocoder", function() { return Geocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poly", function() { return Poly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spherical", function() { return Spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlInfoWindow", function() { return HtmlInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerCluster", function() { return MarkerCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileOverlay", function() { return TileOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlOverlay", function() { return KmlOverlay; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = undefined;


var TARGET_ELEMENT_FINDING_QUERYS = [
    'ion-router-outlet #',
    '.show-page #',
];
var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    LatLngBounds.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    LatLngBounds.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    LatLngBounds.prototype.extend = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "extend", { "sync": true }, arguments); };
    LatLngBounds.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    LatLngBounds.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return LatLngBounds;
}());

var VisibleRegion = /** @class */ (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    VisibleRegion.prototype.toString = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", { "sync": true }, arguments); };
    VisibleRegion.prototype.toUrlValue = function (precision) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", { "sync": true }, arguments); };
    VisibleRegion.prototype.contains = function (LatLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", { "sync": true }, arguments); };
    Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearLeft"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearRight"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return VisibleRegion;
}());

/**
 * @hidden
 */
var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
var GoogleMaps = /** @class */ (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    GoogleMaps.create = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            else if (typeof element === 'object') {
                options = element;
                element = null;
            }
            var googleMap = new GoogleMap(element, options);
            googleMap.set('_overlays', {});
            return googleMap;
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    GoogleMaps.createPanorama = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            return new StreetViewPanorama(element, options);
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    GoogleMaps.pluginName = "GoogleMaps";
    GoogleMaps.pluginRef = "plugin.google.maps";
    GoogleMaps.plugin = "cordova-plugin-googlemaps";
    GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
    GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
    GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
    GoogleMaps.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
    GoogleMaps.platforms = ["Android", "iOS", "Browser"];
    return GoogleMaps;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));

var displayErrorMessage = function (element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.innerHTML = message;
    errorDiv.style.color = 'red';
    errorDiv.style.position = 'absolute';
    errorDiv.style.width = '80%';
    errorDiv.style.height = '50%';
    errorDiv.style.top = '0px';
    errorDiv.style.bottom = '0px';
    errorDiv.style.right = '0px';
    errorDiv.style.left = '0px';
    errorDiv.style.padding = '0px';
    errorDiv.style.margin = 'auto';
    element.style.position = 'relative';
    element.style.backgroundColor = '#ccc7';
    element.appendChild(errorDiv);
};
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
    if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = _this;
        }
        else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
            var _overlays = _objectInstance.getMap().get('_overlays') || {};
            var overlay = _overlays[args[args.length - 1].getId()];
            if (!overlay) {
                var markerJS = args[args.length - 1];
                var markerId_1 = markerJS.getId();
                var markerCluster = _objectInstance;
                overlay = new Marker(markerCluster.getMap(), markerJS);
                _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
                markerJS.one(markerJS.getId() + '_remove', function () {
                    var overlays = _objectInstance.getMap().get('_overlays');
                    if (overlays) {
                        overlays[markerId_1] = null;
                        delete overlays[markerId_1];
                    }
                });
            }
            args[args.length - 1] = overlay;
        }
        else {
            args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
    }
    return args;
};
var BaseClass = /** @class */ (function () {
    function BaseClass(objInstance) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (!objInstance) {
                objInstance = new (GoogleMaps.getPlugin().BaseClass)();
            }
            this._objectInstance = objInstance;
        }
        else {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
    }
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addEventListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
                return _this.addEventListenerOnce(eventName);
            }
        })();
    };
    BaseClass.prototype.get = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "get", { "sync": true }, arguments); };
    BaseClass.prototype.set = function (key, value, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "set", { "sync": true }, arguments); };
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "bindTo", { "sync": true }, arguments); };
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.hasEventListener = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hasEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.empty = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "trigger", { "sync": true }, arguments);
    };
    BaseClass.prototype.destroy = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "destroy", { "sync": true }, arguments); };
    BaseClass.prototype.removeEventListener = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.off = function (eventName, listener) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "off", { "sync": true }, arguments); };
    BaseClass.pluginName = "GoogleMaps";
    BaseClass.plugin = "cordova-plugin-googlemaps";
    BaseClass.pluginRef = "plugin.google.maps.BaseClass";
    return BaseClass;
}());

var BaseArrayClass = /** @class */ (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this = _super.call(this, initialData) || this;
        }
        else if (Array.isArray(initialData)) {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        }
        else {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }
        return _this;
    }
    BaseArrayClass.prototype.empty = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", { "sync": true }, arguments); };
    BaseArrayClass.prototype.forEach = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "forEach", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    BaseArrayClass.prototype.map = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "map", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    BaseArrayClass.prototype.filter = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "filter", { "sync": true }, arguments); };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    BaseArrayClass.prototype.getArray = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getArray", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getAt = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getLength = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLength", { "sync": true }, arguments); };
    BaseArrayClass.prototype.indexOf = function (element) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "indexOf", { "sync": true }, arguments); };
    BaseArrayClass.prototype.reverse = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "reverse", { "sync": true }, arguments); };
    BaseArrayClass.prototype.sort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "sort", { "sync": true }, arguments); };
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "insertAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.pop = function (noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "pop", { "sync": true }, arguments); };
    BaseArrayClass.prototype.push = function (element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "push", { "sync": true }, arguments); };
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAt", { "sync": true }, arguments); };
    BaseArrayClass.pluginName = "BaseArrayClass";
    BaseArrayClass.plugin = "cordova-plugin-googlemaps";
    BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
    return BaseArrayClass;
}(BaseClass));

var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Circle.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () {
        return this._map;
    };
    Circle.prototype.setCenter = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCenter", { "sync": true }, arguments); };
    Circle.prototype.getCenter = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", { "sync": true }, arguments); };
    Circle.prototype.getRadius = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRadius", { "sync": true }, arguments); };
    Circle.prototype.setRadius = function (radius) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRadius", { "sync": true }, arguments); };
    Circle.prototype.setFillColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Circle.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Circle.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Circle.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Circle.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Circle.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Circle.prototype.getBounds = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBounds", { "sync": true }, arguments); };
    Circle.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Circle.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    return Circle;
}(BaseClass));

var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Set environment variables.
     */
    Environment.setEnv = function (envOptions) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation This method is static. Please use Environment.getLicenseInfo()
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
    };
    /**
     * @deprecation This method is static. Please use Environment.setBackgroundColor()
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
    };
    Environment.plugin = "cordova-plugin-googlemaps";
    Environment.pluginName = "GoogleMaps";
    Environment.pluginRef = "plugin.google.maps.environment";
    Environment.repo = "";
    return Environment;
}());

var Geocoder = /** @class */ (function () {
    function Geocoder() {
    }
    /**
     * @deprecation This method is static. Please use Geocoder.geocode()
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    Geocoder.pluginName = "GoogleMaps";
    Geocoder.pluginRef = "plugin.google.maps.Geocoder";
    Geocoder.plugin = "cordova-plugin-googlemaps";
    Geocoder.repo = "";
    return Geocoder;
}());

var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    LocationService.getMyLocation = function (options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    LocationService.hasPermission = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    LocationService.pluginName = "GoogleMaps";
    LocationService.pluginRef = "plugin.google.maps.LocationService";
    LocationService.plugin = "cordova-plugin-googlemaps";
    LocationService.repo = "";
    return LocationService;
}());

var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.encodePath(path);
    };
    /**
     * @deprecation This method is static. Please use Encoding.decodePath()
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
    };
    /**
     * @deprecation This method is static. Please use Encoding.encodePath()
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
    };
    Encoding.pluginName = "GoogleMaps";
    Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
    Encoding.plugin = "cordova-plugin-googlemaps";
    Encoding.repo = "";
    return Encoding;
}());

var Poly = /** @class */ (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly.pluginName = "GoogleMaps";
    Poly.pluginRef = "plugin.google.maps.geometry.poly";
    Poly.plugin = "cordova-plugin-googlemaps";
    Poly.repo = "";
    return Poly;
}());

var Spherical = /** @class */ (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffset()
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeLength()
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeArea()
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeSignedArea()
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeHeading()
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.interpolate()
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
    };
    Spherical.pluginName = "GoogleMaps";
    Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
    Spherical.plugin = "cordova-plugin-googlemaps";
    Spherical.repo = "";
    return Spherical;
}());

var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = this;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, 100);
                }), options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
        return _this;
    }
    StreetViewPanorama.prototype.setPov = function (pov) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPov", {}, arguments); };
    StreetViewPanorama.prototype.setPosition = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", {}, arguments); };
    StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanningGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getZoomGesturesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getStreetNamesEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getNavigationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLinks = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLinks", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLocation", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanoId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanoId", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
    return StreetViewPanorama;
}(BaseClass));

var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options, elFindTimeout) {
        if (elFindTimeout === void 0) { elFindTimeout = 2000; }
        var _this = this;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    var numAttempts = 0;
                    var durationBetweenAttemptsMs = 100;
                    var maxAttempts = Math.floor(elFindTimeout / durationBetweenAttemptsMs);
                    var timer = setInterval(function () {
                        var targets;
                        for (var i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element))
                                // Filter out el which are already map layers
                                .filter(function (target) {
                                return !target.hasAttribute('__pluginmapid');
                            });
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (numAttempts++ < maxAttempts) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && (targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100)) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            reject(new Error('Can not find the element [#' + element + ']'));
                        }
                    }, durationBetweenAttemptsMs);
                }), options)) || this;
            }
            else if (element === null && options) {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            console.error(errorMessage.join(''));
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
        }
        return _this;
    }
    GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                if (!domNode) {
                    _this._objectInstance.setDiv();
                    return;
                }
                if (typeof domNode === 'string') {
                    (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                        var i, targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                resolve(targets[0]);
                                return;
                            }
                        }
                        reject('Can not find [#' + domNode + '] element');
                    }))
                        .then(function (element) {
                        _this._objectInstance.setDiv(element);
                    });
                }
                else {
                    if (domNode instanceof HTMLElement &&
                        !domNode.offsetParent &&
                        domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                        _this._objectInstance.setDiv(domNode);
                    }
                    else {
                        throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
                    }
                }
            }
        })();
    };
    GoogleMap.prototype.getDiv = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDiv", { "sync": true }, arguments); };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMapTypeId", { "sync": true }, arguments); };
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCamera", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCamera", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.getCameraPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraPosition", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTarget = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraZoom = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTilt = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTarget = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTilt = function (tiltAngle) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.panBy = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "panBy", { "sync": true }, arguments); };
    GoogleMap.prototype.getVisibleRegion = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisibleRegion", { "sync": true }, arguments); };
    GoogleMap.prototype.getMyLocation = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getMyLocation", {}, arguments); };
    GoogleMap.prototype.setClickable = function (isClickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GoogleMap.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    GoogleMap.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "clear", {}, arguments); };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromLatLngToPoint", {}, arguments); };
    GoogleMap.prototype.fromPointToLatLng = function (point) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromPointToLatLng", {}, arguments); };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationButtonEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.getFocusedBuilding = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFocusedBuilding", {}, arguments); };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIndoorEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTrafficEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCompassEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAllGesturesEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPadding", { "sync": true }, arguments); };
    GoogleMap.prototype.setOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOptions", { "sync": true }, arguments); };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarker(options, function (marker) {
                        if (marker) {
                            var overlayId_1 = marker.getId();
                            var overlay_1 = new Marker(_this, marker);
                            _this.get('_overlays')[overlayId_1] = overlay_1;
                            marker.one(overlayId_1 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_1] = null;
                                    overlay_1.destroy();
                                }
                            });
                            resolve(overlay_1);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var marker = _this._objectInstance.addMarker(options);
                var overlayId = marker.getId();
                var overlay = new Marker(_this, marker);
                _this.get('_overlays')[overlayId] = overlay;
                marker.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                        if (markerCluster) {
                            var overlayId_2 = markerCluster.getId();
                            var overlay_2 = new MarkerCluster(_this, markerCluster);
                            _this.get('_overlays')[overlayId_2] = overlay_2;
                            markerCluster.one('remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_2] = null;
                                    overlay_2.destroy();
                                }
                            });
                            markerCluster.set('_overlays', new BaseArrayClass());
                            resolve(overlay_2);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var markerCluster = _this._objectInstance.addMarkerCluster(options);
                var overlayId = markerCluster.getId();
                var overlay = new MarkerCluster(_this, markerCluster);
                _this.get('_overlays')[overlayId] = overlay;
                markerCluster.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                markerCluster.set('_overlays', new BaseArrayClass());
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addCircle(options, function (circle) {
                        if (circle) {
                            var overlayId_3 = circle.getId();
                            var overlay_3 = new Circle(_this, circle);
                            _this.get('_overlays')[overlayId_3] = overlay_3;
                            circle.one(overlayId_3 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_3] = null;
                                    overlay_3.destroy();
                                }
                            });
                            resolve(overlay_3);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var circle = _this._objectInstance.addCircle(options);
                var overlayId = circle.getId();
                var overlay = new Circle(_this, circle);
                _this.get('_overlays')[overlayId] = overlay;
                circle.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolygon(options, function (polygon) {
                        if (polygon) {
                            var overlayId_4 = polygon.getId();
                            var overlay_4 = new Polygon(_this, polygon);
                            _this.get('_overlays')[overlayId_4] = overlay_4;
                            polygon.one(overlayId_4 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_4] = null;
                                    overlay_4.destroy();
                                }
                            });
                            resolve(overlay_4);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polygon = _this._objectInstance.addPolygon(options);
                var overlayId = polygon.getId();
                var overlay = new Polygon(_this, polygon);
                _this.get('_overlays')[overlayId] = overlay;
                polygon.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addPolyline(options, function (polyline) {
                        if (polyline) {
                            var overlayId_5 = polyline.getId();
                            var overlay_5 = new Polyline(_this, polyline);
                            _this.get('_overlays')[overlayId_5] = overlay_5;
                            polyline.one(overlayId_5 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_5] = null;
                                    overlay_5.destroy();
                                }
                            });
                            resolve(overlay_5);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var polyline = _this._objectInstance.addPolyline(options);
                var overlayId = polyline.getId();
                var overlay = new Polyline(_this, polyline);
                _this.get('_overlays')[overlayId] = overlay;
                polyline.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                        if (tileOverlay) {
                            var overlayId_6 = tileOverlay.getId();
                            var overlay_6 = new TileOverlay(_this, tileOverlay);
                            _this.get('_overlays')[overlayId_6] = overlay_6;
                            tileOverlay.one(overlayId_6 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_6] = null;
                                    overlay_6.destroy();
                                }
                            });
                            resolve(overlay_6);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var tileOverlay = _this._objectInstance.addTileOverlay(options);
                var overlayId = tileOverlay.getId();
                var overlay = new TileOverlay(_this, tileOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                tileOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                        if (groundOverlay) {
                            var overlayId_7 = groundOverlay.getId();
                            var overlay_7 = new GroundOverlay(_this, groundOverlay);
                            _this.get('_overlays')[overlayId_7] = overlay_7;
                            groundOverlay.one(overlayId_7 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_7] = null;
                                    overlay_7.destroy();
                                }
                            });
                            resolve(overlay_7);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                var groundOverlay = _this._objectInstance.addGroundOverlay(options);
                var overlayId = groundOverlay.getId();
                var overlay = new GroundOverlay(_this, groundOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                groundOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                        if (kmlOverlay) {
                            var overlayId_8 = kmlOverlay.getId();
                            var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                            _this.get('_overlays')[overlayId_8] = overlay_8;
                            kmlOverlay.one(overlayId_8 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_8] = null;
                                    overlay_8.destroy();
                                }
                            });
                            resolve(overlay_8);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.toDataURL = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toDataURL", {}, arguments); };
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
    return GoogleMap;
}(BaseClass));

var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    GroundOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () {
        return this._map;
    };
    GroundOverlay.prototype.setBounds = function (bounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBounds", { "sync": true }, arguments); };
    GroundOverlay.prototype.setBearing = function (bearing) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.getBearing = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.setImage = function (imageUrl) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setImage", { "sync": true }, arguments); };
    GroundOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return GroundOverlay;
}(BaseClass));

var HtmlInfoWindow = /** @class */ (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
    }
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBackgroundColor", {}, arguments); };
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setContent", {}, arguments); };
    HtmlInfoWindow.prototype.open = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "open", {}, arguments); };
    HtmlInfoWindow.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "close", {}, arguments); };
    HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
    HtmlInfoWindow.pluginName = "GoogleMaps";
    HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
    HtmlInfoWindow.repo = "";
    return HtmlInfoWindow;
}(BaseClass));

var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Marker.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () {
        return this._map;
    };
    Marker.prototype.setPosition = function (latLng) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", { "sync": true }, arguments); };
    Marker.prototype.getPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", { "sync": true }, arguments); };
    Marker.prototype.showInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "showInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.hideInfoWindow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hideInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.setAnimation = function (animation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAnimation", { "sync": true }, arguments); };
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDisableAutoPan", { "sync": true }, arguments); };
    Marker.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Marker.prototype.isVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isVisible", { "sync": true }, arguments); };
    Marker.prototype.setTitle = function (title) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTitle", { "sync": true }, arguments); };
    Marker.prototype.getTitle = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTitle", { "sync": true }, arguments); };
    Marker.prototype.setSnippet = function (snippet) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setSnippet", { "sync": true }, arguments); };
    Marker.prototype.getSnippet = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getSnippet", { "sync": true }, arguments); };
    Marker.prototype.setOpacity = function (alpha) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    Marker.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    Marker.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Marker.prototype.setIconAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIconAnchor", { "sync": true }, arguments); };
    Marker.prototype.setInfoWindowAnchor = function (x, y) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setInfoWindowAnchor", { "sync": true }, arguments); };
    Marker.prototype.isInfoWindowShown = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isInfoWindowShown", { "sync": true }, arguments); };
    Marker.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Marker.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Marker.prototype.setDraggable = function (draggable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDraggable", { "sync": true }, arguments); };
    Marker.prototype.isDraggable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isDraggable", { "sync": true }, arguments); };
    Marker.prototype.setFlat = function (flat) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFlat", { "sync": true }, arguments); };
    Marker.prototype.setIcon = function (icon) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIcon", { "sync": true }, arguments); };
    Marker.prototype.setRotation = function (rotation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRotation", { "sync": true }, arguments); };
    Marker.prototype.getRotation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRotation", { "sync": true }, arguments); };
    return Marker;
}(BaseClass));

var MarkerCluster = /** @class */ (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    MarkerCluster.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarker = function (marker) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarker", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarkers = function (markers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarkers", { "sync": true }, arguments); };
    MarkerCluster.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () {
        return this._map;
    };
    return MarkerCluster;
}(BaseClass));

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polygon.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () {
        return this._map;
    };
    Polygon.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polygon.prototype.setHoles = function (holes) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setHoles", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    Polygon.prototype.setFillColor = function (fillColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", { "sync": true }, arguments); };
    Polygon.prototype.getFillColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", { "sync": true }, arguments); };
    Polygon.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polygon.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polygon.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polygon.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polygon.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polygon.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polygon.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.setGeodesic = function (geodesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeodesic", { "sync": true }, arguments); };
    Polygon.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    return Polygon;
}(BaseClass));

var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polyline.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () {
        return this._map;
    };
    Polyline.prototype.setPoints = function (points) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polyline.prototype.setGeoDesic = function (geoDesic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeoDesic", { "sync": true }, arguments); };
    Polyline.prototype.getGeodesic = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", { "sync": true }, arguments); };
    Polyline.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    Polyline.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    Polyline.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    Polyline.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeColor = function (strokeColor) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeColor = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeWidth = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.setZIndex = function (index) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    Polyline.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    Polyline.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return Polyline;
}(BaseClass));

var TileOverlay = /** @class */ (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    TileOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () {
        return this._map;
    };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.getFadeIn = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.setZIndex = function (zIndex) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.getZIndex = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.setOpacity = function (opacity) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.getOpacity = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getTileSize = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTileSize", { "sync": true }, arguments); };
    TileOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return TileOverlay;
}(BaseClass));

var KmlOverlay = /** @class */ (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    KmlOverlay.prototype.getDefaultViewport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDefaultViewport", { "sync": true }, arguments); };
    KmlOverlay.prototype.getId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    KmlOverlay.prototype.getMap = function () { return this._map; };
    KmlOverlay.prototype.setVisible = function (visible) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.getVisible = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.setClickable = function (clickable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.getClickable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments); };
    return KmlOverlay;
}(BaseClass));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQkE2NUlBO0FBNzVJQSxPQUFPLHNHQU9MLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLElBQU0sNkJBQTZCLEdBQWE7SUFDOUMscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDZixDQUFDOztJQWtCQSxnQkFBWSxHQUFXLEVBQUUsR0FBVztRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbkMsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxTQUFrQjtRQUMzQixTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RSxDQUFDO2lCQW5ESDs7OztJQXFFRSxzQkFBWSxNQUFrQjtRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFV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QUVqQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDbEMsS0FBSyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTtZQUNsQyxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDbkMsS0FBSyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTztZQUNuQyxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQU1ELHVDQUFrQjtJQU9sQiwwQkFBSztJQUVMOzs7T0FHRztJQUNILDJCQUFNLEdBQU4sY0FBc0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQU96QywrQkFBVSxhQUFDLE9BQWdCO0lBTzNCLCtCQUFVO0lBT1YsaUNBQVksYUFBQyxTQUFrQjtJQU8vQixpQ0FBWTtJQU1aLDJCQUFNO3FCQXY1SVI7RUFrMUlnQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlQ2hlY2ssXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGNoZWNrQXZhaWxhYmlsaXR5LFxuICBnZXRQcm9taXNlXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTOiBzdHJpbmdbXSA9IFtcbiAgJ2lvbi1yb3V0ZXItb3V0bGV0ICMnLFxuICAnLnNob3ctcGFnZSAjJyxcbl07XG5cbmV4cG9ydCB0eXBlIE1hcFR5cGUgPVxuICAnTUFQX1RZUEVfTk9STUFMJ1xuICB8ICdNQVBfVFlQRV9ST0FETUFQJ1xuICB8ICdNQVBfVFlQRV9TQVRFTExJVEUnXG4gIHwgJ01BUF9UWVBFX0hZQlJJRCdcbiAgfCAnTUFQX1RZUEVfVEVSUkFJTidcbiAgfCAnTUFQX1RZUEVfTk9ORSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTGF0TG5nIGltcGxlbWVudHMgSUxhdExuZyB7XG5cbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICAgIHRoaXMubGF0ID0gbGF0O1xuICAgIHRoaXMubG5nID0gbG5nO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyOiBJTGF0TG5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF0ID09PSBvdGhlci5sYXQgJiYgdGhpcy5sbmcgPT09IG90aGVyLmxuZztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGF0ICsgJywnICsgdGhpcy5sbmc7XG4gIH1cblxuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDY7XG5cbiAgICByZXR1cm4gdGhpcy5sYXQudG9GaXhlZChwcmVjaXNpb24pICsgJywnICsgdGhpcy5sbmcudG9GaXhlZChwcmVjaXNpb24pO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxhdExuZ0JvdW5kcyB7XG4gIG5vcnRoZWFzdDogSUxhdExuZztcbiAgc291dGh3ZXN0OiBJTGF0TG5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIExhdExuZ0JvdW5kcyBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm9ydGhlYXN0OiBJTGF0TG5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocG9pbnRzPzogSUxhdExuZ1tdKSB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkpLkxhdExuZ0JvdW5kcyhwb2ludHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRvIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBmb3JtIFwibGF0X3N3LGxuZ19zdyxsYXRfbmUsbG5nX25lXCIgZm9yIHRoaXMgYm91bmRzLCB3aGVyZSBcInN3XCIgY29ycmVzcG9uZHMgdG8gdGhlIHNvdXRod2VzdCBjb3JuZXIgb2YgdGhlIGJvdW5kaW5nIGJveCwgd2hpbGUgXCJuZVwiIGNvcnJlc3BvbmRzIHRvIHRoZSBub3J0aGVhc3QgY29ybmVyIG9mIHRoYXQgYm94LlxuICAgKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXh0ZW5kcyB0aGlzIGJvdW5kcyB0byBjb250YWluIHRoZSBnaXZlbiBwb2ludC5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGV4dGVuZChMYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGxhdC9sbmcgaXMgaW4gdGhpcyBib3VuZHMuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjb250YWlucyhMYXRMbmc6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGNlbnRlciBvZiB0aGlzIExhdExuZ0JvdW5kc1xuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBDb250cm9sT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBjb21wYXNzIG9uIG9yIG9mZi5cbiAgICovXG4gIGNvbXBhc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgbXlMb2NhdGlvbiBidXR0b24gb24gb3Igb2ZmLiBJZiB0dXJucyBvbiB0aGlzIGJ1dHRvbiwgdGhlIGFwcGxpY2F0aW9uIGRpc3BsYXlzIGEgcGVybWlzc2lvbiBkaWFsb2cgdG8gb2J0YWluIHRoZSBnZW9sb2NhdGlvbiBkYXRhLlxuICAgKi9cbiAgbXlMb2NhdGlvbkJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBteUxvY2F0aW9uIGNvbnRyb2woYmx1ZSBkb3QpIG9uIG9yIG9mZi4gSWYgdHVybnMgb24gdGhpcyBjb250cm9sLCB0aGUgYXBwbGljYXRpb24gZGlzcGxheXMgYSBwZXJtaXNzaW9uIGRpYWxvZyB0byBvYnRhaW4gdGhlIGdlb2xvY2F0aW9uIGRhdGEuXG4gICAqL1xuICBteUxvY2F0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIGluZG9vciBwaWNrZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgaW5kb29yUGlja2VyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKipBbmRyb2lkKipcbiAgICogVHVybnMgdGhlIG1hcCB0b29sYmFyIG9uIG9yIG9mZi5cbiAgICovXG4gIG1hcFRvb2xiYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAqKkFuZHJvaWQqKlxuICAgKiBUdXJucyB0aGUgem9vbSBjb250cm9sbGVyIG9uIG9yIG9mZi5cbiAgICovXG4gIHpvb20/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBHZXN0dXJlT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSBzY3JvbGwgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHNjcm9sbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSB0aWx0IGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB0aWx0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHpvb20gZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHpvb20/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgcm90YXRlIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICByb3RhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBab29tT3B0aW9ucyB7XG4gIG1pblpvb20/OiBudW1iZXI7XG4gIG1heFpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwUGFkZGluZ09wdGlvbnMge1xuICBsZWZ0PzogbnVtYmVyO1xuICB0b3A/OiBudW1iZXI7XG4gIGJvdHRvbT86IG51bWJlcjtcbiAgcmlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGFuZCBtYXhpbXVtIHpvb20gbGV2ZWxzIGZvciB6b29taW5nIGdlc3R1cmVzLlxuICAgKi9cbiAgem9vbT86IEdvb2dsZU1hcFpvb21PcHRpb25zO1xuXG4gIC8qKlxuICAgKiBQYWRkaW5ncyBvZiBjb250cm9scy5cbiAgICovXG4gIHBhZGRpbmc/OiBHb29nbGVNYXBQYWRkaW5nT3B0aW9ucztcblxuICAvKipcbiAgICogVHVybnMgdGhlIDNEIGJ1aWxkaW5ncyBsYXllciBvbiBvciBvZmYuXG4gICAqL1xuICBidWlsZGluZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJvdW5kcyBsaW1pdCBmb3IgdXNlciBwYW5uaW5nIGdlc3R1cmUuXG4gICAqL1xuICBnZXN0dXJlQm91bmRzPzogSUxhdExuZ1tdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBPcHRpb25zIHtcblxuICAvKipcbiAgICogbWFwVHlwZSBbb3B0aW9uc11cbiAgICovXG4gIG1hcFR5cGU/OiBNYXBUeXBlIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb250cm9scyBbb3B0aW9uc11cbiAgICovXG4gIGNvbnRyb2xzPzogR29vZ2xlTWFwQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIGdlc3R1cmVzIFtvcHRpb25zXVxuICAgKi9cbiAgZ2VzdHVyZXM/OiBHb29nbGVNYXBHZXN0dXJlT3B0aW9ucztcblxuICAvKipcbiAgICogTWFwIHN0eWxlcyBbb3B0aW9uc11cbiAgICogQHJlZiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9zdHlsZS1yZWZlcmVuY2VcbiAgICovXG4gIHN0eWxlcz86IGFueVtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIGNhbWVyYSBwb3NpdGlvbiBbb3B0aW9uc11cbiAgICovXG4gIGNhbWVyYT86IENhbWVyYVBvc2l0aW9uPGFueT47XG5cbiAgLyoqXG4gICAqIHByZWZlcmVuY2VzIFtvcHRpb25zXVxuICAgKi9cbiAgcHJlZmVyZW5jZXM/OiBHb29nbGVNYXBQcmVmZXJlbmNlT3B0aW9ucztcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9zaXRpb248VD4ge1xuICAvKipcbiAgICogVGhlIGNlbnRlciBsb2NhdGlvbiBvZiB0aGUgY2FtZXJhIHZpZXcuXG4gICAqXG4gICAqIFt1c2FnZSAxXVxuICAgKlxuICAgKiBsZXQgY2FtZXJhUG9zOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nPiA9IHtcbiAgICogICB0YXJnZXQ6IHtsYXQ6IC4uLiwgbG5nOiAuLi59LFxuICAgKiAgIHpvb206IDEwXG4gICAqIH1cbiAgICpcbiAgICogW3VzYWdlIDJdIFRoZSB6b29tIHByb3BlcnR5IGlzIGlnbm9yZWQgd2hlbiB5b3Ugc3BlY2lmeSBtdWx0aXBsZSBwb3NpdGlvblxuICAgKlxuICAgKiBsZXQgY2FtZXJhUG9zOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nW10+ID0ge1xuICAgKiAgIHRhcmdldDogW1xuICAgKiAgICAgIHtsYXQ6IC4uLiwgbG5nOiAuLi59LFxuICAgKiAgICAgIHtsYXQ6IC4uLiwgbG5nOiAuLi59LFxuICAgKiAgICAgIHtsYXQ6IC4uLiwgbG5nOiAuLi59XG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICB0YXJnZXQ/OiBUO1xuICAvKipcbiAgICogVmlldyBhbmdsZVxuICAgKi9cbiAgdGlsdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFpvb20gbGV2ZWxcbiAgICovXG4gIHpvb20/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXAgb3JpZW50YXRpb25cbiAgICovXG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDYW1lcmEgcGFkZGluZyBpbiBwaXhlbFxuICAgKi9cbiAgcGFkZGluZz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIENlbnRlciBwb3NpdGlvbiBvZiBjaXJjbGVcbiAgICovXG4gIGNlbnRlcjogSUxhdExuZztcblxuICAvKipcbiAgICogUmFkaXVzIG9mIGNpcmNsZSBpbiBtZXRlclxuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIHN0cm9rZUNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbFxuICAgKi9cbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGluc2lkZSBjb2xvciBvZiBjaXJjbGVcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byByZWNlaXZlIHRoZSBDSVJDTEVfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGhpZGVcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBaLWluZGV4XG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXF1ZXN0IHtcblxuICAvKipcbiAgICogVGhlIGFkZHJlc3MgcHJvcGVydHkgb3IgcG9zaXRpb24gcHJvcGVydHkgaXMgcmVxdWlyZWQuXG4gICAqIFlvdSBjYW4gbm90IHNwZWNpZnkgYm90aCBwcm9wZXJ0eSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKlxuICAgKiBbZ2VvY29kaW5nIHVzYWdlMV1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBhZGRyZXNzOiBcIkxvcyBBbmdlbGVzLCBDYWxpZm9ybmlhLCBVU0FcIlxuICAgKiB9XG4gICAqXG4gICAqIFtnZW9jb2RpbmcgdXNhZ2UyXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIGFkZHJlc3M6IFtcbiAgICogICAgXCJMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSwgVVNBXCIsXG4gICAqICAgIFwiU2FuIEZyYW5jaXNjbywgQ2FsaWZvcm5pYSwgVVNBXCIsXG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICBhZGRyZXNzPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqXG4gICAqIFtyZXZlcnNlLWdlb2NvZGluZyB1c2FnZTFdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgcG9zaXRpb246IHtcImxhdFwiOiAzNy40MjE2NTUsIFwibG5nXCI6IC0xMjIuMDg1NjM3fVxuICAgKiB9XG4gICAqXG4gICAqIFtyZXZlcnNlLWdlb2NvZGluZyB1c2FnZTJdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgcG9zaXRpb246IFtcbiAgICogICAge1wibGF0XCI6IDM3LjQyMTY1NSwgXCJsbmdcIjogLTEyMi4wODU2Mzd9LFxuICAgKiAgICB7XCJsYXRcIjogMzcuMzMyLCBcImxuZ1wiOiAtMTIyLjAzMDc4MX1cbiAgICogICBdXG4gICAqIH1cbiAgICovXG4gIHBvc2l0aW9uPzogSUxhdExuZyB8IElMYXRMbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2RlclJlc3VsdCB7XG4gIGFkbWluQXJlYT86IHN0cmluZztcbiAgY291bnRyeT86IHN0cmluZztcbiAgY291bnRyeUNvZGU/OiBzdHJpbmc7XG4gIGV4dHJhPzoge1xuICAgIGZlYXR1cmVOYW1lPzogc3RyaW5nO1xuICAgIGxpbmVzPzogc3RyaW5nW107XG4gICAgcGVybWlzZXM/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nXG4gIH07XG4gIGxvY2FsZT86IHN0cmluZztcbiAgbG9jYWxpdHk/OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogSUxhdExuZztcbiAgcG9zdGFsQ29kZT86IHN0cmluZztcbiAgc3ViQWRtaW5BcmVhPzogc3RyaW5nO1xuICBzdWJMb2NhbGl0eT86IHN0cmluZztcbiAgc3ViVGhvcm91Z2hmYXJlPzogc3RyaW5nO1xuICB0aG9yb3VnaGZhcmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVVJMIG9mIG92ZXJsYXlcbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCb3VuZHMsIGFycmF5IG9mIElMYXRMbmdcbiAgICovXG4gIGJvdW5kczogSUxhdExuZ1tdO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byByZWNlaXZlIHRoZSBHUk9VTkRfT1ZFUkxBWV9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gaGlkZVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9wYWNpdHkuIEZyb20gMC4wIHRvIDEuMCAuXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBCZWFyaW5nXG4gICAqL1xuICBiZWFyaW5nPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBaLWluZGV4XG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxhdExuZyB7XG4gIGxhdDogbnVtYmVyO1xuICBsbmc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJJY29uIHtcbiAgdXJsPzogc3RyaW5nO1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBpY29uIGltYWdlIHVybCBvciBwcm9wZXJ0aWVzLiBBbHNvIHlvdSBjYW4gc3BlY2lmeSBIVE1MIENvbG9yIHZhbHVlcy4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNwZWNpZnkgdGhlIGltYWdlIGFzIEJhc2U2NFxuICAgKi9cbiAgaWNvbj86IGFueTtcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGluZm9XaW5kb3cuXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNuaXBwZXQgb2YgdGhlIGluZm9XaW5kb3cuXG4gICAqL1xuICBzbmlwcGV0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIHBvc2l0aW9uOiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiAgU3BlY2lmeSB0aGUgYW5jaG9yIG9mIHRoZSBJbmZvV2luZG93XG4gICAqL1xuICBpbmZvV2luZG93QW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFx0U3BlY2lmeSB0aGUgYW5jaG9yIG9mIGljb24gaW1hZ2VcbiAgICovXG4gIGFuY2hvcj86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBlbmFibGUgdG8gZHJhZyB0aGUgbWFya2VyLiAoRGVmYXVsdDogZmFsc2UpIEltcG9ydGFudCEgRHJhZyBzdGFydHMgYWZ0ZXIgbG9uZyBwcmVzc2VkIG9uIHRoZSBtYXJrZXIuXG4gICAqL1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdXNlIGEgZmxhdCBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGZsYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgU2V0IHJvdGF0aW9uIGFuZ2xlLiAoRGVmYXVsdDogMClcbiAgICovXG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZS4gKERlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgb3B0aW9ucyBmb3IgdGl0bGUuIFRoaXMgcHJvcGVydHkgd29yayBmb3Igbm9ybWFsIEluZm9XaW5kb3cuXG4gICAqL1xuICBzdHlsZXM/OiBhbnk7XG5cbiAgLyoqXG4gICAqIFdoaWNoIGFuaW1hdGlvbiB0byBwbGF5IHdoZW4gbWFya2VyIGlzIGFkZGVkIHRvIGEgbWFwLlxuICAgKi9cbiAgYW5pbWF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIaWdoZXIgekluZGV4IHZhbHVlIG92ZXJsYXlzIHdpbGwgYmUgZHJhd24gb24gdG9wIG9mIGxvd2VyIHpJbmRleCB2YWx1ZSB0aWxlIGxheWVycyBhbmQgb3ZlcmxheXMuXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYXV0byBwYW5uaW5nIHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9QYW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckxhYmVsIHtcbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHVzZSBib2xkIGZvbnRcbiAgICovXG4gIGJvbGQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZm9udCBzaXplIGluIHBpeGVsXG4gICAqL1xuICBmb250U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogY29sb3Igc3RyaW5nc1xuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHVzZSBpdGFsaWMgZm9udFxuICAgKi9cbiAgaXRhbGljPzogYm9vbGVhbjtcblxufVxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVySWNvbiB7XG4gIC8qKlxuICAgKiBNaW5pbXVtIG51bWJlciBvZiBjbHVzdGVyaW5nXG4gICAqL1xuICBtaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1heD86IG51bWJlcjtcblxuICAvKipcbiAgICogYW5jaG9yIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXJcbiAgICovXG4gIGFuY2hvcj86IGFueTtcblxuICAvKipcbiAgICogbGFiZWwgb3B0aW9uIGZvciBjbHVzdGVyZWQgbWFya2VyXG4gICAqL1xuICBsYWJlbD86IE1hcmtlckxhYmVsO1xuXG4gIC8qKlxuICAgKiBpY29uIHVybFxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGljb24gc2l6ZVxuICAgKi9cbiAgc2l6ZT86IHtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyQ2x1c3Rlck9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSB6b29tIGxldmVsIG9mIGNsdXN0ZXJpbmdcbiAgICogKGRlZmF1bHQ6IDE1LCBtYXg6IDE4KVxuICAgKi9cbiAgbWF4Wm9vbUxldmVsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcmF3IGEgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgYWxsIGxvY2F0aW9ucyBvZiBjbHVzdGVyZWQgd2hlbiB5b3UgdGFwIG9uIGEgY2x1c3RlciBtYXJrZXIuXG4gICAqIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgYm91bmRzRHJhdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIGxpc3RcbiAgICogW1xuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBBXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX0sXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEJcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQ1wiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19XG4gICAqIF1cbiAgICovXG4gIG1hcmtlcnM6IE1hcmtlck9wdGlvbnNbXTtcblxuICAvKipcbiAgICogQ29uZGl0aW9ucyBvZiBjbHVzdGVyaW5nXG4gICAqIFtcbiAgICogICB7aWNvbjogXCJhc3NldHMvc21hbGwucG5nXCIsIG1pbjogMiwgbWF4OiAxMH0sXG4gICAqICAge2ljb246IFwiYXNzZXRzL21pZGRsZS5wbmdcIiwgbWluOiAxMSwgbWF4OiAzMH0sXG4gICAqICAge2ljb246IFwiYXNzZXRzL2xhcmdlLnBuZ1wiLCBtaW46IDMxfVxuICAgKiBdXG4gICAqL1xuICBpY29uczogTWFya2VyQ2x1c3Rlckljb25bXTtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNeUxvY2F0aW9uIHtcbiAgbGF0TG5nPzogTGF0TG5nO1xuICBlbGFwc2VkUmVhbHRpbWVOYW5vcz86IGFueTtcbiAgdGltZT86IHN0cmluZztcbiAgYWNjdXJhY3k/OiBhbnk7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIGFsdGl0dWRlPzogYW55O1xuICBzcGVlZD86IG51bWJlcjtcbiAgcHJvdmlkZXI/OiBhbnk7XG4gIGhhc2hDb2RlPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHRyeSB0byB1c2UgR1BTIG1hbmRhdG9yeS5cbiAgICogSW4gZmFsc2UsIHRoZSBwbHVnaW4gdHJ5IHRvIHVzZSBHUFMgYW5kIG5ldHdvcmsuXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbk9wdGlvbnMge1xuICAvKipcbiAgICogUGFzcyBJTGF0TG5nW10gdG8gc3BlY2lmeSB0aGUgdmVydGl4ZXMuXG4gICAqIFlvdSBuZWVkIHRvIGNvbnRhaW4gdHdvIHBvaW50cyBhdCBsZWFzdC5cbiAgICovXG4gIHBvaW50czogSUxhdExuZ1tdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkcmF3IHRoZSBjdXJ2ZSBwb2x5Z29uIGJhc2VkIG9uIHRoZSBlYXJ0aFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBnZW9kZXNpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIHN0cm9rZUNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbFxuICAgKi9cbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5zaWRlIGNvbG9yIG9mIHBvbHlnb25cbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gY3JlYXRlIGludmlzaWJsZSBwb2x5Z29uXG4gICAqIChJbnZpc2libGUgcG9seWdvbiBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogUGFzcyBJTGF0TG5nW11bXSB0byBjcmVhdGUgaG9sZXMgaW4gcG9seWdvblxuICAgKi9cbiAgaG9sZXM/OiBJTGF0TG5nW11bXTtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUdPTl9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlsaW5lXG4gICAqIChJbnZpc2libGUgcG9seWxpbmUgaXMgbm90IGNsaWNrYWJsZSwgZGVmYXVsdCB0cnVlKVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlsaW5lIGJhc2VkIG9uIHRoZSBlYXJ0aFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBnZW9kZXNpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhpZXJhcmNoeSB6LWluZGV4XG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHJlY2VpdmUgdGhlIFBPTFlMSU5FX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZU92ZXJsYXlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoaXMgY2FsbGJhY2sgbXVzdCBSZXR1cm5zIHN0cmluZyBvZiBpbWFnZSBVUkwsIG9yIFByb21pc2UuXG4gICAqIElmIG5vIHRpbGUsIHlvdSBuZWVkIHRvIFJldHVybnMgbnVsbC5cbiAgICovXG4gIC8vIGdldFRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgem9vbTogbnVtYmVyKSA9PiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz47XG4gIGdldFRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgem9vbTogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHRpbGVsYXllclxuICAgKiAoZGVmYXVsdCB0cnVlKVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhpZXJhcmNoeSB6LWluZGV4IG9mIHRpbGVsYXllclxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0OiA1MTJweFxuICAgKi9cbiAgdGlsZVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDEuMFxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgdGlsZSBpbmZvcm1hdGlvbiBvdmVyIHRoZSB0aWxlIGltYWdlcy5cbiAgICovXG4gIGRlYnVnPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb0RhdGFVcmxPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgeW91IHdhbnQgZ2V0IGhpZ2ggcXVhbGl0eSBtYXAgc25hcHNob3RcbiAgICovXG4gIHVuY29tcHJlc3M/OiBib29sZWFuO1xufVxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgbWFwLmFkZEttbE92ZXJsYXkoKSBtZXRob2RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLbWxPdmVybGF5T3B0aW9ucyB7XG4gIC8qXG4gICAqIFRoZSB1cmwgb3IgZmlsZSBwYXRoIG9mIEtNTCBmaWxlLiBLTVogZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKlxuICAgKiBEbyBub3QgZmlyZSB0aGUgS01MX0NMSUNLIGV2ZW50IGlmIGZhbHNlLiBEZWZhdWx0IGlzIHRydWUuXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qXG4gICAqIERvIG5vdCBkaXNwbGF5IHRoZSBkZWZhdWx0IGluZm9XaW5kb3cgaWYgdHJ1ZS4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIHN1cHByZXNzSW5mb1dpbmRvd3M/OiBib29sZWFuO1xuXG4gIC8qXG4gICAqIGljb24gb3B0aW9uXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgTWFya2VySWNvbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBFbnZpcm9ubWVudC5zZXRFbnYoKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVudk9wdGlvbnMge1xuICAvKlxuICAgKiBBUEkga2V5IGZvciBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB2MyBmb3IgYGh0dHBzOmAgKG9uIHNlcnZlcilcbiAgICovXG4gIEFQSV9LRVlfRk9SX0JST1dTRVJfUkVMRUFTRT86IHN0cmluZztcblxuICAvKlxuICAgKiBBUEkga2V5IGZvciBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB2MyBmb3IgYGh0dHA6YCAobG9jYWwgZGV2ZWxvcG1lbnQpXG4gICAqL1xuICBBUElfS0VZX0ZPUl9CUk9XU0VSX0RFQlVHPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXNpYmxlUmVnaW9uIGltcGxlbWVudHMgSUxhdExuZ0JvdW5kcyB7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBub3J0aGVhc3Qgb2YgdGhlIGJvdW5kcyB0aGF0IGNvbnRhaW5zIHRoZSBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQgYW5kIG5lYXJSaWdodC5cbiAgICogU2luY2UgdGhlIG1hcCB2aWV3IGlzIGFibGUgdG8gcm90YXRlLCB0aGUgZmFyUmlnaHQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBub3J0aGVhc3QuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5vcnRoZWFzdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIHNvdXRod2VzdCBvZiB0aGUgYm91bmRzIHRoYXQgY29udGFpbnMgdGhlIGZhckxlZnQsIGZhclJpZ2h0LCBuZWFyTGVmdCBhbmQgbmVhclJpZ2h0LlxuICAgKiBTaW5jZSB0aGUgbWFwIHZpZXcgaXMgYWJsZSB0byByb3RhdGUsIHRoZSBuZWFyTGVmdCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIHNvdXRod2VzdC5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc291dGh3ZXN0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmFyTGVmdCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZmFyTGVmdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIGZhclJpZ2h0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgdG9wLXJpZ2h0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZmFyUmlnaHQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuZWFyTGVmdCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIGJvdHRvbS1sZWZ0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmVhckxlZnQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuZWFyUmlnaHQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSBib3R0b20tcmlnaHQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuZWFyUmlnaHQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIGNvbnN0YW50IHZhbHVlIDogYFZpc2libGVSZWdpb25gXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihzb3V0aHdlc3Q6IExhdExuZ0JvdW5kcywgbm9ydGhlYXN0OiBMYXRMbmdCb3VuZHMsIGZhckxlZnQ6IElMYXRMbmcsIGZhclJpZ2h0OiBJTGF0TG5nLCBuZWFyTGVmdDogSUxhdExuZywgbmVhclJpZ2h0OiBJTGF0TG5nKSB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkpLlZpc2libGVSZWdpb24oc291dGh3ZXN0LCBub3J0aGVhc3QsIGZhckxlZnQsIGZhclJpZ2h0LCBuZWFyTGVmdCwgbmVhclJpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0byBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiB0aGUgZm9ybSBcImxhdF9zdyxsbmdfc3csbGF0X25lLGxuZ19uZVwiIGZvciB0aGlzIGJvdW5kcywgd2hlcmUgXCJzd1wiIGNvcnJlc3BvbmRzIHRvIHRoZSBzb3V0aHdlc3QgY29ybmVyIG9mIHRoZSBib3VuZGluZyBib3gsIHdoaWxlIFwibmVcIiBjb3JyZXNwb25kcyB0byB0aGUgbm9ydGhlYXN0IGNvcm5lciBvZiB0aGF0IGJveC5cbiAgICogQHBhcmFtIHByZWNpc2lvbiB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBsYXQvbG5nIGlzIGluIHRoaXMgYm91bmRzLlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY29udGFpbnMoTGF0TG5nOiBJTGF0TG5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBTdHJlZXRWaWV3U291cmNlID0ge1xuICBERUZBVUxUOiAnREVGQVVMVCcsXG4gIE9VVERPT1I6ICdPVVRET09SJ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTZXRQb3ZPcHRpb24ge1xuICBiZWFyaW5nOiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgem9vbT86IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld1NldFBvc2l0aW9uT3B0aW9uIHtcbiAgdGFyZ2V0OiBJTGF0TG5nO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHJhZGl1cz86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NhbWVyYVBhbm8ge1xuICB0YXJnZXQ6IHN0cmluZztcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgdGlsdD86IG51bWJlcjtcbiAgem9vbT86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NhbWVyYVBvc2l0aW9uIHtcbiAgdGFyZ2V0OiBJTGF0TG5nO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgdGlsdD86IG51bWJlcjtcbiAgem9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMge1xuICBzdHJlZXROYW1lcz86IGJvb2xlYW47XG4gIG5hdmlnYXRpb24/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3R2VzdHVyZU9wdGlvbnMge1xuICBwYW5uaW5nPzogYm9vbGVhbjtcbiAgem9vbWluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld09wdGlvbnMge1xuXG4gIC8qXG4gICAqIGNhbWVyYTogW29wdGlvbnNdIEluaXRpYWwgY2FtZXJhIHBvc2l0aW9uXG4gICAqL1xuICBjYW1lcmE/OiBTdHJlZXRWaWV3Q2FtZXJhUGFubyB8IFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbjtcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IFN0cmVldFZpZXdDb250cm9sT3B0aW9ucztcblxuICAvKipcbiAgICogZ2VzdHVyZXMgW29wdGlvbnNdXG4gICAqL1xuICBnZXN0dXJlcz86IFN0cmVldFZpZXdHZXN0dXJlT3B0aW9ucztcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmsge1xuXG4gIC8qKlxuICAgKiBwYW5vcmFtYSBJZFxuICAgKi9cbiAgcGFub0lkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGJlYXJpbmcgKGhlYWRpbmcpXG4gICAqL1xuICBiZWFyaW5nOiBudW1iZXI7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3TG9jYXRpb24ge1xuXG4gIGxhdExuZzogSUxhdExuZztcblxuICBsaW5rczogU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rW107XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBZb3UgY2FuIGxpc3RlbiB0byB0aGVzZSBldmVudHMgd2hlcmUgYXBwcm9wcmlhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNFdmVudCA9IHtcbiAgTUFQX1JFQURZOiAnbWFwX3JlYWR5JyxcbiAgTUFQX0NMSUNLOiAnbWFwX2NsaWNrJyxcbiAgTUFQX0xPTkdfQ0xJQ0s6ICdtYXBfbG9uZ19jbGljaycsXG4gIFBPSV9DTElDSzogJ3BvaV9jbGljaycsXG4gIE1ZX0xPQ0FUSU9OX0NMSUNLOiAnbXlfbG9jYXRpb25fY2xpY2snLFxuICBNWV9MT0NBVElPTl9CVVRUT05fQ0xJQ0s6ICdteV9sb2NhdGlvbl9idXR0b25fY2xpY2snLFxuICBJTkRPT1JfQlVJTERJTkdfRk9DVVNFRDogJ2luZG9vcl9idWlsZGluZ19mb2N1c2VkJyxcbiAgSU5ET09SX0xFVkVMX0FDVElWQVRFRDogJ2luZG9vcl9sZXZlbF9hY3RpdmF0ZWQnLFxuICBDQU1FUkFfTU9WRV9TVEFSVDogJ2NhbWVyYV9tb3ZlX3N0YXJ0JyxcbiAgQ0FNRVJBX01PVkU6ICdjYW1lcmFfbW92ZScsXG4gIENBTUVSQV9NT1ZFX0VORDogJ2NhbWVyYV9tb3ZlX2VuZCcsXG4gIE9WRVJMQVlfQ0xJQ0s6ICdvdmVybGF5X2NsaWNrJyxcbiAgUE9MWUdPTl9DTElDSzogJ3BvbHlnb25fY2xpY2snLFxuICBQT0xZTElORV9DTElDSzogJ3BvbHlsaW5lX2NsaWNrJyxcbiAgQ0lSQ0xFX0NMSUNLOiAnY2lyY2xlX2NsaWNrJyxcbiAgR1JPVU5EX09WRVJMQVlfQ0xJQ0s6ICdncm91bmRvdmVybGF5X2NsaWNrJyxcbiAgSU5GT19DTElDSzogJ2luZm9fY2xpY2snLFxuICBJTkZPX0xPTkdfQ0xJQ0s6ICdpbmZvX2xvbmdfY2xpY2snLFxuICBJTkZPX0NMT1NFOiAnaW5mb19jbG9zZScsXG4gIElORk9fT1BFTjogJ2luZm9fb3BlbicsXG4gIE1BUktFUl9DTElDSzogJ21hcmtlcl9jbGljaycsXG4gIE1BUktFUl9EUkFHOiAnbWFya2VyX2RyYWcnLFxuICBNQVJLRVJfRFJBR19TVEFSVDogJ21hcmtlcl9kcmFnX3N0YXJ0JyxcbiAgTUFSS0VSX0RSQUdfRU5EOiAnbWFya2VyX2RyYWdfZW5kJyxcbiAgTUFQX0RSQUc6ICdtYXBfZHJhZycsXG4gIE1BUF9EUkFHX1NUQVJUOiAnbWFwX2RyYWdfc3RhcnQnLFxuICBNQVBfRFJBR19FTkQ6ICdtYXBfZHJhZ19lbmQnLFxuICBLTUxfQ0xJQ0s6ICdrbWxfY2xpY2snLFxuICBQQU5PUkFNQV9SRUFEWTogJ3Bhbm9yYW1hX3JlYWR5JyxcbiAgUEFOT1JBTUFfQ0FNRVJBX0NIQU5HRTogJ3Bhbm9yYW1hX2NhbWVyYV9jaGFuZ2UnLFxuICBQQU5PUkFNQV9MT0NBVElPTl9DSEFOR0U6ICdwYW5vcmFtYV9sb2NhdGlvbl9jaGFuZ2UnLFxuICBQQU5PUkFNQV9DTElDSzogJ3Bhbm9yYW1hX2NsaWNrJ1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzQW5pbWF0aW9uID0ge1xuICBCT1VOQ0U6ICdCT1VOQ0UnLFxuICBEUk9QOiAnRFJPUCdcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc01hcFR5cGVJZCA9IHtcbiAgTk9STUFMOiAnTUFQX1RZUEVfTk9STUFMJyxcbiAgUk9BRE1BUDogJ01BUF9UWVBFX05PUk1BTCcsXG4gIFNBVEVMTElURTogJ01BUF9UWVBFX1NBVEVMTElURScsXG4gIEhZQlJJRDogJ01BUF9UWVBFX0hZQlJJRCcsXG4gIFRFUlJBSU46ICdNQVBfVFlQRV9URVJSQUlOJyxcbiAgTk9ORTogJ01BUF9UWVBFX05PTkUnXG59O1xuXG4vKipcbiAqIEBuYW1lIEBpb25pYy1uYXRpdmUvZ29vZ2xlLW1hcHNcbiAqIEBkZXNjcmlwdGlvblxuICogRW1iZWQgbmF0aXZlIEdvb2dsZSBNYXBzIHZpZXdzIGludG8geW91ciBhcHAuXG4gKiBUaGlzIHZlcnNpb24gaXMgYWltZWQgZm9yIGlvbmljIHY0L2JldGEuXG4gKiBZb3UgbmVlZCB0byB1c2UgW2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHNAMi40LjFdKGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMpIHdpdGggdGhpcyBwbHVnaW4uXG4gKlxuICpcbiAqIFByZXJlcXVpc2l0ZXM6XG4gKiAgLSBbR2VuZXJhdGUgQVBJIGtleXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLW5hdGl2ZS1nb29nbGUtbWFwcy9ibG9iL21hc3Rlci9kb2N1bWVudHMvYXBpX2tleS9nZW5lcmF0ZV9hcGlfa2V5Lm1kKVxuICpcbiAqIERlbW86XG4gKiAgLSBbQnJvd3NlciBwbGF0Zm9ybV0oaHR0cHM6Ly9tYXBzcGx1Z2luLmdpdGh1Yi5pby9pb25pYy1nb29nbGVtYXBzLXF1aWNrZGVtby12NC8pXG4gKlxuICogRG9jdW1lbnRhdGlvbjpcbiAqICAtIFtBUEkgUmVmZXJlbmNlXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1uYXRpdmUtZ29vZ2xlLW1hcHMjZG9jdW1lbnRhdGlvbilcbiAqICAtIFtPdmVydmlldyBzbGlkZV0oaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vcHJlc2VudGF0aW9uL2QvZS8yUEFDWC0xdlNjb2hvMWVuc2JSNHFDSTlBSXVRTjU1QlpWdks3M3BBakk3c3VtRHZXM0NyeHhIbnJtcFhXVWp4Mi04Q3BGaWJxVTFFakxLQ1JodXRoSi9wdWI/c3RhcnQ9ZmFsc2UmbG9vcD1mYWxzZSZkZWxheW1zPTMwMDApXG4gKlxuICogVXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7XG4gKiAgR29vZ2xlTWFwcyxcbiAqICBHb29nbGVNYXAsXG4gKiAgR29vZ2xlTWFwc0V2ZW50LFxuICogIEdvb2dsZU1hcE9wdGlvbnMsXG4gKiAgQ2FtZXJhUG9zaXRpb24sXG4gKiAgTWFya2VyT3B0aW9ucyxcbiAqICBNYXJrZXJcbiAqIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9cIjtcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICogICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICogICBtYXA6IEdvb2dsZU1hcDtcbiAqICAgY29uc3RydWN0b3IoKSB7IH1cbiAqXG4gKiAgIGlvblZpZXdEaWRMb2FkKCkge1xuICogICAgdGhpcy5sb2FkTWFwKCk7XG4gKiAgIH1cbiAqXG4gKiAgbG9hZE1hcCgpIHtcbiAqXG4gKiAgICAgbGV0IG1hcE9wdGlvbnM6IEdvb2dsZU1hcE9wdGlvbnMgPSB7XG4gKiAgICAgICBjYW1lcmE6IHtcbiAqICAgICAgICAgdGFyZ2V0OiB7XG4gKiAgICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICAgIGxuZzogLTg5LjM4MDk4MDJcbiAqICAgICAgICAgfSxcbiAqICAgICAgICAgem9vbTogMTgsXG4gKiAgICAgICAgIHRpbHQ6IDMwXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqICAgICB0aGlzLm1hcCA9IEdvb2dsZU1hcHMuY3JlYXRlKCdtYXBfY2FudmFzJywgbWFwT3B0aW9ucyk7XG4gKlxuICogICAgIGxldCBtYXJrZXI6IE1hcmtlciA9IHRoaXMubWFwLmFkZE1hcmtlclN5bmMoe1xuICogICAgICAgdGl0bGU6ICdJb25pYycsXG4gKiAgICAgICBpY29uOiAnYmx1ZScsXG4gKiAgICAgICBhbmltYXRpb246ICdEUk9QJyxcbiAqICAgICAgIHBvc2l0aW9uOiB7XG4gKiAgICAgICAgIGxhdDogNDMuMDc0MTkwNCxcbiAqICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqICAgICBtYXJrZXIub24oR29vZ2xlTWFwc0V2ZW50Lk1BUktFUl9DTElDSylcbiAqICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICogICAgICAgICBhbGVydCgnY2xpY2tlZCcpO1xuICogICAgICAgfSk7XG4gKiAgICAgfSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBHb29nbGVNYXBzXG4gKiBHb29nbGVNYXBcbiAqIFN0cmVldFZpZXdcbiAqIENpcmNsZVxuICogRW5jb2RpbmdcbiAqIEVudmlyb25tZW50XG4gKiBHZW9jb2RlclxuICogR3JvdW5kT3ZlcmxheVxuICogSHRtbEluZm9XaW5kb3dcbiAqIEdlb2NvZGVyXG4gKiBMYXRMbmdcbiAqIExhdExuZ0JvdW5kc1xuICogTWFya2VyXG4gKiBNYXJrZXJDbHVzdGVyXG4gKiBQb2x5Z29uXG4gKiBQb2x5bGluZVxuICogU3BoZXJpY2FsXG4gKiBLbWxPdmVybGF5XG4gKiBQb2x5XG4gKiBUaWxlT3ZlcmxheVxuICogQmFzZUNsYXNzXG4gKiBCYXNlQXJyYXlDbGFzc1xuICogQGludGVyZmFjZXNcbiAqIEdvb2dsZU1hcE9wdGlvbnNcbiAqIENhbWVyYVBvc2l0aW9uXG4gKiBDaXJjbGVPcHRpb25zXG4gKiBHZW9jb2RlclJlcXVlc3RcbiAqIEdlb2NvZGVyUmVzdWx0XG4gKiBHcm91bmRPdmVybGF5T3B0aW9uc1xuICogSUxhdExuZ1xuICogTWFya2VySWNvblxuICogTWFya2VyT3B0aW9uc1xuICogTWFya2VyQ2x1c3Rlckljb25cbiAqIE1hcmtlckNsdXN0ZXJPcHRpb25zXG4gKiBNeUxvY2F0aW9uXG4gKiBNeUxvY2F0aW9uT3B0aW9uc1xuICogUG9seWdvbk9wdGlvbnNcbiAqIFBvbHlsaW5lT3B0aW9uc1xuICogVGlsZU92ZXJsYXlPcHRpb25zXG4gKiBLbWxPdmVybGF5T3B0aW9uc1xuICogVmlzaWJsZVJlZ2lvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXBzcGx1Z2luL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBkb2N1bWVudDogJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbmF0aXZlL2dvb2dsZS1tYXBzLycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyAtLXZhcmlhYmxlIEFQSV9LRVlfRk9SX0FORFJPSUQ9XCJZT1VSX0FORFJPSURfQVBJX0tFWV9JU19IRVJFXCIgLS12YXJpYWJsZSBBUElfS0VZX0ZPUl9JT1M9XCJZT1VSX0lPU19BUElfS0VZX0lTX0hFUkVcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBJX0tFWV9GT1JfQU5EUk9JRCcsICdBUElfS0VZX0ZPUl9JT1MnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ0Jyb3dzZXInXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdvb2dsZU1hcCBpbnN0YW5jZVxuICAgKiBAcGFyYW0gZWxlbWVudCB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnQgSUQgb3IgcmVmZXJlbmNlIHRvIGF0dGFjaCB0aGUgbWFwIHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHb29nbGVNYXBPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgR29vZ2xlTWFwT3B0aW9ucywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMpOiBHb29nbGVNYXAge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBtdXN0IGJlIHVuZGVyIDxib2R5PicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VsZW1lbnQudGFnTmFtZX1bX19wbHVnaW5NYXBJZD0nJHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpfSddIGhhcyBhbHJlYWR5IG1hcC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IGVsZW1lbnQgYXMgR29vZ2xlTWFwT3B0aW9ucztcbiAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBnb29nbGVNYXA6IEdvb2dsZU1hcCA9IG5ldyBHb29nbGVNYXAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCB8IHN0cmluZywgb3B0aW9ucyk7XG4gICAgICBnb29nbGVNYXAuc2V0KCdfb3ZlcmxheXMnLCB7fSk7XG4gICAgICByZXR1cm4gZ29vZ2xlTWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFN0cmVldFZpZXcgaW5zdGFuY2VcbiAgICogQHBhcmFtIGVsZW1lbnQge3N0cmluZyB8IEhUTUxFbGVtZW50fSBFbGVtZW50IElEIG9yIHJlZmVyZW5jZSB0byBhdHRhY2ggdGhlIG1hcCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7U3RyZWV0Vmlld09wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zXG4gICAqIEByZXR1cm4ge1N0cmVldFZpZXdQYW5vcmFtYX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVQYW5vcmFtYShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgb3B0aW9ucz86IFN0cmVldFZpZXdPcHRpb25zKTogU3RyZWV0Vmlld1Bhbm9yYW1hIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbXVzdCBiZSB1bmRlciA8Ym9keT4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtlbGVtZW50LnRhZ05hbWV9W19fcGx1Z2luTWFwSWQ9JyR7ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKX0nXSBoYXMgYWxyZWFkeSBtYXAuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgU3RyZWV0Vmlld1Bhbm9yYW1hKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUVycm9yTWVzc2FnZSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvckRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICBlcnJvckRpdi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBlcnJvckRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGVycm9yRGl2LnN0eWxlLndpZHRoID0gJzgwJSc7XG4gIGVycm9yRGl2LnN0eWxlLmhlaWdodCA9ICc1MCUnO1xuICBlcnJvckRpdi5zdHlsZS50b3AgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5tYXJnaW4gPSAnYXV0byc7XG5cbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2M3JztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckRpdik7XG59O1xuXG5jb25zdCBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIgPSAoX29iamVjdEluc3RhbmNlOiBhbnksIGFyZ3M6IGFueVtdKTogYW55W10gPT4ge1xuICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpIHtcbiAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdNYXAnIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnU3RyZWV0Vmlld1Bhbm9yYW1hJykge1xuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKF9vYmplY3RJbnN0YW5jZS5fX3BnbUlkLmluZGV4T2YoJ21hcmtlcmNsdXN0ZXJfJykgIT09IC0xKSB7XG4gICAgICBjb25zdCBfb3ZlcmxheXM6IGFueSA9IF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpIHx8IHt9O1xuICAgICAgbGV0IG92ZXJsYXk6IE1hcmtlciA9IF9vdmVybGF5c1thcmdzW2FyZ3MubGVuZ3RoIC0gMV0uZ2V0SWQoKV07XG4gICAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgICAgY29uc3QgbWFya2VySlM6IGFueSA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgbWFya2VySWQ6IHN0cmluZyA9IG1hcmtlckpTLmdldElkKCk7XG4gICAgICAgIGNvbnN0IG1hcmtlckNsdXN0ZXI6IE1hcmtlckNsdXN0ZXIgPSBfb2JqZWN0SW5zdGFuY2UgYXMgTWFya2VyQ2x1c3RlcjtcbiAgICAgICAgb3ZlcmxheSA9IG5ldyBNYXJrZXIobWFya2VyQ2x1c3Rlci5nZXRNYXAoKSwgbWFya2VySlMpO1xuICAgICAgICBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF0gPSBvdmVybGF5O1xuICAgICAgICBtYXJrZXJKUy5vbmUobWFya2VySlMuZ2V0SWQoKSArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlzOiBhbnkgPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKTtcbiAgICAgICAgICBpZiAob3ZlcmxheXMpIHtcbiAgICAgICAgICAgIG92ZXJsYXlzW21hcmtlcklkXSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgb3ZlcmxheXNbbWFya2VySWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBvdmVybGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVthcmdzW2FyZ3MubGVuZ3RoIC0gMV0uZ2V0SWQoKV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQmFzZUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkJhc2VDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNsYXNzIHtcbiAgcHJvdGVjdGVkIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9iakluc3RhbmNlPzogYW55KSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKCFvYmpJbnN0YW5jZSkge1xuICAgICAgICBvYmpJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG9iakluc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGV4ZWN1dGluZyBhbnkgbWV0aG9kcy4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lci5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoZSBoYW5kbGVyIGZvciB0aGUgZXZlbnQgdGhhdCBpcyB0aHJvd24gYnkgdGhlIHRhcmdldCwgd2hlcmUgdGhlIG1pbmltdW0gaW50ZXJ2YWwgYmV0d2VlbiBldmVudHMgKGluIG1pbGxpc2Vjb25kcykgaXMgc3BlY2lmaWVkIGFzIGEgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRocm90dGxlSW50ZXJ2YWwge251bWJlcn0gdGhyb3R0bGUgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIC8vIGFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIHRocm90dGxlSW50ZXJ2YWw6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAvLyAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAvLyAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd29ya3Mgb25jZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkRXZlbnRMaXN0ZW5lck9uY2UoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uZShldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICByZXNvbHZlKG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IHdvcmtzIG9uY2UuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZExpc3RlbmVyT25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc29sZS53YXJuKCdbR29vZ2xlTWFwc10gXCJhZGRMaXN0ZW5lck9uY2VcIiBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFwiYWRkRXZlbnRMaXN0ZW5lck9uY2VcIi4nKTtcbiAgICByZXR1cm4gdGhpcy5hZGRFdmVudExpc3RlbmVyT25jZShldmVudE5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHthbnl9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWVcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgZm9yIHRoZSB2YWx1ZS4gYChrZXkpX2NoYW5nZWRgIHdpbGwgYmUgZmlyZWQgd2hlbiB5b3Ugc2V0IHZhbHVlIHRocm91Z2ggdGhpcyBtZXRob2QuXG4gICAqIEBwYXJhbSB2YWx1ZSB7YW55fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnkge2Jvb2xlYW59IFtvcHRpb25zXSBUcnVlIGlmIHlvdSB3YW50IHRvIHByZXZlbnQgZmlyaW5nIHRoZSBgKGtleSlfY2hhbmdlZGAgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBrZXkgdG8gYW5vdGhlciBvYmplY3RcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGFyZ2V0IHthbnl9IFRoZSB0YXJnZXQgb2JqZWN0IHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXRLZXk/IHtzdHJpbmd9IFtvcHRpb25zXSAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS4gSWYgeW91IG9taXQgdGhpcywgdGhlIGBrZXlgIGFyZ3VtZW50IGlzIHVzZWQuXG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBUcnVlIGlmIHlvdSB3YW50IHRvIHByZXZlbnQgYChrZXkpX2NoYW5nZWRgIGV2ZW50IHdoZW4geW91IGJpbmQgZmlyc3QgdGltZSwgYmVjYXVzZSB0aGUgaW50ZXJuYWwgc3RhdHVzIGlzIGNoYW5nZWQgZnJvbSBgdW5kZWZpbmVkYCB0byBzb21ldGhpbmcuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBiaW5kVG8oa2V5OiBzdHJpbmcsIHRhcmdldDogYW55LCB0YXJnZXRLZXk/OiBzdHJpbmcsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIG9mIGBhZGRFdmVudExpc3RlbmVyYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBvbihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub24oZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIG9mIGBhZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIC8vIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAvLyBvblRocm90dGxlZChldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gIC8vICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAvLyAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25UaHJvdHRsZWQoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgLy8gICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgLy8gICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIG9mIGBhZGRFdmVudExpc3RlbmVyT25jZWBcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIG9uZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25lKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJlc29sdmUobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIG9iamVjdCBoYXMgZXZlbnQgbGlzdGVuZXIgZm9yIGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBFdmVudCBuYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoYXNFdmVudExpc3RlbmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIHN0b3JlZCB2YWx1ZXNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge2FueX0gW29wdGlvbnNdIFRoZSBkYXRhIHlvdSB3YW50IHRvIHBhc3MgdG8gZXZlbnQgbGlzdGVybmVycy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIC4uLnBhcmFtZXRlcnM6IGFueVtdKTogdm9pZCB7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBvZmYoKSBhbmQgZW1wdHkoKVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb2JqZWN0SW5zdGFuY2UudHlwZSA9PT0gJ01hcCcpIHtcbiAgICAgIGNvbnN0IG1hcDogR29vZ2xlTWFwID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCk7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuX29iamVjdEluc3RhbmNlLmdldElkKCldO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIocylcbiAgICogVGhlIGByZW1vdmVFdmVudExpc3RlbmVyKClgIGhhcyB0aHJlZSB1c2FnZXM6XG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJldmVudE5hbWVcIiwgbGlzdGVuZXJGdW5jdGlvbik7XG4gICAqICAgICBUaGlzIHJlbW92ZXMgb25lIHBhcnRpY3VsYXIgZXZlbnQgbGlzdGVuZXJcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRoYXQgYWRkZWQgZm9yIHRoZSBldmVudCBuYW1lLlxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAqICAgICBUaGlzIHJlbW92ZXMgYWxsIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lPzogc3RyaW5nLCBsaXN0ZW5lcj86ICguLi5wYXJhbWV0ZXJzOiBhbnlbXSkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogQWxpYXMgb2YgYHJlbW92ZUV2ZW50TGlzdGVuZXJgXG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gW29wdGlvbnNdIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHtGdW5jdGlvbn0gW29wdGlvbnNdIEV2ZW50IGxpc3RlbmVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBvZmYoZXZlbnROYW1lPzogc3RyaW5nLCBsaXN0ZW5lcj86ICguLi5wYXJhbWV0ZXJzOiBhbnlbXSkgPT4gdm9pZCk6IHZvaWQge31cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBzcGx1Z2luL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMtZG9jL2Jsb2IvbWFzdGVyL3YyLjAuMC9jbGFzcy9CYXNlQXJyYXlDbGFzcy9SRUFETUUubWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXNlQXJyYXlDbGFzcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuQmFzZUFycmF5Q2xhc3MnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VBcnJheUNsYXNzPFQ+IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YT86IFRbXSB8IGFueSkge1xuICAgIGlmIChpbml0aWFsRGF0YSBpbnN0YW5jZW9mIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUFycmF5Q2xhc3MpIHtcbiAgICAgIHN1cGVyKGluaXRpYWxEYXRhKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaW5pdGlhbERhdGEpKSB7XG4gICAgICBzdXBlcihuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUFycmF5Q2xhc3MpKGluaXRpYWxEYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykoW10pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXkuXG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHJlbW92ZV9hdCBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBlbXB0eShub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGZvckVhY2goZm46IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgZm9yRWFjaEFzeW5jKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5mb3JFYWNoKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCB0aGVuIFJldHVybnMgYSBuZXcgdmFsdWUuXG4gICAqIFRoZW4geW91IGNhbiBnZXQgdGhlIHJlc3VsdHMgb2YgZWFjaCBjYWxsYmFjay5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7T2JqZWN0W119IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgbWFwKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYW55KTogYW55W10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6IChuZXdFbGVtZW50OiBhbnkpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UubWFwKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW1lIGFzIGBtYXBBc3luY2AsIGJ1dCBrZWVwIHRoZSBleGVjdXRpb24gb3JkZXJcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIHJlc3VsdHNcbiAgICovXG4gIG1hcFNlcmllcyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5tYXBTZXJpZXMoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIoKSBtZXRob2QgY3JlYXRlcyBhIG5ldyBhcnJheSB3aXRoIGFsbCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtUW119IHJldHVybnMgYSBuZXcgZmlsdGVyZWQgYXJyYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbHRlcihmbjogKGVsZW1lbnQ6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pOiBUW10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyQXN5bmMoKSBtZXRob2QgY3JlYXRlcyBhIG5ldyBhcnJheSB3aXRoIGFsbCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRbXT59IHJldHVybnMgYSBuZXcgZmlsdGVyZWQgYXJyYXlcbiAgICovXG4gIGZpbHRlckFzeW5jKGZuOiAoZWxlbWVudDogVCwgY2FsbGJhY2s6IChyZXN1bHQ6IGJvb2xlYW4pID0+IHZvaWQpID0+IHZvaWQpOiBQcm9taXNlPFRbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZmlsdGVyKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIEFycmF5LlxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEFycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aGUgZWxlbWVudHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXhPZigpIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGdpdmVuIGVsZW1lbnQgY2FuIGJlIGZvdW5kIGluIHRoZSBhcnJheSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IHtPYmplY3R9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGluZGV4T2YoZWxlbWVudDogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByZXZlcnNlKCkgbWV0aG9kIHJldmVyc2VzIGFuIGFycmF5IGluIHBsYWNlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmV2ZXJzZSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc29ydCgpIG1ldGhvZCBzb3J0cyB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgaW4gcGxhY2UgYW5kIHJldHVybnMgdGhlIGFycmF5LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc29ydCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtPYmplY3R9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5zZXJ0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKSB7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHJlbW92ZV9hdCBldmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcG9wKG5vTm90aWZ5PzogYm9vbGVhbik6IFQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9uZSBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gU2V0IHRydWUgdG8gcHJldmVudCBpbnNlcnRfYXQgZXZlbnRzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcHVzaChlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlciwgbm9Ob3RpZnk/OiBib29sZWFuKTogVCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtvYmplY3R9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHNldF9hdCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEF0KGluZGV4OiBudW1iZXIsIGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0NpcmNsZS9SRUFETUUubWRcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNlbnRlciBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENlbnRlcihsYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNlbnRlciBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2VudGVyKCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSByYWRpdXMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjaXJjbGUgcmFkaXVzLlxuICAgKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmlsbENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZpbGxDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2Ugd2lkdGguXG4gICAqIEBwYXJhbSBzdHJva2VXaWR0aCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHN0cm9rZSB3aWR0aCAodW5pdDogcGl4ZWwpLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2UgY29sb3IgKG91dHRlciBjb2xvcikuXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIGNpcmNsZS5cbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNpcmNsZSBpcyBjbGlja2FibGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHpJbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2lyY2xlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhdExuZ0JvdW5kcyAocmVjdGFuZ2xlKSB0aGF0IGNvbnRhaW5zIHRoZSBjaXJjbGUuXG4gICAqIEByZXR1cm4ge0xhdExuZ0JvdW5kc31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJvdW5kcygpOiBMYXRMbmdCb3VuZHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2lyY2xlIHZpc2liaWxpdHlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNpcmNsZSBpcyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZW52aXJvbm1lbnQnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgLyoqXG4gICAqIFNldCBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAqL1xuICBzdGF0aWMgc2V0RW52KGVudk9wdGlvbnM6IEVudk9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW52aXJvbm1lbnQuc2V0RW52KGVudk9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3BlbiBzb3VyY2Ugc29mdHdhcmUgbGljZW5zZSBpbmZvcm1hdGlvbiBmb3IgR29vZ2xlIE1hcHMgU0RLIGZvciBpT1MuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIHN0YXRpYyBnZXRMaWNlbnNlSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygodGV4dDogc3RyaW5nKSA9PiByZXNvbHZlKHRleHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGFwcC5cbiAgICogQHBhcmFtIGNvbG9yXG4gICAqL1xuICBzdGF0aWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW52aXJvbm1lbnQuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZ2V0TGljZW5zZUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKScpO1xuICAgIHJldHVybiBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuc2V0QmFja2dyb3VuZENvbG9yKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuc2V0QmFja2dyb3VuZENvbG9yKCknKTtcbiAgICBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuR2VvY29kZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgR2VvY29kZXIge1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEdlb2NvZGVyLmdlb2NvZGUoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEdlb2NvZGVyLmdlb2NvZGUoKScpO1xuICAgIHJldHVybiBHZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHBvc2l0aW9uIHRvIGFkZHJlc3MgYW5kIHZpY2UgdmVyc2FcbiAgICogQHBhcmFtIHtHZW9jb2RlclJlcXVlc3R9IHJlcXVlc3QgUmVxdWVzdCBvYmplY3Qgd2l0aCBlaXRoZXIgYW4gYWRkcmVzcyBvciBhIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0Pj59XG4gICAqL1xuICBzdGF0aWMgZ2VvY29kZShyZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QpOiBQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10gfCBCYXNlQXJyYXlDbGFzczxHZW9jb2RlclJlc3VsdFtdPj4ge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICBpZiAocmVxdWVzdC5hZGRyZXNzIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShyZXF1ZXN0LmFkZHJlc3MpIHx8XG4gICAgICByZXF1ZXN0LnBvc2l0aW9uIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShyZXF1ZXN0LnBvc2l0aW9uKSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gR2VvY29kZXIuZ2VvY29kZSh7XG4gICAgICAvLyAgIGFkZHJlc3M6IFtcbiAgICAgIC8vICAgIFwiS3lvdG8sIEphcGFuXCIsXG4gICAgICAvLyAgICBcIlRva3lvLCBKYXBhblwiXG4gICAgICAvLyAgIF1cbiAgICAgIC8vIH0pXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICByZXR1cm4gZ2V0UHJvbWlzZTxCYXNlQXJyYXlDbGFzczxHZW9jb2RlclJlc3VsdFtdPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCwgKG12Y0FycmF5OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAobXZjQXJyYXkpIHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IEJhc2VBcnJheUNsYXNzKG12Y0FycmF5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gR2VvY29kZXIuZ2VvY29kZSh7XG4gICAgICAvLyAgIGFkZHJlc3M6IFwiS3lvdG8sIEphcGFuXCJcbiAgICAgIC8vIH0pXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICByZXR1cm4gZ2V0UHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAocmVzdWx0czogR2VvY29kZXJSZXN1bHRbXSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5Mb2NhdGlvblNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGRldmljZSBsb2NhdGlvbiB3aXRob3V0IG1hcFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE15TG9jYXRpb24+fVxuICAgKi9cbiAgc3RhdGljIGdldE15TG9jYXRpb24ob3B0aW9ucz86IE15TG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxNeUxvY2F0aW9uPiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNeUxvY2F0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5nZXRNeUxvY2F0aW9uKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBoYXMgZ2VvbG9jYXRpb24gcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgc3RhdGljIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5oYXNQZXJtaXNzaW9uKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5lbmNvZGluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBFbmNvZGluZyB7XG5cbiAgLyoqXG4gICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYXRoIHN0cmluZyBpbnRvIGEgc2VxdWVuY2Ugb2YgTGF0TG5ncy5cbiAgICogQHBhcmFtIGVuY29kZWQge3N0cmluZ30gYW4gZW5jb2RlZCBwYXRoIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJlY2lzaW9uPyB7bnVtYmVyfSBkZWZhdWx0OiA1XG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogSUxhdExuZ1tdIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVuY29kaW5nLmRlY29kZVBhdGgoZW5jb2RlZCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgc2VxdWVuY2Ugb2YgTGF0TG5ncyBpbnRvIGFuIGVuY29kZWQgcGF0aCBzdHJpbmcuXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGVQYXRoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogc3RyaW5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVuY29kaW5nLmVuY29kZVBhdGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5kZWNvZGVQYXRoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGVjb2RlUGF0aChlbmNvZGVkOiBzdHJpbmcsIHByZWNpc2lvbj86IG51bWJlcik6IElMYXRMbmdbXSB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmRlY29kZVBhdGgoKScpO1xuICAgIHJldHVybiBFbmNvZGluZy5kZWNvZGVQYXRoKGVuY29kZWQsIHByZWNpc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5lbmNvZGVQYXRoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZW5jb2RlUGF0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IHN0cmluZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmVuY29kZVBhdGgoKScpO1xuICAgIHJldHVybiBFbmNvZGluZy5lbmNvZGVQYXRoKHBhdGgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZ2VvbWV0cnkucG9seScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBQb2x5IHtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgaW4gdGhlIHBvbHlnb24gcGF0aFxuICAgKiBAcGFyYW0gbG9jYXRpb24ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW119XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbjogSUxhdExuZywgcGF0aDogSUxhdExuZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5wb2x5LmNvbnRhaW5zTG9jYXRpb24obG9jYXRpb24sIHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIG9uIHRoZSBwb2x5bGluZSBwYXRoXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7SUxhdExuZ31cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXX1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0xvY2F0aW9uT25FZGdlKGxvY2F0aW9uOiBJTGF0TG5nLCBwYXRoOiBJTGF0TG5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuaXNMb2NhdGlvbk9uRWRnZShsb2NhdGlvbiwgcGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UsIGluIG1ldGVycywgYmV0d2VlbiB0d28gTGF0TG5ncy5cbiAgICogQHBhcmFtIGxvY2F0aW9uQSB7SUxhdExuZ31cbiAgICogQHBhcmFtIGxvY2F0aW9uQiB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIExhdExuZyByZXN1bHRpbmcgZnJvbSBtb3ZpbmcgYSBkaXN0YW5jZSBmcm9tIGFuIG9yaWdpbiBpbiB0aGUgc3BlY2lmaWVkIGhlYWRpbmcgKGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIG5vcnRoKVxuICAgKiBAcGFyYW0gZnJvbSB7SUxhdExuZ31cbiAgICogQHBhcmFtIGRpc3RhbmNlIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0KGZyb206IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChmcm9tLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYXRpb24gb2Ygb3JpZ2luIHdoZW4gcHJvdmlkZWQgd2l0aCBhIExhdExuZyBkZXN0aW5hdGlvbiwgbWV0ZXJzIHRyYXZlbGxlZCBhbmQgb3JpZ2luYWwgaGVhZGluZy4gSGVhZGluZ3MgYXJlIGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIE5vcnRoLiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbCB3aGVuIG5vIHNvbHV0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHRvIHtJTGF0TG5nfSBUaGUgZGVzdGluYXRpb24gTGF0TG5nLlxuICAgKiBAcGFyYW0gZGlzdGFuY2Uge251bWJlcn0gVGhlIGRpc3RhbmNlIHRyYXZlbGxlZCwgaW4gbWV0ZXJzLlxuICAgKiBAcGFyYW0gaGVhZGluZyB7bnVtYmVyfSBUaGUgaGVhZGluZyBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIG5vcnRoLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZU9mZnNldE9yaWdpbih0bzogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKHRvLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBnaXZlbiBwYXRoLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlTGVuZ3RoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFyZWEgb2YgYSBjbG9zZWQgcGF0aC4gVGhlIGNvbXB1dGVkIGFyZWEgdXNlcyB0aGUgc2FtZSB1bml0cyBhcyB0aGUgcmFkaXVzLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZUFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2lnbmVkIGFyZWEgb2YgYSBjbG9zZWQgcGF0aC4gVGhlIHNpZ25lZCBhcmVhIG1heSBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBhdGguXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlU2lnbmVkQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVhZGluZyBmcm9tIG9uZSBMYXRMbmcgdG8gYW5vdGhlciBMYXRMbmcuIEhlYWRpbmdzIGFyZSBleHByZXNzZWQgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBOb3J0aCB3aXRoaW4gdGhlIHJhbmdlICgtMTgwLDE4MCkuXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlSGVhZGluZyhmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIExhdExuZyB3aGljaCBsaWVzIHRoZSBnaXZlbiBmcmFjdGlvbiBvZiB0aGUgd2F5IGJldHdlZW4gdGhlIG9yaWdpbiBMYXRMbmcgYW5kIHRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfSAgICAgVGhlIExhdExuZyBmcm9tIHdoaWNoIHRvIHN0YXJ0LlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9ICAgICAgIFRoZSBMYXRMbmcgdG93YXJkIHdoaWNoIHRvIHRyYXZlbC5cbiAgICogQHBhcmFtIGZyYWN0aW9uIHtudW1iZXJ9ICBBIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSB0byB0cmF2ZWwgZnJvbSAwLjAgdG8gMS4wIC5cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGludGVycG9sYXRlKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nLCBmcmFjdGlvbjogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldCgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldChmcm9tLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXRPcmlnaW4odG86IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUxlbmd0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUFyZWEoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVTaWduZWRBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUhlYWRpbmcoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmludGVycG9sYXRlKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuaW50ZXJwb2xhdGUoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuaW50ZXJwb2xhdGUoZnJvbSwgdG8sIGZyYWN0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlZXRWaWV3UGFub3JhbWEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJlZXRWaWV3UGFub3JhbWEgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgb3B0aW9ucz86IFN0cmVldFZpZXdPcHRpb25zKSB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBDcmVhdGUgYSBwYW5vcmFtYVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5TdHJlZXRWaWV3LmdldFBhbm9yYW1hKGVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudC50YWdOYW1lICsgJyBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyO1xuICAgICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFt0YXJnZXRzWzBdLCBvcHRpb25zXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCsrIDwgMjApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDAgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoIDwgMTAwIHx8IHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodGFyZ2V0c1swXS50YWdOYW1lICsgJ1sjJyArIGVsZW1lbnQgKyAnXSBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdGhlIGVsZW1lbnQgWyMnICsgZWxlbWVudCArICddJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pLCBvcHRpb25zKSk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBvaW50IG9mIHZpZXcgZm9yIHRoZSBTdHJlZXQgVmlldyBwYW5vcmFtYS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3YocG92OiBTdHJlZXRWaWV3Q2FtZXJhUGFubyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgU3RyZWV0Vmlld1Bhbm9yYW1hIHRvIGEgZ2l2ZW4gbG9jYXRpb24uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0UG9zaXRpb24oY2FtZXJhUG9zaXRpb246IFN0cmluZyB8IFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gdXNlIHBhbiBhcm91bmQgb24gdGhlIHBhbm9yYW1hIHVzaW5nIGdlc3R1cmVzLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBhbm5pbmdHZXN0dXJlc0VuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHBhbm5pbmcgZ2VzdHVyZSBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIHpvb20gb24gdGhlIHBhbm9yYW1hIHVzaW5nIGdlc3R1cmVzLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpvb21HZXN0dXJlc0VuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHpvb21pbmcgZ2VzdHVyZSBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Wm9vbUdlc3R1cmVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIHNlZSBzdHJlZXQgbmFtZXMgb24gdGhlIHBhbm9yYW1hLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cmVldE5hbWVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgc3RyZWV0IG5hbWVzIGNvbnRyb2wgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cmVldE5hbWVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIG1vdmUgYmV0d2VlbiBwYW5vcmFtYXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TmF2aWdhdGlvbkVuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIG5hdmlnYXRpb24gY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TmF2aWdhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5hdmlnYXRpb24gbGlua3MgKFN0cmVldFZpZXdMb2NhdGlvbi5saW5rcylcbiAgICogQHJldHVybiB7U3RyZWV0Vmlld05hdmlnYXRpb25MaW5rW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMaW5rcygpOiBTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXSB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICogQHJldHVybiB7U3RyZWV0Vmlld0xvY2F0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TG9jYXRpb24oKTogU3RyZWV0Vmlld0xvY2F0aW9uIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwYW5vcmFtYSBpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5vSWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiAoU3RyZWV0Vmlld0xvY2F0aW9uLmxhdExuZylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgcGFub3JhbWEgY29tcGxldGVseVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIGVsRmluZFRpbWVvdXQgaXMgaGlkZGVuIHBhcmFtZXRlciwgbWFpbmx5IGZvciB0ZXN0LlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXAgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCB8IHN0cmluZywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMsIGVsRmluZFRpbWVvdXQgPSAyMDAwKSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0V2lkdGggPj0gMTAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChlbGVtZW50LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVsZW1lbnQudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGdldFByb21pc2U8YW55W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgbnVtQXR0ZW1wdHMgPSAwO1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uQmV0d2VlbkF0dGVtcHRzTXMgPSAxMDA7XG4gICAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSBNYXRoLmZsb29yKGVsRmluZFRpbWVvdXQgLyBkdXJhdGlvbkJldHdlZW5BdHRlbXB0c01zKTtcblxuICAgICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVNbaV0gKyBlbGVtZW50KSlcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGVsIHdoaWNoIGFyZSBhbHJlYWR5IG1hcCBsYXllcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudW1BdHRlbXB0cysrIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDAgJiYgdGFyZ2V0c1swXSAmJiAodGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA8IDEwMCB8fCB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA8IDEwMCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZHVyYXRpb25CZXR3ZWVuQXR0ZW1wdHNNcyk7XG4gICAgICAgIH0pLCBvcHRpb25zKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gbnVsbCAmJiBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChudWxsLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcCBkaXZcbiAgICogQHBhcmFtIGRvbU5vZGUge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBbb3B0aW9uc10gSWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgbWFwIGluIGFuIGh0bWwgZWxlbWVudCwgeW91IG5lZWQgdG8gc3BlY2lmeSBhbiBlbGVtZW50IG9yIGlkLiBJZiBvbWl0IHRoaXMgYXJndW1lbnQsIHRoZSBtYXAgaXMgZGV0YWNoZWQgZnJvbSB3ZWJ2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzZXREaXYoZG9tTm9kZT86IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXREaXYoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgKGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBpLCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGRvbU5vZGUpKTtcbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0c1swXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCdDYW4gbm90IGZpbmQgWyMnICsgZG9tTm9kZSArICddIGVsZW1lbnQnKTtcbiAgICAgIH0pKVxuICAgICAgLnRoZW4oKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9tTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgIWRvbU5vZGUub2Zmc2V0UGFyZW50ICYmXG4gICAgICAgICAgZG9tTm9kZS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZG9tTm9kZS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihkb21Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkb21Ob2RlLnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgSFRNTCBlbGVtZW50XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGl2KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIHR5cGUgaWRcbiAgICogQHBhcmFtIG1hcFR5cGVJZCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TWFwVHlwZUlkKG1hcFR5cGVJZDogTWFwVHlwZSB8IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmEoY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIGluIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmFab29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBvdXQgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEuXG4gICAqIEByZXR1cm4ge0NhbWVyYVBvc2l0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRhcmdldCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGFyZ2V0KCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHpvb20gbGV2ZWxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhWm9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhQmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRpbHQgKHZpZXcgYW5nbGUpXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVRpbHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjZW50ZXIgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3XG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmcgfCBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFUYXJnZXQobGF0TG5nOiBJTGF0TG5nIHwgSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHpvb20gbGV2ZWwgb2YgdGhlIGNhbWVyYVxuICAgKiBAcGFyYW0gem9vbUxldmVsIHtudW1iZXJ9IFpvb20gbGV2ZWxcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVpvb20oem9vbUxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNhbWVyYSB2aWV3IGFuZ2xlXG4gICAqIEBwYXJhbSB0aWx0QW5nbGUge251bWJlcn0gVGlsdCBhbmdsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhVGlsdCh0aWx0QW5nbGU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IGNhbWVyYSBiZWFyaW5nXG4gICAqIEBwYXJhbSBiZWFyaW5nIHthbnl9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFCZWFyaW5nKGJlYXJpbmc6IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIGJ5IHRoZSBnaXZlbiBkaXN0YW5jZSBpbiBwaXhlbHNcbiAgICogQHBhcmFtIHgge251bWJlcn1cbiAgICogQHBhcmFtIHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHZpc2libGUgcmVnaW9uIChzb3V0aFdlc3QgYW5kIG5vcnRoRWFzdClcbiAgICogQHJldHVybiB7VmlzaWJsZVJlZ2lvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGVSZWdpb24oKTogVmlzaWJsZVJlZ2lvbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxNeUxvY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRNeUxvY2F0aW9uKG9wdGlvbnM/OiBNeUxvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8TXlMb2NhdGlvbj4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gaWdub3JlIGFsbCBjbGlja3Mgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gaXNDbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoaXNDbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgbWFwIGNvbXBsZXRlbHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvdmVybGF5cywgc3VjaCBhcyBtYXJrZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5nZXQoJ19vdmVybGF5cycpKS5mb3JFYWNoKChvdmVybGF5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5jbGVhcigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHVuaXQgZnJvbSBMYXRMbmcgdG8gdGhlIHBpeGVscyBmcm9tIHRoZSBsZWZ0L3RvcCBvZiB0aGUgbWFwIGRpdlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZnJvbUxhdExuZ1RvUG9pbnQobGF0TG5nOiBJTGF0TG5nKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1bml0IGZyb20gdGhlIHBpeGVscyBmcm9tIHRoZSBsZWZ0L3RvcCB0byB0aGUgTGF0TG5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGF0TG5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBmcm9tUG9pbnRUb0xhdExuZyhwb2ludDogbnVtYmVyW10pOiBQcm9taXNlPExhdExuZz4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgTXlMb2NhdGlvbiBjb250cm9sIChibHVlIGRvdClcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNeUxvY2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgTXlMb2NhdGlvbiBidXR0b25cbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGJ1aWxkaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRGb2N1c2VkQnVpbGRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgaW5kb29yIG1hcFxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEluZG9vckVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIHRyYWZmaWMgbGF5ZXJcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUcmFmZmljRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgY29tcGFzcyBidXR0b25cbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDb21wYXNzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJlZmVyZW5jZSBmb3Igd2hldGhlciBhbGwgZ2VzdHVyZXMgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBbGxHZXN0dXJlc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmlsaXR5IG9mIHRoZSBtYXBcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCBwYWRkaW5nIChzYW1lIGFzIENTUyBwYWRkaW5nIHJ1bGUpXG4gICAqIEBwYXJhbSB0b3Age251bWJlcn1cbiAgICogQHBhcmFtIHJpZ2h0IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBsZWZ0IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBib3R0b20ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBhZGRpbmcodG9wOiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBTZXQgb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBHb29nbGVNYXBPcHRpb25zKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hcmtlcj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlcihvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXIgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNYXJrZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlcihvcHRpb25zLCAobWFya2VyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1hcmtlcikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheTogTWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCBtYXJrZXIpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBtYXJrZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQFJldHVybnMge01hcmtlcn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyU3luYyhvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogTWFya2VyIHtcbiAgICBjb25zdCBtYXJrZXI6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlci5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywgbWFya2VyKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgbWFya2VyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGNsdXN0ZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlckNsdXN0ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWFya2VyQ2x1c3Rlcj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlckNsdXN0ZXIob3B0aW9uczogTWFya2VyQ2x1c3Rlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlckNsdXN0ZXIgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNYXJrZXJDbHVzdGVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnMsIChtYXJrZXJDbHVzdGVyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1hcmtlckNsdXN0ZXIpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQgPSBtYXJrZXJDbHVzdGVyLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBNYXJrZXJDbHVzdGVyKHRoaXMsIG1hcmtlckNsdXN0ZXIpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyLm9uZSgncmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hcmtlckNsdXN0ZXIuc2V0KCdfb3ZlcmxheXMnLCBuZXcgQmFzZUFycmF5Q2xhc3MoKSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBjbHVzdGVyIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJDbHVzdGVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAUmV0dXJucyB7TWFya2VyQ2x1c3Rlcn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyQ2x1c3RlclN5bmMob3B0aW9uczogTWFya2VyQ2x1c3Rlck9wdGlvbnMpOiBNYXJrZXJDbHVzdGVyIHtcbiAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyQ2x1c3Rlci5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3Rlcih0aGlzLCBtYXJrZXJDbHVzdGVyKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgbWFya2VyQ2x1c3Rlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFya2VyQ2x1c3Rlci5zZXQoJ19vdmVybGF5cycsIG5ldyBCYXNlQXJyYXlDbGFzcygpKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2lyY2xlXG4gICAqIEBwYXJhbSBvcHRpb25zIHtDaXJjbGVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q2lyY2xlPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkQ2lyY2xlKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPENpcmNsZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkQ2lyY2xlKG9wdGlvbnMsIChjaXJjbGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoY2lyY2xlKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBjaXJjbGUuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IENpcmNsZSh0aGlzLCBjaXJjbGUpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBjaXJjbGUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaXJjbGUgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge0NpcmNsZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7Q2lyY2xlfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRDaXJjbGVTeW5jKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBDaXJjbGUge1xuICAgIGNvbnN0IGNpcmNsZTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkQ2lyY2xlKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gY2lyY2xlLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBDaXJjbGUodGhpcywgY2lyY2xlKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgY2lyY2xlLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIHBvbHlnb25cbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlnb25PcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UG9seWdvbj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlnb24ob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQcm9taXNlPFBvbHlnb24gfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxQb2x5Z29uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5Z29uKG9wdGlvbnMsIChwb2x5Z29uOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBvbHlnb24pIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlnb24uZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlnb24odGhpcywgcG9seWdvbik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHBvbHlnb24ub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5Z29uIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5Z29uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQb2x5Z29ufVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5Z29uU3luYyhvcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFBvbHlnb24ge1xuICAgIGNvbnN0IHBvbHlnb246IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlnb24ob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5Z29uLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5Z29uKHRoaXMsIHBvbHlnb24pO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBwb2x5Z29uLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWxpbmVcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlsaW5lT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFBvbHlsaW5lPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWxpbmUob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTxQb2x5bGluZSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFBvbHlsaW5lPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5bGluZShvcHRpb25zLCAocG9seWxpbmU6IGFueSkgPT4ge1xuICAgICAgICBpZiAocG9seWxpbmUpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlsaW5lLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5bGluZSh0aGlzLCBwb2x5bGluZSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHBvbHlsaW5lLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWxpbmUgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlsaW5lT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQb2x5bGluZX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWxpbmVTeW5jKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFBvbHlsaW5lIHtcbiAgICBjb25zdCBwb2x5bGluZTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWxpbmUob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5bGluZS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWxpbmUodGhpcywgcG9seWxpbmUpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBwb2x5bGluZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VGlsZU92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGlsZU92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRUaWxlT3ZlcmxheShvcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPFRpbGVPdmVybGF5IHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8VGlsZU92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRpbGVPdmVybGF5KG9wdGlvbnMsICh0aWxlT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmICh0aWxlT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gdGlsZU92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRpbGVPdmVybGF5KHRoaXMsIHRpbGVPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgdGlsZU92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0aWxlIG92ZXJsYXkgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1RpbGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtUaWxlT3ZlcmxheX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkVGlsZU92ZXJsYXlTeW5jKG9wdGlvbnM6IFRpbGVPdmVybGF5T3B0aW9ucyk6IFRpbGVPdmVybGF5IHtcbiAgICBjb25zdCB0aWxlT3ZlcmxheTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkVGlsZU92ZXJsYXkob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSB0aWxlT3ZlcmxheS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGlsZU92ZXJsYXkodGhpcywgdGlsZU92ZXJsYXkpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICB0aWxlT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtHcm91bmRPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VuZE92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRHcm91bmRPdmVybGF5KG9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxHcm91bmRPdmVybGF5IHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8R3JvdW5kT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zLCAoZ3JvdW5kT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmIChncm91bmRPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBncm91bmRPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBHcm91bmRPdmVybGF5KHRoaXMsIGdyb3VuZE92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBncm91bmRPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdW5kIG92ZXJsYXkgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge0dyb3VuZE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0dyb3VuZE92ZXJsYXl9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEdyb3VuZE92ZXJsYXlTeW5jKG9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zKTogR3JvdW5kT3ZlcmxheSB7XG4gICAgY29uc3QgZ3JvdW5kT3ZlcmxheTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGdyb3VuZE92ZXJsYXkuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IEdyb3VuZE92ZXJsYXkodGhpcywgZ3JvdW5kT3ZlcmxheSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGdyb3VuZE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBrbWwgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7S21sT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxLbWxPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkS21sT3ZlcmxheShvcHRpb25zOiBLbWxPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8S21sT3ZlcmxheT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEttbE92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEttbE92ZXJsYXkob3B0aW9ucywgKGttbE92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoa21sT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0ga21sT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgS21sT3ZlcmxheSh0aGlzLCBrbWxPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAga21sT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFzZTY0IGVuY29kZWQgc2NyZWVuIGNhcHR1cmUgb2YgdGhlIG1hcC5cbiAgICogQHBhcmFtIG9wdGlvbnMge1RvRGF0YVVybE9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICB0b0RhdGFVUkwob3B0aW9ucz86IFRvRGF0YVVybE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4geyByZXR1cm47IH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VuZE92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBib3VuZHMgb2YgdGhlIEdyb3VuZE92ZXJsYXlcbiAgICogQHBhcmFtIGJvdW5kcyB7IElMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEJvdW5kcyhib3VuZHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJlYXJpbmcgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBiZWFyaW5nIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCZWFyaW5nKGJlYXJpbmc6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYmVhcmluZyB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbWFnZSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGltYWdlVXJsIHtzdHJpbmd9IFVSTCBvZiBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgb3BhY2l0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXkgZnJvbSAwLjAgdG8gMS4wXG4gICAqIEBwYXJhbSBvcGFjaXR5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3BhY2l0eVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdyb3VuZCBvdmVybGF5IGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBncm91bmQgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBncm91bmQgb3ZlcmxheSB6SW5kZXggb3JkZXJcbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZ3JvdW5kIG92ZXJsYXkgekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuSHRtbEluZm9XaW5kb3cnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIdG1sSW5mb1dpbmRvdyBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkh0bWxJbmZvV2luZG93KSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kQ29sb3JcbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgeW91ciBIVE1MIGNvbnRlbnRzLlxuICAgKiBAcGFyYW0gY29udGVudCB7YW55fSBTdHJpbmcgY29udGFpbmluZyB0ZXh0IG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0gY3NzT3B0aW9ucz8ge2FueX0gQ1NTIHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5lciBlbGVtZW50IG9mIEhUTUxJbmZvV2luZG93XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0Q29udGVudChjb250ZW50OiBzdHJpbmcgfCBFbGVtZW50LCBjc3NPcHRpb25zPzogYW55KTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgaHRtbEluZm9XaW5kb3dcbiAgICogQHBhcmFtIG1hcmtlciB7TWFya2VyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG9wZW4obWFya2VyOiBhbnkpOiBhbnkge1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBodG1sSW5mb1dpbmRvd1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsb3NlKCk6IHZvaWQge1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hcmtlciBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvc2l0aW9uKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQb3NpdGlvbigpOiBJTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgbm9ybWFsIGluZm9XaW5kb3cgb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3dJbmZvV2luZG93KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIG5vcm1hbCBpbmZvV2luZG93IG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlSW5mb1dpbmRvdygpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBhbmltYXRpb24gZWl0aGVyIGBEUk9QYCBvciBgQk9VTkNFYFxuICAgKiBAcGFyYW0gYW5pbWF0aW9uIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3UgKipkbyBub3Qgd2FudCoqIHRvIG1vdmUgdGhlIG1hcCB3aGVuIHlvdSBjbGljayBvbiB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gZGlzYWJsZUF1dG9QYW4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREaXNhYmxlQXV0b1BhbihkaXNhYmxlQXV0b1BhbjogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSB2aXNpYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGl0bGUgb2YgdGhlIG5vcm1hbCBpbmZvV2luZG93LlxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0aXRsZSBzdHJpbmdzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHNuaXBwZXQgb2YgdGhlIG5vcm1hbCBpbmZvV2luZG93LlxuICAgKiBAcGFyYW0gc25pcHBldCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U25pcHBldChzbmlwcGV0OiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzbmlwcGV0IHN0cmluZ3MuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFNuaXBwZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFya2VyIG9wYWNpdHkgZnJvbSAwLjAgdG8gMS4wLlxuICAgKiBAcGFyYW0gYWxwaGEge251bWJlcn0gT3BhY2l0eVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIG9wYWNpdHkuXG4gICAqIEByZXR1cm4ge251bWJlcn0gT3BhY2l0eVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbmZvIHdpbmRvdyBhbmNob3IuIFRoaXMgZGVmYXVsdHMgdG8gNTAlIGZyb20gdGhlIGxlZnQgb2YgdGhlIGltYWdlIGFuZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHgge251bWJlcn0gRGlzdGFuY2UgZnJvbSBsZWZ0IG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gRGlzdGFuY2UgZnJvbSB0b3Agb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SWNvbkFuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGluZm8gd2luZG93IGFuY2hvci4gVGhpcyBkZWZhdWx0cyB0byA1MCUgZnJvbSB0aGUgbGVmdCBvZiB0aGUgaW1hZ2UgYW5kIGF0IHRoZSB0b3Agb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0geCB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIGxlZnQgb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIHRvcCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbmZvV2luZG93QW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBpbmZvV2luZG93IGlzIHNob3duIG9uIHRoZSBtYXJrZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzSW5mb1dpbmRvd1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdoZXIgekluZGV4IHZhbHVlIG92ZXJsYXlzIHdpbGwgYmUgZHJhd24gb24gdG9wIG9mIGxvd2VyIHpJbmRleCB2YWx1ZSB0aWxlIGxheWVycyBhbmQgb3ZlcmxheXMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IHotaW5kZXhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB6LWluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3UgYWxsb3cgYWxsIHVzZXJzIHRvIGRyYWcgdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIGRyYWdnYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERyYWdnYWJsZShkcmFnZ2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBkcmFnIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc0RyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gYmUgZmxhdCBtYXJrZXIuXG4gICAqIEBwYXJhbSBmbGF0IHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmxhdChmbGF0OiBib29sZWFuKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgaWNvbiB1cmwgYW5kL29yIHNpemVcbiAgICogQHBhcmFtIGljb25cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEljb24oaWNvbjogTWFya2VySWNvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hcmtlciByb3RhdGlvbiBhbmdsZS5cbiAgICogQHBhcmFtIHJvdGF0aW9uIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSb3RhdGlvbihyb3RhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIHJvdGF0aW9uIGFuZ2xlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSb3RhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFya2VyQ2x1c3RlciBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtYXJrZXIgbG9jYXRpb25cbiAgICogQHBhcmFtIG1hcmtlciB7TWFya2VyT3B0aW9uc30gb25lIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBza2lwUmVkcmF3PyB7Ym9vbGVhbn0gbWFya2VyIGNsdXN0ZXIgZG9lcyBub3QgcmVkcmF3IHRoZSBtYXJrZXIgY2x1c3RlciBpZiB0cnVlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkTWFya2VyKG1hcmtlcjogTWFya2VyT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtYXJrZXIgbG9jYXRpb25zXG4gICAqIEBwYXJhbSBtYXJrZXJzIHtNYXJrZXJPcHRpb25zW119IG11bHRpcGxlIGxvY2F0aW9uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlck9wdGlvbnNbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFya2VyIGNsdXN0ZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0KCdfb3ZlcmxheXMnLCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBwb2ludHMuXG4gICAqIEBwYXJhbSBwb2ludHMge0lMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvaW50cyhwb2ludHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzLlxuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgcG9pbnRzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICovXG4gIGdldFBvaW50cygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPiB7XG4gICAgcmV0dXJuIG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPih0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBob2xlcy5cbiAgICogQHBhcmFtIGhvbGVzIHtJTGF0TG5nW11bXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEhvbGVzKGhvbGVzOiBJTGF0TG5nW11bXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzLlxuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgaG9sZXMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmdbXT59XG4gICAqL1xuICBnZXRIb2xlcygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+IHtcbiAgICBjb25zdCBob2xlczogSUxhdExuZ1tdW10gPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKTtcbiAgICBjb25zdCByZXN1bHRzOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+ID0gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4oKTtcbiAgICBob2xlcy5mb3JFYWNoKChob2xlOiBJTGF0TG5nW10pID0+IHtcbiAgICAgIHJlc3VsdHMucHVzaChob2xlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcilcbiAgICogQHBhcmFtIGZpbGxDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmlsbENvbG9yKGZpbGxDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIHBvbHlnb25cbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgY2xpY2thYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgcG9seWdvblxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwb2x5Z29uLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gc3Ryb2tlIHdpZHRoXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcG9seWdvbiBzdHJva2Ugd2lkdGhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC5cbiAgICogQHBhcmFtIGdlb2Rlc2ljIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0R2VvZGVzaWMoZ2VvZGVzaWM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgZ2VvZGVzaWMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRHZW9kZXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnRzIHtJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb2ludHMocG9pbnRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzc1xuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgcG9pbnRzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICovXG4gIGdldFBvaW50cygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPiB7XG4gICAgcmV0dXJuIG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPih0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWxpbmUgYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC5cbiAgICogQHBhcmFtIGdlb0Rlc2ljIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0R2VvRGVzaWMoZ2VvRGVzaWM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIGdlb2Rlc2ljXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRHZW9kZXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBwb2x5bGluZVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBwb2x5bGluZVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIGNvbG9yXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWxpbmUgY29sb3JcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgc3Ryb2tlIHdpZHRoXG4gICAqIEBwYXJhbSBzdHJva2VXaWR0aCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWxpbmUgekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHBvbHlsaW5lXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaWxlT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSB0aWxlcyBzaG91bGQgZmFkZSBpbi5cbiAgICogQHBhcmFtIGZhZGVJbiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZhZGVJbihmYWRlSW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGUgdGlsZXMgc2hvdWxkIGZhZGUgaW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZhZGVJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB6SW5kZXggb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gekluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB6SW5kZXggb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBvcGFjaXR5IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wYWNpdHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb3BhY2l0eSBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGhpZGVcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRpbGUgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGlsZSBzaXplXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUaWxlU2l6ZSgpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRpbGUgb3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgS21sT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnY2FtZXJhJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5fb2JqZWN0SW5zdGFuY2UuY2FtZXJhLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ2ttbERhdGEnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9vYmplY3RJbnN0YW5jZS5rbWxEYXRhLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aWV3cG9ydCB0byBjb250YWlucyBhbGwgb3ZlcmxheXNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERlZmF1bHRWaWV3cG9ydCgpOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nIHwgSUxhdExuZ1tdPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcCB7IHJldHVybiB0aGlzLl9tYXA7IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBrbWwgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBrbWwgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBLbWxPdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIEttbE92ZXJsYXkgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEttbE92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Responder\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"map_canvas\" style=\"height: 100%;\"></div>\r\n    <div id=\"extras\" *ngIf=\"currentAlert\">\r\n      <p *ngIf=\"currentAlert\">{{ currentAlert.time | dateAgo }}</p>\r\n      <ion-button *ngIf=\"currentAlert\" [href]=\"gmapsLink\">\r\n        Directions\r\n      </ion-button>\r\n      <ion-button color=\"warning\" (click)=\"ResolveButton()\">\r\n        All Secure\r\n      </ion-button>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/date-ago.pipe */ "./src/pipes/date-ago.pipe.ts");
/* harmony import */ var _pipes_TimeAgo_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/TimeAgo.pipe */ "./src/pipes/TimeAgo.pipe.ts");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["DateAgoPipe"], _pipes_TimeAgo_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n#extras {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  bottom: 0;\n  left: 0;\n  padding: 1em 1em 2em 1em;\n}\n\n#extras > * {\n  margins: 1em 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXFl1YW4gQ2hlblxcTGlmZWxpbmVcXGZyb250ZW5kL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUVDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0csd0JBQUE7QUNBSjs7QURHQTtFQUNDLGdCQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2V4dHJhc1xyXG57XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMWVtIDFlbSAyZW0gMWVtO1xyXG59XHJcblxyXG4jZXh0cmFzID4gKiB7XHJcblx0bWFyZ2luczogMWVtIDBlbTtcclxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2V4dHJhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMWVtIDFlbSAyZW0gMWVtO1xufVxuXG4jZXh0cmFzID4gKiB7XG4gIG1hcmdpbnM6IDFlbSAwZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/socket.service */ "./src/services/socket.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");






let Tab1Page = class Tab1Page {
    constructor(socket, platform, geolocation) {
        this.socket = socket;
        this.platform = platform;
        this.geolocation = geolocation;
        this.emsMarkers = [
            {
                "icon": 'blue',
                "title": "Middlesex London EMS Headquarters Station #1",
                "name": "Middlesex London EMS Headquarters Station #1",
                "position": {
                    "lng": -81.241056968403,
                    "lat": 42.983691382743
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #2",
                "name": "EMS Station #2",
                "position": {
                    "lng": -81.23191612369,
                    "lat": 42.923020719595
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #4",
                "name": "EMS Station #4",
                "position": {
                    "lng": -81.245347432145,
                    "lat": 43.040678946609
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #3",
                "name": "EMS Station #3",
                "position": {
                    "lng": -81.2957040588,
                    "lat": 42.983394641625
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #5",
                "name": "EMS Station #5",
                "position": {
                    "lng": -81.172191725155,
                    "lat": 43.006659071277
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #6",
                "name": "EMS Station #6",
                "position": {
                    "lng": -81.316152502338,
                    "lat": 42.933933855438
                }
            },
            {
                "icon": 'blue',
                "title": "EMS Station #7",
                "name": "EMS Station #7",
                "position": {
                    "lng": -81.339872421616,
                    "lat": 43.015236242195
                }
            }
        ];
        this.hospitalMarkers = [
            {
                "icon": 'blue',
                "title": "London Health Sciences Centre - Victoria Hospital",
                "name": "London Health Sciences Centre - Victoria Hospital",
                "position": {
                    "lng": -81.226346319931,
                    "lat": 42.960201507895
                }
            },
            {
                "icon": 'blue',
                "title": "London Health Sciences Centre - Children's Hospital",
                "name": "London Health Sciences Centre - Children's Hospital",
                "position": {
                    "lng": -81.225691475973,
                    "lat": 42.961276600093
                }
            },
            {
                "icon": 'blue',
                "title": "London Health Sciences Centre - University Hospital",
                "name": "London Health Sciences Centre - University Hospital",
                "position": {
                    "lng": -81.274748988433,
                    "lat": 43.012382331917
                }
            },
            {
                "icon": 'blue',
                "title": "St Joseph's Health Care Hospital",
                "name": "St Joseph's Health Care Hospital",
                "position": {
                    "lng": -81.253949098806,
                    "lat": 43.000399374159
                }
            },
            {
                "icon": 'blue',
                "title": "Parkwood Institute",
                "name": "Parkwood Institute",
                "position": {
                    "lng": -81.224883412043,
                    "lat": 42.955810655303
                }
            },
            {
                "icon": 'blue',
                "title": "London Psychiatric Hospital",
                "name": "London Psychiatric Hospital",
                "position": {
                    "lng": -81.205516962187,
                    "lat": 43.003856043295
                }
            }
        ];
        this.location = {};
        this.currentAlert = null;
        this.distressIcons = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    ionViewDidEnter() {
        this.socket.updateDistressSignals();
    }
    addLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.emsMarkers.length; i++) {
                yield this.map.addMarker({
                    title: this.emsMarkers[i]['title'],
                    animation: 'DROP',
                    icon: { 'url': './assets/small.png' },
                    position: this.emsMarkers[i].position
                });
                console.log("hi");
            }
            for (let i = 0; i < this.hospitalMarkers.length; i++) {
                yield this.map.addMarker({
                    title: this.hospitalMarkers[i]['title'],
                    animation: 'DROP',
                    icon: { 'url': './assets/small.png' },
                    position: this.hospitalMarkers[i].position
                });
                console.log("hi2");
            }
        });
    }
    loadMap() {
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
            this.location = { 'lat': resp.coords.latitude, 'lng': resp.coords.longitude };
            console.log(this.location);
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8',
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8'
            });
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create('map_canvas', {
                camera: {
                    target: {
                        lat: this.location['lat'],
                        lng: this.location['lng']
                    },
                    zoom: 20,
                    tilt: 30
                }
            });
            this.socket.updateDistressSignals()
                .subscribe(signals => {
                console.log("New Update");
                console.log(signals);
                this.map.clear();
                //populate data from london
                this.addLocations().then(() => {
                    if (signals.length > 0) {
                        // Use only latest alert
                        this.currentAlert = signals[signals.length - 1];
                        console.log(this.currentAlert);
                        this.gmapsLink = `https://www.google.com/maps/dir/?api=1&destination=${this.currentAlert.coords.lat},${this.currentAlert.coords.lng}`;
                        // Add marker (Move camera to it)
                        this.map.addMarker({
                            title: 'Distress Alert',
                            icon: 'red',
                            animation: 'DROP',
                            position: {
                                lat: this.currentAlert.coords.lat,
                                lng: this.currentAlert.coords.lng
                            }
                        }).then(() => {
                            this.map.animateCamera({
                                target: { lat: this.currentAlert.coords.lat, lng: this.currentAlert.coords.lng },
                                zoom: 20,
                                tilt: 60,
                                bearing: 140,
                                duration: 5000
                            }).then(() => {
                            });
                        });
                    }
                    else {
                        this.currentAlert = null;
                        this.gmapsLink = null;
                    }
                });
            });
            this.socket.emit("UpdateDistressSignals", null);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    ResolveButton() {
        this.socket.emit("DeleteDistressSignals", null);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]])
], Tab1Page);



/***/ }),

/***/ "./src/pipes/TimeAgo.pipe.ts":
/*!***********************************!*\
  !*** ./src/pipes/TimeAgo.pipe.ts ***!
  \***********************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeAgoPipe = class TimeAgoPipe {
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    transform(value) {
        this.removeTimer();
        let d = new Date(value);
        let now = new Date();
        let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        let minutes = Math.round(Math.abs(seconds / 60));
        let hours = Math.round(Math.abs(minutes / 60));
        let days = Math.round(Math.abs(hours / 24));
        let months = Math.round(Math.abs(days / 30.416));
        let years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else { // (days > 545)
            return years + ' years ago';
        }
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    getSecondsUntilUpdate(seconds) {
        let min = 60;
        let hr = min * 60;
        let day = hr * 24;
        if (seconds < min) { // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) { // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) { // less then a day, update every 5 mins
            return 300;
        }
        else { // update every hour
            return 3600;
        }
    }
};
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
TimeAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timeAgo',
        pure: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TimeAgoPipe);



/***/ }),

/***/ "./src/pipes/date-ago.pipe.ts":
/*!************************************!*\
  !*** ./src/pipes/date-ago.pipe.ts ***!
  \************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateAgo',
        pure: true
    })
], DateAgoPipe);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map