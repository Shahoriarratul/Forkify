// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kYpTN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js"); // window.addEventListener('hashchange', controlRecipes);
 // window.addEventListener('load', controlRecipes);
var _modelJs = require("./model.js");
var _runtime = require("regenerator-runtime/runtime");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
// /////////////////////////////////////
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        console.log(id);
        if (!id) return;
        // loadingr recepie
        (0, _recipeViewJsDefault.default).renderSpinner();
        await _modelJs.loadRecipe(id);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        alert(err);
    }
};
[
    "hashchange",
    "load"
].forEach((ev)=>window.addEventListener(ev, controlRecipes));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./model.js":"Y4A21","./views/recipeView.js":"l60JC"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var global = require("22a078687be7e1b6");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","22a078687be7e1b6":"i8HOC","84ba5ca62b8b14c9":"7jDg7"}],"dIGt4":[function(require,module,exports) {
"use strict";
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"6643b6592ad59b23":"i8HOC","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
var $documentAll = require("319a7447e596d6da");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn","319a7447e596d6da":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
"use strict";
var $documentAll = require("ca3b3b4ae4b8328f");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"ca3b3b4ae4b8328f":"5MHqB"}],"5MHqB":[function(require,module,exports) {
"use strict";
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var global = require("dd9e9ae04e8684f7");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"dd9e9ae04e8684f7":"i8HOC","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ecc4d354cb42bea8");
var fails = require("b37df495bcdc1d99");
var global = require("d8adff9188ad5fee");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"ecc4d354cb42bea8":"bjFlO","b37df495bcdc1d99":"hL6D2","d8adff9188ad5fee":"i8HOC"}],"bjFlO":[function(require,module,exports) {
"use strict";
var global = require("705d79ce07ed8cf");
var userAgent = require("5afb83a49cd74e4c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"705d79ce07ed8cf":"i8HOC","5afb83a49cd74e4c":"73xBt"}],"73xBt":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var global = require("dbe74e87464035e3");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dbe74e87464035e3":"i8HOC","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var IS_PURE = require("fe5f96cb4b2826a2");
var store = require("84eeed9891aafe14");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.33.3",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"fe5f96cb4b2826a2":"5ZsyC","84eeed9891aafe14":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
"use strict";
var global = require("8756de416b94afec");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"8756de416b94afec":"i8HOC","dfb72a1d809f7b02":"ggjnO"}],"ggjnO":[function(require,module,exports) {
"use strict";
var global = require("70259c1dd4aa0e14");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"70259c1dd4aa0e14":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"i8HOC","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","ca46b44b6201ccd7":"i8HOC","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var global = require("6bd2547a42528a9c");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6bd2547a42528a9c":"i8HOC","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
"use strict";
var global = require("1e8ed58235e9956a");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("fdfdeccf85e81d4f");
var IS_NODE = require("fcf929779abbf29c");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"i8HOC","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","fdfdeccf85e81d4f":"bzGah","fcf929779abbf29c":"2Jcp4"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
"use strict";
var userAgent = require("d96985a79ddda108");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"73xBt"}],"2Jcp4":[function(require,module,exports) {
"use strict";
var global = require("1b4555a3a97d5ef1");
var classof = require("779f783a397f138");
module.exports = classof(global.process) === "process";

},{"1b4555a3a97d5ef1":"i8HOC","779f783a397f138":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var global = require("9a84e40db4964af6");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","9a84e40db4964af6":"i8HOC","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("373dd417176da2c5");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENGINE_IS_BUN = require("7679d27a979f2651");
var USER_AGENT = require("7493ba8d8bb8623d");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"373dd417176da2c5":"i8HOC","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","7679d27a979f2651":"2BA6V","7493ba8d8bb8623d":"73xBt","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"2BA6V":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    recipe: {}
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/${id}`);
        // console.log(res, data);
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            serving: recipe.serving,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(state.recipe);
    } catch (err) {
        alert(err);
    }
};

},{"regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs","./helper.js":"lVRAz"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _lmdb = require("lmdb");
const getJSON = async function(url) {
    try {
        const res = await fetch(url);
        //   `${API_URL}/${id}`
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}(${res.status})`);
        return data;
    } catch (err) {
        console.err(`${err} generated error`);
    }
};

},{"lmdb":"5Rjh1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Rjh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyValueToBuffer", ()=>(0, _orderedBinary.toBufferKey));
parcelHelpers.export(exports, "compareKeys", ()=>(0, _orderedBinary.compareKeys));
parcelHelpers.export(exports, "compareKey", ()=>(0, _orderedBinary.compareKeys));
parcelHelpers.export(exports, "bufferToKeyValue", ()=>(0, _orderedBinary.fromBufferKey));
parcelHelpers.export(exports, "ABORT", ()=>(0, _writeJs.ABORT));
parcelHelpers.export(exports, "IF_EXISTS", ()=>(0, _writeJs.IF_EXISTS));
parcelHelpers.export(exports, "asBinary", ()=>(0, _writeJs.asBinary));
parcelHelpers.export(exports, "levelup", ()=>(0, _levelJs.levelup));
parcelHelpers.export(exports, "SKIP", ()=>(0, _rangeIterableJs.SKIP));
parcelHelpers.export(exports, "clearKeptObjects", ()=>(0, _nativeJs.clearKeptObjects));
parcelHelpers.export(exports, "open", ()=>(0, _openJs.open));
parcelHelpers.export(exports, "openAsClass", ()=>(0, _openJs.openAsClass));
parcelHelpers.export(exports, "getLastVersion", ()=>(0, _openJs.getLastVersion));
parcelHelpers.export(exports, "allDbs", ()=>(0, _openJs.allDbs));
parcelHelpers.export(exports, "getLastTxnId", ()=>(0, _openJs.getLastTxnId));
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "TransactionFlags", ()=>TransactionFlags);
var _events = require("events");
var _nativeJs = require("./native.js");
var _os = require("os");
var _fs = require("fs");
var _fsDefault = parcelHelpers.interopDefault(_fs);
var _msgpackr = require("msgpackr");
var _weakLruCache = require("weak-lru-cache");
var _orderedBinary = require("ordered-binary");
var _writeJs = require("./write.js");
var _levelJs = require("./level.js");
var _rangeIterableJs = require("./util/RangeIterable.js");
var _openJs = require("./open.js");
var process = require("c10aa36047b4389f");
_orderedBinary.enableNullTermination();
(0, _nativeJs.setExternals)({
    arch: (0, _os.arch),
    fs: (0, _fsDefault.default),
    tmpdir: (0, _os.tmpdir),
    MsgpackrEncoder: (0, _msgpackr.Encoder),
    WeakLRUCache: (0, _weakLruCache.WeakLRUCache),
    orderedBinary: _orderedBinary,
    EventEmitter: (0, _events.EventEmitter),
    os: (0, _os.platform)(),
    onExit (callback) {
        if (process.getMaxListeners() < process.listenerCount("exit") + 8) process.setMaxListeners(process.listenerCount("exit") + 8);
        process.on("exit", callback);
    }
});
let { noop } = (0, _nativeJs.nativeAddon);
const TransactionFlags = {
    ABORTABLE: 1,
    SYNCHRONOUS_COMMIT: 2,
    NO_SYNC_FLUSH: 0x10000
};
exports.default = {
    open: (0, _openJs.open),
    openAsClass: (0, _openJs.openAsClass),
    getLastVersion: (0, _openJs.getLastVersion),
    compareKey: (0, _orderedBinary.compareKeys),
    keyValueToBuffer: (0, _orderedBinary.toBufferKey),
    bufferToKeyValue: (0, _orderedBinary.fromBufferKey),
    ABORT: (0, _writeJs.ABORT),
    IF_EXISTS: (0, _writeJs.IF_EXISTS),
    asBinary: (0, _writeJs.asBinary),
    levelup: (0, _levelJs.levelup),
    TransactionFlags
};

},{"c10aa36047b4389f":"d5jf4","events":"1VQLm","./native.js":"3MbZY","os":"6yyXu","fs":"jhUEF","msgpackr":"8jdmB","weak-lru-cache":"lmmMY","ordered-binary":"3onYt","./write.js":"hV0g9","./level.js":"2xKON","./util/RangeIterable.js":"7rZDA","./open.js":"4ru6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"3MbZY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Env", ()=>Env);
parcelHelpers.export(exports, "Txn", ()=>Txn);
parcelHelpers.export(exports, "Dbi", ()=>Dbi);
parcelHelpers.export(exports, "Compression", ()=>Compression);
parcelHelpers.export(exports, "Cursor", ()=>Cursor);
parcelHelpers.export(exports, "getAddress", ()=>getAddress);
parcelHelpers.export(exports, "getBufferAddress", ()=>getBufferAddress);
parcelHelpers.export(exports, "createBufferForAddress", ()=>createBufferForAddress);
parcelHelpers.export(exports, "clearKeptObjects", ()=>clearKeptObjects);
parcelHelpers.export(exports, "globalBuffer", ()=>globalBuffer);
parcelHelpers.export(exports, "setGlobalBuffer", ()=>setGlobalBuffer);
parcelHelpers.export(exports, "arch", ()=>arch);
parcelHelpers.export(exports, "fs", ()=>fs);
parcelHelpers.export(exports, "os", ()=>os);
parcelHelpers.export(exports, "onExit", ()=>onExit);
parcelHelpers.export(exports, "tmpdir", ()=>tmpdir);
parcelHelpers.export(exports, "lmdbError", ()=>lmdbError);
parcelHelpers.export(exports, "path", ()=>path);
parcelHelpers.export(exports, "EventEmitter", ()=>EventEmitter);
parcelHelpers.export(exports, "orderedBinary", ()=>orderedBinary);
parcelHelpers.export(exports, "MsgpackrEncoder", ()=>MsgpackrEncoder);
parcelHelpers.export(exports, "WeakLRUCache", ()=>WeakLRUCache);
parcelHelpers.export(exports, "setEnvMap", ()=>setEnvMap);
parcelHelpers.export(exports, "getEnvMap", ()=>getEnvMap);
parcelHelpers.export(exports, "getByBinary", ()=>getByBinary);
parcelHelpers.export(exports, "detachBuffer", ()=>detachBuffer);
parcelHelpers.export(exports, "startRead", ()=>startRead);
parcelHelpers.export(exports, "setReadCallback", ()=>setReadCallback);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "position", ()=>position);
parcelHelpers.export(exports, "iterate", ()=>iterate);
parcelHelpers.export(exports, "prefetch", ()=>prefetch);
parcelHelpers.export(exports, "resetTxn", ()=>resetTxn);
parcelHelpers.export(exports, "getCurrentValue", ()=>getCurrentValue);
parcelHelpers.export(exports, "getCurrentShared", ()=>getCurrentShared);
parcelHelpers.export(exports, "getStringByBinary", ()=>getStringByBinary);
parcelHelpers.export(exports, "getSharedByBinary", ()=>getSharedByBinary);
parcelHelpers.export(exports, "getSharedBuffer", ()=>getSharedBuffer);
parcelHelpers.export(exports, "compress", ()=>compress);
parcelHelpers.export(exports, "nativeAddon", ()=>nativeAddon);
parcelHelpers.export(exports, "setNativeFunctions", ()=>setNativeFunctions);
parcelHelpers.export(exports, "setExternals", ()=>setExternals);
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _url = require("url");
var _nodeGypBuildOptionalPackages = require("node-gyp-build-optional-packages");
var _nodeGypBuildOptionalPackagesDefault = parcelHelpers.interopDefault(_nodeGypBuildOptionalPackages);
var process = require("67fb5e023251d20f");
let Env, Txn, Dbi, Compression, Cursor, getAddress, getBufferAddress, createBufferForAddress, clearKeptObjects, globalBuffer, setGlobalBuffer, arch, fs, os, onExit, tmpdir, lmdbError, path, EventEmitter, orderedBinary, MsgpackrEncoder, WeakLRUCache, setEnvMap, getEnvMap, getByBinary, detachBuffer, startRead, setReadCallback, write, position, iterate, prefetch, resetTxn, getCurrentValue, getCurrentShared, getStringByBinary, getSharedByBinary, getSharedBuffer, compress;
path = (0, _pathDefault.default);
let dirName = (0, _path.dirname)((0, _url.fileURLToPath)("file:///node_modules/lmdb/native.js")).replace(/dist$/, "");
let nativeAddon = (0, _nodeGypBuildOptionalPackagesDefault.default)(dirName);
process.isBun;
setNativeFunctions(nativeAddon);
function setNativeFunctions(externals) {
    Env = externals.Env;
    Txn = externals.Txn;
    Dbi = externals.Dbi;
    Compression = externals.Compression;
    getAddress = externals.getAddress;
    getBufferAddress = externals.getBufferAddress;
    createBufferForAddress = externals.createBufferForAddress;
    clearKeptObjects = externals.clearKeptObjects || function() {};
    getByBinary = externals.getByBinary;
    detachBuffer = externals.detachBuffer;
    startRead = externals.startRead;
    setReadCallback = externals.setReadCallback;
    setGlobalBuffer = externals.setGlobalBuffer;
    globalBuffer = externals.globalBuffer;
    getSharedBuffer = externals.getSharedBuffer;
    prefetch = externals.prefetch;
    iterate = externals.iterate;
    position = externals.position;
    resetTxn = externals.resetTxn;
    getCurrentValue = externals.getCurrentValue;
    getCurrentShared = externals.getCurrentShared;
    getStringByBinary = externals.getStringByBinary;
    getSharedByBinary = externals.getSharedByBinary;
    write = externals.write;
    compress = externals.compress;
    Cursor = externals.Cursor;
    lmdbError = externals.lmdbError;
    if (externals.tmpdir) tmpdir = externals.tmpdir;
}
function setExternals(externals) {
    arch = externals.arch;
    fs = externals.fs;
    EventEmitter = externals.EventEmitter;
    orderedBinary = externals.orderedBinary;
    MsgpackrEncoder = externals.MsgpackrEncoder;
    WeakLRUCache = externals.WeakLRUCache;
    tmpdir = externals.tmpdir;
    os = externals.os;
    onExit = externals.onExit;
}

},{"67fb5e023251d20f":"d5jf4","path":"loE3o","url":"7qjc7","node-gyp-build-optional-packages":"8ELc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("c0743715070b1b8a");
"use strict";
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"c0743715070b1b8a":"d5jf4"}],"7qjc7":[function(require,module,exports) {
/*
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ "use strict";
var punycode = require("6aa635927f16f681");
function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
}
// Reference: RFC 3986, RFC 1808, RFC 2396
/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */ var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, /*
   * RFC 2396: characters reserved for delimiting URLs.
   * We actually just auto-escape these.
   */ delims = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "	"
], // RFC 2396: characters not allowed for various reasons.
unwise = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`"
].concat(delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = [
    "'"
].concat(unwise), /*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */ nonHostChars = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(autoEscape), hostEndingChars = [
    "/",
    "?",
    "#"
], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
    javascript: true,
    "javascript:": true
}, // protocols that never have a hostname.
hostlessProtocol = {
    javascript: true,
    "javascript:": true
}, // protocols that always contain a // bit.
slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
}, querystring = require("6724c84b9b69726b");
function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && typeof url === "object" && url instanceof Url) return url;
    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (typeof url !== "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    /*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */ var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url = uSplit.join(splitter);
    var rest = url;
    /*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */ rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
                else this.query = this.search.substr(1);
            } else if (parseQueryString) {
                this.search = "";
                this.query = {};
            }
            return this;
        }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
    }
    /*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */ if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
        var slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        /*
     * there's a hostname.
     * the first instance of /, ?, ;, or # ends the host.
     *
     * If there is an @ in the hostname, then non-host chars *are* allowed
     * to the left of the last @ sign, unless some host-ending character
     * comes *before* the @-sign.
     * URLs are obnoxious.
     *
     * ex:
     * http://a@b@c/ => user:a@b host:c
     * http://a@b?@c => user:a host:c path:/?@c
     */ /*
     * v0.12 TODO(isaacs): This is not quite how Chrome does things.
     * Review our test case against browsers more comprehensively.
     */ // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for(var i = 0; i < hostEndingChars.length; i++){
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        /*
     * at this point, either we have an explicit point where the
     * auth portion cannot go past, or the last @ char is the decider.
     */ var auth, atSign;
        if (hostEnd === -1) // atSign can be anywhere.
        atSign = rest.lastIndexOf("@");
        else /*
       * atSign must be in auth portion.
       * http://a@b/c@d => host:b auth:a path:/c@d
       */ atSign = rest.lastIndexOf("@", hostEnd);
        /*
     * Now we have a portion which is definitely the auth.
     * Pull that off.
     */ if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
        }
        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for(var i = 0; i < nonHostChars.length; i++){
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        // pull out port.
        this.parseHost();
        /*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */ this.hostname = this.hostname || "";
        /*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */ var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        // validate a little.
        if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for(var i = 0, l = hostparts.length; i < l; i++){
                var part = hostparts[i];
                if (!part) continue;
                if (!part.match(hostnamePartPattern)) {
                    var newpart = "";
                    for(var j = 0, k = part.length; j < k; j++)if (part.charCodeAt(j) > 127) /*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */ newpart += "x";
                    else newpart += part[j];
                    // we test again with ASCII char only
                    if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) rest = "/" + notHost.join(".") + rest;
                        this.hostname = validParts.join(".");
                        break;
                    }
                }
            }
        }
        if (this.hostname.length > hostnameMaxLen) this.hostname = "";
        else // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
        if (!ipv6Hostname) /*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */ this.hostname = punycode.toASCII(this.hostname);
        var p = this.port ? ":" + this.port : "";
        var h = this.hostname || "";
        this.host = h + p;
        this.href += this.host;
        /*
     * strip [ and ] from the hostname
     * the host field still retains them, though
     */ if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== "/") rest = "/" + rest;
        }
    }
    /*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */ if (!unsafeProtocol[lowerProto]) /*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */ for(var i = 0, l = autoEscape.length; i < l; i++){
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) esc = escape(ae);
        rest = rest.split(ae).join(esc);
    }
    // chop off from the tail first.
    var hash = rest.indexOf("#");
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) this.query = querystring.parse(this.query);
        rest = rest.slice(0, qm);
    } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = "";
        this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
    // to support http.request
    if (this.pathname || this.search) {
        var p = this.pathname || "";
        var s = this.search || "";
        this.path = p + s;
    }
    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
};
// format a parsed object into a url string
function urlFormat(obj) {
    /*
   * ensure it's an object, and not a string url.
   * If it's an obj, this is a no-op.
   * this way, you can call url_format() on strings
   * to clean up potentially wonky urls.
   */ if (typeof obj === "string") obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
}
Url.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) host = auth + this.host;
    else if (this.hostname) {
        host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
        if (this.port) host += ":" + this.port;
    }
    if (this.query && typeof this.query === "object" && Object.keys(this.query).length) query = querystring.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: false
    });
    var search = this.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":") protocol += ":";
    /*
   * only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
   * unless they had them to begin with.
   */ if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
    } else if (!host) host = "";
    if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
    if (search && search.charAt(0) !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
};
function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
}
Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
};
function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
}
Url.prototype.resolveObject = function(relative) {
    if (typeof relative === "string") {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for(var tk = 0; tk < tkeys.length; tk++){
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
    }
    /*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */ result.hash = relative.hash;
    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === "") {
        result.href = result.format();
        return result;
    }
    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for(var rk = 0; rk < rkeys.length; rk++){
            var rkey = rkeys[rk];
            if (rkey !== "protocol") result[rkey] = relative[rkey];
        }
        // urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
            result.pathname = "/";
            result.path = result.pathname;
        }
        result.href = result.format();
        return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
        /*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */ if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for(var v = 0; v < keys.length; v++){
                var k = keys[v];
                result[k] = relative[k];
            }
            result.href = result.format();
            return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || "").split("/");
            while(relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
        } else result.pathname = relative.pathname;
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
            var p = result.pathname || "";
            var s = result.search || "";
            result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    /*
   * if the url is a non-slashed url, then relative
   * links like ../.. should be able
   * to crawl up to the hostname, as well.  This is strange.
   * result.protocol has already been set by now.
   * Later on, put the first path part into the host field.
   */ if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    if (isRelAbs) {
        // it's absolute.
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
    // fall through to the dot-handling below.
    } else if (relPath.length) {
        /*
     * it's relative
     * throw away the existing file, and take the new path instead.
     */ if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
    } else if (relative.search != null) {
        /*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */ if (psychotic) {
            result.host = srcPath.shift();
            result.hostname = result.host;
            /*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */ var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.hostname = authInHost.shift();
                result.host = result.hostname;
            }
        }
        result.search = relative.search;
        result.query = relative.query;
        // to support http.request
        if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        result.href = result.format();
        return result;
    }
    if (!srcPath.length) {
        /*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */ result.pathname = null;
        // to support http.request
        if (result.search) result.path = "/" + result.search;
        else result.path = null;
        result.href = result.format();
        return result;
    }
    /*
   * if a url ENDs in . or .., then it must get a trailing slash.
   * however, if it ends in anything else non-slashy,
   * then it must NOT get a trailing slash.
   */ var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    /*
   * strip single dots, resolve double dots to parent dir
   * if the path tries to go above the root, `up` ends up > 0
   */ var up = 0;
    for(var i = srcPath.length; i >= 0; i--){
        last = srcPath[i];
        if (last === ".") srcPath.splice(i, 1);
        else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) for(; up--; up)srcPath.unshift("..");
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) srcPath.unshift("");
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") srcPath.push("");
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    // put the host back
    if (psychotic) {
        result.hostname = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        result.host = result.hostname;
        /*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */ var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.hostname = authInHost.shift();
            result.host = result.hostname;
        }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) srcPath.unshift("");
    if (srcPath.length > 0) result.pathname = srcPath.join("/");
    else {
        result.pathname = null;
        result.path = null;
    }
    // to support request.http
    if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
};
Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ":") this.port = port.substr(1);
        host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
};
exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;

},{"6aa635927f16f681":"4SwIZ","6724c84b9b69726b":"kW4GH"}],"4SwIZ":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    /** Detect free variables */ var freeExports = exports && !exports.nodeType && exports;
    var freeModule = module && !module.nodeType && module;
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
    /**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */ var punycode, /** Highest positive signed 32-bit float value */ maxInt = 2147483647, /** Bootstring parameters */ base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", /** Regular expressions */ regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, /** Error messages */ errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, /** Convenience shortcuts */ baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable */ key;
    /*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */ function error(type) {
        throw new RangeError(errors[type]);
    }
    /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */ function map(array, fn) {
        var length = array.length;
        var result = [];
        while(length--)result[length] = fn(array[length]);
        return result;
    }
    /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */ function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + "@";
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
    }
    /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */ function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while(counter < length){
            value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    }
    /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */ function ucs2encode(array) {
        return map(array, function(value) {
            var output = "";
            if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
            }
            output += stringFromCharCode(value);
            return output;
        }).join("");
    }
    /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */ function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) return codePoint - 22;
        if (codePoint - 65 < 26) return codePoint - 65;
        if (codePoint - 97 < 26) return codePoint - 97;
        return base;
    }
    /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */ function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */ function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */ function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results */ baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for(j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) error("not-basic");
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(index = basic > 0 ? basic + 1 : 0; index < inputLength;){
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for(oldi = i, w = 1, k = base;; k += base){
                if (index >= inputLength) error("invalid-input");
                digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) break;
                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) error("overflow");
                w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) error("overflow");
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
        }
        return ucs2encode(output);
    }
    /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */ function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`. */ inputLength, /** Cached calculation results */ handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for(j = 0; j < inputLength; ++j){
            currentValue = input[j];
            if (currentValue < 0x80) output.push(stringFromCharCode(currentValue));
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) output.push(delimiter);
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for(m = maxInt, j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) m = currentValue;
            }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for(j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue < n && ++delta > maxInt) error("overflow");
                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for(q = delta, k = base;; k += base){
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) break;
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join("");
    }
    /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */ function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    }
    /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */ function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
    }
    /*--------------------------------------------------------------------------*/ /** Define the public API */ punycode = {
        /**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */ "version": "1.4.1",
        /**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
    };
    /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function() {
        return punycode;
    });
    else if (freeExports && freeModule) {
        if (module.exports == freeExports) // in Node.js, io.js, or RingoJS v0.8.0+
        freeModule.exports = punycode;
        else // in Narwhal or RingoJS v0.7.0-
        for(key in punycode)punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
    } else // in Rhino or a web browser
    root.punycode = punycode;
})(this);

},{}],"kW4GH":[function(require,module,exports) {
"use strict";
var stringify = require("a472ccaa2f2351e9");
var parse = require("7ffa4249597bf32b");
var formats = require("454df9476704f887");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"a472ccaa2f2351e9":"aJuQi","7ffa4249597bf32b":"fSZqi","454df9476704f887":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
"use strict";
var getSideChannel = require("6246bbb805756d41");
var utils = require("44263cc7b702ebf");
var formats = require("929f8531a94a537c");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
            if (pos === step) throw new RangeError("Cyclic object value");
            else findFlag = true; // Break while
        }
        if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
    }
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, encoder);
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(",") || null : void 0
            }
        ];
    } else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += "utf8=%26%2310003%3B&";
        else // encodeURIComponent('✓')
        prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};

},{"6246bbb805756d41":"1zs9d","44263cc7b702ebf":"chmkc","929f8531a94a537c":"d7Ogf"}],"1zs9d":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("7911ec51a2dc9f3e");
var callBound = require("125062ab9035288f");
var inspect = require("9f4f5a92d8c6543");
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */ var listGetNode = function(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        curr.next = list.next;
        list.next = curr; // eslint-disable-line no-param-reassign
        return curr;
    }
};
var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = {
        key: key,
        next: objects.next,
        value: value
    };
};
var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
module.exports = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapGet($wm, key);
            } else if ($Map) {
                if ($m) return $mapGet($m, key);
            } else {
                if ($o) return listGet($o, key);
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapHas($wm, key);
            } else if ($Map) {
                if ($m) return $mapHas($m, key);
            } else {
                if ($o) return listHas($o, key);
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) $m = new $Map();
                $mapSet($m, key, value);
            } else {
                if (!$o) /*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */ $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

},{"7911ec51a2dc9f3e":"dZb05","125062ab9035288f":"5yYiF","9f4f5a92d8c6543":"kS3SE"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var hasProto = require("23730654306aa64c")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("af36d49b4b8c6c7c");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","af36d49b4b8c6c7c":"9Wb6f"}],"3dK91":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"euYk7"}],"euYk7":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"6eZiF":[function(require,module,exports) {
"use strict";
var test = {
    foo: {}
};
var $Object = Object;
module.exports = function hasProto() {
    return ({
        __proto__: test
    }).foo === test.foo && !(({
        __proto__: null
    }) instanceof $Object);
};

},{}],"6J4ob":[function(require,module,exports) {
"use strict";
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = "";
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"9Wb6f":[function(require,module,exports) {
"use strict";
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {(o: {}, p: PropertyKey) => p is keyof o} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"6J4ob"}],"5yYiF":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"bfo8D":[function(require,module,exports) {
"use strict";
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var setFunctionLength = require("f4b53071c102d4e");
var $TypeError = GetIntrinsic("%TypeError%");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05","f4b53071c102d4e":"9IKoX"}],"9IKoX":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b1c9107ef1524f2");
var define = require("37dd1486f0f556ef");
var hasDescriptors = require("6a9d2b46085df706")();
var gOPD = require("2d412b0f532d1834");
var $TypeError = GetIntrinsic("%TypeError%");
var $floor = GetIntrinsic("%Math.floor%");
module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
    if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) define(fn, "length", length, true, true);
        else define(fn, "length", length);
    }
    return fn;
};

},{"8b1c9107ef1524f2":"dZb05","37dd1486f0f556ef":"6cEff","6a9d2b46085df706":"esBLZ","2d412b0f532d1834":"eOTQB"}],"6cEff":[function(require,module,exports) {
"use strict";
var hasPropertyDescriptors = require("1ed580143eb408b3")();
var GetIntrinsic = require("971d0ad91a472750");
var $defineProperty = hasPropertyDescriptors && GetIntrinsic("%Object.defineProperty%", true);
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
var $SyntaxError = GetIntrinsic("%SyntaxError%");
var $TypeError = GetIntrinsic("%TypeError%");
var gopd = require("3f9bd39335781ec7");
/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
    if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
};

},{"1ed580143eb408b3":"esBLZ","971d0ad91a472750":"dZb05","3f9bd39335781ec7":"eOTQB"}],"esBLZ":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("b0bf8b8435d3abc");
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($defineProperty) try {
        $defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!hasPropertyDescriptors()) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"b0bf8b8435d3abc":"dZb05"}],"eOTQB":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("693e651525841e04");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"693e651525841e04":"dZb05"}],"kS3SE":[function(require,module,exports) {
var global = arguments[3];
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require("faefcb1694f2ad90");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") return "undefined";
    if (obj === null) return "null";
    if (typeof obj === "boolean") return obj ? "true" : "false";
    if (typeof obj === "string") return inspectString(obj, opts);
    if (typeof obj === "number") {
        if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") seen = [];
    else if (indexOf(seen, obj) >= 0) return "[Circular]";
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        s += ">";
        if (obj.childNodes && obj.childNodes.length) s += "...";
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return "[]";
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        if (parts.length === 0) return "[" + String(obj) + "]";
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
    if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
    if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
    if (obj === global) return "{ [object globalThis] }";
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) return tag + "{}";
        if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
}
function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
    if (typeof obj === "symbol") return true;
    if (!obj || typeof obj !== "object" || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== "object") return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== "object") return false;
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n];
    if (x) return "\\" + x;
    return "\\x" + (n < 0x10 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], "\n") >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") baseIndent = "	";
    else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return "";
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap["$" + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        else xs.push(key + ": " + inspect(obj[key], obj));
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"faefcb1694f2ad90":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"chmkc":[function(require,module,exports) {
"use strict";
var formats = require("7adf3674f81a2c87");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== "undefined") obj[i] = source[i];
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== "object") {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
         || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"7adf3674f81a2c87":"d7Ogf"}],"d7Ogf":[function(require,module,exports) {
"use strict";
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"fSZqi":[function(require,module,exports) {
"use strict";
var utils = require("e76649c95dd0e736");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) charset = "utf-8";
            else if (parts[i] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) return obj;
    return utils.compact(obj);
};

},{"e76649c95dd0e736":"chmkc"}],"8ELc9":[function(require,module,exports) {
var process = require("33e38241be2fa1a0");
var fs = require("d84752e7a7287403");
var path = require("a6f5c3323d6c68a6");
var url = require("98fbac61b1fbbefb");
var vars = process.config && process.config.variables || {};
var prebuildsOnly = false;
var versions = process.versions;
var abi = versions.modules;
if (versions.deno || process.isBun) // both Deno and Bun made the very poor decision to shoot themselves in the foot and lie about support for ABI
// (which they do not have)
abi = "unsupported";
var runtime = isElectron() ? "electron" : "node";
var arch = process.arch;
var platform = process.platform;
var libc = isMusl(platform) ? "musl" : "glibc";
var armv = (arch === "arm64" ? "8" : vars.arm_version) || "";
var uv = (versions.uv || "").split(".")[0];
module.exports = load;
function load(dir) {
    // Workaround to fix webpack's build warnings: 'the request of a dependency is an expression', but without
    // reassigning require in a way that breaks Bun.
    if (typeof __webpack_require__ === "function") return __non_webpack_require__(load.path(dir));
    else return require(load.path(dir));
}
load.path = function(dir) {
    dir = path.resolve(dir || ".");
    var packageName = "";
    try {
        // explanation above
        if (typeof __webpack_require__ === "function") packageName = __non_webpack_require__(path.join(dir, "package.json")).name;
        else packageName = require(path.join(dir, "package.json")).name;
        var varName = packageName.toUpperCase().replace(/-/g, "_") + "_PREBUILD";
        if (process.env[varName]) dir = process.env[varName];
    } catch (err) {}
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, "build/Release"), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, "build/Debug"), matchBuild);
        if (debug) return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild) return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby) return nearby;
    var platformPackage = (packageName[0] == "@" ? "" : "@" + packageName + "/") + packageName + "-" + platform + "-" + arch;
    try {
        var prebuildPackage = path.dirname(require("6286055dfdaaa125").createRequire(url.pathToFileURL(path.join(dir, "package.json"))).resolve(platformPackage));
        return resolveFile(prebuildPackage);
    } catch (error) {}
    var target = [
        "platform=" + platform,
        "arch=" + arch,
        "runtime=" + runtime,
        "abi=" + abi,
        "uv=" + uv,
        armv ? "armv=" + armv : "",
        "libc=" + libc,
        "node=" + process.versions.node,
        process.versions.electron ? "electron=" + process.versions.electron : "",
        typeof __webpack_require__ === "function" ? "webpack=true" : "" // eslint-disable-line
    ].filter(Boolean).join(" ");
    throw new Error("No native build was found for " + target + "\n    attempted loading from: " + dir + " and package:" + " " + platformPackage + "\n");
    function resolve(dir) {
        // Find matching "prebuilds/<platform>-<arch>" directory
        var tuples = readdirSync(path.join(dir, "prebuilds")).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        return resolveFile(path.join(dir, "prebuilds", tuple.name));
    }
    function resolveFile(prebuilds) {
        // Find most specific flavor first
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path.join(prebuilds, winner.file);
    }
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTuple(name) {
    // Example: darwin-x64+arm64
    var arr = name.split("-");
    if (arr.length !== 2) return;
    var platform = arr[0];
    var architectures = arr[1].split("+");
    if (!platform) return;
    if (!architectures.length) return;
    if (!architectures.every(Boolean)) return;
    return {
        name,
        platform,
        architectures
    };
}
function matchTuple(platform, arch) {
    return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform) return false;
        return tuple.architectures.includes(arch);
    };
}
function compareTuples(a, b) {
    // Prefer single-arch prebuilds over multi-arch
    return a.architectures.length - b.architectures.length;
}
function parseTags(file) {
    var arr = file.split(".");
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== "node") return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === "node" || tag === "electron" || tag === "node-webkit") tags.runtime = tag;
        else if (tag === "napi") tags.napi = true;
        else if (tag.slice(0, 3) === "abi") tags.abi = tag.slice(3);
        else if (tag.slice(0, 2) === "uv") tags.uv = tag.slice(2);
        else if (tag.slice(0, 4) === "armv") tags.armv = tag.slice(4);
        else if (tag === "glibc" || tag === "musl") tags.libc = tag;
        else continue;
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === "node" && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) return a.runtime === runtime ? -1 : 1;
        else if (a.abi !== b.abi) return a.abi ? -1 : 1;
        else if (a.specificity !== b.specificity) return a.specificity > b.specificity ? -1 : 1;
        else return 0;
    };
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    return typeof window !== "undefined" && window.process && window.process.type === "renderer";
}
function isMusl(platform) {
    if (platform !== "linux") return false;
    const { familySync, MUSL } = require("1a63c8823f9d2215");
    return familySync() === MUSL;
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;
load.parseTuple = parseTuple;
load.matchTuple = matchTuple;
load.compareTuples = compareTuples;

},{"33e38241be2fa1a0":"d5jf4","d84752e7a7287403":"jhUEF","a6f5c3323d6c68a6":"loE3o","98fbac61b1fbbefb":"7qjc7","6286055dfdaaa125":"jhUEF","1a63c8823f9d2215":"dQxre"}],"dQxre":[function(require,module,exports) {
// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0
"use strict";
const childProcess = require("1e726ebbd0c60b82");
const { isLinux, getReport } = require("db6fa999032ff62e");
const { LDD_PATH, readFile, readFileSync } = require("e13fb08bc1a02ccc");
let cachedFamilyFilesystem;
let cachedVersionFilesystem;
const command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
let commandOut = "";
const safeCommand = ()=>{
    if (!commandOut) return new Promise((resolve)=>{
        childProcess.exec(command, (err, out)=>{
            commandOut = err ? " " : out;
            resolve(commandOut);
        });
    });
    return commandOut;
};
const safeCommandSync = ()=>{
    if (!commandOut) try {
        commandOut = childProcess.execSync(command, {
            encoding: "utf8"
        });
    } catch (_err) {
        commandOut = " ";
    }
    return commandOut;
};
/**
 * A String constant containing the value `glibc`.
 * @type {string}
 * @public
 */ const GLIBC = "glibc";
/**
 * A Regexp constant to get the GLIBC Version.
 * @type {string}
 */ const RE_GLIBC_VERSION = /GLIBC\s(\d+\.\d+)/;
/**
 * A String constant containing the value `musl`.
 * @type {string}
 * @public
 */ const MUSL = "musl";
/**
 * This string is used to find if the {@link LDD_PATH} is GLIBC
 * @type {string}
 */ const GLIBC_ON_LDD = GLIBC.toUpperCase();
/**
 * This string is used to find if the {@link LDD_PATH} is musl
 * @type {string}
 */ const MUSL_ON_LDD = MUSL.toLowerCase();
const isFileMusl = (f)=>f.includes("libc.musl-") || f.includes("ld-musl-");
const familyFromReport = ()=>{
    const report = getReport();
    if (report.header && report.header.glibcVersionRuntime) return GLIBC;
    if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) return MUSL;
    }
    return null;
};
const familyFromCommand = (out)=>{
    const [getconf, ldd1] = out.split(/[\r\n]+/);
    if (getconf && getconf.includes(GLIBC)) return GLIBC;
    if (ldd1 && ldd1.includes(MUSL)) return MUSL;
    return null;
};
const getFamilyFromLddContent = (content)=>{
    if (content.includes(MUSL_ON_LDD)) return MUSL;
    if (content.includes(GLIBC_ON_LDD)) return GLIBC;
    return null;
};
const familyFromFilesystem = async ()=>{
    if (cachedFamilyFilesystem !== undefined) return cachedFamilyFilesystem;
    cachedFamilyFilesystem = null;
    try {
        const lddContent = await readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
    } catch (e) {}
    return cachedFamilyFilesystem;
};
const familyFromFilesystemSync = ()=>{
    if (cachedFamilyFilesystem !== undefined) return cachedFamilyFilesystem;
    cachedFamilyFilesystem = null;
    try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
    } catch (e) {}
    return cachedFamilyFilesystem;
};
/**
 * Resolves with the libc family when it can be determined, `null` otherwise.
 * @returns {Promise<?string>}
 */ const family = async ()=>{
    let family = null;
    if (isLinux()) {
        family = await familyFromFilesystem();
        if (!family) family = familyFromReport();
        if (!family) {
            const out = await safeCommand();
            family = familyFromCommand(out);
        }
    }
    return family;
};
/**
 * Returns the libc family when it can be determined, `null` otherwise.
 * @returns {?string}
 */ const familySync = ()=>{
    let family = null;
    if (isLinux()) {
        family = familyFromFilesystemSync();
        if (!family) family = familyFromReport();
        if (!family) {
            const out = safeCommandSync();
            family = familyFromCommand(out);
        }
    }
    return family;
};
/**
 * Resolves `true` only when the platform is Linux and the libc family is not `glibc`.
 * @returns {Promise<boolean>}
 */ const isNonGlibcLinux = async ()=>isLinux() && await family() !== GLIBC;
