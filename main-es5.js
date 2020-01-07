function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list class=\"header\" cols=\"14\" rowHeight=\"5vh\" color=\"white\">\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n    <button mat-button class=\"piskel-logo\">\n      <img src=\"../assets/images/logo_transparent_small_compact.png\" />\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"8\" [rowspan]=\"1\">\n    <input  [(ngModel)] = \"stateApp.state.nameFile\" value=\"{{stateApp.state.nameFile}}\"/>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n    <button mat-button class=\"piskel-logo\">Create</button>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n    <button mat-button class=\"piskel-logo\">In</button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<div class=\"main\">\n  <app-tools-panel></app-tools-panel>\n  <div class=\"frames\">\n    <app-list-frame\n    [frameUrl] = frameUrl\n    (resetCtx) = resetCtx()\n    (eventEditFrame) = editFrame($event)\n    ></app-list-frame>\n  </div>\n  <div class=\"canvas\">\n    <canvas\n      (mousemove)=\"canvasMouseMove($event)\"\n      (mousedown)=\"yesDrawing($event)\"\n      (mouseup)=\"noDrawing($event)\"\n      #canvas\n      width=\"512\"\n      height=\"512\"\n    ></canvas>\n  </div>\n  <div class=\"previewer\">\n    <app-pre-viewer></app-pre-viewer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/frame/frame.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/frame/frame.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListFrameFrameFrameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"img\">\n  <img #img src=\"{{ frameUrl }}\" alt=\"frame\" />\n  <button\n    mat-button\n    (click)=\"editFrame(index)\"\n    (document:keydown.control.e)=\"editFrame(index)\"\n    class=\"number buttons\"\n    data-title=\"Edit ctrl+e\"\n  >\n    {{ index + 1 }}\n  </button>\n  <button\n    mat-button\n    (click)=\"delete(index)\"\n    (document:keydown.control.d)=\"delete(index)\"\n    class=\"delete buttons\"\n    data-title=\"Ctr+d\"\n  >\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n  </button>\n  <button mat-button class=\"move buttons\" data-title=\"move\">\n    <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\n  </button>\n  <button\n    mat-button\n    (click)=\"dublicate(index)\"\n    (document:keydown.control.p)=\"dublicate(index)\"\n    class=\"duplicate buttons\"\n    data-title=\"Ctr+p\"\n  >\n    <i class=\"fa fa-clipboard\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/list-frame.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/list-frame.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListFrameListFrameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"frames\" cdkDropList  (cdkDropListDropped)=\"drop($event)\">\n  <app-frame class=\"frame\"\n    *ngFor=\"let frameUrl of framesList.getFramesUrl(); let i = index\"\n    [frameUrl]=\"frameUrl\"\n    [index]=\"i\"\n    (eventEditFrame) = editFrame($event)\n    cdkDrag\n  >\n  <div class=\"frame-placeholder\" *cdkDragPlaceholder></div>\n</app-frame>\n</div>\n<button (click)=\"addFrame()\" (document:keydown.control.a)=\"addFrame()\" mat-button class=\"addFrame\">Add New Frame</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/full-viewer/full-viewer.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/full-viewer/full-viewer.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreViewerFullViewerFullViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"canvas\">\n  <div class=\"img\">\n    <img #img  src=\"{{frameUrl}}\"  alt=\"frame\">\n  </div>\n  <button mat-button class=\"btnClose\"><a routerLink=\"/\">Close</a></button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/pre-viewer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/pre-viewer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreViewerPreViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"img\">\n  <img #img src=\"{{ frameUrl }}\" alt=\"frame\" />\n</div>\n<span class=\"labelFps\">{{ stateApp.state.fps }} Fps</span>\n<mat-slider\n  (change)=\"setupFps($event)\"\n  min=\"0\"\n  max=\"24\"\n  step=\"1\"\n  [(ngModel)]=\"stateApp.state.fps\"\n  thumbLabel\n  tickInterval=\"1\"\n></mat-slider>\n\n<mat-radio-group\n  (change)=\"selectSizeCanvas($event)\"\n  [(ngModel)]=\"selectedSizeCanvas\"\n  class=\"sizeCanvas\"\n  aria-label=\"Select an option\"\n>\n  <mat-radio-button value=\"32\">32x32</mat-radio-button>\n  <mat-radio-button value=\"64\">64x64</mat-radio-button>\n  <mat-radio-button value=\"128\">128X128</mat-radio-button>\n</mat-radio-group>\n<div class=\"buttons\">\n  <button mat-button class=\"fullView\"><a routerLink=\"/view\">View Full screen mode</a></button>\n  <button mat-button class=\"fullView\" (click)=\"saveGif()\">Great gif</button>\n  <button *ngIf=\"hrefSaveGif\" mat-button class=\"fullView\">\n    <a [href]=\"hrefSaveGif\" download={{stateApp.state.nameFile}}>Save as gif</a>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRightMenuRightMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"buttons\">\n<button mat-raised-button (click)=\"openDialog()\"><i class=\"fas fa-save\"></i></button>\n<button mat-raised-button (click)=\"openDialog()\"><i class=\"fas fa-folder-open\"></i></button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/save-dialog/save-dialog.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/save-dialog/save-dialog.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRightMenuSaveDialogSaveDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{data.name}}</h1>\n<div mat-dialog-content>\n  <p>Save Piskel as?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Ok</button>\n  <input type=\"file\" id=\"fileElem\" multiple accept=\"image/*\" style=\"display:none\" onchange=\"handleFiles(this.files)\">\n<label for=\"fileElem\">Select some files</label>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tools-panel/tools-panel.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tools-panel/tools-panel.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolsPanelToolsPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"leftPanel\">\n  <div (click)=chooseSizePen($event) class=\"sizePixel\">\n    <div class=\"btn pixel1\" data-title=\"1\">\n      <a class=\"btn1\"></a>\n    </div>\n    <div class=\"btn pixel2\" data-title=\"2\">\n      <a class=\"btn2\"></a>\n    </div>\n    <div class=\"btn pixel3\"data-title=\"3\">\n      <a class=\"btn3\"></a>\n    </div>\n    <div class=\"btn pixel4\"data-title=\"4\">\n      <a class=\"btn4\"></a>\n    </div>\n  </div>\n  <div class=\"tolls\" (click)=\"chooseTools($event)\">\n    <div [ngClass] = \"{\n      'tool': true,\n      'pen': true,\n      'selected': selectedPen }\"\n      data-title=\"Pen\"\n      >\n\n      <i class=\"fas fa-pen\"></i>\n    </div>\n\n    <div [ngClass] = \"{\n      'tool': true,\n      'bucket': true,\n      'selected': selectedBucket }\"\n      data-title=\"Bucket\">\n      <i class=\"fas fa-fill-drip\"></i>\n    </div>\n\n    <div [ngClass] = \"{\n      'tool': true,\n      'eraser': true,\n      'selected': selectedEraser }\"\n      data-title=\"Eraser\">\n      <i class=\"fas fa-eraser\"></i>\n    </div>\n    <div [ngClass] = \"{\n      'tool': true,\n      'stroke': true,\n      'selected': selectedStroke }\"\n      data-title=\"Stroke\">\n      <i class=\"fas fa-grip-lines-vertical\"></i>\n    </div>\n  </div>\n  <div (click)= chooseColors($event) class=\"colors\">\n    <label for=\"colorCurrent\"><div class=\"current\"></div></label>\n    <input (change)=changeColorCurrent($event) hidden=\"true\" type=\"color\" id=\"colorCurrent\" name=\"colorCurrent\"value=\"#e66465\">\n    <div (click)=changeCurrentPrev() class=\"change\">\n      <i class=\"fas fa-sync\"></i>\n    </div>\n    <label for=\"colorPrev\"><div class=\"prev\"></div> </label>\n    <input (change)=changeColorPrev($event) hidden=\"true\" type=\"color\" id=\"colorPrev\" name=\"colorPrev\"value=\"#e66465\">\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  color: white;\n  background-color: black;\n  height: 5vh;\n}\n.header button {\n  background-color: #6b6262;\n}\n.piskel-logo img {\n  height: 24px;\n}\n.main {\n  background-color: black;\n  display: flex;\n  width: 100vw;\n  height: 95vh;\n  justify-content: space-between;\n  align-items: center;\n}\n.main .frames {\n  width: 152px;\n  min-width: 152px;\n  height: 90vh;\n  border-style: solid;\n  border-color: white;\n  overflow-y: scroll;\n}\n.main .canvas {\n  display: flex;\n  width: 512;\n  height: 512;\n  justify-content: center;\n  justify-items: center;\n  flex-direction: column;\n  border-style: solid;\n  border-color: white;\n  background-color: rgba(255, 255, 255, 0.301);\n  background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 74%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 74%, black 75%, black);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n}\n.main .canvas canvas {\n  border-style: solid;\n}\n.main .previewer {\n  width: 250px;\n  min-width: 250px;\n  height: 90vh;\n  border-style: solid;\n  border-color: white;\n}\n.main .menu {\n  display: flex;\n  width: 100px;\n  height: 90vh;\n  flex-direction: column;\n  border-style: solid;\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBRENBO0VBQ0UsWUFBQTtBQ0VGO0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEREU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSw4TEFBQTtFQWdCQSwwQkFBQTtFQUNBLG1DQUFBO0FDWko7QURhSTtFQUNFLG1CQUFBO0FDWE47QURjRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogNXZoO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDk4LCA5OCk7XG4gIH1cbn1cbi5waXNrZWwtbG9nbyBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTV2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZnJhbWVzIHtcbiAgICB3aWR0aDogMTUycHg7XG4gICAgbWluLXdpZHRoOiAxNTJweDtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAuY2FudmFzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MTI7XG4gICAgaGVpZ2h0OiA1MTI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDEpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgNDVkZWcsXG4gICAgICAgIGJsYWNrIDI1JSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxuICAgICAgICB0cmFuc3BhcmVudCA3NCUsXG4gICAgICAgIGJsYWNrIDc1JSxcbiAgICAgICAgYmxhY2tcbiAgICAgICksXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDQ1ZGVnLFxuICAgICAgICBibGFjayAyNSUsXG4gICAgICAgIHRyYW5zcGFyZW50IDI1JSxcbiAgICAgICAgdHJhbnNwYXJlbnQgNzQlLFxuICAgICAgICBibGFjayA3NSUsXG4gICAgICAgIGJsYWNrXG4gICAgICApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMTBweCAxMHB4O1xuICAgIGNhbnZhcyB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgfVxuICAucHJldmlld2VyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuXG4gIH1cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogNXZoO1xufVxuLmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2MjYyO1xufVxuXG4ucGlza2VsLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTV2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4gLmZyYW1lcyB7XG4gIHdpZHRoOiAxNTJweDtcbiAgbWluLXdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ubWFpbiAuY2FudmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUxMjtcbiAgaGVpZ2h0OiA1MTI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDEpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NCUsIGJsYWNrIDc1JSwgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NCUsIGJsYWNrIDc1JSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAxMHB4IDEwcHg7XG59XG4ubWFpbiAuY2FudmFzIGNhbnZhcyB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ubWFpbiAucHJldmlld2VyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4ubWFpbiAubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/state-app.service */
    "./src/app/services/state-app.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _tools_panel_tools_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tools-panel/tools-panel.component */
    "./src/app/tools-panel/tools-panel.component.ts");
    /* harmony import */


    var _list_frame_list_frame_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./list-frame/list-frame.component */
    "./src/app/list-frame/list-frame.component.ts");
    /* harmony import */


    var _list_frame_frame_frame_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./list-frame/frame/frame.component */
    "./src/app/list-frame/frame/frame.component.ts");
    /* harmony import */


    var _pre_viewer_pre_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pre-viewer/pre-viewer.component */
    "./src/app/pre-viewer/pre-viewer.component.ts");
    /* harmony import */


    var _services_frame_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/frame-list.service */
    "./src/app/services/frame-list.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _pre_viewer_full_viewer_full_viewer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pre-viewer/full-viewer/full-viewer.component */
    "./src/app/pre-viewer/full-viewer/full-viewer.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./right-menu/right-menu.component */
    "./src/app/right-menu/right-menu.component.ts");
    /* harmony import */


    var _right_menu_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./right-menu/save-dialog/save-dialog.component */
    "./src/app/right-menu/save-dialog/save-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"]
    }, {
      path: 'view',
      component: _pre_viewer_full_viewer_full_viewer_component__WEBPACK_IMPORTED_MODULE_21__["FullViewerComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _tools_panel_tools_panel_component__WEBPACK_IMPORTED_MODULE_13__["ToolsPanelComponent"], _list_frame_list_frame_component__WEBPACK_IMPORTED_MODULE_14__["ListFrameComponent"], _list_frame_frame_frame_component__WEBPACK_IMPORTED_MODULE_15__["FrameComponent"], _pre_viewer_pre_viewer_component__WEBPACK_IMPORTED_MODULE_16__["PreViewerComponent"], _pre_viewer_full_viewer_full_viewer_component__WEBPACK_IMPORTED_MODULE_21__["FullViewerComponent"], _right_menu_right_menu_component__WEBPACK_IMPORTED_MODULE_23__["RightMenuComponent"], _right_menu_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_24__["SaveDialogComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"]],
      entryComponents: [_right_menu_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_24__["SaveDialogComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"]],
      providers: [_services_state_app_service__WEBPACK_IMPORTED_MODULE_7__["StateAppService"], _services_frame_list_service__WEBPACK_IMPORTED_MODULE_17__["FrameListService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  color: white;\n  background-color: black;\n  height: 5vh;\n}\n.header button {\n  background-color: #6b6262;\n}\n.piskel-logo img {\n  height: 24px;\n}\n.main {\n  background-color: black;\n  display: flex;\n  width: 100vw;\n  height: 95vh;\n  justify-content: space-between;\n  align-items: center;\n}\n.main .frames {\n  width: 152px;\n  min-width: 152px;\n  height: 90vh;\n  border-style: solid;\n  border-color: white;\n  overflow-y: scroll;\n}\n.main .canvas {\n  display: flex;\n  width: 512;\n  height: 512;\n  justify-content: center;\n  justify-items: center;\n  flex-direction: column;\n  border-style: solid;\n  border-color: white;\n  background-color: rgba(255, 255, 255, 0.301);\n  background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 74%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 74%, black 75%, black);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n}\n.main .canvas canvas {\n  border-style: solid;\n}\n.main .previewer {\n  width: 250px;\n  min-width: 250px;\n  height: 90vh;\n  border-style: solid;\n  border-color: white;\n}\n.main .menu {\n  display: flex;\n  width: 100px;\n  height: 90vh;\n  flex-direction: column;\n  border-style: solid;\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBRENBO0VBQ0UsWUFBQTtBQ0VGO0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEREU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSw4TEFBQTtFQWdCQSwwQkFBQTtFQUNBLG1DQUFBO0FDWko7QURhSTtFQUNFLG1CQUFBO0FDWE47QURjRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogNXZoO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDk4LCA5OCk7XG4gIH1cbn1cbi5waXNrZWwtbG9nbyBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTV2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZnJhbWVzIHtcbiAgICB3aWR0aDogMTUycHg7XG4gICAgbWluLXdpZHRoOiAxNTJweDtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAuY2FudmFzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MTI7XG4gICAgaGVpZ2h0OiA1MTI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDEpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgNDVkZWcsXG4gICAgICAgIGJsYWNrIDI1JSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxuICAgICAgICB0cmFuc3BhcmVudCA3NCUsXG4gICAgICAgIGJsYWNrIDc1JSxcbiAgICAgICAgYmxhY2tcbiAgICAgICksXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDQ1ZGVnLFxuICAgICAgICBibGFjayAyNSUsXG4gICAgICAgIHRyYW5zcGFyZW50IDI1JSxcbiAgICAgICAgdHJhbnNwYXJlbnQgNzQlLFxuICAgICAgICBibGFjayA3NSUsXG4gICAgICAgIGJsYWNrXG4gICAgICApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMTBweCAxMHB4O1xuICAgIGNhbnZhcyB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgfVxuICAucHJldmlld2VyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuXG4gIH1cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogNXZoO1xufVxuLmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2MjYyO1xufVxuXG4ucGlza2VsLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTV2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4gLmZyYW1lcyB7XG4gIHdpZHRoOiAxNTJweDtcbiAgbWluLXdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ubWFpbiAuY2FudmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUxMjtcbiAgaGVpZ2h0OiA1MTI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDEpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NCUsIGJsYWNrIDc1JSwgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NCUsIGJsYWNrIDc1JSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAxMHB4IDEwcHg7XG59XG4ubWFpbiAuY2FudmFzIGNhbnZhcyB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ubWFpbiAucHJldmlld2VyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4ubWFpbiAubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state-app.service */
    "./src/app/services/state-app.service.ts");
    /* harmony import */


    var _services_frame_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/frame-list.service */
    "./src/app/services/frame-list.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(stateApp, framesList) {
        _classCallCheck(this, HomeComponent);

        this.stateApp = stateApp;
        this.framesList = framesList;
        this.isDrawing = false;
        this.isEraser = false;
        this.title = 'simple-piskel-clone';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.ctx.save();
          this.heightCanvas = this.canvas.nativeElement.height;
          this.widthCanvas = this.canvas.nativeElement.width;
          this.nameFile = this.stateApp.state.nameFile;
          var image = new Image();
          image.src = this.framesList.getFramesUrl()[this.stateApp.state.currentFrame];
          this.ctx.drawImage(image, 0, 0);
          this.onSaveCtx();
        } // draw

      }, {
        key: "canvasMouseMove",
        value: function canvasMouseMove(ev) {
          switch (this.stateApp.state.currentTool) {
            case 'Pen':
              this.drawPen(ev.offsetX, ev.offsetY);
              break;

            case 'Eraser':
              this.eraser(ev.offsetX, ev.offsetY);
              break;

            default:
              break;
          }
        }
      }, {
        key: "drawPen",
        value: function drawPen(x, y) {
          var _this = this;

          if (!this.isDrawing) {
            return;
          }

          this.ctx.beginPath();
          this.ctx.fillStyle = this.stateApp.state.currentColor;
          var heightPix = this.heightCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var widthPix = this.widthCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var dotX = Math.floor(x / widthPix) * widthPix;
          var dotY = Math.floor(y / heightPix) * heightPix;
          this.ctx.fillRect(dotX, dotY, widthPix, heightPix);
          this.calcStraightLine(this.lastX, this.lastY, dotX, dotY).forEach(function (dot) {
            _this.ctx.fillRect(dot[0], dot[1], widthPix, heightPix);
          });
          var _ref = [dotX, dotY];
          this.lastX = _ref[0];
          this.lastY = _ref[1];
        }
      }, {
        key: "noDrawing",
        value: function noDrawing(event) {
          var _this2 = this;

          switch (this.stateApp.state.currentTool) {
            case 'Stroke':
              var x = Math.floor(event.offsetX);
              var y = Math.floor(event.offsetY);
              this.calcStraightLine(this.lastX, this.lastY, x, y).forEach(function (element) {
                _this2.drawPen(element[0], element[1]);
              });
              break;

            default:
              this.isDrawing = false;
              this.isEraser = false;
              this.onSaveCtx();
              break;
          }

          this.isDrawing = false;
          this.isEraser = false;
          this.onSaveCtx();
          return this.isDrawing;
        }
      }, {
        key: "yesDrawing",
        value: function yesDrawing(ev) {
          switch (this.stateApp.state.currentTool) {
            case 'Pen':
              this.isDrawing = true;
              var _ref2 = [ev.offsetX, ev.offsetY];
              this.lastX = _ref2[0];
              this.lastY = _ref2[1];
              this.drawPen(ev.offsetX, ev.offsetY);
              break;

            case 'Eraser':
              this.isEraser = true;
              this.eraser(ev.offsetX, ev.offsetY);
              break;

            case 'Bucket':
              this.fillBucket(ev.offsetX, ev.offsetY);
              break;

            case 'Stroke':
              this.isDrawing = true;
              var _ref3 = [Math.floor(ev.offsetX), Math.floor(ev.offsetY)];
              this.lastX = _ref3[0];
              this.lastY = _ref3[1];
              break;

            default:
              break;
          }
        }
      }, {
        key: "eraser",
        value: function eraser(x, y) {
          if (!this.isEraser) {
            return;
          }

          this.ctx.beginPath();
          this.ctx.fillStyle = this.stateApp.state.currentColor;
          var heightPix = this.heightCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var widthPix = this.widthCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var dotX = Math.floor(x / widthPix) * widthPix;
          var dotY = Math.floor(y / heightPix) * heightPix;
          this.ctx.clearRect(dotX, dotY, widthPix, heightPix);
          this.onSaveCtx();
        }
      }, {
        key: "onSaveCtx",
        value: function onSaveCtx() {
          this.frameUrl = this.canvas.nativeElement.toDataURL();
          this.framesList.upDateFrameUrl(this.stateApp.state.currentFrame, this.frameUrl);
          this.framesList.save();
        }
      }, {
        key: "resetCtx",
        value: function resetCtx() {
          this.ctx.restore();
          this.ctx.clearRect(0, 0, this.widthCanvas, this.heightCanvas);
        }
      }, {
        key: "editFrame",
        value: function editFrame(index) {
          this.resetCtx();
          var image = new Image();
          image.src = this.framesList.getFramesUrl()[index];
          this.ctx.drawImage(image, 0, 0);
          this.onSaveCtx();
        } // bucket

      }, {
        key: "pixelColorGet",
        value: function pixelColorGet(x, y) {
          return this.ctx.getImageData(x, y, 1, 1).data;
        }
      }, {
        key: "fillBucket",
        value: function fillBucket(dX, dY) {
          var _this3 = this;

          var heightPix = this.heightCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var widthPix = this.widthCanvas / this.stateApp.state.canvasSize * this.stateApp.state.penSize;
          var pixX = Math.floor(dX / widthPix) * widthPix;
          var pixY = Math.floor(dY / heightPix) * heightPix;
          var pixXYs = [];
          pixXYs.push({
            dx: pixX,
            dy: pixY
          });
          var colorOld = Array.from(this.pixelColorGet(pixX, pixY));
          var around = [{
            deltax: -1,
            deltay: 0
          }, {
            deltax: 1,
            deltay: 0
          }, {
            deltax: 0,
            deltay: -1
          }, {
            deltax: 0,
            deltay: 1
          }];
          this.ctx.fillStyle = this.stateApp.state.currentColor;

          var _loop = function _loop() {
            var dot = _pixXYs[_i];
            around.forEach(function (delta) {
              var x = dot.dx + delta.deltax * widthPix;
              var y = dot.dy + delta.deltay * heightPix;
              var currentColorPixel = Array.from(_this3.pixelColorGet(x, y));

              if (colorOld.toString() === currentColorPixel.toString() && !pixXYs.some(function (p) {
                return p.dx === x && p.dy === y;
              }) && x >= 0 && y >= 0 && x < _this3.widthCanvas && y < _this3.heightCanvas) {
                pixXYs.push({
                  dx: x,
                  dy: y
                });
              }
            });
          };

          for (var _i = 0, _pixXYs = pixXYs; _i < _pixXYs.length; _i++) {
            _loop();
          }

          var _loop2 = function _loop2() {
            var dot = _pixXYs2[_i2];
            setTimeout(function () {
              _this3.ctx.fillRect(dot.dx, dot.dy, widthPix, heightPix);
            }, 1);
          };

          for (var _i2 = 0, _pixXYs2 = pixXYs; _i2 < _pixXYs2.length; _i2++) {
            _loop2();
          }

          this.onSaveCtx();
        }
      }, {
        key: "calcStraightLine",
        value: function calcStraightLine(lastDX, lastDY, currentDX, currentDY) {
          if (lastDX === currentDX && lastDY === currentDY) {
            return [];
          }

          var coordinatesArray = [];
          var lastdx = lastDX;
          var lastdy = lastDY;
          var dx = Math.abs(currentDX - lastdx);
          var dy = Math.abs(currentDY - lastdy);
          var sx = lastdx < currentDX ? 1 : -1;
          var sy = lastdy < currentDY ? 1 : -1;
          var err = dx - dy;
          coordinatesArray.push([lastdx, lastdy]);

          while (!(lastdx === currentDX && lastdy === currentDY)) {
            var e2 = err * Math.pow(2, 1);

            if (e2 > -dy) {
              err -= dy;
              lastdx += sx;
            }

            if (e2 < dx) {
              err += dx;
              lastdy += sy;
            }

            coordinatesArray.push([lastdx, lastdy]);
          }

          return coordinatesArray;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_state_app_service__WEBPACK_IMPORTED_MODULE_2__["StateAppService"]
      }, {
        type: _services_frame_list_service__WEBPACK_IMPORTED_MODULE_3__["FrameListService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      static: true
    })], HomeComponent.prototype, "canvas", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/list-frame/frame/frame.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/list-frame/frame/frame.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListFrameFrameFrameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nimg {\n  height: 150px;\n  width: 150px;\n  display: block;\n  background-color: white;\n  border-style: solid;\n  border-color: #f8f858;\n}\n.img {\n  position: relative;\n  height: 152px;\n}\n.number {\n  position: absolute;\n  background-color: #f8f858;\n  top: 0px;\n  left: 0px;\n}\n.delete {\n  background-color: #f8f858;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  opacity: 0;\n}\n.delete:hover {\n  opacity: 90;\n}\n.move {\n  background-color: #f8f858;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0;\n}\n.move:hover {\n  opacity: 90;\n}\n.duplicate {\n  background-color: #f8f858;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  opacity: 0;\n}\n.duplicate:hover {\n  opacity: 90;\n}\n.buttons:hover::after {\n  content: attr(data-title);\n  position: absolute;\n  /* Абсолютное позиционирование */\n  left: 0;\n  top: 50%;\n  /* Положение подсказки */\n  z-index: 1;\n  /* Отображаем подсказку поверх других элементов */\n  font-family: Arial, sans-serif;\n  /* Гарнитура шрифта */\n  font-size: 12px;\n  /* Размер текста подсказки */\n  padding: 5px 10px;\n  /* Поля */\n  color: #0c0c0c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1mcmFtZS9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9saXN0LWZyYW1lL2ZyYW1lL2ZyYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FERUY7QUNFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURDRjtBQ0FFO0VBQ0UsV0FBQTtBREVKO0FDRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNBRTtFQUNFLFdBQUE7QURFSjtBQ0VBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRENGO0FDQUU7RUFDRSxXQUFBO0FERUo7QUNHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFBb0IsZ0NBQUE7RUFDcEIsT0FBQTtFQUNBLFFBQUE7RUFBVSx3QkFBQTtFQUNWLFVBQUE7RUFBWSxpREFBQTtFQUNaLDhCQUFBO0VBQWdDLHFCQUFBO0VBQ2hDLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsaUJBQUE7RUFBbUIsU0FBQTtFQUNuQixjQUFBO0FETUoiLCJmaWxlIjoic3JjL2FwcC9saXN0LWZyYW1lL2ZyYW1lL2ZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2Y4Zjg1ODtcbn1cblxuLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNTJweDtcbn1cblxuLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4Zjg1ODtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4NTg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG4uZGVsZXRlOmhvdmVyIHtcbiAgb3BhY2l0eTogOTA7XG59XG5cbi5tb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4Zjg1ODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuLm1vdmU6aG92ZXIge1xuICBvcGFjaXR5OiA5MDtcbn1cblxuLmR1cGxpY2F0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4NTg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHVwbGljYXRlOmhvdmVyIHtcbiAgb3BhY2l0eTogOTA7XG59XG5cbi5idXR0b25zOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyog0JDQsdGB0L7Qu9GO0YLQvdC+0LUg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LUgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC8qINCf0L7Qu9C+0LbQtdC90LjQtSDQv9C+0LTRgdC60LDQt9C60LggKi9cbiAgei1pbmRleDogMTtcbiAgLyog0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L/QvtC00YHQutCw0LfQutGDINC/0L7QstC10YDRhSDQtNGA0YPQs9C40YUg0Y3Qu9C10LzQtdC90YLQvtCyICovXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLyog0JPQsNGA0L3QuNGC0YPRgNCwINGI0YDQuNGE0YLQsCAqL1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qINCg0LDQt9C80LXRgCDRgtC10LrRgdGC0LAg0L/QvtC00YHQutCw0LfQutC4ICovXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICAvKiDQn9C+0LvRjyAqL1xuICBjb2xvcjogIzBjMGMwYztcbn0iLCJpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDg4KTtcbn1cblxuLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNTJweDtcbn1cblxuLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCA4OCk7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG5cbn1cblxuLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgODgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBvcGFjaXR5OiAwMDtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogOTA7XG4gIH1cbn1cblxuLm1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDg4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwMDtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogOTA7XG4gIH1cbn1cblxuLmR1cGxpY2F0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgODgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBvcGFjaXR5OiAwMDtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogOTA7XG4gIH1cbn1cblxuLmJ1dHRvbnMge1xuICAmOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qINCQ0LHRgdC+0LvRjtGC0L3QvtC1INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC1ICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTsgLyog0J/QvtC70L7QttC10L3QuNC1INC/0L7QtNGB0LrQsNC30LrQuCAqL1xuICAgIHotaW5kZXg6IDE7IC8qINCe0YLQvtCx0YDQsNC20LDQtdC8INC/0L7QtNGB0LrQsNC30LrRgyDQv9C+0LLQtdGA0YUg0LTRgNGD0LPQuNGFINGN0LvQtdC80LXQvdGC0L7QsiAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgLyog0JPQsNGA0L3QuNGC0YPRgNCwINGI0YDQuNGE0YLQsCAqL1xuICAgIGZvbnQtc2l6ZTogMTJweDsgLyog0KDQsNC30LzQtdGAINGC0LXQutGB0YLQsCDQv9C+0LTRgdC60LDQt9C60LggKi9cbiAgICBwYWRkaW5nOiA1cHggMTBweDsgLyog0J/QvtC70Y8gKi9cbiAgICBjb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xuXG4gIH1cblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/list-frame/frame/frame.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/list-frame/frame/frame.component.ts ***!
    \*****************************************************/

  /*! exports provided: FrameComponent */

  /***/
  function srcAppListFrameFrameFrameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
      return FrameComponent;
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


    var src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/frame-list.service */
    "./src/app/services/frame-list.service.ts");
    /* harmony import */


    var src_app_services_state_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/state-app.service */
    "./src/app/services/state-app.service.ts");

    var FrameComponent =
    /*#__PURE__*/
    function () {
      function FrameComponent(framesList, stateApp) {
        _classCallCheck(this, FrameComponent);

        this.framesList = framesList;
        this.stateApp = stateApp;
        this.eventEditFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FrameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete(index) {
          this.stateApp.state.currentFrame = index;
          this.framesList.deleteFrameUrl(index);
        }
      }, {
        key: "dublicate",
        value: function dublicate(index) {
          this.framesList.copyFrameUrl(index);
        }
      }, {
        key: "editFrame",
        value: function editFrame(index) {
          this.stateApp.state.currentFrame = index;
          this.eventEditFrame.emit(index);
        }
      }]);

      return FrameComponent;
    }();

    FrameComponent.ctorParameters = function () {
      return [{
        type: src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__["FrameListService"]
      }, {
        type: src_app_services_state_app_service__WEBPACK_IMPORTED_MODULE_3__["StateAppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FrameComponent.prototype, "frameUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FrameComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FrameComponent.prototype, "eventEditFrame", void 0);
    FrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-frame',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./frame.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/frame/frame.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./frame.component.scss */
      "./src/app/list-frame/frame/frame.component.scss")).default]
    })], FrameComponent);
    /***/
  },

  /***/
  "./src/app/list-frame/list-frame.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/list-frame/list-frame.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListFrameListFrameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addFrame {\n  border: solid;\n  color: white;\n  border-color: white;\n  margin-left: 5%;\n}\n\n.frames {\n  width: 150px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 100px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.frame {\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.frame:last-child {\n  border: none;\n}\n\n.frames.cdk-drop-list-dragging .frame:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.frame-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 100px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9saXN0LWZyYW1lL2xpc3QtZnJhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtZnJhbWUvbGlzdC1mcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDQ0Y7O0FESUE7RUFDRSxzREFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0Usc0RBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9saXN0LWZyYW1lL2xpc3QtZnJhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkRnJhbWUge1xuICBib3JkZXI6IHNvbGlkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmZyYW1lcyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mcmFtZXtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmZyYW1lOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mcmFtZXMuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZnJhbWU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5mcmFtZS1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cbiIsIi5hZGRGcmFtZSB7XG4gIGJvcmRlcjogc29saWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZnJhbWVzIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZyYW1lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmZyYW1lOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mcmFtZXMuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZnJhbWU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5mcmFtZS1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/list-frame/list-frame.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/list-frame/list-frame.component.ts ***!
    \****************************************************/

  /*! exports provided: ListFrameComponent */

  /***/
  function srcAppListFrameListFrameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListFrameComponent", function () {
      return ListFrameComponent;
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


    var _services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/frame-list.service */
    "./src/app/services/frame-list.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/state-app.service */
    "./src/app/services/state-app.service.ts");

    var ListFrameComponent =
    /*#__PURE__*/
    function () {
      function ListFrameComponent(framesList, stateApp) {
        _classCallCheck(this, ListFrameComponent);

        this.framesList = framesList;
        this.stateApp = stateApp;
        this.resetCtx = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventEditFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ListFrameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.frameUrl !== undefined) {
            this.framesList.upDateFrameUrl(this.stateApp.state.currentFrame, this.frameUrl);
          }
        }
      }, {
        key: "addFrame",
        value: function addFrame() {
          this.framesList.addFrameUrl(this.frameUrl);
          this.resetCtx.emit();
        }
      }, {
        key: "drop",
        value: function drop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.framesList.getFramesUrl(), event.currentIndex, event.previousIndex);
        }
      }, {
        key: "editFrame",
        value: function editFrame(index) {
          this.eventEditFrame.emit(index);
        }
      }]);

      return ListFrameComponent;
    }();

    ListFrameComponent.ctorParameters = function () {
      return [{
        type: _services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__["FrameListService"]
      }, {
        type: _services_state_app_service__WEBPACK_IMPORTED_MODULE_4__["StateAppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListFrameComponent.prototype, "frameUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListFrameComponent.prototype, "resetCtx", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListFrameComponent.prototype, "eventEditFrame", void 0);
    ListFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-frame',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-frame.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-frame/list-frame.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-frame.component.scss */
      "./src/app/list-frame/list-frame.component.scss")).default]
    })], ListFrameComponent);
    /***/
  },

  /***/
  "./src/app/pre-viewer/full-viewer/full-viewer.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pre-viewer/full-viewer/full-viewer.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreViewerFullViewerFullViewerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".canvas {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  height: 100vh;\n  width: 512px;\n}\n.canvas canvas {\n  border-style: solid;\n  border-color: yellow;\n}\n.canvas .btnClose {\n  border-color: darkorange;\n}\n.canvas .btnClose a {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9wcmUtdmlld2VyL2Z1bGwtdmlld2VyL2Z1bGwtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtdmlld2VyL2Z1bGwtdmlld2VyL2Z1bGwtdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDRUo7QURBRTtFQUNFLHdCQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3ByZS12aWV3ZXIvZnVsbC12aWV3ZXIvZnVsbC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FudmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTEycHg7XG4gIGNhbnZhcyB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHllbGxvdztcbiAgfVxuICAuYnRuQ2xvc2Uge1xuICAgIGJvcmRlci1jb2xvcjogZGFya29yYW5nZTtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gIH1cbn1cblxuIiwiLmNhbnZhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUxMnB4O1xufVxuLmNhbnZhcyBjYW52YXMge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHllbGxvdztcbn1cbi5jYW52YXMgLmJ0bkNsb3NlIHtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrb3JhbmdlO1xufVxuLmNhbnZhcyAuYnRuQ2xvc2UgYSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pre-viewer/full-viewer/full-viewer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pre-viewer/full-viewer/full-viewer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FullViewerComponent */

  /***/
  function srcAppPreViewerFullViewerFullViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullViewerComponent", function () {
      return FullViewerComponent;
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


    var src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/frame-list.service */
    "./src/app/services/frame-list.service.ts");
    /* harmony import */


    var src_app_services_state_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/state-app.service */
    "./src/app/services/state-app.service.ts");

    var FullViewerComponent =
    /*#__PURE__*/
    function () {
      function FullViewerComponent(framesList, stateApp) {
        _classCallCheck(this, FullViewerComponent);

        this.framesList = framesList;
        this.stateApp = stateApp;
        this.index = 0;
      }

      _createClass(FullViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startAnimation();
          this.selectedSizeCanvas = this.stateApp.state.canvasSize.toString();
        }
      }, {
        key: "startAnimation",
        value: function startAnimation() {
          clearInterval(this.intervalAnimation);
          this.index = 0;
          this.intervalAnimation = setInterval(this.animationFrames.bind(this), 1000 / this.stateApp.state.fps);
        }
      }, {
        key: "animationFrames",
        value: function animationFrames() {
          if (this.index > this.framesList.getFramesUrl().length - 2) {
            this.index = 0;
          } else {
            this.index += 1;
          }

          this.frameUrl = this.framesList.getFramesUrl()[this.index]; // requestAnimationFrame(this.animationFrames.bind(this));
        }
      }]);

      return FullViewerComponent;
    }();

    FullViewerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__["FrameListService"]
      }, {
        type: src_app_services_state_app_service__WEBPACK_IMPORTED_MODULE_3__["StateAppService"]
      }];
    };

    FullViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-full-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/full-viewer/full-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-viewer.component.scss */
      "./src/app/pre-viewer/full-viewer/full-viewer.component.scss")).default]
    })], FullViewerComponent);
    /***/
  },

  /***/
  "./src/app/pre-viewer/pre-viewer.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pre-viewer/pre-viewer.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreViewerPreViewerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  height: 250px;\n  width: 250px;\n  display: block;\n  background-color: white;\n}\n\nbutton {\n  margin-top: 10px;\n  border: solid;\n  border-color: #f8e805;\n  color: yellow;\n}\n\nbutton a {\n  color: yellow;\n}\n\nmat-slider {\n  width: 250px;\n}\n\n.labelFps {\n  color: yellow;\n}\n\n.sizeCanvas {\n  color: yellow;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9wcmUtdmlld2VyL3ByZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByZS12aWV3ZXIvcHJlLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURERTtFQUNFLGFBQUE7QUNHSjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcHJlLXZpZXdlci9wcmUtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyNDgsIDIzMiwgNSk7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGEge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbn1cblxubWF0LXNsaWRlciB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmxhYmVsRnBzIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLnNpemVDYW52YXMge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iLCJpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZjhlODA1O1xuICBjb2xvcjogeWVsbG93O1xufVxuYnV0dG9uIGEge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubGFiZWxGcHMge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uc2l6ZUNhbnZhcyB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pre-viewer/pre-viewer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pre-viewer/pre-viewer.component.ts ***!
    \****************************************************/

  /*! exports provided: PreViewerComponent */

  /***/
  function srcAppPreViewerPreViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreViewerComponent", function () {
      return PreViewerComponent;
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


    var _services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/frame-list.service */
    "./src/app/services/frame-list.service.ts");
    /* harmony import */


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/state-app.service */
    "./src/app/services/state-app.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var PreViewerComponent =
    /*#__PURE__*/
    function () {
      function PreViewerComponent(framesList, stateApp, sanitizer) {
        _classCallCheck(this, PreViewerComponent);

        this.framesList = framesList;
        this.stateApp = stateApp;
        this.sanitizer = sanitizer;
        this.index = 0;
      }

      _createClass(PreViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startAnimation();
          this.selectedSizeCanvas = this.stateApp.state.canvasSize.toString();
        }
      }, {
        key: "startAnimation",
        value: function startAnimation() {
          clearInterval(this.intervalAnimation);
          this.index = 0;
          this.intervalAnimation = setInterval(this.animationFrames.bind(this), 1000 / this.stateApp.state.fps);
        }
      }, {
        key: "animationFrames",
        value: function animationFrames() {
          if (this.index > this.framesList.getFramesUrl().length - 2) {
            this.index = 0;
          } else {
            this.index += 1;
          }

          this.frameUrl = this.framesList.getFramesUrl()[this.index]; // requestAnimationFrame(this.animationFrames.bind(this));
        }
      }, {
        key: "setupFps",
        value: function setupFps(event) {
          this.stateApp.state.fps = event.value;
          this.startAnimation();
        }
      }, {
        key: "selectSizeCanvas",
        value: function selectSizeCanvas(event) {
          this.stateApp.state.canvasSize = event.value;
        }
      }, {
        key: "saveGif",
        value: function saveGif() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var _ref4, gif, blob;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.framesList.createGif();

                  case 2:
                    _ref4 = _context.sent;
                    gif = _ref4.gif;
                    blob = _ref4.blob;
                    gif.on('finished', function (blob) {
                      _this4.hrefSaveGif = URL.createObjectURL(blob);
                      window.open(URL.createObjectURL(blob));
                      _this4.hrefSaveGif = window.URL.createObjectURL(blob);
                      _this4.hrefSaveGif = _this4.sanitizer.bypassSecurityTrustUrl(_this4.hrefSaveGif);
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PreViewerComponent;
    }();

    PreViewerComponent.ctorParameters = function () {
      return [{
        type: _services_frame_list_service__WEBPACK_IMPORTED_MODULE_2__["FrameListService"]
      }, {
        type: _services_state_app_service__WEBPACK_IMPORTED_MODULE_3__["StateAppService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    PreViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pre-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-viewer/pre-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pre-viewer.component.scss */
      "./src/app/pre-viewer/pre-viewer.component.scss")).default]
    })], PreViewerComponent);
    /***/
  },

  /***/
  "./src/app/right-menu/right-menu.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/right-menu/right-menu.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRightMenuRightMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttons {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRG9jdW1lbnRzL1JTU18yMDE5L2JhYnRzb3VhbGlha3NhbmRyLVJTMjAxOVEzL3NpbXBsZS1waXNrZWwtY2xvbmUvc3JjL2FwcC9yaWdodC1tZW51L3JpZ2h0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JpZ2h0LW1lbnUvcmlnaHQtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LW1lbnUvcmlnaHQtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiIsIi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/right-menu/right-menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/right-menu/right-menu.component.ts ***!
    \****************************************************/

  /*! exports provided: RightMenuComponent */

  /***/
  function srcAppRightMenuRightMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightMenuComponent", function () {
      return RightMenuComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./save-dialog/save-dialog.component */
    "./src/app/right-menu/save-dialog/save-dialog.component.ts");
    /* harmony import */


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/state-app.service */
    "./src/app/services/state-app.service.ts");

    var RightMenuComponent =
    /*#__PURE__*/
    function () {
      function RightMenuComponent(dialog, appState) {
        _classCallCheck(this, RightMenuComponent);

        this.dialog = dialog;
        this.appState = appState;
      }

      _createClass(RightMenuComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SaveDialogComponent"], {
            width: '240px',
            data: {
              name: this.appState.state.nameFile
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this5.name = result;
          });
        }
      }]);

      return RightMenuComponent;
    }();

    RightMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_state_app_service__WEBPACK_IMPORTED_MODULE_4__["StateAppService"]
      }];
    };

    RightMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-right-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/right-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-menu.component.scss */
      "./src/app/right-menu/right-menu.component.scss")).default]
    })], RightMenuComponent);
    /***/
  },

  /***/
  "./src/app/right-menu/save-dialog/save-dialog.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/right-menu/save-dialog/save-dialog.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRightMenuSaveDialogSaveDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LW1lbnUvc2F2ZS1kaWFsb2cvc2F2ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/right-menu/save-dialog/save-dialog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/right-menu/save-dialog/save-dialog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SaveDialogComponent */

  /***/
  function srcAppRightMenuSaveDialogSaveDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveDialogComponent", function () {
      return SaveDialogComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/frame-list.service */
    "./src/app/services/frame-list.service.ts");

    var SaveDialogComponent =
    /*#__PURE__*/
    function () {
      function SaveDialogComponent(dialogRef, data, frameList) {
        _classCallCheck(this, SaveDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.frameList = frameList;
      }

      _createClass(SaveDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "download",
        value: function download() {}
      }]);

      return SaveDialogComponent;
    }();

    SaveDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_services_frame_list_service__WEBPACK_IMPORTED_MODULE_3__["FrameListService"]
      }];
    };

    SaveDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-save-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./save-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/right-menu/save-dialog/save-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./save-dialog.component.scss */
      "./src/app/right-menu/save-dialog/save-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SaveDialogComponent);
    /***/
  },

  /***/
  "./src/app/services/frame-list.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/frame-list.service.ts ***!
    \************************************************/

  /*! exports provided: FrameListService */

  /***/
  function srcAppServicesFrameListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameListService", function () {
      return FrameListService;
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


    var _state_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state-app.service */
    "./src/app/services/state-app.service.ts");
    /* harmony import */


    var _assets_js_gif_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../assets/js/gif.js */
    "./src/assets/js/gif.js");
    /* harmony import */


    var _assets_js_gif_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_assets_js_gif_js__WEBPACK_IMPORTED_MODULE_3__);

    var FrameListService =
    /*#__PURE__*/
    function () {
      function FrameListService(stateApp) {
        _classCallCheck(this, FrameListService);

        this.stateApp = stateApp;
        this.framesUrls = [];
        this.init = true;
        var arrayUrl = JSON.parse(localStorage.getItem('FRAMES'));

        if (arrayUrl === null) {
          this.framesUrls.push('data:text/plain;base64,');
          this.stateApp.state.currentFrame = 0;
        } else {
          this.framesUrls = arrayUrl;
          this.stateApp.state.currentFrame = this.framesUrls.length - 1;
        }
      }

      _createClass(FrameListService, [{
        key: "save",
        value: function save() {
          localStorage.setItem('FRAMES', JSON.stringify(this.framesUrls));
        }
      }, {
        key: "addFrameUrl",
        value: function addFrameUrl(frameUrl) {
          this.framesUrls.push(frameUrl);
          this.stateApp.state.currentFrame = this.framesUrls.length - 1;
          this.save();
        }
      }, {
        key: "getFramesUrl",
        value: function getFramesUrl() {
          return this.framesUrls;
        }
      }, {
        key: "upDateFrameUrl",
        value: function upDateFrameUrl(index, frameUrl) {
          this.framesUrls[index] = frameUrl;
          this.save();
        }
      }, {
        key: "deleteFrameUrl",
        value: function deleteFrameUrl(index) {
          console.log('delete', index);
          console.log(this.framesUrls.length);
          this.framesUrls.splice(index, 1);
          console.log(this.framesUrls.length);
          console.log(this.framesUrls);
          this.save();
        }
      }, {
        key: "copyFrameUrl",
        value: function copyFrameUrl(index) {
          var arr1 = this.framesUrls.slice(0, index);
          var arr2 = this.framesUrls.slice(index);
          this.framesUrls = [].concat(_toConsumableArray(arr1), [this.framesUrls[index]], _toConsumableArray(arr2));
          this.stateApp.state.currentFrame += 1;
          this.save();
        }
      }, {
        key: "createGif",
        value: function createGif() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.gif = new _assets_js_gif_js__WEBPACK_IMPORTED_MODULE_3__({
                      workers: 2,
                      workerScript: '../../assets/js/gif.worker.js',
                      quality: 10
                    });
                    this.getFramesUrl().forEach(function (frame) {
                      var image = new Image();
                      image.src = frame;

                      _this6.gif.addFrame(image, {
                        copy: true
                      });
                    });
                    _context2.next = 4;
                    return this.gif.on('finished', function (blob) {
                      return blob;
                    });

                  case 4:
                    this.blob = _context2.sent;
                    this.gif.render();
                    return _context2.abrupt("return", {
                      gif: this.gif,
                      blob: this.blob
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return FrameListService;
    }();

    FrameListService.ctorParameters = function () {
      return [{
        type: _state_app_service__WEBPACK_IMPORTED_MODULE_2__["StateAppService"]
      }];
    };

    FrameListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FrameListService);
    /***/
  },

  /***/
  "./src/app/services/state-app.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/state-app.service.ts ***!
    \***********************************************/

  /*! exports provided: StateAppService */

  /***/
  function srcAppServicesStateAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateAppService", function () {
      return StateAppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StateAppService =
    /*#__PURE__*/
    function () {
      function StateAppService() {
        _classCallCheck(this, StateAppService);

        this.state = JSON.parse(localStorage.getItem('STATE'));

        if (this.state === null) {
          this.state = {
            currentColor: 'red',
            previousColor: 'blue',
            currentTool: 'pen',
            penSize: 4,
            canvasSize: 32,
            fps: 1,
            currentFrame: 0,
            nameFile: 'New Piskel'
          };
        }

        this.state.currentFrame = 0;
      }

      _createClass(StateAppService, [{
        key: "save",
        value: function save(state) {
          localStorage.setItem('STATE', JSON.stringify(state));
        }
      }, {
        key: "get",
        value: function get() {
          var state = JSON.parse(localStorage.getItem('STATE'));

          if (state === null) {
            state = {
              currentColor: 'red',
              previousColor: 'blue',
              currentTool: 'pen',
              penSize: 4,
              canvasSize: 32,
              fps: 1,
              currentFrame: 0,
              nameFile: 'New Piskel'
            };
          }

          return state;
        }
      }]);

      return StateAppService;
    }();

    StateAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StateAppService);
    /***/
  },

  /***/
  "./src/app/tools-panel/tools-panel.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/tools-panel/tools-panel.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolsPanelToolsPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.leftPanel {\n  display: flex;\n  width: 10vw;\n  min-width: 100px;\n  flex-direction: column;\n}\n.sizePixel {\n  display: flex;\n  justify-content: space-between;\n}\n.sizePixel .btn {\n  width: 1.3vw;\n  min-width: 20px;\n  min-height: 20px;\n  height: 1.3vw;\n  background-color: white;\n  border-style: solid;\n  border-color: #f5e6b5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.sizePixel .btn:hover {\n  cursor: pointer;\n  border-color: #ffc400;\n}\n.sizePixel .btn:hover::after {\n  content: attr(data-title);\n  position: absolute;\n  left: 30%;\n  top: 100%;\n  z-index: 1;\n  background: rgba(255, 255, 230, 0.9);\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n}\n.sizePixel .btn:active {\n  cursor: pointer;\n  border-color: #d9ff00;\n}\n.sizePixel .btn .btn1 {\n  display: block;\n  width: 15%;\n  height: 15%;\n  background-color: #030303;\n}\n.sizePixel .btn .btn2 {\n  width: 25%;\n  height: 25%;\n  background-color: #030303;\n}\n.sizePixel .btn .btn3 {\n  width: 35%;\n  height: 35%;\n  background-color: #030303;\n}\n.sizePixel .btn .btn4 {\n  width: 55%;\n  height: 55%;\n  background-color: #030303;\n}\n.tolls {\n  display: flex;\n  flex-wrap: wrap;\n}\n.tolls .tool {\n  margin-top: 10%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: #f5e6b5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  position: relative;\n}\n.tolls .tool.selected {\n  background-color: #fcb103;\n}\n.tolls .tool:hover {\n  cursor: pointer;\n  border-color: white;\n}\n.tolls .tool:active {\n  cursor: pointer;\n  border-color: #fcb103;\n}\n.tolls .tool:hover::after {\n  content: attr(data-title);\n  position: absolute;\n  /* Абсолютное позиционирование */\n  left: 30%;\n  top: 100%;\n  /* Положение подсказки */\n  z-index: 1;\n  /* Отображаем подсказку поверх других элементов */\n  background: rgba(255, 255, 230, 0.9);\n  /* Полупрозрачный цвет фона */\n  font-family: Arial, sans-serif;\n  /* Гарнитура шрифта */\n  font-size: 11px;\n  /* Размер текста подсказки */\n  padding: 5px 10px;\n  /* Поля */\n  border: 1px solid #333;\n  /* Параметры рамки */\n}\n.colors {\n  margin-top: 10%;\n  width: 50%;\n  position: relative;\n  align-self: center;\n}\n.colors .current {\n  height: 40px;\n  width: 40px;\n  border-style: solid;\n  background-color: #fff;\n  z-index: 1;\n}\n.colors .current:hover {\n  cursor: pointer;\n  border-color: white;\n}\n.colors .current:active {\n  cursor: pointer;\n  border-color: #fcb103;\n}\n.colors .prev {\n  margin-top: -50%;\n  margin-left: 35%;\n  height: 40px;\n  width: 40px;\n  z-index: -1;\n  border-style: solid;\n  background-color: red;\n}\n.colors .prev:hover {\n  cursor: pointer;\n  border-color: white;\n}\n.colors .prev:active {\n  cursor: pointer;\n  border-color: #fcb103;\n}\n.colors .change {\n  background-color: white;\n}\n.selectedPen {\n  border-color: #fcb103;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMtcGFuZWwvdG9vbHMtcGFuZWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleGFuZGVyL0RvY3VtZW50cy9SU1NfMjAxOS9iYWJ0c291YWxpYWtzYW5kci1SUzIwMTlRMy9zaW1wbGUtcGlza2VsLWNsb25lL3NyYy9hcHAvdG9vbHMtcGFuZWwvdG9vbHMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FERUY7QUNBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBREdGO0FDRkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURJSjtBQ0hJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FES047QUNKTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QURNUjtBQ0hJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FES047QUNISTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FES047QUNISTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURLTjtBQ0hJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBREtOO0FDSEk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FES047QUNBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FER0Y7QUNGRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURJSjtBQ0hJO0VBQ0UseUJBQUE7QURLTjtBQ0hJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FES047QUNISTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBREtOO0FDSEk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQW9CLGdDQUFBO0VBQ3BCLFNBQUE7RUFDQSxTQUFBO0VBQVcsd0JBQUE7RUFDWCxVQUFBO0VBQVksaURBQUE7RUFDWixvQ0FBQTtFQUFzQyw2QkFBQTtFQUN0Qyw4QkFBQTtFQUFnQyxxQkFBQTtFQUNoQyxlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLGlCQUFBO0VBQW1CLFNBQUE7RUFDbkIsc0JBQUE7RUFBd0Isb0JBQUE7QURhOUI7QUNUQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBRFdGO0FDVEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FEV0o7QUNWSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRFlOO0FDVkk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QURZTjtBQ1RFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QURXSjtBQ1ZJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEWU47QUNWSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBRFlOO0FDVEU7RUFDRSx1QkFBQTtBRFdKO0FDUEE7RUFDRSxxQkFBQTtBRFVGIiwiZmlsZSI6InNyYy9hcHAvdG9vbHMtcGFuZWwvdG9vbHMtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubGVmdFBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwdnc7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaXplUGl4ZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2l6ZVBpeGVsIC5idG4ge1xuICB3aWR0aDogMS4zdnc7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAxLjN2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2Y1ZTZiNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaXplUGl4ZWwgLmJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjNDAwO1xufVxuLnNpemVQaXhlbCAuYnRuOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDIzMCwgMC45KTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuLnNpemVQaXhlbCAuYnRuOmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjZDlmZjAwO1xufVxuLnNpemVQaXhlbCAuYnRuIC5idG4xIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xufVxuLnNpemVQaXhlbCAuYnRuIC5idG4yIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG59XG4uc2l6ZVBpeGVsIC5idG4gLmJ0bjMge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcbn1cbi5zaXplUGl4ZWwgLmJ0biAuYnRuNCB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xufVxuXG4udG9sbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udG9sbHMgLnRvb2wge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2Y1ZTZiNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9sbHMgLnRvb2wuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNiMTAzO1xufVxuLnRvbGxzIC50b29sOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLnRvbGxzIC50b29sOmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjZmNiMTAzO1xufVxuLnRvbGxzIC50b29sOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyog0JDQsdGB0L7Qu9GO0YLQvdC+0LUg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LUgKi9cbiAgbGVmdDogMzAlO1xuICB0b3A6IDEwMCU7XG4gIC8qINCf0L7Qu9C+0LbQtdC90LjQtSDQv9C+0LTRgdC60LDQt9C60LggKi9cbiAgei1pbmRleDogMTtcbiAgLyog0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L/QvtC00YHQutCw0LfQutGDINC/0L7QstC10YDRhSDQtNGA0YPQs9C40YUg0Y3Qu9C10LzQtdC90YLQvtCyICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDIzMCwgMC45KTtcbiAgLyog0J/QvtC70YPQv9GA0L7Qt9GA0LDRh9C90YvQuSDRhtCy0LXRgiDRhNC+0L3QsCAqL1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC8qINCT0LDRgNC90LjRgtGD0YDQsCDRiNGA0LjRhNGC0LAgKi9cbiAgZm9udC1zaXplOiAxMXB4O1xuICAvKiDQoNCw0LfQvNC10YAg0YLQtdC60YHRgtCwINC/0L7QtNGB0LrQsNC30LrQuCAqL1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgLyog0J/QvtC70Y8gKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgLyog0J/QsNGA0LDQvNC10YLRgNGLINGA0LDQvNC60LggKi9cbn1cblxuLmNvbG9ycyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29sb3JzIC5jdXJyZW50IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cbi5jb2xvcnMgLmN1cnJlbnQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4uY29sb3JzIC5jdXJyZW50OmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjZmNiMTAzO1xufVxuLmNvbG9ycyAucHJldiB7XG4gIG1hcmdpbi10b3A6IC01MCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IC0xO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uY29sb3JzIC5wcmV2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLmNvbG9ycyAucHJldjphY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2ZjYjEwMztcbn1cbi5jb2xvcnMgLmNoYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VsZWN0ZWRQZW4ge1xuICBib3JkZXItY29sb3I6ICNmY2IxMDM7XG59IiwiLmxlZnRQYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMHZ3O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpemVQaXhlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEuM3Z3O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGhlaWdodDogMS4zdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDUsIDIzMCwgMTgxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyMzAsIDAuOSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIH1cbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE3LCAyNTUsIDApO1xuICAgIH1cbiAgICAuYnRuMSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzLCAzKTtcbiAgICB9XG4gICAgLmJ0bjIge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGhlaWdodDogMjUlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDMpO1xuICAgIH1cbiAgICAuYnRuMyB7XG4gICAgICB3aWR0aDogMzUlO1xuICAgICAgaGVpZ2h0OiAzNSU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMywgMyk7XG4gICAgfVxuICAgIC5idG40IHtcbiAgICAgIHdpZHRoOiA1NSU7XG4gICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAzLCAzKTtcbiAgICB9XG4gIH1cbn1cblxuLnRvbGxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAudG9vbCB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NSwgMjMwLCAxODEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxNzcsIDMpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MiwgMTc3LCAzKTtcbiAgICB9XG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyog0JDQsdGB0L7Qu9GO0YLQvdC+0LUg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LUgKi9cbiAgICAgIGxlZnQ6IDMwJTtcbiAgICAgIHRvcDogMTAwJTsgLyog0J/QvtC70L7QttC10L3QuNC1INC/0L7QtNGB0LrQsNC30LrQuCAqL1xuICAgICAgei1pbmRleDogMTsgLyog0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L/QvtC00YHQutCw0LfQutGDINC/0L7QstC10YDRhSDQtNGA0YPQs9C40YUg0Y3Qu9C10LzQtdC90YLQvtCyICovXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyMzAsIDAuOSk7IC8qINCf0L7Qu9GD0L/RgNC+0LfRgNCw0YfQvdGL0Lkg0YbQstC10YIg0YTQvtC90LAgKi9cbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgLyog0JPQsNGA0L3QuNGC0YPRgNCwINGI0YDQuNGE0YLQsCAqL1xuICAgICAgZm9udC1zaXplOiAxMXB4OyAvKiDQoNCw0LfQvNC10YAg0YLQtdC60YHRgtCwINC/0L7QtNGB0LrQsNC30LrQuCAqL1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7IC8qINCf0L7Qu9GPICovXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzOyAvKiDQn9Cw0YDQsNC80LXRgtGA0Ysg0YDQsNC80LrQuCAqL1xuICAgIH1cbiAgfVxufVxuLmNvbG9ycyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAuY3VycmVudCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAxO1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUyLCAxNzcsIDMpO1xuICAgIH1cbiAgfVxuICAucHJldiB7XG4gICAgbWFyZ2luLXRvcDogLTUwJTtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MiwgMTc3LCAzKTtcbiAgICB9XG4gIH1cbiAgLmNoYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnNlbGVjdGVkUGVuIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjUyLCAxNzcsIDMpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/tools-panel/tools-panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/tools-panel/tools-panel.component.ts ***!
    \******************************************************/

  /*! exports provided: ToolsPanelComponent */

  /***/
  function srcAppToolsPanelToolsPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolsPanelComponent", function () {
      return ToolsPanelComponent;
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


    var _services_state_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state-app.service */
    "./src/app/services/state-app.service.ts");

    var ToolsPanelComponent =
    /*#__PURE__*/
    function () {
      function ToolsPanelComponent(stateApp) {
        _classCallCheck(this, ToolsPanelComponent);

        this.stateApp = stateApp;
        this.selectedPen = false;
        this.selectedEraser = false;
        this.selectedBucket = false;
        this.selectedStroke = false;
        this.state = this.stateApp.state;
      }

      _createClass(ToolsPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var div = document.querySelector('.prev');
          div.style.backgroundColor = this.state.previousColor;
          div = document.querySelector('.current');
          div.style.backgroundColor = this.state.currentColor;
          this.selectedTool();
        }
      }, {
        key: "chooseTools",
        value: function chooseTools(ev) {
          var btnTools = ev.target.closest('div');
          console.log(btnTools.className);

          switch (btnTools.className) {
            case 'tool pen':
              this.state.currentTool = 'Pen';
              break;

            case 'tool bucket':
              this.state.currentTool = 'Bucket';
              break;

            case 'tool eraser':
              this.state.currentTool = 'Eraser';
              break;

            case 'tool stroke':
              this.state.currentTool = 'Stroke';
              break;

            default:
              break;
          }

          this.stateApp.save(this.state);
          this.selectedTool();
        }
      }, {
        key: "chooseSizePen",
        value: function chooseSizePen(ev) {
          var btnSizePen = ev.target.closest('div');
          console.log(btnSizePen.className);

          switch (btnSizePen.className) {
            case 'btn pixel1':
              this.state.penSize = 1;
              break;

            case 'btn pixel2':
              this.state.penSize = 2;
              break;

            case 'btn pixel3':
              this.state.penSize = 3;
              break;

            case 'btn pixel4':
              this.state.penSize = 4;
              break;

            default:
              break;
          }

          this.stateApp.save(this.state);
        }
      }, {
        key: "chooseColors",
        value: function chooseColors(ev) {
          var btnChooseColors = ev.target.closest('div');
          console.log(btnChooseColors.className);

          switch (btnChooseColors.className) {
            case 'current':
              this.state.penSize = 1;
              break;

            case 'prev':
              this.state.penSize = 2;
              break;
          }

          this.stateApp.save(this.state);
        }
      }, {
        key: "changeColorCurrent",
        value: function changeColorCurrent(ev) {
          console.log(ev.target.value);
          var div = document.querySelector('.current');
          div.style.backgroundColor = ev.target.value;
          this.state.currentColor = ev.target.value;
          this.stateApp.save(this.state);
        }
      }, {
        key: "changeColorPrev",
        value: function changeColorPrev(ev) {
          console.log(ev.target.value);
          var div = document.querySelector('.prev');
          div.style.backgroundColor = ev.target.value;
          this.state.previousColor = ev.target.value;
          this.stateApp.save(this.state);
        }
      }, {
        key: "changeCurrentPrev",
        value: function changeCurrentPrev() {
          var temp = this.state.previousColor;
          var div = document.querySelector('.prev');
          div.style.backgroundColor = this.state.currentColor;
          this.state.previousColor = this.state.currentColor;
          div = document.querySelector('.current');
          div.style.backgroundColor = temp;
          this.state.currentColor = temp;
          this.stateApp.save(this.state);
        }
      }, {
        key: "selectedTool",
        value: function selectedTool() {
          this.selectedBucket = false;
          this.selectedPen = false;
          this.selectedEraser = false;
          this.selectedStroke = false;

          switch (this.stateApp.state.currentTool) {
            case 'Pen':
              this.selectedPen = true;
              break;

            case 'Eraser':
              this.selectedEraser = true;
              break;

            case 'Bucket':
              this.selectedBucket = true;
              break;

            case 'Stroke':
              this.selectedStroke = true;
              break;

            default:
              break;
          }
        }
      }]);

      return ToolsPanelComponent;
    }();

    ToolsPanelComponent.ctorParameters = function () {
      return [{
        type: _services_state_app_service__WEBPACK_IMPORTED_MODULE_2__["StateAppService"]
      }];
    };

    ToolsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tools-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tools-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tools-panel/tools-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tools-panel.component.scss */
      "./src/app/tools-panel/tools-panel.component.scss")).default]
    })], ToolsPanelComponent);
    /***/
  },

  /***/
  "./src/assets/js/gif.js":
  /*!******************************!*\
    !*** ./src/assets/js/gif.js ***!
    \******************************/

  /*! no static exports found */

  /***/
  function srcAssetsJsGifJs(module, exports, __webpack_require__) {
    !function (t, e) {
      true ? module.exports = e() : undefined;
    }(this, function () {
      return function (t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
          };
          return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0);
      }([function (t, e, i) {
        var n,
            r,
            s,
            o = function o(t, e) {
          function i() {
            this.constructor = t;
          }

          for (var n in e) {
            a.call(e, n) && (t[n] = e[n]);
          }

          return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
        },
            a = {}.hasOwnProperty,
            h = [].indexOf || function (t) {
          for (var e = 0, i = this.length; e < i; e++) {
            if (e in this && this[e] === t) return e;
          }

          return -1;
        };

        n = i(1).EventEmitter, s = i(2), r = function (t) {
          function e(t) {
            var e, n, r;
            this.running = !1, this.options = {}, this.frames = [], this.groups = new Map(), this.freeWorkers = [], this.activeWorkers = [], this.setOptions(t);

            for (n in i) {
              r = i[n], null == (e = this.options)[n] && (e[n] = r);
            }
          }

          var i, n;
          return o(e, t), i = {
            workerScript: "gif.worker.js",
            workers: 2,
            repeat: 0,
            background: "#fff",
            quality: 10,
            width: null,
            height: null,
            transparent: null,
            debug: !1
          }, n = {
            delay: 500,
            copy: !1
          }, e.prototype.setOption = function (t, e) {
            if (this.options[t] = e, null != this._canvas && ("width" === t || "height" === t)) return this._canvas[t] = e;
          }, e.prototype.setOptions = function (t) {
            var e, i, n;
            i = [];

            for (e in t) {
              a.call(t, e) && (n = t[e], i.push(this.setOption(e, n)));
            }

            return i;
          }, e.prototype.addFrame = function (t, e) {
            var i, r, s;
            null == e && (e = {}), i = {}, i.transparent = this.options.transparent;

            for (s in n) {
              i[s] = e[s] || n[s];
            }

            if (null == this.options.width && this.setOption("width", t.width), null == this.options.height && this.setOption("height", t.height), "undefined" != typeof ImageData && null !== ImageData && t instanceof ImageData) i.data = t.data;else if ("undefined" != typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && t instanceof CanvasRenderingContext2D || "undefined" != typeof WebGLRenderingContext && null !== WebGLRenderingContext && t instanceof WebGLRenderingContext) e.copy ? i.data = this.getContextData(t) : i.context = t;else {
              if (null == t.childNodes) throw new Error("Invalid image");
              e.copy ? i.data = this.getImageData(t) : i.image = t;
            }
            return r = this.frames.length, r > 0 && i.data && (this.groups.has(i.data) ? this.groups.get(i.data).push(r) : this.groups.set(i.data, [r])), this.frames.push(i);
          }, e.prototype.render = function () {
            var t, e, i, n;
            if (this.running) throw new Error("Already running");
            if (null == this.options.width || null == this.options.height) throw new Error("Width and height must be set prior to rendering");
            if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function () {
              var e, i, n;

              for (n = [], t = e = 0, i = this.frames.length; 0 <= i ? e < i : e > i; t = 0 <= i ? ++e : --e) {
                n.push(null);
              }

              return n;
            }.call(this), i = this.spawnWorkers(), this.options.globalPalette === !0) this.renderNextFrame();else for (t = e = 0, n = i; 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) {
              this.renderNextFrame();
            }
            return this.emit("start"), this.emit("progress", 0);
          }, e.prototype.abort = function () {
            for (var t;;) {
              if (t = this.activeWorkers.shift(), null == t) break;
              this.log("killing active worker"), t.terminate();
            }

            return this.running = !1, this.emit("abort");
          }, e.prototype.spawnWorkers = function () {
            var t, e, i;
            return t = Math.min(this.options.workers, this.frames.length), function () {
              i = [];

              for (var n = e = this.freeWorkers.length; e <= t ? n < t : n > t; e <= t ? n++ : n--) {
                i.push(n);
              }

              return i;
            }.apply(this).forEach(function (t) {
              return function (e) {
                var i;
                return t.log("spawning worker " + e), i = new Worker(t.options.workerScript), i.onmessage = function (e) {
                  return t.activeWorkers.splice(t.activeWorkers.indexOf(i), 1), t.freeWorkers.push(i), t.frameFinished(e.data, !1);
                }, t.freeWorkers.push(i);
              };
            }(this)), t;
          }, e.prototype.frameFinished = function (t, e) {
            var i, n, r, s, o;
            if (this.finishedFrames++, e ? (n = this.frames.indexOf(t), r = this.groups.get(t.data)[0], this.log("frame " + (n + 1) + " is duplicate of " + r + " - " + this.activeWorkers.length + " active"), this.imageParts[n] = {
              indexOfFirstInGroup: r
            }) : (this.log("frame " + (t.index + 1) + " finished - " + this.activeWorkers.length + " active"), this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[t.index] = t), this.options.globalPalette === !0 && !e && (this.options.globalPalette = t.globalPalette, this.log("global palette analyzed"), this.frames.length > 2)) for (i = s = 1, o = this.freeWorkers.length; 1 <= o ? s < o : s > o; i = 1 <= o ? ++s : --s) {
              this.renderNextFrame();
            }
            return h.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering();
          }, e.prototype.finishRendering = function () {
            var t, e, i, n, r, s, o, a, h, l, f, p, u, d, c, g, v, m, y, _;

            for (v = this.imageParts, r = s = 0, l = v.length; s < l; r = ++s) {
              e = v[r], e.indexOfFirstInGroup && (this.imageParts[r] = this.imageParts[e.indexOfFirstInGroup]);
            }

            for (h = 0, m = this.imageParts, o = 0, f = m.length; o < f; o++) {
              e = m[o], h += (e.data.length - 1) * e.pageSize + e.cursor;
            }

            for (h += e.pageSize - e.cursor, this.log("rendering finished - filesize " + Math.round(h / 1e3) + "kb"), t = new Uint8Array(h), c = 0, y = this.imageParts, a = 0, p = y.length; a < p; a++) {
              for (e = y[a], _ = e.data, i = d = 0, u = _.length; d < u; i = ++d) {
                g = _[i], t.set(g, c), c += i === e.data.length - 1 ? e.cursor : e.pageSize;
              }
            }

            return n = new Blob([t], {
              type: "image/gif"
            }), this.emit("finished", n, t);
          }, e.prototype.renderNextFrame = function () {
            var t, e, i, n;
            if (0 === this.freeWorkers.length) throw new Error("No free workers");
            if (!(this.nextFrame >= this.frames.length)) return t = this.frames[this.nextFrame++], e = this.frames.indexOf(t), e > 0 && this.groups.has(t.data) && this.groups.get(t.data)[0] !== e ? void setTimeout(function (e) {
              return function () {
                return e.frameFinished(t, !0);
              };
            }(this), 0) : (n = this.freeWorkers.shift(), i = this.getTask(t), this.log("starting frame " + (i.index + 1) + " of " + this.frames.length), this.activeWorkers.push(n), n.postMessage(i));
          }, e.prototype.getContextData = function (t) {
            return t.getImageData(0, 0, this.options.width, this.options.height).data;
          }, e.prototype.getImageData = function (t) {
            var e;
            return null == this._canvas && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), e = this._canvas.getContext("2d"), e.setFill = this.options.background, e.fillRect(0, 0, this.options.width, this.options.height), e.drawImage(t, 0, 0), this.getContextData(e);
          }, e.prototype.getTask = function (t) {
            var e, i;
            if (e = this.frames.indexOf(t), i = {
              index: e,
              last: e === this.frames.length - 1,
              delay: t.delay,
              transparent: t.transparent,
              width: this.options.width,
              height: this.options.height,
              quality: this.options.quality,
              dither: this.options.dither,
              globalPalette: this.options.globalPalette,
              repeat: this.options.repeat,
              canTransfer: !0
            }, null != t.data) i.data = t.data;else if (null != t.context) i.data = this.getContextData(t.context);else {
              if (null == t.image) throw new Error("Invalid frame");
              i.data = this.getImageData(t.image);
            }
            return i;
          }, e.prototype.log = function (t) {
            if (this.options.debug) return console.log(t);
          }, e;
        }(n), t.exports = r;
      }, function (t, e) {
        function i() {
          this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
        }

        function n(t) {
          return "function" == typeof t;
        }

        function r(t) {
          return "number" == typeof t;
        }

        function s(t) {
          return "object" == typeof t && null !== t;
        }

        function o(t) {
          return void 0 === t;
        }

        t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function (t) {
          if (!r(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
          return this._maxListeners = t, this;
        }, i.prototype.emit = function (t) {
          var e, i, r, a, h, l;

          if (this._events || (this._events = {}), "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1], e instanceof Error) throw e;
            var f = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw f.context = e, f;
          }

          if (i = this._events[t], o(i)) return !1;
          if (n(i)) switch (arguments.length) {
            case 1:
              i.call(this);
              break;

            case 2:
              i.call(this, arguments[1]);
              break;

            case 3:
              i.call(this, arguments[1], arguments[2]);
              break;

            default:
              a = Array.prototype.slice.call(arguments, 1), i.apply(this, a);
          } else if (s(i)) for (a = Array.prototype.slice.call(arguments, 1), l = i.slice(), r = l.length, h = 0; h < r; h++) {
            l[h].apply(this, a);
          }
          return !0;
        }, i.prototype.addListener = function (t, e) {
          var r;
          if (!n(e)) throw TypeError("listener must be a function");
          return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? s(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, s(this._events[t]) && !this._events[t].warned && (r = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this;
        }, i.prototype.on = i.prototype.addListener, i.prototype.once = function (t, e) {
          function i() {
            this.removeListener(t, i), r || (r = !0, e.apply(this, arguments));
          }

          if (!n(e)) throw TypeError("listener must be a function");
          var r = !1;
          return i.listener = e, this.on(t, i), this;
        }, i.prototype.removeListener = function (t, e) {
          var i, r, o, a;
          if (!n(e)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[t]) return this;
          if (i = this._events[t], o = i.length, r = -1, i === e || n(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (s(i)) {
            for (a = o; a-- > 0;) {
              if (i[a] === e || i[a].listener && i[a].listener === e) {
                r = a;
                break;
              }
            }

            if (r < 0) return this;
            1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e);
          }
          return this;
        }, i.prototype.removeAllListeners = function (t) {
          var e, i;
          if (!this._events) return this;
          if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;

          if (0 === arguments.length) {
            for (e in this._events) {
              "removeListener" !== e && this.removeAllListeners(e);
            }

            return this.removeAllListeners("removeListener"), this._events = {}, this;
          }

          if (i = this._events[t], n(i)) this.removeListener(t, i);else if (i) for (; i.length;) {
            this.removeListener(t, i[i.length - 1]);
          }
          return delete this._events[t], this;
        }, i.prototype.listeners = function (t) {
          var e;
          return e = this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
        }, i.prototype.listenerCount = function (t) {
          if (this._events) {
            var e = this._events[t];
            if (n(e)) return 1;
            if (e) return e.length;
          }

          return 0;
        }, i.listenerCount = function (t, e) {
          return t.listenerCount(e);
        };
      }, function (t, e) {
        var i, n, r, s, o;
        o = navigator.userAgent.toLowerCase(), s = navigator.platform.toLowerCase(), i = o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], r = "ie" === i[1] && document.documentMode, n = {
          name: "version" === i[1] ? i[3] : i[1],
          version: r || parseFloat("opera" === i[1] && i[4] ? i[4] : i[2]),
          platform: {
            name: o.match(/ip(?:ad|od|hone)/) ? "ios" : (o.match(/(?:webos|android)/) || s.match(/mac|win|linux/) || ["other"])[0]
          }
        }, n[n.name] = !0, n[n.name + parseInt(n.version, 10)] = !0, n.platform[n.platform.name] = !0, t.exports = n;
      }]);
    }); //# sourceMappingURL=gif.js.map

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alexander/Documents/RSS_2019/babtsoualiaksandr-RS2019Q3/simple-piskel-clone/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map