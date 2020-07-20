function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forum-ide-forum-ide-module~pages-ide-ide-module"], {
  /***/
  "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js ***!
    \***********************************************************************************/

  /*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */

  /***/
  function node_modulesTinymceTinymceAngularFesm2015TinymceTinymceAngularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
      return EditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function () {
      return TINYMCE_SCRIPT_SRC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return Events;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */


    var getTinymce = function getTinymce() {
      var w = typeof window !== 'undefined' ? window : undefined;
      return w && w.tinymce ? w.tinymce : null;
    };

    var ɵ0 = getTinymce;

    var Events = function Events() {
      _classCallCheck(this, Events);

      this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforePaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onCut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDblclick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDragDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDragGesture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onFocusIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onFocusOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onKeyPress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onKeyUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onActivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforeAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforeExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforeGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforeRenderUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onBeforeSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onClearUndos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDeactivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onDirty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onLoadContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onNodeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onPostProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onPostRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onPreInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onPreProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onProgressState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onRedo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onReset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onSaveContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onSetAttrib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onObjectResizeStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onObjectResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onObjectSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Events.prototype, "onVisualAid", void 0);
    var validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    var bindHandlers = function bindHandlers(ctx, editor) {
      validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];
        editor.on(eventName.substring(2), function (event) {
          return ctx.ngZone.run(function () {
            return eventEmitter.emit({
              event: event,
              editor: editor
            });
          });
        });
      });
    };

    var ɵ0$1 = bindHandlers;
    var unique = 0;

    var uuid = function uuid(prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1000000000);
      unique++;
      return prefix + '_' + random + unique + String(time);
    };

    var ɵ1 = uuid;

    var isTextarea = function isTextarea(element) {
      return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
    };

    var ɵ2 = isTextarea;

    var normalizePluginArray = function normalizePluginArray(plugins) {
      if (typeof plugins === 'undefined' || plugins === '') {
        return [];
      }

      return Array.isArray(plugins) ? plugins : plugins.split(' ');
    };

    var ɵ3 = normalizePluginArray;

    var mergePlugins = function mergePlugins(initPlugins, inputPlugins) {
      return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
    };

    var ɵ4 = mergePlugins; // tslint:disable-next-line:no-empty

    var noop = function noop() {};

    var ɵ5 = noop;

    var isNullOrUndefined = function isNullOrUndefined(value) {
      return value === null || value === undefined;
    };

    var ɵ6 = isNullOrUndefined;
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    var createState = function createState() {
      return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
      };
    };

    var ɵ0$2 = createState;

    var CreateScriptLoader = function CreateScriptLoader() {
      var state = createState();

      var injectScriptTag = function injectScriptTag(scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;

        var handler = function handler() {
          scriptTag.removeEventListener('load', handler);
          callback();
        };

        scriptTag.addEventListener('load', handler);

        if (doc.head) {
          doc.head.appendChild(scriptTag);
        }
      };

      var load = function load(doc, url, callback) {
        if (state.scriptLoaded) {
          callback();
        } else {
          state.listeners.push(callback);

          if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
              state.listeners.forEach(function (fn) {
                return fn();
              });
              state.scriptLoaded = true;
            });
          }
        }
      }; // Only to be used by tests.


      var reinitialize = function reinitialize() {
        state = createState();
      };

      return {
        load: load,
        reinitialize: reinitialize
      };
    };

    var ɵ1$1 = CreateScriptLoader;
    var ScriptLoader = CreateScriptLoader();
    var TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
    var EDITOR_COMPONENT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EditorComponent;
      }),
      multi: true
    };

    var EditorComponent = /*#__PURE__*/function (_Events) {
      _inherits(EditorComponent, _Events);

      var _super = _createSuper(EditorComponent);

      function EditorComponent(elementRef, ngZone, platformId, tinymceScriptSrc) {
        var _this;

        _classCallCheck(this, EditorComponent);

        _this = _super.call(this);
        _this.platformId = platformId;
        _this.tinymceScriptSrc = tinymceScriptSrc;
        _this.cloudChannel = '5';
        _this.apiKey = 'no-api-key';
        _this.id = '';
        _this.modelEvents = 'change keyup undo redo';
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this._elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(EditorComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          if (this._editor && this._editor.initialized) {
            this._editor.setContent(isNullOrUndefined(value) ? '' : value);
          } else {
            this.initialValue = value === null ? undefined : value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
          } else if (isDisabled) {
            this.init = Object.assign({}, this.init, {
              readonly: true
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline = typeof this.inline !== 'undefined' ? typeof this.inline === 'boolean' ? this.inline : true : this.init && this.init.inline;
            this.createElement();

            if (getTinymce() !== null) {
              this.initialise();
            } else if (this._element && this._element.ownerDocument) {
              ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
          }
        }
      }, {
        key: "createElement",
        value: function createElement() {
          var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
          this._element = document.createElement(this.inline ? tagName : 'textarea');

          if (this._element) {
            this._element.id = this.id;

            if (isTextarea(this._element)) {
              this._element.style.visibility = 'hidden';
            }

            this._elementRef.nativeElement.appendChild(this._element);
          }
        }
      }, {
        key: "initialise",
        value: function initialise() {
          var _this2 = this;

          var finalInit = Object.assign({}, this.init, {
            target: this._element,
            inline: this.inline,
            readonly: this.disabled,
            plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
            toolbar: this.toolbar || this.init && this.init.toolbar,
            setup: function setup(editor) {
              _this2._editor = editor;
              editor.on('init', function (e) {
                _this2.initEditor(editor);
              });
              bindHandlers(_this2, editor);

              if (_this2.init && typeof _this2.init.setup === 'function') {
                _this2.init.setup(editor);
              }
            }
          });

          if (isTextarea(this._element)) {
            this._element.style.visibility = '';
          }

          this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
          });
        }
      }, {
        key: "getScriptSrc",
        value: function getScriptSrc() {
          return isNullOrUndefined(this.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(this.apiKey, "/tinymce/").concat(this.cloudChannel, "/tinymce.min.js") : this.tinymceScriptSrc;
        }
      }, {
        key: "initEditor",
        value: function initEditor(editor) {
          var _this3 = this;

          editor.on('blur', function () {
            return _this3.ngZone.run(function () {
              return _this3.onTouchedCallback();
            });
          });
          editor.on(this.modelEvents, function () {
            _this3.ngZone.run(function () {
              return _this3.onChangeCallback(editor.getContent({
                format: _this3.outputFormat
              }));
            });
          });

          if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () {
              editor.setContent(_this3.initialValue);

              _this3.onChangeCallback(editor.getContent({
                format: _this3.outputFormat
              }));
            });
          }
        }
      }, {
        key: "disabled",
        set: function set(val) {
          this._disabled = val;

          if (this._editor && this._editor.initialized) {
            this._editor.setMode(val ? 'readonly' : 'design');
          }
        },
        get: function get() {
          return this._disabled;
        }
      }, {
        key: "editor",
        get: function get() {
          return this._editor;
        }
      }]);

      return EditorComponent;
    }(Events);

    EditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [TINYMCE_SCRIPT_SRC]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "cloudChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "apiKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "init", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "initialValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "outputFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "plugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "modelEvents", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'editor',
      template: '<ng-template></ng-template>',
      providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
      styles: [':host { display: block; }']
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TINYMCE_SCRIPT_SRC))], EditorComponent);

    var EditorModule = function EditorModule() {
      _classCallCheck(this, EditorModule);
    };

    EditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [EditorComponent],
      exports: [EditorComponent]
    })], EditorModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tinymce-tinymce-angular.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~pages-forum-ide-forum-ide-module~pages-ide-ide-module-es5.js.map