/**
 * Returns `true` only when the platform is Linux and the libc family is not `glibc`.
 * @returns {boolean}
 */ const isNonGlibcLinuxSync = ()=>isLinux() && familySync() !== GLIBC;
const versionFromFilesystem = async ()=>{
    if (cachedVersionFilesystem !== undefined) return cachedVersionFilesystem;
    cachedVersionFilesystem = null;
    try {
        const lddContent = await readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) cachedVersionFilesystem = versionMatch[1];
    } catch (e) {}
    return cachedVersionFilesystem;
};
const versionFromFilesystemSync = ()=>{
    if (cachedVersionFilesystem !== undefined) return cachedVersionFilesystem;
    cachedVersionFilesystem = null;
    try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) cachedVersionFilesystem = versionMatch[1];
    } catch (e) {}
    return cachedVersionFilesystem;
};
const versionFromReport = ()=>{
    const report = getReport();
    if (report.header && report.header.glibcVersionRuntime) return report.header.glibcVersionRuntime;
    return null;
};
const versionSuffix = (s)=>s.trim().split(/\s+/)[1];
const versionFromCommand = (out)=>{
    const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
    if (getconf && getconf.includes(GLIBC)) return versionSuffix(getconf);
    if (ldd1 && ldd2 && ldd1.includes(MUSL)) return versionSuffix(ldd2);
    return null;
};
/**
 * Resolves with the libc version when it can be determined, `null` otherwise.
 * @returns {Promise<?string>}
 */ const version = async ()=>{
    let version = null;
    if (isLinux()) {
        version = await versionFromFilesystem();
        if (!version) version = versionFromReport();
        if (!version) {
            const out = await safeCommand();
            version = versionFromCommand(out);
        }
    }
    return version;
};
/**
 * Returns the libc version when it can be determined, `null` otherwise.
 * @returns {?string}
 */ const versionSync = ()=>{
    let version = null;
    if (isLinux()) {
        version = versionFromFilesystemSync();
        if (!version) version = versionFromReport();
        if (!version) {
            const out = safeCommandSync();
            version = versionFromCommand(out);
        }
    }
    return version;
};
module.exports = {
    GLIBC,
    MUSL,
    family,
    familySync,
    isNonGlibcLinux,
    isNonGlibcLinuxSync,
    version,
    versionSync
};

},{"1e726ebbd0c60b82":"jhUEF","db6fa999032ff62e":"g1ZiN","e13fb08bc1a02ccc":"aQL29"}],"g1ZiN":[function(require,module,exports) {
// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0
var process = require("a6f218cff133b67f");
"use strict";
const isLinux = ()=>process.platform === "linux";
let report = null;
const getReport = ()=>{
    if (!report) /* istanbul ignore next */ report = isLinux() && process.report ? process.report.getReport() : {};
    return report;
};
module.exports = {
    isLinux,
    getReport
};

},{"a6f218cff133b67f":"d5jf4"}],"aQL29":[function(require,module,exports) {
// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0
"use strict";
const fs = require("5f5f1ea148076832");
/**
 * The path where we can find the ldd
 */ const LDD_PATH = "/usr/bin/ldd";
/**
 * Read the content of a file synchronous
 *
 * @param {string} path
 * @returns {string}
 */ const readFileSync = (path)=>fs.readFileSync(path, "utf-8");
/**
 * Read the content of a file
 *
 * @param {string} path
 * @returns {Promise<string>}
 */ const readFile = (path)=>new Promise((resolve, reject)=>{
        fs.readFile(path, "utf-8", (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
module.exports = {
    LDD_PATH,
    readFileSync,
    readFile
};

},{"5f5f1ea148076832":"jhUEF"}],"6yyXu":[function(require,module,exports) {
exports.endianness = function() {
    return "LE";
};
exports.hostname = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return "Browser";
};
exports.release = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {};
};
exports.arch = function() {
    return "javascript";
};
exports.platform = function() {
    return "browser";
};
exports.tmpdir = exports.tmpDir = function() {
    return "/tmp";
};
exports.EOL = "\n";
exports.homedir = function() {
    return "/";
};

},{}],"8jdmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Packr", ()=>(0, _packJs.Packr));
parcelHelpers.export(exports, "Encoder", ()=>(0, _packJs.Encoder));
parcelHelpers.export(exports, "addExtension", ()=>(0, _packJs.addExtension));
parcelHelpers.export(exports, "pack", ()=>(0, _packJs.pack));
parcelHelpers.export(exports, "encode", ()=>(0, _packJs.encode));
parcelHelpers.export(exports, "NEVER", ()=>(0, _packJs.NEVER));
parcelHelpers.export(exports, "ALWAYS", ()=>(0, _packJs.ALWAYS));
parcelHelpers.export(exports, "DECIMAL_ROUND", ()=>(0, _packJs.DECIMAL_ROUND));
parcelHelpers.export(exports, "DECIMAL_FIT", ()=>(0, _packJs.DECIMAL_FIT));
parcelHelpers.export(exports, "REUSE_BUFFER_MODE", ()=>(0, _packJs.REUSE_BUFFER_MODE));
parcelHelpers.export(exports, "Unpackr", ()=>(0, _unpackJs.Unpackr));
parcelHelpers.export(exports, "Decoder", ()=>(0, _unpackJs.Decoder));
parcelHelpers.export(exports, "C1", ()=>(0, _unpackJs.C1));
parcelHelpers.export(exports, "unpack", ()=>(0, _unpackJs.unpack));
parcelHelpers.export(exports, "unpackMultiple", ()=>(0, _unpackJs.unpackMultiple));
parcelHelpers.export(exports, "decode", ()=>(0, _unpackJs.decode));
parcelHelpers.export(exports, "FLOAT32_OPTIONS", ()=>(0, _unpackJs.FLOAT32_OPTIONS));
parcelHelpers.export(exports, "clearSource", ()=>(0, _unpackJs.clearSource));
parcelHelpers.export(exports, "roundFloat32", ()=>(0, _unpackJs.roundFloat32));
parcelHelpers.export(exports, "isNativeAccelerationEnabled", ()=>(0, _unpackJs.isNativeAccelerationEnabled));
parcelHelpers.export(exports, "decodeIter", ()=>(0, _iteratorsJs.decodeIter));
parcelHelpers.export(exports, "encodeIter", ()=>(0, _iteratorsJs.encodeIter));
parcelHelpers.export(exports, "useRecords", ()=>useRecords);
parcelHelpers.export(exports, "mapsAsObjects", ()=>mapsAsObjects);
var _packJs = require("./pack.js");
var _unpackJs = require("./unpack.js");
var _iteratorsJs = require("./iterators.js");
const useRecords = false;
const mapsAsObjects = true;

},{"./pack.js":"kgB08","./unpack.js":"hUNII","./iterators.js":"1Dasa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kgB08":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FLOAT32_OPTIONS", ()=>(0, _unpackJs.FLOAT32_OPTIONS));
parcelHelpers.export(exports, "RECORD_SYMBOL", ()=>RECORD_SYMBOL);
parcelHelpers.export(exports, "Packr", ()=>Packr);
parcelHelpers.export(exports, "addExtension", ()=>addExtension);
parcelHelpers.export(exports, "setWriteStructSlots", ()=>setWriteStructSlots);
parcelHelpers.export(exports, "pack", ()=>pack);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "Encoder", ()=>Encoder);
parcelHelpers.export(exports, "NEVER", ()=>NEVER);
parcelHelpers.export(exports, "ALWAYS", ()=>ALWAYS);
parcelHelpers.export(exports, "DECIMAL_ROUND", ()=>DECIMAL_ROUND);
parcelHelpers.export(exports, "DECIMAL_FIT", ()=>DECIMAL_FIT);
parcelHelpers.export(exports, "REUSE_BUFFER_MODE", ()=>REUSE_BUFFER_MODE);
parcelHelpers.export(exports, "RESET_BUFFER_MODE", ()=>RESET_BUFFER_MODE);
parcelHelpers.export(exports, "RESERVE_START_SPACE", ()=>RESERVE_START_SPACE);
var _unpackJs = require("./unpack.js");
var Buffer = require("d39b59f28483d155").Buffer;
let textEncoder;
try {
    textEncoder = new TextEncoder();
} catch (error) {}
let extensions, extensionClasses;
const hasNodeBuffer = typeof Buffer !== "undefined";
const ByteArrayAllocate = hasNodeBuffer ? function(length) {
    return Buffer.allocUnsafeSlow(length);
} : Uint8Array;
const ByteArray = hasNodeBuffer ? Buffer : Uint8Array;
const MAX_BUFFER_SIZE = hasNodeBuffer ? 0x100000000 : 0x7fd00000;
let target, keysTarget;
let targetView;
let position = 0;
let safeEnd;
let bundledStrings = null;
let writeStructSlots;
const MAX_BUNDLE_SIZE = 0x5500 // maximum characters such that the encoded bytes fits in 16 bits.
;
const hasNonLatin = /[\u0080-\uFFFF]/;
const RECORD_SYMBOL = Symbol("record-id");
class Packr extends (0, _unpackJs.Unpackr) {
    constructor(options){
        super(options);
        this.offset = 0;
        let typeBuffer;
        let start;
        let hasSharedUpdate;
        let structures;
        let referenceMap;
        let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position) {
            return target.utf8Write(string, position, 0xffffffff);
        } : textEncoder && textEncoder.encodeInto ? function(string, position) {
            return textEncoder.encodeInto(string, target.subarray(position)).written;
        } : false;
        let packr = this;
        if (!options) options = {};
        let isSequential = options && options.sequential;
        let hasSharedStructures = options.structures || options.saveStructures;
        let maxSharedStructures = options.maxSharedStructures;
        if (maxSharedStructures == null) maxSharedStructures = hasSharedStructures ? 32 : 0;
        if (maxSharedStructures > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        if (options.structuredClone && options.moreTypes == undefined) this.moreTypes = true;
        let maxOwnStructures = options.maxOwnStructures;
        if (maxOwnStructures == null) maxOwnStructures = hasSharedStructures ? 32 : 64;
        if (!this.structures && options.useRecords != false) this.structures = [];
        // two byte record ids for shared structures
        let useTwoByteRecords = maxSharedStructures > 32 || maxOwnStructures + maxSharedStructures > 64;
        let sharedLimitId = maxSharedStructures + 0x40;
        let maxStructureId = maxSharedStructures + maxOwnStructures + 0x40;
        if (maxStructureId > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let recordIdsToRemove = [];
        let transitionsCount = 0;
        let serializationsSinceTransitionRebuild = 0;
        this.pack = this.encode = function(value, encodeOptions) {
            if (!target) {
                target = new ByteArrayAllocate(8192);
                targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, 8192));
                position = 0;
            }
            safeEnd = target.length - 10;
            if (safeEnd - position < 0x800) {
                // don't start too close to the end, 
                target = new ByteArrayAllocate(target.length);
                targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length));
                safeEnd = target.length - 10;
                position = 0;
            } else position = position + 7 & 0x7ffffff8 // Word align to make any future copying of this buffer faster
            ;
            start = position;
            if (encodeOptions & RESERVE_START_SPACE) position += encodeOptions & 0xff;
            referenceMap = packr.structuredClone ? new Map() : null;
            if (packr.bundleStrings && typeof value !== "string") {
                bundledStrings = [];
                bundledStrings.size = Infinity // force a new bundle start on first string
                ;
            } else bundledStrings = null;
            structures = packr.structures;
            if (structures) {
                if (structures.uninitialized) structures = packr._mergeStructures(packr.getStructures());
                let sharedLength = structures.sharedLength || 0;
                if (sharedLength > maxSharedStructures) //if (maxSharedStructures <= 32 && structures.sharedLength > 32) // TODO: could support this, but would need to update the limit ids
                throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + structures.sharedLength);
                if (!structures.transitions) {
                    // rebuild our structure transitions
                    structures.transitions = Object.create(null);
                    for(let i = 0; i < sharedLength; i++){
                        let keys = structures[i];
                        if (!keys) continue;
                        let nextTransition, transition = structures.transitions;
                        for(let j = 0, l = keys.length; j < l; j++){
                            let key = keys[j];
                            nextTransition = transition[key];
                            if (!nextTransition) nextTransition = transition[key] = Object.create(null);
                            transition = nextTransition;
                        }
                        transition[RECORD_SYMBOL] = i + 0x40;
                    }
                    this.lastNamedStructuresLength = sharedLength;
                }
                if (!isSequential) structures.nextId = sharedLength + 0x40;
            }
            if (hasSharedUpdate) hasSharedUpdate = false;
            try {
                if (packr.randomAccessStructure && value && value.constructor && value.constructor === Object) writeStruct(value);
                else pack(value);
                let lastBundle = bundledStrings;
                if (bundledStrings) writeBundles(start, pack, 0);
                if (referenceMap && referenceMap.idsToInsert) {
                    let idsToInsert = referenceMap.idsToInsert.sort((a, b)=>a.offset > b.offset ? 1 : -1);
                    let i = idsToInsert.length;
                    let incrementPosition = -1;
                    while(lastBundle && i > 0){
                        let insertionPoint = idsToInsert[--i].offset + start;
                        if (insertionPoint < lastBundle.stringsPosition + start && incrementPosition === -1) incrementPosition = 0;
                        if (insertionPoint > lastBundle.position + start) {
                            if (incrementPosition >= 0) incrementPosition += 6;
                        } else {
                            if (incrementPosition >= 0) {
                                // update the bundle reference now
                                targetView.setUint32(lastBundle.position + start, targetView.getUint32(lastBundle.position + start) + incrementPosition);
                                incrementPosition = -1; // reset
                            }
                            lastBundle = lastBundle.previous;
                            i++;
                        }
                    }
                    if (incrementPosition >= 0 && lastBundle) // update the bundle reference now
                    targetView.setUint32(lastBundle.position + start, targetView.getUint32(lastBundle.position + start) + incrementPosition);
                    position += idsToInsert.length * 6;
                    if (position > safeEnd) makeRoom(position);
                    packr.offset = position;
                    let serialized = insertIds(target.subarray(start, position), idsToInsert);
                    referenceMap = null;
                    return serialized;
                }
                packr.offset = position // update the offset so next serialization doesn't write over our buffer, but can continue writing to same buffer sequentially
                ;
                if (encodeOptions & REUSE_BUFFER_MODE) {
                    target.start = start;
                    target.end = position;
                    return target;
                }
                return target.subarray(start, position) // position can change if we call pack again in saveStructures, so we get the buffer now
                ;
            } finally{
                if (structures) {
                    resetStructures();
                    if (hasSharedUpdate && packr.saveStructures) {
                        let sharedLength = structures.sharedLength || 0;
                        // we can't rely on start/end with REUSE_BUFFER_MODE since they will (probably) change when we save
                        let returnBuffer = target.subarray(start, position);
                        let newSharedData = prepareStructures(structures, packr);
                        if (packr.saveStructures(newSharedData, newSharedData.isCompatible) === false) // get updated structures and try again if the update failed
                        return packr.pack(value, encodeOptions);
                        packr.lastNamedStructuresLength = sharedLength;
                        return returnBuffer;
                    }
                }
                if (encodeOptions & RESET_BUFFER_MODE) position = start;
            }
        };
        const resetStructures = ()=>{
            if (serializationsSinceTransitionRebuild < 10) serializationsSinceTransitionRebuild++;
            let sharedLength = structures.sharedLength || 0;
            if (structures.length > sharedLength && !isSequential) structures.length = sharedLength;
            if (transitionsCount > 10000) {
                // force a rebuild occasionally after a lot of transitions so it can get cleaned up
                structures.transitions = null;
                serializationsSinceTransitionRebuild = 0;
                transitionsCount = 0;
                if (recordIdsToRemove.length > 0) recordIdsToRemove = [];
            } else if (recordIdsToRemove.length > 0 && !isSequential) {
                for(let i = 0, l = recordIdsToRemove.length; i < l; i++)recordIdsToRemove[i][RECORD_SYMBOL] = 0;
                recordIdsToRemove = [];
            }
        };
        const packArray = (value)=>{
            var length = value.length;
            if (length < 0x10) target[position++] = 0x90 | length;
            else if (length < 0x10000) {
                target[position++] = 0xdc;
                target[position++] = length >> 8;
                target[position++] = length & 0xff;
            } else {
                target[position++] = 0xdd;
                targetView.setUint32(position, length);
                position += 4;
            }
            for(let i = 0; i < length; i++)pack(value[i]);
        };
        const pack = (value)=>{
            if (position > safeEnd) target = makeRoom(position);
            var type = typeof value;
            var length;
            if (type === "string") {
                let strLength = value.length;
                if (bundledStrings && strLength >= 4 && strLength < 0x1000) {
                    if ((bundledStrings.size += strLength) > MAX_BUNDLE_SIZE) {
                        let extStart;
                        let maxBytes = (bundledStrings[0] ? bundledStrings[0].length * 3 + bundledStrings[1].length : 0) + 10;
                        if (position + maxBytes > safeEnd) target = makeRoom(position + maxBytes);
                        let lastBundle;
                        if (bundledStrings.position) {
                            lastBundle = bundledStrings;
                            target[position] = 0xc8 // ext 16
                            ;
                            position += 3 // reserve for the writing bundle size
                            ;
                            target[position++] = 0x62 // 'b'
                            ;
                            extStart = position - start;
                            position += 4 // reserve for writing bundle reference
                            ;
                            writeBundles(start, pack, 0) // write the last bundles
                            ;
                            targetView.setUint16(extStart + start - 3, position - start - extStart);
                        } else {
                            target[position++] = 0xd6 // fixext 4
                            ;
                            target[position++] = 0x62 // 'b'
                            ;
                            extStart = position - start;
                            position += 4 // reserve for writing bundle reference
                            ;
                        }
                        bundledStrings = [
                            "",
                            ""
                        ] // create new ones
                        ;
                        bundledStrings.previous = lastBundle;
                        bundledStrings.size = 0;
                        bundledStrings.position = extStart;
                    }
                    let twoByte = hasNonLatin.test(value);
                    bundledStrings[twoByte ? 0 : 1] += value;
                    target[position++] = 0xc1;
                    pack(twoByte ? -strLength : strLength);
                    return;
                }
                let headerSize;
                // first we estimate the header size, so we can write to the correct location
                if (strLength < 0x20) headerSize = 1;
                else if (strLength < 0x100) headerSize = 2;
                else if (strLength < 0x10000) headerSize = 3;
                else headerSize = 5;
                let maxBytes = strLength * 3;
                if (position + maxBytes > safeEnd) target = makeRoom(position + maxBytes);
                if (strLength < 0x40 || !encodeUtf8) {
                    let i, c1, c2, strPosition = position + headerSize;
                    for(i = 0; i < strLength; i++){
                        c1 = value.charCodeAt(i);
                        if (c1 < 0x80) target[strPosition++] = c1;
                        else if (c1 < 0x800) {
                            target[strPosition++] = c1 >> 6 | 0xc0;
                            target[strPosition++] = c1 & 0x3f | 0x80;
                        } else if ((c1 & 0xfc00) === 0xd800 && ((c2 = value.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
                            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
                            i++;
                            target[strPosition++] = c1 >> 18 | 0xf0;
                            target[strPosition++] = c1 >> 12 & 0x3f | 0x80;
                            target[strPosition++] = c1 >> 6 & 0x3f | 0x80;
                            target[strPosition++] = c1 & 0x3f | 0x80;
                        } else {
                            target[strPosition++] = c1 >> 12 | 0xe0;
                            target[strPosition++] = c1 >> 6 & 0x3f | 0x80;
                            target[strPosition++] = c1 & 0x3f | 0x80;
                        }
                    }
                    length = strPosition - position - headerSize;
                } else length = encodeUtf8(value, position + headerSize);
                if (length < 0x20) target[position++] = 0xa0 | length;
                else if (length < 0x100) {
                    if (headerSize < 2) target.copyWithin(position + 2, position + 1, position + 1 + length);
                    target[position++] = 0xd9;
                    target[position++] = length;
                } else if (length < 0x10000) {
                    if (headerSize < 3) target.copyWithin(position + 3, position + 2, position + 2 + length);
                    target[position++] = 0xda;
                    target[position++] = length >> 8;
                    target[position++] = length & 0xff;
                } else {
                    if (headerSize < 5) target.copyWithin(position + 5, position + 3, position + 3 + length);
                    target[position++] = 0xdb;
                    targetView.setUint32(position, length);
                    position += 4;
                }
                position += length;
            } else if (type === "number") {
                if (value >>> 0 === value) {
                    // positive uint
                    if (value < 0x20 || value < 0x80 && this.useRecords === false || value < 0x40 && !this.randomAccessStructure) target[position++] = value;
                    else if (value < 0x100) {
                        target[position++] = 0xcc;
                        target[position++] = value;
                    } else if (value < 0x10000) {
                        target[position++] = 0xcd;
                        target[position++] = value >> 8;
                        target[position++] = value & 0xff;
                    } else {
                        target[position++] = 0xce;
                        targetView.setUint32(position, value);
                        position += 4;
                    }
                } else if (value >> 0 === value) {
                    if (value >= -32) target[position++] = 0x100 + value;
                    else if (value >= -128) {
                        target[position++] = 0xd0;
                        target[position++] = value + 0x100;
                    } else if (value >= -32768) {
                        target[position++] = 0xd1;
                        targetView.setInt16(position, value);
                        position += 2;
                    } else {
                        target[position++] = 0xd2;
                        targetView.setInt32(position, value);
                        position += 4;
                    }
                } else {
                    let useFloat32;
                    if ((useFloat32 = this.useFloat32) > 0 && value < 0x100000000 && value >= -2147483648) {
                        target[position++] = 0xca;
                        targetView.setFloat32(position, value);
                        let xShifted;
                        if (useFloat32 < 4 || (xShifted = value * (0, _unpackJs.mult10)[(target[position] & 0x7f) << 1 | target[position + 1] >> 7]) >> 0 === xShifted) {
                            position += 4;
                            return;
                        } else position-- // move back into position for writing a double
                        ;
                    }
                    target[position++] = 0xcb;
                    targetView.setFloat64(position, value);
                    position += 8;
                }
            } else if (type === "object" || type === "function") {
                if (!value) target[position++] = 0xc0;
                else {
                    if (referenceMap) {
                        let referee = referenceMap.get(value);
                        if (referee) {
                            if (!referee.id) {
                                let idsToInsert = referenceMap.idsToInsert || (referenceMap.idsToInsert = []);
                                referee.id = idsToInsert.push(referee);
                            }
                            target[position++] = 0xd6 // fixext 4
                            ;
                            target[position++] = 0x70 // "p" for pointer
                            ;
                            targetView.setUint32(position, referee.id);
                            position += 4;
                            return;
                        } else referenceMap.set(value, {
                            offset: position - start
                        });
                    }
                    let constructor = value.constructor;
                    if (constructor === Object) writeObject(value, true);
                    else if (constructor === Array) packArray(value);
                    else if (constructor === Map) {
                        if (this.mapAsEmptyObject) target[position++] = 0x80;
                        else {
                            length = value.size;
                            if (length < 0x10) target[position++] = 0x80 | length;
                            else if (length < 0x10000) {
                                target[position++] = 0xde;
                                target[position++] = length >> 8;
                                target[position++] = length & 0xff;
                            } else {
                                target[position++] = 0xdf;
                                targetView.setUint32(position, length);
                                position += 4;
                            }
                            for (let [key, entryValue] of value){
                                pack(key);
                                pack(entryValue);
                            }
                        }
                    } else {
                        for(let i = 0, l = extensions.length; i < l; i++){
                            let extensionClass = extensionClasses[i];
                            if (value instanceof extensionClass) {
                                let extension = extensions[i];
                                if (extension.write) {
                                    if (extension.type) {
                                        target[position++] = 0xd4 // one byte "tag" extension
                                        ;
                                        target[position++] = extension.type;
                                        target[position++] = 0;
                                    }
                                    let writeResult = extension.write.call(this, value);
                                    if (writeResult === value) {
                                        if (Array.isArray(value)) packArray(value);
                                        else writeObject(value);
                                    } else pack(writeResult);
                                    return;
                                }
                                let currentTarget = target;
                                let currentTargetView = targetView;
                                let currentPosition = position;
                                target = null;
                                let result;
                                try {
                                    result = extension.pack.call(this, value, (size)=>{
                                        // restore target and use it
                                        target = currentTarget;
                                        currentTarget = null;
                                        position += size;
                                        if (position > safeEnd) makeRoom(position);
                                        return {
                                            target,
                                            targetView,
                                            position: position - size
                                        };
                                    }, pack);
                                } finally{
                                    // restore current target information (unless already restored)
                                    if (currentTarget) {
                                        target = currentTarget;
                                        targetView = currentTargetView;
                                        position = currentPosition;
                                        safeEnd = target.length - 10;
                                    }
                                }
                                if (result) {
                                    if (result.length + position > safeEnd) makeRoom(result.length + position);
                                    position = writeExtensionData(result, target, position, extension.type);
                                }
                                return;
                            }
                        }
                        // check isArray after extensions, because extensions can extend Array
                        if (Array.isArray(value)) packArray(value);
                        else {
                            // use this as an alternate mechanism for expressing how to serialize
                            if (value.toJSON) {
                                const json = value.toJSON();
                                // if for some reason value.toJSON returns itself it'll loop forever
                                if (json !== value) return pack(json);
                            }
                            // if there is a writeFunction, use it, otherwise just encode as undefined
                            if (type === "function") return pack(this.writeFunction && this.writeFunction(value));
                            // no extension found, write as object
                            writeObject(value, !value.hasOwnProperty) // if it doesn't have hasOwnProperty, don't do hasOwnProperty checks
                            ;
                        }
                    }
                }
            } else if (type === "boolean") target[position++] = value ? 0xc3 : 0xc2;
            else if (type === "bigint") {
                if (value < BigInt(1) << BigInt(63) && value >= -(BigInt(1) << BigInt(63))) {
                    // use a signed int as long as it fits
                    target[position++] = 0xd3;
                    targetView.setBigInt64(position, value);
                } else if (value < BigInt(1) << BigInt(64) && value > 0) {
                    // if we can fit an unsigned int, use that
                    target[position++] = 0xcf;
                    targetView.setBigUint64(position, value);
                } else {
                    // overflow
                    if (this.largeBigIntToFloat) {
                        target[position++] = 0xcb;
                        targetView.setFloat64(position, Number(value));
                    } else throw new RangeError(value + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
                }
                position += 8;
            } else if (type === "undefined") {
                if (this.encodeUndefinedAsNil) target[position++] = 0xc0;
                else {
                    target[position++] = 0xd4 // a number of implementations use fixext1 with type 0, data 0 to denote undefined, so we follow suite
                    ;
                    target[position++] = 0;
                    target[position++] = 0;
                }
            } else throw new Error("Unknown type: " + type);
        };
        const writePlainObject = this.variableMapSize || this.coercibleKeyAsNumber ? (object)=>{
            // this method is slightly slower, but generates "preferred serialization" (optimally small for smaller objects)
            let keys = Object.keys(object);
            let length = keys.length;
            if (length < 0x10) target[position++] = 0x80 | length;
            else if (length < 0x10000) {
                target[position++] = 0xde;
                target[position++] = length >> 8;
                target[position++] = length & 0xff;
            } else {
                target[position++] = 0xdf;
                targetView.setUint32(position, length);
                position += 4;
            }
            let key;
            if (this.coercibleKeyAsNumber) for(let i = 0; i < length; i++){
                key = keys[i];
                let num = Number(key);
                pack(isNaN(num) ? key : num);
                pack(object[key]);
            }
            else for(let i = 0; i < length; i++){
                pack(key = keys[i]);
                pack(object[key]);
            }
        } : (object, safePrototype)=>{
            target[position++] = 0xde // always using map 16, so we can preallocate and set the length afterwards
            ;
            let objectOffset = position - start;
            position += 2;
            let size = 0;
            for(let key in object)if (safePrototype || object.hasOwnProperty(key)) {
                pack(key);
                pack(object[key]);
                size++;
            }
            target[objectOffset++ + start] = size >> 8;
            target[objectOffset + start] = size & 0xff;
        };
        const writeRecord = this.useRecords === false ? writePlainObject : options.progressiveRecords && !useTwoByteRecords ? (object, safePrototype)=>{
            let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
            let objectOffset = position++ - start;
            let wroteKeys;
            for(let key in object)if (safePrototype || object.hasOwnProperty(key)) {
                nextTransition = transition[key];
                if (nextTransition) transition = nextTransition;
                else {
                    // record doesn't exist, create full new record and insert it
                    let keys = Object.keys(object);
                    let lastTransition = transition;
                    transition = structures.transitions;
                    let newTransitions = 0;
                    for(let i = 0, l = keys.length; i < l; i++){
                        let key = keys[i];
                        nextTransition = transition[key];
                        if (!nextTransition) {
                            nextTransition = transition[key] = Object.create(null);
                            newTransitions++;
                        }
                        transition = nextTransition;
                    }
                    if (objectOffset + start + 1 == position) {
                        // first key, so we don't need to insert, we can just write record directly
                        position--;
                        newRecord(transition, keys, newTransitions);
                    } else insertNewRecord(transition, keys, objectOffset, newTransitions);
                    wroteKeys = true;
                    transition = lastTransition[key];
                }
                pack(object[key]);
            }
            if (!wroteKeys) {
                let recordId = transition[RECORD_SYMBOL];
                if (recordId) target[objectOffset + start] = recordId;
                else insertNewRecord(transition, Object.keys(object), objectOffset, 0);
            }
        } : (object, safePrototype)=>{
            let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
            let newTransitions = 0;
            for(let key in object)if (safePrototype || object.hasOwnProperty(key)) {
                nextTransition = transition[key];
                if (!nextTransition) {
                    nextTransition = transition[key] = Object.create(null);
                    newTransitions++;
                }
                transition = nextTransition;
            }
            let recordId = transition[RECORD_SYMBOL];
            if (recordId) {
                if (recordId >= 0x60 && useTwoByteRecords) {
                    target[position++] = ((recordId -= 0x60) & 0x1f) + 0x60;
                    target[position++] = recordId >> 5;
                } else target[position++] = recordId;
            } else newRecord(transition, transition.__keys__ || Object.keys(object), newTransitions);
            // now write the values
            for(let key in object)if (safePrototype || object.hasOwnProperty(key)) pack(object[key]);
        };
        // craete reference to useRecords if useRecords is a function
        const checkUseRecords = typeof this.useRecords == "function" && this.useRecords;
        const writeObject = checkUseRecords ? (object, safePrototype)=>{
            checkUseRecords(object) ? writeRecord(object, safePrototype) : writePlainObject(object, safePrototype);
        } : writeRecord;
        const makeRoom = (end)=>{
            let newSize;
            if (end > 0x1000000) {
                // special handling for really large buffers
                if (end - start > MAX_BUFFER_SIZE) throw new Error("Packed buffer would be larger than maximum buffer size");
                newSize = Math.min(MAX_BUFFER_SIZE, Math.round(Math.max((end - start) * (end > 0x4000000 ? 1.25 : 2), 0x400000) / 0x1000) * 0x1000);
            } else newSize = (Math.max(end - start << 2, target.length - 1) >> 12) + 1 << 12;
            let newBuffer = new ByteArrayAllocate(newSize);
            targetView = newBuffer.dataView || (newBuffer.dataView = new DataView(newBuffer.buffer, 0, newSize));
            end = Math.min(end, target.length);
            if (target.copy) target.copy(newBuffer, 0, start, end);
            else newBuffer.set(target.slice(start, end));
            position -= start;
            start = 0;
            safeEnd = newBuffer.length - 10;
            return target = newBuffer;
        };
        const newRecord = (transition, keys, newTransitions)=>{
            let recordId = structures.nextId;
            if (!recordId) recordId = 0x40;
            if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys)) {
                recordId = structures.nextOwnId;
                if (!(recordId < maxStructureId)) recordId = sharedLimitId;
                structures.nextOwnId = recordId + 1;
            } else {
                if (recordId >= maxStructureId) recordId = sharedLimitId;
                structures.nextId = recordId + 1;
            }
            let highByte = keys.highByte = recordId >= 0x60 && useTwoByteRecords ? recordId - 0x60 >> 5 : -1;
            transition[RECORD_SYMBOL] = recordId;
            transition.__keys__ = keys;
            structures[recordId - 0x40] = keys;
            if (recordId < sharedLimitId) {
                keys.isShared = true;
                structures.sharedLength = recordId - 0x3f;
                hasSharedUpdate = true;
                if (highByte >= 0) {
                    target[position++] = (recordId & 0x1f) + 0x60;
                    target[position++] = highByte;
                } else target[position++] = recordId;
            } else {
                if (highByte >= 0) {
                    target[position++] = 0xd5 // fixext 2
                    ;
                    target[position++] = 0x72 // "r" record defintion extension type
                    ;
                    target[position++] = (recordId & 0x1f) + 0x60;
                    target[position++] = highByte;
                } else {
                    target[position++] = 0xd4 // fixext 1
                    ;
                    target[position++] = 0x72 // "r" record defintion extension type
                    ;
                    target[position++] = recordId;
                }
                if (newTransitions) transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
                // record the removal of the id, we can maintain our shared structure
                if (recordIdsToRemove.length >= maxOwnStructures) recordIdsToRemove.shift()[RECORD_SYMBOL] = 0 // we are cycling back through, and have to remove old ones
                ;
                recordIdsToRemove.push(transition);
                pack(keys);
            }
        };
        const insertNewRecord = (transition, keys, insertionOffset, newTransitions)=>{
            let mainTarget = target;
            let mainPosition = position;
            let mainSafeEnd = safeEnd;
            let mainStart = start;
            target = keysTarget;
            position = 0;
            start = 0;
            if (!target) keysTarget = target = new ByteArrayAllocate(8192);
            safeEnd = target.length - 10;
            newRecord(transition, keys, newTransitions);
            keysTarget = target;
            let keysPosition = position;
            target = mainTarget;
            position = mainPosition;
            safeEnd = mainSafeEnd;
            start = mainStart;
            if (keysPosition > 1) {
                let newEnd = position + keysPosition - 1;
                if (newEnd > safeEnd) makeRoom(newEnd);
                let insertionPosition = insertionOffset + start;
                target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position);
                target.set(keysTarget.slice(0, keysPosition), insertionPosition);
                position = newEnd;
            } else target[insertionOffset + start] = keysTarget[0];
        };
        const writeStruct = (object, safePrototype)=>{
            let newPosition = writeStructSlots(object, target, start, position, structures, makeRoom, (value, newPosition, notifySharedUpdate)=>{
                if (notifySharedUpdate) return hasSharedUpdate = true;
                position = newPosition;
                let startTarget = target;
                pack(value);
                resetStructures();
                if (startTarget !== target) return {
                    position,
                    targetView,
                    target
                }; // indicate the buffer was re-allocated
                return position;
            }, this);
            if (newPosition === 0) return writeObject(object, true);
            position = newPosition;
        };
    }
    useBuffer(buffer) {
        // this means we are finished using our own buffer and we can write over it safely
        target = buffer;
        targetView = new DataView(target.buffer, target.byteOffset, target.byteLength);
        position = 0;
    }
    clearSharedData() {
        if (this.structures) this.structures = [];
        if (this.typedStructs) this.typedStructs = [];
    }
}
function copyBinary(source, target, targetOffset, offset, endOffset) {
    while(offset < endOffset)target[targetOffset++] = source[offset++];
}
extensionClasses = [
    Date,
    Set,
    Error,
    RegExp,
    ArrayBuffer,
    Object.getPrototypeOf(Uint8Array.prototype).constructor /*TypedArray*/ ,
    (0, _unpackJs.C1Type)
];
extensions = [
    {
        pack (date, allocateForWrite, pack) {
            let seconds = date.getTime() / 1000;
            if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 0x100000000) {
                // Timestamp 32
                let { target, targetView, position } = allocateForWrite(6);
                target[position++] = 0xd6;
                target[position++] = 0xff;
                targetView.setUint32(position, seconds);
            } else if (seconds > 0 && seconds < 0x100000000) {
                // Timestamp 64
                let { target, targetView, position } = allocateForWrite(10);
                target[position++] = 0xd7;
                target[position++] = 0xff;
                targetView.setUint32(position, date.getMilliseconds() * 4000000 + (seconds / 1000 / 0x100000000 >> 0));
                targetView.setUint32(position + 4, seconds);
            } else if (isNaN(seconds)) {
                if (this.onInvalidDate) {
                    allocateForWrite(0);
                    return pack(this.onInvalidDate());
                }
                // Intentionally invalid timestamp
                let { target, targetView, position } = allocateForWrite(3);
                target[position++] = 0xd4;
                target[position++] = 0xff;
                target[position++] = 0xff;
            } else {
                // Timestamp 96
                let { target, targetView, position } = allocateForWrite(15);
                target[position++] = 0xc7;
                target[position++] = 12;
                target[position++] = 0xff;
                targetView.setUint32(position, date.getMilliseconds() * 1000000);
                targetView.setBigInt64(position + 4, BigInt(Math.floor(seconds)));
            }
        }
    },
    {
        pack (set, allocateForWrite, pack) {
            if (this.setAsEmptyObject) {
                allocateForWrite(0);
                return pack({});
            }
            let array = Array.from(set);
            let { target, position } = allocateForWrite(this.moreTypes ? 3 : 0);
            if (this.moreTypes) {
                target[position++] = 0xd4;
                target[position++] = 0x73 // 's' for Set
                ;
                target[position++] = 0;
            }
            pack(array);
        }
    },
    {
        pack (error, allocateForWrite, pack) {
            let { target, position } = allocateForWrite(this.moreTypes ? 3 : 0);
            if (this.moreTypes) {
                target[position++] = 0xd4;
                target[position++] = 0x65 // 'e' for error
                ;
                target[position++] = 0;
            }
            pack([
                error.name,
                error.message
            ]);
        }
    },
    {
        pack (regex, allocateForWrite, pack) {
            let { target, position } = allocateForWrite(this.moreTypes ? 3 : 0);
            if (this.moreTypes) {
                target[position++] = 0xd4;
                target[position++] = 0x78 // 'x' for regeXp
                ;
                target[position++] = 0;
            }
            pack([
                regex.source,
                regex.flags
            ]);
        }
    },
    {
        pack (arrayBuffer, allocateForWrite) {
            if (this.moreTypes) writeExtBuffer(arrayBuffer, 0x10, allocateForWrite);
            else writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
        }
    },
    {
        pack (typedArray, allocateForWrite) {
            let constructor = typedArray.constructor;
            if (constructor !== ByteArray && this.moreTypes) writeExtBuffer(typedArray, (0, _unpackJs.typedArrays).indexOf(constructor.name), allocateForWrite);
            else writeBuffer(typedArray, allocateForWrite);
        }
    },
    {
        pack (c1, allocateForWrite) {
            let { target, position } = allocateForWrite(1);
            target[position] = 0xc1;
        }
    }
];
function writeExtBuffer(typedArray, type, allocateForWrite, encode) {
    let length = typedArray.byteLength;
    if (length + 1 < 0x100) {
        var { target, position } = allocateForWrite(4 + length);
        target[position++] = 0xc7;
        target[position++] = length + 1;
    } else if (length + 1 < 0x10000) {
        var { target, position } = allocateForWrite(5 + length);
        target[position++] = 0xc8;
        target[position++] = length + 1 >> 8;
        target[position++] = length + 1 & 0xff;
    } else {
        var { target, position, targetView } = allocateForWrite(7 + length);
        target[position++] = 0xc9;
        targetView.setUint32(position, length + 1) // plus one for the type byte
        ;
        position += 4;
    }
    target[position++] = 0x74 // "t" for typed array
    ;
    target[position++] = type;
    target.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position);
}
function writeBuffer(buffer, allocateForWrite) {
    let length = buffer.byteLength;
    var target, position;
    if (length < 0x100) {
        var { target, position } = allocateForWrite(length + 2);
        target[position++] = 0xc4;
        target[position++] = length;
    } else if (length < 0x10000) {
        var { target, position } = allocateForWrite(length + 3);
        target[position++] = 0xc5;
        target[position++] = length >> 8;
        target[position++] = length & 0xff;
    } else {
        var { target, position, targetView } = allocateForWrite(length + 5);
        target[position++] = 0xc6;
        targetView.setUint32(position, length);
        position += 4;
    }
    target.set(buffer, position);
}
function writeExtensionData(result, target, position, type) {
    let length = result.length;
    switch(length){
        case 1:
            target[position++] = 0xd4;
            break;
        case 2:
            target[position++] = 0xd5;
            break;
        case 4:
            target[position++] = 0xd6;
            break;
        case 8:
            target[position++] = 0xd7;
            break;
        case 16:
            target[position++] = 0xd8;
            break;
        default:
            if (length < 0x100) {
                target[position++] = 0xc7;
                target[position++] = length;
            } else if (length < 0x10000) {
                target[position++] = 0xc8;
                target[position++] = length >> 8;
                target[position++] = length & 0xff;
            } else {
                target[position++] = 0xc9;
                target[position++] = length >> 24;
                target[position++] = length >> 16 & 0xff;
                target[position++] = length >> 8 & 0xff;
                target[position++] = length & 0xff;
            }
    }
    target[position++] = type;
    target.set(result, position);
    position += length;
    return position;
}
function insertIds(serialized, idsToInsert) {
    // insert the ids that need to be referenced for structured clones
    let nextId;
    let distanceToMove = idsToInsert.length * 6;
    let lastEnd = serialized.length - distanceToMove;
    while(nextId = idsToInsert.pop()){
        let offset = nextId.offset;
        let id = nextId.id;
        serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
        distanceToMove -= 6;
        let position = offset + distanceToMove;
        serialized[position++] = 0xd6;
        serialized[position++] = 0x69 // 'i'
        ;
        serialized[position++] = id >> 24;
        serialized[position++] = id >> 16 & 0xff;
        serialized[position++] = id >> 8 & 0xff;
        serialized[position++] = id & 0xff;
        lastEnd = offset;
    }
    return serialized;
}
function writeBundles(start, pack, incrementPosition) {
    if (bundledStrings.length > 0) {
        targetView.setUint32(bundledStrings.position + start, position + incrementPosition - bundledStrings.position - start);
        bundledStrings.stringsPosition = position - start;
        let writeStrings = bundledStrings;
        bundledStrings = null;
        pack(writeStrings[0]);
        pack(writeStrings[1]);
    }
}
function addExtension(extension) {
    if (extension.Class) {
        if (!extension.pack && !extension.write) throw new Error("Extension has no pack or write function");
        if (extension.pack && !extension.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        extensionClasses.unshift(extension.Class);
        extensions.unshift(extension);
    }
    (0, _unpackJs.addExtension)(extension);
}
function prepareStructures(structures, packr) {
    structures.isCompatible = (existingStructures)=>{
        let compatible = !existingStructures || (packr.lastNamedStructuresLength || 0) === existingStructures.length;
        if (!compatible) packr._mergeStructures(existingStructures);
        return compatible;
    };
    return structures;
}
function setWriteStructSlots(writeSlots, makeStructures) {
    writeStructSlots = writeSlots;
    prepareStructures = makeStructures;
}
let defaultPackr = new Packr({
    useRecords: false
});
const pack = defaultPackr.pack;
const encode = defaultPackr.pack;
const Encoder = Packr;
const { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = (0, _unpackJs.FLOAT32_OPTIONS);
const REUSE_BUFFER_MODE = 512;
const RESET_BUFFER_MODE = 1024;
const RESERVE_START_SPACE = 2048;

},{"d39b59f28483d155":"fCgem","./unpack.js":"hUNII","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"hUNII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C1Type", ()=>C1Type);
parcelHelpers.export(exports, "C1", ()=>C1);
parcelHelpers.export(exports, "Unpackr", ()=>Unpackr);
parcelHelpers.export(exports, "getPosition", ()=>getPosition);
parcelHelpers.export(exports, "checkedRead", ()=>checkedRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "loadStructures", ()=>loadStructures);
parcelHelpers.export(exports, "isNativeAccelerationEnabled", ()=>isNativeAccelerationEnabled);
parcelHelpers.export(exports, "setExtractor", ()=>setExtractor);
parcelHelpers.export(exports, "readString", ()=>readString);
parcelHelpers.export(exports, "typedArrays", ()=>typedArrays);
parcelHelpers.export(exports, "clearSource", ()=>clearSource);
parcelHelpers.export(exports, "addExtension", ()=>addExtension);
parcelHelpers.export(exports, "mult10", ()=>mult10);
parcelHelpers.export(exports, "Decoder", ()=>Decoder);
parcelHelpers.export(exports, "unpack", ()=>unpack);
parcelHelpers.export(exports, "unpackMultiple", ()=>unpackMultiple);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "FLOAT32_OPTIONS", ()=>FLOAT32_OPTIONS);
parcelHelpers.export(exports, "roundFloat32", ()=>roundFloat32);
parcelHelpers.export(exports, "setReadStruct", ()=>setReadStruct);
var Buffer = require("b5a1b40c14b71778").Buffer;
var decoder;
try {
    decoder = new TextDecoder();
} catch (error) {}
var src;
var srcEnd;
var position = 0;
var alreadySet;
const EMPTY_ARRAY = [];
var strings = EMPTY_ARRAY;
var stringPosition = 0;
var currentUnpackr = {};
var currentStructures;
var srcString;
var srcStringStart = 0;
var srcStringEnd = 0;
var bundledStrings;
var referenceMap;
var currentExtensions = [];
var dataView;
var defaultOptions = {
    useRecords: false,
    mapsAsObjects: true
};
class C1Type {
}
const C1 = new C1Type();
C1.name = "MessagePack 0xC1";
var sequentialMode = false;
var inlineObjectReadThreshold = 2;
var readStruct, onLoadedStructures, onSaveState;
var BlockedFunction // we use search and replace to change the next call to BlockedFunction to avoid CSP issues for
;
// no-eval build
try {
    new Function("");
} catch (error) {
    // if eval variants are not supported, do not create inline object readers ever
    inlineObjectReadThreshold = Infinity;
}
class Unpackr {
    constructor(options){
        if (options) {
            if (options.useRecords === false && options.mapsAsObjects === undefined) options.mapsAsObjects = true;
            if (options.sequential && options.trusted !== false) {
                options.trusted = true;
                if (!options.structures && options.useRecords != false) {
                    options.structures = [];
                    if (!options.maxSharedStructures) options.maxSharedStructures = 0;
                }
            }
            if (options.structures) options.structures.sharedLength = options.structures.length;
            else if (options.getStructures) {
                (options.structures = []).uninitialized = true // this is what we use to denote an uninitialized structures
                ;
                options.structures.sharedLength = 0;
            }
            if (options.int64AsNumber) options.int64AsType = "number";
        }
        Object.assign(this, options);
    }
    unpack(source, options) {
        if (src) // re-entrant execution, save the state and restore it after we do this unpack
        return saveState(()=>{
            clearSource();
            return this ? this.unpack(source, options) : Unpackr.prototype.unpack.call(defaultOptions, source, options);
        });
        if (!source.buffer && source.constructor === ArrayBuffer) source = typeof Buffer !== "undefined" ? Buffer.from(source) : new Uint8Array(source);
        if (typeof options === "object") {
            srcEnd = options.end || source.length;
            position = options.start || 0;
        } else {
            position = 0;
            srcEnd = options > -1 ? options : source.length;
        }
        stringPosition = 0;
        srcStringEnd = 0;
        srcString = null;
        strings = EMPTY_ARRAY;
        bundledStrings = null;
        src = source;
        // this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
        // technique for getting data from a database where it can be copied into an existing buffer instead of creating
        // new ones
        try {
            dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
        } catch (error) {
            // if it doesn't have a buffer, maybe it is the wrong type of object
            src = null;
            if (source instanceof Uint8Array) throw error;
            throw new Error("Source must be a Uint8Array or Buffer but was a " + (source && typeof source == "object" ? source.constructor.name : typeof source));
        }
        if (this instanceof Unpackr) {
            currentUnpackr = this;
            if (this.structures) {
                currentStructures = this.structures;
                return checkedRead(options);
            } else if (!currentStructures || currentStructures.length > 0) currentStructures = [];
        } else {
            currentUnpackr = defaultOptions;
            if (!currentStructures || currentStructures.length > 0) currentStructures = [];
        }
        return checkedRead(options);
    }
    unpackMultiple(source, forEach) {
        let values, lastPosition = 0;
        try {
            sequentialMode = true;
            let size = source.length;
            let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
            if (forEach) {
                if (forEach(value, lastPosition, position) === false) return;
                while(position < size){
                    lastPosition = position;
                    if (forEach(checkedRead(), lastPosition, position) === false) return;
                }
            } else {
                values = [
                    value
                ];
                while(position < size){
                    lastPosition = position;
                    values.push(checkedRead());
                }
                return values;
            }
        } catch (error) {
            error.lastPosition = lastPosition;
            error.values = values;
            throw error;
        } finally{
            sequentialMode = false;
            clearSource();
        }
    }
    _mergeStructures(loadedStructures, existingStructures) {
        if (onLoadedStructures) loadedStructures = onLoadedStructures.call(this, loadedStructures);
        loadedStructures = loadedStructures || [];
        if (Object.isFrozen(loadedStructures)) loadedStructures = loadedStructures.map((structure)=>structure.slice(0));
        for(let i = 0, l = loadedStructures.length; i < l; i++){
            let structure = loadedStructures[i];
            if (structure) {
                structure.isShared = true;
                if (i >= 32) structure.highByte = i - 32 >> 5;
            }
        }
        loadedStructures.sharedLength = loadedStructures.length;
        for(let id in existingStructures || [])if (id >= 0) {
            let structure = loadedStructures[id];
            let existing = existingStructures[id];
            if (existing) {
                if (structure) (loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
                loadedStructures[id] = existing;
            }
        }
        return this.structures = loadedStructures;
    }
    decode(source, options) {
        return this.unpack(source, options);
    }
}
function getPosition() {
    return position;
}
function checkedRead(options) {
    try {
        if (!currentUnpackr.trusted && !sequentialMode) {
            let sharedLength = currentStructures.sharedLength || 0;
            if (sharedLength < currentStructures.length) currentStructures.length = sharedLength;
        }
        let result;
        if (currentUnpackr.randomAccessStructure && src[position] < 0x40 && src[position] >= 0x20 && readStruct) {
            result = readStruct(src, position, srcEnd, currentUnpackr);
            src = null // dispose of this so that recursive unpack calls don't save state
            ;
            if (!(options && options.lazy) && result) result = result.toJSON();
            position = srcEnd;
        } else result = read();
        if (bundledStrings) {
            position = bundledStrings.postBundlePosition;
            bundledStrings = null;
        }
        if (sequentialMode) // we only need to restore the structures if there was an error, but if we completed a read,
        // we can clear this out and keep the structures we read
        currentStructures.restoreStructures = null;
        if (position == srcEnd) {
            // finished reading this source, cleanup references
            if (currentStructures && currentStructures.restoreStructures) restoreStructures();
            currentStructures = null;
            src = null;
            if (referenceMap) referenceMap = null;
        } else if (position > srcEnd) // over read
        throw new Error("Unexpected end of MessagePack data");
        else if (!sequentialMode) {
            let jsonView;
            try {
                jsonView = JSON.stringify(result, (_, value)=>typeof value === "bigint" ? `${value}n` : value).slice(0, 100);
            } catch (error) {
                jsonView = "(JSON view not available " + error + ")";
            }
            throw new Error("Data read, but end of buffer not reached " + jsonView);
        }
        // else more to read, but we are reading sequentially, so don't clear source yet
        return result;
    } catch (error) {
        if (currentStructures && currentStructures.restoreStructures) restoreStructures();
        clearSource();
        if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer") || position > srcEnd) error.incomplete = true;
        throw error;
    }
}
function restoreStructures() {
    for(let id in currentStructures.restoreStructures)currentStructures[id] = currentStructures.restoreStructures[id];
    currentStructures.restoreStructures = null;
}
function read() {
    let token = src[position++];
    if (token < 0xa0) {
        if (token < 0x80) {
            if (token < 0x40) return token;
            else {
                let structure = currentStructures[token & 0x3f] || currentUnpackr.getStructures && loadStructures()[token & 0x3f];
                if (structure) {
                    if (!structure.read) structure.read = createStructureReader(structure, token & 0x3f);
                    return structure.read();
                } else return token;
            }
        } else if (token < 0x90) {
            // map
            token -= 0x80;
            if (currentUnpackr.mapsAsObjects) {
                let object = {};
                for(let i = 0; i < token; i++){
                    let key = readKey();
                    if (key === "__proto__") key = "__proto_";
                    object[key] = read();
                }
                return object;
            } else {
                let map = new Map();
                for(let i = 0; i < token; i++)map.set(read(), read());
                return map;
            }
        } else {
            token -= 0x90;
            let array = new Array(token);
            for(let i = 0; i < token; i++)array[i] = read();
            if (currentUnpackr.freezeData) return Object.freeze(array);
            return array;
        }
    } else if (token < 0xc0) {
        // fixstr
        let length = token - 0xa0;
        if (srcStringEnd >= position) return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
        if (srcStringEnd == 0 && srcEnd < 140) {
            // for small blocks, avoiding the overhead of the extract call is helpful
            let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
            if (string != null) return string;
        }
        return readFixedString(length);
    } else {
        let value;
        switch(token){
            case 0xc0:
                return null;
            case 0xc1:
                if (bundledStrings) {
                    value = read() // followed by the length of the string in characters (not bytes!)
                    ;
                    if (value > 0) return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value);
                    else return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 -= value);
                }
                return C1; // "never-used", return special object to denote that
            case 0xc2:
                return false;
            case 0xc3:
                return true;
            case 0xc4:
                // bin 8
                value = src[position++];
                if (value === undefined) throw new Error("Unexpected end of buffer");
                return readBin(value);
            case 0xc5:
                // bin 16
                value = dataView.getUint16(position);
                position += 2;
                return readBin(value);
            case 0xc6:
                // bin 32
                value = dataView.getUint32(position);
                position += 4;
                return readBin(value);
            case 0xc7:
                // ext 8
                return readExt(src[position++]);
            case 0xc8:
                // ext 16
                value = dataView.getUint16(position);
                position += 2;
                return readExt(value);
            case 0xc9:
                // ext 32
                value = dataView.getUint32(position);
                position += 4;
                return readExt(value);
            case 0xca:
                value = dataView.getFloat32(position);
                if (currentUnpackr.useFloat32 > 2) {
                    // this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
                    let multiplier = mult10[(src[position] & 0x7f) << 1 | src[position + 1] >> 7];
                    position += 4;
                    return (multiplier * value + (value > 0 ? 0.5 : -0.5) >> 0) / multiplier;
                }
                position += 4;
                return value;
            case 0xcb:
                value = dataView.getFloat64(position);
                position += 8;
                return value;
            // uint handlers
            case 0xcc:
                return src[position++];
            case 0xcd:
                value = dataView.getUint16(position);
                position += 2;
                return value;
            case 0xce:
                value = dataView.getUint32(position);
                position += 4;
                return value;
            case 0xcf:
                if (currentUnpackr.int64AsType === "number") {
                    value = dataView.getUint32(position) * 0x100000000;
                    value += dataView.getUint32(position + 4);
                } else if (currentUnpackr.int64AsType === "string") value = dataView.getBigUint64(position).toString();
                else if (currentUnpackr.int64AsType === "auto") {
                    value = dataView.getBigUint64(position);
                    if (value <= BigInt(2) << BigInt(52)) value = Number(value);
                } else value = dataView.getBigUint64(position);
                position += 8;
                return value;
            // int handlers
            case 0xd0:
                return dataView.getInt8(position++);
            case 0xd1:
                value = dataView.getInt16(position);
                position += 2;
                return value;
            case 0xd2:
                value = dataView.getInt32(position);
                position += 4;
                return value;
            case 0xd3:
                if (currentUnpackr.int64AsType === "number") {
                    value = dataView.getInt32(position) * 0x100000000;
                    value += dataView.getUint32(position + 4);
                } else if (currentUnpackr.int64AsType === "string") value = dataView.getBigInt64(position).toString();
                else if (currentUnpackr.int64AsType === "auto") {
                    value = dataView.getBigInt64(position);
                    if (value >= BigInt(-2) << BigInt(52) && value <= BigInt(2) << BigInt(52)) value = Number(value);
                } else value = dataView.getBigInt64(position);
                position += 8;
                return value;
            case 0xd4:
                // fixext 1
                value = src[position++];
                if (value == 0x72) return recordDefinition(src[position++] & 0x3f);
                else {
                    let extension = currentExtensions[value];
                    if (extension) {
                        if (extension.read) {
                            position++ // skip filler byte
                            ;
                            return extension.read(read());
                        } else if (extension.noBuffer) {
                            position++ // skip filler byte
                            ;
                            return extension();
                        } else return extension(src.subarray(position, ++position));
                    } else throw new Error("Unknown extension " + value);
                }
            case 0xd5:
                // fixext 2
                value = src[position];
                if (value == 0x72) {
                    position++;
                    return recordDefinition(src[position++] & 0x3f, src[position++]);
                } else return readExt(2);
            case 0xd6:
                // fixext 4
                return readExt(4);
            case 0xd7:
                // fixext 8
                return readExt(8);
            case 0xd8:
                // fixext 16
                return readExt(16);
            case 0xd9:
                // str 8
                value = src[position++];
                if (srcStringEnd >= position) return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
                return readString8(value);
            case 0xda:
                // str 16
                value = dataView.getUint16(position);
                position += 2;
                if (srcStringEnd >= position) return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
                return readString16(value);
            case 0xdb:
                // str 32
                value = dataView.getUint32(position);
                position += 4;
                if (srcStringEnd >= position) return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
                return readString32(value);
            case 0xdc:
                // array 16
                value = dataView.getUint16(position);
                position += 2;
                return readArray(value);
            case 0xdd:
                // array 32
                value = dataView.getUint32(position);
                position += 4;
                return readArray(value);
            case 0xde:
                // map 16
                value = dataView.getUint16(position);
                position += 2;
                return readMap(value);
            case 0xdf:
                // map 32
                value = dataView.getUint32(position);
                position += 4;
                return readMap(value);
            default:
                if (token >= 0xe0) return token - 0x100;
                if (token === undefined) {
                    let error = new Error("Unexpected end of MessagePack data");
                    error.incomplete = true;
                    throw error;
                }
                throw new Error("Unknown MessagePack token " + token);
        }
    }
}
const validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function createStructureReader(structure, firstId) {
    function readObject() {
        // This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
        if (readObject.count++ > inlineObjectReadThreshold) {
            let readObject = structure.read = new Function("r", "return function(){return " + (currentUnpackr.freezeData ? "Object.freeze" : "") + "({" + structure.map((key)=>key === "__proto__" ? "__proto_:r()" : validName.test(key) ? key + ":r()" : "[" + JSON.stringify(key) + "]:r()").join(",") + "})}")(read);
            if (structure.highByte === 0) structure.read = createSecondByteReader(firstId, structure.read);
            return readObject() // second byte is already read, if there is one so immediately read object
            ;
        }
        let object = {};
        for(let i = 0, l = structure.length; i < l; i++){
            let key = structure[i];
            if (key === "__proto__") key = "__proto_";
            object[key] = read();
        }
        if (currentUnpackr.freezeData) return Object.freeze(object);
        return object;
    }
    readObject.count = 0;
    if (structure.highByte === 0) return createSecondByteReader(firstId, readObject);
    return readObject;
}
const createSecondByteReader = (firstId, read0)=>{
    return function() {
        let highByte = src[position++];
        if (highByte === 0) return read0();
        let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
        let structure = currentStructures[id] || loadStructures()[id];
        if (!structure) throw new Error("Record id is not defined for " + id);
        if (!structure.read) structure.read = createStructureReader(structure, firstId);
        return structure.read();
    };
};
function loadStructures() {
    let loadedStructures = saveState(()=>{
        // save the state in case getStructures modifies our buffer
        src = null;
        return currentUnpackr.getStructures();
    });
    return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures);
}
var readFixedString = readStringJS;
var readString8 = readStringJS;
var readString16 = readStringJS;
var readString32 = readStringJS;
let isNativeAccelerationEnabled = false;
function setExtractor(extractStrings) {
    isNativeAccelerationEnabled = true;
    readFixedString = readString(1);
    readString8 = readString(2);
    readString16 = readString(3);
    readString32 = readString(5);
    function readString(headerLength) {
        return function readString(length) {
            let string = strings[stringPosition++];
            if (string == null) {
                if (bundledStrings) return readStringJS(length);
                let byteOffset = src.byteOffset;
                let extraction = extractStrings(position - headerLength + byteOffset, srcEnd + byteOffset, src.buffer);
                if (typeof extraction == "string") {
                    string = extraction;
                    strings = EMPTY_ARRAY;
                } else {
                    strings = extraction;
                    stringPosition = 1;
                    srcStringEnd = 1 // even if a utf-8 string was decoded, must indicate we are in the midst of extracted strings and can't skip strings
                    ;
                    string = strings[0];
                    if (string === undefined) throw new Error("Unexpected end of buffer");
                }
            }
            let srcStringLength = string.length;
            if (srcStringLength <= length) {
                position += length;
                return string;
            }
            srcString = string;
            srcStringStart = position;
            srcStringEnd = position + srcStringLength;
            position += length;
            return string.slice(0, length) // we know we just want the beginning
            ;
        };
    }
}
function readStringJS(length) {
    let result;
    if (length < 16) {
        if (result = shortStringInJS(length)) return result;
    }
    if (length > 64 && decoder) return decoder.decode(src.subarray(position, position += length));
    const end = position + length;
    const units = [];
    result = "";
    while(position < end){
        const byte1 = src[position++];
        if ((byte1 & 0x80) === 0) // 1 byte
        units.push(byte1);
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            const byte2 = src[position++] & 0x3f;
            units.push((byte1 & 0x1f) << 6 | byte2);
        } else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            const byte2 = src[position++] & 0x3f;
            const byte3 = src[position++] & 0x3f;
            units.push((byte1 & 0x1f) << 12 | byte2 << 6 | byte3);
        } else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            const byte2 = src[position++] & 0x3f;
            const byte3 = src[position++] & 0x3f;
            const byte4 = src[position++] & 0x3f;
            let unit = (byte1 & 0x07) << 0x12 | byte2 << 0x0c | byte3 << 0x06 | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(unit >>> 10 & 0x3ff | 0xd800);
                unit = 0xdc00 | unit & 0x3ff;
            }
            units.push(unit);
        } else units.push(byte1);
        if (units.length >= 0x1000) {
            result += fromCharCode.apply(String, units);
            units.length = 0;
        }
    }
    if (units.length > 0) result += fromCharCode.apply(String, units);
    return result;
}
function readString(source, start, length) {
    let existingSrc = src;
    src = source;
    position = start;
    try {
        return readStringJS(length);
    } finally{
        src = existingSrc;
    }
}
function readArray(length) {
    let array = new Array(length);
    for(let i = 0; i < length; i++)array[i] = read();
    if (currentUnpackr.freezeData) return Object.freeze(array);
    return array;
}
function readMap(length) {
    if (currentUnpackr.mapsAsObjects) {
        let object = {};
        for(let i = 0; i < length; i++){
            let key = readKey();
            if (key === "__proto__") key = "__proto_";
            object[key] = read();
        }
        return object;
    } else {
        let map = new Map();
        for(let i = 0; i < length; i++)map.set(read(), read());
        return map;
    }
}
var fromCharCode = String.fromCharCode;
function longStringInJS(length) {
    let start = position;
    let bytes = new Array(length);
    for(let i = 0; i < length; i++){
        const byte = src[position++];
        if ((byte & 0x80) > 0) {
            position = start;
            return;
        }
        bytes[i] = byte;
    }
    return fromCharCode.apply(String, bytes);
}
function shortStringInJS(length) {
    if (length < 4) {
        if (length < 2) {
            if (length === 0) return "";
            else {
                let a = src[position++];
                if ((a & 0x80) > 1) {
                    position -= 1;
                    return;
                }
                return fromCharCode(a);
            }
        } else {
            let a = src[position++];
            let b = src[position++];
            if ((a & 0x80) > 0 || (b & 0x80) > 0) {
                position -= 2;
                return;
            }
            if (length < 3) return fromCharCode(a, b);
            let c = src[position++];
            if ((c & 0x80) > 0) {
                position -= 3;
                return;
            }
            return fromCharCode(a, b, c);
        }
    } else {
        let a = src[position++];
        let b = src[position++];
        let c = src[position++];
        let d = src[position++];
        if ((a & 0x80) > 0 || (b & 0x80) > 0 || (c & 0x80) > 0 || (d & 0x80) > 0) {
            position -= 4;
            return;
        }
        if (length < 6) {
            if (length === 4) return fromCharCode(a, b, c, d);
            else {
                let e = src[position++];
                if ((e & 0x80) > 0) {
                    position -= 5;
                    return;
                }
                return fromCharCode(a, b, c, d, e);
            }
        } else if (length < 8) {
            let e = src[position++];
            let f = src[position++];
            if ((e & 0x80) > 0 || (f & 0x80) > 0) {
                position -= 6;
                return;
            }
            if (length < 7) return fromCharCode(a, b, c, d, e, f);
            let g = src[position++];
            if ((g & 0x80) > 0) {
                position -= 7;
                return;
            }
            return fromCharCode(a, b, c, d, e, f, g);
        } else {
            let e = src[position++];
            let f = src[position++];
            let g = src[position++];
            let h = src[position++];
            if ((e & 0x80) > 0 || (f & 0x80) > 0 || (g & 0x80) > 0 || (h & 0x80) > 0) {
                position -= 8;
                return;
            }
            if (length < 10) {
                if (length === 8) return fromCharCode(a, b, c, d, e, f, g, h);
                else {
                    let i = src[position++];
                    if ((i & 0x80) > 0) {
                        position -= 9;
                        return;
                    }
                    return fromCharCode(a, b, c, d, e, f, g, h, i);
                }
            } else if (length < 12) {
                let i = src[position++];
                let j = src[position++];
                if ((i & 0x80) > 0 || (j & 0x80) > 0) {
                    position -= 10;
                    return;
                }
                if (length < 11) return fromCharCode(a, b, c, d, e, f, g, h, i, j);
                let k = src[position++];
                if ((k & 0x80) > 0) {
                    position -= 11;
                    return;
                }
                return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
            } else {
                let i = src[position++];
                let j = src[position++];
                let k = src[position++];
                let l = src[position++];
                if ((i & 0x80) > 0 || (j & 0x80) > 0 || (k & 0x80) > 0 || (l & 0x80) > 0) {
                    position -= 12;
                    return;
                }
                if (length < 14) {
                    if (length === 12) return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
                    else {
                        let m = src[position++];
                        if ((m & 0x80) > 0) {
                            position -= 13;
                            return;
                        }
                        return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
                    }
                } else {
                    let m = src[position++];
                    let n = src[position++];
                    if ((m & 0x80) > 0 || (n & 0x80) > 0) {
                        position -= 14;
                        return;
                    }
                    if (length < 15) return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
                    let o = src[position++];
                    if ((o & 0x80) > 0) {
                        position -= 15;
                        return;
                    }
                    return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
                }
            }
        }
    }
}
function readOnlyJSString() {
    let token = src[position++];
    let length;
    if (token < 0xc0) // fixstr
    length = token - 0xa0;
    else switch(token){
        case 0xd9:
            // str 8
            length = src[position++];
            break;
        case 0xda:
            // str 16
            length = dataView.getUint16(position);
            position += 2;
            break;
        case 0xdb:
            // str 32
            length = dataView.getUint32(position);
            position += 4;
            break;
        default:
            throw new Error("Expected string");
    }
    return readStringJS(length);
}
function readBin(length) {
    return currentUnpackr.copyBuffers ? // specifically use the copying slice (not the node one)
    Uint8Array.prototype.slice.call(src, position, position += length) : src.subarray(position, position += length);
}
function readExt(length) {
    let type = src[position++];
    if (currentExtensions[type]) {
        let end;
        return currentExtensions[type](src.subarray(position, end = position += length), (readPosition)=>{
            position = readPosition;
            try {
                return read();
            } finally{
                position = end;
            }
        });
    } else throw new Error("Unknown extension type " + type);
}
var keyCache = new Array(4096);
function readKey() {
    let length = src[position++];
    if (length >= 0xa0 && length < 0xc0) {
        // fixstr, potentially use key cache
        length = length - 0xa0;
        if (srcStringEnd >= position) return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
        else if (!(srcStringEnd == 0 && srcEnd < 180)) return readFixedString(length);
    } else {
        position--;
        return read().toString();
    }
    let key = (length << 5 ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 0xfff;
    let entry = keyCache[key];
    let checkPosition = position;
    let end = position + length - 3;
    let chunk;
    let i = 0;
    if (entry && entry.bytes == length) {
        while(checkPosition < end){
            chunk = dataView.getUint32(checkPosition);
            if (chunk != entry[i++]) {
                checkPosition = 0x70000000;
                break;
            }
            checkPosition += 4;
        }
        end += 3;
        while(checkPosition < end){
            chunk = src[checkPosition++];
            if (chunk != entry[i++]) {
                checkPosition = 0x70000000;
                break;
            }
        }
        if (checkPosition === end) {
            position = checkPosition;
            return entry.string;
        }
        end -= 3;
        checkPosition = position;
    }
    entry = [];
    keyCache[key] = entry;
    entry.bytes = length;
    while(checkPosition < end){
        chunk = dataView.getUint32(checkPosition);
        entry.push(chunk);
        checkPosition += 4;
    }
    end += 3;
    while(checkPosition < end){
        chunk = src[checkPosition++];
        entry.push(chunk);
    }
    // for small blocks, avoiding the overhead of the extract call is helpful
    let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
    if (string != null) return entry.string = string;
    return entry.string = readFixedString(length);
}
// the registration of the record definition extension (as "r")
const recordDefinition = (id, highByte)=>{
    let structure = read().map((property)=>property.toString()) // ensure that all keys are strings and that the array is mutable
    ;
    let firstByte = id;
    if (highByte !== undefined) {
        id = id < 32 ? -((highByte << 5) + id) : (highByte << 5) + id;
        structure.highByte = highByte;
    }
    let existingStructure = currentStructures[id];
    // If it is a shared structure, we need to restore any changes after reading.
    // Also in sequential mode, we may get incomplete reads and thus errors, and we need to restore
    // to the state prior to an incomplete read in order to properly resume.
    if (existingStructure && (existingStructure.isShared || sequentialMode)) (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
    currentStructures[id] = structure;
    structure.read = createStructureReader(structure, firstByte);
    return structure.read();
};
currentExtensions[0] = ()=>{} // notepack defines extension 0 to mean undefined, so use that as the default here
;
currentExtensions[0].noBuffer = true;
let errors = {
    Error,
    TypeError,
    ReferenceError
};
currentExtensions[0x65] = ()=>{
    let data = read();
    return (errors[data[0]] || Error)(data[1]);
};
currentExtensions[0x69] = (data)=>{
    // id extension (for structured clones)
    let id = dataView.getUint32(position - 4);
    if (!referenceMap) referenceMap = new Map();
    let token = src[position];
    let target;
    // TODO: handle Maps, Sets, and other types that can cycle; this is complicated, because you potentially need to read
    // ahead past references to record structure definitions
    if (token >= 0x90 && token < 0xa0 || token == 0xdc || token == 0xdd) target = [];
    else target = {};
    let refEntry = {
        target
    } // a placeholder object
    ;
    referenceMap.set(id, refEntry);
    let targetProperties = read() // read the next value as the target object to id
    ;
    if (refEntry.used) return Object.assign(target, targetProperties);
    refEntry.target = targetProperties // the placeholder wasn't used, replace with the deserialized one
    ;
    return targetProperties // no cycle, can just use the returned read object
    ;
};
currentExtensions[0x70] = (data)=>{
    // pointer extension (for structured clones)
    let id = dataView.getUint32(position - 4);
    let refEntry = referenceMap.get(id);
    refEntry.used = true;
    return refEntry.target;
};
currentExtensions[0x73] = ()=>new Set(read());
const typedArrays = [
    "Int8",
    "Uint8",
    "Uint8Clamped",
    "Int16",
    "Uint16",
    "Int32",
    "Uint32",
    "Float32",
    "Float64",
    "BigInt64",
    "BigUint64"
].map((type)=>type + "Array");
let glbl = typeof globalThis === "object" ? globalThis : window;
currentExtensions[0x74] = (data)=>{
    let typeCode = data[0];
    let typedArrayName = typedArrays[typeCode];
    if (!typedArrayName) throw new Error("Could not find typed array for code " + typeCode);
    // we have to always slice/copy here to get a new ArrayBuffer that is word/byte aligned
    return new glbl[typedArrayName](Uint8Array.prototype.slice.call(data, 1).buffer);
};
currentExtensions[0x78] = ()=>{
    let data = read();
    return new RegExp(data[0], data[1]);
};
const TEMP_BUNDLE = [];
currentExtensions[0x62] = (data)=>{
    let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3];
    let dataPosition = position;
    position += dataSize - data.length;
    bundledStrings = TEMP_BUNDLE;
    bundledStrings = [
        readOnlyJSString(),
        readOnlyJSString()
    ];
    bundledStrings.position0 = 0;
    bundledStrings.position1 = 0;
    bundledStrings.postBundlePosition = position;
    position = dataPosition;
    return read();
};
currentExtensions[0xff] = (data)=>{
    // 32-bit date extension
    if (data.length == 4) return new Date((data[0] * 0x1000000 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1000);
    else if (data.length == 8) return new Date(((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1000000 + ((data[3] & 0x3) * 0x100000000 + data[4] * 0x1000000 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1000);
    else if (data.length == 12) return new Date(((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1000000 + ((data[4] & 0x80 ? -281474976710656 : 0) + data[6] * 0x10000000000 + data[7] * 0x100000000 + data[8] * 0x1000000 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1000);
    else return new Date("invalid");
} // notepack defines extension 0 to mean undefined, so use that as the default here
;
// registration of bulk record definition?
// currentExtensions[0x52] = () =>
function saveState(callback) {
    if (onSaveState) onSaveState();
    let savedSrcEnd = srcEnd;
    let savedPosition = position;
    let savedStringPosition = stringPosition;
    let savedSrcStringStart = srcStringStart;
    let savedSrcStringEnd = srcStringEnd;
    let savedSrcString = srcString;
    let savedStrings = strings;
    let savedReferenceMap = referenceMap;
    let savedBundledStrings = bundledStrings;
    // TODO: We may need to revisit this if we do more external calls to user code (since it could be slow)
    let savedSrc = new Uint8Array(src.slice(0, srcEnd)) // we copy the data in case it changes while external data is processed
    ;
    let savedStructures = currentStructures;
    let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
    let savedPackr = currentUnpackr;
    let savedSequentialMode = sequentialMode;
    let value = callback();
    srcEnd = savedSrcEnd;
    position = savedPosition;
    stringPosition = savedStringPosition;
    srcStringStart = savedSrcStringStart;
    srcStringEnd = savedSrcStringEnd;
    srcString = savedSrcString;
    strings = savedStrings;
    referenceMap = savedReferenceMap;
    bundledStrings = savedBundledStrings;
    src = savedSrc;
    sequentialMode = savedSequentialMode;
    currentStructures = savedStructures;
    currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
    currentUnpackr = savedPackr;
    dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
    return value;
}
function clearSource() {
    src = null;
    referenceMap = null;
    currentStructures = null;
}
function addExtension(extension) {
    if (extension.unpack) currentExtensions[extension.type] = extension.unpack;
    else currentExtensions[extension.type] = extension;
}
const mult10 = new Array(147) // this is a table matching binary exponents to the multiplier to determine significant digit rounding
;
for(let i = 0; i < 256; i++)mult10[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
const Decoder = Unpackr;
var defaultUnpackr = new Unpackr({
    useRecords: false
});
const unpack = defaultUnpackr.unpack;
const unpackMultiple = defaultUnpackr.unpackMultiple;
const decode = defaultUnpackr.unpack;
const FLOAT32_OPTIONS = {
    NEVER: 0,
    ALWAYS: 1,
    DECIMAL_ROUND: 3,
    DECIMAL_FIT: 4
};
let f32Array = new Float32Array(1);
let u8Array = new Uint8Array(f32Array.buffer, 0, 4);
function roundFloat32(float32Number) {
    f32Array[0] = float32Number;
    let multiplier = mult10[(u8Array[3] & 0x7f) << 1 | u8Array[2] >> 7];
    return (multiplier * float32Number + (float32Number > 0 ? 0.5 : -0.5) >> 0) / multiplier;
}
function setReadStruct(updatedReadStruct, loadedStructs, saveState) {
    readStruct = updatedReadStruct;
    onLoadedStructures = loadedStructs;
    onSaveState = saveState;
}

},{"b5a1b40c14b71778":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Dasa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given an Iterable first argument, returns an Iterable where each value is packed as a Buffer
 * If the argument is only Async Iterable, the return value will be an Async Iterable.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterator} objectIterator - iterable source, like a Readable object stream, an array, Set, or custom object
 * @param {options} [options] - msgpackr pack options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator>}
 */ parcelHelpers.export(exports, "packIter", ()=>packIter);
/**
 * Given an Iterable/Iterator input which yields buffers, returns an IterableIterator which yields sync decoded objects
 * Or, given an Async Iterable/Iterator which yields promises resolving in buffers, returns an AsyncIterableIterator.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterableIterator} bufferIterator
 * @param {object} [options] - unpackr options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator}
 */ parcelHelpers.export(exports, "unpackIter", ()=>unpackIter);
parcelHelpers.export(exports, "decodeIter", ()=>decodeIter);
parcelHelpers.export(exports, "encodeIter", ()=>encodeIter);
var _packJs = require("./pack.js");
var _unpackJs = require("./unpack.js");
var Buffer = require("cf54f4ca76cd8e1c").Buffer;
function packIter(objectIterator, options = {}) {
    if (!objectIterator || typeof objectIterator !== "object") throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");
    else if (typeof objectIterator[Symbol.iterator] === "function") return packIterSync(objectIterator, options);
    else if (typeof objectIterator.then === "function" || typeof objectIterator[Symbol.asyncIterator] === "function") return packIterAsync(objectIterator, options);
    else throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise");
}
function* packIterSync(objectIterator, options) {
    const packr = new (0, _packJs.Packr)(options);
    for (const value of objectIterator)yield packr.pack(value);
}
async function* packIterAsync(objectIterator, options) {
    const packr = new (0, _packJs.Packr)(options);
    for await (const value of objectIterator)yield packr.pack(value);
}
function unpackIter(bufferIterator, options = {}) {
    if (!bufferIterator || typeof bufferIterator !== "object") throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
    const unpackr = new (0, _unpackJs.Unpackr)(options);
    let incomplete;
    const parser = (chunk)=>{
        let yields;
        // if there's incomplete data from previous chunk, concatinate and try again
        if (incomplete) {
            chunk = Buffer.concat([
                incomplete,
                chunk
            ]);
            incomplete = undefined;
        }
        try {
            yields = unpackr.unpackMultiple(chunk);
        } catch (err) {
            if (err.incomplete) {
                incomplete = chunk.slice(err.lastPosition);
                yields = err.values;
            } else throw err;
        }
        return yields;
    };
    if (typeof bufferIterator[Symbol.iterator] === "function") return function* iter() {
        for (const value of bufferIterator)yield* parser(value);
    }();
    else if (typeof bufferIterator[Symbol.asyncIterator] === "function") return async function* iter() {
        for await (const value of bufferIterator)yield* parser(value);
    }();
}
const decodeIter = unpackIter;
const encodeIter = packIter;

},{"cf54f4ca76cd8e1c":"fCgem","./pack.js":"kgB08","./unpack.js":"hUNII","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmmMY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LRFUExpirer", ()=>(0, _lrfuexpirerJs.LRFUExpirer));
parcelHelpers.export(exports, "WeakLRUCache", ()=>WeakLRUCache);
var _lrfuexpirerJs = require("./LRFUExpirer.js");
let defaultExpirer;
class WeakLRUCache extends Map {
    constructor(options){
        super();
        this.hits = 0;
        this.misses = 0;
        if (options && options.cacheSize) options.lruSize = options.cacheSize >> 2;
        if (options && options.clearKeptInterval) {
            this.clearKeptInterval = options.clearKeptInterval;
            this.clearKeptCount = 0;
            this.clearKeptObjects = options.clearKeptObjects;
        }
        this.expirer = (options ? options.expirer === false ? defaultNoLRUExpirer : options.expirer : null) || defaultExpirer || (defaultExpirer = new (0, _lrfuexpirerJs.LRFUExpirer)(options));
        this.deferRegister = Boolean(options && options.deferRegister);
        let registry = this.registry = new FinalizationRegistry((key)=>{
            let entry = super.get(key);
            if (entry && entry.deref && entry.deref() === undefined) super.delete(key);
        });
    }
    onRemove(entry) {
        let target = entry.deref && entry.deref();
        if (target) {
            // remove strong reference, so only a weak reference, wait until it is finalized to remove
            this.registry.register(target, entry.key);
            entry.value = undefined;
        } else if (entry.key) {
            let currentEntry = super.get(entry.key);
            if (currentEntry === entry) super.delete(entry.key);
        }
    }
    get(key, mode) {
        let entry = super.get(key);
        let value;
        if (entry) {
            this.hits++;
            value = entry.value;
            if (value === (0, _lrfuexpirerJs.EXPIRED_ENTRY)) {
                value = entry.deref && entry.deref();
                if (value === undefined) super.delete(key);
                else {
                    entry.value = value;
                    if (this.clearKeptInterval) this.incrementClearKeptCount();
                    if (mode !== 1) this.expirer.used(entry);
                    return mode === 2 ? value : entry;
                }
            } else {
                if (mode !== 1) this.expirer.used(entry);
                return mode === 2 ? value : entry;
            }
        } else this.misses++;
    }
    getValue(key) {
        return this.get(key, 2);
    }
    setValue(key, value, expirationPriority) {
        let entry;
        if (value && typeof value == "object") {
            entry = new WeakRef(value);
            if (this.clearKeptInterval) this.incrementClearKeptCount();
            entry.value = value;
            if (this.deferRegister) {
                entry.key = key;
                entry.cache = this;
            } else this.registry.register(value, key);
        } else if (value !== undefined) entry = {
            value,
            key,
            cache: this
        };
        // else entry is undefined
        this.set(key, entry, expirationPriority);
        return entry;
    }
    incrementClearKeptCount() {
        if (++this.clearKeptCount >= this.clearKeptInterval) {
            this.clearKeptCount = 0;
            if (this.clearKeptObjects) this.clearKeptObjects();
            if (this.registry.cleanupSome) this.registry.cleanupSome();
        }
    }
    set(key, entry, expirationPriority) {
        let oldEntry = super.get(key);
        if (oldEntry) this.expirer.delete(oldEntry);
        return this.insert(key, entry, expirationPriority);
    }
    insert(key, entry, expirationPriority) {
        if (entry) this.expirer.used(entry, expirationPriority);
        return super.set(key, entry);
    }
    delete(key) {
        let oldEntry = super.get(key);
        if (oldEntry) this.expirer.delete(oldEntry);
        return super.delete(key);
    }
    used(entry, expirationPriority) {
        this.expirer.used(entry, expirationPriority);
    }
    clear() {
        for (let [key, entry] of this){
            this.expirer.delete(entry);
            super.delete(key);
        }
    }
}
class NoLRUExpirer {
    used(entry) {
        if (entry.cache) entry.cache.onRemove(entry);
        else if (entry.deref) entry.value = (0, _lrfuexpirerJs.EXPIRED_ENTRY);
    }
    delete(entry) {
    // nothing to do here, we don't have a separate cache here
    }
}
const defaultNoLRUExpirer = new NoLRUExpirer();

},{"./LRFUExpirer.js":"iR7b8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iR7b8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EXPIRED_ENTRY", ()=>EXPIRED_ENTRY);
/* bit pattern:
*  < is-in-lru 1 bit > ...< mask/or bits 6 bits > <lru index 2 bits > < position in cache - 22 bits >
*/ parcelHelpers.export(exports, "LRFUExpirer", ()=>LRFUExpirer);
const PINNED_IN_MEMORY = 0x7fffffff;
const NOT_IN_LRU = 0x40000000;
const EXPIRED_ENTRY = {
    description: "This cache entry value has been expired from the LRFU cache, and is waiting for garbage collection to be removed."
};
class LRFUExpirer {
    constructor(options){
        this.lruSize = options && options.lruSize || 0x2000;
        if (this.lruSize > 0x400000) throw new Error("The LRU/cache size was larger than the maximum cache size of 16777216 (LRU size of 4194304)");
        this.reset();
        startTimedCleanup(new WeakRef(this), options && options.cleanupInterval || 60000);
    }
    delete(entry) {
        if (entry.position < NOT_IN_LRU) this.lru[entry.position >> 22 & 3][entry.position & 0x3fffff] = null;
        entry.position |= NOT_IN_LRU;
    }
    used(entry, expirationPriority) {
        let originalPosition = entry.position;
        let orMask;
        if (expirationPriority < 0) {
            // pin this in memory, first remove from LRFU and then mark it as pinned in memory
            if (entry.position < NOT_IN_LRU) this.lru[entry.position >> 22 & 3][entry.position & 0x3fffff] = null;
            entry.position = PINNED_IN_MEMORY;
            return;
        } else if (entry.position == PINNED_IN_MEMORY && expirationPriority == undefined) return;
        else if (expirationPriority >= 0) {
            let bits = 0;
            if (expirationPriority > this.lruSize >> 2) expirationPriority = this.lruSize >> 2;
            while(expirationPriority > 0){
                expirationPriority = expirationPriority >> 1;
                bits++;
            }
            expirationPriority = bits;
        } else if (originalPosition >= 0) expirationPriority = originalPosition >> 24 & 0x3f;
        else expirationPriority = 0;
        let lruPosition;
        let lruIndex;
        if (originalPosition < NOT_IN_LRU) {
            lruIndex = originalPosition >> 22 & 3;
            if (lruIndex >= 3) return; // can't get any higher than this, don't do anything
            let lru = this.lru[lruIndex];
            // check to see if it is in the same generation
            lruPosition = lru.position;
            if ((originalPosition > lruPosition ? lruPosition + this.lruSize : lruPosition) - originalPosition < this.lruSize >> 2) return; // only recently added, don't promote
            lru[originalPosition & 0x3fffff] = null // remove it, we are going to move/promote it
            ;
            lruIndex++;
        } else lruIndex = 0;
        this.insertEntry(entry, lruIndex, expirationPriority);
    }
    insertEntry(entry, lruIndex, expirationPriority) {
        let lruPosition, nextLru = this.lru[lruIndex];
        let orMask = 0x3fffff >> 22 - expirationPriority;
        do {
            // put it in the next lru
            lruPosition = nextLru.position | orMask;
            let previousEntry = nextLru[lruPosition & 0x3fffff];
            nextLru[lruPosition & 0x3fffff] = entry;
            if (entry) entry.position = lruPosition | expirationPriority << 24;
            nextLru.position = ++lruPosition;
            if ((lruPosition & 0x3fffff) >= this.lruSize) {
                // reset at the beginning of the lru cache
                lruPosition &= 0x7fc00000;
                nextLru.position = lruPosition;
                nextLru.cycles++;
            }
            entry = previousEntry;
            if (entry && (nextLru = this.lru[--lruIndex])) {
                expirationPriority = (entry.position || 0) >> 24 & 0x3f;
                orMask = 0x3fffff >> 22 - expirationPriority;
            } else break;
        }while (true);
        if (entry) {
            entry.position |= NOT_IN_LRU;
            if (entry.cache) entry.cache.onRemove(entry);
            else if (entry.deref) entry.value = EXPIRED_ENTRY;
        }
    }
    reset() {
        /*	if (this.lru) {
			for (let i = 0; i < 4; i++) {
				for (let j = 0, l = this.lru.length; j < l; j++) {
					let entry =	this.lru[i][j]
					if (entry) {// this one was removed
						entry.position |= NOT_IN_LRU
						if (entry.cache)
							entry.cache.onRemove(entry)
						else if (entry.deref) // if we have already registered the entry in the finalization registry, just clear it
							entry.value = EXPIRED_ENTRY
					}
				}
			}
		}*/ this.lru = [];
        for(let i = 0; i < 4; i++){
            this.lru[i] = new Array(this.lruSize);
            this.lru[i].position = i << 22;
            this.lru[i].cycles = 0;
        }
    }
    cleanup() {
        let toClear = this.lruSize >> 4 // 1/16 of the lru cache at a time
        ;
        for(let i = 3; i >= 0; i--){
            let lru = this.lru[i];
            for(let j = 0, l = toClear; j < l; j++){
                if (lru[lru.position & 0x3fffff]) {
                    toClear--;
                    this.insertEntry(null, i, 0);
                } else if ((++lru.position & 0x3fffff) >= this.lruSize) {
                    // reset at the beginning of the lru cache
                    lru.position &= 0x7fc00000;
                    lru.cycles++;
                }
            }
        }
    }
}
function startTimedCleanup(reference, cleanupInterval) {
    let interval = setInterval(()=>{
        let expirer = reference.deref();
        if (expirer) expirer.cleanup();
        else clearInterval(interval);
    }, cleanupInterval);
    if (interval.unref) interval.unref();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3onYt":[function(require,module,exports) {
/*
control character types:
1 - metadata
2 - symbols
6 - false
7 - true
8- 16 - negative doubles
16-24 positive doubles
27 - String starts with a character 27 or less or is an empty string
0 - multipart separator
> 27 normal string characters
*/ /*
* Convert arbitrary scalar values to buffer bytes with type preservation and type-appropriate ordering
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
* Convert arbitrary scalar values to buffer bytes with type preservation and type-appropriate ordering
*/ parcelHelpers.export(exports, "writeKey", ()=>writeKey);
parcelHelpers.export(exports, "readKey", ()=>readKey);
parcelHelpers.export(exports, "enableNullTermination", ()=>enableNullTermination);
parcelHelpers.export(exports, "encoder", ()=>encoder);
parcelHelpers.export(exports, "toBufferKey", ()=>toBufferKey);
parcelHelpers.export(exports, "fromBufferKey", ()=>fromBufferKey);
parcelHelpers.export(exports, "compareKeys", ()=>compareKeys);
parcelHelpers.export(exports, "MINIMUM_KEY", ()=>MINIMUM_KEY);
parcelHelpers.export(exports, "MAXIMUM_KEY", ()=>MAXIMUM_KEY);
var Buffer = require("2b75c77ea2dd94f7").Buffer;
var process = require("607edc151ff7bab");
const float64Array = new Float64Array(2);
const int32Array = new Int32Array(float64Array.buffer, 0, 4);
let nullTerminate = false;
let textEncoder;
try {
    textEncoder = new TextEncoder();
} catch (error) {}
function writeKey(key1, target1, position1, inSequence1) {
    let targetView1 = target1.dataView;
    if (!targetView1) targetView1 = target1.dataView = new DataView(target1.buffer, target1.byteOffset, target1.byteLength + 3 >> 2 << 2);
    switch(typeof key1){
        case "string":
            let strLength1 = key1.length;
            let c11 = key1.charCodeAt(0);
            if (!(c11 >= 28)) target1[position1++] = 27;
            if (strLength1 < 0x40) {
                let i1, c21;
                for(i1 = 0; i1 < strLength1; i1++){
                    c11 = key1.charCodeAt(i1);
                    if (c11 <= 4) {
                        target1[position1++] = 4;
                        target1[position1++] = c11;
                    } else if (c11 < 0x80) target1[position1++] = c11;
                    else if (c11 < 0x800) {
                        target1[position1++] = c11 >> 6 | 0xc0;
                        target1[position1++] = c11 & 0x3f | 0x80;
                    } else if ((c11 & 0xfc00) === 0xd800 && ((c21 = key1.charCodeAt(i1 + 1)) & 0xfc00) === 0xdc00) {
                        c11 = 0x10000 + ((c11 & 0x03ff) << 10) + (c21 & 0x03ff);
                        i1++;
                        target1[position1++] = c11 >> 18 | 0xf0;
                        target1[position1++] = c11 >> 12 & 0x3f | 0x80;
                        target1[position1++] = c11 >> 6 & 0x3f | 0x80;
                        target1[position1++] = c11 & 0x3f | 0x80;
                    } else {
                        target1[position1++] = c11 >> 12 | 0xe0;
                        target1[position1++] = c11 >> 6 & 0x3f | 0x80;
                        target1[position1++] = c11 & 0x3f | 0x80;
                    }
                }
            } else {
                if (target1.utf8Write) position1 += target1.utf8Write(key1, position1, 0xffffffff);
                else position1 += textEncoder.encodeInto(key1, target1.subarray(position1)).written;
                if (position1 > target1.length - 4) throw new RangeError("String does not fit in target buffer");
            }
            break;
        case "number":
            float64Array[0] = key1;
            let lowInt1 = int32Array[0];
            let highInt1 = int32Array[1];
            let length1;
            if (key1 < 0) {
                targetView1.setInt32(position1 + 4, ~(lowInt1 >>> 4 | highInt1 << 28));
                targetView1.setInt32(position1 + 0, (highInt1 ^ 0x7fffffff) >>> 4);
                targetView1.setInt32(position1 + 8, (lowInt1 & 0xf ^ 0xf) << 4, true) // just always do the null termination here
                ;
                return position1 + 9;
            } else if (lowInt1 & 0xf || inSequence1) length1 = 9;
            else if (lowInt1 & 0xfffff) length1 = 8;
            else if (lowInt1 || highInt1 & 0xf) length1 = 6;
            else length1 = 4;
            // switching order to go to little endian
            targetView1.setInt32(position1 + 0, highInt1 >>> 4 | 0x10000000);
            targetView1.setInt32(position1 + 4, lowInt1 >>> 4 | highInt1 << 28);
            // if (length == 9 || nullTerminate)
            targetView1.setInt32(position1 + 8, (lowInt1 & 0xf) << 4, true);
            return position1 + length1;
        case "object":
            if (key1) {
                if (Array.isArray(key1)) {
                    for(let i1 = 0, l1 = key1.length; i1 < l1; i1++){
                        if (i1 > 0) target1[position1++] = 0;
                        position1 = writeKey(key1[i1], target1, position1, true);
                    }
                    break;
                } else if (key1 instanceof Uint8Array) {
                    target1.set(key1, position1);
                    position1 += key1.length;
                    break;
                } else throw new Error("Unable to serialize object as a key");
            } else target1[position1++] = 0;
            break;
        case "boolean":
            targetView1.setUint32(position1++, key1 ? 7 : 6, true);
            return position1;
        case "bigint":
            return writeKey(Number(key1), target1, position1, inSequence1);
        case "undefined":
            return position1;
        // undefined is interpreted as the absence of a key, signified by zero length
        case "symbol":
            target1[position1++] = 2;
            return writeKey(key1.description, target1, position1, inSequence1);
        default:
            throw new Error("Can not serialize key of type " + typeof key1);
    }
    if (nullTerminate && !inSequence1) targetView1.setUint32(position1, 0);
    return position1;
}
let position;
function readKey(buffer1, start1, end1, inSequence1) {
    buffer1[end1] = 0 // make sure it is null terminated
    ;
    position = start1;
    let controlByte1 = buffer1[position];
    let value1;
    if (controlByte1 < 24) {
        if (controlByte1 < 8) {
            position++;
            if (controlByte1 == 6) value1 = false;
            else if (controlByte1 == 7) value1 = true;
            else if (controlByte1 == 0) value1 = null;
            else if (controlByte1 == 2) value1 = Symbol.for(readString(buffer1));
            else return Uint8Array.prototype.slice.call(buffer1, start1, end1);
        } else {
            let dataView1 = buffer1.dataView || (buffer1.dataView = new DataView(buffer1.buffer, buffer1.byteOffset, buffer1.byteLength + 3 >> 2 << 2));
            let highInt1 = dataView1.getInt32(position) << 4;
            let size1 = end1 - position;
            let lowInt1;
            if (size1 > 4) {
                lowInt1 = dataView1.getInt32(position + 4);
                highInt1 |= lowInt1 >>> 28;
                if (size1 <= 6) lowInt1 &= -4096;
                lowInt1 = lowInt1 << 4;
                if (size1 > 8) lowInt1 = lowInt1 | buffer1[position + 8] >> 4;
            } else lowInt1 = 0;
            if (controlByte1 < 16) {
                // negative gets negated
                highInt1 = highInt1 ^ 0x7fffffff;
                lowInt1 = ~lowInt1;
            }
            int32Array[1] = highInt1;
            int32Array[0] = lowInt1;
            value1 = float64Array[0];
            position += 9;
        }
    } else {
        if (controlByte1 == 27) position++;
        value1 = readString(buffer1);
    /*let strStart = position
		let strEnd = end
		for (; position < end; position++) {
			if (buffer[position] == 0) {
			break
			}
		}
		value = buffer.toString('utf8', strStart, position++)*/ }
    while(position < end1){
        if (buffer1[position] === 0) position++;
        if (inSequence1) {
            encoder.position = position;
            return value1;
        }
        let nextValue1 = readKey(buffer1, position, end1, true);
        if (value1 instanceof Array) value1.push(nextValue1);
        else value1 = [
            value1,
            nextValue1
        ];
    }
    return value1;
}
const enableNullTermination = ()=>nullTerminate = true;
const encoder = {
    writeKey,
    readKey,
    enableNullTermination
};
let targetBuffer = [];
let targetPosition = 0;
const hasNodeBuffer = typeof Buffer !== "undefined";
const ByteArrayAllocate = hasNodeBuffer ? Buffer.allocUnsafeSlow : Uint8Array;
const toBufferKey = (key1)=>{
    let newBuffer1;
    if (targetPosition + 100 > targetBuffer.length) {
        targetBuffer = new ByteArrayAllocate(8192);
        targetPosition = 0;
        newBuffer1 = true;
    }
    try {
        let result1 = targetBuffer.slice(targetPosition, targetPosition = writeKey(key1, targetBuffer, targetPosition));
        if (targetPosition > targetBuffer.length) {
            if (newBuffer1) throw new Error("Key is too large");
            return toBufferKey(key1);
        }
        return result1;
    } catch (error1) {
        if (newBuffer1) throw error1;
        targetPosition = targetBuffer.length;
        return toBufferKey(key1);
    }
};
const fromBufferKey = (sourceBuffer1)=>{
    return readKey(sourceBuffer1, 0, sourceBuffer1.length);
};
const fromCharCode = String.fromCharCode;
function makeStringBuilder() {
    let stringBuildCode1 = "(source) => {";
    let previous1 = [];
    for(let i1 = 0; i1 < 0x30; i1++){
        let v1 = fromCharCode((i1 & 0xf) + 97) + fromCharCode((i1 >> 4) + 97);
        stringBuildCode1 += `
		let ${v1} = source[position++]
		if (${v1} > 4) {
			if (${v1} >= 0x80) ${v1} = finishUtf8(${v1}, source)
		} else {
			if (${v1} === 4)
				${v1} = source[position++]
			else
				return fromCharCode(${previous1})
		}
		`;
        previous1.push(v1);
        if (i1 == 1000000) finishUtf8();
    }
    stringBuildCode1 += `return fromCharCode(${previous1}) + readString(source)}`;
    return stringBuildCode1;
}
let pendingSurrogate;
function finishUtf8(byte11, src1) {
    if ((byte11 & 0xe0) === 0xc0) {
        // 2 bytes
        const byte21 = src1[position++] & 0x3f;
        return (byte11 & 0x1f) << 6 | byte21;
    } else if ((byte11 & 0xf0) === 0xe0) {
        // 3 bytes
        const byte21 = src1[position++] & 0x3f;
        const byte31 = src1[position++] & 0x3f;
        return (byte11 & 0x1f) << 12 | byte21 << 6 | byte31;
    } else if ((byte11 & 0xf8) === 0xf0) {
        // 4 bytes
        if (pendingSurrogate) {
            byte11 = pendingSurrogate;
            pendingSurrogate = null;
            position += 3;
            return byte11;
        }
        const byte21 = src1[position++] & 0x3f;
        const byte31 = src1[position++] & 0x3f;
        const byte41 = src1[position++] & 0x3f;
        let unit1 = (byte11 & 0x07) << 0x12 | byte21 << 0x0c | byte31 << 0x06 | byte41;
        if (unit1 > 0xffff) {
            pendingSurrogate = 0xdc00 | unit1 & 0x3ff;
            unit1 = unit1 - 0x10000 >>> 10 & 0x3ff | 0xd800;
            position -= 4 // reset so we can return the next part of the surrogate pair
            ;
        }
        return unit1;
    } else return byte11;
}
const readString = typeof process !== "undefined" && process.isBun ? // have to manually update it
function(reading1) {
    let { setPosition: setPosition1, getPosition: getPosition1, readString: readString1 } = reading1;
    return (source1)=>{
        setPosition1(position);
        let value1 = readString1(source1);
        position = getPosition1();
        return value1;
    };
}(new Function("fromCharCode", "let position; let readString = " + makeStringBuilder() + ";return {" + "setPosition(p) { position = p }," + "getPosition() { return position }," + "readString }")(fromCharCode)) : eval(makeStringBuilder());
function compareKeys(a1, b1) {
    // compare with type consistency that matches binary comparison
    if (typeof a1 == "object") {
        if (!a1) return b1 == null ? 0 : -1;
        if (a1.compare) {
            if (b1 == null) return 1;
            else if (b1.compare) return a1.compare(b1);
            else return -1;
        }
        let arrayComparison1;
        if (b1 instanceof Array) {
            let i1 = 0;
            while((arrayComparison1 = compareKeys(a1[i1], b1[i1])) == 0 && i1 <= a1.length)i1++;
            return arrayComparison1;
        }
        arrayComparison1 = compareKeys(a1[0], b1);
        if (arrayComparison1 == 0 && a1.length > 1) return 1;
        return arrayComparison1;
    } else if (typeof a1 == typeof b1) {
        if (typeof a1 === "symbol") {
            a1 = Symbol.keyFor(a1);
            b1 = Symbol.keyFor(b1);
        }
        return a1 < b1 ? -1 : a1 === b1 ? 0 : 1;
    } else if (typeof b1 == "object") {
        if (b1 instanceof Array) return -compareKeys(b1, a1);
        return 1;
    } else return typeOrder[typeof a1] < typeOrder[typeof b1] ? -1 : 1;
}
const typeOrder = {
    symbol: 0,
    undefined: 1,
    boolean: 2,
    number: 3,
    string: 4
};
const MINIMUM_KEY = null;
const MAXIMUM_KEY = new Uint8Array([
    0xff
]);

},{"2b75c77ea2dd94f7":"fCgem","607edc151ff7bab":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV0g9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAILED_CONDITION", ()=>FAILED_CONDITION);
parcelHelpers.export(exports, "ABORT", ()=>ABORT);
parcelHelpers.export(exports, "IF_EXISTS", ()=>IF_EXISTS);
parcelHelpers.export(exports, "addWriteMethods", ()=>addWriteMethods);
parcelHelpers.export(exports, "asBinary", ()=>asBinary);
var _nativeJs = require("./native.js");
var _whenJs = require("./util/when.js");
var Buffer = require("83feeec0ef5bf16a").Buffer;
var backpressureArray;
const WAITING_OPERATION = 0x2000000;
const BACKPRESSURE_THRESHOLD = 300000;
const TXN_DELIMITER = 0x8000000;
const TXN_COMMITTED = 0x10000000;
const TXN_FLUSHED = 0x20000000;
const TXN_FAILED = 0x40000000;
const FAILED_CONDITION = 0x4000000;
const REUSE_BUFFER_MODE = 512;
const RESET_BUFFER_MODE = 1024;
const NO_RESOLVE = 16;
const HAS_TXN = 8;
const CONDITIONAL_VERSION_LESS_THAN = 0x800;
const CONDITIONAL_ALLOW_NOTFOUND = 0x800;
const SYNC_PROMISE_SUCCESS = Promise.resolve(true);
const SYNC_PROMISE_FAIL = Promise.resolve(false);
SYNC_PROMISE_SUCCESS.isSync = true;
SYNC_PROMISE_FAIL.isSync = true;
const PROMISE_SUCCESS = Promise.resolve(true);
const ABORT = 4.452694326329068e-106; // random/unguessable numbers, which work across module/versions and native
const IF_EXISTS = 3.542694326329068e-103;
const CALLBACK_THREW = {};
const LocalSharedArrayBuffer = typeof Deno != "undefined" ? ArrayBuffer : SharedArrayBuffer; // Deno can't handle SharedArrayBuffer as an FFI argument due to https://github.com/denoland/deno/issues/12678
const ByteArray = typeof Buffer != "undefined" ? function(buffer) {
    return Buffer.from(buffer);
} : Uint8Array;
const queueTask = typeof setImmediate != "undefined" ? setImmediate : setTimeout; // TODO: Or queueMicrotask?
//let debugLog = []
const WRITE_BUFFER_SIZE = 0x10000;
var log = [];
function addWriteMethods(LMDBStore, { env, fixedBuffer, resetReadTxn, useWritemap, maxKeySize, eventTurnBatching, txnStartThreshold, batchStartThreshold, overlappingSync, commitDelay, separateFlushed, maxFlushDelay }) {
    //  stands for write instructions
    var dynamicBytes;
    function allocateInstructionBuffer(lastPosition) {
        // Must use a shared buffer on older node in order to use Atomics, and it is also more correct since we are 
        // indeed accessing and modifying it from another thread (in C). However, Deno can't handle it for
        // FFI so aliased above
        let buffer = new LocalSharedArrayBuffer(WRITE_BUFFER_SIZE);
        let lastBytes = dynamicBytes;
        dynamicBytes = new ByteArray(buffer);
        let uint32 = dynamicBytes.uint32 = new Uint32Array(buffer, 0, WRITE_BUFFER_SIZE >> 2);
        uint32[2] = 0;
        dynamicBytes.float64 = new Float64Array(buffer, 0, WRITE_BUFFER_SIZE >> 3);
        buffer.address = (0, _nativeJs.getBufferAddress)(dynamicBytes);
        uint32.address = buffer.address + uint32.byteOffset;
        dynamicBytes.position = 1; // we start at position 1 to save space for writing the txn id before the txn delimiter
        if (lastPosition) {
            lastBytes.float64[lastPosition + 1] = dynamicBytes.uint32.address + (dynamicBytes.position << 3);
            lastBytes.uint32[lastPosition << 1] = 3; // pointer instruction
        }
        return dynamicBytes;
    }
    var newBufferThreshold = WRITE_BUFFER_SIZE - maxKeySize - 64 >> 3; // need to reserve more room if we do inline values
    var outstandingWriteCount = 0;
    var startAddress = 0;
    var writeTxn = null;
    var committed;
    var abortedNonChildTransactionWarn;
    var nextTxnCallbacks = [];
    var commitPromise, flushPromise, flushResolvers = [], batchFlushResolvers = [];
    commitDelay = commitDelay || 0;
    eventTurnBatching = eventTurnBatching === false ? false : true;
    var enqueuedCommit;
    var afterCommitCallbacks = [];
    var beforeCommitCallbacks = [];
    var enqueuedEventTurnBatch;
    var batchDepth = 0;
    var lastWritePromise;
    var writeBatchStart, outstandingBatchCount, lastSyncTxnFlush, lastFlushTimeout, lastFlushCallback;
    var hasUnresolvedTxns;
    txnStartThreshold = txnStartThreshold || 5;
    batchStartThreshold = batchStartThreshold || 1000;
    maxFlushDelay = maxFlushDelay || 500;
    allocateInstructionBuffer();
    dynamicBytes.uint32[2] = TXN_DELIMITER | TXN_COMMITTED | TXN_FLUSHED;
    var txnResolution, nextResolution = {
        uint32: dynamicBytes.uint32,
        flagPosition: 2,
        flag: 0,
        valueBuffer: null,
        next: null,
        meta: null
    };
    var uncommittedResolution = {
        uint32: null,
        flagPosition: 2,
        flag: 0,
        valueBuffer: null,
        next: nextResolution,
        meta: null
    };
    var unwrittenResolution = nextResolution;
    var lastPromisedResolution = uncommittedResolution;
    var lastQueuedResolution = uncommittedResolution;
    function writeInstructions(flags, store, key, value, version, ifVersion) {
        let writeStatus;
        let targetBytes, position, encoder;
        let valueSize, valueBuffer, valueBufferStart;
        if (flags & 2) {
            // encode first in case we have to write a shared structure
            encoder = store.encoder;
            if (value && value["\x10binary-data\x02"]) valueBuffer = value["\x10binary-data\x02"];
            else if (encoder) {
                if (encoder.copyBuffers) valueBuffer = encoder.encode(value, REUSE_BUFFER_MODE | (writeTxn ? RESET_BUFFER_MODE : 0)); // in addition, if we are writing sync, after using, we can immediately reset the encoder's position to reuse that space, which can improve performance
                else {
                    valueBuffer = encoder.encode(value);
                    if (typeof valueBuffer == "string") valueBuffer = Buffer.from(valueBuffer); // TODO: Would be nice to write strings inline in the instructions
                }
            } else if (typeof value == "string") valueBuffer = Buffer.from(value); // TODO: Would be nice to write strings inline in the instructions
            else if (value instanceof Uint8Array) valueBuffer = value;
            else throw new Error("Invalid value to put in database " + value + " (" + typeof value + "), consider using encoder");
            valueBufferStart = valueBuffer.start;
            if (valueBufferStart > -1) valueSize = valueBuffer.end - valueBufferStart; // size
            else valueSize = valueBuffer.length;
            if (store.dupSort && valueSize > maxKeySize) throw new Error("The value is larger than the maximum size (" + maxKeySize + ") for a value in a dupSort database");
        } else valueSize = 0;
        if (writeTxn) {
            targetBytes = fixedBuffer;
            position = 0;
        } else {
            if (eventTurnBatching && !enqueuedEventTurnBatch && batchDepth == 0) {
                enqueuedEventTurnBatch = queueTask(()=>{
                    try {
                        for(let i = 0, l = beforeCommitCallbacks.length; i < l; i++)try {
                            beforeCommitCallbacks[i]();
                        } catch (error) {
                            console.error("In beforecommit callback", error);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                    enqueuedEventTurnBatch = null;
                    batchDepth--;
                    finishBatch();
                    if (writeBatchStart) writeBatchStart(); // TODO: When we support delay start of batch, optionally don't delay this
                });
                commitPromise = null; // reset the commit promise, can't know if it is really a new transaction prior to finishWrite being called
                flushPromise = null;
                writeBatchStart = writeInstructions(1, store);
                outstandingBatchCount = 0;
                batchDepth++;
            }
            targetBytes = dynamicBytes;
            position = targetBytes.position;
        }
        let uint32 = targetBytes.uint32, float64 = targetBytes.float64;
        let flagPosition = position << 1; // flagPosition is the 32-bit word starting position
        // don't increment position until we are sure we don't have any key writing errors
        if (!uint32) throw new Error("Internal buffers have been corrupted");
        uint32[flagPosition + 1] = store.db.dbi;
        if (flags & 4) {
            let keyStartPosition = (position << 3) + 12;
            let endPosition;
            try {
                endPosition = store.writeKey(key, targetBytes, keyStartPosition);
                if (!(keyStartPosition < endPosition) && (flags & 0xf) != 12) throw new Error("Invalid key or zero length key is not allowed in LMDB " + key);
            } catch (error) {
                targetBytes.fill(0, keyStartPosition);
                if (error.name == "RangeError") error = new Error("Key size is larger than the maximum key size (" + maxKeySize + ")");
                throw error;
            }
            let keySize = endPosition - keyStartPosition;
            if (keySize > maxKeySize) {
                targetBytes.fill(0, keyStartPosition); // restore zeros
                throw new Error("Key size is larger than the maximum key size (" + maxKeySize + ")");
            }
            uint32[flagPosition + 2] = keySize;
            position = endPosition + 16 >> 3;
            if (flags & 2) {
                let mustCompress;
                if (valueBufferStart > -1) {
                    // record pointer to value buffer
                    float64[position] = (valueBuffer.address || (valueBuffer.address = (0, _nativeJs.getAddress)(valueBuffer.buffer))) + valueBufferStart;
                    mustCompress = valueBuffer[valueBufferStart] >= 250; // this is the compression indicator, so we must compress
                } else {
                    let valueArrayBuffer = valueBuffer.buffer;
                    // record pointer to value buffer
                    let address = (valueArrayBuffer.address || (valueBuffer.length === 0 ? 0 : valueArrayBuffer.address = (0, _nativeJs.getAddress)(valueArrayBuffer))) + valueBuffer.byteOffset;
                    if (address <= 0 && valueBuffer.length > 0) console.error("Supplied buffer had an invalid address", address);
                    float64[position] = address;
                    mustCompress = valueBuffer[0] >= 250; // this is the compression indicator, so we must compress
                }
                uint32[(position++ << 1) - 1] = valueSize;
                if (store.compression && (valueSize >= store.compression.threshold || mustCompress)) {
                    flags |= 0x100000;
                    float64[position] = store.compression.address;
                    if (!writeTxn) (0, _nativeJs.compress)(env.address, uint32.address + (position << 3), ()=>{
                        // this is never actually called in NodeJS, just use to pin the buffer in memory until it is finished
                        // and is a no-op in Deno
                        if (!float64) throw new Error("No float64 available");
                    });
                    position++;
                }
            }
            if (ifVersion !== undefined) {
                if (ifVersion === null) flags |= 0x10; // if it does not exist, MDB_NOOVERWRITE
                else {
                    flags |= 0x100;
                    float64[position++] = ifVersion;
                }
            }
            if (version !== undefined) {
                flags |= 0x200;
                float64[position++] = version || 0;
            }
        } else position++;
        targetBytes.position = position;
        if (writeTxn) {
            uint32[0] = flags;
            (0, _nativeJs.write)(env.address, uint32.address);
            return ()=>uint32[0] & FAILED_CONDITION ? SYNC_PROMISE_FAIL : SYNC_PROMISE_SUCCESS;
        }
        // if we ever use buffers that haven't been zero'ed, need to clear out the next slot like this:
        // uint32[position << 1] = 0 // clear out the next slot
        let nextUint32;
        if (position > newBufferThreshold) {
            // make new buffer and make pointer to it
            let lastPosition = position;
            targetBytes = allocateInstructionBuffer(position);
            position = targetBytes.position;
            nextUint32 = targetBytes.uint32;
        } else nextUint32 = uint32;
        let resolution = nextResolution;
        // create the placeholder next resolution
        nextResolution = resolution.next = {
            uint32: nextUint32,
            flagPosition: position << 1,
            flag: 0,
            valueBuffer: fixedBuffer,
            next: null,
            meta: null
        };
        lastQueuedResolution = resolution;
        let writtenBatchDepth = batchDepth;
        return (callback)=>{
            if (writtenBatchDepth) {
                // if we are in a batch, the transaction can't close, so we do the faster,
                // but non-deterministic updates, knowing that the write thread can
                // just poll for the status change if we miss a status update
                writeStatus = uint32[flagPosition];
                uint32[flagPosition] = flags;
                //writeStatus = Atomics.or(uint32, flagPosition, flags)
                if (writeBatchStart && !writeStatus) {
                    outstandingBatchCount += 1 + (valueSize >> 12);
                    if (outstandingBatchCount > batchStartThreshold) {
                        outstandingBatchCount = 0;
                        writeBatchStart();
                        writeBatchStart = null;
                    }
                }
            } else // deterministically if it is ending, so we can reset the commit promise
            // so we use the slower atomic operation
            writeStatus = Atomics.or(uint32, flagPosition, flags);
            outstandingWriteCount++;
            if (writeStatus & TXN_DELIMITER) {
                commitPromise = null; // TODO: Don't reset these if this comes from the batch start operation on an event turn batch
                flushPromise = null;
                flushResolvers = [];
                queueCommitResolution(resolution);
                if (!startAddress) startAddress = uint32.address + (flagPosition << 2);
            }
            if (!writtenBatchDepth && batchFlushResolvers.length > 0) {
                flushResolvers.push(...batchFlushResolvers);
                batchFlushResolvers = [];
            }
            if (!flushPromise && overlappingSync) flushPromise = new Promise((resolve)=>{
                if (writtenBatchDepth) batchFlushResolvers.push(resolve);
                else flushResolvers.push(resolve);
            });
            if (writeStatus & WAITING_OPERATION) (0, _nativeJs.write)(env.address, 0);
            if (outstandingWriteCount > BACKPRESSURE_THRESHOLD && !writeBatchStart) {
                if (!backpressureArray) backpressureArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
                Atomics.wait(backpressureArray, 0, 0, Math.round(outstandingWriteCount / BACKPRESSURE_THRESHOLD));
            }
            if (startAddress) {
                if (eventTurnBatching) startWriting(); // start writing immediately because this has already been batched/queued
                else if (!enqueuedCommit && txnStartThreshold) enqueuedCommit = commitDelay == 0 && typeof setImmediate != "undefined" ? setImmediate(()=>startWriting()) : setTimeout(()=>startWriting(), commitDelay);
                else if (outstandingWriteCount > txnStartThreshold) startWriting();
            }
            if ((outstandingWriteCount & 7) === 0) resolveWrites();
            if (store.cache) resolution.meta = {
                key,
                store,
                valueSize: valueBuffer ? valueBuffer.length : 0
            };
            resolution.valueBuffer = valueBuffer;
            if (callback) {
                if (callback === IF_EXISTS) ifVersion = IF_EXISTS;
                else {
                    let meta = resolution.meta || (resolution.meta = {});
                    meta.reject = callback;
                    meta.resolve = (value)=>callback(null, value);
                    return;
                }
            }
            if (ifVersion === undefined) {
                if (writtenBatchDepth > 1) {
                    if (!resolution.flag && !store.cache) resolution.flag = NO_RESOLVE;
                    return PROMISE_SUCCESS; // or return undefined?
                }
                if (commitPromise) {
                    if (!resolution.flag) resolution.flag = NO_RESOLVE;
                } else {
                    commitPromise = new Promise((resolve, reject)=>{
                        let meta = resolution.meta || (resolution.meta = {});
                        meta.resolve = resolve;
                        resolve.unconditional = true;
                        meta.reject = reject;
                    });
                    if (separateFlushed) commitPromise.flushed = overlappingSync ? flushPromise : commitPromise;
                }
                return commitPromise;
            }
            lastWritePromise = new Promise((resolve, reject)=>{
                let meta = resolution.meta || (resolution.meta = {});
                meta.resolve = resolve;
                meta.reject = reject;
            });
            if (separateFlushed) lastWritePromise.flushed = overlappingSync ? flushPromise : lastWritePromise;
            return lastWritePromise;
        };
    }
    let committedFlushResolvers, lastSync = Promise.resolve();
    function startWriting() {
        if (enqueuedCommit) {
            clearImmediate(enqueuedCommit);
            enqueuedCommit = null;
        }
        let resolvers = flushResolvers;
        let start = Date.now();
        env.startWriting(startAddress, (status)=>{
            if (dynamicBytes.uint32[dynamicBytes.position << 1] & TXN_DELIMITER) queueCommitResolution(nextResolution);
            resolveWrites(true);
            switch(status){
                case 0:
                    for (let resolver of resolvers)resolver();
                    break;
                case 1:
                    break;
                case 2:
                    hasUnresolvedTxns = false;
                    executeTxnCallbacks();
                    return hasUnresolvedTxns;
                default:
                    try {
                        (0, _nativeJs.lmdbError)(status);
                    } catch (error) {
                        console.error(error);
                        if (commitRejectPromise) {
                            commitRejectPromise.reject(error);
                            commitRejectPromise = null;
                        }
                    }
            }
        });
        startAddress = 0;
    }
    function queueCommitResolution(resolution) {
        if (!(resolution.flag & HAS_TXN)) {
            resolution.flag = HAS_TXN;
            if (txnResolution) txnResolution.nextTxn = resolution;
            else txnResolution = resolution;
        }
    }
    var TXN_DONE = TXN_COMMITTED | TXN_FAILED;
    function resolveWrites(async) {
        // clean up finished instructions
        let instructionStatus;
        while((instructionStatus = unwrittenResolution.uint32[unwrittenResolution.flagPosition]) & 0x1000000){
            if (unwrittenResolution.callbacks) {
                nextTxnCallbacks.push(unwrittenResolution.callbacks);
                unwrittenResolution.callbacks = null;
            }
            outstandingWriteCount--;
            if (unwrittenResolution.flag !== HAS_TXN) {
                if (unwrittenResolution.flag === NO_RESOLVE && !unwrittenResolution.meta) {
                    // in this case we can completely remove from the linked list, clearing more memory
                    lastPromisedResolution.next = unwrittenResolution = unwrittenResolution.next;
                    continue;
                }
                unwrittenResolution.uint32 = null;
            }
            unwrittenResolution.valueBuffer = null;
            unwrittenResolution.flag = instructionStatus;
            lastPromisedResolution = unwrittenResolution;
            unwrittenResolution = unwrittenResolution.next;
        }
        while(txnResolution && (instructionStatus = txnResolution.uint32[txnResolution.flagPosition] & TXN_DONE))if (instructionStatus & TXN_FAILED) rejectCommit();
        else resolveCommit(async);
    }
    function resolveCommit(async) {
        afterCommit(txnResolution.uint32[txnResolution.flagPosition - 1]);
        if (async) resetReadTxn();
        else queueMicrotask(resetReadTxn); // TODO: only do this if there are actually committed writes?
        do if (uncommittedResolution.meta && uncommittedResolution.meta.resolve) {
            let resolve = uncommittedResolution.meta.resolve;
            if (uncommittedResolution.flag & FAILED_CONDITION && !resolve.unconditional) resolve(false);
            else resolve(true);
        }
        while ((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution);
        txnResolution = txnResolution.nextTxn;
    }
    var commitRejectPromise;
    function rejectCommit() {
        afterCommit();
        if (!commitRejectPromise) {
            let rejectFunction;
            commitRejectPromise = new Promise((resolve, reject)=>rejectFunction = reject);
            commitRejectPromise.reject = rejectFunction;
        }
        do if (uncommittedResolution.meta && uncommittedResolution.meta.reject) {
            let flag = uncommittedResolution.flag & 0xf;
            let error = new Error("Commit failed (see commitError for details)");
            error.commitError = commitRejectPromise;
            uncommittedResolution.meta.reject(error);
        }
        while ((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution);
        txnResolution = txnResolution.nextTxn;
    }
    function atomicStatus(uint32, flagPosition, newStatus) {
        if (batchDepth) {
            // if we are in a batch, the transaction can't close, so we do the faster,
            // but non-deterministic updates, knowing that the write thread can
            // just poll for the status change if we miss a status update
            let writeStatus = uint32[flagPosition];
            uint32[flagPosition] = newStatus;
            return writeStatus;
        //return Atomics.or(uint32, flagPosition, newStatus)
        } else // deterministically if it is ending, so we can reset the commit promise
        // so we use the slower atomic operation
        try {
            return Atomics.or(uint32, flagPosition, newStatus);
        } catch (error) {
            console.error(error);
            return;
        }
    }
    function afterCommit(txnId) {
        for(let i = 0, l = afterCommitCallbacks.length; i < l; i++)try {
            afterCommitCallbacks[i]({
                next: uncommittedResolution,
                last: txnResolution,
                txnId
            });
        } catch (error) {
            console.error("In aftercommit callback", error);
        }
    }
    async function executeTxnCallbacks() {
        env.writeTxn = writeTxn = {
            write: true
        };
        nextTxnCallbacks.isExecuting = true;
        for(let i = 0; i < nextTxnCallbacks.length; i++){
            let txnCallbacks = nextTxnCallbacks[i];
            for(let j = 0, l = txnCallbacks.length; j < l; j++){
                let userTxnCallback = txnCallbacks[j];
                let asChild = userTxnCallback.asChild;
                if (asChild) {
                    env.beginTxn(1); // abortable
                    let parentTxn = writeTxn;
                    env.writeTxn = writeTxn = {
                        write: true
                    };
                    try {
                        let result = userTxnCallback.callback();
                        if (result && result.then) {
                            hasUnresolvedTxns = true;
                            await result;
                        }
                        if (result === ABORT) env.abortTxn();
                        else env.commitTxn();
                        clearWriteTxn(parentTxn);
                        txnCallbacks[j] = result;
                    } catch (error) {
                        clearWriteTxn(parentTxn);
                        env.abortTxn();
                        txnError(error, txnCallbacks, j);
                    }
                } else try {
                    let result = userTxnCallback();
                    txnCallbacks[j] = result;
                    if (result && result.then) {
                        hasUnresolvedTxns = true;
                        await result;
                    }
                } catch (error) {
                    txnError(error, txnCallbacks, j);
                }
            }
        }
        nextTxnCallbacks = [];
        clearWriteTxn(null);
        if (hasUnresolvedTxns) env.resumeWriting();
        function txnError(error, txnCallbacks, i) {
            (txnCallbacks.errors || (txnCallbacks.errors = []))[i] = error;
            txnCallbacks[i] = CALLBACK_THREW;
        }
    }
    function finishBatch() {
        dynamicBytes.uint32[dynamicBytes.position + 1 << 1] = 0; // clear out the next slot
        let writeStatus = atomicStatus(dynamicBytes.uint32, dynamicBytes.position++ << 1, 2); // atomically write the end block
        nextResolution.flagPosition += 2;
        if (writeStatus & WAITING_OPERATION) (0, _nativeJs.write)(env.address, 0);
        if (dynamicBytes.position > newBufferThreshold) {
            allocateInstructionBuffer(dynamicBytes.position);
            nextResolution.flagPosition = dynamicBytes.position << 1;
            nextResolution.uint32 = dynamicBytes.uint32;
        }
    }
    function clearWriteTxn(parentTxn) {
        // TODO: We might actually want to track cursors in a write txn and manually
        // close them.
        if (writeTxn && writeTxn.refCount > 0) writeTxn.isDone = true;
        env.writeTxn = writeTxn = parentTxn || null;
    }
    Object.assign(LMDBStore.prototype, {
        put (key, value, versionOrOptions, ifVersion) {
            let callback, flags = 15, type = typeof versionOrOptions;
            if (type == "object" && versionOrOptions) {
                if (versionOrOptions.noOverwrite) flags |= 0x10;
                if (versionOrOptions.noDupData) flags |= 0x20;
                if (versionOrOptions.append) flags |= 0x20000;
                if (versionOrOptions.ifVersion != undefined) ifVersion = versionOrOptions.ifVersion;
                versionOrOptions = versionOrOptions.version;
                if (typeof ifVersion == "function") callback = ifVersion;
            } else if (type == "function") callback = versionOrOptions;
            return writeInstructions(flags, this, key, value, this.useVersions ? versionOrOptions || 0 : undefined, ifVersion)(callback);
        },
        remove (key, ifVersionOrValue, callback) {
            let flags = 13;
            let ifVersion, value;
            if (ifVersionOrValue !== undefined) {
                if (typeof ifVersionOrValue == "function") callback = ifVersionOrValue;
                else if (ifVersionOrValue === IF_EXISTS && !callback) // we have a handler for IF_EXISTS in the callback handler for remove
                callback = ifVersionOrValue;
                else if (this.useVersions) ifVersion = ifVersionOrValue;
                else {
                    flags = 14;
                    value = ifVersionOrValue;
                }
            }
            return writeInstructions(flags, this, key, value, undefined, ifVersion)(callback);
        },
        del (key, options, callback) {
            return this.remove(key, options, callback);
        },
        ifNoExists (key, callback) {
            return this.ifVersion(key, null, callback);
        },
        ifVersion (key, version, callback, options) {
            if (!callback) return new Batch((operations, callback)=>{
                let promise = this.ifVersion(key, version, operations, options);
                if (callback) promise.then(callback);
                return promise;
            });
            if (writeTxn) {
                if (version === undefined || this.doesExist(key, version)) {
                    callback();
                    return SYNC_PROMISE_SUCCESS;
                }
                return SYNC_PROMISE_FAIL;
            }
            let flags = key === undefined || version === undefined ? 1 : 4;
            if (options?.ifLessThan) flags |= CONDITIONAL_VERSION_LESS_THAN;
            if (options?.allowNotFound) flags |= CONDITIONAL_ALLOW_NOTFOUND;
            let finishStartWrite = writeInstructions(flags, this, key, undefined, undefined, version);
            let promise;
            batchDepth += 2;
            if (batchDepth > 2) promise = finishStartWrite();
            else {
                writeBatchStart = ()=>{
                    promise = finishStartWrite();
                };
                outstandingBatchCount = 0;
            }
            try {
                if (typeof callback === "function") callback();
                else for(let i = 0, l = callback.length; i < l; i++){
                    let operation = callback[i];
                    this[operation.type](operation.key, operation.value);
                }
            } finally{
                if (!promise) {
                    finishBatch();
                    batchDepth -= 2;
                    promise = finishStartWrite(); // finish write once all the operations have been written (and it hasn't been written prematurely)
                    writeBatchStart = null;
                } else {
                    batchDepth -= 2;
                    finishBatch();
                }
            }
            return promise;
        },
        batch (callbackOrOperations) {
            return this.ifVersion(undefined, undefined, callbackOrOperations);
        },
        drop (callback) {
            return writeInstructions(1036, this, Buffer.from([]), undefined, undefined, undefined)(callback);
        },
        clearAsync (callback) {
            if (this.encoder) {
                if (this.encoder.clearSharedData) this.encoder.clearSharedData();
                else if (this.encoder.structures) this.encoder.structures = [];
            }
            return writeInstructions(12, this, Buffer.from([]), undefined, undefined, undefined)(callback);
        },
        _triggerError () {
            finishBatch();
        },
        putSync (key, value, versionOrOptions, ifVersion) {
            if (writeTxn) return this.put(key, value, versionOrOptions, ifVersion) === SYNC_PROMISE_SUCCESS;
            else return this.transactionSync(()=>this.put(key, value, versionOrOptions, ifVersion) === SYNC_PROMISE_SUCCESS, overlappingSync ? 0x10002 : 2); // non-abortable, async flush
        },
        removeSync (key, ifVersionOrValue) {
            if (writeTxn) return this.remove(key, ifVersionOrValue) === SYNC_PROMISE_SUCCESS;
            else return this.transactionSync(()=>this.remove(key, ifVersionOrValue) === SYNC_PROMISE_SUCCESS, overlappingSync ? 0x10002 : 2); // non-abortable, async flush
        },
        transaction (callback) {
            if (writeTxn && !nextTxnCallbacks.isExecuting) // already nested in a transaction, just execute and return
            return callback();
            return this.transactionAsync(callback);
        },
        childTransaction (callback) {
            if (useWritemap) throw new Error("Child transactions are not supported in writemap mode");
            if (writeTxn) {
                let parentTxn = writeTxn;
                let thisTxn = env.writeTxn = writeTxn = {
                    write: true
                };
                env.beginTxn(1); // abortable
                let callbackDone, finishTxn;
                try {
                    return writeTxn.childResults = (0, _whenJs.when)(callback(), finishTxn = (result)=>{
                        if (writeTxn !== thisTxn) return writeTxn.childResults.then(()=>finishTxn(result));
                        callbackDone = true;
                        if (result === ABORT) env.abortTxn();
                        else env.commitTxn();
                        clearWriteTxn(parentTxn);
                        return result;
                    }, (error)=>{
                        env.abortTxn();
                        clearWriteTxn(parentTxn);
                        throw error;
                    });
                } catch (error) {
                    if (!callbackDone) env.abortTxn();
                    clearWriteTxn(parentTxn);
                    throw error;
                }
            }
            return this.transactionAsync(callback, true);
        },
        transactionAsync (callback, asChild) {
            let txnIndex;
            let txnCallbacks;
            if (lastQueuedResolution.callbacks) {
                txnCallbacks = lastQueuedResolution.callbacks;
                txnIndex = txnCallbacks.push(asChild ? {
                    callback,
                    asChild
                } : callback) - 1;
            } else if (nextTxnCallbacks.isExecuting) {
                txnCallbacks = [
                    asChild ? {
                        callback,
                        asChild
                    } : callback
                ];
                txnCallbacks.results = commitPromise;
                nextTxnCallbacks.push(txnCallbacks);
                txnIndex = 0;
            } else {
                if (writeTxn) throw new Error("Can not enqueue transaction during write txn");
                let finishWrite = writeInstructions(8 | (this.strictAsyncOrder ? 0x100000 : 0), this);
                txnCallbacks = [
                    asChild ? {
                        callback,
                        asChild
                    } : callback
                ];
                lastQueuedResolution.callbacks = txnCallbacks;
                lastQueuedResolution.id = Math.random();
                txnCallbacks.results = finishWrite();
                txnIndex = 0;
            }
            return txnCallbacks.results.then((results)=>{
                let result = txnCallbacks[txnIndex];
                if (result === CALLBACK_THREW) throw txnCallbacks.errors[txnIndex];
                return result;
            });
        },
        transactionSync (callback, flags) {
            if (writeTxn) {
                if (!useWritemap && (flags == undefined || flags & 1)) // already nested in a transaction, execute as child transaction (if possible) and return
                return this.childTransaction(callback);
                let result = callback(); // else just run in current transaction
                if (result == ABORT && !abortedNonChildTransactionWarn) {
                    console.warn("Can not abort a transaction inside another transaction with " + (this.cache ? "caching enabled" : "useWritemap enabled"));
                    abortedNonChildTransactionWarn = true;
                }
                return result;
            }
            let callbackDone, finishTxn;
            this.transactions++;
            if (!env.address) throw new Error("The database has been closed and you can not transact on it");
            env.beginTxn(flags == undefined ? 3 : flags);
            let thisTxn = writeTxn = env.writeTxn = {
                write: true
            };
            try {
                this.emit("begin-transaction");
                return writeTxn.childResults = (0, _whenJs.when)(callback(), finishTxn = (result)=>{
                    if (writeTxn !== thisTxn) return writeTxn.childResults.then(()=>finishTxn(result));
                    try {
                        callbackDone = true;
                        if (result === ABORT) env.abortTxn();
                        else {
                            env.commitTxn();
                            resetReadTxn();
                        }
                        return result;
                    } finally{
                        clearWriteTxn(null);
                    }
                }, (error)=>{
                    try {
                        env.abortTxn();
                    } catch (e) {}
                    clearWriteTxn(null);
                    throw error;
                });
            } catch (error) {
                if (!callbackDone) try {
                    env.abortTxn();
                } catch (e) {}
                clearWriteTxn(null);
                throw error;
            }
        },
        transactionSyncStart (callback) {
            return this.transactionSync(callback, 0);
        },
        // make the db a thenable/promise-like for when the last commit is committed
        committed: committed = {
            then (onfulfilled, onrejected) {
                if (commitPromise) return commitPromise.then(onfulfilled, onrejected);
                if (lastWritePromise) return lastWritePromise.then(()=>onfulfilled(true), onrejected);
                return SYNC_PROMISE_SUCCESS.then(onfulfilled, onrejected);
            }
        },
        flushed: {
            // make this a thenable for when the commit is flushed to disk
            then (onfulfilled, onrejected) {
                if (flushPromise) flushPromise.hasCallbacks = true;
                return Promise.all([
                    flushPromise || committed,
                    lastSyncTxnFlush
                ]).then(onfulfilled, onrejected);
            }
        },
        _endWrites (resolvedPromise, resolvedSyncPromise) {
            this.put = this.remove = this.del = this.batch = this.removeSync = this.putSync = this.transactionAsync = this.drop = this.clearAsync = ()=>{
                throw new Error("Database is closed");
            };
            // wait for all txns to finish, checking again after the current txn is done
            let finalPromise = flushPromise || commitPromise || lastWritePromise;
            if (flushPromise) flushPromise.hasCallbacks = true;
            let finalSyncPromise = lastSyncTxnFlush;
            if (finalPromise && resolvedPromise != finalPromise || finalSyncPromise && resolvedSyncPromise != finalSyncPromise) return Promise.all([
                finalPromise,
                finalSyncPromise
            ]).then(()=>this._endWrites(finalPromise, finalSyncPromise), ()=>this._endWrites(finalPromise, finalSyncPromise));
            Object.defineProperty(env, "sync", {
                value: null
            });
        },
        on (event, callback) {
            if (event == "beforecommit") {
                eventTurnBatching = true;
                beforeCommitCallbacks.push(callback);
            } else if (event == "aftercommit") afterCommitCallbacks.push(callback);
            else super.on(event, callback);
        }
    });
}
class Batch extends Array {
    constructor(callback){
        super();
        this.callback = callback;
    }
    put(key, value) {
        this.push({
            type: "put",
            key,
            value
        });
    }
    del(key) {
        this.push({
            type: "del",
            key
        });
    }
    clear() {
        this.splice(0, this.length);
    }
    write(callback) {
        return this.callback(this, callback);
    }
}
function asBinary(buffer) {
    return {
        ["\x10binary-data\x02"]: buffer
    };
}

},{"83feeec0ef5bf16a":"fCgem","./native.js":"3MbZY","./util/when.js":"3GyXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GyXw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "when", ()=>when);
function when(promise, callback, errback) {
    if (promise && promise.then) return errback ? promise.then(callback, errback) : promise.then(callback);
    return callback(promise);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2xKON":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "levelup", ()=>levelup);
function levelup(store) {
    return Object.assign(Object.create(store), {
        get (key, options, callback) {
            let result = store.get(key);
            if (typeof options == "function") callback = options;
            if (callback) {
                if (result === undefined) callback(new NotFoundError());
                else callback(null, result);
            } else {
                if (result === undefined) return Promise.reject(new NotFoundError());
                else return Promise.resolve(result);
            }
        }
    });
}
class NotFoundError extends Error {
    constructor(message){
        super(message);
        this.name = "NotFoundError";
        this.notFound = true;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rZDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SKIP", ()=>SKIP);
parcelHelpers.export(exports, "RangeIterable", ()=>RangeIterable);
const SKIP = {};
const DONE = {
    value: null,
    done: true
};
if (!Symbol.asyncIterator) Symbol.asyncIterator = Symbol.for("Symbol.asyncIterator");
class RangeIterable {
    constructor(sourceArray){
        if (sourceArray) this.iterate = sourceArray[Symbol.iterator].bind(sourceArray);
    }
    map(func) {
        let source = this;
        let iterable = new RangeIterable();
        iterable.iterate = (async)=>{
            let iterator = source[Symbol.iterator](async);
            let i = 0;
            return {
                next (resolvedResult) {
                    let result;
                    do {
                        let iteratorResult;
                        if (resolvedResult) {
                            iteratorResult = resolvedResult;
                            resolvedResult = null; // don't go in this branch on next iteration
                        } else {
                            iteratorResult = iterator.next();
                            if (iteratorResult.then) return iteratorResult.then((iteratorResult)=>this.next(iteratorResult));
                        }
                        if (iteratorResult.done === true) {
                            this.done = true;
                            if (iterable.onDone) iterable.onDone();
                            return iteratorResult;
                        }
                        result = func(iteratorResult.value, i++);
                        if (result && result.then) return result.then((result)=>result === SKIP ? this.next() : {
                                value: result
                            });
                    }while (result === SKIP);
                    if (result === DONE) {
                        if (iterable.onDone) iterable.onDone();
                        return result;
                    }
                    return {
                        value: result
                    };
                },
                return () {
                    if (iterable.onDone) iterable.onDone();
                    return iterator.return();
                },
                throw () {
                    if (iterable.onDone) iterable.onDone();
                    return iterator.throw();
                }
            };
        };
        return iterable;
    }
    [Symbol.asyncIterator]() {
        return this.iterator = this.iterate();
    }
    [Symbol.iterator]() {
        return this.iterator = this.iterate();
    }
    filter(func) {
        return this.map((element)=>{
            let result = func(element);
            // handle promise
            if (result?.then) return result.then((result)=>result ? element : SKIP);
            else return result ? element : SKIP;
        });
    }
    forEach(callback) {
        let iterator = this.iterator = this.iterate();
        let result;
        while((result = iterator.next()).done !== true)callback(result.value);
    }
    concat(secondIterable) {
        let concatIterable = new RangeIterable();
        concatIterable.iterate = (async)=>{
            let iterator = this.iterator = this.iterate();
            let isFirst = true;
            function iteratorDone(result) {
                if (isFirst) {
                    isFirst = false;
                    iterator = secondIterable[Symbol.iterator](async);
                    result = iterator.next();
                    if (concatIterable.onDone) {
                        if (result.then) result.then((result)=>{
                            if (result.done()) concatIterable.onDone();
                        });
                        else if (result.done) concatIterable.onDone();
                    }
                } else if (concatIterable.onDone) concatIterable.onDone();
                return result;
            }
            return {
                next () {
                    let result = iterator.next();
                    if (result.then) return result.then((result)=>{
                        if (result.done) return iteratorDone(result);
                        return result;
                    });
                    if (result.done) return iteratorDone(result);
                    return result;
                },
                return () {
                    if (concatIterable.onDone) concatIterable.onDone();
                    return iterator.return();
                },
                throw () {
                    if (concatIterable.onDone) concatIterable.onDone();
                    return iterator.throw();
                }
            };
        };
        return concatIterable;
    }
    flatMap(callback) {
        let mappedIterable = new RangeIterable();
        mappedIterable.iterate = (async)=>{
            let iterator = this.iterator = this.iterate(async);
            let isFirst = true;
            let currentSubIterator;
            return {
                next () {
                    do {
                        if (currentSubIterator) {
                            let result = currentSubIterator.next();
                            if (!result.done) return result;
                        }
                        let result = iterator.next();
                        if (result.done) {
                            if (mappedIterable.onDone) mappedIterable.onDone();
                            return result;
                        }
                        let value = callback(result.value);
                        if (Array.isArray(value) || value instanceof RangeIterable) currentSubIterator = value[Symbol.iterator]();
                        else {
                            currentSubIterator = null;
                            return {
                                value
                            };
                        }
                    }while (true);
                },
                return () {
                    if (mappedIterable.onDone) mappedIterable.onDone();
                    if (currentSubIterator) currentSubIterator.return();
                    return iterator.return();
                },
                throw () {
                    if (mappedIterable.onDone) mappedIterable.onDone();
                    if (currentSubIterator) currentSubIterator.throw();
                    return iterator.throw();
                }
            };
        };
        return mappedIterable;
    }
    slice(start, end) {
        return this.map((element, i)=>{
            if (i < start) return SKIP;
            if (i >= end) {
                DONE.value = element;
                return DONE;
            }
            return element;
        });
    }
    next() {
        if (!this.iterator) this.iterator = this.iterate();
        return this.iterator.next();
    }
    toJSON() {
        if (this.asArray && this.asArray.forEach) return this.asArray;
        throw new Error("Can not serialize async iterables without first calling resolveJSON");
    //return Array.from(this)
    }
    get asArray() {
        if (this._asArray) return this._asArray;
        let promise = new Promise((resolve, reject)=>{
            let iterator = this.iterate();
            let array = [];
            let iterable = this;
            Object.defineProperty(array, "iterable", {
                value: iterable
            });
            function next(result) {
                while(result.done !== true){
                    if (result.then) return result.then(next);
                    else array.push(result.value);
                    result = iterator.next();
                }
                resolve(iterable._asArray = array);
            }
            next(iterator.next());
        });
        promise.iterable = this;
        return this._asArray || (this._asArray = promise);
    }
    resolveData() {
        return this.asArray;
    }
}
RangeIterable.prototype.DONE = DONE;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ru6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setRequire", ()=>setRequire);
parcelHelpers.export(exports, "allDbs", ()=>allDbs);
parcelHelpers.export(exports, "open", ()=>open);
parcelHelpers.export(exports, "openAsClass", ()=>openAsClass);
parcelHelpers.export(exports, "getLastVersion", ()=>getLastVersion);
parcelHelpers.export(exports, "setLastVersion", ()=>setLastVersion);
parcelHelpers.export(exports, "getLastTxnId", ()=>getLastTxnId);
var _nativeJs = require("./native.js");
var _cachingJs = require("./caching.js");
var _readJs = require("./read.js");
var _writeJs = require("./write.js");
var _keysJs = require("./keys.js");
var process = require("3d3b64a05804f365");
var Buffer = require("8d4ea94a5f486ef0").Buffer;
let moduleRequire = undefined;
function setRequire(require) {
    moduleRequire = require;
}
(0, _cachingJs.setGetLastVersion)(getLastVersion, getLastTxnId);
let keyBytes, keyBytesView;
const buffers = [];
const { onExit, getEnvsPointer, setEnvsPointer, getEnvFlags, setJSFlags } = (0, _nativeJs.nativeAddon);
if (globalThis.__lmdb_envs__) setEnvsPointer(globalThis.__lmdb_envs__);
else globalThis.__lmdb_envs__ = getEnvsPointer();
// this is hard coded as an upper limit because it is important assumption of the fixed buffers in writing instructions
// this corresponds to the max key size for 8KB pages
const MAX_KEY_SIZE = 4026;
// this is used as the key size by default because default page size is OS page size, which is usually
// 4KB (but is 16KB on M-series MacOS), and this keeps a consistent max key size when no page size specified.
const DEFAULT_MAX_KEY_SIZE = 1978;
const DEFAULT_COMMIT_DELAY = 0;
const allDbs = new Map();
let defaultCompression;
let lastSize;
let hasRegisteredOnExit;
function open(path, options) {
    if ((0, _nativeJs.nativeAddon).open) {
        if ((0, _nativeJs.nativeAddon).open !== open) {
            // this is the case when lmdb-js has been opened in both ESM and CJS mode, which means that there are two
            // separate JS modules, but they are both using the same native module.
            getLastVersion = (0, _nativeJs.nativeAddon).getLastVersion;
            getLastTxnId = (0, _nativeJs.nativeAddon).getLastTxnId;
            (0, _cachingJs.setGetLastVersion)(getLastVersion, getLastTxnId);
            return (0, _nativeJs.nativeAddon).open(path, options);
        }
    } else {
        (0, _nativeJs.nativeAddon).open = open;
        (0, _nativeJs.nativeAddon).getLastVersion = getLastVersion;
        (0, _nativeJs.nativeAddon).getLastTxnId = getLastTxnId;
    }
    if (!keyBytes) allocateFixedBuffer();
    if (typeof path == "object" && !options) {
        options = path;
        path = options.path;
    }
    options = options || {};
    let noFSAccess = options.noFSAccess; // this can only be configured on open, can't let users change it
    let userOptions = options;
    if (path == null) {
        options = Object.assign({
            deleteOnClose: true,
            noSync: true
        }, options);
        path = (0, _nativeJs.tmpdir)() + "/" + Math.floor(Math.random() * 2821109907455).toString(36) + ".mdb";
    } else if (!options) options = {};
    let extension = (0, _nativeJs.path).extname(path);
    let name = (0, _nativeJs.path).basename(path, extension);
    let is32Bit = (0, _nativeJs.arch)().endsWith("32");
    let remapChunks = options.remapChunks || options.encryptionKey || (options.mapSize ? is32Bit && options.mapSize > 0x100000000 : is32Bit); // without a known map size, we default to being able to handle large data correctly/well*/
    let userMapSize = options.mapSize;
    options = Object.assign({
        noSubdir: Boolean(extension),
        isRoot: true,
        maxDbs: 12,
        remapChunks,
        keyBytes,
        overlappingSync: options.noSync || options.readOnly ? false : (0, _nativeJs.os) != "win32",
        // default map size limit of 4 exabytes when using remapChunks, since it is not preallocated and we can
        // make it super huge.
        mapSize: remapChunks ? 0x10000000000000 : 0x20000,
        safeRestore: false
    }, options);
    options.path = path;
    if (options.asyncTransactionOrder == "strict") options.strictAsyncOrder = true;
    if ((0, _nativeJs.nativeAddon).version.major + (0, _nativeJs.nativeAddon).version.minor / 100 + (0, _nativeJs.nativeAddon).version.patch / 10000 < 0.0980) {
        options.overlappingSync = false; // not support on older versions
        options.trackMetrics = false;
        options.usePreviousSnapshot = false;
        options.safeRestore = false;
        options.remapChunks = false;
        if (!userMapSize) options.mapSize = 0x40000000; // 1 GB
    }
    if (!exists(options.noSubdir ? (0, _nativeJs.path).dirname(path) : path)) (0, _nativeJs.fs).mkdirSync(options.noSubdir ? (0, _nativeJs.path).dirname(path) : path, {
        recursive: true
    });
    function makeCompression(compressionOptions) {
        if (compressionOptions instanceof (0, _nativeJs.Compression)) return compressionOptions;
        let useDefault = typeof compressionOptions != "object";
        if (useDefault && defaultCompression) return defaultCompression;
        compressionOptions = Object.assign({
            threshold: 1000,
            dictionary: (0, _nativeJs.fs).readFileSync(new URL("./dict/dict.txt", "file:///node_modules/lmdb/open.js".replace(/dist[\\\/]index.cjs$/, ""))),
            getValueBytes: (0, _readJs.makeReusableBuffer)(0)
        }, compressionOptions);
        let compression = Object.assign(new (0, _nativeJs.Compression)(compressionOptions), compressionOptions);
        if (useDefault) defaultCompression = compression;
        return compression;
    }
    if (options.compression) options.compression = makeCompression(options.compression);
    let flags = (options.overlappingSync ? 0x1000 : 0) | (options.noSubdir ? 0x4000 : 0) | (options.noSync ? 0x10000 : 0) | (options.readOnly ? 0x20000 : 0) | (options.noMetaSync ? 0x40000 : 0) | (options.useWritemap ? 0x80000 : 0) | (options.mapAsync ? 0x100000 : 0) | (options.noReadAhead ? 0x800000 : 0) | (options.noMemInit ? 0x1000000 : 0) | (options.usePreviousSnapshot ? 0x2000000 : 0) | (options.remapChunks ? 0x4000000 : 0) | (options.safeRestore ? 0x800 : 0) | (options.trackMetrics ? 0x400 : 0);
    let env = new (0, _nativeJs.Env)();
    let jsFlags = (options.overlappingSync ? 0x1000 : 0) | (options.separateFlushed ? 1 : 0) | (options.deleteOnClose ? 2 : 0);
    let rc = env.open(options, flags, jsFlags);
    env.path = path;
    if (rc) (0, _nativeJs.lmdbError)(rc);
    delete options.keyBytes // no longer needed, don't copy to stores
    ;
    let maxKeySize = env.getMaxKeySize();
    maxKeySize = Math.min(maxKeySize, options.pageSize ? MAX_KEY_SIZE : DEFAULT_MAX_KEY_SIZE);
    flags = getEnvFlags(env.address); // re-retrieve them, they are not necessarily the same if we are connecting to an existing env
    if (flags & 0x1000) {
        if (userOptions.noSync) {
            env.close();
            throw new Error("Can not set noSync on a database that was opened with overlappingSync");
        }
    } else if (options.overlappingSync) {
        if (userOptions.overlappingSync) {
            env.close();
            throw new Error("Can not enable overlappingSync on a database that was opened without this flag");
        }
        options.overlappingSync = false;
        jsFlags = jsFlags & 0xff; // clear overlapping sync
        setJSFlags(env.address, jsFlags);
    }
    env.readerCheck(); // clear out any stale entries
    if ((options.overlappingSync || options.deleteOnClose) && !hasRegisteredOnExit && process.on) {
        hasRegisteredOnExit = true;
        process.on("exit", onExit);
    }
    class LMDBStore extends (0, _nativeJs.EventEmitter) {
        constructor(dbName, dbOptions){
            super();
            if (dbName === undefined) throw new Error("Database name must be supplied in name property (may be null for root database)");
            if (options.compression && dbOptions.compression !== false && typeof dbOptions.compression != "object") dbOptions.compression = options.compression; // use the parent compression if available
            else if (dbOptions.compression) dbOptions.compression = makeCompression(dbOptions.compression);
            if (dbOptions.dupSort && (dbOptions.useVersions || dbOptions.cache)) throw new Error("The dupSort flag can not be combined with versions or caching");
            let keyIsBuffer = dbOptions.keyIsBuffer;
            if (dbOptions.keyEncoding == "uint32") dbOptions.keyIsUint32 = true;
            else if (dbOptions.keyEncoder) {
                if (dbOptions.keyEncoder.enableNullTermination) dbOptions.keyEncoder.enableNullTermination();
                else keyIsBuffer = true;
            } else if (dbOptions.keyEncoding == "binary") keyIsBuffer = true;
            let flags = (dbOptions.reverseKey ? 0x02 : 0) | (dbOptions.dupSort ? 0x04 : 0) | (dbOptions.dupFixed ? 0x10 : 0) | (dbOptions.integerDup ? 0x20 : 0) | (dbOptions.reverseDup ? 0x40 : 0) | (!options.readOnly && dbOptions.create !== false ? 0x40000 : 0) | (dbOptions.useVersions ? 0x100 : 0);
            let keyType = dbOptions.keyIsUint32 || dbOptions.keyEncoding == "uint32" ? 2 : keyIsBuffer ? 3 : 0;
            if (keyType == 2) flags |= 0x08; // integer key
            if (options.readOnly) {
                // in read-only mode we use a read-only txn to open the database
                // TODO: LMDB is actually not entirely thread-safe when it comes to opening databases with
                // read-only transactions since there is a race condition on setting the update dbis that
                // occurs outside the lock
                // make sure we are using a fresh read txn, so we don't want to share with a cursor txn
                this.resetReadTxn();
                this.ensureReadTxn();
                this.db = new (0, _nativeJs.Dbi)(env, flags, dbName, keyType, dbOptions.compression);
            } else this.transactionSync(()=>{
                this.db = new (0, _nativeJs.Dbi)(env, flags, dbName, keyType, dbOptions.compression);
            }, options.overlappingSync ? 0x10002 : 2); // no flush-sync, but synchronously commit
            this._commitReadTxn(); // current read transaction becomes invalid after opening another db
            if (!this.db || this.db.dbi == 0xffffffff) throw new Error("Database not found");
            this.dbAddress = this.db.address;
            this.db.name = dbName || null;
            this.name = dbName;
            this.status = "open";
            this.env = env;
            this.reads = 0;
            this.writes = 0;
            this.transactions = 0;
            this.averageTransactionTime = 5;
            if (dbOptions.syncBatchThreshold) console.warn("syncBatchThreshold is no longer supported");
            if (dbOptions.immediateBatchThreshold) console.warn("immediateBatchThreshold is no longer supported");
            this.commitDelay = DEFAULT_COMMIT_DELAY;
            Object.assign(this, {
                path: options.path,
                encoding: options.encoding,
                strictAsyncOrder: options.strictAsyncOrder
            }, dbOptions);
            let Encoder;
            if (this.encoder && this.encoder.Encoder) {
                Encoder = this.encoder.Encoder;
                this.encoder = null; // don't copy everything from the module
            }
            if (!Encoder && !(this.encoder && this.encoder.encode) && (!this.encoding || this.encoding == "msgpack" || this.encoding == "cbor")) Encoder = this.encoding == "cbor" ? moduleRequire("cbor-x").Encoder : (0, _nativeJs.MsgpackrEncoder);
            if (Encoder) this.encoder = new Encoder(Object.assign(assignConstrainedProperties([
                "copyBuffers",
                "getStructures",
                "saveStructures",
                "useFloat32",
                "useRecords",
                "structuredClone",
                "variableMapSize",
                "useTimestamp32",
                "largeBigIntToFloat",
                "encodeUndefinedAsNil",
                "int64AsNumber",
                "onInvalidDate",
                "mapsAsObjects",
                "useTag259ForMaps",
                "pack",
                "maxSharedStructures",
                "shouldShareStructure",
                "randomAccessStructure",
                "freezeData"
            ], this.sharedStructuresKey ? this.setupSharedStructures() : {
                copyBuffers: true
            }, options, dbOptions), this.encoder));
            if (this.encoding == "json") this.encoder = {
                encode: JSON.stringify
            };
            else if (this.encoder) {
                this.decoder = this.encoder;
                this.decoderCopies = !this.encoder.needsStableBuffer;
            }
            this.maxKeySize = maxKeySize;
            (0, _keysJs.applyKeyHandling)(this);
            allDbs.set(dbName ? name + "-" + dbName : name, this);
        }
        openDB(dbName, dbOptions) {
            if (this.dupSort && this.name == null) throw new Error("Can not open named databases if the main database is dupSort");
            if (typeof dbName == "object" && !dbOptions) {
                dbOptions = dbName;
                dbName = dbOptions.name;
            } else dbOptions = dbOptions || {};
            try {
                return dbOptions.cache ? new ((0, _cachingJs.CachingStore)(LMDBStore, env))(dbName, dbOptions) : new LMDBStore(dbName, dbOptions);
            } catch (error) {
                if (error.message == "Database not found") return; // return undefined to indicate db not found
                if (error.message.indexOf("MDB_DBS_FULL") > -1) error.message += " (increase your maxDbs option)";
                throw error;
            }
        }
        open(dbOptions, callback) {
            let db = this.openDB(dbOptions);
            if (callback) callback(null, db);
            return db;
        }
        backup(path, compact) {
            if (noFSAccess) return;
            (0, _nativeJs.fs).mkdirSync((0, _nativeJs.path).dirname(path), {
                recursive: true
            });
            return new Promise((resolve, reject)=>env.copy(path, false, (error)=>{
                    if (error) reject(error);
                    else resolve();
                }));
        }
        isOperational() {
            return this.status == "open";
        }
        sync(callback) {
            return env.sync(callback || function(error) {
                if (error) console.error(error);
            });
        }
        deleteDB() {
            console.warn("deleteDB() is deprecated, use drop or dropSync instead");
            return this.dropSync();
        }
        dropSync() {
            this.transactionSync(()=>this.db.drop({
                    justFreePages: false
                }), options.overlappingSync ? 0x10002 : 2);
        }
        clear(callback) {
            if (typeof callback == "function") return this.clearAsync(callback);
            console.warn("clear() is deprecated, use clearAsync or clearSync instead");
            this.clearSync();
        }
        clearSync() {
            if (this.encoder) {
                if (this.encoder.clearSharedData) this.encoder.clearSharedData();
                else if (this.encoder.structures) this.encoder.structures = [];
            }
            this.transactionSync(()=>this.db.drop({
                    justFreePages: true
                }), options.overlappingSync ? 0x10002 : 2);
        }
        readerCheck() {
            return env.readerCheck();
        }
        readerList() {
            return env.readerList().join("");
        }
        setupSharedStructures() {
            const getStructures = ()=>{
                let lastVersion; // because we are doing a read here, we may need to save and restore the lastVersion from the last read
                if (this.useVersions) lastVersion = getLastVersion();
                let buffer = this.getBinary(this.sharedStructuresKey);
                if (this.useVersions) setLastVersion(lastVersion);
                return buffer && this.decoder.decode(buffer);
            };
            return {
                saveStructures: (structures, isCompatible)=>{
                    return this.transactionSync(()=>{
                        let existingStructuresBuffer = this.getBinary(this.sharedStructuresKey);
                        let existingStructures = existingStructuresBuffer && this.decoder.decode(existingStructuresBuffer);
                        if (typeof isCompatible == "function" ? !isCompatible(existingStructures) : existingStructures && existingStructures.length != isCompatible) return false; // it changed, we need to indicate that we couldn't update
                        this.put(this.sharedStructuresKey, structures);
                    }, options.overlappingSync ? 0x10000 : 0);
                },
                getStructures,
                copyBuffers: true
            };
        }
    }
    // if caching class overrides putSync, don't want to double call the caching code
    const putSync = LMDBStore.prototype.putSync;
    const removeSync = LMDBStore.prototype.removeSync;
    (0, _readJs.addReadMethods)(LMDBStore, {
        env,
        maxKeySize,
        keyBytes,
        keyBytesView,
        getLastVersion
    });
    if (!options.readOnly) (0, _writeJs.addWriteMethods)(LMDBStore, {
        env,
        maxKeySize,
        fixedBuffer: keyBytes,
        resetReadTxn: LMDBStore.prototype.resetReadTxn,
        ...options
    });
    LMDBStore.prototype.supports = {
        permanence: true,
        bufferKeys: true,
        promises: true,
        snapshots: true,
        clear: true,
        status: true,
        deferredOpen: true,
        openCallback: true
    };
    let Class = options.cache ? (0, _cachingJs.CachingStore)(LMDBStore, env) : LMDBStore;
    return options.asClass ? Class : new Class(options.name || null, options);
}
function openAsClass(path, options) {
    if (typeof path == "object" && !options) {
        options = path;
        path = options.path;
    }
    options = options || {};
    options.asClass = true;
    return open(path, options);
}
function getLastVersion() {
    return keyBytesView.getFloat64(16, true);
}
function setLastVersion(version) {
    return keyBytesView.setFloat64(16, version, true);
}
function getLastTxnId() {
    return keyBytesView.getUint32(32, true);
}
const KEY_BUFFER_SIZE = 4096;
function allocateFixedBuffer() {
    keyBytes = typeof Buffer != "undefined" ? Buffer.allocUnsafeSlow(KEY_BUFFER_SIZE) : new Uint8Array(KEY_BUFFER_SIZE);
    const keyBuffer = keyBytes.buffer;
    keyBytesView = keyBytes.dataView || (keyBytes.dataView = new DataView(keyBytes.buffer, 0, KEY_BUFFER_SIZE)); // max key size is actually 4026
    keyBytes.uint32 = new Uint32Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 2);
    keyBytes.float64 = new Float64Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 3);
    keyBytes.uint32.address = keyBytes.address = keyBuffer.address = (0, _nativeJs.getAddress)(keyBuffer);
}
function exists(path) {
    if ((0, _nativeJs.fs).existsSync) return (0, _nativeJs.fs).existsSync(path);
    try {
        return (0, _nativeJs.fs).statSync(path);
    } catch (error) {
        return false;
    }
}
function assignConstrainedProperties(allowedProperties, target) {
    for(let i = 2; i < arguments.length; i++){
        let source = arguments[i];
        for(let key in source)if (allowedProperties.includes(key)) target[key] = source[key];
    }
    return target;
}

},{"3d3b64a05804f365":"d5jf4","8d4ea94a5f486ef0":"fCgem","./native.js":"3MbZY","./caching.js":"aagz6","./read.js":"2Pjcn","./write.js":"hV0g9","./keys.js":"BHVOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aagz6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CachingStore", ()=>CachingStore);
parcelHelpers.export(exports, "setGetLastVersion", ()=>setGetLastVersion);
var _nativeJs = require("./native.js");
var _writeJs = require("./write.js");
var _readJs = require("./read.js");
var _whenJs = require("./util/when.js");
let getLastVersion, getLastTxnId;
const mapGet = Map.prototype.get;
const CachingStore = (Store, env)=>{
    let childTxnChanges;
    return class LMDBStore extends Store {
        constructor(dbName, options){
            super(dbName, options);
            if (!env.cacheCommitter) {
                env.cacheCommitter = true;
                this.on("aftercommit", ({ next, last, txnId })=>{
                    do {
                        let meta = next.meta;
                        let store = meta && meta.store;
                        if (store) {
                            if (next.flag & (0, _writeJs.FAILED_CONDITION)) store.cache.delete(meta.key); // just delete it from the map
                            else {
                                let expirationPriority = meta.valueSize >> 10;
                                let cache = store.cache;
                                let entry = mapGet.call(cache, meta.key);
                                if (entry) {
                                    entry.txnId = txnId;
                                    cache.used(entry, expirationPriority + 4); // this will enter it into the LRFU (with a little lower priority than a read)
                                }
                            }
                        }
                    }while (next != last && (next = next.next));
                });
            }
            this.db.cachingDb = this;
            if (options.cache.clearKeptInterval) options.cache.clearKeptObjects = (0, _nativeJs.clearKeptObjects);
            this.cache = new (0, _nativeJs.WeakLRUCache)(options.cache);
            if (options.cache.validated) this.cache.validated = true;
        }
        get isCaching() {
            return true;
        }
        get(id, options) {
            let value;
            if (this.cache.validated) {
                let entry = this.cache.get(id);
                if (entry) {
                    let cachedValue = entry.value;
                    if (entry.txnId != null) {
                        value = super.get(id, {
                            ifNotTxnId: entry.txnId,
                            transaction: options && options.transaction
                        });
                        if (value === (0, _readJs.UNMODIFIED)) return cachedValue;
                    } else return cachedValue;
                } else value = super.get(id, options);
            } else if (options && options.transaction) return super.get(id, options);
            else {
                value = this.cache.getValue(id);
                if (value !== undefined) return value;
                value = super.get(id);
            }
            if (value && typeof value === "object" && !options && typeof id !== "object") {
                let entry = this.cache.setValue(id, value, this.lastSize >> 10);
                if (this.useVersions) entry.version = getLastVersion();
                if (this.cache.validated) entry.txnId = getLastTxnId();
            }
            return value;
        }
        getEntry(id, options) {
            let entry, value;
            if (this.cache.validated) {
                entry = this.cache.get(id);
                if (entry) {
                    if (entry.txnId != null) {
                        value = super.get(id, {
                            ifNotTxnId: entry.txnId,
                            transaction: options && options.transaction
                        });
                        if (value === (0, _readJs.UNMODIFIED)) return entry;
                    } else return entry;
                } else value = super.get(id, options);
            } else if (options && options.transaction) return super.getEntry(id, options);
            else {
                entry = this.cache.get(id);
                if (entry !== undefined) return entry;
                value = super.get(id);
            }
            if (value === undefined) return;
            if (value && typeof value === "object" && !options && typeof id !== "object") entry = this.cache.setValue(id, value, this.lastSize >> 10);
            else entry = {
                value
            };
            if (this.useVersions) entry.version = getLastVersion();
            if (this.cache.validated) entry.txnId = getLastTxnId();
            return entry;
        }
        putEntry(id, entry, ifVersion) {
            let result = super.put(id, entry.value, entry.version, ifVersion);
            if (typeof id === "object") return result;
            if (result && result.then) this.cache.setManually(id, entry); // set manually so we can keep it pinned in memory until it is committed
            else this.cache.set(id, entry);
        }
        put(id, value, version, ifVersion) {
            let result = super.put(id, value, version, ifVersion);
            if (typeof id !== "object") {
                if (value && value["\x10binary-data\x02"]) {
                    // don't cache binary data, since it will be decoded on get
                    this.cache.delete(id);
                    return result;
                }
                // sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
                let entry = this.cache.setValue(id, value, !result || result.isSync ? 0 : -1);
                if (childTxnChanges) childTxnChanges.add(id);
                if (version !== undefined) entry.version = typeof version === "object" ? version.version : version;
            }
            return result;
        }
        putSync(id, value, version, ifVersion) {
            if (id !== "object") {
                // sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
                if (value && typeof value === "object") {
                    let entry = this.cache.setValue(id, value);
                    if (childTxnChanges) childTxnChanges.add(id);
                    if (version !== undefined) entry.version = typeof version === "object" ? version.version : version;
                } else this.cache.delete(id);
            }
            return super.putSync(id, value, version, ifVersion);
        }
        remove(id, ifVersion) {
            this.cache.delete(id);
            return super.remove(id, ifVersion);
        }
        removeSync(id, ifVersion) {
            this.cache.delete(id);
            return super.removeSync(id, ifVersion);
        }
        clearAsync(callback) {
            this.cache.clear();
            return super.clearAsync(callback);
        }
        clearSync() {
            this.cache.clear();
            super.clearSync();
        }
        childTransaction(callback) {
            return super.childTransaction(()=>{
                let cache = this.cache;
                let previousChanges = childTxnChanges;
                try {
                    childTxnChanges = new Set();
                    return (0, _whenJs.when)(callback(), (result)=>{
                        if (result === (0, _writeJs.ABORT)) return abort();
                        childTxnChanges = previousChanges;
                        return result;
                    }, abort);
                } catch (error) {
                    abort(error);
                }
                function abort(error) {
                    // if the transaction was aborted, remove all affected entries from cache
                    for (let id of childTxnChanges)cache.delete(id);
                    childTxnChanges = previousChanges;
                    if (error) throw error;
                    else return 0, _writeJs.ABORT;
                }
            });
        }
        doesExist(key, versionOrValue) {
            let entry = this.cache.get(key);
            if (entry) {
                if (versionOrValue == null) return versionOrValue !== null;
                else if (this.useVersions) return versionOrValue === (0, _writeJs.IF_EXISTS) || entry.version === versionOrValue;
            }
            return super.doesExist(key, versionOrValue);
        }
    };
};
function setGetLastVersion(get, getTxnId) {
    getLastVersion = get;
    getLastTxnId = getTxnId;
}

},{"./native.js":"3MbZY","./write.js":"hV0g9","./read.js":"2Pjcn","./util/when.js":"3GyXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Pjcn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UNMODIFIED", ()=>UNMODIFIED);
parcelHelpers.export(exports, "addReadMethods", ()=>addReadMethods);
parcelHelpers.export(exports, "makeReusableBuffer", ()=>makeReusableBuffer);
parcelHelpers.export(exports, "recordReadInstruction", ()=>recordReadInstruction);
var _rangeIterableJs = require("./util/RangeIterable.js");
var _nativeJs = require("./native.js");
var _keysJs = require("./keys.js");
var Buffer = require("c4564e473fc46969").Buffer;
const IF_EXISTS = 3.542694326329068e-103;
const ITERATOR_DONE = {
    done: true,
    value: undefined
};
const Uint8ArraySlice = Uint8Array.prototype.slice;
let getValueBytes = (0, _nativeJs.globalBuffer);
if (!getValueBytes.maxLength) {
    getValueBytes.maxLength = getValueBytes.length;
    getValueBytes.isGlobal = true;
    Object.defineProperty(getValueBytes, "length", {
        value: getValueBytes.length,
        writable: true,
        configurable: true
    });
}
const START_ADDRESS_POSITION = 4064;
const NEW_BUFFER_THRESHOLD = 0x8000;
const SOURCE_SYMBOL = Symbol.for("source");
const UNMODIFIED = {};
let mmaps = [];
function addReadMethods(LMDBStore, { maxKeySize, env, keyBytes, keyBytesView, getLastVersion, getLastTxnId }) {
    let readTxn, readTxnRenewed, asSafeBuffer = false;
    let renewId = 1;
    let outstandingReads = 0;
    Object.assign(LMDBStore.prototype, {
        getString (id, options) {
            let txn = env.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
            let string = (0, _nativeJs.getStringByBinary)(this.dbAddress, this.writeKey(id, keyBytes, 0), txn.address || 0);
            if (typeof string === "number") {
                this._allocateGetBuffer(string);
                // and then try again
                string = (0, _nativeJs.getStringByBinary)(this.dbAddress, this.writeKey(id, keyBytes, 0), txn.address || 0);
            }
            if (string) this.lastSize = string.length;
            return string;
        },
        getBinaryFast (id, options) {
            let rc;
            let txn = env.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
            rc = this.lastSize = (0, _nativeJs.getByBinary)(this.dbAddress, this.writeKey(id, keyBytes, 0), options && options.ifNotTxnId || 0, txn.address || 0);
            if (rc < 0) {
                if (rc == -30798) return; // undefined
                if (rc == -30004) return UNMODIFIED;
                if (rc == -30781 /*MDB_BAD_VALSIZE*/  && this.writeKey(id, keyBytes, 0) == 0) throw new Error(id === undefined ? "A key is required for get, but is undefined" : "Zero length key is not allowed in LMDB");
                if (rc == -30000) rc = this.lastSize = keyBytesView.getUint32(0, true);
                else if (rc == -30001) {
                    this.lastSize = keyBytesView.getUint32(0, true);
                    let bufferId = keyBytesView.getUint32(4, true);
                    return getMMapBuffer(bufferId, this.lastSize);
                } else throw (0, _nativeJs.lmdbError)(rc);
            }
            let compression = this.compression;
            let bytes = compression ? compression.getValueBytes : getValueBytes;
            if (rc > bytes.maxLength) // this means the target buffer wasn't big enough, so the get failed to copy all the data from the database, need to either grow or use special buffer
            return this._returnLargeBuffer(()=>(0, _nativeJs.getByBinary)(this.dbAddress, this.writeKey(id, keyBytes, 0), 0, txn.address || 0));
            bytes.length = this.lastSize;
            return bytes;
        },
        getBFAsync (id, options, callback) {
            let txn = env.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
            txn.refCount = (txn.refCount || 0) + 1;
            outstandingReads++;
            let address = recordReadInstruction(txn.address, this.db.dbi, id, this.writeKey, maxKeySize, (rc, bufferId, offset, size)=>{
                if (rc && rc !== 1) callback((0, _nativeJs.lmdbError)(rc));
                outstandingReads--;
                let buffer = mmaps[bufferId];
                if (!buffer) buffer = mmaps[bufferId] = (0, _nativeJs.getSharedBuffer)(bufferId, env.address);
                //console.log({bufferId, offset, size})
                if (buffer.isSharedMap) {
                    // using LMDB shared memory
                    // TODO: We may want explicit support for clearing aborting the transaction on the next event turn,
                    // but for now we are relying on the GC to cleanup transaction for larger blocks of memory
                    let bytes = new Uint8Array(buffer, offset, size);
                    bytes.txn = txn;
                    callback(bytes, 0, size);
                } else {
                    // using copied memory
                    txn.done(); // decrement and possibly abort
                    callback(buffer, offset, size);
                }
            });
            if (address) (0, _nativeJs.startRead)(address, ()=>{
                resolveReads();
            });
        },
        getAsync (id, options, callback) {
            let promise;
            if (!callback) promise = new Promise((resolve)=>callback = resolve);
            this.getBFAsync(id, options, (buffer, offset, size)=>{
                if (this.useVersions) {
                    // TODO: And get the version
                    offset += 8;
                    size -= 8;
                }
                let bytes = new Uint8Array(buffer, offset, size);
                let value;
                if (this.decoder) // the decoder potentially uses the data from the buffer in the future and needs a stable buffer
                value = bytes && this.decoder.decode(bytes);
                else if (this.encoding == "binary") value = bytes;
                else {
                    value = Buffer.prototype.utf8Slice.call(bytes, 0, size);
                    if (this.encoding == "json" && value) value = JSON.parse(value);
                }
                callback(value);
            });
            return promise;
        },
        retain (data, options) {
            if (!data) return;
            let source = data[SOURCE_SYMBOL];
            let buffer = source ? source.bytes : data;
            if (!buffer.isGlobal && !env.writeTxn) {
                let txn = options?.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
                buffer.txn = txn;
                txn.refCount = (txn.refCount || 0) + 1;
                return data;
            } else {
                buffer = Uint8ArraySlice.call(buffer, 0, this.lastSize);
                if (source) {
                    source.bytes = buffer;
                    return data;
                } else return buffer;
            }
        },
        _returnLargeBuffer (getFast) {
            let bytes;
            let compression = this.compression;
            if (asSafeBuffer && this.lastSize > NEW_BUFFER_THRESHOLD) {
                // used by getBinary to indicate it should create a dedicated buffer to receive this
                let bytesToRestore;
                try {
                    if (compression) {
                        bytesToRestore = compression.getValueBytes;
                        let dictionary = compression.dictionary || [];
                        let dictLength = dictionary.length >> 3 << 3; // make sure it is word-aligned
                        bytes = makeReusableBuffer(this.lastSize);
                        compression.setBuffer(bytes.buffer, bytes.byteOffset, this.lastSize, dictionary, dictLength);
                        compression.getValueBytes = bytes;
                    } else {
                        bytesToRestore = getValueBytes;
                        (0, _nativeJs.setGlobalBuffer)(bytes = getValueBytes = makeReusableBuffer(this.lastSize));
                    }
                    getFast();
                } finally{
                    if (compression) {
                        let dictLength = compression.dictionary.length >> 3 << 3;
                        compression.setBuffer(bytesToRestore.buffer, bytesToRestore.byteOffset, bytesToRestore.maxLength, compression.dictionary, dictLength);
                        compression.getValueBytes = bytesToRestore;
                    } else {
                        (0, _nativeJs.setGlobalBuffer)(bytesToRestore);
                        getValueBytes = bytesToRestore;
                    }
                }
                return bytes;
            }
            // grow our shared/static buffer to accomodate the size of the data
            bytes = this._allocateGetBuffer(this.lastSize);
            // and try again
            getFast();
            bytes.length = this.lastSize;
            return bytes;
        },
        _allocateGetBuffer (lastSize) {
            let newLength = Math.min(Math.max(lastSize * 2, 0x1000), 0xfffffff8);
            let bytes;
            if (this.compression) {
                let dictionary = this.compression.dictionary || Buffer.allocUnsafeSlow(0);
                let dictLength = dictionary.length >> 3 << 3; // make sure it is word-aligned
                bytes = Buffer.allocUnsafeSlow(newLength + dictLength);
                bytes.set(dictionary) // copy dictionary into start
                ;
                // the section after the dictionary is the target area for get values
                bytes = bytes.subarray(dictLength);
                this.compression.setBuffer(bytes.buffer, bytes.byteOffset, newLength, dictionary, dictLength);
                bytes.maxLength = newLength;
                Object.defineProperty(bytes, "length", {
                    value: newLength,
                    writable: true,
                    configurable: true
                });
                this.compression.getValueBytes = bytes;
            } else {
                bytes = makeReusableBuffer(newLength);
                (0, _nativeJs.setGlobalBuffer)(getValueBytes = bytes);
            }
            bytes.isGlobal = true;
            return bytes;
        },
        getBinary (id, options) {
            try {
                asSafeBuffer = true;
                let fastBuffer = this.getBinaryFast(id, options);
                return fastBuffer && (fastBuffer.isGlobal ? Uint8ArraySlice.call(fastBuffer, 0, this.lastSize) : fastBuffer);
            } finally{
                asSafeBuffer = false;
            }
        },
        getSharedBinary (id, options) {
            let fastBuffer = this.getBinaryFast(id, options);
            if (fastBuffer) {
                if (fastBuffer.isGlobal || writeTxn) return Uint8ArraySlice.call(fastBuffer, 0, this.lastSize);
                fastBuffer.txn = options && options.transaction;
                options.transaction.refCount = (options.transaction.refCount || 0) + 1;
                return fastBuffer;
            }
        },
        get (id, options) {
            if (this.decoderCopies) {
                // the decoder copies any data, so we can use the fast binary retrieval that overwrites the same buffer space
                let bytes = this.getBinaryFast(id, options);
                return bytes && (bytes == UNMODIFIED ? UNMODIFIED : this.decoder.decode(bytes, options));
            }
            if (this.encoding == "binary") return this.getBinary(id, options);
            if (this.decoder) {
                // the decoder potentially uses the data from the buffer in the future and needs a stable buffer
                let bytes = this.getBinary(id, options);
                return bytes && (bytes == UNMODIFIED ? UNMODIFIED : this.decoder.decode(bytes));
            }
            let result = this.getString(id, options);
            if (result) {
                if (this.encoding == "json") return JSON.parse(result);
            }
            return result;
        },
        getEntry (id, options) {
            let value = this.get(id, options);
            if (value !== undefined) {
                if (this.useVersions) return {
                    value,
                    version: getLastVersion()
                };
                else return {
                    value
                };
            }
        },
        resetReadTxn () {
            resetReadTxn();
        },
        _commitReadTxn () {
            if (readTxn) {
                readTxn.isCommitted = true;
                readTxn.commit();
            }
            lastReadTxnRef = null;
            readTxnRenewed = null;
            readTxn = null;
        },
        ensureReadTxn () {
            if (!env.writeTxn && !readTxnRenewed) renewReadTxn(this);
        },
        doesExist (key, versionOrValue) {
            if (versionOrValue == null) // undefined means the entry exists, null is used specifically to check for the entry *not* existing
            return this.getBinaryFast(key) === undefined == (versionOrValue === null);
            else if (this.useVersions) return this.getBinaryFast(key) !== undefined && (versionOrValue === IF_EXISTS || getLastVersion() === versionOrValue);
            else {
                if (versionOrValue && versionOrValue["\x10binary-data\x02"]) versionOrValue = versionOrValue["\x10binary-data\x02"];
                else if (this.encoder) versionOrValue = this.encoder.encode(versionOrValue);
                if (typeof versionOrValue == "string") versionOrValue = Buffer.from(versionOrValue);
                return this.getValuesCount(key, {
                    start: versionOrValue,
                    exactMatch: true
                }) > 0;
            }
        },
        getValues (key, options) {
            let defaultOptions = {
                key,
                valuesForKey: true
            };
            if (options && options.snapshot === false) throw new Error("Can not disable snapshots for getValues");
            return this.getRange(options ? Object.assign(defaultOptions, options) : defaultOptions);
        },
        getKeys (options) {
            if (!options) options = {};
            options.values = false;
            return this.getRange(options);
        },
        getCount (options) {
            if (!options) options = {};
            options.onlyCount = true;
            return this.getRange(options).iterate();
        },
        getKeysCount (options) {
            if (!options) options = {};
            options.onlyCount = true;
            options.values = false;
            return this.getRange(options).iterate();
        },
        getValuesCount (key, options) {
            if (!options) options = {};
            options.key = key;
            options.valuesForKey = true;
            options.onlyCount = true;
            return this.getRange(options).iterate();
        },
        getRange (options) {
            let iterable = new (0, _rangeIterableJs.RangeIterable)();
            if (!options) options = {};
            let includeValues = options.values !== false;
            let includeVersions = options.versions;
            let valuesForKey = options.valuesForKey;
            let limit = options.limit;
            let db = this.db;
            let snapshot = options.snapshot;
            let compression = this.compression;
            iterable.iterate = ()=>{
                let currentKey = valuesForKey ? options.key : options.start;
                const reverse = options.reverse;
                let count = 0;
                let cursor, cursorRenewId, cursorAddress;
                let txn;
                let flags = (includeValues ? 0x100 : 0) | (reverse ? 0x400 : 0) | (valuesForKey ? 0x800 : 0) | (options.exactMatch ? 0x4000 : 0) | (options.inclusiveEnd ? 0x8000 : 0) | (options.exclusiveStart ? 0x10000 : 0);
                let store = this;
                function resetCursor() {
                    try {
                        if (cursor) finishCursor();
                        let txnAddress;
                        txn = options.transaction;
                        if (txn) {
                            if (txn.isDone) throw new Error("Can not iterate on range with transaction that is already done");
                            txnAddress = txn.address;
                            cursor = null;
                        } else {
                            let writeTxn1 = env.writeTxn;
                            if (writeTxn1) snapshot = false;
                            txn = env.writeTxn || options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(store));
                            cursor = !writeTxn1 && db.availableCursor;
                        }
                        if (cursor) {
                            db.availableCursor = null;
                            flags |= 0x2000;
                        } else cursor = new (0, _nativeJs.Cursor)(db, txnAddress || 0);
                        cursorAddress = cursor.address;
                        txn.refCount = (txn.refCount || 0) + 1; // track transaction so we always use the same one
                        if (snapshot === false) {
                            cursorRenewId = renewId; // use shared read transaction
                            txn.renewingRefCount = (txn.renewingRefCount || 0) + 1; // need to know how many are renewing cursors
                        }
                    } catch (error) {
                        if (cursor) try {
                            cursor.close();
                        } catch (error) {}
                        throw error;
                    }
                }
                resetCursor();
                if (options.onlyCount) {
                    flags |= 0x1000;
                    let count = position(options.offset);
                    if (count < 0) (0, _nativeJs.lmdbError)(count);
                    finishCursor();
                    return count;
                }
                function position(offset) {
                    if (!env.address) throw new Error("Can not iterate on a closed database");
                    let keySize = currentKey === undefined ? 0 : store.writeKey(currentKey, keyBytes, 0);
                    let endAddress;
                    if (valuesForKey) {
                        if (options.start === undefined && options.end === undefined) endAddress = 0;
                        else {
                            let startAddress;
                            if (store.encoder.writeKey) {
                                startAddress = (0, _keysJs.saveKey)(options.start, store.encoder.writeKey, iterable, maxKeySize);
                                keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
                                endAddress = (0, _keysJs.saveKey)(options.end, store.encoder.writeKey, iterable, maxKeySize);
                            } else if ((!options.start || options.start instanceof Uint8Array) && (!options.end || options.end instanceof Uint8Array)) {
                                startAddress = (0, _keysJs.saveKey)(options.start, (0, _nativeJs.orderedBinary).writeKey, iterable, maxKeySize);
                                keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
                                endAddress = (0, _keysJs.saveKey)(options.end, (0, _nativeJs.orderedBinary).writeKey, iterable, maxKeySize);
                            } else throw new Error("Only key-based encoding is supported for start/end values");
                        }
                    } else endAddress = (0, _keysJs.saveKey)(options.end, store.writeKey, iterable, maxKeySize);
                    return (0, _nativeJs.position)(cursorAddress, flags, offset || 0, keySize, endAddress);
                }
                function finishCursor() {
                    if (txn.isDone) return;
                    if (iterable.onDone) iterable.onDone();
                    if (cursorRenewId) txn.renewingRefCount--;
                    if (--txn.refCount <= 0 && txn.notCurrent) {
                        cursor.close();
                        txn.abort(); // this is no longer main read txn, abort it now that we are done
                        txn.isDone = true;
                    } else if (db.availableCursor || txn != readTxn) cursor.close();
                    else {
                        db.availableCursor = cursor;
                        db.cursorTxn = txn;
                    }
                }
                return {
                    next () {
                        let keySize, lastSize;
                        if (cursorRenewId && (cursorRenewId != renewId || txn.isDone)) {
                            resetCursor();
                            keySize = position(0);
                        }
                        if (count === 0) keySize = position(options.offset);
                        else keySize = (0, _nativeJs.iterate)(cursorAddress);
                        if (keySize <= 0 || count++ >= limit) {
                            if (count < 0) (0, _nativeJs.lmdbError)(count);
                            finishCursor();
                            return ITERATOR_DONE;
                        }
                        if (!valuesForKey || snapshot === false) {
                            if (keySize > 20000) {
                                if (keySize > 0x1000000) (0, _nativeJs.lmdbError)(keySize - 0x100000000);
                                throw new Error("Invalid key size " + keySize.toString(16));
                            }
                            currentKey = store.readKey(keyBytes, 32, keySize + 32);
                        }
                        if (includeValues) {
                            let value;
                            lastSize = keyBytesView.getUint32(0, true);
                            let bufferId = keyBytesView.getUint32(4, true);
                            let bytes;
                            if (bufferId) bytes = getMMapBuffer(bufferId, lastSize);
                            else {
                                bytes = compression ? compression.getValueBytes : getValueBytes;
                                if (lastSize > bytes.maxLength) {
                                    store.lastSize = lastSize;
                                    asSafeBuffer = store.encoding == "binary";
                                    try {
                                        bytes = store._returnLargeBuffer(()=>(0, _nativeJs.getCurrentValue)(cursorAddress));
                                    } finally{
                                        asSafeBuffer = false;
                                    }
                                } else bytes.length = lastSize;
                            }
                            if (store.decoder) value = store.decoder.decode(bytes, lastSize);
                            else if (store.encoding == "binary") value = bytes.isGlobal ? Uint8ArraySlice.call(bytes, 0, lastSize) : bytes;
                            else {
                                value = bytes.toString("utf8", 0, lastSize);
                                if (store.encoding == "json" && value) value = JSON.parse(value);
                            }
                            if (includeVersions) return {
                                value: {
                                    key: currentKey,
                                    value,
                                    version: getLastVersion()
                                }
                            };
                            else if (valuesForKey) return {
                                value
                            };
                            else return {
                                value: {
                                    key: currentKey,
                                    value
                                }
                            };
                        } else if (includeVersions) return {
                            value: {
                                key: currentKey,
                                version: getLastVersion()
                            }
                        };
                        else return {
                            value: currentKey
                        };
                    },
                    return () {
                        finishCursor();
                        return ITERATOR_DONE;
                    },
                    throw () {
                        finishCursor();
                        return ITERATOR_DONE;
                    }
                };
            };
            return iterable;
        },
        getMany (keys, callback) {
            // this is an asynchronous get for multiple keys. It actually works by prefetching asynchronously,
            // allowing a separate to absorb the potentially largest cost: hard page faults (and disk I/O).
            // And then we just do standard sync gets (to deserialized data) to fulfil the callback/promise
            // once the prefetch occurs
            let promise = callback ? undefined : new Promise((resolve)=>callback = (error, results)=>resolve(results));
            this.prefetch(keys, ()=>{
                let results = new Array(keys.length);
                for(let i = 0, l = keys.length; i < l; i++)results[i] = get.call(this, keys[i]);
                callback(null, results);
            });
            return promise;
        },
        getSharedBufferForGet (id, options) {
            let txn = env.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
            this.lastSize = this.keyIsCompatibility ? txn.getBinaryShared(id) : this.db.get(this.writeKey(id, keyBytes, 0));
            if (this.lastSize === -30798) return; //undefined
            return this.lastSize;
        },
        prefetch (keys, callback) {
            if (!keys) throw new Error("An array of keys must be provided");
            if (!keys.length) {
                if (callback) {
                    callback(null);
                    return;
                } else return Promise.resolve();
            }
            let buffers = [];
            let startPosition;
            let bufferHolder = {};
            let lastBuffer;
            for (let key of keys){
                let position;
                if (key && key.key !== undefined && key.value !== undefined) {
                    position = (0, _keysJs.saveKey)(key.value, this.writeKey, bufferHolder, maxKeySize, 0x80000000);
                    (0, _keysJs.saveKey)(key.key, this.writeKey, bufferHolder, maxKeySize);
                } else position = (0, _keysJs.saveKey)(key, this.writeKey, bufferHolder, maxKeySize);
                if (!startPosition) startPosition = position;
                if (bufferHolder.saveBuffer != lastBuffer) {
                    buffers.push(bufferHolder);
                    lastBuffer = bufferHolder.saveBuffer;
                    bufferHolder = {
                        saveBuffer: lastBuffer
                    };
                }
            }
            (0, _keysJs.saveKey)(undefined, this.writeKey, bufferHolder, maxKeySize);
            outstandingReads++;
            (0, _nativeJs.prefetch)(this.dbAddress, startPosition, (error)=>{
                outstandingReads--;
                if (error) console.error("Error with prefetch", buffers, bufferHolder); // partly exists to keep the buffers pinned in memory
                else callback(null);
            });
            if (!callback) return new Promise((resolve)=>callback = resolve);
        },
        useReadTransaction () {
            let txn = readTxnRenewed ? readTxn : renewReadTxn(this);
            if (!txn.use) throw new Error("Can not use read transaction from a closed database");
            txn.use();
            return txn;
        },
        close (callback) {
            this.status = "closing";
            let txnPromise;
            if (this.isRoot) {
                // if it is root, we need to abort and/or wait for transactions to finish
                if (readTxn) readTxn.abort();
                else readTxn = {};
                readTxn.isDone = true;
                Object.defineProperty(readTxn, "renew", {
                    value: ()=>{
                        throw new Error("Can not read from a closed database");
                    },
                    configurable: true
                });
                Object.defineProperty(readTxn, "use", {
                    value: ()=>{
                        throw new Error("Can not read from a closed database");
                    },
                    configurable: true
                });
                readTxnRenewed = null;
                txnPromise = this._endWrites && this._endWrites();
            }
            const doClose = ()=>{
                if (this.isRoot) {
                    if (outstandingReads > 0) return new Promise((resolve)=>setTimeout(()=>resolve(doClose()), 1));
                    env.address = 0;
                    env.close();
                } else this.db.close();
                this.status = "closed";
                if (callback) callback();
            };
            if (txnPromise) return txnPromise.then(doClose);
            else {
                doClose();
                return Promise.resolve();
            }
        },
        getStats () {
            let txn = env.writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(this));
            let dbStats = this.db.stat();
            dbStats.root = env.stat();
            Object.assign(dbStats, env.info());
            dbStats.free = env.freeStat();
            return dbStats;
        }
    });
    let get = LMDBStore.prototype.get;
    let lastReadTxnRef;
    function getMMapBuffer(bufferId, size) {
        let buffer = mmaps[bufferId];
        if (!buffer) buffer = mmaps[bufferId] = (0, _nativeJs.getSharedBuffer)(bufferId, env.address);
        let offset = keyBytesView.getUint32(8, true);
        return new Uint8Array(buffer, offset, size);
    }
    function renewReadTxn(store) {
        if (!env.address) throw new Error("Can not renew a transaction from a closed database");
        if (!readTxn) {
            let retries = 0;
            let waitArray;
            do try {
                let lastReadTxn = lastReadTxnRef && lastReadTxnRef.deref();
                readTxn = new (0, _nativeJs.Txn)(env, 0x20000, lastReadTxn && !lastReadTxn.isDone && lastReadTxn);
                if (readTxn.address == 0) {
                    readTxn = lastReadTxn;
                    if (readTxn.notCurrent) readTxn.notCurrent = false;
                }
                break;
            } catch (error) {
                if (error.message.includes("temporarily")) {
                    if (!waitArray) waitArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
                    Atomics.wait(waitArray, 0, 0, retries * 2);
                } else throw error;
            }
            while (retries++ < 100);
        }
        // we actually don't renew here, we let the renew take place in the next 
        // lmdb native read/call so as to avoid an extra native call
        readTxnRenewed = setTimeout(resetReadTxn, 0);
        store.emit("begin-transaction");
        return readTxn;
    }
    function resetReadTxn() {
        renewId++;
        if (readTxnRenewed) {
            readTxnRenewed = null;
            if (readTxn.refCount - (readTxn.renewingRefCount || 0) > 0) {
                readTxn.notCurrent = true;
                lastReadTxnRef = new WeakRef(readTxn);
                readTxn = null;
            } else if (readTxn.address && !readTxn.isDone) (0, _nativeJs.resetTxn)(readTxn.address);
            else {
                console.warn("Attempt to reset an invalid read txn", readTxn);
                throw new Error("Attempt to reset an invalid read txn");
            }
        }
    }
}
function makeReusableBuffer(size) {
    let bytes = typeof Buffer != "undefined" ? Buffer.alloc(size) : new Uint8Array(size);
    bytes.maxLength = size;
    Object.defineProperty(bytes, "length", {
        value: size,
        writable: true,
        configurable: true
    });
    return bytes;
}
(0, _nativeJs.Txn).prototype.done = function() {
    this.refCount--;
    if (this.refCount === 0 && this.notCurrent) {
        this.abort();
        this.isDone = true;
    }
};
(0, _nativeJs.Txn).prototype.use = function() {
    this.refCount = (this.refCount || 0) + 1;
};
let readInstructions, readCallbacks = new Map(), uint32Instructions, instructionsDataView = {
    setFloat64 () {},
    setUint32 () {}
}, instructionsAddress;
let savePosition = 8000;
let DYNAMIC_KEY_BUFFER_SIZE = 8192;
function allocateInstructionsBuffer() {
    readInstructions = typeof Buffer != "undefined" ? Buffer.alloc(DYNAMIC_KEY_BUFFER_SIZE) : new Uint8Array(DYNAMIC_KEY_BUFFER_SIZE);
    uint32Instructions = new Int32Array(readInstructions.buffer, 0, readInstructions.buffer.byteLength >> 2);
    uint32Instructions[2] = 0xf0000000; // indicates a new read task must be started
    instructionsAddress = readInstructions.buffer.address = (0, _nativeJs.getAddress)(readInstructions.buffer);
    readInstructions.dataView = instructionsDataView = new DataView(readInstructions.buffer, readInstructions.byteOffset, readInstructions.byteLength);
    savePosition = 0;
}
function recordReadInstruction(txnAddress, dbi, key, writeKey, maxKeySize, callback) {
    if (savePosition > 7800) allocateInstructionsBuffer();
    let start = savePosition;
    let keyPosition = savePosition + 16;
    try {
        savePosition = key === undefined ? keyPosition : writeKey(key, readInstructions, keyPosition);
    } catch (error) {
        if (error.name == "RangeError") {
            if (8180 - start < maxKeySize) {
                allocateInstructionsBuffer(); // try again:
                return recordReadInstruction(txnAddress, dbi, key, writeKey, maxKeySize, callback);
            }
            throw new Error("Key was too large, max key size is " + maxKeySize);
        } else throw error;
    }
    let length = savePosition - keyPosition;
    if (length > maxKeySize) {
        savePosition = start;
        throw new Error("Key of size " + length + " was too large, max key size is " + maxKeySize);
    }
    uint32Instructions[(start >> 2) + 3] = length; // save the length
    uint32Instructions[(start >> 2) + 2] = dbi;
    savePosition = savePosition + 12 & 0xfffffc;
    instructionsDataView.setFloat64(start, txnAddress, true);
    let callbackId = addReadCallback(()=>{
        let position = start >> 2;
        let rc = thisInstructions[position];
        callback(rc, thisInstructions[position + 1], thisInstructions[position + 2], thisInstructions[position + 3]);
    });
    let thisInstructions = uint32Instructions;
    //if (start === 0)
    return (0, _nativeJs.startRead)(instructionsAddress + start, callbackId, {}, "read");
//else
//nextRead(start);
}
let nextCallbackId = 0;
let addReadCallback = globalThis.__lmdb_read_callback;
if (!addReadCallback) {
    addReadCallback = globalThis.__lmdb_read_callback = function(callback) {
        let callbackId = nextCallbackId++;
        readCallbacks.set(callbackId, callback);
        return callbackId;
    };
    (0, _nativeJs.setReadCallback)(function(callbackId) {
        readCallbacks.get(callbackId)();
        readCallbacks.delete(callbackId);
    });
}

},{"c4564e473fc46969":"fCgem","./util/RangeIterable.js":"7rZDA","./native.js":"3MbZY","./keys.js":"BHVOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BHVOJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyKeyHandling", ()=>applyKeyHandling);
parcelHelpers.export(exports, "saveKey", ()=>saveKey);
var _nativeJs = require("./native.js");
var Buffer = require("7ffcc6d33287c37").Buffer;
const REUSE_BUFFER_MODE = 512;
const writeUint32Key = (key, target, start)=>{
    (target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).setUint32(start, key, true);
    return start + 4;
};
const readUint32Key = (target, start)=>{
    return (target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).getUint32(start, true);
};
const writeBufferKey = (key, target, start)=>{
    target.set(key, start);
    return key.length + start;
};
const Uint8ArraySlice = Uint8Array.prototype.slice;
const readBufferKey = (target, start, end)=>{
    return Uint8ArraySlice.call(target, start, end);
};
let lastEncodedValue, bytes;
function applyKeyHandling(store) {
    if (store.encoding == "ordered-binary") store.encoder = store.decoder = {
        writeKey: (0, _nativeJs.orderedBinary).writeKey,
        readKey: (0, _nativeJs.orderedBinary).readKey
    };
    if (store.encoder && store.encoder.writeKey && !store.encoder.encode) {
        store.encoder.encode = function(value, mode) {
            if (typeof value !== "object" && value && value === lastEncodedValue) ;
            else {
                lastEncodedValue = value;
                bytes = saveKey(value, this.writeKey, false, store.maxKeySize);
            }
            if (bytes.end > 0 && !(REUSE_BUFFER_MODE & mode)) return bytes.subarray(bytes.start, bytes.end);
            return bytes;
        };
        store.encoder.copyBuffers = true; // just an indicator for the buffer reuse in write.js
    }
    if (store.decoder && store.decoder.readKey && !store.decoder.decode) {
        store.decoder.decode = function(buffer) {
            return this.readKey(buffer, 0, buffer.length);
        };
        store.decoderCopies = true;
    }
    if (store.keyIsUint32 || store.keyEncoding == "uint32") {
        store.writeKey = writeUint32Key;
        store.readKey = readUint32Key;
    } else if (store.keyIsBuffer || store.keyEncoding == "binary") {
        store.writeKey = writeBufferKey;
        store.readKey = readBufferKey;
    } else if (store.keyEncoder) {
        store.writeKey = store.keyEncoder.writeKey;
        store.readKey = store.keyEncoder.readKey;
    } else {
        store.writeKey = (0, _nativeJs.orderedBinary).writeKey;
        store.readKey = (0, _nativeJs.orderedBinary).readKey;
    }
}
let saveBuffer, uint32, saveDataView = {
    setFloat64 () {},
    setUint32 () {}
}, saveDataAddress;
let savePosition = 8000;
let DYNAMIC_KEY_BUFFER_SIZE = 8192;
function allocateSaveBuffer() {
    saveBuffer = typeof Buffer != "undefined" ? Buffer.alloc(DYNAMIC_KEY_BUFFER_SIZE) : new Uint8Array(DYNAMIC_KEY_BUFFER_SIZE);
    uint32 = null;
    saveBuffer.buffer.address = (0, _nativeJs.getAddress)(saveBuffer.buffer);
    saveDataAddress = saveBuffer.buffer.address;
    // TODO: Conditionally only do this for key sequences?
    saveDataView.setUint32(savePosition, 0xffffffff);
    saveDataView.setFloat64(savePosition + 4, saveDataAddress, true); // save a pointer from the old buffer to the new address for the sake of the prefetch sequences
    saveDataView = saveBuffer.dataView || (saveBuffer.dataView = new DataView(saveBuffer.buffer, saveBuffer.byteOffset, saveBuffer.byteLength));
    savePosition = 0;
}
function saveKey(key, writeKey, saveTo, maxKeySize, flags) {
    if (savePosition > 7800) allocateSaveBuffer();
    let start = savePosition;
    try {
        savePosition = key === undefined ? start + 4 : writeKey(key, saveBuffer, start + 4);
    } catch (error) {
        saveBuffer.fill(0, start + 4); // restore zeros
        if (error.name == "RangeError") {
            if (8180 - start < maxKeySize) {
                allocateSaveBuffer(); // try again:
                return saveKey(key, writeKey, saveTo, maxKeySize);
            }
            throw new Error("Key was too large, max key size is " + maxKeySize);
        } else throw error;
    }
    let length = savePosition - start - 4;
    if (length > maxKeySize) throw new Error("Key of size " + length + " was too large, max key size is " + maxKeySize);
    if (savePosition >= 8160) {
        savePosition = start // reset position
        ;
        allocateSaveBuffer(); // try again:
        return saveKey(key, writeKey, saveTo, maxKeySize);
    }
    if (saveTo) {
        saveDataView.setUint32(start, flags ? length | flags : length, true); // save the length
        saveTo.saveBuffer = saveBuffer;
        savePosition = savePosition + 12 & 0xfffffc;
        return start + saveDataAddress;
    } else {
        saveBuffer.start = start + 4;
        saveBuffer.end = savePosition;
        savePosition = savePosition + 7 & 0xfffff8; // full 64-bit word alignment since these are usually copied
        return saveBuffer;
    }
}

},{"7ffcc6d33287c37":"fCgem","./native.js":"3MbZY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
class RecipeView {
    #paprentElement = document.querySelector(".recipe");
    #data;
    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#paprentElement.insertAdjacentHTML("afterbegin", markup);
    }
    #clear() {
        this.#paprentElement.innerHTML = "";
    }
    renderSpinner = function() {
        const markup = `
  <div class="spinner">
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
          </div>
  `;
        this.#paprentElement.innerHTML = "";
        this.#paprentElement.insertAdjacentHTML("afterbegin", markup);
    };
    #generateMarkup() {
        return `
        <figure class="recipe__fig">
          <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this.#data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this.#data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this.#data.serving}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this.#data.ingredients.map(this.#generateMarekUpIngridient).join("")}
            

      

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this.#data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this.#data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>      
    `;
    }
    #generateMarekUpIngridient(ing) {
        return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity).toString() : ""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>
    `;
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp","fractional":"3SU56"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}]},["kYpTN","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
