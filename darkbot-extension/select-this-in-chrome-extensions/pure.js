"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/type-detect/type-detect.js
  var require_type_detect = __commonJS({
    "node_modules/type-detect/type-detect.js"(exports2, module) {
      "use strict";
      (function(global3, factory) {
        typeof exports2 === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global3 = typeof globalThis !== "undefined" ? globalThis : global3 || self, global3.typeDetect = factory());
      })(exports2, function() {
        "use strict";
        var promiseExists = typeof Promise === "function";
        var globalObject = function(Obj) {
          if (typeof globalThis === "object") {
            return globalThis;
          }
          Object.defineProperty(Obj, "typeDetectGlobalObject", {
            get: function get() {
              return this;
            },
            configurable: true
          });
          var global3 = typeDetectGlobalObject;
          delete Obj.typeDetectGlobalObject;
          return global3;
        }(Object.prototype);
        var symbolExists = typeof Symbol !== "undefined";
        var mapExists = typeof Map !== "undefined";
        var setExists = typeof Set !== "undefined";
        var weakMapExists = typeof WeakMap !== "undefined";
        var weakSetExists = typeof WeakSet !== "undefined";
        var dataViewExists = typeof DataView !== "undefined";
        var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
        var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
        var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
        var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
        var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
        var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
        var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
        var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
        var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
        var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
        var toStringLeftSliceLength = 8;
        var toStringRightSliceLength = -1;
        function typeDetect(obj) {
          var typeofObj = typeof obj;
          if (typeofObj !== "object") {
            return typeofObj;
          }
          if (obj === null) {
            return "null";
          }
          if (obj === globalObject) {
            return "global";
          }
          if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
            return "Array";
          }
          if (typeof window === "object" && window !== null) {
            if (typeof window.location === "object" && obj === window.location) {
              return "Location";
            }
            if (typeof window.document === "object" && obj === window.document) {
              return "Document";
            }
            if (typeof window.navigator === "object") {
              if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
                return "MimeTypeArray";
              }
              if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
                return "PluginArray";
              }
            }
            if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
              if (obj.tagName === "BLOCKQUOTE") {
                return "HTMLQuoteElement";
              }
              if (obj.tagName === "TD") {
                return "HTMLTableDataCellElement";
              }
              if (obj.tagName === "TH") {
                return "HTMLTableHeaderCellElement";
              }
            }
          }
          var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
          if (typeof stringTag === "string") {
            return stringTag;
          }
          var objPrototype = Object.getPrototypeOf(obj);
          if (objPrototype === RegExp.prototype) {
            return "RegExp";
          }
          if (objPrototype === Date.prototype) {
            return "Date";
          }
          if (promiseExists && objPrototype === Promise.prototype) {
            return "Promise";
          }
          if (setExists && objPrototype === Set.prototype) {
            return "Set";
          }
          if (mapExists && objPrototype === Map.prototype) {
            return "Map";
          }
          if (weakSetExists && objPrototype === WeakSet.prototype) {
            return "WeakSet";
          }
          if (weakMapExists && objPrototype === WeakMap.prototype) {
            return "WeakMap";
          }
          if (dataViewExists && objPrototype === DataView.prototype) {
            return "DataView";
          }
          if (mapExists && objPrototype === mapIteratorPrototype) {
            return "Map Iterator";
          }
          if (setExists && objPrototype === setIteratorPrototype) {
            return "Set Iterator";
          }
          if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
            return "Array Iterator";
          }
          if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
            return "String Iterator";
          }
          if (objPrototype === null) {
            return "Object";
          }
          return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
        }
        return typeDetect;
      });
    }
  });

  // node_modules/deep-eql/index.js
  var require_deep_eql = __commonJS({
    "node_modules/deep-eql/index.js"(exports2, module) {
      "use strict";
      var type = require_type_detect();
      function FakeMap() {
        this._key = "chai/deep-eql__" + Math.random() + Date.now();
      }
      FakeMap.prototype = {
        get: function get(key) {
          return key[this._key];
        },
        set: function set(key, value) {
          if (Object.isExtensible(key)) {
            Object.defineProperty(key, this._key, {
              value,
              configurable: true
            });
          }
        }
      };
      var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
      function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
        if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
          return null;
        }
        var leftHandMap = memoizeMap.get(leftHandOperand);
        if (leftHandMap) {
          var result = leftHandMap.get(rightHandOperand);
          if (typeof result === "boolean") {
            return result;
          }
        }
        return null;
      }
      function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
        if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
          return;
        }
        var leftHandMap = memoizeMap.get(leftHandOperand);
        if (leftHandMap) {
          leftHandMap.set(rightHandOperand, result);
        } else {
          leftHandMap = new MemoizeMap();
          leftHandMap.set(rightHandOperand, result);
          memoizeMap.set(leftHandOperand, leftHandMap);
        }
      }
      module.exports = deepEqual;
      module.exports.MemoizeMap = MemoizeMap;
      function deepEqual(leftHandOperand, rightHandOperand, options) {
        if (options && options.comparator) {
          return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
      }
      function simpleEqual(leftHandOperand, rightHandOperand) {
        if (leftHandOperand === rightHandOperand) {
          return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
        }
        if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
        rightHandOperand !== rightHandOperand) {
          return true;
        }
        if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
          return false;
        }
        return null;
      }
      function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
        options = options || {};
        options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
        var comparator = options && options.comparator;
        var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
        if (memoizeResultLeft !== null) {
          return memoizeResultLeft;
        }
        var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
        if (memoizeResultRight !== null) {
          return memoizeResultRight;
        }
        if (comparator) {
          var comparatorResult = comparator(leftHandOperand, rightHandOperand);
          if (comparatorResult === false || comparatorResult === true) {
            memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
            return comparatorResult;
          }
          var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
          if (simpleResult !== null) {
            return simpleResult;
          }
        }
        var leftHandType = type(leftHandOperand);
        if (leftHandType !== type(rightHandOperand)) {
          memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
          return false;
        }
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
        var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
        return result;
      }
      function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
        switch (leftHandType) {
          case "String":
          case "Number":
          case "Boolean":
          case "Date":
            return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
          case "Promise":
          case "Symbol":
          case "function":
          case "WeakMap":
          case "WeakSet":
            return leftHandOperand === rightHandOperand;
          case "Error":
            return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
          case "Arguments":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "Array":
            return iterableEqual(leftHandOperand, rightHandOperand, options);
          case "RegExp":
            return regexpEqual(leftHandOperand, rightHandOperand);
          case "Generator":
            return generatorEqual(leftHandOperand, rightHandOperand, options);
          case "DataView":
            return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
          case "ArrayBuffer":
            return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
          case "Set":
            return entriesEqual(leftHandOperand, rightHandOperand, options);
          case "Map":
            return entriesEqual(leftHandOperand, rightHandOperand, options);
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.Instant":
          case "Temporal.ZonedDateTime":
          case "Temporal.PlainYearMonth":
          case "Temporal.PlainMonthDay":
            return leftHandOperand.equals(rightHandOperand);
          case "Temporal.Duration":
            return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
          case "Temporal.TimeZone":
          case "Temporal.Calendar":
            return leftHandOperand.toString() === rightHandOperand.toString();
          default:
            return objectEqual(leftHandOperand, rightHandOperand, options);
        }
      }
      function regexpEqual(leftHandOperand, rightHandOperand) {
        return leftHandOperand.toString() === rightHandOperand.toString();
      }
      function entriesEqual(leftHandOperand, rightHandOperand, options) {
        try {
          if (leftHandOperand.size !== rightHandOperand.size) {
            return false;
          }
          if (leftHandOperand.size === 0) {
            return true;
          }
        } catch (sizeError) {
          return false;
        }
        var leftHandItems = [];
        var rightHandItems = [];
        leftHandOperand.forEach(function gatherEntries(key, value) {
          leftHandItems.push([key, value]);
        });
        rightHandOperand.forEach(function gatherEntries(key, value) {
          rightHandItems.push([key, value]);
        });
        return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
      }
      function iterableEqual(leftHandOperand, rightHandOperand, options) {
        var length = leftHandOperand.length;
        if (length !== rightHandOperand.length) {
          return false;
        }
        if (length === 0) {
          return true;
        }
        var index = -1;
        while (++index < length) {
          if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
            return false;
          }
        }
        return true;
      }
      function generatorEqual(leftHandOperand, rightHandOperand, options) {
        return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
      }
      function hasIteratorFunction(target) {
        return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
      }
      function getIteratorEntries(target) {
        if (hasIteratorFunction(target)) {
          try {
            return getGeneratorEntries(target[Symbol.iterator]());
          } catch (iteratorError) {
            return [];
          }
        }
        return [];
      }
      function getGeneratorEntries(generator) {
        var generatorResult = generator.next();
        var accumulator = [generatorResult.value];
        while (generatorResult.done === false) {
          generatorResult = generator.next();
          accumulator.push(generatorResult.value);
        }
        return accumulator;
      }
      function getEnumerableKeys(target) {
        var keys = [];
        for (var key in target) {
          keys.push(key);
        }
        return keys;
      }
      function getEnumerableSymbols(target) {
        var keys = [];
        var allKeys = Object.getOwnPropertySymbols(target);
        for (var i = 0; i < allKeys.length; i += 1) {
          var key = allKeys[i];
          if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
            keys.push(key);
          }
        }
        return keys;
      }
      function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
        var length = keys.length;
        if (length === 0) {
          return true;
        }
        for (var i = 0; i < length; i += 1) {
          if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
            return false;
          }
        }
        return true;
      }
      function objectEqual(leftHandOperand, rightHandOperand, options) {
        var leftHandKeys = getEnumerableKeys(leftHandOperand);
        var rightHandKeys = getEnumerableKeys(rightHandOperand);
        var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
        var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
        leftHandKeys = leftHandKeys.concat(leftHandSymbols);
        rightHandKeys = rightHandKeys.concat(rightHandSymbols);
        if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
          if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
            return false;
          }
          return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
        }
        var leftHandEntries = getIteratorEntries(leftHandOperand);
        var rightHandEntries = getIteratorEntries(rightHandOperand);
        if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
          leftHandEntries.sort();
          rightHandEntries.sort();
          return iterableEqual(leftHandEntries, rightHandEntries, options);
        }
        if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
          return true;
        }
        return false;
      }
      function isPrimitive(value) {
        return value === null || typeof value !== "object";
      }
      function mapSymbols(arr) {
        return arr.map(function mapSymbol(entry) {
          if (typeof entry === "symbol") {
            return entry.toString();
          }
          return entry;
        });
      }
    }
  });

  // node_modules/group-items/dist/collectors/as-arrays.js
  var require_as_arrays = __commonJS({
    "node_modules/group-items/dist/collectors/as-arrays.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.asArraysFactory = void 0;
      function asArraysFactory(groups) {
        return () => {
          return groups.map((g) => g.items);
        };
      }
      exports2.asArraysFactory = asArraysFactory;
    }
  });

  // node_modules/group-items/dist/collectors/as-entries.js
  var require_as_entries = __commonJS({
    "node_modules/group-items/dist/collectors/as-entries.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.asEntriesFactory = void 0;
      function asEntriesFactory(groups) {
        return (options) => {
          var _a2, _b2;
          const keyName = (_a2 = options === null || options === void 0 ? void 0 : options.keyName) !== null && _a2 !== void 0 ? _a2 : "key";
          const itemsName = (_b2 = options === null || options === void 0 ? void 0 : options.itemsName) !== null && _b2 !== void 0 ? _b2 : "items";
          return groups.map((g) => ({
            [keyName]: g.key,
            [itemsName]: g.items
          }));
        };
      }
      exports2.asEntriesFactory = asEntriesFactory;
    }
  });

  // node_modules/group-items/dist/collectors/as-map.js
  var require_as_map = __commonJS({
    "node_modules/group-items/dist/collectors/as-map.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.asMapFactory = void 0;
      function asMapFactory(groups) {
        return () => {
          const map2 = /* @__PURE__ */ new Map();
          for (const group5 of groups) {
            map2.set(group5.key, group5.items);
          }
          return map2;
        };
      }
      exports2.asMapFactory = asMapFactory;
    }
  });

  // node_modules/group-items/dist/collectors/as-object.js
  var require_as_object = __commonJS({
    "node_modules/group-items/dist/collectors/as-object.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.asObjectFactory = void 0;
      function isObjectAssignable(key) {
        return typeof key === "string" || typeof key === "number" || typeof key === "symbol";
      }
      function asObjectFactory(groups) {
        return () => {
          const obj = {};
          for (const group5 of groups) {
            if (isObjectAssignable(group5.key)) {
              obj[group5.key] = group5.items;
            }
          }
          return obj;
        };
      }
      exports2.asObjectFactory = asObjectFactory;
    }
  });

  // node_modules/group-items/dist/collectors/as-tuples.js
  var require_as_tuples = __commonJS({
    "node_modules/group-items/dist/collectors/as-tuples.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.asTuplesFactory = void 0;
      function asTuplesFactory(groups) {
        return () => {
          return groups.map((g) => [g.key, g.items]);
        };
      }
      exports2.asTuplesFactory = asTuplesFactory;
    }
  });

  // node_modules/group-items/dist/collectors/keys.js
  var require_keys = __commonJS({
    "node_modules/group-items/dist/collectors/keys.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.keysFactory = void 0;
      function keysFactory(groups) {
        return () => {
          return groups.map((g) => g.key);
        };
      }
      exports2.keysFactory = keysFactory;
    }
  });

  // node_modules/group-items/dist/group.js
  var require_group = __commonJS({
    "node_modules/group-items/dist/group.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.group = void 0;
      var deep_eql_1 = __importDefault(require_deep_eql());
      var as_arrays_js_1 = require_as_arrays();
      var as_entries_js_1 = require_as_entries();
      var as_map_js_1 = require_as_map();
      var as_object_js_1 = require_as_object();
      var as_tuples_js_1 = require_as_tuples();
      var keys_js_1 = require_keys();
      function createGrouping(items, keyFn) {
        const groups = [];
        const groupsByKeyHash = /* @__PURE__ */ new Map();
        let idx = 0;
        for (const item of items) {
          const itemKey = keyFn(item, idx);
          idx++;
          const itemKeyHash = typeof itemKey === "object" ? JSON.stringify(itemKey) : itemKey;
          let sameHashGroups = groupsByKeyHash.get(itemKeyHash);
          if (sameHashGroups == null) {
            sameHashGroups = [];
            groupsByKeyHash.set(itemKeyHash, sameHashGroups);
          }
          let found = false;
          for (const group6 of sameHashGroups) {
            if ((0, deep_eql_1.default)(group6.key, itemKey)) {
              group6.items.push(item);
              found = true;
              break;
            }
          }
          if (!found) {
            const group6 = { key: itemKey, items: [item] };
            groups.push(group6);
            sameHashGroups.push(group6);
          }
        }
        return groups;
      }
      function group5(items) {
        const by = (key) => {
          const keyFn = typeof key === "function" ? key : (item) => item[key];
          const groups = createGrouping(items, keyFn);
          return Object.freeze({
            asArrays: (0, as_arrays_js_1.asArraysFactory)(groups),
            asEntries: (0, as_entries_js_1.asEntriesFactory)(groups),
            asMap: (0, as_map_js_1.asMapFactory)(groups),
            asObject: (0, as_object_js_1.asObjectFactory)(groups),
            asTuples: (0, as_tuples_js_1.asTuplesFactory)(groups),
            keys: (0, keys_js_1.keysFactory)(groups)
          });
        };
        return Object.freeze({ by });
      }
      exports2.group = group5;
    }
  });

  // node_modules/group-items/dist/index.js
  var require_dist = __commonJS({
    "node_modules/group-items/dist/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.group = void 0;
      var group_js_1 = require_group();
      Object.defineProperty(exports2, "group", { enumerable: true, get: function() {
        return group_js_1.group;
      } });
    }
  });

  // node_modules/lz-string/libs/lz-string.js
  var require_lz_string = __commonJS({
    "node_modules/lz-string/libs/lz-string.js"(exports2, module) {
      "use strict";
      var LZString = function() {
        var f = String.fromCharCode;
        var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
        var baseReverseDic = {};
        function getBaseValue(alphabet, character) {
          if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
              baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
          }
          return baseReverseDic[alphabet][character];
        }
        var LZString2 = {
          compressToBase64: function(input) {
            if (input == null) return "";
            var res = LZString2._compress(input, 6, function(a) {
              return keyStrBase64.charAt(a);
            });
            switch (res.length % 4) {
              // To produce valid Base64
              default:
              // When could this happen ?
              case 0:
                return res;
              case 1:
                return res + "===";
              case 2:
                return res + "==";
              case 3:
                return res + "=";
            }
          },
          decompressFromBase64: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrBase64, input.charAt(index));
            });
          },
          compressToUTF16: function(input) {
            if (input == null) return "";
            return LZString2._compress(input, 15, function(a) {
              return f(a + 32);
            }) + " ";
          },
          decompressFromUTF16: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString2._decompress(compressed.length, 16384, function(index) {
              return compressed.charCodeAt(index) - 32;
            });
          },
          //compress into uint8array (UCS-2 big endian format)
          compressToUint8Array: function(uncompressed) {
            var compressed = LZString2.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2);
            for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
              var current_value = compressed.charCodeAt(i);
              buf[i * 2] = current_value >>> 8;
              buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
          },
          //decompress from uint8array (UCS-2 big endian format)
          decompressFromUint8Array: function(compressed) {
            if (compressed === null || compressed === void 0) {
              return LZString2.decompress(compressed);
            } else {
              var buf = new Array(compressed.length / 2);
              for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
                buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
              }
              var result = [];
              buf.forEach(function(c) {
                result.push(f(c));
              });
              return LZString2.decompress(result.join(""));
            }
          },
          //compress into a string that is already URI encoded
          compressToEncodedURIComponent: function(input) {
            if (input == null) return "";
            return LZString2._compress(input, 6, function(a) {
              return keyStrUriSafe.charAt(a);
            });
          },
          //decompress from an output of compressToEncodedURIComponent
          decompressFromEncodedURIComponent: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
          },
          compress: function(uncompressed) {
            return LZString2._compress(uncompressed, 16, function(a) {
              return f(a);
            });
          },
          _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null) return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for (ii = 0; ii < uncompressed.length; ii += 1) {
              context_c = uncompressed.charAt(ii);
              if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                context_dictionary[context_c] = context_dictSize++;
                context_dictionaryToCreate[context_c] = true;
              }
              context_wc = context_w + context_c;
              if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                context_w = context_wc;
              } else {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                  if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 8; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  } else {
                    value = 1;
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1 | value;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = 0;
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 16; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  }
                  context_enlargeIn--;
                  if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                  }
                  delete context_dictionaryToCreate[context_w];
                } else {
                  value = context_dictionary[context_w];
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                context_dictionary[context_wc] = context_dictSize++;
                context_w = String(context_c);
              }
            }
            if (context_w !== "") {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
            }
            value = 2;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
            while (true) {
              context_data_val = context_data_val << 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data.push(getCharFromInt(context_data_val));
                break;
              } else context_data_position++;
            }
            return context_data.join("");
          },
          decompress: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString2._decompress(compressed.length, 32768, function(index) {
              return compressed.charCodeAt(index);
            });
          },
          _decompress: function(length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits2, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
            for (i = 0; i < 3; i += 1) {
              dictionary[i] = i;
            }
            bits2 = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits2 |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (next = bits2) {
              case 0:
                bits2 = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits2 |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits2);
                break;
              case 1:
                bits2 = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits2 |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits2);
                break;
              case 2:
                return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
              if (data.index > length) {
                return "";
              }
              bits2 = 0;
              maxpower = Math.pow(2, numBits);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits2 |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              switch (c = bits2) {
                case 0:
                  bits2 = 0;
                  maxpower = Math.pow(2, 8);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits2 |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits2);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 1:
                  bits2 = 0;
                  maxpower = Math.pow(2, 16);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits2 |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits2);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 2:
                  return result.join("");
              }
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
              if (dictionary[c]) {
                entry = dictionary[c];
              } else {
                if (c === dictSize) {
                  entry = w + w.charAt(0);
                } else {
                  return null;
                }
              }
              result.push(entry);
              dictionary[dictSize++] = w + entry.charAt(0);
              enlargeIn--;
              w = entry;
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
            }
          }
        };
        return LZString2;
      }();
      if (typeof define === "function" && define.amd) {
        define(function() {
          return LZString;
        });
      } else if (typeof module !== "undefined" && module != null) {
        module.exports = LZString;
      } else if (typeof angular !== "undefined" && angular != null) {
        angular.module("LZString", []).factory("LZString", function() {
          return LZString;
        });
      }
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports2, module) {
      "use strict";
      var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports2, module) {
      "use strict";
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports2, module) {
      "use strict";
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports2, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports2, module) {
      "use strict";
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports2, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports2, module) {
      "use strict";
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports2, module) {
      "use strict";
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports2, module) {
      "use strict";
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports2, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/lodash/isError.js
  var require_isError = __commonJS({
    "node_modules/lodash/isError.js"(exports2, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var isPlainObject = require_isPlainObject();
      var domExcTag = "[object DOMException]";
      var errorTag = "[object Error]";
      function isError3(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      module.exports = isError3;
    }
  });

  // node_modules/fflate/esm/browser.js
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new i32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2);
  var fl = _a.b;
  var revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b.b;
  var revfd = _b.r;
  var rev = new u16(32768);
  for (i = 0; i < 32768; ++i) {
    x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var x;
  var i;
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l = new u16(mb);
    for (; i < s; ++i) {
      if (cd[i])
        ++l[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 1; i < mb; ++i) {
      le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          var sv = i << 4 | cd[i];
          var r_1 = mb - cd[i];
          var v = le[cd[i] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (i = 0; i < 144; ++i)
    flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i)
    flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i)
    flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i)
    flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i)
    fdt[i] = 5;
  var i;
  var flm = /* @__PURE__ */ hMap(flt, 9, 0);
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > m)
        m = a[i];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i = 0; i < hcLen; ++i) {
            clt[clim[i]] = bits(dat, pos + i * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i = 0; i < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i = sym - 257, b = fleb[i];
            add = bits(dat, pos, (1 << b) - 1) + fl[i];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
  };
  var wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
    d[o + 2] |= v >> 16;
  };
  var hTree = function(d, mb) {
    var t = [];
    for (var i = 0; i < d.length; ++i) {
      if (d[i])
        t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
      return { t: et, l: 0 };
    if (s == 1) {
      var v = new u8(t[0].s + 1);
      v[t[0].s] = 1;
      return { t: v, l: 1 };
    }
    t.sort(function(a, b) {
      return a.f - b.f;
    });
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l, r };
    while (i1 != s - 1) {
      l = t[t[i0].f < t[i2].f ? i0++ : i2++];
      r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
      t[i1++] = { s: -1, f: l.f + r.f, l, r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
      if (t2[i].s > maxSym)
        maxSym = t2[i].s;
    }
    var tr2 = new u16(maxSym + 1);
    var mbt = ln(t[i1 - 1], tr2, 0);
    if (mbt > mb) {
      var i = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t2.sort(function(a, b) {
        return tr2[b.s] - tr2[a.s] || a.f - b.f;
      });
      for (; i < s; ++i) {
        var i2_1 = t2[i].s;
        if (tr2[i2_1] > mb) {
          dt += cst - (1 << mbt - tr2[i2_1]);
          tr2[i2_1] = mb;
        } else
          break;
      }
      dt >>= lft;
      while (dt > 0) {
        var i2_2 = t2[i].s;
        if (tr2[i2_2] < mb)
          dt -= 1 << mb - tr2[i2_2]++ - 1;
        else
          ++i;
      }
      for (; i >= 0 && dt; --i) {
        var i2_3 = t2[i].s;
        if (tr2[i2_3] == mb) {
          --tr2[i2_3];
          ++dt;
        }
      }
      mbt = mb;
    }
    return { t: new u8(tr2), l: mbt };
  };
  var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
  };
  var lc = function(c) {
    var s = c.length;
    while (s && !c[--s])
      ;
    var cl = new u16(++s);
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
      cl[cli++] = v;
    };
    for (var i = 1; i <= s; ++i) {
      if (c[i] == cln && i != s)
        ++cls;
      else {
        if (!cln && cls > 2) {
          for (; cls > 138; cls -= 138)
            w(32754);
          if (cls > 2) {
            w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
            cls = 0;
          }
        } else if (cls > 3) {
          w(cln), --cls;
          for (; cls > 6; cls -= 6)
            w(8304);
          if (cls > 2)
            w(cls - 3 << 5 | 8208), cls = 0;
        }
        while (cls--)
          w(cln);
        cls = 1;
        cln = c[i];
      }
    }
    return { c: cl.subarray(0, cli), n: s };
  };
  var clen = function(cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
      l += cf[i] * cl[i];
    return l;
  };
  var wfblk = function(out, pos, dat) {
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
      out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
  };
  var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
    var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
    var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
    var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
      ++lcfreq[lclt[i] & 31];
    for (var i = 0; i < lcdt.length; ++i)
      ++lcfreq[lcdt[i] & 31];
    var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
      ;
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
    if (bs >= 0 && flen <= ftlen && flen <= dtlen)
      return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
      lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
      var llm = hMap(lct, mlcb, 0);
      wbits(out, p, nlc - 257);
      wbits(out, p + 5, ndc - 1);
      wbits(out, p + 10, nlcc - 4);
      p += 14;
      for (var i = 0; i < nlcc; ++i)
        wbits(out, p + 3 * i, lct[clim[i]]);
      p += 3 * nlcc;
      var lcts = [lclt, lcdt];
      for (var it = 0; it < 2; ++it) {
        var clct = lcts[it];
        for (var i = 0; i < clct.length; ++i) {
          var len = clct[i] & 31;
          wbits(out, p, llm[len]), p += lct[len];
          if (len > 15)
            wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
        }
      }
    } else {
      lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
      var sym = syms[i];
      if (sym > 255) {
        var len = sym >> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7)
          wbits(out, p, sym >> 23 & 31), p += fleb[len];
        var dst = sym & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3)
          wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
      } else {
        wbits16(out, p, lm[sym]), p += ll[sym];
      }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
  };
  var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var et = /* @__PURE__ */ new u8(0);
  var dflt = function(dat, lvl, plvl, pre, post, st) {
    var s = st.z || dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
    var w = o.subarray(pre, o.length - post);
    var lst = st.l;
    var pos = (st.r || 0) & 7;
    if (lvl) {
      if (pos)
        w[0] = st.r >> 3;
      var opt = deo[lvl - 1];
      var n = opt >> 13, c = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev = st.p || new u16(32768), head2 = st.h || new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
      var hsh = function(i2) {
        return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
      };
      var syms = new i32(25e3);
      var lf = new u16(288), df = new u16(32);
      var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
      for (; i + 2 < s; ++i) {
        var hv = hsh(i);
        var imod = i & 32767, pimod = head2[hv];
        prev[imod] = pimod;
        head2[hv] = imod;
        if (wi <= i) {
          var rem = s - i;
          if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
            pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
            li = lc_1 = eb = 0, bs = i;
            for (var j = 0; j < 286; ++j)
              lf[j] = 0;
            for (var j = 0; j < 30; ++j)
              df[j] = 0;
          }
          var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
          if (rem > 2 && hv == hsh(i - dif)) {
            var maxn = Math.min(n, rem) - 1;
            var maxd = Math.min(32767, i);
            var ml = Math.min(258, rem);
            while (dif <= maxd && --ch_1 && imod != pimod) {
              if (dat[i + l] == dat[i + l - dif]) {
                var nl = 0;
                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                  ;
                if (nl > l) {
                  l = nl, d = dif;
                  if (nl > maxn)
                    break;
                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;
                  for (var j = 0; j < mmd; ++j) {
                    var ti = i - dif + j & 32767;
                    var pti = prev[ti];
                    var cd = ti - pti & 32767;
                    if (cd > md)
                      md = cd, pimod = ti;
                  }
                }
              }
              imod = pimod, pimod = prev[imod];
              dif += imod - pimod & 32767;
            }
          }
          if (d) {
            syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
            var lin = revfl[l] & 31, din = revfd[d] & 31;
            eb += fleb[lin] + fdeb[din];
            ++lf[257 + lin];
            ++df[din];
            wi = i + l;
            ++lc_1;
          } else {
            syms[li++] = dat[i];
            ++lf[dat[i]];
          }
        }
      }
      for (i = Math.max(i, wi); i < s; ++i) {
        syms[li++] = dat[i];
        ++lf[dat[i]];
      }
      pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
      if (!lst) {
        st.r = pos & 7 | w[pos / 8 | 0] << 3;
        pos -= 7;
        st.h = head2, st.p = prev, st.i = i, st.w = wi;
      }
    } else {
      for (var i = st.w || 0; i < s + lst; i += 65535) {
        var e = i + 65535;
        if (e >= s) {
          w[pos / 8 | 0] = lst;
          e = s;
        }
        pos = wfblk(w, pos + 1, dat.subarray(i, e));
      }
      st.i = s;
    }
    return slc(o, 0, pre + shft(pos) + post);
  };
  var crct = /* @__PURE__ */ function() {
    var t = new Int32Array(256);
    for (var i = 0; i < 256; ++i) {
      var c = i, k = 9;
      while (--k)
        c = (c & 1 && -306674912) ^ c >>> 1;
      t[i] = c;
    }
    return t;
  }();
  var crc = function() {
    var c = -1;
    return {
      p: function(d) {
        var cr = c;
        for (var i = 0; i < d.length; ++i)
          cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
        c = cr;
      },
      d: function() {
        return ~c;
      }
    };
  };
  var dopt = function(dat, opt, pre, post, st) {
    if (!st) {
      st = { l: 1 };
      if (opt.dictionary) {
        var dict = opt.dictionary.subarray(-32768);
        var newDat = new u8(dict.length + dat.length);
        newDat.set(dict);
        newDat.set(dat, dict.length);
        dat = newDat;
        st.w = dict.length;
      }
    }
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
  };
  var wbytes = function(d, b, v) {
    for (; v; ++b)
      d[b] = v, v >>>= 8;
  };
  var gzh = function(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
    if (o.mtime != 0)
      wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
    if (fn) {
      c[3] = 8;
      for (var i = 0; i <= fn.length; ++i)
        c[i + 10] = fn.charCodeAt(i);
    }
  };
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += (d[10] | d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
  };
  var gzhl = function(o) {
    return 10 + (o.filename ? o.filename.length + 1 : 0);
  };
  function gzipSync(data, opts) {
    if (!opts)
      opts = {};
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
  }
  function gunzipSync(data, opts) {
    var st = gzs(data);
    if (st + 8 > data.length)
      err(6, "invalid gzip data");
    return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
  }
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }

  // src/utils/shared.ts
  var sq = (x) => x * x;
  var sleep = (delay) => new Promise((r) => setTimeout(r, delay));
  var numReg = new RegExp(/-?\d+/g);
  var matchNumbers = (str) => str.match(numReg)?.map(parseFloat);
  var squareInt = (x) => sq(Math.floor(x));
  var hashString = (str) => {
    let hash = 0;
    for (let i = 0; i !== str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  };
  var last = (a) => a[a.length - 1];
  var sample = (arr) => arr[~~(Math.random() * arr.length)];
  var stringToBytes = (str) => {
    const buf = new Uint8Array(str.length);
    for (let i = 0; i !== str.length; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  };
  var bytesToString = (bytes) => String.fromCharCode(...bytes);
  var randDuration = (min, max2) => {
    return min + Math.floor(Math.random() * (max2 - min));
  };
  var clamp = (min, x, max2) => Math.max(min, Math.min(x, max2));
  async function fileToDataUrl(file) {
    return new Promise((resolve) => {
      const fr2 = new FileReader();
      fr2.onload = async () => resolve(fr2.result);
      fr2.readAsDataURL(file);
    });
  }
  var decompressTargets = (buffer) => {
    const uncompressed = gunzipSync(new Uint8Array(buffer));
    return deltaEncodedInt16ToVec2Array(new Int16Array(uncompressed.buffer));
  };
  var deltaEncodedInt16ToVec2Array = (array) => {
    if (array.length === 0) {
      return [];
    }
    const decoded = [
      [array[0], array[1]]
    ];
    const decodedLength = array.length >> 1;
    for (let i = 1; i < decodedLength; i++) {
      const prev = decoded[i - 1];
      const encodedIndex = i << 1;
      decoded.push([
        array[encodedIndex | 0] + prev[0],
        array[encodedIndex | 1] + prev[1]
      ]);
    }
    return decoded;
  };
  var head = (arr) => arr[0];

  // src/utils/client.ts
  var $ = (sel) => document.querySelector(sel);
  var confuseString = (text2) => {
    return text2.split("").join("\u200E");
  };
  var getImageInputAccept = () => "image/*";
  var getFileFromUser = (accept) => {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      if (accept) {
        input.accept = accept;
      }
      input.addEventListener("change", () => resolve(
        input.files?.length ? input.files[0] : null
      ));
      input.click();
    });
  };
  var getImageFromUser = () => getFileFromUser(getImageInputAccept());
  var createCanvasContext = (width, height) => {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    return ctx;
  };
  var getUserLanguageCode = () => navigator.language.split("-")[0] ?? "en";

  // node-modules-polyfills:events
  var exports$1 = {};
  var _dewExec = false;
  function dew() {
    if (_dewExec) return exports$1;
    _dewExec = true;
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter2() {
      EventEmitter2.init.call(this);
    }
    exports$1 = EventEmitter2;
    exports$1.once = once22;
    EventEmitter2.EventEmitter = EventEmitter2;
    EventEmitter2.prototype._events = void 0;
    EventEmitter2.prototype._eventsCount = 0;
    EventEmitter2.prototype._maxListeners = void 0;
    var defaultMaxListeners2 = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter2, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners2;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners2 = arg;
      }
    });
    EventEmitter2.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter2.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0) return EventEmitter2.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter2.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter2.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0) doError = doError && events.error === void 0;
      else if (!doError) return false;
      if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err2 = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err2.context = er;
        throw err2;
      }
      var handler = events[type];
      if (handler === void 0) return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter2.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
    EventEmitter2.prototype.prependListener = function prependListener(type, listener) {
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
        wrapFn: void 0,
        target,
        type,
        listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter2.prototype.once = function once3(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0) return this;
      list = events[type];
      if (list === void 0) return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0) return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
          else delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap2) {
      var events = target._events;
      if (events === void 0) return [];
      var evlistener = events[type];
      if (evlistener === void 0) return [];
      if (typeof evlistener === "function") return unwrap2 ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap2 ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter2.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter2.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter2.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount2.call(emitter, type);
      }
    };
    EventEmitter2.prototype.listenerCount = listenerCount2;
    function listenerCount2(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i) copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once22(emitter, name2) {
      return new Promise(function(resolve, reject) {
        function errorListener(err2) {
          emitter.removeListener(name2, resolver);
          reject(err2);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name2, resolver, {
          once: true
        });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
          });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    return exports$1;
  }
  var exports = dew();
  exports["once"];
  exports.once = function(emitter, event) {
    return new Promise((resolve, reject) => {
      function eventListener(...args) {
        if (errorListener !== void 0) {
          emitter.removeListener("error", errorListener);
        }
        resolve(args);
      }
      let errorListener;
      if (event !== "error") {
        errorListener = (err2) => {
          emitter.removeListener(name, eventListener);
          reject(err2);
        };
        emitter.once("error", errorListener);
      }
      emitter.once(event, eventListener);
    });
  };
  exports.on = function(emitter, event) {
    const unconsumedEventValues = [];
    const unconsumedPromises = [];
    let error = null;
    let finished = false;
    const iterator = {
      async next() {
        const value = unconsumedEventValues.shift();
        if (value) {
          return createIterResult(value, false);
        }
        if (error) {
          const p = Promise.reject(error);
          error = null;
          return p;
        }
        if (finished) {
          return createIterResult(void 0, true);
        }
        return new Promise((resolve, reject) => unconsumedPromises.push({ resolve, reject }));
      },
      async return() {
        emitter.removeListener(event, eventHandler);
        emitter.removeListener("error", errorHandler);
        finished = true;
        for (const promise of unconsumedPromises) {
          promise.resolve(createIterResult(void 0, true));
        }
        return createIterResult(void 0, true);
      },
      throw(err2) {
        error = err2;
        emitter.removeListener(event, eventHandler);
        emitter.removeListener("error", errorHandler);
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
    emitter.on(event, eventHandler);
    emitter.on("error", errorHandler);
    return iterator;
    function eventHandler(...args) {
      const promise = unconsumedPromises.shift();
      if (promise) {
        promise.resolve(createIterResult(args, false));
      } else {
        unconsumedEventValues.push(args);
      }
    }
    function errorHandler(err2) {
      finished = true;
      const toError = unconsumedPromises.shift();
      if (toError) {
        toError.reject(err2);
      } else {
        error = err2;
      }
      iterator.return();
    }
  };
  var {
    EventEmitter,
    defaultMaxListeners,
    init,
    listenerCount,
    on,
    once
  } = exports;

  // src/common/Emitter.ts
  var Emitter = class extends exports {
    // @ts-expect-error
    wait(event, deadline = 1e4) {
      return new Promise((resolve, reject) => {
        this.once(event, (data) => {
          resolve(data);
        });
      });
    }
  };

  // src/common/StrictEmitter.ts
  var StrictEmitter = class extends Emitter {
    //@ts-expect-error
    on(eventName, fn) {
      return super.on(eventName, fn);
    }
    //@ts-expect-error
    once(eventName, fn) {
      return super.once(eventName, fn);
    }
    wait(event, timeout) {
      return super.wait(event, timeout);
    }
    //@ts-expect-error
    off(eventName, fn) {
      return super.off(eventName, fn);
    }
    removeAllListeners(eventName) {
      return super.removeAllListeners(eventName);
    }
    //@ts-ignore
    emit(...args) {
      if (args.length === 1) {
        super.emit(args[0]);
      } else {
        super.emit(args[0], args[1]);
      }
    }
  };

  // src/common/errors.ts
  var errDisconnected = new Error("no connection");
  var errNoTemplateSrc = new Error("need template source");
  var errNoApi = new Error("no access to canvas api");
  var errNoTemplatePosition = new Error("need template position");
  var errUndefinedCanvas = new Error("canvas undefined");
  var errUndefinedStrategy = new Error("strategy undefined");
  var errPromiseDeadline = new Error("promise deadline");
  var errAborterTriggered = new Error("errAborterTriggered");
  var errWrongDefaultStrategy = new Error("default strategy doesnt exists");
  var errSeveralNoPlacePixelResult = new Error("errSeveralNoPlacePixelResult");
  var errMaxAttempts = new Error("Max attempts reached");

  // src/common/WebSocket.ts
  var EnhancedWS = class extends StrictEmitter {
    url;
    ws = null;
    constructor(url, options) {
      super();
      this.url = url;
      if (options) {
        if (options.reconnectDelay) {
          this.on("disconnect", (e) => {
            if (!e.wasClean) {
              setTimeout(
                options.hideReconnectErrors === true ? () => this.connect().catch(() => {
                }) : () => this.connect(),
                options.reconnectDelay
              );
            }
          });
        }
      }
    }
    get connected() {
      return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
    }
    get disconnected() {
      return !this.connected;
    }
    get connecting() {
      return !!this.ws && this.ws.readyState === WebSocket.CONNECTING;
    }
    connect() {
      return new Promise((resolve, reject) => {
        if (this.ws?.readyState === WebSocket.CONNECTING || this.ws?.readyState === WebSocket.OPEN) {
          reject(new Error("try connect when websocket is OPEN or CONNECTING"));
        }
        let resolved = false;
        this.ws = new WebSocket(this.url);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = () => {
          this.emit("connect");
          resolved = true;
          resolve();
        };
        this.ws.onclose = (e) => {
          this.emit("disconnect", e);
          if (!resolved) {
            reject(e);
          }
        };
        this.ws.onerror = (e) => {
          this.emit("error", e);
        };
        this.ws.onmessage = ({ data }) => {
          if (typeof data === "string") {
            this.emit("string", data);
          } else {
            this.emit("binary", data);
          }
        };
      });
    }
    async disconnect() {
      if (!this.ws) {
        return;
      }
      this.ws.close();
      await this.wait("disconnect");
      this.ws = null;
    }
    send(data) {
      if (this.ws === null) {
        throw errDisconnected;
      }
      if (this.ws.readyState === WebSocket.CONNECTING) {
        this.once("connect", () => {
          if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(data);
          }
        });
      } else if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(data);
      } else {
        throw errDisconnected;
      }
    }
  };

  // src/common/Rect.ts
  var Rect = class _Rect {
    constructor(x1, y1, x2, y2) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    get width() {
      return this.x2 - this.x1;
    }
    set width(width) {
      this.x2 = this.x1 + width;
    }
    get height() {
      return this.y2 - this.y1;
    }
    set height(height) {
      this.y2 = this.y1 + height;
    }
    get localCenter() {
      return [this.width / 2, this.height / 2];
    }
    get center() {
      return [(this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2];
    }
    in(x, y) {
      return this.x1 <= x && x < this.x2 && this.y1 <= y && y < this.y2;
    }
    localIn(x, y) {
      return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }
    toArray() {
      return [this.x1, this.y1, this.x2, this.y2];
    }
    moveY(y) {
      this.move(this.x1, y);
    }
    moveX(x) {
      this.move(x, this.y1);
    }
    move(x, y) {
      const width = this.width;
      const height = this.height;
      this.x1 = x;
      this.y1 = y;
      this.width = width;
      this.height = height;
    }
    copy() {
      return new _Rect(this.x1, this.y1, this.x2, this.y2);
    }
  };

  // src/common/Aborter.ts
  var Aborter = class {
    triggered = false;
    promise;
    timeout;
    resolve = () => {
    };
    constructor(deadline = 6e4) {
      this.timeout = setTimeout(() => this.destroy(), deadline);
      this.promise = new Promise((r) => this.resolve = r);
    }
    abort() {
      this.resolve(errAborterTriggered);
      clearTimeout(this.timeout);
      this.triggered = true;
    }
    destroy() {
      this.resolve();
      clearTimeout(this.timeout);
    }
  };

  // src/common/const.ts
  var uiWidth = 520;
  var voidServerHost = "black-and-red.space";
  var voidServerWebsocketUrl = "wss://" + voidServerHost + "/ws";
  var historyStrategyUrl = `https://${voidServerHost}/process-template`;
  var boostyLink = "https://boosty.to/touchedbydarkness";
  var discordServerLink = "https://discord.gg/VyfVmD2nhZ";
  var githubProfileLink = "http://github.com/TouchedByDarkness";
  var helplink = "https://black-and-red.space/";
  var titles = [
    "From Void with love",
    "Made in Void",
    "From Void to all",
    "Let's all love void",
    "A gift from Void",
    "An echo of Void",
    "The promise of the Void",
    "The Reality of the Void"
  ];
  var defaultLocalStorageKey = "darkness_bot";

  // src/utils/net.ts
  var throwIfBadResponse = (res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
  };
  var fetchAndParse = async (...args) => {
    const res = await fetch(...args);
    return await res.json();
  };
  var asyncRetry = async ({
    delay,
    func,
    maxAttempts,
    onerror
  }) => {
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        return await func();
      } catch (err2) {
        attempts++;
        onerror?.(err2);
        await sleep(delay);
      }
    }
    throw errMaxAttempts;
  };
  var loadImage = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
  var downloadCanvas = (canvas, name2 = "unnamed") => {
    const link = document.createElement("a");
    link.setAttribute("href", canvas.toDataURL("image/png"));
    link.setAttribute("download", name2);
    link.click();
  };
  var downloadHTML = (html, name2 = "unnamed") => {
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(html));
    link.setAttribute("download", name2);
    link.click();
  };
  var getURLFromFetchArg = (arg) => {
    if (typeof arg === "string") return arg;
    if (arg instanceof URL) return arg.toString();
    return arg.url;
  };

  // src/CanvasAPI/errors.ts
  var errors = {
    errNoPlacePixelResult: new Error("errNoPlacePixelResult"),
    errMustAuth: new Error("errMustAuth"),
    errTooLowScore: new Error("errTooLowScore"),
    errPixelProtected: new Error("errPixelProtected"),
    errFullStack: new Error("errFullStack"),
    errCaptcha: new Error("errCaptcha"),
    errYouAreProxy: new Error("errYouAreProxy"),
    errCanvasAPIInteraction: new Error("errCanvasAPIInteraction"),
    errUnknownError: new Error("errUnknownError"),
    errAPIIsntReady: new Error("errAPIIsntReady"),
    errResponseIsntOk: new Error('response isnt "ok"'),
    errResponseStatusIsnt200: new Error("response status isnt 200"),
    errParallelPlace: new Error("errParallelPlace"),
    errYouAreBanned: new Error("errYouAreBanned"),
    errDiscordAccountReq: new Error("errDiscordAccountReq"),
    errDottingProtection: new Error("errDottingProtection")
  };

  // src/Palette.ts
  var Palette_default = class {
    constructor(offset, colors2) {
      this.offset = offset;
      this.colors = colors2.map((color) => {
        if (color.length === 3) {
          return [color[0], color[1], color[2], 255];
        }
        return color;
      });
      this.monochromes = this.colors.map((color) => {
        if (color.length === 4 && color[3] === 0) {
          return 0;
        } else {
          return color.reduce((a, b) => a + b) / 3;
        }
      });
      this.rgbaToIdDict = Object.fromEntries(this.colors.map((color, i) => [color.toString(), i]));
      this.sameColorIds = Object.fromEntries(
        this.colors.map((rgba, id2) => [
          id2,
          this.colors.findIndex((rgba2, id22) => id2 !== id22 && rgba.every((x, i) => x === rgba2[i]))
        ]).filter(([, haveTwin]) => haveTwin !== -1)
      );
    }
    rgbaToIdDict;
    monochromes;
    sameColorIds;
    colors;
    monochrome(id2) {
      return this.monochromes[id2];
    }
    sameColors(f, s) {
      return f === s || this.sameColorIds[f] === s;
    }
    // public hasRGBA (rgba: RGBA): boolean {
    // 	return this.rgbaToId(rgba) !== null;
    // }
    // public hasId(id: number): boolean {
    // 	return !!this.idToRGBA(id);
    // }
    idToRGBA(id2) {
      return this.colors[id2];
    }
    quantize(r, g, b, a = 255) {
      const rgbToIdResult = this.rgbaToId([r, g, b, a]);
      if (rgbToIdResult !== null) return rgbToIdResult;
      let nearIndex = 0;
      let nearD = Infinity;
      for (let i = this.offset; i !== this.colors.length; i++) {
        const p = this.colors[i];
        const d = sq(p[0] - r) + sq(p[1] - g) + sq(p[2] - b);
        if (d < nearD) {
          nearD = d;
          nearIndex = i;
        }
      }
      return nearIndex;
    }
    rgbaToId(color) {
      return this.rgbaToIdDict[color.toString()] ?? null;
    }
  };

  // src/CanvasAPI/functions.ts
  var chunksEqual = (ch1, ch2) => ch1[0] === ch2[0] && ch1[1] === ch2[1];
  var includesChunks = (chs, check) => chs.some((ch) => chunksEqual(ch, check));

  // src/common/logger.ts
  var Logger = class _Logger {
    name;
    color;
    static debugCheck = null;
    constructor(name2, color) {
      this.name = name2;
      this.color = color;
    }
    static setDebugCheck(fn) {
      _Logger.debugCheck = fn;
    }
    log(...args) {
      this._log("log", ...args);
    }
    info(...args) {
      this._log("info", ...args);
    }
    warn(...args) {
      this._log("warn", ...args);
    }
    error(...args) {
      this._log("error", ...args);
    }
    debug(...args) {
      this._log("debug", ...args);
    }
    debugOnly(...args) {
      if (_Logger.debugCheck && _Logger.debugCheck()) {
        this._log("debug", ...args);
      }
    }
    _log(level, ...args) {
      const processedArgs = this.processArgs(args);
      const levelColor = this.getLevelColor(level);
      const header = `%c[DarkBot]%c [${this.name}]%c [${level.toUpperCase()}]`;
      const headerStyle = "color: #000000; font-weight: bold;";
      const nameStyle = `color: ${this.color || "#ffffff"};`;
      const levelStyle = `color: ${levelColor}; font-weight: bold;`;
      console.log(header, headerStyle, nameStyle, levelStyle, ...processedArgs);
    }
    processArgs(args) {
      return args.map((arg) => {
        if (typeof arg === "string") {
          return arg.replace(/\[DB\]/g, "DarkBot").replace(/\[Trace\]/g, "Trace");
        }
        return arg;
      });
    }
    getLevelColor(level) {
      switch (level) {
        case "log":
          return "#888888";
        case "info":
          return "#b1b1b1";
        case "warn":
          return "#5a5a5a";
        case "error":
          return "#3a3a3a";
        case "debug":
          return "#7e7e7e";
        default:
          return "#000000";
      }
    }
  };

  // src/CanvasAPI/CanvasAPI.ts
  var logger = new Logger("CanvasAPI");
  var CanvasAPI = class {
    constructor(low) {
      this.low = low;
      const { offset, colors: colors2 } = this.info.palette;
      this.palette = new Palette_default(offset, colors2);
    }
    palette;
    get apiName() {
      return this.low.name;
    }
    get info() {
      return this.low.info;
    }
    workspaces = [];
    chunks = [];
    get on() {
      return this.low.on.bind(this.low);
    }
    get emit() {
      return this.low.emit.bind(this.low);
    }
    get wait() {
      return this.low.wait.bind(this.low);
    }
    get getCanvasNameByIdent() {
      return this.low.getCanvasNameByIdent?.bind(this.low);
    }
    getPixelRadarContext() {
      const fn = this.low.getPixelRadarContext;
      if (!fn) {
        return null;
      }
      return fn.call(this.low);
    }
    getCaptcha() {
      if (!this.low.getCaptcha) {
        throw new Error("getCaptcha not implemented");
      }
      return this.low.getCaptcha();
    }
    sendAnswer(solution) {
      if (!this.low.sendAnswer) {
        throw new Error("sendAnswer not implemented");
      }
      return this.low.sendAnswer(solution);
    }
    getCooldown() {
      return this.low.timer.get();
    }
    pixelsCanPlace() {
      const cd = Math.max(this.info.minCd, this.info.maxCd);
      return Math.floor((this.info.stack - this.getCooldown()) / cd);
    }
    get(x, y) {
      return this.low.get(x, y);
    }
    compare(pxl) {
      const clr = this.get(pxl.x, pxl.y);
      return this.palette.sameColors(clr, pxl.id);
    }
    predictCooldown(x, y) {
      return this.low.predictCooldown(x, y);
    }
    createWorkspace(x1, y1, x2, y2) {
      return {
        x1,
        y1,
        x2,
        y2,
        chunks: this.low.getChunksCoords(x1, y1, x2, y2)
      };
    }
    hasWorkspace(toCheck) {
      return this.workspaces.some((w) => w.x1 === toCheck.x1 && w.y1 === toCheck.y1 && w.x2 === toCheck.x2 && w.y2 === toCheck.y2);
    }
    async changeWorkspace(w) {
      this.clearWorkspaces();
      await this.addWorkspace(w);
    }
    async addWorkspace(w) {
      const toAdd = w.chunks.filter((ch) => !includesChunks(this.chunks, ch));
      await this.low.prepareChunks(toAdd);
      this.chunks.push(...toAdd);
      this.workspaces.push(w);
    }
    clearWorkspaces() {
      if (this.chunks.length) {
        this.low.dropChunks(this.chunks);
      }
      this.chunks = [];
    }
    placePixels(pixels) {
      return this.low.placePixels(pixels);
    }
    async smartPlace(queue, aborter) {
      queue = queue.slice(0);
      while (true) {
        if (aborter?.triggered) {
          throw errAborterTriggered;
        }
        const current = queue.shift();
        if (!current) break;
        await this.low.placePixels([current]);
        const nextPixel = head(queue);
        if (nextPixel) {
          await this.waitBecausePixelsDistance(current, nextPixel);
        }
      }
      if (aborter) {
        aborter.destroy();
      }
    }
    async download({
      bounds,
      onProgress
    }) {
      const { x1, y1, x2, y2 } = bounds;
      const startX = Math.trunc(Math.min(x1, x2));
      const endX = Math.trunc(Math.max(x1, x2));
      const startY = Math.trunc(Math.min(y1, y2));
      const endY = Math.trunc(Math.max(y1, y2));
      const width = endX - startX;
      const height = endY - startY;
      if (width <= 0 || height <= 0) {
        throw new Error("invalid bounds");
      }
      if (onProgress) {
        const ourChunks = this.low.getChunksCoords(startX, startY, endX, endY);
        let loadedChunks = 0;
        this.low.on("chunk", (ch) => {
          if (!ourChunks.some((c) => c[0] === ch[0] && c[1] === ch[1])) return;
          loadedChunks++;
          onProgress(loadedChunks / ourChunks.length);
        });
      }
      await this.low.prepareChunks(this.low.getChunksCoords(startX, startY, endX, endY));
      const ctx = createCanvasContext(width, height);
      const id2 = ctx.getImageData(0, 0, width, height);
      const d = id2.data;
      for (let y = startY, i = 0; y < endY; y++) {
        for (let x = startX; x < endX; x++, i += 4) {
          const clr = this.palette.idToRGBA(this.get(x, y));
          if (clr === void 0) {
            logger.debug("wrong id", this.get(x, y), "at", x, y);
            continue;
          }
          d.set(clr, i);
        }
      }
      ctx.putImageData(id2, 0, 0);
      const now = /* @__PURE__ */ new Date();
      const datestring = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear() + "_" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      downloadCanvas(ctx.canvas, `${datestring}_${x1}_${y1}_${x2}_${y2}`);
    }
    async downloadFullCanvas({
      onProgress,
      batchSize = 20,
      delayMs = 200
    }) {
      const bounds = this.info.borders;
      const startX = Math.trunc(Math.min(bounds.x1, bounds.x2));
      const endX = Math.trunc(Math.max(bounds.x1, bounds.x2));
      const startY = Math.trunc(Math.min(bounds.y1, bounds.y2));
      const endY = Math.trunc(Math.max(bounds.y1, bounds.y2));
      const width = endX - startX;
      const height = endY - startY;
      if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
        throw new Error("invalid bounds for full canvas download");
      }
      const ourChunks = this.low.getChunksCoords(startX, startY, endX, endY);
      let loadedChunks = 0;
      for (let i = 0; i < ourChunks.length; i += batchSize) {
        const batch = ourChunks.slice(i, i + batchSize);
        await this.low.prepareChunks(batch);
        loadedChunks += batch.length;
        onProgress?.(loadedChunks / ourChunks.length);
        if (i + batchSize < ourChunks.length) {
          await sleep(delayMs);
        }
      }
      const ctx = createCanvasContext(width, height);
      const id2 = ctx.getImageData(0, 0, width, height);
      const d = id2.data;
      for (let y = startY, i = 0; y < endY; y++) {
        for (let x = startX; x < endX; x++, i += 4) {
          const clr = this.palette.idToRGBA(this.get(x, y));
          if (clr === void 0) {
            logger.debug("wrong id", this.get(x, y), "at", x, y);
            continue;
          }
          d.set(clr, i);
        }
      }
      ctx.putImageData(id2, 0, 0);
      const now = /* @__PURE__ */ new Date();
      const datestring = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear() + "_" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      downloadCanvas(ctx.canvas, `${datestring}_${startX}_${startY}_${endX}_${endY}`);
      onProgress?.(1);
    }
    destroy() {
      return this.low.destroy();
    }
    waitBecausePixelsDistance(p1, p2) {
      const distance = Math.sqrt(sq(p1.x - p2.x) + sq(p1.y - p2.y));
      let waitTime;
      if (distance === 1) {
        waitTime = 50;
      } else if (distance < 1.5) {
        waitTime = 100;
      } else {
        waitTime = 125 * distance;
      }
      return sleep(Math.min(0.75 * this.info.minCd, waitTime));
    }
  };

  // src/CanvasAPI/CooldownTIme.ts
  var CooldownTime = class {
    updatedAt = 0;
    cooldown = 0;
    update(cooldown) {
      this.cooldown = cooldown;
      this.updatedAt = Date.now();
    }
    get() {
      return Math.max(0, this.cooldown - (Date.now() - this.updatedAt));
    }
  };

  // src/CanvasAPI/ppfShared/packets.ts
  var CanvasApiPackets = class {
    static REG_CANVAS_OP = 160;
    static REG_CHUNK_OP = 161;
    static DEREG_CHUNK_OP = 162;
    static REG_MCHUNKS_OP = 163;
    static DEREG_MCHUNKS_OP = 164;
    static CHANGE_ME_OP = 166;
    static ONLINE_COUNTER_OP = 167;
    static PING_OP = 176;
    static PIXEL_UPDATE_OP = 193;
    static COOLDOWN_OP = 194;
    static PIXEL_RETURN_OP = 195;
    static CHUNK_UPDATE_MB_OP = 196;
    static PIXEL_UPDATE_MB_OP = 197;
    static CAPTCHA_RETURN_OP = 198;
    static deserializePixelUpdate(data) {
      const i = data.getUint8(1);
      const j = data.getUint8(2);
      const pixels = [];
      let off = data.byteLength;
      while (off > 3) {
        const color = data.getUint8(off -= 1);
        const offsetL = data.getUint16(off -= 2);
        const offsetH = data.getUint8(off -= 1) << 16;
        pixels.push([offsetH | offsetL, color]);
      }
      return {
        i,
        j,
        pixels
      };
    }
    static deserializePixelReturn(data) {
      const retCode = data.getUint8(1);
      const wait = data.getUint32(2);
      const coolDownSeconds = data.getInt16(6);
      const pxlCnt = data.getUint8(8);
      const rankedPxlCnt = data.getUint8(9);
      return {
        retCode,
        wait,
        coolDownSeconds,
        pxlCnt,
        rankedPxlCnt
      };
    }
    static deserializeCoolDown(data) {
      return data.getUint32(1);
    }
    static deserializeCaptchaReturn(data) {
      return data.getUint8(1);
    }
    static serializeRegCanvas(canvasId) {
      const buffer = new ArrayBuffer(1 + 1);
      const view = new DataView(buffer);
      view.setInt8(0, this.REG_CANVAS_OP);
      view.setInt8(1, Number(canvasId));
      return buffer;
    }
    static serializeRegChunk(chunkid) {
      const buffer = new ArrayBuffer(1 + 2);
      const view = new DataView(buffer);
      view.setInt8(0, this.REG_CHUNK_OP);
      view.setInt16(1, chunkid);
      return buffer;
    }
    static serializeDeRegChunk(chunkid) {
      const buffer = new ArrayBuffer(1 + 2);
      const view = new DataView(buffer);
      view.setInt8(0, this.DEREG_CHUNK_OP);
      view.setInt16(1, chunkid);
      return buffer;
    }
    static serializeRegMChunks(chunks) {
      const buffer = new ArrayBuffer(1 + 1 + chunks.length * 2);
      const view = new Uint16Array(buffer);
      view[0] = this.REG_MCHUNKS_OP;
      for (let cnt = 0; cnt < chunks.length; cnt += 1) {
        view[cnt + 1] = chunks[cnt];
      }
      return buffer;
    }
    static serializeDeRegMChunks(chunks) {
      const buffer = new ArrayBuffer(1 + 1 + chunks.length * 2);
      const view = new Uint16Array(buffer);
      view[0] = this.DEREG_MCHUNKS_OP;
      for (let cnt = 0; cnt < chunks.length; cnt += 1) {
        view[cnt + 1] = chunks[cnt];
      }
      return buffer;
    }
    static serializePing() {
      return new Uint8Array([this.PING_OP]).buffer;
    }
    static serializePixelUpdate(i, j, pixels) {
      const buffer = new ArrayBuffer(1 + 1 + 1 + pixels.length * 4);
      const view = new DataView(buffer);
      view.setUint8(0, this.PIXEL_UPDATE_OP);
      view.setUint8(1, i);
      view.setUint8(2, j);
      let cnt = 2;
      let p = pixels.length;
      while (p) {
        p -= 1;
        const [offset, color] = pixels[p];
        view.setUint8(cnt += 1, offset >>> 16);
        view.setUint16(cnt += 1, offset & 65535);
        view.setUint8(cnt += 2, color);
      }
      return buffer;
    }
  };

  // src/CanvasAPI/PPF/packets.ts
  var PPFCanvasApiPackets = class extends CanvasApiPackets {
    static PIXEL_UPDATE_OP = 145;
  };

  // src/CanvasAPI/ppfShared/utils.ts
  var meToCanvasInfo = (canvas) => {
    const { size } = canvas;
    return {
      tileSize: 1,
      palette: {
        offset: canvas.cli,
        colors: canvas.colors
      },
      chunkWidth: 256,
      chunkHeight: 256,
      worldWidth: size,
      worldHeight: size,
      haveStack: true,
      stack: canvas.cds,
      minCd: canvas.bcd,
      maxCd: canvas.pcd,
      borders: new Rect(
        -(size / 2),
        -(size / 2),
        size / 2,
        size / 2
      )
    };
  };

  // src/CanvasAPI/SuperAPI.ts
  var SuperAPI = class extends StrictEmitter {
    timer = new CooldownTime();
    get chunkSize() {
      return this.info.chunkWidth * this.info.chunkHeight;
    }
    getChunksCoords(x1, y1, x2, y2) {
      x1 = Math.floor((x1 + this.info.worldWidth / 2) / this.info.chunkWidth);
      y1 = Math.floor((y1 + this.info.worldHeight / 2) / this.info.chunkHeight);
      x2 = Math.floor((x2 - 1 + this.info.worldWidth / 2) / this.info.chunkWidth);
      y2 = Math.floor((y2 - 1 + this.info.worldHeight / 2) / this.info.chunkHeight);
      const chunks = [];
      for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
          chunks.push([x, y]);
        }
      }
      return chunks;
    }
    toTiled(x, y) {
      x += this.info.worldWidth >> 1;
      y += this.info.worldHeight >> 1;
      return [
        Math.floor(x / this.info.chunkWidth),
        Math.floor(y / this.info.chunkHeight),
        y % this.info.chunkHeight * this.info.chunkWidth + x % this.info.chunkWidth
      ];
    }
    toWorld(xch, ych, offset) {
      return [
        xch * this.info.chunkWidth - (this.info.worldWidth >> 1) + offset % this.info.chunkWidth,
        ych * this.info.chunkHeight - (this.info.worldHeight >> 1) + Math.floor(offset / this.info.chunkWidth)
      ];
    }
  };

  // src/CanvasAPI/Chunks.ts
  var Chunks = class {
    dict = /* @__PURE__ */ new Map();
    get(x, y) {
      return this.dict.get(this.coordsToIndex(x, y));
    }
    delete(x, y) {
      return this.dict.delete(this.coordsToIndex(x, y));
    }
    has(x, y) {
      return this.dict.has(this.coordsToIndex(x, y));
    }
    set(ch, x, y) {
      this.dict.set(this.coordsToIndex(x, y), ch);
    }
    clear() {
      this.dict.clear();
    }
    coordsToIndex(x, y) {
      return x.toString() + "_" + y.toString();
    }
  };
  var Chunk = class {
    constructor(data) {
      this.data = data;
    }
    get length() {
      return this.data.length;
    }
    get(i) {
      return this.data[i];
    }
    set(i, clr) {
      this.data[i] = clr;
    }
  };

  // src/CanvasAPI/ppfShared/api.ts
  var import_group_items = __toESM(require_dist());

  // src/CanvasAPI/ppfShared/retcodes.json
  var retcodes_default = {
    OK: 0,
    INVALID_CANVAS: 1,
    INVALID_X: 2,
    INVALID_Y: 3,
    INVALID_Z: 4,
    INVALID_COLOR: 5,
    NO_AUTH: 6,
    LOW_SCORE: 7,
    PROTECTION: 8,
    STACK_IS_FULL: 9,
    CAPTCHA: 10,
    PROXY: 11,
    TOP10: 12,
    PARALLEL_WS: 13,
    BAN: 14
  };

  // src/CanvasAPI/captchaResultErrors.ts
  var captchaResultErrors_default = {
    errCaptchaTimeout: new Error("You took too long, try again."),
    errInvalidSolution: new Error("No or invalid captcha text")
  };

  // src/CanvasAPI/ppfShared/api.ts
  var logger2 = new Logger("APIshared");
  var shardHost = (() => {
    if (!unsafeWindow?.ssv?.shard || unsafeWindow.location.host === "fuckyouarkeros.fun") {
      return "";
    }
    const hostParts = window.location.host.split(".");
    if (hostParts.length > 2) {
      hostParts.shift();
    }
    return `${unsafeWindow.ssv.shard}.${hostParts.join(".")}`;
  })();
  var shardOrigin = shardHost && `${unsafeWindow.location.protocol}//${shardHost}`;
  var compressChunkPosition = (pos) => pos[0] << 8 | pos[1];
  var decompressChunkPosition = (id2) => [id2 >> 8, id2 & 255];
  var PPFLikeAPI = class _PPFLikeAPI extends SuperAPI {
    ws;
    _info = emptyCanvasInfo;
    loadQueue = [];
    pixelsDelay = 150 + Math.random() * 50;
    delayedPixels = [];
    chunks = new Chunks();
    maxLoaders = 5;
    loaders = [];
    chunksProcessing = false;
    local = new StrictEmitter();
    timer = new CooldownTime();
    name = "ppf";
    canvasId;
    packets = CanvasApiPackets;
    static me = null;
    get info() {
      if (this._info === emptyCanvasInfo) {
        throw errors.errAPIIsntReady;
      }
      return this._info;
    }
    set info(value) {
      this._info = value;
    }
    constructor({
      canvasId
    }) {
      super();
      this.canvasId = canvasId;
      this.ws = new EnhancedWS(this.getWsUrl());
      this.ws.on("connect", async () => {
        this.emit("connect");
        this.selectCanvas(this.canvasId);
        this.emit("ready");
        while (true) {
          await sleep(19e3);
          if (this.ws.disconnected) break;
          this.ws.send(this.packets.serializePing());
        }
      });
      this.ws.on("binary", (data) => {
        const view = new DataView(data);
        switch (view.getUint8(0)) {
          case this.packets.PIXEL_UPDATE_OP:
            this.handleArrivedPixel(this.packets.deserializePixelUpdate(view));
            break;
          case this.packets.PIXEL_RETURN_OP:
            const { retCode, wait } = this.packets.deserializePixelReturn(view);
            this.timer.update(wait);
            this.local.emit("ret_code", retCode);
            break;
          case this.packets.CAPTCHA_RETURN_OP:
            this.local.emit("captcha_result", this.packets.deserializeCaptchaReturn(view));
            break;
          case this.packets.COOLDOWN_OP:
            this.timer.update(this.packets.deserializeCoolDown(view));
            break;
        }
      });
      this.ws.on("disconnect", () => this.emit("disconnect"));
    }
    static async build(canvasId) {
      const me = await _PPFLikeAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async fetchSiteCanvases() {
      return fetchAndParse(`${shardOrigin}/api/me`);
    }
    static async getMe() {
      if (!_PPFLikeAPI.me) {
        _PPFLikeAPI.me = await _PPFLikeAPI.fetchSiteCanvases();
      }
      return _PPFLikeAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _PPFLikeAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
    getCanvasNameByIdent(ident) {
      const me = _PPFLikeAPI.me;
      if (!me || !me.canvases) return null;
      for (const id2 in me.canvases) {
        const info = me.canvases[id2];
        if (info && info.ident === ident) {
          return info.title;
        }
      }
      return null;
    }
    getWsUrl() {
      return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${shardHost || window.location.host}/ws`;
    }
    getPixelRadarContext() {
      return {
        canvasId: this.canvasId,
        wsUrl: this.getWsUrl(),
        worldWidth: this.info.worldWidth,
        worldHeight: this.info.worldHeight,
        packets: this.packets
      };
    }
    get(x, y) {
      for (const pixels of this.delayedPixels) {
        const delayed = pixels.find((pxl) => pxl.x === x && pxl.y === y);
        if (delayed) {
          return delayed.id;
        }
      }
      return this.getHumanlike(x, y);
    }
    getHumanlike(x, y) {
      const c = this.toTiled(x, y);
      return this.chunks.get(c[0], c[1]).get(c[2]);
    }
    dropChunks(coords) {
      const toDeReg = [];
      for (const pos of coords) {
        const id2 = compressChunkPosition(pos);
        if (this.chunks.has(pos[0], pos[1])) {
          toDeReg.push(pos);
          this.chunks.delete(pos[0], pos[1]);
          continue;
        }
        if (this.loadQueue.includes(id2)) {
          this.loadQueue = this.loadQueue.filter((toLoad) => toLoad !== id2);
          continue;
        }
        const loadersToDrop = this.loaders.filter((l) => l.chunk === id2);
        if (loadersToDrop.length) {
          loadersToDrop.forEach((l) => l.aborter.abort());
          this.loaders = this.loaders.filter((l) => l.chunk !== id2);
        }
      }
      if (toDeReg.length) {
        this.deRegisterChunks(toDeReg);
      }
    }
    async prepareChunks(chs) {
      if (this.ws.disconnected) {
        await this.wait("ready");
      }
      chs.forEach((pos) => this.loadQueue.push(compressChunkPosition(pos)));
      this.processMarked();
      await this.waitChunks(chs);
    }
    async placePixels(pixels) {
      const byChunks = this.groupPixels(pixels);
      for (const ch in byChunks) {
        const group5 = byChunks[ch];
        const pos = decompressChunkPosition(+ch);
        this.emit("place_pixels", group5.map(({ offset, id: id2 }) => {
          const [x, y] = this.toWorld(pos[0], pos[1], offset);
          return { x, y, id: id2 };
        }));
        this.ws.send(this.packets.serializePixelUpdate(pos[0], pos[1], group5.map((p) => [p.offset, p.id])));
        let retcode;
        try {
          retcode = await this.local.wait("ret_code", 4e3);
        } catch (e) {
          const err2 = e;
          if (err2 === errPromiseDeadline) {
            throw errors.errNoPlacePixelResult;
          } else {
            throw err2;
          }
        }
        switch (retcode) {
          case retcodes_default.OK:
            break;
          case retcodes_default.INVALID_CANVAS:
          case retcodes_default.INVALID_X:
          case retcodes_default.INVALID_Y:
          case retcodes_default.INVALID_Z:
          case retcodes_default.INVALID_COLOR:
            throw errors.errCanvasAPIInteraction;
          case retcodes_default.NO_AUTH:
            throw errors.errMustAuth;
          case retcodes_default.LOW_SCORE:
            throw errors.errTooLowScore;
          case retcodes_default.PROTECTION:
            throw errors.errPixelProtected;
          case retcodes_default.STACK_IS_FULL:
            throw errors.errFullStack;
          case retcodes_default.CAPTCHA:
            throw errors.errCaptcha;
          case retcodes_default.PROXY:
            throw errors.errYouAreProxy;
          case retcodes_default.TOP10:
            throw errors.errTooLowScore;
          case retcodes_default.PARALLEL_WS:
            throw errors.errParallelPlace;
          case retcodes_default.BAN:
            throw errors.errYouAreBanned;
          default:
            throw new Error(`unknown retcode: ${retcode}`);
            ;
        }
      }
    }
    async getCaptcha() {
      const res = await fetch(shardOrigin + "/captcha.svg", {
        cache: "no-cache"
      });
      if (!res.ok || res.status !== 200) {
        throw errors.errCanvasAPIInteraction;
      }
      const captchaSrc = URL.createObjectURL(await res.blob());
      const id2 = res.headers.get("captcha-id");
      if (id2 === null) {
        throw errors.errCanvasAPIInteraction;
      }
      const captcha = {
        id: id2,
        svg: await fetch(captchaSrc).then((res2) => res2.text())
      };
      return captcha;
    }
    async sendAnswer({ solution, id: id2 }) {
      this.ws.send(`cs,${JSON.stringify([solution, id2])}`);
      const result = await this.local.wait("captcha_result");
      const interpretations = [
        true,
        captchaResultErrors_default.errCaptchaTimeout,
        false,
        captchaResultErrors_default.errInvalidSolution,
        errors.errCanvasAPIInteraction
      ];
      return interpretations.length > result ? interpretations[result] : errors.errUnknownError;
    }
    predictCooldown(x, y) {
      const tiled = this.toTiled(x, y);
      if (this.chunks.get(tiled[0], tiled[1]).get(tiled[2]) < this.info.palette.offset) {
        return this.info.minCd;
      } else {
        return this.info.maxCd;
      }
    }
    destroy() {
      this.dropChunks(this.loadQueue.map(decompressChunkPosition));
      return this.ws.disconnect();
    }
    groupPixels(pixels) {
      const groupped = (0, import_group_items.group)(pixels).by((pixel) => {
        return compressChunkPosition(this.toTiled(pixel.x, pixel.y).slice(0, 2));
      }).asArrays();
      const chunks = {};
      groupped.forEach((group5) => {
        const tiled = this.toTiled(group5[0].x, group5[0].y);
        const chIndex = compressChunkPosition(tiled.slice(0, 2));
        chunks[chIndex] = group5.map((pixel) => ({
          offset: this.toTiled(pixel.x, pixel.y)[2],
          id: pixel.id
        }));
      });
      return chunks;
    }
    async waitChunks(chs) {
      chs = chs.slice().filter((ch) => !this.chunks.has(ch[0], ch[1]));
      while (chs.length) {
        const loaded = await this.wait("chunk", 1e4);
        const loadedId = compressChunkPosition(loaded);
        const index = chs.findIndex((ch) => compressChunkPosition(ch) === loadedId);
        if (index !== -1) {
          chs.splice(index, 1);
        }
      }
    }
    processMarked() {
      if (this.chunksProcessing) {
        return;
      } else {
        this.chunksProcessing = true;
      }
      while (this.loaders.length < this.maxLoaders) {
        const id2 = this.loadQueue.pop();
        if (id2 === void 0) {
          break;
        }
        const pos = decompressChunkPosition(id2);
        if (this.chunks.has(pos[0], pos[1]) || this.loaders.some((l) => l.chunk === id2)) {
          continue;
        }
        const loader = {
          chunk: id2,
          aborter: new AbortController()
        };
        this.loaders.push(loader);
        this.fetchChunk(pos, loader.aborter).then((chunk) => {
          this.chunks.set(chunk, pos[0], pos[1]);
          this.registerChunk(pos);
          this.loaders.splice(this.loaders.indexOf(loader), 1);
          this.processMarked();
        });
      }
      this.chunksProcessing = false;
    }
    getChunkUrl(pos) {
      return `${shardOrigin}/chunks/${this.canvasId}/${pos[0]}/${pos[1]}.bmp`;
    }
    async fetchChunk(pos, aborter) {
      const options = aborter ? {
        signal: aborter.signal
      } : {};
      const res = await fetch(this.getChunkUrl(pos), options);
      if (!res.ok) {
        logger2.debug(res);
        throw errors.errResponseIsntOk;
      }
      if (res.status !== 200) {
        logger2.debug(res);
        throw errors.errResponseStatusIsnt200;
      }
      const data = await res.arrayBuffer();
      const u82 = new Uint8Array(data);
      const u32 = new Uint32Array(this.chunkSize);
      if (data.byteLength) {
        for (let i = 0; i !== u82.length; i++) {
          u32[i] = u82[i] & 63;
        }
      }
      this.emit("chunk", pos);
      return new Chunk(u32);
    }
    registerChunk(ch) {
      this.ws.send(this.packets.serializeRegChunk(compressChunkPosition(ch)));
    }
    // private deRegisterChunk(ch: Vec2) {
    // 	this.ws.send(dehydrateDeRegChunk(compressChunkPosition(ch)));
    // }
    deRegisterChunks(chs) {
      this.ws.send(this.packets.serializeDeRegMChunks(chs.map((ch) => compressChunkPosition(ch))));
    }
    toTiled(x, y) {
      const absX = x + (this.info.worldWidth >> 1);
      const absY = y + (this.info.worldHeight >> 1);
      return [
        absX >> 8,
        absY >> 8,
        (absY & 255) << 8 | absX & 255
      ];
    }
    toWorld(xch, ych, offset) {
      return [
        (xch << 8) - (this.info.worldWidth >> 1) + (offset & 255),
        (ych << 8) - (this.info.worldHeight >> 1) + (offset >> 8)
      ];
    }
    selectCanvas(id2) {
      this.ws.send(this.packets.serializeRegCanvas(id2));
    }
    handleArrivedPixel(packet) {
      const pixels = packet.pixels.map((pxl) => {
        const [x, y] = this.toWorld(packet.i, packet.j, pxl[0]);
        return { x, y, id: pxl[1] };
      });
      this.emit("pixels", pixels);
      this.delayedPixels.push(pixels);
      setTimeout(() => {
        const i = this.delayedPixels.indexOf(pixels);
        if (i !== -1) {
          this.delayedPixels.splice(i, 1);
          const chunk = this.chunks.get(packet.i, packet.j);
          if (chunk) {
            packet.pixels.forEach((pxl) => chunk.set(pxl[0], pxl[1]));
          }
        }
      }, this.pixelsDelay);
    }
  };

  // src/actionsBus.ts
  var actions = new class extends StrictEmitter {
    call = this.emit;
  }();

  // src/CanvasAPI/ppfShared/clientside.ts
  function mousemoveHook() {
    window.addEventListener("mousemove", () => {
      const el = $(".coorbox");
      if (!el) return;
      const position = matchNumbers(el.textContent ?? "");
      if (position && position.length === 2) {
        actions.emit("change_mouse_position", [position[0], position[1]]);
      }
    });
  }
  var CSA = class extends StrictEmitter {
    goto(args) {
      const current = this.getCurrentLocation();
      const identPart = args.canvasIdent ? `${args.canvasIdent},` : current?.canvasIdent ? `${current.canvasIdent},` : "";
      const xPart = `${args.x},`;
      const yPart = `${args.y},`;
      const zoomPart = args.zoom ? `${args.zoom},` : current?.zoom ? `${current.zoom},` : "";
      location.hash = identPart + xPart + yPart + zoomPart;
    }
    getCurrentLocation() {
      if (!location.hash) return null;
      const parts = location.hash.split(",").filter(Boolean);
      if (parts.length < 4) return null;
      const canvasIdent = parts[0].substring(1);
      const x = parts[1];
      const y = parts[2];
      const zoom = parts[3];
      return {
        canvasIdent,
        x: Number(x),
        y: Number(y),
        zoom: Number(zoom)
      };
    }
  };
  var ppfSharedCsaBuilder = async () => new CSA();

  // src/CanvasAPI/PPF/index.ts
  var initOncePixelplanetClientsideApi = once2(mousemoveHook);
  var PixelplanetAPI = class _PixelplanetAPI extends PPFLikeAPI {
    packets = PPFCanvasApiPackets;
    getChunkUrl(pos) {
      return `https://cdn.gs-os.com/chunks/${this.canvasId}/${pos[0]}/${pos[1]}.bmp`;
    }
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/canvases");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _PixelplanetAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_PixelplanetAPI.me) {
        _PixelplanetAPI.me = await _PixelplanetAPI.fetchSiteCanvases();
      }
      return _PixelplanetAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _PixelplanetAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
  };

  // src/CanvasAPI/types.ts
  var emptyCanvasInfo = {
    palette: {
      offset: 0,
      colors: []
    },
    chunkWidth: 0,
    chunkHeight: 0,
    worldWidth: 0,
    worldHeight: 0,
    haveStack: false,
    stack: 0,
    minCd: 0,
    maxCd: 0,
    borders: new Rect(0, 0, 0, 0),
    tileSize: 0
  };

  // src/CanvasAPI/Pixelya/packets.ts
  var PixelyaCanvasApiPackets = class extends CanvasApiPackets {
    static TIMESTAMP_OP = 168;
    static dehydrateTimestamp = (timestamp) => {
      const buffer = new ArrayBuffer(5);
      const view = new DataView(buffer);
      view.setUint8(0, this.TIMESTAMP_OP);
      view.setInt32(1, +timestamp.getTime().toString().slice(0, 5));
      return buffer;
    };
  };

  // src/CanvasAPI/Pixelya/retcodes.json
  var retcodes_default2 = {
    OK: 0,
    INVALID_CANVAS: 1,
    INVALID_X: 2,
    INVALID_Y: 3,
    INVALID_Z: 4,
    INVALID_COLOR: 5,
    NO_AUTH: 6,
    LOW_SCORE: 7,
    PROTECTION: 8,
    STACK_IS_FULL: 9,
    CAPTCHA: 10,
    PROXY: 11,
    TOP10: 12,
    PARALLEL_WS: 13,
    BAN: 14,
    DOTTING: 17
  };

  // src/CanvasAPI/Pixelya/index.ts
  var import_group_items2 = __toESM(require_dist());
  var initOncePixelyaClientsideApi = once2(mousemoveHook);
  var PixelyaAPI = class extends PPFLikeAPI {
    packets = PixelyaCanvasApiPackets;
    name = "pixelya";
    constructor({ canvasId }) {
      super({ canvasId });
      this.ws.on("connect", () => {
        this.ws.send(this.packets.dehydrateTimestamp(/* @__PURE__ */ new Date()));
      });
    }
    async placePixels(pixels) {
      const compressChunkPosition2 = (pos) => pos[0] << 8 | pos[1];
      const decompressChunkPosition2 = (id2) => [id2 >> 8, id2 & 255];
      const byChunks = this.groupPixelsInternal(pixels, compressChunkPosition2);
      for (const ch in byChunks) {
        const pixelGroup = byChunks[ch];
        const pos = decompressChunkPosition2(+ch);
        this.emit("place_pixels", pixelGroup.map(({ offset, id: id2 }) => {
          const [x, y] = this.toWorld(pos[0], pos[1], offset);
          return { x, y, id: id2 };
        }));
        this.ws.send(this.packets.serializePixelUpdate(pos[0], pos[1], pixelGroup.map((p) => [p.offset, p.id])));
        let retcode;
        try {
          retcode = await this.local.wait("ret_code", 4e3);
        } catch (e) {
          const err2 = e;
          if (err2 === errPromiseDeadline) {
            throw errors.errNoPlacePixelResult;
          } else {
            throw err2;
          }
        }
        switch (retcode) {
          case retcodes_default2.OK:
            break;
          case retcodes_default2.DOTTING:
            break;
          case retcodes_default2.INVALID_CANVAS:
          case retcodes_default2.INVALID_X:
          case retcodes_default2.INVALID_Y:
          case retcodes_default2.INVALID_Z:
          case retcodes_default2.INVALID_COLOR:
            throw errors.errCanvasAPIInteraction;
          case retcodes_default2.NO_AUTH:
            throw errors.errMustAuth;
          case retcodes_default2.LOW_SCORE:
            throw errors.errTooLowScore;
          case retcodes_default2.PROTECTION:
            throw errors.errPixelProtected;
          case retcodes_default2.STACK_IS_FULL:
            throw errors.errFullStack;
          case retcodes_default2.CAPTCHA:
            throw errors.errCaptcha;
          case retcodes_default2.PROXY:
            throw errors.errYouAreProxy;
          case retcodes_default2.TOP10:
            throw errors.errTooLowScore;
          case retcodes_default2.PARALLEL_WS:
            throw errors.errParallelPlace;
          case retcodes_default2.BAN:
            throw errors.errYouAreBanned;
          default:
            throw new Error(`unknown retcode: ${retcode}`);
            ;
        }
      }
    }
    groupPixelsInternal(pixels, compressChunkPosition2) {
      const groupped = (0, import_group_items2.group)(pixels).by((pixel) => {
        return compressChunkPosition2(this.toTiled(pixel.x, pixel.y).slice(0, 2));
      }).asArrays();
      const chunks = {};
      groupped.forEach((pixelGroup) => {
        const tiled = this.toTiled(pixelGroup[0].x, pixelGroup[0].y);
        const chIndex = compressChunkPosition2(tiled.slice(0, 2));
        chunks[chIndex] = pixelGroup.map((pixel) => ({
          offset: this.toTiled(pixel.x, pixel.y)[2],
          id: pixel.id
        }));
      });
      return chunks;
    }
  };

  // src/CanvasAPI/Pixmap/packets.ts
  var PixmapCanvasApiPackets = class extends CanvasApiPackets {
    static REG_CANVAS_OP = 160;
    static REG_CHUNK_OP = 161;
    static DEREG_CHUNK_OP = 162;
    static REG_MCHUNKS_OP = 163;
    static DEREG_MCHUNKS_OP = 164;
    static CHANGE_ME_OP = 166;
    static ONLINE_COUNTER_OP = 167;
    static PING_OP = 176;
    static PIXEL_UPDATE_OP = 193;
    static COOLDOWN_OP = 194;
    static PIXEL_RETURN_OP = 195;
    static CHUNK_UPDATE_MB_OP = 196;
    static PIXEL_UPDATE_MB_OP = 197;
    static CAPTCHA_RETURN_OP = 198;
    static serializePixelUpdate(i, j, pixels) {
      const buffer = new ArrayBuffer(1 + 1 + 1 + pixels.length * 4);
      const view = new DataView(buffer);
      view.setUint8(0, this.PIXEL_UPDATE_OP);
      view.setUint8(1, j);
      view.setUint8(2, i);
      let cnt = 2;
      let p = pixels.length;
      while (p) {
        p -= 1;
        const [offset, color] = pixels[p];
        view.setUint8(cnt += 1, offset >>> 16);
        view.setUint16(cnt += 1, offset & 65535);
        view.setUint8(cnt += 2, color);
      }
      return buffer;
    }
  };

  // src/CanvasAPI/Pixmap/index.ts
  var initOncePixmapClientsideApi = once2(mousemoveHook);
  var PixmapAPI = class _PixmapAPI extends PPFLikeAPI {
    packets = PixmapCanvasApiPackets;
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/me");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _PixmapAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_PixmapAPI.me) {
        _PixmapAPI.me = await _PixmapAPI.fetchSiteCanvases();
      }
      return _PixmapAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _PixmapAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
  };

  // src/CanvasAPI/localhost/packets.ts
  var LocalhostCanvasApiPackets = class extends CanvasApiPackets {
    static PIXEL_UPDATE_OP = 145;
  };

  // src/CanvasAPI/localhost/index.ts
  var initOnceLocalhostClientsideApi = once2(mousemoveHook);
  var LocalhostAPI = class extends PPFLikeAPI {
    packets = LocalhostCanvasApiPackets;
  };

  // src/CanvasAPI/Wplace/config.ts
  var currentSeason = 0;
  var canvasSettings = {
    seasons: [{
      tileSize: 1e3,
      zoom: 11
    }],
    regionSize: 4
  };

  // src/CanvasAPI/Wplace/coords-converter.ts
  var xs = 2 * Math.PI * 6378137 / 2;
  var CoordsConverter = class {
    initialResolution;
    tileSize;
    static parseTileCoords(key) {
      const [tileX, tileY] = key.split("_").map(Number);
      return { tileX, tileY };
    }
    static stringifyTileCoords(tileX, tileY) {
      return `${tileX}_${tileY}`;
    }
    constructor(l = 256) {
      this.tileSize = l;
      this.initialResolution = 2 * xs / this.tileSize;
    }
    latLonToMeters(l, _) {
      const T = _ / 180 * xs;
      const E = Math.log(Math.tan((90 + l) * Math.PI / 360)) / (Math.PI / 180) * xs / 180;
      return [T, E];
    }
    metersToLatLon(l, _) {
      const T = l / xs * 180;
      let E = _ / xs * 180;
      return E = 180 / Math.PI * (2 * Math.atan(Math.exp(E * Math.PI / 180)) - Math.PI / 2), [E, T];
    }
    pixelsToMeters(l, _, T) {
      const E = this.resolution(T);
      const F = l * E - xs;
      const C = xs - _ * E;
      return [F, C];
    }
    pixelsToLatLon(l, _, T) {
      const [E, F] = this.pixelsToMeters(l, _, T);
      return this.metersToLatLon(E, F);
    }
    latLonToPixels(l, _, T) {
      const [E, F] = this.latLonToMeters(l, _);
      return this.metersToPixels(E, F, T);
    }
    latLonToPixelsFloor(l, _, T) {
      const [E, F] = this.latLonToPixels(l, _, T);
      return [Math.floor(E), Math.floor(F)];
    }
    metersToPixels(l, _, T) {
      const E = this.resolution(T);
      const F = (l + xs) / E;
      const C = (xs - _) / E;
      return [F, C];
    }
    latLonToTile(l, _, T) {
      const [E, F] = this.latLonToMeters(l, _);
      return this.metersToTile(E, F, T);
    }
    metersToTile(l, _, T) {
      const [E, F] = this.metersToPixels(l, _, T);
      return this.pixelsToTile(E, F);
    }
    pixelsToTile(l, _) {
      const T = Math.ceil(l / this.tileSize) - 1;
      const E = Math.ceil(_ / this.tileSize) - 1;
      return [T, E];
    }
    pixelsToTileLocal(l, _) {
      return {
        tile: this.pixelsToTile(l, _),
        pixel: [Math.floor(l) % this.tileSize, Math.floor(_) % this.tileSize]
      };
    }
    tileBounds(l, _, T) {
      const [E, F] = this.pixelsToMeters(l * this.tileSize, _ * this.tileSize, T);
      const [C, o] = this.pixelsToMeters((l + 1) * this.tileSize, (_ + 1) * this.tileSize, T);
      return {
        min: [E, F],
        max: [C, o]
      };
    }
    tileBoundsLatLon(l, _, T) {
      const E = this.tileBounds(l, _, T);
      return {
        min: this.metersToLatLon(E.min[0], E.min[1]),
        max: this.metersToLatLon(E.max[0], E.max[1])
      };
    }
    resolution(l) {
      return this.initialResolution / 2 ** l;
    }
    latLonToTileAndPixel(l, _, T) {
      const [E, F] = this.latLonToMeters(l, _);
      const [C, o] = this.metersToTile(E, F, T);
      const [W, G] = this.metersToPixels(E, F, T);
      return {
        tile: [C, o],
        pixel: [Math.floor(W) % this.tileSize, Math.floor(G) % this.tileSize]
      };
    }
    pixelBounds(l, _, T) {
      return {
        min: this.pixelsToMeters(l, _, T),
        max: this.pixelsToMeters(l + 1, _ + 1, T)
      };
    }
    pixelToBoundsLatLon(l, _, T) {
      const E = this.pixelBounds(l, _, T);
      const F = 1885e-6;
      const C = (E.max[0] - E.min[0]) * F;
      const o = (E.max[1] - E.min[1]) * F;
      E.min[0] -= C;
      E.max[0] -= C;
      E.min[1] -= o;
      E.max[1] -= o;
      return {
        min: this.metersToLatLon(E.min[0], E.min[1]),
        max: this.metersToLatLon(E.max[0], E.max[1])
      };
    }
    latLonToTileBoundsLatLon(l, _, T) {
      const [E, F] = this.latLonToMeters(l, _);
      const [C, o] = this.metersToTile(E, F, T);
      return this.tileBoundsLatLon(C, o, T);
    }
    latLonToPixelBoundsLatLon(l, _, T) {
      const [E, F] = this.latLonToMeters(l, _);
      const [C, o] = this.metersToPixels(E, F, T);
      return this.pixelToBoundsLatLon(Math.floor(C), Math.floor(o), T);
    }
    latLonToRegionAndPixel(l, _, T, E = canvasSettings.regionSize) {
      const [F, C] = this.latLonToPixelsFloor(l, _, T);
      const o = this.tileSize * E;
      return {
        region: [Math.floor(F / o), Math.floor(C / o)],
        pixel: [F % o, C % o]
      };
    }
    tiledToWorld(xch, ych, offset) {
      const yOffset = ~~(offset / this.tileSize);
      const xOffset = offset - yOffset * this.tileSize;
      return [
        xch * this.tileSize + xOffset,
        ych * this.tileSize + yOffset
      ];
    }
    latLonToWorld(x, y, zoom) {
      const { tile, pixel } = this.latLonToTileAndPixel(x, y, zoom);
      return [
        tile[0] * this.tileSize + pixel[0],
        tile[1] * this.tileSize + pixel[1]
      ];
    }
    worldToTiled(x, y) {
      const tileX = Math.floor(x / this.tileSize);
      const tileY = Math.floor(y / this.tileSize);
      const xInsideTile = x - tileX * this.tileSize;
      const yInsideTile = y - tileY * this.tileSize;
      return [tileX, tileY, xInsideTile + yInsideTile * this.tileSize];
    }
    latLonToTiled(x, y, zoom) {
      const { tile, pixel } = coordsConverter.latLonToTileAndPixel(x, y, zoom);
      return [tile[0], tile[1], pixel[0] + pixel[1] * this.tileSize];
    }
    // @ts-expect-error
    worldToLatLon(x, y, zoom) {
      throw new Error("not implemented");
    }
  };
  var coordsConverter = new CoordsConverter(canvasSettings.seasons[currentSeason].tileSize);

  // src/CanvasAPI/Wplace/colors.ts
  var defaultColors = [{
    name: "Transparent",
    rgba: [0, 0, 0, 0]
  }, {
    name: "Black",
    rgba: [0, 0, 0, 255]
  }, {
    name: "Dark Gray",
    rgba: [60, 60, 60, 255]
  }, {
    name: "Gray",
    rgba: [120, 120, 120, 255]
  }, {
    name: "Light Gray",
    rgba: [210, 210, 210, 255]
  }, {
    name: "White",
    rgba: [255, 255, 255, 255]
  }, {
    name: "Deep Red",
    rgba: [96, 0, 24, 255]
  }, {
    name: "Red",
    rgba: [237, 28, 36, 255]
  }, {
    name: "Orange",
    rgba: [255, 127, 39, 255]
  }, {
    name: "Gold",
    rgba: [246, 170, 9, 255]
  }, {
    name: "Yellow",
    rgba: [249, 221, 59, 255]
  }, {
    name: "Light Yellow",
    rgba: [255, 250, 188, 255]
  }, {
    name: "Dark Green",
    rgba: [14, 185, 104, 255]
  }, {
    name: "Green",
    rgba: [19, 230, 123, 255]
  }, {
    name: "Light Green",
    rgba: [135, 255, 94, 255]
  }, {
    name: "Dark Teal",
    rgba: [12, 129, 110, 255]
  }, {
    name: "Teal",
    rgba: [16, 174, 166, 255]
  }, {
    name: "Light Teal",
    rgba: [19, 225, 190, 255]
  }, {
    name: "Dark Blue",
    rgba: [40, 80, 158, 255]
  }, {
    name: "Blue",
    rgba: [64, 147, 228, 255]
  }, {
    name: "Cyan",
    rgba: [96, 247, 242, 255]
  }, {
    name: "Indigo",
    rgba: [107, 80, 246, 255]
  }, {
    name: "Light Indigo",
    rgba: [153, 177, 251, 255]
  }, {
    name: "Dark Purple",
    rgba: [120, 12, 153, 255]
  }, {
    name: "Purple",
    rgba: [170, 56, 185, 255]
  }, {
    name: "Light Purple",
    rgba: [224, 159, 249, 255]
  }, {
    name: "Dark Pink",
    rgba: [203, 0, 122, 255]
  }, {
    name: "Pink",
    rgba: [236, 31, 128, 255]
  }, {
    name: "Light Pink",
    rgba: [243, 141, 169, 255]
  }, {
    name: "Dark Brown",
    rgba: [104, 70, 52, 255]
  }, {
    name: "Brown",
    rgba: [149, 104, 42, 255]
  }, {
    name: "Beige",
    rgba: [248, 178, 119, 255]
  }, {
    name: "Medium Gray",
    rgba: [170, 170, 170, 255]
  }, {
    name: "Dark Red",
    rgba: [165, 14, 30, 255]
  }, {
    name: "Light Red",
    rgba: [250, 128, 114, 255]
  }, {
    name: "Dark Orange",
    rgba: [228, 92, 26, 255]
  }, {
    name: "Light Tan",
    rgba: [214, 181, 148, 255]
  }, {
    name: "Dark Goldenrod",
    rgba: [156, 132, 49, 255]
  }, {
    name: "Goldenrod",
    rgba: [197, 173, 49, 255]
  }, {
    name: "Light Goldenrod",
    rgba: [232, 212, 95, 255]
  }, {
    name: "Dark Olive",
    rgba: [74, 107, 58, 255]
  }, {
    name: "Olive",
    rgba: [90, 148, 74, 255]
  }, {
    name: "Light Olive",
    rgba: [132, 197, 115, 255]
  }, {
    name: "Dark Cyan",
    rgba: [15, 121, 159, 255]
  }, {
    name: "Light Cyan",
    rgba: [187, 250, 242, 255]
  }, {
    name: "Light Blue",
    rgba: [125, 199, 255, 255]
  }, {
    name: "Dark Indigo",
    rgba: [77, 49, 184, 255]
  }, {
    name: "Dark Slate Blue",
    rgba: [74, 66, 132, 255]
  }, {
    name: "Slate Blue",
    rgba: [122, 113, 196, 255]
  }, {
    name: "Light Slate Blue",
    rgba: [181, 174, 241, 255]
  }, {
    name: "Light Brown",
    rgba: [219, 164, 99, 255]
  }, {
    name: "Dark Beige",
    rgba: [209, 128, 81, 255]
  }, {
    name: "Light Beige",
    rgba: [255, 197, 165, 255]
  }, {
    name: "Dark Peach",
    rgba: [155, 82, 73, 255]
  }, {
    name: "Peach",
    rgba: [209, 128, 120, 255]
  }, {
    name: "Light Peach",
    rgba: [250, 182, 164, 255]
  }, {
    name: "Dark Tan",
    rgba: [123, 99, 82, 255]
  }, {
    name: "Tan",
    rgba: [156, 132, 107, 255]
  }, {
    name: "Dark Slate",
    rgba: [51, 57, 65, 255]
  }, {
    name: "Slate",
    rgba: [109, 117, 141, 255]
  }, {
    name: "Light Slate",
    rgba: [179, 185, 209, 255]
  }, {
    name: "Dark Stone",
    rgba: [109, 100, 63, 255]
  }, {
    name: "Stone",
    rgba: [148, 140, 107, 255]
  }, {
    name: "Light Stone",
    rgba: [205, 197, 158, 255]
  }];
  var premiumColors = [
    [170, 170, 170],
    [165, 14, 30],
    [250, 128, 114],
    [228, 92, 26],
    [214, 181, 148],
    [156, 132, 49],
    [197, 173, 49],
    [232, 212, 95],
    [74, 107, 58],
    [90, 148, 74],
    [132, 197, 115],
    [15, 121, 159],
    [187, 250, 242],
    [125, 199, 255],
    [77, 49, 184],
    [74, 66, 132],
    [122, 113, 196],
    [181, 174, 241],
    [219, 164, 99],
    [209, 128, 81],
    [255, 197, 165],
    [155, 82, 73],
    [209, 128, 120],
    [250, 182, 164],
    [123, 99, 82],
    [156, 132, 107],
    [51, 57, 65],
    [109, 117, 141],
    [179, 185, 209],
    [109, 100, 63],
    [148, 140, 107],
    [205, 197, 158]
  ];
  var colors = [
    ...defaultColors.map((c) => c.rgba),
    ...premiumColors.map((rgb) => [...rgb, 255])
  ];

  // src/CanvasAPI/ChunksLoadingQueue.ts
  var logger3 = new Logger("ChunksLoadingQueue");
  var ChunksLoadingQueue = class extends StrictEmitter {
    queue = [];
    loadChunk;
    concurrency;
    get activeLoaders() {
      return this.queue.filter((loader) => loader.loading);
    }
    get inactiveLoaders() {
      return this.queue.filter((loader) => !loader.loading);
    }
    constructor({
      loadChunk,
      concurrency
    }) {
      super();
      this.loadChunk = loadChunk;
      this.concurrency = concurrency;
    }
    add(coords) {
      let loader = this.get(coords);
      if (loader) {
        return loader;
      }
      loader = {
        coords,
        controller: new AbortController(),
        result: null,
        loading: false
      };
      this.queue.push(loader);
      this.processQueue();
      return loader;
    }
    processQueue() {
      while (this.activeLoaders.length < this.concurrency) {
        const nextLoader = this.inactiveLoaders.at(0);
        if (!nextLoader) break;
        nextLoader.loading = true;
        this.loadChunk(nextLoader.coords, nextLoader.controller).then((result) => {
          nextLoader.result = result;
          this.emit("chunk_loaded", {
            ...nextLoader,
            result
          });
        }).catch((err2) => {
          logger3.error("error at loading chunk", nextLoader.coords, err2);
        }).finally(() => {
          nextLoader.loading = false;
          this.remove(nextLoader.coords);
          this.processQueue();
        });
      }
    }
    async waitChunks(coordsList) {
      const allSelected = coordsList.map((coords) => {
        const loader = this.get(coords);
        if (!loader) throw new Error(`Loader not found for coords ${coords}`);
        return loader;
      });
      const loaded = allSelected.filter((loader) => loader.result);
      const unloaded = allSelected.filter((loader) => !loader.result);
      if (unloaded.length === 0) {
        if (loaded.length !== coordsList.length) {
          throw new Error("coordsList and loaded chunks length mismatch");
        }
        return loaded;
      }
      const { promise, resolve, reject } = Promise.withResolvers();
      unloaded.forEach((loader) => {
        loader.controller.signal.addEventListener("abort", () => {
          reject(new Error(`loader for ${loader.coords} was aborted`));
        });
      });
      const catcher = (loader) => {
        const matchedIndex = unloaded.findIndex((u) => u.coords[0] === loader.coords[0] && u.coords[1] === loader.coords[1]);
        if (matchedIndex === -1) return;
        loaded.push(loader);
        unloaded.splice(matchedIndex, 1);
        if (unloaded.length === 0) {
          this.off("chunk_loaded", catcher);
          resolve(loaded);
        }
      };
      this.on("chunk_loaded", catcher);
      return promise;
    }
    // private waitChunk(coords: Vec2) {
    //   const { promise, resolve, reject } = Promise.withResolvers<ChunkLoader<T>>();
    //   const catcher = (loader: ChunkLoader<T>) => {
    //     if(loader.coords[0] === coords[0] && loader.coords[1] === coords[1]) {
    //       this.off('chunk_loaded', catcher);
    //       resolve(loader);
    //     }
    //   }
    //   this.on('chunk_loaded', catcher);
    //   return promise;
    // }
    get(coords) {
      const index = this.getIndex(coords);
      if (index === -1) return null;
      return this.queue[index];
    }
    has(coords) {
      return this.getIndex(coords) !== -1;
    }
    getIndex(coords) {
      return this.queue.findIndex((l) => l.coords[0] === coords[0] && l.coords[1] === coords[1]);
    }
    remove(coords) {
      const indexToRemove = this.getIndex(coords);
      if (indexToRemove === -1) return;
      const loader = this.queue[indexToRemove];
      if (loader.loading) {
        this.queue[indexToRemove].controller.abort();
      }
      this.queue.splice(indexToRemove, 1);
    }
    destroy() {
      while (true) {
        const loader = this.queue.pop();
        if (!loader) break;
        if (loader.loading) {
          loader.controller.abort();
        }
      }
    }
  };

  // src/CanvasAPI/Wplace/errors.ts
  var errWplaceTokenRefresh = new Error("Refresh required");
  var errWplaceTooManyRequests = new Error("Too many requests");

  // src/storage/Storage.ts
  var Storage = class {
    localStorageData = {};
    data = {};
    localStorageKey = "storage";
    emitter = new exports();
    wasEmptyOnLoad = true;
    constructor(options) {
      if (options) {
        if (options.localStorageKey) {
          this.localStorageKey = options.localStorageKey;
        }
      }
      this.load();
    }
    on(name2, handler) {
      this.emitter.on(name2, handler);
    }
    set(name2, value, inLocalStorage = true) {
      if (inLocalStorage && name2 in this.data || !inLocalStorage && name2 in this.localStorageData) {
        throw new Error(`try to duplicate field "${name2}" with value "${value}"`);
      }
      if (inLocalStorage) {
        this.localStorageData[name2] = value;
        this.save();
      } else {
        this.data[name2] = value;
      }
      this.emitter.emit(name2, value);
    }
    get(name2) {
      if (name2 in this.data) {
        return this.data[name2];
      }
      if (name2 in this.localStorageData) {
        return this.localStorageData[name2];
      }
      return null;
    }
    has(name2) {
      return name2 in this.data || name2 in this.localStorageData;
    }
    delete(name2) {
      if (name2 in this.data) {
        delete this.data[name2];
      }
      if (name2 in this.localStorageData) {
        delete this.localStorageData[name2];
      }
    }
    save() {
      if (Object.keys(this.localStorageData).length) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.localStorageData));
      }
    }
    load() {
      const json = localStorage.getItem(this.localStorageKey);
      if (json !== null) {
        this.localStorageData = JSON.parse(json);
      }
      this.wasEmptyOnLoad = json === null || Object.keys(this.localStorageData).length === 0;
    }
    isEmptyOnLoad() {
      return this.wasEmptyOnLoad;
    }
  };

  // src/storage/index.ts
  var storage = new Storage({ localStorageKey: defaultLocalStorageKey });

  // src/defaults.ts
  var DEFAULT_STRATEGY = "human";
  var DEFAULT_COOLDOWN_THRESHOLD = 0;
  var DEFAULT_BOT_OPTIONS = {
    smartPlace: true,
    showErrors: true,
    cooldownThreshold: DEFAULT_COOLDOWN_THRESHOLD,
    skipProtect: false
  };
  var DEFAULT_STOP_ON_CAPTCHA = true;
  var DEFAULT_SMART_PLACE = true;
  var DEFAULT_DEFEND_AFTER_FINISH = true;
  var DEFAULT_FOLLOW_BOT = true;
  var DEFAULT_REVERSE_PAINTING = false;
  var DEFAULT_SKIP_PROTECT = false;
  var DEFAULT_CAPTCHA_SOLVER = true;
  var DEFAULT_WINDOW_POS = [16, 16];
  var DEFAULT_KEYBOARD_MAP = {
    switch_bot: "b",
    change_template_coords_to_mouse: "n",
    change_revival_api: "r"
  };

  // src/common/keyboard-bindings/keyboard.ts
  var keyToCode = {
    a: "KeyA",
    b: "KeyB",
    c: "KeyC",
    d: "KeyD",
    e: "KeyE",
    f: "KeyF",
    g: "KeyG",
    h: "KeyH",
    i: "KeyI",
    j: "KeyJ",
    k: "KeyK",
    l: "KeyL",
    m: "KeyM",
    n: "KeyN",
    o: "KeyO",
    p: "KeyP",
    q: "KeyQ",
    r: "KeyR",
    s: "KeyS",
    t: "KeyT",
    u: "KeyU",
    v: "KeyV",
    w: "KeyW",
    x: "KeyX",
    y: "KeyY",
    z: "KeyZ"
  };
  var codeToKey = Object.fromEntries(Object.entries(keyToCode).map(([key, value]) => [value, key]));
  var Keyboard = class {
    emitter = new exports();
    static getCode(key) {
      return keyToCode[key];
    }
    static getKey(code) {
      return codeToKey[code];
    }
    constructor({
      blockInputPredicate: blockInputPredicate2
    }) {
      window.addEventListener("keydown", (e) => {
        if (blockInputPredicate2(e)) {
          return;
        }
        this.emit(e);
      });
    }
    on(key, handler) {
      if (key === "*") {
        this.emitter.on("*", handler);
      } else {
        this.emitter.on(key, handler);
      }
    }
    off(key, handler) {
      if (key === "*") {
        this.emitter.off("*", handler);
      } else {
        this.emitter.off(keyToCode[key], handler);
      }
    }
    emit(e) {
      this.emitter.emit(codeToKey[e.code], e);
      this.emitter.emit("*", e);
    }
    once(key, handler) {
      if (key === "*") {
        this.emitter.once("*", handler);
      } else {
        this.emitter.once(keyToCode[key], handler);
      }
    }
    removeAllListeners(key) {
      if (key) {
        this.emitter.removeAllListeners(keyToCode[key]);
      } else {
        this.emitter.removeAllListeners();
      }
    }
  };

  // src/common/keyboard-bindings/keyboard-bindings.ts
  var blockInputPredicate = (e) => {
    if (typeof document !== "undefined" && ($(".show form") || $("#wm .show"))) return true;
    const target = e?.target ?? document?.activeElement;
    if (!target) return false;
    const tag = target.tagName?.toUpperCase?.();
    if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return true;
    return false;
  };
  var KeyboardBindings = class _KeyboardBindings {
    currentMap;
    keyboard = new Keyboard({
      blockInputPredicate
    });
    static cloneMap(map2) {
      return Object.fromEntries(Object.entries(map2).map(([key, value]) => [key, value]));
    }
    constructor(currentMap) {
      this.currentMap = _KeyboardBindings.cloneMap(currentMap);
      this.set(currentMap);
    }
    getCurrentMap() {
      return this.currentMap;
    }
    set(newMap) {
      this.currentMap = _KeyboardBindings.cloneMap(newMap);
      this.rebind();
    }
    getActionByKey(key) {
      for (const action of bindableActions) {
        const typedAction = action;
        if (this.currentMap[typedAction] === key) {
          return typedAction;
        }
      }
      return void 0;
    }
    inputNewBinding({
      action,
      onChange
    }) {
      this.keyboard.removeAllListeners();
      const anyKeyHandler = (e) => {
        const newKey = Keyboard.getKey(e.code);
        const existingAction = this.getActionByKey(newKey);
        if (existingAction && existingAction !== action) {
          this.currentMap[existingAction] = this.currentMap[action];
        }
        this.currentMap[action] = newKey;
        onChange(_KeyboardBindings.cloneMap(this.currentMap));
        this.keyboard.off("*", anyKeyHandler);
      };
      this.keyboard.on("*", anyKeyHandler);
      const controller = new AbortController();
      controller.signal.addEventListener("abort", () => {
        this.keyboard.off("*", anyKeyHandler);
        this.rebind();
      });
      return controller;
    }
    rebind() {
      this.keyboard.removeAllListeners();
      for (const action of bindableActions) {
        const typedAction = action;
        const key = this.currentMap[typedAction];
        this.keyboard.on(key, () => actions.call(typedAction));
      }
    }
  };

  // src/common/keyboard-bindings/index.ts
  var bindableActions = [
    "switch_bot",
    "change_template_coords_to_mouse",
    "change_revival_api"
  ];

  // src/global.ts
  if (!storage.has("strategy")) {
    storage.set("strategy", DEFAULT_STRATEGY);
  }
  if (!storage.has("stopOnCaptcha")) {
    storage.set("stopOnCaptcha", DEFAULT_STOP_ON_CAPTCHA);
  }
  if (!storage.has("smartPlace")) {
    storage.set("smartPlace", DEFAULT_SMART_PLACE);
  }
  if (!storage.has("debug")) {
    storage.set("debug", false);
  }
  if (!storage.has("keyboard_map")) {
    storage.set("keyboard_map", DEFAULT_KEYBOARD_MAP);
  }
  if (!storage.has("language")) {
    storage.set("language", getUserLanguageCode());
  }
  if (!storage.has("checkpoints")) {
    storage.set("checkpoints", []);
  }
  if (!storage.has("fun_thing")) {
    storage.set("fun_thing", false);
  }
  if (!storage.has("void_theme")) {
    storage.set("void_theme", false);
  }
  if (!storage.has("follow_bot")) {
    storage.set("follow_bot", false);
  }
  if (!storage.has("reversePainting")) {
    storage.set("reversePainting", false);
  }
  if (!storage.has("cooldownThreshold")) {
    storage.set("cooldownThreshold", DEFAULT_COOLDOWN_THRESHOLD);
  }
  if (!storage.has("cooldownThresholds")) {
    storage.set("cooldownThresholds", {});
  }
  if (!storage.has("start_when_ready")) {
    storage.set("start_when_ready", false);
  }
  if (!storage.has("captcha-solver")) {
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    const disableOn = ["pixelplanet.fun", "fuckyouarkeros.fun"];
    const defaultSolver = disableOn.some((h2) => host.endsWith(h2)) ? false : DEFAULT_CAPTCHA_SOLVER;
    storage.set("captcha-solver", defaultSolver);
  }
  if (!storage.has("first_run_shown")) {
    storage.set("first_run_shown", false);
  }
  var keyboardBindings = new KeyboardBindings(storage.get("keyboard_map"));
  storage.on("keyboard_map", (map2) => keyboardBindings.set(map2));
  var global2 = {
    storage,
    keyboardBindings,
    csa: null
  };

  // src/CanvasAPI/Wplace/clientside.ts
  var logger4 = new Logger("WplaceCSA");
  var currentSeasonZoom = canvasSettings.seasons[currentSeason].zoom;
  var CSA2 = class _CSA extends StrictEmitter {
    static instance = null;
    currentLocation = null;
    guiMousemove = null;
    static getInstance() {
      if (!_CSA.instance) {
        _CSA.instance = new _CSA();
      }
      return _CSA.instance;
    }
    constructor() {
      super();
      this.init();
    }
    init() {
      this.catchMousemoves();
      this.catchCaptchaToken();
      this.buildCoordsGui();
    }
    goto(args) {
      const latLon = coordsConverter.worldToLatLon(args.x, args.y, currentSeasonZoom);
      location.replace(`${location.origin}/?lat=${latLon[0]}&lng=${latLon[1]}&zoom=${args.zoom}`);
    }
    getCurrentLocation() {
      if (!this.currentLocation) return null;
      const world = coordsConverter.latLonToWorld(this.currentLocation[0], this.currentLocation[1], currentSeasonZoom);
      return {
        canvasIdent: "",
        x: world[0],
        y: world[1],
        zoom: 15
      };
    }
    buildCoordsGui() {
      const coordsGui = document.createElement("div");
      coordsGui.style = "position: fixed; z-index: 1000; top: 10px; left: 50%; transform: translateX(-50%); width: 240px; height: auto; background-color: rgba(0, 0, 0, 0.9); color: red; font-family: monospace; border: 1px solid darkred; display: grid; grid-template-columns: auto 1fr; gap: 4px; padding: 4px; white-space: pre-wrap; overflow: hidden;";
      document.body.appendChild(coordsGui);
      if (global2.storage.get("debug")) {
        coordsGui.style.display = "block";
      } else {
        coordsGui.style.display = "none";
      }
      global2.storage.on("debug", (enabled2) => {
        coordsGui.style.display = enabled2 ? "block" : "none";
      });
      this.guiMousemove = (coords) => {
        const debug = global2.storage.get("debug");
        if (!debug) return;
        const regionResult = coordsConverter.latLonToTileAndPixel(coords[0], coords[1], currentSeasonZoom);
        const tileResult = coordsConverter.latLonToRegionAndPixel(coords[0], coords[1], currentSeasonZoom);
        coordsGui.innerHTML = `<div>lat:</div><div>${coords[0]}</div><div>lng:</div><div>${coords[1]}</div><div>tile:</div><div>${regionResult.tile.join("_")} ${regionResult.pixel.join("_")}</div><div>region:</div><div>${tileResult.region.join("_")} ${tileResult.pixel.join("_")}</div><div>world:</div><div>${coordsConverter.latLonToWorld(coords[0], coords[1], currentSeasonZoom).join(" ")}</div>`;
      };
    }
    catchMousemoves() {
      const originalIsArray = Array.isArray;
      Array.isArray = (arg) => {
        const result = originalIsArray(arg);
        if (result && (arg.length === 2 || arg.length === 3) && ~~arg[0] !== arg[0] && ~~arg[1] !== arg[1] && typeof arg[0] === "number" && typeof arg[1] === "number") {
          this.currentLocation = [arg[1], arg[0]];
          this.guiMousemove?.(this.currentLocation);
          const tiled = coordsConverter.latLonToWorld(
            this.currentLocation[0],
            this.currentLocation[1],
            canvasSettings.seasons[currentSeason].zoom
          );
          actions.emit("change_mouse_position", tiled);
        }
        return result;
      };
    }
    catchCaptchaToken() {
      window.addEventListener("message", (event) => {
        try {
          if (event.origin !== "https://challenges.cloudflare.com") return;
          const data = event.data;
          let token = null;
          if (data && typeof data === "object") {
            token = data.token || data.response || data["cf-turnstile-response"];
          }
          if (token) {
            logger4.info("got captcha token", token);
            this.emit("captcha_token", token);
          }
        } catch (e) {
          logger4.warn("error in catchCaptchaToken", e);
        }
      });
    }
  };
  var wplaceCSABuilder = async () => CSA2.getInstance();

  // src/CanvasAPI/Wplace/index.ts
  var logger5 = new Logger("WplaceAPI");
  var WplaceAPI = class _WplaceAPI extends StrictEmitter {
    season = currentSeason;
    chunks = new Chunks();
    chunkLoadingQueue = new ChunksLoadingQueue({
      concurrency: 5,
      loadChunk: this.loadTile.bind(this)
    });
    getToken;
    _me = null;
    info = {
      ...emptyCanvasInfo,
      // TODO fix this later
      worldWidth: Infinity,
      worldHeight: Infinity,
      borders: new Rect(0, 0, Infinity, Infinity),
      palette: {
        offset: 1,
        colors
      },
      chunkWidth: canvasSettings.seasons[currentSeason].tileSize,
      chunkHeight: canvasSettings.seasons[currentSeason].tileSize,
      haveStack: true,
      stack: 62
    };
    palette = new Palette_default(this.info.palette.offset, this.info.palette.colors);
    timer = new CooldownTime();
    name = "wplace";
    constructor({
      getToken
    }) {
      super();
      this.getToken = getToken;
    }
    async init() {
      await this.fetchMeAndUpdateState();
      this.chunkLoadingQueue.on("chunk_loaded", (chunk) => {
        this.chunks.set(chunk.result, chunk.coords[0], chunk.coords[1]);
        this.emit("chunk", chunk.coords);
      });
      this.emit("ready");
    }
    async fetchMeAndUpdateState() {
      const me = await _WplaceAPI.fetchMeWithRetry();
      if (me) {
        this.updateStateWithMe(me);
      }
    }
    getCurrentMe() {
      if (!this._me) throw errors.errMustAuth;
      return this._me;
    }
    updateStateWithMe(me) {
      this._me = me;
      this.info.stack = me.charges.max * me.charges.cooldownMs;
      this.info.minCd = me.charges.cooldownMs;
      this.info.maxCd = me.charges.cooldownMs;
      this.timer.update((this._me.charges.max - this._me.charges.count) * this._me.charges.cooldownMs);
    }
    static async build({
      getToken
    }) {
      const api = new this({
        getToken
      });
      await api.init();
      return api;
    }
    static async fetchMeWithRetry() {
      try {
        return await this.fetchMe();
      } catch (e) {
        logger5.warn("error while first time fetching me");
        logger5.warn(e);
      }
      await sleep(2e3);
      return await this.fetchMe();
    }
    static async fetchMe() {
      const res = await fetch("https://backend.wplace.live/me", {
        "credentials": "include"
      });
      if (res.status === 401) {
        return null;
      }
      return await res.json();
    }
    static preparePixelsForSend(pixels) {
      const groups = {};
      pixels.forEach((pixel) => {
        const [tileX, tileY, offset] = coordsConverter.worldToTiled(pixel.x, pixel.y);
        const key = CoordsConverter.stringifyTileCoords(tileX, tileY);
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push({
          id: pixel.id,
          offset
        });
      });
      return groups;
    }
    async destroy() {
      this.chunkLoadingQueue.destroy();
      this.chunks.clear();
      this.removeAllListeners();
    }
    async prepareChunks(workspacesChunks) {
      workspacesChunks.forEach((coords) => this.chunkLoadingQueue.add(coords));
      await this.chunkLoadingQueue.waitChunks(workspacesChunks);
    }
    async dropChunks(coords) {
      coords.forEach((coords2) => {
        this.chunks.delete(coords2[0], coords2[1]);
        this.chunkLoadingQueue.remove(coords2);
      });
    }
    getChunksCoords(x1, y1, x2, y2) {
      const [x1Tile, y1Tile] = coordsConverter.worldToTiled(x1, y1);
      const [x2Tile, y2Tile] = coordsConverter.worldToTiled(x2, y2);
      const chunks = [];
      for (let x = x1Tile; x <= x2Tile; x++) {
        for (let y = y1Tile; y <= y2Tile; y++) {
          chunks.push([x, y]);
        }
      }
      return chunks;
    }
    predictCooldown() {
      return this.getCurrentMe().charges.cooldownMs;
    }
    get(x, y) {
      const [xTile, yTile, offset] = coordsConverter.worldToTiled(x, y);
      return this.chunks.get(xTile, yTile).get(offset);
    }
    async placePixels(pixels) {
      const groups = _WplaceAPI.preparePixelsForSend(pixels);
      let error = null;
      for (const [key, group5] of Object.entries(groups)) {
        const { tileX, tileY } = CoordsConverter.parseTileCoords(key);
        try {
          await this.placeTilePixels({ tileX, tileY, pixels: group5 });
          await sleep(2e3);
        } catch (e) {
          error = e;
          break;
        }
      }
      if (error === errWplaceTokenRefresh) {
        throw error;
      }
      await this.fetchMeAndUpdateState();
    }
    async placeTilePixels({
      tileX,
      tileY,
      pixels
    }) {
      const response = await fetch(`https://backend.wplace.live/s${this.season}/pixel/${tileX}/${tileY}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          colors: pixels.map((pixel) => pixel.id),
          coords: pixels.map((pixel) => {
            const offsetY = ~~(pixel.offset / this.info.chunkWidth);
            const offsetX = pixel.offset - offsetY * this.info.chunkWidth;
            return [offsetX, offsetY];
          }).flat(),
          t: this.getToken()
        })
      });
      const result = await response.json();
      if ("error" in result && result.error === "refresh") {
        throw errWplaceTokenRefresh;
      }
      if (response.status === 429) {
        throw errWplaceTooManyRequests;
      }
      if (!response.ok) {
        throw new Error(`Failed to place pixels for group: ${response.statusText}`);
      }
      return result;
    }
    async loadTile(coords, controller) {
      const url = `https://backend.wplace.live/files/s${this.season}/tiles/${coords[0]}/${coords[1]}.png`;
      const resp = await fetch(url, controller);
      if (!resp.ok) throw new Error(`Failed to load chunk ${coords[0]}/${coords[1]} (${resp.status})`);
      const blob = await resp.blob();
      const bitmap = await createImageBitmap(blob);
      if (bitmap.width === 1 && bitmap.height === 1) {
        return new Chunk(new Uint32Array(this.info.chunkWidth * this.info.chunkHeight));
      }
      const ctx = createCanvasContext(bitmap.width, bitmap.height);
      ctx.drawImage(bitmap, 0, 0);
      const tileBuffer = new Uint32Array(ctx.getImageData(0, 0, bitmap.width, bitmap.height).data);
      const colorsIds = new Uint32Array(tileBuffer.length / 4);
      for (let i = 0; i < colorsIds.length; i++) {
        const pixelStartIndex = i << 2;
        const quantized = this.palette.rgbaToId([
          tileBuffer[pixelStartIndex | 0],
          tileBuffer[pixelStartIndex | 1],
          tileBuffer[pixelStartIndex | 2],
          tileBuffer[pixelStartIndex | 3]
        ]);
        colorsIds[i] = quantized ?? 0;
      }
      bitmap.close();
      return new Chunk(colorsIds);
    }
  };

  // src/CanvasAPI/Canvaspix/packets.ts
  var CanvaspixCanvasApiPackets = class extends CanvasApiPackets {
    static REG_CANVAS_OP = 16;
    static REG_CHUNK_OP = 17;
    static DEREG_CHUNK_OP = 18;
    //
    static REG_MCHUNKS_OP = 19;
    //.
    static DEREG_MCHUNKS_OP = 20;
    //.
    static CHANGE_ME_OP = 21;
    static ONLINE_COUNTER_OP = 22;
    static PING_OP = 32;
    static PIXEL_UPDATE_OP = 48;
    static COOLDOWN_OP = 49;
    static PIXEL_RETURN_OP = 50;
    static CHUNK_UPDATE_MB_OP = 51;
    //.
    static PIXEL_UPDATE_MB_OP = 52;
    //.
    static CAPTCHA_RETURN_OP = 53;
  };

  // src/CanvasAPI/Canvaspix/index.ts
  var initOnceCanvaspixClientsideApi = once2(mousemoveHook);
  var CanvaspixAPI = class _CanvaspixAPI extends PPFLikeAPI {
    packets = CanvaspixCanvasApiPackets;
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/me");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _CanvaspixAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_CanvaspixAPI.me) {
        _CanvaspixAPI.me = await _CanvaspixAPI.fetchSiteCanvases();
      }
      return _CanvaspixAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _CanvaspixAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
  };

  // src/CanvasAPI/Pixuniverse/packets.ts
  var PixuniversCanvasApiPackets = class extends CanvasApiPackets {
    static REG_CANVAS_OP = 160;
    static REG_CHUNK_OP = 161;
    static DEREG_CHUNK_OP = 164;
    static REG_MCHUNKS_OP = 163;
    static DEREG_MCHUNKS_OP = 164;
    static CHANGE_ME_OP = 166;
    static ONLINE_COUNTER_OP = 167;
    static PING_OP = 176;
    static PIXEL_UPDATE_OP = 194;
    static COOLDOWN_OP = 195;
    static PIXEL_RETURN_OP = 196;
    static CHUNK_UPDATE_MB_OP = 198;
    static PIXEL_UPDATE_MB_OP = 197;
    static CAPTCHA_RETURN_OP = 199;
  };

  // src/CanvasAPI/Pixuniverse/retcodes.json
  var retcodes_default3 = {
    OK: 0,
    INVALID_CANVAS: 1,
    INVALID_X: 2,
    INVALID_Y: 3,
    INVALID_Z: 4,
    INVALID_COLOR: 5,
    NO_AUTH: 6,
    LOW_SCORE: 7,
    PROTECTION: 8,
    STACK_IS_FULL: 9,
    CAPTCHA: 10,
    PROXY: 11,
    TOP10: 12,
    PARALLEL_WS: 13,
    BAN: 18
  };

  // src/CanvasAPI/Pixuniverse/index.ts
  var import_group_items3 = __toESM(require_dist());
  var initOncePixuniversClientsideApi = once2(mousemoveHook);
  var PixuniversAPI = class _PixuniversAPI extends PPFLikeAPI {
    packets = PixuniversCanvasApiPackets;
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/me");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _PixuniversAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_PixuniversAPI.me) {
        _PixuniversAPI.me = await _PixuniversAPI.fetchSiteCanvases();
      }
      return _PixuniversAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _PixuniversAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
    async placePixels(pixels) {
      const compressChunkPosition2 = (pos) => pos[0] << 8 | pos[1];
      const decompressChunkPosition2 = (id2) => [id2 >> 8, id2 & 255];
      const byChunks = this.groupPixelsInternal(pixels, compressChunkPosition2);
      for (const ch in byChunks) {
        const pixelGroup = byChunks[ch];
        const pos = decompressChunkPosition2(+ch);
        this.emit("place_pixels", pixelGroup.map(({ offset, id: id2 }) => {
          const [x, y] = this.toWorld(pos[0], pos[1], offset);
          return { x, y, id: id2 };
        }));
        this.ws.send(this.packets.serializePixelUpdate(pos[0], pos[1], pixelGroup.map((p) => [p.offset, p.id])));
        let retcode;
        try {
          retcode = await this.local.wait("ret_code", 4e3);
        } catch (e) {
          const err2 = e;
          if (err2 === errPromiseDeadline) {
            throw errors.errNoPlacePixelResult;
          } else {
            throw err2;
          }
        }
        switch (retcode) {
          case retcodes_default3.OK:
            break;
          case retcodes_default3.INVALID_CANVAS:
          case retcodes_default3.INVALID_X:
          case retcodes_default3.INVALID_Y:
          case retcodes_default3.INVALID_Z:
          case retcodes_default3.INVALID_COLOR:
            throw errors.errCanvasAPIInteraction;
          case retcodes_default3.NO_AUTH:
            throw errors.errMustAuth;
          case retcodes_default3.LOW_SCORE:
            throw errors.errTooLowScore;
          case retcodes_default3.PROTECTION:
            throw errors.errPixelProtected;
          case retcodes_default3.STACK_IS_FULL:
            throw errors.errFullStack;
          case retcodes_default3.CAPTCHA:
            throw errors.errCaptcha;
          case retcodes_default3.PROXY:
            throw errors.errYouAreProxy;
          case retcodes_default3.TOP10:
            throw errors.errTooLowScore;
          case retcodes_default3.PARALLEL_WS:
            throw errors.errParallelPlace;
          case retcodes_default3.BAN:
            throw errors.errYouAreBanned;
          default:
            throw new Error(`unknown retcode: ${retcode}`);
            ;
        }
      }
    }
    groupPixelsInternal(pixels, compressChunkPosition2) {
      const groupped = (0, import_group_items3.group)(pixels).by((pixel) => {
        return compressChunkPosition2(this.toTiled(pixel.x, pixel.y).slice(0, 2));
      }).asArrays();
      const chunks = {};
      groupped.forEach((pixelGroup) => {
        const tiled = this.toTiled(pixelGroup[0].x, pixelGroup[0].y);
        const chIndex = compressChunkPosition2(tiled.slice(0, 2));
        chunks[chIndex] = pixelGroup.map((pixel) => ({
          offset: this.toTiled(pixel.x, pixel.y)[2],
          id: pixel.id
        }));
      });
      return chunks;
    }
  };

  // src/CanvasAPI/Globalpixel/packets.ts
  var GlobalpixelCanvasApiPackets = class extends CanvasApiPackets {
    static REG_CANVAS_OP = 160;
    static REG_CHUNK_OP = 161;
    static DEREG_CHUNK_OP = 162;
    static REG_MCHUNKS_OP = 163;
    static DEREG_MCHUNKS_OP = 164;
    static CHANGE_ME_OP = 166;
    static ONLINE_COUNTER_OP = 167;
    static PING_OP = 176;
    static PIXEL_UPDATE_OP = 193;
    static COOLDOWN_OP = 194;
    static PIXEL_RETURN_OP = 195;
    static CHUNK_UPDATE_MB_OP = 196;
    static PIXEL_UPDATE_MB_OP = 197;
    static CAPTCHA_RETURN_OP = 198;
  };

  // src/CanvasAPI/Globalpixel/index.ts
  var initOnceGlobalpixelClientsideApi = once2(mousemoveHook);
  var GlobalpixelAPI = class _GlobalpixelAPI extends PPFLikeAPI {
    packets = GlobalpixelCanvasApiPackets;
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/me");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _GlobalpixelAPI.getMe();
      const api = new this({ canvasId });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_GlobalpixelAPI.me) {
        _GlobalpixelAPI.me = await _GlobalpixelAPI.fetchSiteCanvases();
      }
      return _GlobalpixelAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _GlobalpixelAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        if (info.ident === char) {
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
  };

  // src/CanvasAPI/Pixeldays/packets.ts
  var createPixeldaysApiPackets = ({
    pixelPlaceOpcode
  }) => {
    return class PixeldaysCanvasApiPackets extends CanvasApiPackets {
      static PIXEL_UPDATE_OP = 145;
      static serializePixelUpdate(i, j, pixels) {
        const buffer = CanvasApiPackets.serializePixelUpdate(i, j, pixels);
        new DataView(buffer).setUint8(0, pixelPlaceOpcode);
        return buffer;
      }
    };
  };

  // src/CanvasAPI/Pixeldays/index.ts
  var initOncePixeldaysClientsideApi = once2(mousemoveHook);
  var PixeldaysAPI = class _PixeldaysAPI extends PPFLikeAPI {
    packets;
    constructor({
      canvasId,
      pixelPlaceOpcode
    }) {
      super({ canvasId });
      this.packets = createPixeldaysApiPackets({ pixelPlaceOpcode });
    }
    getChunkUrl(pos) {
      return `${location.origin}/chunks/${this.canvasId}/${pos[0]}/${pos[1]}.bmp`;
    }
    static async fetchSiteCanvases() {
      const res = await fetch(location.origin + "/api/canvases");
      const { canvases } = await res.json();
      return { canvases };
    }
    static async build(canvasId) {
      const me = await _PixeldaysAPI.getMe();
      const clientScriptSrc = Array.from(document.querySelectorAll("script")).find((s) => s.src.includes("client"))?.src;
      if (!clientScriptSrc) {
        throw new Error("canvas client script not found");
      }
      const clientScriptContent = await fetch(clientScriptSrc).then((res) => res.text());
      const pixelPlaceOpcode = extractPixelPlaceOpcodeFromScript(clientScriptContent);
      if (!pixelPlaceOpcode) {
        throw new Error("cant extract pixel place opcode from canvas client script");
      }
      const api = new this({ canvasId, pixelPlaceOpcode: +pixelPlaceOpcode });
      api.info = meToCanvasInfo(me.canvases[canvasId]);
      await api.ws.connect();
      return api;
    }
    static async getMe() {
      if (!_PixeldaysAPI.me) {
        _PixeldaysAPI.me = await _PixeldaysAPI.fetchSiteCanvases();
      }
      return _PixeldaysAPI.me;
    }
    static async getCanvasIdByCanvasIdent(char) {
      const me = await _PixeldaysAPI.getMe();
      for (const [id2, info] of Object.entries(me.canvases)) {
        console.log(info.ident);
        if (info.ident === char) {
          console.log(id2, +id2);
          return +id2;
        }
      }
      throw new Error("no canvas char in me info");
    }
    //   private static generatePixelPlaceOpcode(ip: string) {
    //     const existsOpcodes = [
    //       0xA0,
    //       0xA1,
    //       0xA2,
    //       0xA3,
    //       0xA4,
    //       0xA6,
    //       0xA7,
    //       0xB0,
    //       0x91,
    //       0xC2,
    //       0xC3,
    //       0xC4,
    //       0xC5,
    //       0xC6,
    //       0xD0,
    //       0x50,
    //       0x51,
    //       0x52,
    //     ];
    //     let opcode = 0;
    //     for (const char of ip) {
    //       opcode = (opcode << 5) - opcode + char.charCodeAt(0);
    //       opcode |= 0;
    //     }
    //     opcode &= 255;
    //     while(existsOpcodes.includes(opcode)) {
    //       opcode++;
    //     }
    //     return opcode;
    //   }
  };
  function extractPixelPlaceOpcodeFromScript(input) {
    const pattern = /i\.setUint8\(0,\s*(\d+)\)/;
    const match = input.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  // src/utils/canvas-api.ts
  var defineAndRunCanvasApi = async () => {
    if (/.*:\/\/.*(pixelplanet)|(fuckyouarkeros)\.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await PixelplanetAPI.getCanvasIdByCanvasIdent(identChar);
      initOncePixelplanetClientsideApi();
      return Promise.all([
        PixelplanetAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/localhost/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await LocalhostAPI.getCanvasIdByCanvasIdent(identChar);
      initOnceLocalhostClientsideApi();
      return Promise.all([
        LocalhostAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*pixmap\.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await PixmapAPI.getCanvasIdByCanvasIdent(identChar);
      initOncePixmapClientsideApi();
      return Promise.all([
        PixmapAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*pixelya\.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await PixelyaAPI.getCanvasIdByCanvasIdent(identChar);
      initOncePixelyaClientsideApi();
      return Promise.all([
        PixelyaAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*wplace\.live.*/.test(location.origin)) {
      const csa = await wplaceCSABuilder();
      let token = await csa.wait("captcha_token");
      csa.on("captcha_token", (newToken) => {
        token = newToken;
      });
      return [
        await WplaceAPI.build({
          getToken: () => token
        }),
        csa
      ];
    }
    if (/.*:\/\/.*canvaspix\.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await CanvaspixAPI.getCanvasIdByCanvasIdent(identChar);
      initOnceCanvaspixClientsideApi();
      return Promise.all([
        CanvaspixAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*gplace.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await GlobalpixelAPI.getCanvasIdByCanvasIdent(identChar);
      initOnceGlobalpixelClientsideApi();
      return Promise.all([
        GlobalpixelAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*pixuniverse.fun.*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await PixuniversAPI.getCanvasIdByCanvasIdent(identChar);
      initOncePixuniversClientsideApi();
      return Promise.all([
        PixuniversAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    if (/.*:\/\/.*pixeldays\.(xyz|ru).*/.test(location.origin)) {
      const canvas = location.hash.match(/#[a-z]/g);
      const identChar = canvas ? canvas[0][1] : "d";
      const canvasId = await PixeldaysAPI.getCanvasIdByCanvasIdent(identChar);
      initOncePixeldaysClientsideApi();
      return Promise.all([
        PixeldaysAPI.build(canvasId),
        ppfSharedCsaBuilder()
      ]);
    }
    throw errUndefinedCanvas;
  };

  // src/utils/heatmap.ts
  var createHeatmap = (targeter) => {
    if (!("getAllTargets" in targeter)) {
      return;
    }
    const { width, height } = targeter;
    const targets = targeter.getAllTargets();
    const ctx = createCanvasContext(width, height);
    const id2 = ctx.getImageData(0, 0, width, height);
    const { data } = id2;
    targets.forEach((t, i) => {
      const value = Math.floor(255 * ((targets.length - i) / targets.length));
      const j = t[1] * width + t[0] << 2;
      data[j | 0] = value;
      data[j | 3] = 255;
    });
    ctx.putImageData(id2, 0, 0);
    return ctx;
  };

  // src/utils/heatweb.ts
  var import_lz_string = __toESM(require_lz_string());
  var createHeatweb = ({
    targeter,
    api,
    template
  }) => {
    if (!("getAllTargets" in targeter)) {
      return;
    }
    const { width, height } = targeter;
    const targets = targeter.getAllTargets();
    const targetsArray = new Array(targets.length << 1);
    const colorsArray = new Array(targets.length);
    targets.forEach((target, i) => {
      targetsArray[i << 1 | 0] = target[0].toString();
      targetsArray[i << 1 | 1] = target[1].toString();
      colorsArray[i] = template.get(target[0], target[1]).toString();
    });
    const nativePalette = api.palette.colors;
    const paletteArray = nativePalette.flat();
    let delay = 100;
    let pixelsAtOnce = 10;
    return `
		<!DOCTYPE html>
		<html>
			<head>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>
				<style>
					html, body {
						color: red;
						background: black;
						margin: 0;
						padding: 0;
						width: 100%;
						height: 100%;
					}

					body {
						padding: 10px;
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 10px;
					}

					.buttons,
					.inputs,
					.inputs > div {
						display: flex;
						flex-direction: row;
						align-items: center;
						gap: 10px;
					}
						
					.buttons,
					.inputs {
						margin-bottom: 10px;
					}

					button, input {
						color: inherit;
						background: black;
						border: 1px solid red;
						padding: 5px;
						outline: none;
					}

					button {
						cursor: pointer;
					}

					canvas {
						border: 1px red solid;
						background: rgba(32, 32, 32, 0.5);
					}
				</style>
			</head>
			<body>
			  <div class="buttons">
					<button id="start-button">
						start
					</button>
					<button id="stop-button">
						stop
					</button>
					<button id="reset-button">
						reset
					</button>
				</div>
				<div class="inputs">
					<div>
						<label for="delay-input">delay (ms)</label>
						<input type="number" id="delay-input" value="${delay}"/>
					</div>
					<div>
						<label for="pixels-at-once-input">place pixels at iteration</label>
						<input type="number" id="pixels-at-once-input" value="${pixelsAtOnce}"/>
					</div>
				</div>
				<div>
				<canvas/>
				<div hidden id="targets">${(0, import_lz_string.compressToBase64)("[" + targetsArray.join(",") + "]")}</div>
				<div hidden id="colors">${(0, import_lz_string.compressToBase64)("[" + colorsArray.join(",") + "]")}</div>
				<div hidden id="palette">${(0, import_lz_string.compressToBase64)("[" + paletteArray.join(",") + "]")}</div>
				<script>
					const width = ${width};
					const height = ${height};
					const ctx = document.querySelector('canvas').getContext('2d');
					ctx.canvas.width = width;
					ctx.canvas.height = height;
					ctx.clearRect(0, 0, width, height);

					ctx.mozImageSmoothingEnabled = false;
					ctx.webkitImageSmoothingEnabled = false;
					ctx.msImageSmoothingEnabled = false;
					ctx.imageSmoothingEnabled = false;

					let delay = ${delay};
					let pixelsAtOnce = ${pixelsAtOnce};

					const targets = new Uint16Array(JSON.parse(LZString.decompressFromBase64(document.getElementById('targets').textContent)));
					const colors = new Uint8Array(JSON.parse(LZString.decompressFromBase64(document.getElementById('colors').textContent)));
					const palette = new Uint8Array(JSON.parse(LZString.decompressFromBase64(document.getElementById('palette').textContent)));

					const targetsLength = targets.length / 2;
					const getTarget = i => [targets[i << 1], targets[(i << 1) | 1]];
					const getRgb = i => [palette[colors[i] * 3], palette[colors[i] * 3 + 1], palette[colors[i] * 3 + 2]];

					let prevClrId = -1;
					function iteration(i) {
						const id = colors[i];
						const target = getTarget(i);
						if (prevClrId !== id) {
							ctx.fillStyle = 'rgb(' + getRgb(i) + ')';
							prevClrId = id;
						}
						ctx.fillRect(target[0], target[1], 1, 1);
					}

					let works = true;
					let i = 0;
					async function loop() {
            for (; i < targetsLength && works; i++) {
							iteration(i);
							if (i % pixelsAtOnce === 0) {
								await new Promise(r => setTimeout(r, delay));
							}
						}
					}
					loop();

					document.getElementById('start-button').addEventListener('click', () => {
						works = true;
						loop();
					});

					document.getElementById('stop-button').addEventListener('click', () => {
						works = false;
					});

					document.getElementById('reset-button').addEventListener('click', () => {
						i = 0;
						ctx.clearRect(0, 0, width, height);
					});

					document.getElementById('delay-input').addEventListener('change', () => {
						delay = parseInt(document.getElementById('delay-input').value);
					});

					document.getElementById('pixels-at-once-input').addEventListener('change', () => {
						pixelsAtOnce = parseInt(document.getElementById('pixels-at-once-input').value);
					});
				<\/script>
			</body>
		</html>`;
  };

  // src/utils/lodash.ts
  function once2(fn) {
    var haveResult = false;
    var result = null;
    return function(...args) {
      if (!haveResult) {
        haveResult = true;
        result = fn.apply(this, args);
      }
      return result;
    };
  }

  // src/i18n/languages/index.ts
  var languages_exports = {};
  __export(languages_exports, {
    az: () => az,
    en: () => en,
    es: () => es,
    fr: () => fr,
    ru: () => ru,
    tr: () => tr,
    zh: () => zh
  });

  // src/i18n/languages/en.ts
  var en = {
    fullName: "English",
    author: "Darkness",
    map: {
      bot_tab_settings_title: "bot",
      bot_tab_info_title: "info",
      bot_tab_online: "online",
      bot_tab_online_title: "all bots (ips)",
      bot_tab_status: "status",
      bot_tab_cooldown: "cooldown",
      bot_tab_errors: "errors",
      bot_tab_progress: "progress",
      bot_tab_end_in: "end in",
      bot_tab_last_placed: "last pxl",
      bot_tab_strategy: "strategy",
      bot_tab_work_button: "stop/start",
      bot_options_tab_title: "advanced",
      bot_options_captcha_solver: "captcha solver",
      bot_options_follow_bot: "follow bot",
      bot_options_stop_on_captcha: "stop on captcha",
      bot_options_smart_place: "smart place",
      bot_options_cooldown_threshold: "cooldown threshold (s)",
      bot_options_skip_protect: "skip protect",
      bot_options_heatmap: "heatmap",
      storage_tab_title: "storage",
      bot_options_heatweb: "heatweb",
      bot_options_export: "export",
      bot_options_import: "import",
      bot_options_defend_template: "defend template",
      bot_options_reverse_painting: "reverse painting",
      bot_options_revival_api_button: "Revival api",
      storage_tab_save_title: "save",
      storage_tab_saved_title: "saved templates",
      storage_tab_name_placeholder: "name",
      storage_tab_coords: "coords",
      storage_tab_save_button: "save",
      storage_tab_no_templates: "no templates",
      checkpoints_tab_title: "checkpoints",
      checkpoints_tab_add: "add",
      checkpoints_tab_add_placeholder: "name",
      utils_tab_title: "canvas utils",
      utils_tab_screenshot: "screenshot",
      utils_tab_download: "download",
      utils_tab_loading: "loading...",
      utils_tab_download_full: "download full canvas",
      utils_tab_downloading_full: "downloading full canvas",
      utils_tab_download_unavailable: "full canvas download not available on this server",
      utils_tab_title_update: "Progress title in game tab title",
      utils_tab_pixel_radar: "Pixel radar",
      keyboard_tab_title: "keyboard bindings",
      keyboard_tab_key: "key",
      keyboard_tab_action: "action",
      keyboard_tab_press_some_key: "press some key",
      keyboard_tab_actions_switch_bot: "start/stop",
      keyboard_tab_actions_update_coords: "set template coords to mouse",
      keyboard_tab_actions_revival_api: "revival api",
      other_tab_title: "other",
      other_tab_fun_thing: "don't touch this",
      other_tab_debug: "debug",
      other_tab_void_theme: "void theme",
      other_tab_telegram_captcha: "Telegram captcha notifications",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Discord webhook",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "Discord User ID",
      captcha_notifications_tab_title: "Notifications",
      bot_status_init: "init...",
      bot_status_done: "done",
      bot_status_defending: "defending",
      bot_status_captcha: "captcha",
      bot_status_captcha_solving: "captcha solving...",
      bot_status_updating_workspace: "updating workspace...",
      bot_status_works: "works",
      bot_status_idle_captcha: "idle (captcha)",
      bot_status_idle: "idle",
      bot_status_reviving_api: "Reviving api...",
      bot_status_must_be_logged_in: "must be logged in",
      bot_status_error_targeter_creation: "error at targeter creation",
      bot_status_fill_x_and_y_fields: 'fill "x" and "y" fields',
      bot_status_select_template_file: "select template file",
      bot_status_error_template_creation: "error at template creation",
      bot_status_cant_create_api: "cant create api",
      notification_captcha_body: "You need to solve the captcha",
      notification_captcha_solving_body: "Captcha solving is in progress",
      notification_captcha_body_with_site: "You need to solve the captcha in {site}",
      notification_captcha_solving_body_with_site: "Captcha solving in progress on {site}",
      notification_idle_captcha_body: "Waiting for captcha solution",
      notification_idle_captcha_body_with_site: "Waiting for captcha solution on {site}",
      notification_error_body_prefix: "Error occurred:",
      notification_template_completed_body: "All pixels have been placed",
      notification_protected_pixel: "Cannot place pixel in protected area",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "No pixel placement result",
      err_must_auth: "You must log in",
      err_too_low_score: "Score too low",
      err_pixel_protected: "Pixel is protected",
      err_full_stack: "Stack is full",
      err_captcha: "Captcha must be solved",
      err_you_are_proxy: "Your proxy was detected",
      err_canvas_api_interaction: "Canvas API interaction error",
      err_unknown_error: "Unknown error",
      err_api_isnt_ready: "API is not ready",
      err_response_isnt_ok: "Response is not valid",
      err_response_status_isnt_200: "Response status is not 200",
      err_parallel_place: "Parallel placement error",
      err_you_are_banned: "You are banned"
    }
  };

  // src/i18n/languages/ru.ts
  var ru = {
    fullName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    author: "nof and jones",
    map: {
      bot_tab_settings_title: "\u0411\u043E\u0442",
      bot_tab_info_title: "\u0418\u043D\u0444\u0430",
      bot_tab_online: "\u041E\u043D\u043B\u0430\u0439\u043D",
      bot_tab_online_title: "\u0412\u0441\u0435\u0433\u043E \u0431\u043E\u0442\u043E\u0432 (IP \u0430\u0434\u0440\u0435\u0441\u043E\u0432)",
      bot_tab_status: "\u0421\u0442\u0430\u0442\u0443\u0441",
      bot_tab_cooldown: "\u041A\u0443\u043B\u0434\u0430\u0443\u043D",
      bot_tab_errors: "\u041E\u0448\u0438\u0431\u043A\u0438",
      bot_tab_progress: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
      bot_tab_end_in: "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
      bot_tab_last_placed: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435",
      bot_tab_strategy: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F",
      bot_tab_work_button: "\u0421\u0442\u043E\u043F/\u0421\u0442\u0430\u0440\u0442",
      bot_options_tab_title: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435",
      bot_options_captcha_solver: "\u0420\u0435\u0448\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u043F\u0447\u0438",
      bot_options_follow_bot: "\u0421\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0437\u0430 \u0431\u043E\u0442\u043E\u043C",
      bot_options_stop_on_captcha: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u0430 \u043A\u0430\u043F\u0447\u0435",
      bot_options_smart_place: "\u0423\u043C\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
      bot_options_cooldown_threshold: "\u041F\u043E\u0440\u043E\u0433 \u043A\u0443\u043B\u0434\u0430\u0443\u043D\u0430 (\u0441\u0435\u043A)",
      bot_options_skip_protect: "\u041F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0437\u0430\u0449\u0438\u0442\u0443",
      bot_options_heatmap: "\u0425\u044D\u0442\u043C\u0430\u043F",
      bot_options_heatweb: "\u0425\u044D\u0442\u0432\u0435\u0431",
      bot_options_export: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442",
      bot_options_import: "\u0418\u043C\u043F\u043E\u0440\u0442",
      bot_options_defend_template: "\u0428\u0430\u0431\u043B\u043E\u043D \u0437\u0430\u0449\u0438\u0442\u044B",
      bot_options_reverse_painting: "\u0420\u0435\u0432\u0451\u0440\u0441\u043D\u0430\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0430",
      bot_options_revival_api_button: "\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 API",
      storage_tab_title: "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",
      storage_tab_save_title: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      storage_tab_saved_title: "\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B",
      storage_tab_name_placeholder: "\u0418\u043C\u044F",
      storage_tab_coords: "\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B",
      storage_tab_save_button: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      storage_tab_no_templates: "\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432",
      checkpoints_tab_title: "\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",
      checkpoints_tab_add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
      checkpoints_tab_add_placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      utils_tab_title: "\u0423\u0442\u0438\u043B\u0438\u0442\u044B \u0434\u043B\u044F \u043A\u0430\u043D\u0432\u0430\u0441\u0430",
      utils_tab_screenshot: "\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442",
      utils_tab_download: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
      utils_tab_loading: "\u0413\u0440\u0443\u0437\u0438\u0442\u0441\u044F...",
      utils_tab_download_full: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0445\u043E\u043B\u0441\u0442",
      utils_tab_downloading_full: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0445\u043E\u043B\u0441\u0442\u0430",
      utils_tab_download_unavailable: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0445\u043E\u043B\u0441\u0442\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435",
      utils_tab_title_update: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      utils_tab_pixel_radar: "\u041F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0434\u0430\u0440",
      keyboard_tab_title: "\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
      keyboard_tab_key: "\u041A\u043B\u0430\u0432\u0438\u0448\u0430",
      keyboard_tab_action: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
      keyboard_tab_press_some_key: "\u041D\u0430\u0436\u043C\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",
      keyboard_tab_actions_switch_bot: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C/\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0431\u043E\u0442\u0430",
      keyboard_tab_actions_update_coords: "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D \u043D\u0430 \u043A\u043E\u043E\u0440\u0434\u044B \u043A\u0443\u0440\u0441\u043E\u0440\u0430",
      keyboard_tab_actions_revival_api: "\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 API",
      other_tab_title: "\u0420\u0430\u0437\u043D\u043E\u0435",
      other_tab_fun_thing: "\u0414\u043B\u044F \u043F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0436\u0446\u0435\u0432",
      other_tab_debug: "\u0420\u0435\u0436\u0438\u043C \u0434\u0435\u0431\u0430\u0433\u0430",
      other_tab_void_theme: "Void theme",
      other_tab_telegram_captcha: "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u043F\u0447\u0438",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Discord webhook",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "Discord User ID",
      captcha_notifications_tab_title: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
      bot_status_init: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
      bot_status_done: "\u0413\u043E\u0442\u043E\u0432\u043E",
      bot_status_defending: "\u0417\u0430\u0449\u0438\u0442\u0430",
      bot_status_captcha: "\u041A\u0430\u043F\u0447\u0430",
      bot_status_captcha_solving: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u043F\u0447\u0438",
      bot_status_updating_workspace: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438...",
      bot_status_works: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
      bot_status_idle_captcha: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 (\u043A\u0430\u043F\u0447\u0430)",
      bot_status_idle: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",
      bot_status_reviving_api: "\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 API...",
      bot_status_must_be_logged_in: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
      bot_status_error_targeter_creation: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0442\u0430\u0440\u0433\u0435\u0442\u0435\u0440\u0430",
      bot_status_fill_x_and_y_fields: '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u044F "x" \u0438 "y"',
      bot_status_select_template_file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0448\u0430\u0431\u043B\u043E\u043D\u0430",
      bot_status_error_template_creation: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430",
      bot_status_cant_create_api: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C API",
      notification_captcha_body: "\u041D\u0443\u0436\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043A\u0430\u043F\u0447\u0443",
      notification_captcha_solving_body: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u043F\u0447\u0438 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435",
      notification_captcha_body_with_site: "\u041D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043A\u0430\u043F\u0447\u0443 \u043D\u0430 {site}",
      notification_captcha_solving_body_with_site: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u043F\u0447\u0438 \u043D\u0430 {site}",
      notification_idle_captcha_body: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u043F\u0447\u0438",
      notification_idle_captcha_body_with_site: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u043F\u0447\u0438 \u043D\u0430 {site}",
      notification_error_body_prefix: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430:",
      notification_template_completed_body: "\u0428\u0430\u0431\u043B\u043E\u043D \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0437\u0430\u043A\u0440\u0430\u0448\u0435\u043D!",
      notification_protected_pixel: "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0438\u043A\u0441\u0435\u043B\u044F",
      err_must_auth: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
      err_too_low_score: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u0438\u0439 \u0441\u0447\u0451\u0442",
      err_pixel_protected: "\u041F\u0438\u043A\u0441\u0435\u043B\u044C \u043D\u0435\u043B\u044C\u0437\u044F \u0437\u0430\u043A\u0440\u0430\u0441\u0438\u0442\u044C, \u043E\u043D \u0437\u0430\u0449\u0438\u0449\u0451\u043D",
      err_full_stack: "\u0421\u0442\u0435\u043A \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D",
      err_captcha: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043A\u0430\u043F\u0447\u0443",
      err_you_are_proxy: "\u0412\u0430\u0448 \u043F\u0440\u043E\u043A\u0441\u0438 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D",
      err_canvas_api_interaction: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F Canvas API",
      err_unknown_error: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
      err_api_isnt_ready: "API \u043D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u0440\u0430\u0431\u043E\u0442\u0435",
      err_response_isnt_ok: "\u041E\u0442\u0432\u0435\u0442 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D",
      err_response_status_isnt_200: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C",
      err_parallel_place: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",
      err_you_are_banned: "\u0412\u044B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B"
    }
  };

  // src/i18n/languages/tr.ts
  var tr = {
    fullName: "T\xFCrk\xE7e",
    author: "m2_zm",
    map: {
      bot_tab_settings_title: "bot",
      bot_tab_info_title: "bilgilendirme",
      bot_tab_online: "\xE7evrimi\xE7i",
      bot_tab_online_title: "t\xFCm botlar (ipler)",
      bot_tab_status: "durum",
      bot_tab_cooldown: "bekleme s\xFCresi",
      bot_tab_errors: "hatalar",
      bot_tab_progress: "ilerleme",
      bot_tab_end_in: "bitecek",
      bot_tab_last_placed: "son piksel",
      bot_tab_strategy: "strateji",
      bot_tab_work_button: "durdur/ba\u015Flat",
      bot_options_tab_title: "geli\u015Fmi\u015F",
      bot_options_captcha_solver: "captcha \xE7\xF6z\xFCc\xFC",
      bot_options_follow_bot: "botu takip et",
      bot_options_stop_on_captcha: "captcha'da dur",
      bot_options_smart_place: "ak\u0131ll\u0131 yerle\u015Ftirme",
      bot_options_cooldown_threshold: "cooldown e\u015Fi\u011Fi (sn)",
      bot_options_skip_protect: "korumalar\u0131 atla",
      bot_options_heatmap: "\u0131s\u0131 haritas\u0131",
      storage_tab_title: "depolama",
      bot_options_heatweb: "\u0131s\u0131 a\u011F\u0131",
      bot_options_export: "d\u0131\u015Fa aktar",
      bot_options_import: "i\xE7e aktar",
      bot_options_defend_template: "\u015Fablon savunmas\u0131",
      bot_options_reverse_painting: "ters boyama",
      bot_options_revival_api_button: "API yenileme",
      storage_tab_save_title: "kaydet",
      storage_tab_saved_title: "kaydedilmi\u015F \u015Fablonlar",
      storage_tab_name_placeholder: "isim",
      storage_tab_coords: "koordinat",
      storage_tab_save_button: "kaydet",
      storage_tab_no_templates: "\u015Fablon yok",
      checkpoints_tab_title: "kontrol noktalar\u0131",
      checkpoints_tab_add: "ekle",
      checkpoints_tab_add_placeholder: "isim",
      utils_tab_title: "tuval ara\xE7lar\u0131",
      utils_tab_screenshot: "ekran g\xF6r\xFCnt\xFCs\xFC",
      utils_tab_download: "indir",
      utils_tab_loading: "y\xFCkleniyor...",
      utils_tab_download_full: "t\xFCm tuvali indir",
      utils_tab_downloading_full: "tuval indiriliyor",
      utils_tab_download_unavailable: "Tam tuval indirme bu sunucuda mevcut de\u011Fil",
      utils_tab_title_update: "Sekme ba\u015Fl\u0131\u011F\u0131nda ilerleme",
      utils_tab_pixel_radar: "Piksel radar\u0131",
      keyboard_tab_title: "klavye k\u0131sayollar\u0131",
      keyboard_tab_key: "tu\u015F",
      keyboard_tab_action: "eylem",
      keyboard_tab_press_some_key: "bir tu\u015Fa bas",
      keyboard_tab_actions_switch_bot: "ba\u015Flat/durdur",
      keyboard_tab_actions_update_coords: "\u015Fablon koordinatlar\u0131n\u0131 fareye ayarla",
      keyboard_tab_actions_revival_api: "API yenileme",
      other_tab_title: "di\u011Fer",
      other_tab_fun_thing: "dokunma",
      other_tab_debug: "hata ay\u0131klama",
      other_tab_void_theme: "void temas\u0131",
      other_tab_telegram_captcha: "Telegram captcha bildirimleri",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Discord webhook",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "Discord User ID",
      captcha_notifications_tab_title: "Bildirimler",
      bot_status_init: "ba\u015Flat\u0131l\u0131yor...",
      bot_status_done: "tamamland\u0131",
      bot_status_defending: "savunuyor",
      bot_status_captcha: "captcha",
      bot_status_captcha_solving: "captcha \xE7\xF6z\xFCl\xFCyor...",
      bot_status_updating_workspace: "\xE7al\u0131\u015Fma alan\u0131 g\xFCncelleniyor...",
      bot_status_works: "\xE7al\u0131\u015F\u0131yor",
      bot_status_idle_captcha: "beklemede (captcha)",
      bot_status_idle: "beklemede",
      bot_status_reviving_api: "API yenileniyor...",
      bot_status_must_be_logged_in: "oturum a\xE7mal\u0131s\u0131n\u0131z",
      bot_status_error_targeter_creation: "targeter olu\u015Fturulurken hata",
      bot_status_fill_x_and_y_fields: '"x" ve "y" alanlar\u0131n\u0131 doldurun',
      bot_status_select_template_file: "\u015Fablon dosyas\u0131n\u0131 se\xE7in",
      bot_status_error_template_creation: "\u015Fablon olu\u015Fturulurken hata",
      bot_status_cant_create_api: "api olu\u015Fturulam\u0131yor",
      notification_captcha_body: "Captcha \xE7\xF6zmeniz gerekiyor",
      notification_captcha_solving_body: "Captcha \xE7\xF6z\xFCl\xFCyor",
      notification_captcha_body_with_site: "{site} sitesinde captcha \xE7\xF6zmeniz gerekiyor",
      notification_captcha_solving_body_with_site: "{site} sitesinde captcha \xE7\xF6z\xFCl\xFCyor",
      notification_idle_captcha_body: "Captcha \xE7\xF6z\xFCm\xFC bekleniyor",
      notification_idle_captcha_body_with_site: "{site} sitesinde captcha \xE7\xF6z\xFCm\xFC bekleniyor",
      notification_error_body_prefix: "Hata olu\u015Ftu:",
      notification_template_completed_body: "T\xFCm pikseller yerle\u015Ftirildi",
      notification_protected_pixel: "Korunan alana piksel yerle\u015Ftirilemez",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "Piksel yerle\u015Ftirme sonucu yok",
      err_must_auth: "Giri\u015F yapmal\u0131s\u0131n\u0131z",
      err_too_low_score: "Skor \xE7ok d\xFC\u015F\xFCk",
      err_pixel_protected: "Piksel korumal\u0131",
      err_full_stack: "Y\u0131\u011F\u0131n dolu",
      err_captcha: "Captcha \xE7\xF6z\xFClmeli",
      err_you_are_proxy: "Proxy tespit edildi",
      err_canvas_api_interaction: "Canvas API hatas\u0131",
      err_unknown_error: "Bilinmeyen hata",
      err_api_isnt_ready: "API haz\u0131r de\u011Fil",
      err_response_isnt_ok: "Yan\u0131t ge\xE7ersiz",
      err_response_status_isnt_200: "Yan\u0131t durumu 200 de\u011Fil",
      err_parallel_place: "Paralel yerle\u015Ftirme hatas\u0131",
      err_you_are_banned: "Yasakland\u0131n\u0131z"
    }
  };

  // src/i18n/languages/az.ts
  var az = {
    fullName: "Azerbaijani",
    author: "m2_zm",
    map: {
      bot_tab_settings_title: "bot",
      bot_tab_info_title: "M\u0259lumat",
      bot_tab_online: "Aktiv",
      bot_tab_online_title: "B\xFCt\xFCn botlar (\u0130P-l\u0259r)",
      bot_tab_status: "Status",
      bot_tab_cooldown: "G\xF6zl\u0259m\u0259 vaxt\u0131",
      bot_tab_errors: "X\u0259talar",
      bot_tab_progress: "Gedi\u015Fat",
      bot_tab_end_in: "Qalan vaxt",
      bot_tab_last_placed: "Son piksel",
      bot_tab_strategy: "Strategiya",
      bot_tab_work_button: "Ba\u015Flat/Dayand\u0131r",
      bot_options_tab_title: "qabaqc\u0131l",
      bot_options_captcha_solver: "Do\u011Frulama h\u0259lledicisi",
      bot_options_follow_bot: "Botu izl\u0259",
      bot_options_stop_on_captcha: "Do\u011Frulama zaman\u0131 dayand\u0131r",
      bot_options_smart_place: "A\u011F\u0131ll\u0131 yerl\u0259\u015Fdirm\u0259",
      bot_options_cooldown_threshold: "g\xF6zl\u0259m\u0259 m\xFCdd\u0259ti h\u0259ddi (san)",
      bot_options_skip_protect: "qorunmayanlar\u0131 ke\xE7",
      bot_options_heatmap: "\u0130stilik x\u0259rit\u0259si",
      storage_tab_title: "saxlama",
      bot_options_heatweb: "\u0130stilik toru",
      bot_options_export: "ixrac",
      bot_options_import: "idxal",
      bot_options_defend_template: "\u015Eablon m\xFCdafi\u0259si",
      bot_options_reverse_painting: "t\u0259rs \xE7\u0259km\u0259",
      bot_options_revival_api_button: "API b\u0259rpas\u0131",
      storage_tab_save_title: "saxla",
      storage_tab_saved_title: "saxlanm\u0131\u015F \u015Fablonlar",
      storage_tab_name_placeholder: "ad",
      storage_tab_coords: "koordinat",
      storage_tab_save_button: "saxla",
      storage_tab_no_templates: "\u015Fablon yoxdur",
      checkpoints_tab_title: "Yoxlama n\xF6qt\u0259l\u0259ri",
      checkpoints_tab_add: "\u018Flav\u0259 et",
      checkpoints_tab_add_placeholder: "Ad",
      utils_tab_title: "Al\u0259tl\u0259r",
      utils_tab_screenshot: "Ekran \u015F\u0259kli",
      utils_tab_download: "Endir",
      utils_tab_loading: "Y\xFCkl\u0259nir...",
      utils_tab_download_full: "B\xFCt\xFCn kanvas\u0131 y\xFCkl\u0259",
      utils_tab_downloading_full: "Kanvas y\xFCkl\u0259nir",
      utils_tab_download_unavailable: "Tam kanvas y\xFCkl\u0259nm\u0259si bu serverd\u0259 m\xF6vcud deyil",
      utils_tab_title_update: "Sekme ba\u015Fl\u0131\u011F\u0131nda ir\u0259lil\u0259yi\u015F",
      utils_tab_pixel_radar: "Piksel radar\u0131",
      keyboard_tab_title: "Klaviatura d\xFCym\u0259l\u0259ri",
      keyboard_tab_key: "D\xFCym\u0259",
      keyboard_tab_action: "Funksiya",
      keyboard_tab_press_some_key: "D\xFCym\u0259 bas\u0131n",
      keyboard_tab_actions_switch_bot: "Ba\u015Flat/Dayand\u0131r",
      keyboard_tab_actions_update_coords: "Koordinatlar\u0131 si\xE7anla t\u0259yin et",
      keyboard_tab_actions_revival_api: "API b\u0259rpas\u0131",
      other_tab_title: "Dig\u0259r",
      other_tab_fun_thing: "Toxunmay\u0131n",
      other_tab_debug: "Diaqnostika",
      other_tab_void_theme: "Qaranl\u0131q m\xF6vzu",
      other_tab_telegram_captcha: "Captcha telegram bildiri\u015Fl\u0259ri",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Discord webhook",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "Discord User ID",
      captcha_notifications_tab_title: "Bildiri\u015Fl\u0259r",
      bot_status_init: "y\xFCkl\u0259nir...",
      bot_status_done: "haz\u0131r",
      bot_status_defending: "m\xFCdafi\u0259 edir",
      bot_status_captcha: "captcha",
      bot_status_captcha_solving: "captcha h\u0259ll olunur",
      bot_status_updating_workspace: "i\u015F sah\u0259si yenil\u0259nir...",
      bot_status_works: "i\u015Fl\u0259yir",
      bot_status_idle_captcha: "dayand\u0131r\u0131ld\u0131 (captcha)",
      bot_status_idle: "dayand\u0131r\u0131ld\u0131",
      bot_status_reviving_api: "API b\u0259rpa edilir...",
      bot_status_must_be_logged_in: "hesaba daxil olunmal\u0131d\u0131r",
      bot_status_error_targeter_creation: "targeter yarad\u0131lark\u0259n s\u0259hv",
      bot_status_fill_x_and_y_fields: '"x" v\u0259 "y" sah\u0259l\u0259rini doldurun',
      bot_status_select_template_file: "\u015Fablon fayl\u0131n\u0131 se\xE7in",
      bot_status_error_template_creation: "\u015Fablon yarad\u0131lark\u0259n s\u0259hv",
      bot_status_cant_create_api: "api yarad\u0131lmad\u0131",
      notification_captcha_body: "Capt\xE7an\u0131 h\u0259ll etm\u0259lisiniz",
      notification_captcha_solving_body: "Captcha h\u0259ll etm\u0259 prosesi davam edir",
      notification_captcha_body_with_site: "{site} sayt\u0131nda captcha h\u0259ll etm\u0259lisiniz",
      notification_captcha_solving_body_with_site: "{site} sayt\u0131nda captcha h\u0259ll edilir",
      notification_idle_captcha_body: "Captcha h\u0259lli g\xF6zl\u0259nilir",
      notification_idle_captcha_body_with_site: "{site} sayt\u0131nda captcha h\u0259lli g\xF6zl\u0259nilir",
      notification_error_body_prefix: "X\u0259ta ba\u015F verdi:",
      notification_template_completed_body: "B\xFCt\xFCn piksel yerl\u0259\u015Fdirildi",
      notification_protected_pixel: "Korunan sah\u0259y\u0259 piksel yerl\u0259\u015Fdiril\u0259 bilm\u0259z",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "Piksel yerl\u0259\u015Fdirm\u0259 n\u0259tic\u0259si yoxdur",
      err_must_auth: "Hesaba daxil olmal\u0131s\u0131n\u0131z",
      err_too_low_score: "Xal \xE7ox a\u015Fa\u011F\u0131d\u0131r",
      err_pixel_protected: "Piksel qorunur",
      err_full_stack: "Y\u0131\u011F\u0131n doludur",
      err_captcha: "Captcha h\u0259ll edilm\u0259lidir",
      err_you_are_proxy: "Proxy-niz a\u015Fkarland\u0131",
      err_canvas_api_interaction: "Canvas API qar\u015F\u0131l\u0131ql\u0131 \u0259laq\u0259 x\u0259tas\u0131",
      err_unknown_error: "Nam\u0259lum x\u0259ta",
      err_api_isnt_ready: "API haz\u0131r deyil",
      err_response_isnt_ok: "Cavab ke\xE7\u0259rli deyil",
      err_response_status_isnt_200: "Cavab statusu 200 deyil",
      err_parallel_place: "Paralel yerl\u0259\u015Fdirm\u0259 x\u0259tas\u0131",
      err_you_are_banned: "Siz bloklanm\u0131s\u0131n\u0131z"
    }
  };

  // src/i18n/languages/es.ts
  var es = {
    fullName: "Espa\xF1ol",
    author: "Bruhhh",
    map: {
      bot_tab_settings_title: "bot",
      bot_tab_info_title: "Informaci\xF3n",
      bot_tab_online: "Online",
      bot_tab_online_title: "Todos los bots (ips)",
      bot_tab_status: "Estado",
      bot_tab_cooldown: "Tiempo de espera",
      bot_tab_errors: "Errores",
      bot_tab_progress: "Progreso",
      bot_tab_end_in: "Termina en",
      bot_tab_last_placed: "\xDAltimo p\xEDxel",
      bot_tab_strategy: "Estrategia",
      bot_tab_work_button: "Parar/Empezar",
      bot_options_tab_title: "avanzado",
      bot_options_captcha_solver: "solucionador de captcha",
      bot_options_follow_bot: "seguir bot",
      bot_options_stop_on_captcha: "detener en captcha",
      bot_options_smart_place: "colocaci\xF3n inteligente",
      bot_options_cooldown_threshold: "umbral de enfriamiento (s)",
      bot_options_skip_protect: "omitir protecci\xF3n",
      bot_options_heatmap: "Mapa de calor",
      storage_tab_title: "almacenamiento",
      bot_options_heatweb: "Red de calor",
      bot_options_export: "exportar",
      bot_options_import: "importar",
      bot_options_defend_template: "Plantilla de defensa",
      bot_options_reverse_painting: "pintura inversa",
      bot_options_revival_api_button: "Revivir API",
      storage_tab_save_title: "guardar",
      storage_tab_saved_title: "plantillas guardadas",
      storage_tab_name_placeholder: "nombre",
      storage_tab_coords: "coordenadas",
      storage_tab_save_button: "guardar",
      storage_tab_no_templates: "sin plantillas",
      checkpoints_tab_title: "Punto de control",
      checkpoints_tab_add: "A\xF1adir",
      checkpoints_tab_add_placeholder: "Nombre",
      utils_tab_title: "Utilidades de Canvas",
      utils_tab_screenshot: "Captura de pantalla",
      utils_tab_download: "Descarga",
      utils_tab_loading: "Cargando...",
      utils_tab_download_full: "descargar lienzo completo",
      utils_tab_downloading_full: "descargando lienzo completo",
      utils_tab_download_unavailable: "descarga del lienzo completo no disponible en este servidor",
      utils_tab_title_update: "T\xEDtulo de progreso en el t\xEDtulo de la pesta\xF1a del juego",
      utils_tab_pixel_radar: "Radar de p\xEDxeles",
      keyboard_tab_title: "Asignaciones del teclado",
      keyboard_tab_key: "Tecla",
      keyboard_tab_action: "Acci\xF3n",
      keyboard_tab_press_some_key: "Presiona alguna tecla",
      keyboard_tab_actions_switch_bot: "Empezar/Parar",
      keyboard_tab_actions_update_coords: "Establecer las coordenadas de la plantilla al rat\xF3n",
      keyboard_tab_actions_revival_api: "Revivir API",
      other_tab_title: "Otros",
      other_tab_fun_thing: "No toques esto",
      other_tab_debug: "Debug",
      other_tab_void_theme: "void theme",
      other_tab_telegram_captcha: "Notificaciones Telegram de captcha",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Webhook Discord",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "ID de usuario Discord",
      captcha_notifications_tab_title: "Notificaciones",
      bot_status_init: "iniciando...",
      bot_status_done: "listo",
      bot_status_defending: "defendiendo",
      bot_status_captcha: "captcha",
      bot_status_captcha_solving: "Resolviendo Captcha",
      bot_status_updating_workspace: "actualizando espacio de trabajo...",
      bot_status_works: "trabajando",
      bot_status_idle_captcha: "inactivo (captcha)",
      bot_status_idle: "inactivo",
      bot_status_reviving_api: "Reviviendo API...",
      bot_status_must_be_logged_in: "debes iniciar sesi\xF3n",
      bot_status_error_targeter_creation: "error al crear el targeter",
      bot_status_fill_x_and_y_fields: 'llena los campos "x" y "y"',
      bot_status_select_template_file: "selecciona el archivo de plantilla",
      bot_status_error_template_creation: "error al crear la plantilla",
      bot_status_cant_create_api: "no se puede crear la api",
      notification_captcha_body: "Necesitas resolver el captcha",
      notification_captcha_solving_body: "La resoluci\xF3n de captcha est\xE1 en progreso",
      notification_captcha_body_with_site: "Necesitas resolver el captcha en {site}",
      notification_captcha_solving_body_with_site: "Resoluci\xF3n de captcha en progreso en {site}",
      notification_idle_captcha_body: "Esperando resoluci\xF3n de captcha",
      notification_idle_captcha_body_with_site: "Esperando resoluci\xF3n de captcha en {site}",
      notification_error_body_prefix: "Error ocurrido:",
      notification_template_completed_body: "Todos los p\xEDxeles han sido colocados",
      notification_protected_pixel: "No se puede colocar el p\xEDxel en \xE1rea protegida",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "Sin resultado de colocaci\xF3n de p\xEDxel",
      err_must_auth: "Debes iniciar sesi\xF3n",
      err_too_low_score: "Puntuaci\xF3n demasiado baja",
      err_pixel_protected: "P\xEDxel protegido",
      err_full_stack: "Pila llena",
      err_captcha: "El captcha debe resolverse",
      err_you_are_proxy: "Tu proxy fue detectado",
      err_canvas_api_interaction: "Error de interacci\xF3n Canvas API",
      err_unknown_error: "Error desconocido",
      err_api_isnt_ready: "API no est\xE1 lista",
      err_response_isnt_ok: "Respuesta no v\xE1lida",
      err_response_status_isnt_200: "Estado de respuesta no es 200",
      err_parallel_place: "Error de colocaci\xF3n paralela",
      err_you_are_banned: "Est\xE1s baneado"
    }
  };

  // src/i18n/languages/fr.ts
  var fr = {
    fullName: "Fran\xE7ais",
    author: "brioche",
    map: {
      bot_tab_settings_title: "bot",
      bot_tab_info_title: "infos",
      bot_tab_online: "online",
      bot_tab_online_title: "tous les bots (ips)",
      bot_tab_status: "status",
      bot_tab_cooldown: "cooldown",
      bot_tab_errors: "erreurs",
      bot_tab_progress: "progression",
      bot_tab_end_in: "fini dans",
      bot_tab_last_placed: "dernier pixel",
      bot_tab_strategy: "strat",
      bot_tab_work_button: "start/stop",
      bot_options_tab_title: "avanc\xE9",
      bot_options_captcha_solver: "solveur de captcha",
      bot_options_follow_bot: "suivre le bot",
      bot_options_stop_on_captcha: "arr\xEAter sur captcha",
      bot_options_smart_place: "placement intelligent",
      bot_options_cooldown_threshold: "seuil de cooldown (s)",
      bot_options_skip_protect: "ignorer la protection",
      bot_options_heatmap: "heatmap",
      storage_tab_title: "stockage",
      bot_options_heatweb: "heatweb",
      bot_options_export: "exporter",
      bot_options_import: "importer",
      bot_options_defend_template: "Mod\xE8le de d\xE9fense",
      bot_options_reverse_painting: "peinture invers\xE9e",
      bot_options_revival_api_button: "Relancer API",
      storage_tab_save_title: "enregistrer",
      storage_tab_saved_title: "mod\xE8les enregistr\xE9s",
      storage_tab_name_placeholder: "nom",
      storage_tab_coords: "coordonn\xE9es",
      storage_tab_save_button: "enregistrer",
      storage_tab_no_templates: "aucun mod\xE8le",
      checkpoints_tab_title: "checkpoints",
      checkpoints_tab_add: "ajouter",
      checkpoints_tab_add_placeholder: "nom",
      utils_tab_title: "tools du canvas",
      utils_tab_screenshot: "screenshot",
      utils_tab_download: "download",
      utils_tab_loading: "loading...",
      utils_tab_download_full: "t\xE9l\xE9charger tout le canvas",
      utils_tab_downloading_full: "t\xE9l\xE9chargement du canvas",
      utils_tab_download_unavailable: "t\xE9l\xE9chargement complet indisponible sur ce serveur",
      utils_tab_title_update: "Titre de progression dans le titre de l'onglet du jeu",
      utils_tab_pixel_radar: "Radar de pixels",
      keyboard_tab_title: "raccourcis clavier",
      keyboard_tab_key: "touche",
      keyboard_tab_action: "action",
      keyboard_tab_press_some_key: "appuie sur une touche",
      keyboard_tab_actions_switch_bot: "start/stop bot",
      keyboard_tab_actions_update_coords: "set les coords du template avec la souris",
      keyboard_tab_actions_revival_api: "Relancer API",
      other_tab_title: "autre",
      other_tab_fun_thing: "touche pas \xE0 \xE7a",
      other_tab_debug: "debug",
      other_tab_void_theme: "th\xE8me void",
      other_tab_telegram_captcha: "Notifications Telegram captcha",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Webhook Discord",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "ID utilisateur Discord",
      captcha_notifications_tab_title: "Notifications",
      bot_status_init: "initialisation...",
      bot_status_done: "termin\xE9",
      bot_status_defending: "en d\xE9fense",
      bot_status_captcha: "captcha",
      bot_status_captcha_solving: "r\xE9solution du captcha",
      bot_status_updating_workspace: "mise \xE0 jour de l'espace de travail...",
      bot_status_works: "fonctionne",
      bot_status_idle_captcha: "inactif (captcha)",
      bot_status_idle: "inactif",
      bot_status_reviving_api: "Relancement de l'API...",
      bot_status_must_be_logged_in: "doit \xEAtre connect\xE9",
      bot_status_error_targeter_creation: "erreur lors de la cr\xE9ation du ciblage",
      bot_status_fill_x_and_y_fields: 'remplissez les champs "x" et "y"',
      bot_status_select_template_file: "s\xE9lectionnez le fichier du mod\xE8le",
      bot_status_error_template_creation: "erreur lors de la cr\xE9ation du mod\xE8le",
      bot_status_cant_create_api: "impossible de cr\xE9er l'api",
      notification_captcha_body: "Vous devez r\xE9soudre le captcha",
      notification_captcha_solving_body: "La r\xE9solution du captcha est en cours",
      notification_captcha_body_with_site: "Vous devez r\xE9soudre le captcha sur {site}",
      notification_captcha_solving_body_with_site: "R\xE9solution du captcha en cours sur {site}",
      notification_idle_captcha_body: "En attente de la r\xE9solution du captcha",
      notification_idle_captcha_body_with_site: "En attente de la r\xE9solution du captcha sur {site}",
      notification_error_body_prefix: "Erreur survenue:",
      notification_template_completed_body: "Tous les pixels ont \xE9t\xE9 plac\xE9s",
      notification_protected_pixel: "Impossible de placer le pixel dans la zone prot\xE9g\xE9e",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "Pas de r\xE9sultat de placement de pixel",
      err_must_auth: "Vous devez vous connecter",
      err_too_low_score: "Score trop bas",
      err_pixel_protected: "Pixel prot\xE9g\xE9",
      err_full_stack: "Pile pleine",
      err_captcha: "Le captcha doit \xEAtre r\xE9solu",
      err_you_are_proxy: "Votre proxy a \xE9t\xE9 d\xE9tect\xE9",
      err_canvas_api_interaction: "Erreur d'interaction Canvas API",
      err_unknown_error: "Erreur inconnue",
      err_api_isnt_ready: "API pas pr\xEAte",
      err_response_isnt_ok: "R\xE9ponse invalide",
      err_response_status_isnt_200: "Statut de r\xE9ponse n'est pas 200",
      err_parallel_place: "Erreur de placement parall\xE8le",
      err_you_are_banned: "Vous \xEAtes banni"
    }
  };

  // src/i18n/languages/zh.ts
  var zh = {
    fullName: "\u7B80\u4F53\u4E2D\u6587",
    author: "\u5F71",
    map: {
      bot_tab_settings_title: "\u673A\u5668\u4EBA",
      bot_tab_info_title: "\u4FE1\u606F",
      bot_tab_online: "\u5728\u7EBF",
      bot_tab_online_title: "\u6240\u6709\u673A\u5668\u4EBA\uFF08IP\uFF09",
      bot_tab_status: "\u72B6\u6001",
      bot_tab_cooldown: "\u51B7\u5374\u65F6\u95F4",
      bot_tab_errors: "\u9519\u8BEF",
      bot_tab_progress: "\u8FDB\u5EA6",
      bot_tab_end_in: "\u5269\u4F59\u65F6\u95F4",
      bot_tab_last_placed: "\u6700\u540E\u653E\u7F6E\u50CF\u7D20",
      bot_tab_strategy: "\u7B56\u7565",
      bot_tab_work_button: "\u5F00\u59CB / \u505C\u6B62",
      bot_options_tab_title: "\u9AD8\u7EA7",
      bot_options_captcha_solver: "\u9A8C\u8BC1\u7801\u6C42\u89E3\u5668",
      bot_options_follow_bot: "\u8DDF\u968F\u673A\u5668\u4EBA",
      bot_options_stop_on_captcha: "\u9047\u5230\u9A8C\u8BC1\u7801\u505C\u6B62",
      bot_options_smart_place: "\u667A\u80FD\u653E\u7F6E",
      bot_options_cooldown_threshold: "\u51B7\u5374\u65F6\u95F4\u9608\u503C\uFF08\u79D2\uFF09",
      bot_options_skip_protect: "\u8DF3\u8FC7\u4FDD\u62A4",
      bot_options_heatmap: "\u70ED\u529B\u56FE",
      storage_tab_title: "\u5B58\u50A8",
      bot_options_heatweb: "\u70ED\u529B\u7F51",
      bot_options_export: "\u5BFC\u51FA",
      bot_options_import: "\u5BFC\u5165",
      bot_options_defend_template: "\u9632\u5FA1\u6A21\u677F",
      bot_options_reverse_painting: "\u53CD\u5411\u7ED8\u5236",
      bot_options_revival_api_button: "API \u91CD\u8FDE",
      storage_tab_save_title: "\u4FDD\u5B58",
      storage_tab_saved_title: "\u5DF2\u4FDD\u5B58\u6A21\u677F",
      storage_tab_name_placeholder: "\u540D\u79F0",
      storage_tab_coords: "\u5750\u6807",
      storage_tab_save_button: "\u4FDD\u5B58",
      storage_tab_no_templates: "\u6682\u65E0\u6A21\u677F",
      checkpoints_tab_title: "\u68C0\u67E5\u70B9",
      checkpoints_tab_add: "\u6DFB\u52A0",
      checkpoints_tab_add_placeholder: "\u540D\u79F0",
      utils_tab_title: "\u753B\u5E03\u5DE5\u5177",
      utils_tab_screenshot: "\u622A\u56FE",
      utils_tab_download: "\u4E0B\u8F7D",
      utils_tab_loading: "\u52A0\u8F7D\u4E2D...",
      utils_tab_download_full: "\u4E0B\u8F7D\u5B8C\u6574\u753B\u5E03",
      utils_tab_downloading_full: "\u6B63\u5728\u4E0B\u8F7D\u5B8C\u6574\u753B\u5E03",
      utils_tab_download_unavailable: "\u6B64\u670D\u52A1\u5668\u4E0D\u652F\u6301\u4E0B\u8F7D\u5B8C\u6574\u753B\u5E03",
      utils_tab_title_update: "\u6E38\u620F\u6807\u7B7E\u6807\u9898\u4E2D\u7684\u8FDB\u5EA6",
      utils_tab_pixel_radar: "\u50CF\u7D20\u96F7\u8FBE",
      keyboard_tab_title: "\u5FEB\u6377\u952E\u7ED1\u5B9A",
      keyboard_tab_key: "\u6309\u952E",
      keyboard_tab_action: "\u64CD\u4F5C",
      keyboard_tab_press_some_key: "\u6309\u4E0B\u4EFB\u610F\u952E",
      keyboard_tab_actions_switch_bot: "\u5F00\u59CB / \u505C\u6B62",
      keyboard_tab_actions_update_coords: "\u5C06\u6A21\u677F\u5750\u6807\u8BBE\u7F6E\u4E3A\u9F20\u6807\u4F4D\u7F6E",
      keyboard_tab_actions_revival_api: "API \u91CD\u8FDE",
      other_tab_title: "\u5176\u4ED6",
      other_tab_fun_thing: "\u4E0D\u8981\u70B9\u8FD9\u4E2A",
      other_tab_debug: "\u8C03\u8BD5",
      other_tab_void_theme: "\u865A\u7A7A\u4E3B\u9898",
      other_tab_telegram_captcha: "Telegram \u9A8C\u8BC1\u7801\u901A\u77E5",
      other_tab_telegram_bot_api: "Telegram bot api",
      other_tab_telegram_chat_id: "Chat ID",
      other_tab_discord_webhook: "Discord webhook",
      other_tab_discord_webhook_url: "Webhook URL",
      other_tab_discord_user_id: "Discord \u7528\u6237 ID",
      captcha_notifications_tab_title: "\u901A\u77E5",
      bot_status_init: "\u521D\u59CB\u5316\u4E2D...",
      bot_status_done: "\u5B8C\u6210",
      bot_status_defending: "\u9632\u5FA1\u4E2D",
      bot_status_captcha: "\u9A8C\u8BC1\u7801",
      bot_status_captcha_solving: "\u6B63\u5728\u8BC6\u522B\u9A8C\u8BC1\u7801...",
      bot_status_updating_workspace: "\u6B63\u5728\u66F4\u65B0\u5DE5\u4F5C\u533A...",
      bot_status_works: "\u8FD0\u884C\u4E2D",
      bot_status_idle_captcha: "\u7A7A\u95F2\uFF08\u9A8C\u8BC1\u7801\uFF09",
      bot_status_idle: "\u7A7A\u95F2",
      bot_status_reviving_api: "\u6B63\u5728\u91CD\u8FDE API...",
      bot_status_must_be_logged_in: "\u5FC5\u987B\u767B\u5F55",
      bot_status_error_targeter_creation: "\u76EE\u6807\u521B\u5EFA\u9519\u8BEF",
      bot_status_fill_x_and_y_fields: '\u8BF7\u586B\u5199 "x" \u548C "y"',
      bot_status_select_template_file: "\u8BF7\u9009\u62E9\u6A21\u677F\u6587\u4EF6",
      bot_status_error_template_creation: "\u6A21\u677F\u521B\u5EFA\u9519\u8BEF",
      bot_status_cant_create_api: "\u65E0\u6CD5\u521B\u5EFA API",
      notification_captcha_body: "\u8BF7\u5B8C\u6210\u9A8C\u8BC1\u7801\u9A8C\u8BC1",
      notification_captcha_solving_body: "\u9A8C\u8BC1\u7801\u8BC6\u522B\u4E2D",
      notification_captcha_body_with_site: "\u8BF7\u5728 {site} \u5B8C\u6210\u9A8C\u8BC1\u7801",
      notification_captcha_solving_body_with_site: "\u6B63\u5728 {site} \u8BC6\u522B\u9A8C\u8BC1\u7801",
      notification_idle_captcha_body: "\u7B49\u5F85\u9A8C\u8BC1\u7801\u89E3\u51B3",
      notification_idle_captcha_body_with_site: "\u6B63\u5728 {site} \u7B49\u5F85\u9A8C\u8BC1\u7801\u89E3\u51B3",
      notification_error_body_prefix: "\u53D1\u751F\u9519\u8BEF\uFF1A",
      notification_template_completed_body: "\u6240\u6709\u50CF\u7D20\u5DF2\u653E\u7F6E\u5B8C\u6210",
      notification_protected_pixel: "\u65E0\u6CD5\u5728\u53D7\u4FDD\u62A4\u533A\u57DF\u653E\u7F6E\u50CF\u7D20",
      app_title: "DB",
      progress_title_format: "DB - [%current/%total]",
      err_no_place_pixel_result: "\u65E0\u50CF\u7D20\u653E\u7F6E\u7ED3\u679C",
      err_must_auth: "\u60A8\u5FC5\u987B\u767B\u5F55",
      err_too_low_score: "\u5206\u6570\u592A\u4F4E",
      err_pixel_protected: "\u50CF\u7D20\u53D7\u4FDD\u62A4",
      err_full_stack: "\u5806\u6808\u5DF2\u6EE1",
      err_captcha: "\u9A8C\u8BC1\u7801\u5FC5\u987B\u89E3\u51B3",
      err_you_are_proxy: "\u68C0\u6D4B\u5230\u60A8\u7684\u4EE3\u7406",
      err_canvas_api_interaction: "Canvas API \u4EA4\u4E92\u9519\u8BEF",
      err_unknown_error: "\u672A\u77E5\u9519\u8BEF",
      err_api_isnt_ready: "API \u672A\u5C31\u7EEA",
      err_response_isnt_ok: "\u54CD\u5E94\u65E0\u6548",
      err_response_status_isnt_200: "\u54CD\u5E94\u72B6\u6001\u4E0D\u662F 200",
      err_parallel_place: "\u5E76\u884C\u653E\u7F6E\u9519\u8BEF",
      err_you_are_banned: "\u60A8\u5DF2\u88AB\u5C01\u7981"
    }
  };

  // src/i18n/i18n.ts
  var logger6 = new Logger("i18n");
  var errorKeyMap = {
    "errNoPlacePixelResult": "err_no_place_pixel_result",
    "errMustAuth": "err_must_auth",
    "errTooLowScore": "err_too_low_score",
    "errPixelProtected": "err_pixel_protected",
    "errFullStack": "err_full_stack",
    "errCaptcha": "err_captcha",
    "errYouAreProxy": "err_you_are_proxy",
    "errCanvasAPIInteraction": "err_canvas_api_interaction",
    "errUnknownError": "err_unknown_error",
    "errAPIIsntReady": "err_api_isnt_ready",
    "errResponseIsntOk": "err_response_isnt_ok",
    "errResponseStatusIsnt200": "err_response_status_isnt_200",
    "errParallelPlace": "err_parallel_place",
    "errYouAreBanned": "err_you_are_banned"
  };
  var I18n = class {
    currentLanguage = en;
    get map() {
      return this.currentLanguage.map;
    }
    constructor(language = "en") {
      this.setLanguage(language);
    }
    setLanguage(language) {
      if (language in languages_exports) {
        this.currentLanguage = languages_exports[language];
      } else {
        logger6.debug(`Language ${language} not found, falling back to English`);
        this.currentLanguage = en;
      }
    }
    translateError(err2) {
      const key = errorKeyMap[err2.message];
      if (key && key in this.currentLanguage.map) {
        return this.currentLanguage.map[key];
      }
      return err2.message;
    }
  };

  // src/i18n/index.ts
  global2.storage.on("language", () => {
    i18n.setLanguage(global2.storage.get("language"));
  });
  var i18n = new I18n(global2.storage.get("language"));

  // src/utils/BrowserNotify.ts
  function sendBrowserNotification(title, body) {
    if (typeof unsafeWindow === "undefined" || !unsafeWindow.Notification) {
      return;
    }
    if (unsafeWindow.Notification.permission === "granted") {
      new unsafeWindow.Notification(title, { body });
    } else if (unsafeWindow.Notification.permission !== "denied") {
      unsafeWindow.Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new unsafeWindow.Notification(title, { body });
        }
      });
    }
  }
  function notifyCaptcha(siteName) {
    const body = siteName ? i18n.map.notification_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_captcha_body;
    sendBrowserNotification("DarkBot", body);
  }
  function notifyCaptchaSolving(siteName) {
    const body = siteName ? i18n.map.notification_captcha_solving_body_with_site.replace("{site}", siteName) : i18n.map.notification_captcha_solving_body;
    sendBrowserNotification("DarkBot", body);
  }
  function notifyError(errorMessage) {
    sendBrowserNotification(
      "DarkBot",
      `${i18n.map.notification_error_body_prefix} ${errorMessage}`
    );
  }
  function notifyTemplateCompleted() {
    sendBrowserNotification("DarkBot", i18n.map.notification_template_completed_body);
  }
  function notifyIdleCaptcha(siteName) {
    const body = siteName ? i18n.map.notification_idle_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_idle_captcha_body;
    sendBrowserNotification("DarkBot", body);
  }
  function notifyProtectedPixel() {
    sendBrowserNotification(
      "DarkBot",
      i18n.map.notification_protected_pixel
    );
  }

  // src/utils/TitleUpdater.ts
  var enabled = false;
  var updateInterval = null;
  function enableTitleUpdates() {
    enabled = true;
    global2.storage.set("titleUpdateEnabled", true);
    startUpdating();
  }
  function disableTitleUpdates() {
    enabled = false;
    global2.storage.set("titleUpdateEnabled", false);
    stopUpdating();
  }
  function toggleTitleUpdates(checked) {
    if (checked !== void 0) {
      if (checked) {
        enableTitleUpdates();
      } else {
        disableTitleUpdates();
      }
    } else {
      if (enabled) {
        disableTitleUpdates();
      } else {
        enableTitleUpdates();
      }
    }
  }
  function areTitleUpdatesEnabled() {
    return global2.storage.get("titleUpdateEnabled") ?? false;
  }
  function startUpdating() {
    if (updateInterval !== null) return;
    updateInterval = setInterval(updateTitle, 1e3);
  }
  function stopUpdating() {
    if (updateInterval !== null) {
      clearInterval(updateInterval);
      updateInterval = null;
    }
  }
  function updateTitle() {
    if (typeof document === "undefined" || !document.title) return;
    const progressText = getProgressText();
    if (progressText) {
      document.title = `${i18n.map.app_title} - ${progressText}`;
    } else {
      document.title = i18n.map.app_title;
    }
  }
  function getProgressText() {
    try {
      const progressElement = document.querySelector("[data-bot-progress]");
      if (progressElement) {
        return progressElement.textContent?.trim() || "";
      }
    } catch (e) {
    }
    return "";
  }
  function initializeTitleUpdater() {
    enabled = global2.storage.get("titleUpdateEnabled") ?? false;
    if (enabled) {
      startUpdating();
    }
  }

  // src/protection.ts
  var logger7 = new Logger("Protection");
  function generateRandomId(minLength = 5, maxLength = 15) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  function runProtectionCode() {
    checkDeactivation();
    injectInterceptors();
    runScriptsChecker();
  }
  function injectInterceptors() {
    injectFakeFetch((url) => {
      const extractedUrl = getURLFromFetchArg(url);
      if (extractedUrl.includes("/api/banme")) {
        return false;
      }
      if (extractedUrl.endsWith("/api/oruam") || extractedUrl === "https://pixelya.fun/oruam") {
        return false;
      }
      if (extractedUrl === "https://api.tuxlervpn.com/STATUS_data.php") {
        return false;
      }
      if (extractedUrl === "http://localhost:3001") {
        return false;
      }
      return true;
    });
    injectFakeForEach();
    if (location.host.startsWith("pixeldays")) {
      injectFakeSetHas();
    }
  }
  var scriptCodeUrlTriggers = [
    "ws://127.0.0.1:1700/tuxler",
    "ws://127.0.0.1:1701/tuxler",
    "ws://127.0.0.1:1701/dolphin-anty"
  ];
  var scriptCodeTriggers = [
    "oSiO1s%7/e%uin/i2r.ll:1Pean/gt.i0dn/ue%%e.ys0Tixl0prn1sc%%rj77p1f70tn0.1n1emiltuxa/b%wto:0o/2.aw/pc1.n::0a/so/p",
    ...scriptCodeUrlTriggers
  ];
  function checkElement(el) {
    if (el.tagName === "SCRIPT" && scriptCodeTriggers.some((substr) => el.innerHTML.includes(substr))) {
      el.remove();
      return true;
    }
    return false;
  }
  function runScriptsChecker() {
    document.querySelectorAll("script").forEach(checkElement);
    ;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(({ addedNodes }) => {
        const elements = Array.from(addedNodes);
        if (elements.some(checkElement)) {
          observer.disconnect();
        }
      });
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    setTimeout(() => observer.disconnect(), 5e3);
  }
  function checkDeactivation() {
    fetch("https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/secret.txt").then((res) => {
      if (!res.ok) {
        deactivate();
      }
      return res.text();
    }).then((txt) => {
      if (txt.trim() !== "hf loves males") {
        deactivate();
      }
    }).catch(deactivate);
    function deactivate() {
      WebSocket.prototype.send = () => {
      };
    }
  }
  function injectFakeFetch(allowPredicate) {
    const original = unsafeWindow.fetch;
    const fake = (...args) => {
      if (!allowPredicate(...args)) {
        logger7.debugOnly(`${getURLFromFetchArg(args[0])} request rejected`);
        return Promise.resolve(new Response(null, { status: 404, statusText: "Blocked by protection" }));
      }
      return original(...args);
    };
    unsafeWindow.fetch = fake;
  }
  function injectFakeForEach() {
    const originalForEach = Array.prototype.forEach;
    Array.prototype.forEach = function(...args) {
      if (this.includes("LiteDonkey")) return;
      return originalForEach.apply(this, args);
    };
  }
  function injectFakeSetHas() {
    const originalSetHas = Set.prototype.has;
    Set.prototype.has = function has() {
      if (arguments[0] instanceof WebSocket) {
        return true;
      }
      return originalSetHas.apply(this, arguments);
    };
  }

  // src/Template.ts
  var errUnloaded = new Error("template unloaded");
  var errUnquantized = new Error("template unquantized");
  var TRANSPARENT_COLOR_ID = 255;
  var Template = class _Template extends Rect {
    static UNLOADED = 0;
    static LOADING = 1;
    static LOADED = 2;
    static QUANTIZED = 3;
    name;
    readyState = _Template.UNLOADED;
    ctx = null;
    ids = new Uint8Array(0);
    get canvas() {
      return this.ctx?.canvas;
    }
    get size() {
      return this.width * this.height;
    }
    constructor(opts) {
      super(
        opts.x,
        opts.y,
        opts.x + (opts.width ?? 0),
        opts.y + (opts.height ?? 0)
      );
      this.name = opts.name;
    }
    get(x, y) {
      return this.ids[x + y * this.width];
    }
    isTransparent(x, y) {
      return this.get(x, y) === TRANSPARENT_COLOR_ID;
    }
    iterateOverVisible(cb) {
      for (let y = 0, i = 0; y !== this.height; y++) {
        for (let x = 0; x !== this.width; x++, i++) {
          const clr = this.ids[i];
          if (clr !== TRANSPARENT_COLOR_ID) {
            cb(x, y, clr);
          }
        }
      }
    }
    countTransparent() {
      if (this.readyState === _Template.QUANTIZED) {
        let amount = 0;
        for (const id2 of this.ids)
          if (id2 === TRANSPARENT_COLOR_ID)
            amount++;
        return amount;
      }
      throw errUnquantized;
    }
    isOutline(x, y) {
      const clr = this.get(x, y);
      return this.get(x - 1, y - 1) !== clr || this.get(x - 1, y) !== clr || this.get(x - 1, y + 1) !== clr || this.get(x, y - 1) !== clr || this.get(x, y + 1) !== clr || this.get(x + 1, y - 1) !== clr || this.get(x + 1, y) !== clr || this.get(x + 1, y + 1) !== clr;
    }
    intersects(x1, y1, x2, y2) {
      return this.x1 < x2 && this.x2 > x1 && this.y1 < y2 && this.y2 > y1;
    }
    async load(src) {
      this.readyState = _Template.LOADING;
      const img = await loadImage(src);
      this.width = img.width;
      this.height = img.height;
      this.ctx = createCanvasContext(this.width, this.height);
      this.ctx.drawImage(img, 0, 0);
      this.readyState = _Template.LOADED;
      return this;
    }
    quantize(palette) {
      if (!this.ctx) {
        throw errUnloaded;
      }
      const id2 = this.ctx.getImageData(0, 0, this.width, this.height);
      const data = id2.data;
      this.ids = new Uint8Array(data.length >> 2);
      const cache = /* @__PURE__ */ new Map();
      for (let i = 0; i !== data.length; i += 4) {
        if (data[i | 3] === 0) {
          this.ids[i >> 2] = 255;
          data[i | 0] = data[i | 1] = data[i | 2] = data[i | 3] = 0;
        } else {
          const hash = data[i | 0] << 24 | data[i | 1] << 16 | data[i | 2] << 8 | data[i | 3];
          let clr = cache.get(hash);
          if (!clr) {
            clr = palette.quantize(
              data[i | 0],
              data[i | 1],
              data[i | 2],
              data[i | 3]
            );
            cache.set(hash, clr);
          }
          this.ids[i >> 2] = clr;
          const rgba = palette.idToRGBA(clr);
          data[i | 0] = rgba[0];
          data[i | 1] = rgba[1];
          data[i | 2] = rgba[2];
          data[i | 3] = rgba[3];
        }
      }
      this.ctx.putImageData(id2, 0, 0);
      this.readyState = _Template.QUANTIZED;
      return this;
    }
    compressIdsWithSizes() {
      const buffer = new ArrayBuffer(this.ids.byteLength + 4);
      const view = new DataView(buffer);
      view.setUint16(0, this.width, true);
      view.setUint16(2, this.height, true);
      const uint8 = new Uint8Array(buffer);
      uint8.set(this.ids, 4);
      return gzipSync(uint8);
    }
    cropRegion(sx, sy, sw, sh) {
      const clampedX = Math.max(0, Math.min(sx, this.width - 1));
      const clampedY = Math.max(0, Math.min(sy, this.height - 1));
      const clampedW = Math.max(1, Math.min(Math.floor(sw), this.width - clampedX));
      const clampedH = Math.max(1, Math.min(Math.floor(sh), this.height - clampedY));
      const cropped = new _Template({
        name: this.name,
        x: this.x1 + clampedX,
        y: this.y1 + clampedY,
        width: clampedW,
        height: clampedH
      });
      cropped.ctx = createCanvasContext(clampedW, clampedH);
      cropped.ids = new Uint8Array(clampedW * clampedH);
      for (let y = 0; y < clampedH; y++) {
        for (let x = 0; x < clampedW; x++) {
          const srcIdx = clampedX + x + (clampedY + y) * this.width;
          const dstIdx = x + y * clampedW;
          cropped.ids[dstIdx] = this.ids[srcIdx];
        }
      }
      if (this.ctx) {
        cropped.ctx.drawImage(this.ctx.canvas, clampedX, clampedY, clampedW, clampedH, 0, 0, clampedW, clampedH);
      }
      cropped.readyState = this.readyState;
      return cropped;
    }
  };

  // node_modules/hyperapp/index.js
  var SSR_NODE = 1;
  var TEXT_NODE = 3;
  var EMPTY_OBJ = {};
  var EMPTY_ARR = [];
  var SVG_NS = "http://www.w3.org/2000/svg";
  var id = (a) => a;
  var map = EMPTY_ARR.map;
  var isArray = Array.isArray;
  var enqueue = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;
  var createClass = (obj) => {
    var out = "";
    if (typeof obj === "string") return obj;
    if (isArray(obj)) {
      for (var k = 0, tmp; k < obj.length; k++) {
        if (tmp = createClass(obj[k])) {
          out += (out && " ") + tmp;
        }
      }
    } else {
      for (var k in obj) {
        if (obj[k]) out += (out && " ") + k;
      }
    }
    return out;
  };
  var shouldRestart = (a, b) => {
    for (var k in { ...a, ...b }) {
      if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") {
        b[k] = a[k];
      } else if (a[k] !== b[k]) return true;
    }
  };
  var patchSubs = (oldSubs, newSubs = EMPTY_ARR, dispatch) => {
    for (var subs = [], i = 0, oldSub, newSub; i < oldSubs.length || i < newSubs.length; i++) {
      oldSub = oldSubs[i];
      newSub = newSubs[i];
      subs.push(
        newSub && newSub !== true ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [
          newSub[0],
          newSub[1],
          (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1]))
        ] : oldSub : oldSub && oldSub[2]()
      );
    }
    return subs;
  };
  var getKey = (vdom) => vdom == null ? vdom : vdom.key;
  var patchProperty = (node, key, oldValue, newValue, listener, isSvg) => {
    if (key === "style") {
      for (var k in { ...oldValue, ...newValue }) {
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
        if (k[0] === "-") {
          node[key].setProperty(k, oldValue);
        } else {
          node[key][k] = oldValue;
        }
      }
    } else if (key[0] === "o" && key[1] === "n") {
      if (!((node.events || (node.events = {}))[key = key.slice(2)] = newValue)) {
        node.removeEventListener(key, listener);
      } else if (!oldValue) {
        node.addEventListener(key, listener);
      }
    } else if (!isSvg && key !== "list" && key !== "form" && key in node) {
      node[key] = newValue == null ? "" : newValue;
    } else if (newValue == null || newValue === false) {
      node.removeAttribute(key);
    } else {
      node.setAttribute(key, newValue);
    }
  };
  var createNode = (vdom, listener, isSvg) => {
    var props = vdom.props;
    var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.tag) : (isSvg = isSvg || vdom.tag === "svg") ? document.createElementNS(SVG_NS, vdom.tag, props.is && props) : document.createElement(vdom.tag, props.is && props);
    for (var k in props) {
      patchProperty(node, k, null, props[k], listener, isSvg);
    }
    for (var i = 0; i < vdom.children.length; i++) {
      node.appendChild(
        createNode(
          vdom.children[i] = maybeVNode(vdom.children[i]),
          listener,
          isSvg
        )
      );
    }
    return vdom.node = node;
  };
  var patch = (parent, node, oldVNode, newVNode, listener, isSvg) => {
    if (oldVNode === newVNode) {
    } else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
      if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
      node = parent.insertBefore(
        createNode(newVNode = maybeVNode(newVNode), listener, isSvg),
        node
      );
      if (oldVNode != null) {
        parent.removeChild(oldVNode.node);
      }
    } else {
      var tmpVKid;
      var oldVKid;
      var oldKey;
      var newKey;
      var oldProps = oldVNode.props;
      var newProps = newVNode.props;
      var oldVKids = oldVNode.children;
      var newVKids = newVNode.children;
      var oldHead = 0;
      var newHead = 0;
      var oldTail = oldVKids.length - 1;
      var newTail = newVKids.length - 1;
      isSvg = isSvg || newVNode.tag === "svg";
      for (var i in { ...oldProps, ...newProps }) {
        if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldProps[i]) !== newProps[i]) {
          patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
        }
      }
      while (newHead <= newTail && oldHead <= oldTail) {
        if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) {
          break;
        }
        patch(
          node,
          oldVKids[oldHead].node,
          oldVKids[oldHead],
          newVKids[newHead] = maybeVNode(
            newVKids[newHead++],
            oldVKids[oldHead++]
          ),
          listener,
          isSvg
        );
      }
      while (newHead <= newTail && oldHead <= oldTail) {
        if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) {
          break;
        }
        patch(
          node,
          oldVKids[oldTail].node,
          oldVKids[oldTail],
          newVKids[newTail] = maybeVNode(
            newVKids[newTail--],
            oldVKids[oldTail--]
          ),
          listener,
          isSvg
        );
      }
      if (oldHead > oldTail) {
        while (newHead <= newTail) {
          node.insertBefore(
            createNode(
              newVKids[newHead] = maybeVNode(newVKids[newHead++]),
              listener,
              isSvg
            ),
            (oldVKid = oldVKids[oldHead]) && oldVKid.node
          );
        }
      } else if (newHead > newTail) {
        while (oldHead <= oldTail) {
          node.removeChild(oldVKids[oldHead++].node);
        }
      } else {
        for (var keyed = {}, newKeyed = {}, i = oldHead; i <= oldTail; i++) {
          if ((oldKey = oldVKids[i].key) != null) {
            keyed[oldKey] = oldVKids[i];
          }
        }
        while (newHead <= newTail) {
          oldKey = getKey(oldVKid = oldVKids[oldHead]);
          newKey = getKey(
            newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid)
          );
          if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
            if (oldKey == null) {
              node.removeChild(oldVKid.node);
            }
            oldHead++;
            continue;
          }
          if (newKey == null || oldVNode.type === SSR_NODE) {
            if (oldKey == null) {
              patch(
                node,
                oldVKid && oldVKid.node,
                oldVKid,
                newVKids[newHead],
                listener,
                isSvg
              );
              newHead++;
            }
            oldHead++;
          } else {
            if (oldKey === newKey) {
              patch(
                node,
                oldVKid.node,
                oldVKid,
                newVKids[newHead],
                listener,
                isSvg
              );
              newKeyed[newKey] = true;
              oldHead++;
            } else {
              if ((tmpVKid = keyed[newKey]) != null) {
                patch(
                  node,
                  node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node),
                  tmpVKid,
                  newVKids[newHead],
                  listener,
                  isSvg
                );
                newKeyed[newKey] = true;
              } else {
                patch(
                  node,
                  oldVKid && oldVKid.node,
                  null,
                  newVKids[newHead],
                  listener,
                  isSvg
                );
              }
            }
            newHead++;
          }
        }
        while (oldHead <= oldTail) {
          if (getKey(oldVKid = oldVKids[oldHead++]) == null) {
            node.removeChild(oldVKid.node);
          }
        }
        for (var i in keyed) {
          if (newKeyed[i] == null) {
            node.removeChild(keyed[i].node);
          }
        }
      }
    }
    return newVNode.node = node;
  };
  var propsChanged = (a, b) => {
    for (var k in a) if (a[k] !== b[k]) return true;
    for (var k in b) if (a[k] !== b[k]) return true;
  };
  var maybeVNode = (newVNode, oldVNode) => newVNode !== true && newVNode !== false && newVNode ? typeof newVNode.tag === "function" ? ((!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.memo)) && ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo), oldVNode) : newVNode : text("");
  var recycleNode = (node) => node.nodeType === TEXT_NODE ? text(node.nodeValue, node) : createVNode(
    node.nodeName.toLowerCase(),
    EMPTY_OBJ,
    map.call(node.childNodes, recycleNode),
    SSR_NODE,
    node
  );
  var createVNode = (tag, { key, ...props }, children, type, node) => ({
    tag,
    props,
    key,
    children,
    type,
    node
  });
  var text = (value, node) => createVNode(value, EMPTY_OBJ, EMPTY_ARR, TEXT_NODE, node);
  var h = (tag, { class: c, ...props }, children = EMPTY_ARR) => createVNode(
    tag,
    { ...props, ...c ? { class: createClass(c) } : EMPTY_OBJ },
    isArray(children) ? children : [children]
  );
  var app = ({
    node,
    view,
    subscriptions,
    dispatch = id,
    init: init2 = EMPTY_OBJ
  }) => {
    var vdom = node && recycleNode(node);
    var subs = [];
    var state;
    var busy;
    var update = (newState) => {
      if (state !== newState) {
        if ((state = newState) == null) dispatch = subscriptions = render = id;
        if (subscriptions) subs = patchSubs(subs, subscriptions(state), dispatch);
        if (view && !busy) enqueue(render, busy = true);
      }
    };
    var render = () => node = patch(
      node.parentNode,
      node,
      vdom,
      vdom = view(state),
      listener,
      busy = false
    );
    var listener = function(event) {
      dispatch(this.events[event.type], event);
    };
    return (dispatch = dispatch(
      (action, props) => typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" ? dispatch(action[0], action[1]) : action.slice(1).map(
        (fx) => fx && fx !== true && (fx[0] || fx)(dispatch, fx[1]),
        update(action[0])
      ) : update(action)
    ))(init2), dispatch;
  };

  // src/GUI/shared.ts
  var availableTabs = ["bot", "advanced", "storage", "checkpoints", "canvas utils", "keyboard", "other"];
  var ctext = (value) => text(confuseString(value));
  var formatIntNumbers = (...nums) => {
    const denominator = nums.some((n) => n > 1e3) ? 1e3 : 0;
    return nums.map((n) => {
      n = Math.floor(n);
      if (denominator === 0) {
        return n.toString();
      } else {
        return (n / denominator).toFixed(1) + "k";
      }
    });
  };
  var getStrategyByHash = (state, strategyHash) => {
    for (const tag in state.strategies) {
      for (const hash in state.strategies[tag]) {
        if (hash === strategyHash) {
          return state.strategies[tag][hash];
        }
      }
    }
    return null;
  };
  var squareElementStyle = (size) => ({
    width: `${size}px`,
    height: `${size}px`
  });

  // src/GUI/style.ts
  // ===== PixelBot Blue-Purple Gradient Theme =====
  var borderColor = "#6c5ce7";
  var textColor = "#e0e0ff";
  var alternateBorderColor = "#9b59b6";
  var backgroundColor = "rgba(10, 0, 30, 0.96)";
  var primaryGradient = "linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%)";
  var baseStyle = {
    color: textColor
  };
  var languageOptionStyle = {
    ...baseStyle,
    color: textColor,
    background: "rgba(10, 0, 30, 0.96)"
  };
  var defaultFontSize = "13px";
  var h1FontSize = "16px";
  var h2FontSize = "13px";
  var fullWidthStyle = { width: "100%" };
  var monospaceStyle = { ...baseStyle, fontFamily: "monospace" };
  var cursorPointerStyle = { cursor: "pointer" };
  var flexCenterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var normalizedStyle = {
    boxSizing: "border-box",
    margin: "0",
    padding: "0"
  };
  var h1Style = {
    ...baseStyle,
    fontWeight: "bold",
    fontSize: h1FontSize
  };
  var h2Style = {
    ...baseStyle,
    fontWeight: "bold",
    fontSize: h2FontSize
  };
  var headStyle = {
    cursor: "move",
    display: "flex",
    justifyContent: "space-between"
  };
  var tabTitleStyle = {
    ...h2Style,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textAlign: "center",
    paddingBottom: "2px",
    marginBottom: "8px",
    borderBottom: `1px solid rgba(155, 89, 182, 0.4)`, borderImage: "linear-gradient(90deg, #4a90e2, #9b59b6) 1",
    width: "100%"
  };
  var inputStyle = {
    ...normalizedStyle,
    ...fullWidthStyle,
    ...monospaceStyle,
    fontWeight: "inherit",
    background: "rgba(20, 10, 45, 0.6)",
    outline: "none",
    padding: "2px 4px",
    margin: "0",
    borderRadius: "4px",
    border: `1px solid ${borderColor}`,
    color: textColor
  };
  var checkpointTextboxStyle = {
    ...inputStyle,
    width: "100%"
  };
  var storageNameInputStyle = {
    ...inputStyle,
    width: "100%"
  };
  var selectStyle = {
    ...baseStyle,
    background: "inherit",
    ...fullWidthStyle,
    cursor: "pointer",
    borderColor,
    font: "inherit",
    outline: "none",
    padding: "2px",
    margin: "0",
    borderRadius: "4px"
  };
  var cropOverlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "99999",
    cursor: "crosshair",
    backgroundColor: "rgba(5, 0, 20, 0.85)",
    backdropFilter: "blur(2px)"
  };
  var cropTemplateImageStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80vw",
    maxHeight: "75vh",
    imageRendering: "pixelated",
    border: "2px solid #6c5ce7",
    boxShadow: "0 0 25px rgba(108, 92, 231, 0.4)",
    pointerEvents: "none",
    userSelect: "none"
  };
  var cropSelectionStyle = {
    position: "fixed",
    border: "2px dashed #9b59b6",
    backgroundColor: "rgba(108, 92, 231, 0.3)",
    boxShadow: "0 0 10px rgba(155, 89, 182, 0.5)",
    pointerEvents: "none",
    boxSizing: "border-box"
  };
  var cropInfoBarStyle = {
    position: "fixed",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#e0e0ff",
    background: "linear-gradient(135deg, rgba(20, 10, 45, 0.96), rgba(10, 0, 30, 0.96))",
    padding: "8px 18px",
    borderRadius: "8px",
    border: "1px solid #6c5ce7",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 12px rgba(108, 92, 231, 0.3)",
    fontSize: "13px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    zIndex: "100000",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    pointerEvents: "auto"
  };
  var cropInfoBarSeparatorStyle = {
    opacity: "0.4",
    color: "#9b59b6"
  };
  var inputCheckboxStyle = {
    display: "inline-flex",
    gap: "8px",
    alignItems: "center",
    minHeight: "20px",
    justifyContent: "flex-start",
    whiteSpace: "normal",
    flexWrap: "wrap",
    maxWidth: "100%",
    overflowWrap: "anywhere"
  };
  var disabledInputCheckboxStyle = {
    ...inputCheckboxStyle,
    filter: "grayscale(100%)",
    cursor: "not-allowed"
  };
  var checkboxLabelStyle = {
    display: "inline-block",
    maxWidth: "100%",
    minWidth: "0",
    overflowWrap: "anywhere",
    wordBreak: "break-word"
  };
  var buttonStyle = {
    ...normalizedStyle,
    ...baseStyle,
    borderColor: borderColor,
    backgroundColor: "rgba(108, 92, 231, 0.15)",
    font: "inherit",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "1px 5px",
    cursor: "pointer",
    width: "fit-content",
    outline: "none",
    borderRadius: "3px"
  };
  var advancedButtonStyle = {
    ...buttonStyle,
    width: "76px",
    height: "24px",
    minWidth: "76px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    padding: "0 6px",
    fontSize: "12px"
  };
  var iconButtonStyle = {
    ...normalizedStyle,
    ...baseStyle,
    backgroundColor: "transparent",
    font: "inherit",
    padding: "1px 4px",
    cursor: "pointer",
    width: "fit-content",
    outline: "none",
    border: "none",
    borderRadius: "4px"
  };
  var storageRootStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px"
  };
  var storageSectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  };
  var storageRowStyle = {
    display: "flex",
    gap: "6px",
    alignItems: "center"
  };
  var storagePreviewButtonStyle = {
    ...buttonStyle,
    padding: "1px 4px",
    borderRadius: "4px",
    cursor: "pointer"
  };
  var storageSavedListStyle = {
    height: "100px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    position: "relative",
    touchAction: "none"
  };
  var deleteButtonStyle = {
    ...buttonStyle,
    color: textColor,
    borderColor: textColor
  };
  var nowrapButtonStyle = {
    ...buttonStyle,
    whiteSpace: "nowrap"
  };
  var mouseScrollHintStyle = {
    position: "absolute",
    right: "6px",
    top: "8px",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: "9999"
  };

  // src/GUI/components/icons/index.ts
  var svgAttrs = ({ size }) => ({
    stroke: "#9b59b6",
    fill: "#9b59b6",
    "stroke-width": "0",
    height: `${size}px`,
    width: `${size}px`,
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  });
  var MinimizeIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("path", { d: "M8,3V6A2,2,0,0,1,6,8H3" }),
      h("path", { d: "M16,21V18a2,2,0,0,1,2-2h3" }),
      h("path", { d: "M8,21V18a2,2,0,0,0-2-2H3" }),
      h("path", { d: "M16,3V6a2,2,0,0,0,2,2h3" })
    ]
  );
  var MaximizeIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("path", { d: "M3,8V5A2,2,0,0,1,5,3H8" }),
      h("path", { d: "M21,16v3a2,2,0,0,1-2,2H16" }),
      h("path", { d: "M3,16v3a2,2,0,0,0,2,2H8" }),
      h("path", { d: "M21,8V5a2,2,0,0,0-2-2H16" })
    ]
  );
  var UploadIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size })
    },
    h(
      "path",
      {
        d: "M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM13 12V16H11V12H8L12 8L16 12H13Z"
      }
    )
  );
  var DiscordIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 15 15",
      ...svgAttrs({ size })
    },
    h("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
    })
  );
  var GithubIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size })
    },
    h("path", {
      d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"
    })
  );
  var EyeIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 576 512",
      ...svgAttrs({ size })
    },
    h("path", {
      d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
    })
  );
  var MouseScrollIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "1.5"
    },
    [
      h("rect", { x: 8, y: 3, width: 8, height: 14, rx: 4, ry: 4 }),
      h("rect", { x: 11, y: 6, width: 2, height: 4, rx: 1, class: "mouse-wheel" })
    ]
  );
  var LocationIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size })
    },
    [
      h("path", {
        d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
      }),
      h("circle", {
        cx: "12",
        cy: "9",
        r: "2.5"
      })
    ]
  );
  var DonutIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("path", {
        d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
      }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ]
  );
  var DeleteIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size })
    },
    h("path", {
      d: "M18 6L6 18M6 6L18 18",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  );
  var CheckIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      fill: "currentColor"
    },
    h("rect", {
      style: baseStyle,
      x: "0",
      y: "0",
      width: "24",
      height: "24"
    })
  );
  var TickIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    h("path", { d: "M20 6L9 17l-5-5" })
  );
  var PencilIcon = ({ style: style12, size }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size })
    },
    h("path", {
      d: "M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"
    })
  );
  var HelpIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 24 24",
      ...svgAttrs({ size }),
      stroke: "red",
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("circle", { cx: "12", cy: "12", r: "10" }),
      h("path", { d: "M12 16v-4" }),
      h("path", { d: "M12 8h.01" })
    ]
  );
  var SaveIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 16 16",
      ...svgAttrs({ size }),
      fill: "currentColor"
    },
    h("path", {
      d: "M13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z"
    })
  );
  var SaveFromFileIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 16 16",
      ...svgAttrs({ size }),
      fill: "currentColor"
    },
    h("path", {
      d: "M14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z"
    })
  );
  var CropIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 32 32",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("circle", { cx: "13", cy: "13", r: "1" }),
      h("polyline", { points: "7,21 16,16 20,19 25,16" }),
      h("polyline", { points: "30,25 7,25 7,2" }),
      h("polyline", { points: "7,7 25,7 25,25" }),
      h("line", { x1: "7", y1: "7", x2: "2", y2: "7" }),
      h("line", { x1: "25", y1: "30", x2: "25", y2: "25" })
    ]
  );
  var RestoreCropIcon = ({ style: style12, size = 24 }) => h(
    "svg",
    {
      style: style12,
      viewBox: "0 0 32 32",
      ...svgAttrs({ size }),
      stroke: borderColor,
      fill: "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    [
      h("polyline", { points: "30,25 7,25 7,2" }),
      h("polyline", { points: "7,7 25,7 25,25" }),
      h("line", { x1: "7", y1: "7", x2: "2", y2: "7" }),
      h("line", { x1: "25", y1: "30", x2: "25", y2: "25" }),
      h("line", { x1: "7", y1: "25", x2: "29", y2: "3" })
    ]
  );

  // src/GUI/components/links/IconLink.ts
  var IconLink = ({
    style: style12,
    href,
    childs
  }) => h("span", {
    style: {
      color: textColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      ...style12
    },
    onclick: (state) => {
      window.open(href);
      return { ...state };
    }
  }, childs);

  // src/GUI/components/links/discord-link.ts
  var DiscordLink = ({
    style: style12,
    size,
    href
  }) => IconLink({
    style: style12,
    href,
    childs: DiscordIcon({ size })
  });

  // src/GUI/components/links/github-link.ts
  var GithubLink = ({
    style: style12,
    size,
    href
  }) => IconLink({
    style: style12,
    href,
    childs: GithubIcon({ size })
  });

  // src/GUI/components/links/boosty-link.ts
  var BoostyLink = ({
    style: style12,
    size,
    href
  }) => IconLink({
    style: style12,
    href,
    childs: DonutIcon({ size })
  });

  // src/GUI/components/links/help-link.ts
  var HelpLink = ({
    style: style12,
    size,
    href
  }) => IconLink({
    style: style12,
    href,
    childs: HelpIcon({ size })
  });

  // src/GUI/components/minimize-button.ts
  var MinimizeButton = ({
    isMinimized
  }) => h("button", {
    style: {
      ...buttonStyle,
      padding: "4px",
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: textColor,
      border: "none",
      background: "none",
      outline: "none",
      cursor: "pointer"
    },
    onclick: (state) => ({
      ...state,
      isMinimized: !state.isMinimized
    })
  }, [
    isMinimized ? MaximizeIcon({ size: 16 }) : MinimizeIcon({ size: 16 })
  ]);

  // src/GUI/components/header.ts
  var headIconsStyle = {
    display: "inline-flex",
    color: textColor,
    columnGap: "6px",
    alignItems: "center"
  };
  var versionStyle = {
    fontSize: "11px",
    lineHeight: "18px",
    color: textColor
  };
  var currentTitle = sample(titles);
  var clampAppCoords = ({
    x,
    y,
    appElement
  }) => {
    return [
      clamp(0, x, unsafeWindow.innerWidth - appElement.offsetWidth),
      clamp(0, y, unsafeWindow.innerHeight - appElement.offsetHeight + 1)
    ];
  };
  var Header = ({
    onChangeWindowCoords,
    appElement,
    isMinimized
  }) => h("div", {
    style: headStyle,
    onmousedown: (state, e) => {
      const appBBox = appElement.getBoundingClientRect();
      let mouseOffsetCoords = [
        e.clientX - appBBox.left,
        e.clientY - appBBox.top
      ];
      const mousemoveHandler = (e2) => {
        let clientX;
        let clientY;
        if ("clientX" in e2 && "clientY" in e2) {
          clientX = e2.clientX;
          clientY = e2.clientY;
        } else if ("touches" in e2 && e2.touches.length > 0) {
          clientX = e2.touches[0].clientX;
          clientY = e2.touches[0].clientY;
        }
        if (clientX === void 0 || clientY === void 0) return;
        const newCoords = clampAppCoords({
          x: clientX - mouseOffsetCoords[0],
          y: clientY - mouseOffsetCoords[1],
          appElement
        });
        onChangeWindowCoords(newCoords);
      };
      document.addEventListener("mousemove", mousemoveHandler);
      const mouseupHandler = () => {
        document.removeEventListener("mousemove", mousemoveHandler);
        const matchedLeft = matchNumbers(appElement.style.left);
        const matchedTop = matchNumbers(appElement.style.top);
        if (matchedLeft && matchedTop) {
          global2.storage.set("window.x", matchedLeft[0]);
          global2.storage.set("window.y", matchedTop[0]);
        }
        document.removeEventListener("mouseup", mouseupHandler);
      };
      document.addEventListener("mouseup", mouseupHandler);
      return state;
    },
    ontouchstart: (state, e) => {
      const appBBox = appElement.getBoundingClientRect();
      let touch = e.touches[0];
      let touchOffsetCoords = [
        touch.clientX - appBBox.left,
        touch.clientY - appBBox.top
      ];
      const touchmoveHandler = (e2) => {
        let t = e2.touches[0];
        const newCoords = clampAppCoords({
          x: t.clientX - touchOffsetCoords[0],
          y: t.clientY - touchOffsetCoords[1],
          appElement
        });
        onChangeWindowCoords(newCoords);
      };
      document.addEventListener("touchmove", touchmoveHandler, { passive: false });
      const touchendHandler = () => {
        document.removeEventListener("touchmove", touchmoveHandler);
        const matchedLeft = matchNumbers(appElement.style.left);
        const matchedTop = matchNumbers(appElement.style.top);
        if (matchedLeft && matchedTop) {
          global2.storage.set("window.x", matchedLeft[0]);
          global2.storage.set("window.y", matchedTop[0]);
        }
        document.removeEventListener("touchend", touchendHandler);
      };
      document.addEventListener("touchend", touchendHandler);
      return state;
    }
  }, [
    h("div", { style: {
      display: "flex",
      alignItems: "baseline",
      columnGap: "5px"
    } }, [
      h("span", { style: { ...h1Style, background: "linear-gradient(90deg, #4a90e2, #9b59b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, ctext(currentTitle)),
      h("div", { style: {
        ...versionStyle,
        ...typeof GM_info === "undefined" && { display: "none" }
      } }, text(`v. ${GM_info?.script.version}`))
    ]),
    h("div", { style: headIconsStyle }, [
      DiscordLink({ size: 20, href: discordServerLink }),
      GithubLink({ size: 20, href: githubProfileLink }),
      BoostyLink({ size: 20, href: boostyLink }),
      HelpLink({ size: 20, href: helplink }),
      MinimizeButton({ isMinimized })
    ])
  ]);

  // src/GUI/components/tabs/other/language.ts
  var style = {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center"
  };
  var Language = () => {
    const langsList = Object.entries(languages_exports).map(([code, lang]) => ({
      code,
      name: lang.fullName,
      author: lang.author
    }));
    langsList.sort((a, b) => {
      if (a.code === "en") return -1;
      if (b.code === "en") return 1;
      return a.name.localeCompare(b.name);
    });
    const currentLanguageCode = global2.storage.get("language");
    return h("div", { style }, [
      h("div", { style: baseStyle }, ctext("language")),
      h("div", {}, [
        h(
          "select",
          {
            style: {
              ...selectStyle,
              width: "max-content",
              maxWidth: "200px"
            },
            value: currentLanguageCode,
            onchange: (state, e) => {
              const target = e.target;
              global2.storage.set("language", target.value);
              return state;
            }
          },
          langsList.map((lang) => h("option", {
            value: lang.code,
            style: languageOptionStyle
          }, ctext(`${lang.name} (by ${lang.author})`)))
        )
      ])
    ]);
  };

  // src/GUI/actions.ts
  var import_isError = __toESM(require_isError());

  // src/utils/PixelRadar.ts
  var NOTIFICATION_TIME = 2e3;
  var CHUNKS_PER_SOCKET = 17e3;
  var SOCKET_COUNT = 4;
  var teardown = null;
  function clamp2(n, min, max2) {
    return Math.max(min, Math.min(n, max2));
  }
  function getPixelFromChunkOffset(i, j, offset, halfW, halfH) {
    const tileSize = 256;
    const x = i * tileSize - halfW + offset % tileSize;
    const y = j * tileSize - halfH + Math.trunc(offset / tileSize);
    return [x, y];
  }
  function isPixelRadarSupported() {
    return !!global2.api?.getPixelRadarContext();
  }
  function arePixelRadarEnabled() {
    return global2.storage.get("pixelRadarEnabled") ?? false;
  }
  function setPixelRadarEnabled(enabled2) {
    global2.storage.set("pixelRadarEnabled", enabled2);
    if (enabled2) {
      startPixelRadar();
    } else {
      stopPixelRadar();
    }
  }
  function initializePixelRadarFromStorage() {
    if (arePixelRadarEnabled() && isPixelRadarSupported()) {
      startPixelRadar();
    }
  }
  function stopPixelRadar() {
    if (teardown) {
      teardown();
      teardown = null;
    }
  }
  function startPixelRadar() {
    stopPixelRadar();
    const api = global2.api;
    const radarCtx = api?.getPixelRadarContext();
    if (!radarCtx) {
      return;
    }
    const pk = radarCtx.packets;
    let activeRadar = true;
    let notificationRadius = 300;
    let globalScale = 1;
    let viewX = 0;
    let viewY = 0;
    const pixelList = [];
    const canvas = document.createElement("canvas");
    canvas.id = "darkbot-pixel-radar-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "9998";
    canvas.style.pointerEvents = "none";
    const onWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    document.body.appendChild(canvas);
    const notifCircle = document.createElement("canvas");
    notifCircle.width = 200;
    notifCircle.height = 200;
    const notifcontext = notifCircle.getContext("2d");
    if (notifcontext) {
      notifcontext.fillStyle = "rgba(255, 0, 0, 0.5)";
      notifcontext.beginPath();
      notifcontext.arc(100, 100, 100, 0, 2 * Math.PI);
      notifcontext.closePath();
      notifcontext.fill();
    }
    const halfW = radarCtx.worldWidth >> 1;
    const halfH = radarCtx.worldHeight >> 1;
    const worldToScreen = (x, y) => [
      (x - viewX) * globalScale + canvas.width / 2,
      (y - viewY) * globalScale + canvas.height / 2
    ];
    let rafId = 0;
    const render = () => {
      try {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (globalScale < 0.8 && notifcontext) {
          const curTime = Date.now();
          let index = pixelList.length;
          while (index > 0) {
            index--;
            const [setTime, x, y] = pixelList[index];
            const timePassed = curTime - setTime;
            if (timePassed > NOTIFICATION_TIME) {
              pixelList.splice(index, 1);
              continue;
            }
            const [sx, sy] = worldToScreen(x, y).map((z) => z + globalScale / 2);
            if (sx < 0 || sy < 0 || sx > canvas.width || sy > canvas.height) {
              pixelList.splice(index, 1);
              continue;
            }
            const notRadius = timePassed / NOTIFICATION_TIME * notificationRadius;
            const circleScale = notRadius / 100;
            ctx.save();
            ctx.scale(circleScale, circleScale);
            ctx.drawImage(
              notifCircle,
              Math.round(sx / circleScale - 100),
              Math.round(sy / circleScale - 100)
            );
            ctx.restore();
          }
        }
      } catch {
      }
    };
    const frame = () => {
      if (!activeRadar) {
        return;
      }
      render();
      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);
    const addPixel = (x, y, i, j) => {
      for (let k = 0; k < pixelList.length; k++) {
        if (pixelList[k][3] === i && pixelList[k][4] === j) {
          pixelList[k][1] = x;
          pixelList[k][2] = y;
          return;
        }
      }
      pixelList.unshift([Date.now(), x, y, i, j]);
    };
    const renderPixel = (i, j, offset) => {
      const [x, y] = getPixelFromChunkOffset(i, j, offset, halfW, halfH);
      addPixel(x, y, i, j);
    };
    const onBinaryMessage = (buffer) => {
      if (buffer.byteLength === 0) {
        return;
      }
      const data = new DataView(buffer);
      const opcode = data.getUint8(0);
      if (opcode === pk.PIXEL_UPDATE_OP) {
        const { i, j, pixels } = pk.deserializePixelUpdate(data);
        pixels.forEach((pxl) => {
          const [offset] = pxl;
          renderPixel(i, j, offset);
        });
      }
    };
    const allChunks = [];
    for (let i = 0; i <= 255; i++) {
      for (let j = 0; j <= 255; j++) {
        allChunks.push(i << 8 | j);
      }
    }
    const pingBySlot = [
      null,
      null,
      null,
      null
    ];
    const wsBySlot = [null, null, null, null];
    const clearSlot = (slot) => {
      if (pingBySlot[slot] !== null) {
        clearInterval(pingBySlot[slot]);
        pingBySlot[slot] = null;
      }
      const prev = wsBySlot[slot];
      if (prev && prev.readyState !== WebSocket.CLOSED) {
        prev.close();
      }
      wsBySlot[slot] = null;
    };
    const connectSlot = (slot) => {
      if (!activeRadar || !arePixelRadarEnabled()) {
        return;
      }
      clearSlot(slot);
      const ws = new WebSocket(radarCtx.wsUrl);
      ws.binaryType = "arraybuffer";
      wsBySlot[slot] = ws;
      ws.onopen = () => {
        ws.send(pk.serializeRegCanvas(radarCtx.canvasId));
        const chunkids = [];
        for (let j = CHUNKS_PER_SOCKET * slot; j < CHUNKS_PER_SOCKET * (slot + 1) && j < allChunks.length; j++) {
          chunkids.push(allChunks[j]);
        }
        ws.send(pk.serializeRegMChunks(chunkids));
      };
      ws.onmessage = (ev) => {
        if (typeof ev.data !== "string") {
          onBinaryMessage(ev.data);
        }
      };
      ws.onclose = () => {
        if (activeRadar && arePixelRadarEnabled()) {
          setTimeout(() => connectSlot(slot), 1e3);
        }
      };
      pingBySlot[slot] = setInterval(() => {
        if (ws.readyState !== WebSocket.CLOSED) {
          ws.send(pk.serializePing());
        }
      }, 23e3);
    };
    const applyViewFromHash = () => {
      const loc = global2.csa?.getCurrentLocation?.();
      if (loc) {
        viewX = loc.x;
        viewY = loc.y;
        if (typeof loc.zoom === "number" && !Number.isNaN(loc.zoom)) {
          globalScale = loc.zoom;
          notificationRadius = clamp2(loc.zoom * 10, 20, 400);
        }
      }
    };
    applyViewFromHash();
    let hashTimer = null;
    const w = unsafeWindow;
    const pixelPlanetEvents = w.pixelPlanetEvents;
    let detachEvents = null;
    if (pixelPlanetEvents && typeof pixelPlanetEvents.on === "function") {
      const onScale = (s) => {
        if (typeof s === "number" && !Number.isNaN(s)) {
          globalScale = s;
          notificationRadius = clamp2(s * 10, 20, 400);
        }
      };
      const onView = (val) => {
        if (Array.isArray(val) && val.length >= 2) {
          viewX = Number(val[0]);
          viewY = Number(val[1]);
        }
      };
      pixelPlanetEvents.on("setscale", onScale);
      pixelPlanetEvents.on("setviewcoordinates", onView);
      detachEvents = () => {
        pixelPlanetEvents.off?.("setscale", onScale);
        pixelPlanetEvents.off?.("setviewcoordinates", onView);
      };
    } else {
      hashTimer = setInterval(applyViewFromHash, 100);
    }
    const onHashChange = () => applyViewFromHash();
    window.addEventListener("hashchange", onHashChange);
    for (let i = 0; i < SOCKET_COUNT; i++) {
      const slot = i;
      setTimeout(() => connectSlot(slot), 0);
    }
    teardown = () => {
      activeRadar = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("resize", onWindowResize);
      if (hashTimer !== null) {
        clearInterval(hashTimer);
      }
      detachEvents?.();
      for (let s = 0; s < SOCKET_COUNT; s++) {
        clearSlot(s);
      }
      canvas.remove();
    };
  }

  // src/GUI/actions.ts
  var logger8 = new Logger("GUI.actions");
  var setStrategyAction = (state, strategyHash) => {
    const strategy = getStrategyByHash(state, strategyHash.toString());
    if (strategy) {
      actions.call("change_strategy", strategy.name);
    } else {
      logger8.warn(
        `cant define strategy for hash "${strategyHash}"
use default ("${DEFAULT_STRATEGY}")`
      );
      actions.call("change_strategy", DEFAULT_STRATEGY);
    }
    return {
      ...state,
      selectedStrategy: strategyHash.toString()
    };
  };
  var setTemplateCoordsAction = (state, coords) => ({
    ...state,
    templateCoords: coords
  });
  var setTemplateDbRecordAction = (state, record) => ({
    ...state,
    templateDbRecord: record
  });
  var setMouseClientCoordsAction = (state, coords) => ({
    ...state,
    mouseClientX: coords[0],
    mouseClientY: coords[1]
  });
  var setCurrentTabAction = (state, tab) => ({
    ...state,
    currentTab: tab,
    editingTemplateId: tab === "storage" ? state.editingTemplateId : null,
    editingTemplateName: tab === "storage" ? state.editingTemplateName : "",
    editingTemplateX: tab === "storage" ? state.editingTemplateX : "",
    editingTemplateY: tab === "storage" ? state.editingTemplateY : ""
  });
  var setScreenshotCoordsAction = (state, coords) => ({
    ...state,
    screenshotCoords: coords
  });
  var addStrategyAction = (state, strategy) => addStrategiesAction(state, [strategy]);
  var addStrategiesAction = (state, strategies2) => {
    const updatedStrategies = state.strategies;
    for (const strategy of strategies2) {
      const hashed = hashString(strategy.name).toString();
      if (!(strategy.tag in updatedStrategies)) {
        updatedStrategies[strategy.tag] = {};
      }
      updatedStrategies[strategy.tag][hashed] = strategy;
    }
    return {
      ...state,
      strategies: updatedStrategies
    };
  };
  var setBotStatusAction = (state, status) => ({
    ...state,
    botStatus: (0, import_isError.default)(status) ? status : confuseString(status)
  });
  var setBotWorksNowAction = (state, works) => ({
    ...state,
    botWorksNow: works
  });
  var setCooldownAction = (state, cd) => ({
    ...state,
    cd: cd === null ? "-" : cd.toFixed(2)
  });
  var setCooldownThresholdAction = (state, cooldownThreshold) => ({
    ...state,
    cooldownThreshold
  });
  var setBotOnlineAction = (state, online) => ({ ...state, online });
  var setBuildPredictAction = (state, [from, to]) => {
    let buildPredict;
    if (from === null) {
      buildPredict = "?";
    } else {
      const times = [from];
      if (to !== void 0 && from !== to) {
        times.push(to);
      }
      if (times[0] > 2 * 3600) {
        buildPredict = times.map((s) => s / 3600).map((n) => n.toFixed(1)).join("-") + "h";
      } else if (times[0] > 2 * 60) {
        buildPredict = times.map((s) => s / 60).map((n) => n.toFixed(1)).join("-") + "m";
      } else {
        buildPredict = times.map((n) => n.toFixed(1)).join("-") + "s";
      }
    }
    return {
      ...state,
      buildPredict
    };
  };
  var setProgressAction = (state, [errors2, all]) => {
    const result = {
      ...state,
      templateErrors: "?",
      progress: "?"
    };
    if (errors2 === null) {
      if (all !== void 0) {
        result.progress = `?/${formatIntNumbers(all)[0]}`;
      }
    } else {
      if (all === void 0) {
        result.templateErrors = formatIntNumbers(errors2)[0];
      } else {
        const right = all - errors2;
        const percent = (right / all * 100).toFixed(2);
        result.templateErrors = formatIntNumbers(errors2)[0];
        result.progress = formatIntNumbers(right, all).join("/") + ` (${percent}%)`;
      }
    }
    return result;
  };
  var setLastPlacedAction = (state, [x, y, clr]) => ({
    ...state,
    placedPixel: [x, y],
    placedPixelColor: clr
  });
  var setWindowCoordsAction = (state, coords) => ({
    ...state,
    windowX: coords[0],
    windowY: coords[1]
  });
  var setDisableBotInputsAction = (state, disable) => ({
    ...state,
    disableBotInputs: disable
  });
  var setStorageSaveNameAction = (state, name2) => ({
    ...state,
    storageSaveName: name2
  });
  var setStorageSaveCoordsAction = (state, [x, y]) => ({
    ...state,
    storageSaveX: x,
    storageSaveY: y
  });
  var setSavedTemplatesAction = (state, templates) => ({
    ...state,
    savedTemplates: templates
  });
  var setSelectedSavedTemplateIndexAction = (state, index) => {
    const len = state.savedTemplates ? state.savedTemplates.length : 0;
    const newIndex = len === 0 ? 0 : Math.max(0, Math.min(len - 1, index));
    return {
      ...state,
      selectedSavedTemplateIndex: newIndex
    };
  };
  var setShowFirstRunAction = (state, show) => ({
    ...state,
    showFirstRun: show
  });
  var setCanvasApiReadyAction = (state) => ({
    ...state,
    canvasApiReady: true
  });
  var setPixelRadarEnabledAction = (state, enabled2) => {
    setPixelRadarEnabled(enabled2);
    return {
      ...state,
      pixelRadarEnabled: enabled2
    };
  };
  var toggleCropModeAction = (state) => ({
    ...state,
    cropMode: !state.cropMode,
    cropSelection: null
  });
  var setCropSelectionAction = (state, selection) => ({
    ...state,
    cropSelection: selection
  });
  var applyCropAction = (state) => ({
    ...state,
    cropMode: false,
    cropSelection: null,
    isCropped: true
  });
  var restoreCropAction = (state) => ({
    ...state,
    isCropped: false
  });

  // src/GUI/components/first-run.ts
  var overlayStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "32px",
    bottom: "0",
    zIndex: "100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    background: "rgba(0, 0, 0, 0.6)",
    pointerEvents: "auto"
  };
  var boxStyle = {
    ...baseStyle,
    background: backgroundColor,
    padding: "12px",
    minWidth: "300px",
    borderRadius: "6px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor,
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  };
  var actionsStyle = {
    display: "flex",
    gap: "6px",
    justifyContent: "flex-end"
  };
  var FirstRun = () => h("div", { style: overlayStyle, onclick: (state) => ({ ...state }) }, [
    h("div", { style: boxStyle }, [
      h("div", {}, text("Welcome to DarkBot")),
      h("div", {}, text("Choose language and visit the tutorial to get started")),
      Language(),
      h("div", {}, [
        h("a", { href: helplink, target: "_blank", rel: "noopener noreferrer", style: { ...cursorPointerStyle } }, text("Open tutorial"))
      ]),
      h("div", { style: actionsStyle }, [
        h("button", { style: buttonStyle, onclick: (state) => {
          global2.storage.set("first_run_shown", true);
          return setShowFirstRunAction(state, false);
        } }, text("Got it"))
      ])
    ])
  ]);

  // src/GUI/components/tabs/bot/template-display.ts
  var elementSize = 100;
  var rootStyle = {
    position: "fixed",
    display: "flex",
    pointerEvents: "none",
    backgroundColor,
    imageRendering: "pixelated"
  };
  var imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  };
  var TemplateDisplay = ({
    showTemplate,
    templateDbRecord,
    mouseClientX,
    mouseClientY
  }) => h(
    "div",
    {
      style: {
        ...rootStyle,
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor,
        width: `${elementSize}px`,
        height: `${elementSize}px`,
        zIndex: "10",
        ...showTemplate && templateDbRecord ? {
          top: `${mouseClientY}px`,
          left: `${mouseClientX}px`
        } : {
          display: "none"
        }
      }
    },
    h("img", {
      src: templateDbRecord?.value,
      style: imgStyle
    })
  );

  // node_modules/idb/build/index.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(this.request);
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);
  function openDB(name2, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name2, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));
  var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
  var methodMap = {};
  var advanceResults = /* @__PURE__ */ new WeakMap();
  var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
  var cursorIteratorTraps = {
    get(target, prop) {
      if (!advanceMethodProps.includes(prop))
        return target[prop];
      let cachedFunc = methodMap[prop];
      if (!cachedFunc) {
        cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
      }
      return cachedFunc;
    }
  };
  async function* iterate(...args) {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  }
  function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
      if (isIteratorProp(target, prop))
        return iterate;
      return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
      return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    }
  }));

  // src/common/idb.ts
  var logger9 = new Logger("idb");
  var IDB = class {
    dbPromise;
    name;
    version;
    templatesStoreName = "templates";
    savedTemplatesStoreName = "saved_templates";
    templateKey = "0";
    constructor({ name: name2, version }) {
      this.name = name2;
      this.version = version;
      this.dbPromise = openDB(this.name, this.version, {
        upgrade: (db) => {
          if (!db.objectStoreNames.contains(this.templatesStoreName)) {
            db.createObjectStore(this.templatesStoreName, { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains(this.savedTemplatesStoreName)) {
            db.createObjectStore(this.savedTemplatesStoreName, { keyPath: "id" });
          }
        }
      });
    }
    async hasTemplate() {
      try {
        const db = await this.dbPromise;
        const count = await db.count(this.templatesStoreName, this.templateKey);
        return count > 0;
      } catch (error) {
        logger9.error("Error checking template existence:", error);
        throw error;
      }
    }
    async getTemplate() {
      try {
        const db = await this.dbPromise;
        return await db.get(this.templatesStoreName, this.templateKey) ?? null;
      } catch (error) {
        logger9.error("Error getting template:", error);
        throw error;
      }
    }
    async getTemplateFilename() {
      const template = await this.getTemplate();
      return template?.filename ?? null;
    }
    async setTemplate({
      value,
      filename
    }) {
      try {
        const db = await this.dbPromise;
        const tx = db.transaction(this.templatesStoreName, "readwrite");
        const store = tx.objectStore(this.templatesStoreName);
        await store.put({
          id: this.templateKey,
          filename,
          value
        });
        await tx.done;
      } catch (error) {
        logger9.error("Error setting template:", error);
        throw error;
      }
    }
    async addSavedTemplate({ filename, value, name: name2, x, y }) {
      try {
        const db = await this.dbPromise;
        const storeName = db.objectStoreNames.contains(this.savedTemplatesStoreName) ? this.savedTemplatesStoreName : this.templatesStoreName;
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const id2 = Date.now().toString() + "-" + Math.random().toString(36).slice(2, 8);
        const record = {
          id: id2,
          filename,
          value,
          name: name2,
          x,
          y
        };
        await store.put(record);
        await tx.done;
        return id2;
      } catch (error) {
        logger9.error("Error adding saved template:", error);
        throw error;
      }
    }
    async getSavedTemplates() {
      try {
        const db = await this.dbPromise;
        const storeName = db.objectStoreNames.contains(this.savedTemplatesStoreName) ? this.savedTemplatesStoreName : this.templatesStoreName;
        const all = await db.getAll(storeName);
        if (storeName === this.templatesStoreName) {
          return all.filter((r) => r.id !== this.templateKey);
        }
        return all;
      } catch (error) {
        logger9.error("Error getting saved templates:", error);
        throw error;
      }
    }
    async getSavedTemplate(id2) {
      try {
        const db = await this.dbPromise;
        const storeName = db.objectStoreNames.contains(this.savedTemplatesStoreName) ? this.savedTemplatesStoreName : this.templatesStoreName;
        const record = await db.get(storeName, id2) ?? null;
        if (record && storeName === this.templatesStoreName && record.id === this.templateKey) return null;
        return record;
      } catch (error) {
        logger9.error("Error getting saved template:", error);
        throw error;
      }
    }
    async updateSavedTemplate(id2, data) {
      try {
        const db = await this.dbPromise;
        const storeName = db.objectStoreNames.contains(this.savedTemplatesStoreName) ? this.savedTemplatesStoreName : this.templatesStoreName;
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const existing = await store.get(id2);
        if (!existing) throw new Error("not found");
        const updated = { ...existing, ...data };
        await store.put(updated);
        await tx.done;
      } catch (error) {
        logger9.error("Error updating saved template:", error);
        throw error;
      }
    }
    async deleteSavedTemplate(id2) {
      try {
        const db = await this.dbPromise;
        const storeName = db.objectStoreNames.contains(this.savedTemplatesStoreName) ? this.savedTemplatesStoreName : this.templatesStoreName;
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        await store.delete(id2);
        await tx.done;
      } catch (error) {
        logger9.error("Error deleting saved template:", error);
        throw error;
      }
    }
  };
  var idb = new IDB({
    name: "void-bot",
    version: 1
  });

  // src/GUI/components/tabs/bot/template-upload.ts
  var textBetweenStyle = {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
  var rootStyle2 = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gap: "5px",
    alignItems: "center",
    overflow: "hidden",
    ...cursorPointerStyle,
    borderColor,
    padding: "2px",
    borderWidth: "1px",
    borderStyle: "solid"
  };
  var disabledRootStyle = {
    ...rootStyle2,
    borderColor: "#595959",
    cursor: "not-allowed"
  };
  var TemplateUpload = ({
    disabled,
    templateDbRecord,
    onChange,
    showTemplate,
    mouseClientX,
    mouseClientY
  }) => h("div", {
    style: disabled ? disabledRootStyle : rootStyle2,
    onclick: (state) => {
      if (disabled) return state;
      (async () => {
        const file = await getImageFromUser();
        if (!file) return;
        const data = {
          filename: file.name,
          value: await fileToDataUrl(file)
        };
        await idb.setTemplate(data);
        actions.emit("change_template_file", file);
        onChange(data);
      })();
      return state;
    }
  }, [
    UploadIcon({
      size: 20,
      style: disabled ? {
        filter: "grayscale(100%)"
      } : void 0
    }),
    templateDbRecord === null ? h("span", { style: baseStyle }, text("click to upload")) : h(
      "span",
      {
        style: {
          ...baseStyle,
          ...textBetweenStyle
        }
      },
      text(templateDbRecord.filename)
    ),
    h(
      "div",
      {
        style: {
          ...baseStyle,
          ...flexCenterStyle,
          cursor: "none"
        },
        onmouseenter: (state) => ({ ...state, showTemplate: true }),
        onmouseleave: (state) => ({ ...state, showTemplate: false })
      },
      EyeIcon({ size: 20 })
    ),
    TemplateDisplay({
      showTemplate,
      templateDbRecord,
      mouseClientX,
      mouseClientY
    })
  ]);

  // src/GUI/components/tabs/bot/work-button.ts
  var WorkButton = ({
    botWorksNow
  }) => h(
    "button",
    {
      style: {
        ...buttonStyle,
        borderColor: botWorksNow ? alternateBorderColor : borderColor
      },
      onclick: (state) => {
        actions.emit("switch_bot");
        return state;
      }
    },
    // ctext(state.botWorksNow ? 'stop' : 'start'),
    ctext(i18n.map.bot_tab_work_button)
  );

  // src/GUI/components/tabs/bot/online-field.ts
  var style2 = {
    ...baseStyle,
    lineHeight: "90%"
  };
  var OnlineField = ({ online }) => h("div", {
    style: style2,
    title: i18n.map.bot_tab_online_title
  }, [
    ctext(`${i18n.map.bot_tab_online}: `),
    h(
      "span",
      { style: monospaceStyle },
      online ? ctext(`${online.connectionsAmount}(${online.ipsAmount})`) : text("-")
    )
  ]);

  // src/GUI/components/tabs/bot/bot-status.ts
  var import_isError2 = __toESM(require_isError());
  var BotStatus = ({
    botStatus,
    style: style12
  }) => {
    const botStatusText = (0, import_isError2.default)(botStatus) ? `${i18n.translateError(botStatus)}` : botStatus;
    return h("div", {
      ...(0, import_isError2.default)(botStatus) && {
        // title: `${state.botStatus.name} ${state.botStatus.message}`,
        title: `click to copy error`,
        onclick: (state) => {
          navigator.clipboard.writeText(botStatusText);
          return state;
        }
      },
      style: {
        ...(0, import_isError2.default)(botStatus) && {
          cursor: "pointer"
        },
        ...style12,
        display: "flex",
        gap: "0.5em",
        flexDirection: "row",
        alignItems: "baseline",
        overflow: "hidden"
      }
    }, [
      h("span", { style: baseStyle }, ctext(`${i18n.map.bot_tab_status}: `)),
      h(
        "span",
        {
          style: {
            // textOverflow: 'ellipsis',
            // textWrap: 'nowrap',
            ...monospaceStyle
            // overflow: 'hidden',
          }
        },
        text(botStatusText.length > 100 ? botStatusText.slice(0, 100) + "..." : botStatusText)
      )
    ]);
  };

  // src/GUI/components/tabs/bot/last-placed-pixel.ts
  var placedPixelValueStyle = {
    ...baseStyle,
    ...monospaceStyle,
    display: "inline-flex",
    gap: "5px",
    alignItems: "center"
  };
  var placedPixelColorStyle = {
    width: "",
    ...squareElementStyle(14)
  };
  var LastPlacedPixel = ({
    placedPixel,
    placedPixelColor,
    style: style12
  }) => h("div", {
    style: {
      ...placedPixel && { cursor: "pointer" },
      ...style12
    },
    onclick: (state) => {
      if (state.placedPixel) {
        global2.csa?.goto({
          x: state.placedPixel[0],
          y: state.placedPixel[1]
        });
      }
      return state;
    }
  }, [
    ctext(`${i18n.map.bot_tab_last_placed}: `),
    h("span", {
      style: {
        ...placedPixelValueStyle,
        ...placedPixel && {
          textDecoration: "underline"
        }
      }
    }, [
      ...placedPixel ? [
        h("span", { style: placedPixelValueStyle }, text(placedPixel[0].toString())),
        h("span", { style: placedPixelValueStyle }, text(placedPixel[1].toString()))
      ] : [],
      placedPixelColor === null ? text("-") : typeof placedPixelColor === "number" ? h("span", {}, text(placedPixelColor.toString())) : h("span", { style: {
        ...placedPixelColorStyle,
        background: `rgb(${placedPixelColor.slice(0, 3)})`
      } })
    ])
  ]);

  // src/GUI/components/input.ts
  var disabledInputStyle = {
    ...inputStyle,
    filter: "grayscale(100%)",
    cursor: "not-allowed"
  };
  var Input = ({
    disabled = false,
    type,
    value,
    onChange,
    style: overrideStyle,
    className,
    step,
    min
  }) => h("input", {
    style: disabled ? { ...disabledInputStyle, ...overrideStyle } : { ...inputStyle, ...overrideStyle },
    class: className,
    disabled,
    type,
    step,
    min,
    oninput: (state, e) => onChange(state, e),
    value
  });

  // src/GUI/components/coord-input.ts
  var coordStyle = {
    ...baseStyle,
    display: "flex",
    gap: "4px"
  };
  var CoordInput = ({
    disabled = false,
    value,
    text: textValue,
    onChange
  }) => h("div", { style: coordStyle }, [
    text(textValue),
    Input({
      disabled,
      type: "number",
      onChange: (state, e) => onChange(state, e.currentTarget.value),
      value: value === "0" ? "" : value
    })
  ]);

  // src/GUI/components/tabs/bot/bot-coords-input.ts
  var style3 = {
    display: "flex",
    gap: "5px",
    flexDirection: "row"
  };
  var BotCoordsInput = ({
    templateCoords,
    onChange,
    disabled
  }) => h("div", { style: style3 }, [
    CoordInput({
      disabled,
      value: templateCoords[0] ?? "",
      text: "x: ",
      onChange: (state, value) => {
        const newCoords = [
          value,
          state.templateCoords[1]
        ];
        const normalized = normalizeCoordsBeforeRender(newCoords);
        const parsedCoords = normalized.map(Number);
        if (!isNaN(parsedCoords[0]) && !isNaN(parsedCoords[1]) && normalized[0] !== "" && normalized[1] !== "") {
          actions.call("change_template_coords", parsedCoords);
        }
        return onChange(state, normalized);
      }
    }),
    CoordInput({
      disabled,
      value: templateCoords[1] ?? "",
      text: "y: ",
      onChange: (state, value) => {
        const newCoords = [
          state.templateCoords[0],
          value
        ];
        const normalized = normalizeCoordsBeforeRender(newCoords);
        const parsedCoords = normalized.map(Number);
        if (!isNaN(parsedCoords[0]) && !isNaN(parsedCoords[1]) && normalized[0] !== "" && normalized[1] !== "") {
          actions.call("change_template_coords", parsedCoords);
        }
        return onChange(state, normalized);
      }
    }),
    h(
      "div",
      {
        title: "go to template",
        onclick: (state) => {
          const parsedCoords = templateCoords.map(Number);
          if (!isNaN(parsedCoords[0]) && !isNaN(parsedCoords[1])) {
            global2.csa?.goto({
              x: parsedCoords[0],
              y: parsedCoords[1]
            });
          }
          return state;
        },
        style: {
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      LocationIcon({ size: 20 })
    )
  ]);
  function normalizeCoordsBeforeRender(coords) {
    const result = coords.map((rawInput) => {
      const matched = /(-?\d+)|-/.exec(rawInput);
      if (matched === null) {
        return "";
      }
      const coord = matched[0];
      const num = Number(coord);
      if (coord === "") {
        return "";
      } else if (coord === "-") {
        return "-";
      } else {
        return num.toString();
      }
    });
    return result;
  }

  // src/Targeter/strategies/tags.ts
  var strategyTagsOrder = [
    "composite" /* COMPOSITE */,
    "effective" /* EFFECTIVE */,
    "simple" /* SIMPLE */,
    "exotic (and useless)" /* FUNNY */
  ];

  // src/GUI/components/select.ts
  var disabledSelectStyle = {
    ...selectStyle,
    filter: "grayscale(100%)",
    cursor: "not-allowed"
  };
  var Select = ({
    disabled,
    value,
    onChange,
    className,
    style: style12
  }, children) => h("select", {
    class: className,
    style: {
      ...disabled ? disabledSelectStyle : selectStyle,
      ...style12
    },
    value,
    disabled: !!disabled,
    onchange: (state, e) => {
      if (disabled) return state;
      return onChange(state, e);
    }
  }, children);

  // src/GUI/components/tabs/bot/strategy-field/strategy-select.ts
  var optionStyle = {
    ...baseStyle,
    color: textColor,
    background: "rgba(10, 0, 0, 0.97)"
  };
  var optgroupStyle = {
    color: textColor,
    background: "rgba(10, 0, 0, 0.97)"
  };
  var StrategySelect = ({
    strategies: strategies2,
    selectedStrategy,
    setStrategyAction: setStrategyAction2,
    disabled
  }) => Select(
    {
      className: "darkbot-no-scrollbar",
      value: selectedStrategy,
      onChange: (state, e) => setStrategyAction2(
        state,
        e.currentTarget.value
      ),
      disabled
    },
    strategyTagsOrder.map(
      (tag) => h(
        "optgroup",
        {
          label: tag,
          style: optgroupStyle
        },
        Object.entries(strategies2[tag] ?? {}).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([hash, strategy]) => h(
          "option",
          {
            value: hash,
            style: optionStyle
          },
          ctext(strategy.name)
        ))
      )
    )
  );

  // src/GUI/components/tabs/bot/strategy-field/index.ts
  var strategyStyle = {
    ...baseStyle,
    display: "flex",
    gap: "4px",
    alignItems: "center"
  };
  var StrategyField = ({
    strategies: strategies2,
    selectedStrategy,
    setStrategyAction: setStrategyAction2,
    disabled
  }) => h("div", { style: strategyStyle }, [
    ctext(`${i18n.map.bot_tab_strategy}: `),
    StrategySelect({
      disabled,
      strategies: strategies2,
      selectedStrategy,
      setStrategyAction: setStrategyAction2
    })
  ]);

  // src/GUI/components/tabs/bot/crop-button.ts
  var iconButtonStyle2 = {
    ...flexCenterStyle,
    ...cursorPointerStyle,
    width: "24px",
    height: "24px",
    border: `1px solid ${borderColor}`,
    borderRadius: "4px",
    background: "transparent",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var activeIconButtonStyle = {
    ...iconButtonStyle2,
    background: "linear-gradient(135deg, rgba(74, 144, 226, 0.4), rgba(155, 89, 182, 0.4))",
    borderColor: "#9b59b6",
    boxShadow: "0 0 8px rgba(155, 89, 182, 0.5)"
  };
  var CropButton = ({
    disabled,
    cropMode,
    toggleCropModeAction: toggleCropModeAction2
  }) => h("button", {
    style: disabled ? { ...iconButtonStyle2, filter: "grayscale(100%)", cursor: "not-allowed", opacity: "0.5" } : cropMode ? activeIconButtonStyle : iconButtonStyle2,
    onclick: (state) => {
      if (disabled) return state;
      return toggleCropModeAction2(state, void 0);
    },
    title: "Crop template"
  }, [CropIcon({ size: 16 })]);

  // src/GUI/components/tabs/bot/restore-crop-button.ts
  var iconButtonStyle3 = {
    ...flexCenterStyle,
    ...cursorPointerStyle,
    width: "24px",
    height: "24px",
    border: `1px solid ${borderColor}`,
    borderRadius: "4px",
    background: "transparent",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var RestoreCropButton = ({
    disabled,
    isCropped,
    restoreCropAction: restoreCropAction2
  }) => h("button", {
    style: disabled || !isCropped ? { ...iconButtonStyle3, filter: "grayscale(100%)", cursor: "not-allowed", opacity: "0.5" } : iconButtonStyle3,
    onclick: (state) => {
      if (disabled || !isCropped) return state;
      actions.call("restore_crop");
      return restoreCropAction2(state, void 0);
    },
    title: "Restore original template"
  }, [RestoreCropIcon({ size: 16 })]);

  // src/GUI/components/tabs/bot/index.ts
  var sectionStyle = {
    overflow: "visible",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  };
  var rightSectionLineStyle = {
    ...baseStyle,
    lineHeight: "90%"
  };
  var tabContentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto 1fr",
    rowGap: "5px",
    columnGap: "10px"
  };
  var BotTab = ({
    state,
    visible,
    setStrategyAction: setStrategyAction2,
    setTemplateDbRecord,
    setTemplateCoordsAction: setTemplateCoordsAction2,
    toggleCropModeAction: toggleCropModeAction2,
    restoreCropAction: restoreCropAction2
  }) => h("div", { style: {
    ...tabContentStyle,
    ...!visible ? { display: "none" } : void 0
  } }, [
    h("div", { style: tabTitleStyle }, ctext(i18n.map.bot_tab_settings_title)),
    h("div", { style: tabTitleStyle }, ctext(i18n.map.bot_tab_info_title)),
    h("div", { style: sectionStyle }, [
      BotCoordsInput({
        disabled: state.disableBotInputs,
        templateCoords: state.templateCoords,
        onChange: (state2, value) => setTemplateCoordsAction2(state2, value)
      }),
      StrategyField({
        disabled: state.disableBotInputs,
        strategies: state.strategies,
        selectedStrategy: state.selectedStrategy,
        setStrategyAction: setStrategyAction2
      }),
      TemplateUpload({
        disabled: state.disableBotInputs,
        templateDbRecord: state.templateDbRecord,
        showTemplate: state.showTemplate,
        mouseClientX: state.mouseClientX,
        mouseClientY: state.mouseClientY,
        onChange: (record) => setTemplateDbRecord(record)
      }),
      h("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "6px"
      } }, [
        WorkButton({ botWorksNow: state.botWorksNow }),
        CropButton({ disabled: state.disableBotInputs || !state.templateDbRecord, cropMode: state.cropMode, toggleCropModeAction: toggleCropModeAction2 }),
        RestoreCropButton({ disabled: state.disableBotInputs || !state.isCropped, isCropped: state.isCropped, restoreCropAction: restoreCropAction2 })
      ])
    ]),
    h("div", { style: sectionStyle }, [
      OnlineField({ online: state.online }),
      BotStatus({ botStatus: state.botStatus, style: rightSectionLineStyle }),
      h("div", { style: rightSectionLineStyle }, [
        ctext(`${i18n.map.bot_tab_cooldown}: `),
        h("span", { style: monospaceStyle }, ctext(state.cd))
      ]),
      h("div", { style: rightSectionLineStyle }, [
        ctext(`${i18n.map.bot_tab_errors}: `),
        h("span", { style: monospaceStyle }, ctext(state.templateErrors))
      ]),
      h("div", { style: rightSectionLineStyle }, [
        ctext(`${i18n.map.bot_tab_progress}: `),
        h("span", { style: monospaceStyle, "data-bot-progress": "" }, ctext(state.progress))
      ]),
      h("div", { style: rightSectionLineStyle }, [
        ctext(`${i18n.map.bot_tab_end_in}: `),
        h("span", { style: monospaceStyle }, ctext(state.buildPredict))
      ]),
      LastPlacedPixel({
        placedPixel: state.placedPixel,
        placedPixelColor: state.placedPixelColor,
        style: rightSectionLineStyle
      })
    ])
  ]);

  // src/GUI/components/checkbox.ts
  var containerStyle = {
    width: "12px",
    height: "12px",
    padding: "0",
    margin: "0",
    border: `1px solid ${textColor}`,
    backgroundColor: "transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxSizing: "border-box",
    minWidth: "12px",
    maxWidth: "12px",
    minHeight: "12px",
    maxHeight: "12px",
    fontSize: "0",
    verticalAlign: "middle",
    alignSelf: "center",
    flexShrink: "0",
    transform: "translateZ(0)",
    willChange: "transform",
    backfaceVisibility: "hidden"
  };
  var disabledContainerStyle = {
    ...containerStyle,
    opacity: "0.5",
    cursor: "not-allowed"
  };
  var Checkbox = ({
    checked,
    onchange,
    disabled = false
  }) => h("div", {
    style: {
      ...disabled ? disabledContainerStyle : containerStyle,
      ...checked && !disabled ? {
        boxShadow: `0 0 5px 1px ${textColor}`,
        border: `1px solid ${textColor}`
      } : {}
    },
    onclick: onchange ? (state) => onchange(state, !checked) : void 0
  }, [
    h("div", {
      style: {
        opacity: checked ? "1" : "0",
        transition: "opacity 200ms",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden"
      }
    }, [
      CheckIcon({
        size: 8,
        style: {
          display: "block"
        }
      })
    ])
  ]);

  // src/GUI/components/tabs/bot/stop-on-captcha.ts
  var StopOnCaptcha = ({
    stopOnCaptcha,
    disabled
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_stop_on_captcha)),
      Checkbox({
        disabled,
        checked: stopOnCaptcha,
        onchange: (state, checked) => {
          if (disabled) return state;
          actions.emit("change_stop_on_captcha", checked);
          return {
            ...state,
            stopOnCaptcha: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/smart-place.ts
  var SmartPlace = ({
    disabled,
    smartPlace
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_smart_place)),
      Checkbox({
        disabled,
        checked: smartPlace,
        onchange: (state, checked) => {
          if (disabled) return state;
          actions.emit("change_smart_place", checked);
          return {
            ...state,
            smartPlace: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/follow-bot.ts
  var FollowBot = ({
    disabled,
    followBot
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_follow_bot)),
      Checkbox({
        disabled,
        checked: followBot,
        onchange: (state, checked) => {
          if (disabled) return state;
          global2.storage.set("follow_bot", checked);
          return {
            ...state,
            followBot: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/heatmap-button.ts
  var HeatmapButton = () => h(
    "button",
    {
      style: advancedButtonStyle,
      onclick: (state) => {
        actions.emit("download_heatmap");
        return state;
      }
    },
    ctext(i18n.map.bot_options_heatmap)
  );

  // src/GUI/components/tabs/bot-options/heatweb-button.ts
  var HeatwebButton = () => h(
    "button",
    {
      style: advancedButtonStyle,
      onclick: (state) => {
        actions.emit("download_heatweb");
        return state;
      }
    },
    ctext(i18n.map.bot_options_heatweb)
  );

  // src/GUI/components/tabs/bot-options/export-button.ts
  var ExportTemplateButton = ({ templateDbRecord, templateCoords, disabled }) => h("button", {
    style: disabled ? { ...advancedButtonStyle, filter: "grayscale(100%)", cursor: "not-allowed" } : { ...advancedButtonStyle },
    onclick: (state) => {
      if (disabled) return state;
      (async () => {
        if (!templateDbRecord) return;
        const coords = templateCoords ?? ["0", "0"];
        const x = parseInt(coords[0]) || 0;
        const y = parseInt(coords[1]) || 0;
        const obj = { filename: templateDbRecord.filename, value: templateDbRecord.value, x, y };
        const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const base = templateDbRecord.filename ? templateDbRecord.filename.split(".").slice(0, -1).join(".") || "template" : "template";
        a.href = url;
        a.download = `${base}-${x}_${y}.darkbot`;
        a.click();
        URL.revokeObjectURL(url);
      })();
      return state;
    }
  }, ctext(i18n.map.bot_options_export));

  // src/GUI/components/tabs/bot-options/import-button.ts
  var ImportTemplateButton = ({ disabled }) => h("button", {
    style: disabled ? { ...advancedButtonStyle, filter: "grayscale(100%)", cursor: "not-allowed" } : { ...advancedButtonStyle },
    onclick: (state) => {
      if (disabled) return state;
      (async () => {
        const file = await getFileFromUser(".darkbot");
        if (!file) return;
        try {
          const txt = await file.text();
          const parsed = JSON.parse(txt);
          const filename = parsed.filename ?? file.name.replace(/\.darkbot$/i, "");
          const value = parsed.value;
          const x = Number(parsed.x ?? 0);
          const y = Number(parsed.y ?? 0);
          if (typeof value !== "string") return;
          const saved = { id: Date.now().toString() + "-" + Math.random().toString(36).slice(2, 8), filename, value, x, y };
          actions.call("storage_quick_upload", saved);
        } catch (err2) {
        }
      })();
      return state;
    }
  }, ctext(i18n.map.bot_options_import));

  // src/GUI/components/tabs/bot-options/defend-template.ts
  var DefendTemplate = ({
    disabled,
    defendAfterFinish
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_defend_template)),
      Checkbox({
        disabled,
        checked: defendAfterFinish,
        onchange: (state, checked) => {
          if (disabled) return state;
          actions.emit("change_defend_template", checked);
          return {
            ...state,
            defendAfterFinish: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/reverse-painting.ts
  var ReversePainting = ({
    disabled,
    reversePainting
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_reverse_painting)),
      Checkbox({
        disabled,
        checked: reversePainting,
        onchange: (state, checked) => {
          if (disabled) return state;
          global2.storage.set("reversePainting", checked);
          return {
            ...state,
            reversePainting: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/captcha-solver.ts
  var CaptchaSolver = ({ state }) => {
    const host = location.hostname;
    if (!host.endsWith("globalpixel.fun")) return null;
    const enabled2 = global2.storage.get("captcha-solver");
    const disabled = state.disableBotInputs || state.botWorksNow;
    return h("div", {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    }, [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_captcha_solver)),
      Checkbox({
        checked: enabled2,
        disabled,
        onchange: (state2, checked) => {
          if (disabled) return state2;
          global2.storage.set("captcha-solver", checked);
          return {
            ...state2
          };
        }
      })
    ]);
  };
  var captcha_solver_default = CaptchaSolver;

  // src/GUI/components/tabs/bot-options/cooldown-threshold.ts
  var CooldownThreshold = ({
    disabled,
    cooldownThreshold
  }) => h(
    "div",
    {
      style: {
        ...disabled ? disabledInputCheckboxStyle : inputCheckboxStyle,
        gridColumn: "1 / 2",
        justifySelf: "start"
      }
    },
    [
      h("span", { style: baseStyle }, ctext(i18n.map.bot_options_cooldown_threshold)),
      Input({
        disabled,
        type: "number",
        step: "1",
        min: 0,
        value: cooldownThreshold,
        style: { width: "100px" },
        onChange: (state, event) => {
          const value = event.currentTarget.value;
          const nextValue = value === "" ? 0 : Math.max(0, Math.floor(Number(value) || 0));
          actions.emit("change_cooldown_threshold", nextValue);
          return {
            ...state,
            cooldownThreshold: nextValue
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/revival-api.ts
  var RevivalApi = ({
    disabled,
    revivalApiEnabled
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_revival_api_button)),
      Checkbox({
        disabled,
        checked: revivalApiEnabled,
        onchange: (state, checked) => {
          if (disabled) return state;
          actions.emit("change_revival_api", checked);
          return {
            ...state,
            revivalApiEnabled: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/skip-protect.ts
  var SkipProtect = ({
    disabled,
    skipProtect
  }) => h(
    "div",
    {
      style: disabled ? disabledInputCheckboxStyle : inputCheckboxStyle
    },
    [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.bot_options_skip_protect)),
      Checkbox({
        disabled,
        checked: skipProtect,
        onchange: (state, checked) => {
          if (disabled) return state;
          global2.storage.set("skipProtect", checked);
          actions.call("change_skip_protect", checked);
          return {
            ...state,
            skipProtect: checked
          };
        }
      })
    ]
  );

  // src/GUI/components/tabs/bot-options/index.ts
  var contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px"
  };
  var buttonsRowStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
    alignItems: "center",
    justifyContent: "center",
    gridColumn: "1 / -1",
    marginTop: "4px"
  };
  var BotOptionsTab = ({
    state,
    visible
  }) => !visible ? null : h("div", { style: contentStyle }, [
    h("div", { style: { ...tabTitleStyle, gridColumn: "1 / -1" } }, ctext(i18n.map.bot_options_tab_title)),
    StopOnCaptcha({
      disabled: state.disableBotInputs,
      stopOnCaptcha: state.stopOnCaptcha
    }),
    FollowBot({
      disabled: state.disableBotInputs,
      followBot: state.followBot
    }),
    SmartPlace({
      disabled: state.disableBotInputs,
      smartPlace: state.smartPlace
    }),
    DefendTemplate({
      disabled: state.disableBotInputs,
      defendAfterFinish: state.defendAfterFinish
    }),
    RevivalApi({
      disabled: state.disableBotInputs,
      revivalApiEnabled: state.revivalApiEnabled
    }),
    ReversePainting({
      disabled: state.disableBotInputs,
      reversePainting: state.reversePainting
    }),
    captcha_solver_default({ state }),
    CooldownThreshold({
      disabled: state.disableBotInputs,
      cooldownThreshold: state.cooldownThreshold
    }),
    SkipProtect({
      disabled: state.disableBotInputs,
      skipProtect: state.skipProtect
    }),
    h("div", { style: buttonsRowStyle }, [
      ExportTemplateButton({ templateDbRecord: state.templateDbRecord, templateCoords: state.templateCoords, disabled: state.disableBotInputs }),
      ImportTemplateButton({ disabled: state.disableBotInputs }),
      HeatmapButton(),
      HeatwebButton()
    ])
  ]);

  // src/GUI/components/tabs/tabs-panel.ts
  var style4 = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "2px"
  };
  var buttonStyle2 = {
    ...buttonStyle,
    border: "none",
    opacity: "0.85",
    padding: "4px 8px",
    width: "100%",
    textAlign: "left",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
  var activeButtonStyle = {
    ...buttonStyle2,
    opacity: "1",
    background: "linear-gradient(135deg, #4a90e2 0%, #9b59b6 100%)",
    color: "#ffffff",
    boxShadow: "0 2px 8px rgba(108, 92, 231, 0.4)"
  };
  var getTabLabel = (tab) => {
    switch (tab) {
      case "bot":
        return i18n.map.bot_tab_settings_title;
      case "advanced":
        return i18n.map.bot_options_tab_title;
      case "storage":
        return i18n.map.storage_tab_title;
      case "checkpoints":
        return i18n.map.checkpoints_tab_title;
      case "canvas utils":
        return i18n.map.utils_tab_title;
      case "keyboard":
        return i18n.map.keyboard_tab_title;
      case "other":
        return i18n.map.other_tab_title;
      default:
        return tab;
    }
  };
  var TabsPanel = ({
    currentTab,
    onChange
  }) => h(
    "div",
    { style: style4 },
    availableTabs.map(
      (tab) => h("button", {
        style: currentTab === tab ? activeButtonStyle : buttonStyle2,
        onclick: (state) => onChange(state, tab)
      }, ctext(getTabLabel(tab)))
    )
  );

  // src/GUI/components/tabs/canvas-utils/screenshot-coords-input.ts
  var rootStyle3 = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    gap: "5px"
  };
  var ScreenshotCoordsInput = ({
    style: style12,
    screenshotCoords,
    onChange
  }) => h("div", { style: {
    ...rootStyle3,
    ...style12
  } }, [
    CoordInput({
      value: screenshotCoords[0],
      text: "x1: ",
      onChange: (state, value) => onChange(state, [
        value,
        state.screenshotCoords[1],
        state.screenshotCoords[2],
        state.screenshotCoords[3]
      ])
    }),
    CoordInput({
      value: screenshotCoords[1],
      text: "y1: ",
      onChange: (state, value) => onChange(state, [
        state.screenshotCoords[0],
        value,
        state.screenshotCoords[2],
        state.screenshotCoords[3]
      ])
    }),
    CoordInput({
      value: screenshotCoords[2],
      text: "x2: ",
      onChange: (state, value) => onChange(state, [
        state.screenshotCoords[0],
        state.screenshotCoords[1],
        value,
        state.screenshotCoords[3]
      ])
    }),
    CoordInput({
      value: screenshotCoords[3],
      text: "y2: ",
      onChange: (state, value) => onChange(state, [
        state.screenshotCoords[0],
        state.screenshotCoords[1],
        state.screenshotCoords[2],
        value
      ])
    })
  ]);

  // src/GUI/contexts.ts
  var Contexts = class {
    data;
    constructor(initialData) {
      this.data = initialData;
    }
    set(contextName, key, value) {
      this.data[contextName][key] = value;
    }
    get(contextName, key) {
      return this.data[contextName][key];
    }
  };
  var contexts = new Contexts({
    screenshot_section: {
      progress: null
    },
    download_canvas_section: {
      progress: null
    },
    keyboard_section: {
      currently_editing_action: null
    },
    checkpoints_section: {
      new_checkpoint_name: "",
      currently_editing_checkpoint_name: null,
      currently_editing_checkpoint: null
    }
  });

  // src/GUI/components/tabs/canvas-utils/screenshot.ts
  var logger10 = new Logger("Screenshot");
  var Screenshot = ({
    screenshotCoords,
    onChange
  }) => {
    const progress = contexts.get("screenshot_section", "progress");
    const downloadProgress = contexts.get("download_canvas_section", "progress");
    const showDownloadFull = !!global2.api && Number.isFinite(global2.api.info.borders.width) && Number.isFinite(global2.api.info.borders.height);
    return h("div", { style: {
      width: "50%"
    } }, [
      h("div", {
        style: {
          ...baseStyle,
          marginBottom: "5px"
        }
      }, ctext(i18n.map.utils_tab_screenshot)),
      ScreenshotCoordsInput({
        style: { marginBottom: "5px" },
        screenshotCoords,
        onChange: (state, coords) => {
          global2.storage.set("screenshot_coords", coords);
          return onChange(state, coords);
        }
      }),
      h("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, [
        progress === null && h("button", {
          style: buttonStyle,
          onclick: (state) => {
            contexts.set("screenshot_section", "progress", 0);
            global2.api?.download({
              bounds: new Rect(
                Number(state.screenshotCoords[0]),
                Number(state.screenshotCoords[1]),
                Number(state.screenshotCoords[2]),
                Number(state.screenshotCoords[3])
              ),
              onProgress: (progress2) => {
                contexts.set("screenshot_section", "progress", progress2);
              }
            }).finally(() => {
              contexts.set("screenshot_section", "progress", null);
            });
            return state;
          }
        }, ctext(i18n.map.utils_tab_download)),
        progress !== null && h("div", { style: { whiteSpace: "nowrap" } }, text(`${i18n.map.utils_tab_loading} ${(progress * 100).toFixed(2)}%`)),
        downloadProgress === null && showDownloadFull && h("button", { style: nowrapButtonStyle, onclick: (state) => {
          contexts.set("download_canvas_section", "progress", 0);
          (async () => {
            try {
              await global2.api?.downloadFullCanvas({
                onProgress: (p) => contexts.set("download_canvas_section", "progress", p),
                batchSize: 20,
                delayMs: 200
              });
            } catch (e) {
              logger10.error(e);
            } finally {
              contexts.set("download_canvas_section", "progress", null);
            }
          })();
          return state;
        } }, ctext(i18n.map.utils_tab_download_full)),
        !showDownloadFull && h("div", { style: { color: "var(--text-color, #f00)" } }, ctext(i18n.map.utils_tab_download_unavailable)),
        downloadProgress !== null && h("div", { style: { whiteSpace: "nowrap" } }, text(`${i18n.map.utils_tab_downloading_full} ${(downloadProgress * 100).toFixed(2)}%`))
      ])
    ]);
  };

  // src/GUI/components/hr.ts
  var style5 = {
    background: textColor,
    height: "1px",
    marginTop: "2px",
    marginBottom: "2px",
    opacity: "0.8",
    flexShrink: "0",
    willChange: "opacity"
  };
  var Hr = ({
    style: styleProp
  } = {}) => h("div", { style: { ...style5, ...styleProp } });

  // src/GUI/components/tabs/canvas-utils/index.ts
  var CanvasUtilsTab = ({
    visible,
    screenshotCoords,
    onChange,
    canvasApiReady,
    pixelRadarEnabled,
    setPixelRadarEnabledAction: setPixelRadarEnabledAction2
  }) => {
    if (!visible) {
      return null;
    }
    const titleUpdateEnabled = areTitleUpdatesEnabled();
    const pixelRadarSupported = canvasApiReady && isPixelRadarSupported();
    return h("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...!visible ? { display: "none" } : void 0
    } }, [
      h("div", { style: tabTitleStyle }, ctext(i18n.map.utils_tab_title)),
      h("div", { style: { gridColumn: "1 / -1", display: "flex", gap: "5px", alignItems: "center" } }, [
        h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.utils_tab_title_update)),
        Checkbox({
          checked: titleUpdateEnabled,
          onchange: (state, checked) => {
            toggleTitleUpdates(checked);
            return state;
          }
        })
      ]),
      ...pixelRadarSupported ? [
        h("div", { style: { gridColumn: "1 / -1", display: "flex", gap: "5px", alignItems: "center" } }, [
          h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.utils_tab_pixel_radar)),
          Checkbox({
            checked: pixelRadarEnabled,
            onchange: setPixelRadarEnabledAction2
          })
        ])
      ] : [],
      Hr(),
      Screenshot({
        screenshotCoords,
        onChange
      })
    ]);
  };

  // src/GUI/components/tabs/storage/index.ts
  var __savedListSwipe = { active: false, startX: 0, startY: 0, pointerId: null };
  var StorageTab = ({
    state,
    visible,
    setStorageSaveNameAction: setStorageSaveNameAction2,
    setStorageSaveCoordsAction: setStorageSaveCoordsAction2
  }) => {
    const idx = Math.max(0, Math.min(state.selectedSavedTemplateIndex ?? 0, state.savedTemplates.length - 1));
    const t = state.savedTemplates[idx];
    return h("div", { style: {
      ...storageRootStyle,
      ...!visible ? { display: "none" } : void 0
    } }, [
      h("div", { style: storageSectionStyle }, [
        h("div", { style: tabTitleStyle }, text(i18n.map.storage_tab_save_title ?? "Save")),
        h("div", { style: storageRowStyle }, [
          h("div", { style: { ...baseStyle, width: "60px" } }, text(i18n.map.storage_tab_name_placeholder ?? "name")),
          Input({
            disabled: false,
            type: "text",
            className: "darkbot-storage-name",
            style: storageNameInputStyle,
            value: state.storageSaveName,
            onChange: (s, e) => setStorageSaveNameAction2(s, e.currentTarget.value)
          })
        ]),
        h("div", { style: storageRowStyle }, [
          h("div", { style: { ...baseStyle, width: "60px" } }, text(i18n.map.storage_tab_coords ?? "coords")),
          Input({
            disabled: false,
            type: "number",
            value: state.storageSaveX,
            onChange: (s, e) => setStorageSaveCoordsAction2(s, [e.currentTarget.value, s.storageSaveY])
          }),
          Input({
            disabled: false,
            type: "number",
            value: state.storageSaveY,
            onChange: (s, e) => setStorageSaveCoordsAction2(s, [s.storageSaveX, e.currentTarget.value])
          })
        ]),
        h("div", { style: { ...storageRowStyle, justifyContent: "center", gap: "8px" } }, [
          h("button", {
            style: { ...buttonStyle, display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 8px" },
            title: "Saves any file to Storage",
            onclick: (state2) => {
              (async () => {
                const file = await getImageFromUser();
                if (!file) return;
                const data = await fileToDataUrl(file);
                const name2 = (state2.storageSaveName || "").trim() || "untitled.png";
                const x = state2.storageSaveX ? parseInt(state2.storageSaveX) : void 0;
                const y = state2.storageSaveY ? parseInt(state2.storageSaveY) : void 0;
                const newId = await idb.addSavedTemplate({ filename: file.name, value: data, name: name2, x, y });
                const list = await idb.getSavedTemplates();
                gui.setSavedTemplates(list);
                const newIndex = list.findIndex((i) => i.id === newId);
                gui.setSelectedSavedTemplateIndex(newIndex === -1 ? Math.max(0, list.length - 1) : newIndex);
                gui.setStorageSaveName("");
              })();
              return state2;
            }
          }, SaveFromFileIcon({ size: 16 })),
          h("button", {
            style: { ...buttonStyle, display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 8px" },
            title: "Saves the template in the Bot to Storage",
            onclick: (state2) => {
              (async () => {
                const readyTemplate = await (async () => {
                  try {
                    const name2 = (state2.storageSaveName || "").trim() || "template.png";
                    const x = state2.storageSaveX ? parseInt(state2.storageSaveX) : void 0;
                    const y = state2.storageSaveY ? parseInt(state2.storageSaveY) : void 0;
                    const templateRecord = await idb.getTemplate();
                    if (!templateRecord) return null;
                    return { filename: name2, value: templateRecord.value, x, y, name: name2 };
                  } catch (e) {
                    return null;
                  }
                })();
                if (!readyTemplate) return;
                const newId = await idb.addSavedTemplate(readyTemplate);
                const list = await idb.getSavedTemplates();
                gui.setSavedTemplates(list);
                const newIndex = list.findIndex((i) => i.id === newId);
                gui.setSelectedSavedTemplateIndex(newIndex === -1 ? Math.max(0, list.length - 1) : newIndex);
              })();
              return state2;
            }
          }, SaveIcon({ size: 16 }))
        ])
      ]),
      h("div", { style: storageSectionStyle }, [
        h("div", { style: tabTitleStyle }, text(i18n.map.storage_tab_saved_title ?? "Saved templates")),
        h("div", {
          style: storageSavedListStyle,
          onwheel: (s, e) => {
            const list = s.savedTemplates ?? [];
            if (!list || list.length === 0) return s;
            const dir = e.deltaY > 0 ? 1 : -1;
            const current = s.selectedSavedTemplateIndex ?? 0;
            const len = list.length;
            const newIndex = ((current + dir) % len + len) % len;
            return { ...s, selectedSavedTemplateIndex: newIndex };
          },
          ontouchstart: (s, e) => {
            const startTarget = e.target ?? null;
            if (startTarget && startTarget.closest && startTarget.closest("button, input, a, textarea, select, label")) return s;
            const t2 = e.touches?.[0];
            if (!t2) return s;
            __savedListSwipe.active = true;
            __savedListSwipe.startX = t2.clientX;
            __savedListSwipe.startY = t2.clientY;
            return s;
          },
          ontouchmove: (s, e) => {
            const t2 = e.touches?.[0];
            if (!t2 || !__savedListSwipe.active) return s;
            const endY = t2.clientY;
            const endX = t2.clientX;
            const deltaY = endY - __savedListSwipe.startY;
            const deltaX = endX - __savedListSwipe.startX;
            const threshold = 30;
            if (Math.abs(deltaY) >= threshold && Math.abs(deltaY) > Math.abs(deltaX)) {
              const dir = deltaY > 0 ? 1 : -1;
              const list = s.savedTemplates ?? [];
              if (!list || list.length === 0) return s;
              const current = s.selectedSavedTemplateIndex ?? 0;
              const len = list.length;
              const newIndex = ((current + dir) % len + len) % len;
              __savedListSwipe.startY = endY;
              return { ...s, selectedSavedTemplateIndex: newIndex };
            }
            return s;
          },
          ontouchend: (s, e) => {
            if (!__savedListSwipe.active) return s;
            __savedListSwipe.active = false;
            const t2 = e.changedTouches?.[0];
            const endY = t2?.clientY ?? __savedListSwipe.startY;
            const endX = t2?.clientX ?? __savedListSwipe.startX;
            const deltaY = endY - __savedListSwipe.startY;
            const deltaX = endX - __savedListSwipe.startX;
            const threshold = 30;
            if (Math.abs(deltaY) < threshold || Math.abs(deltaY) < Math.abs(deltaX)) return s;
            const dir = deltaY > 0 ? 1 : -1;
            const list = s.savedTemplates ?? [];
            if (!list || list.length === 0) return s;
            const current = s.selectedSavedTemplateIndex ?? 0;
            const len = list.length;
            const newIndex = ((current + dir) % len + len) % len;
            return { ...s, selectedSavedTemplateIndex: newIndex };
          },
          ontouchcancel: (s) => {
            __savedListSwipe.active = false;
            return s;
          },
          onpointerdown: (s, e) => {
            const startTarget = e.target ?? null;
            if (startTarget && startTarget.closest && startTarget.closest("button, input, a, textarea, select, label")) return s;
            const pe = e;
            __savedListSwipe.active = true;
            __savedListSwipe.startX = pe.clientX;
            __savedListSwipe.startY = pe.clientY;
            __savedListSwipe.pointerId = pe.pointerId ?? null;
            try {
              e.currentTarget.setPointerCapture?.(pe.pointerId);
            } catch (err2) {
            }
            return s;
          },
          onpointermove: (s, e) => {
            if (!__savedListSwipe.active) return s;
            const pe = e;
            const endY = pe.clientY;
            const endX = pe.clientX;
            const deltaY = endY - __savedListSwipe.startY;
            const deltaX = endX - __savedListSwipe.startX;
            const threshold = 30;
            if (Math.abs(deltaY) >= threshold && Math.abs(deltaY) > Math.abs(deltaX)) {
              const dir = deltaY > 0 ? 1 : -1;
              const list = s.savedTemplates ?? [];
              if (!list || list.length === 0) return s;
              const current = s.selectedSavedTemplateIndex ?? 0;
              const len = list.length;
              const newIndex = ((current + dir) % len + len) % len;
              __savedListSwipe.startY = endY;
              return { ...s, selectedSavedTemplateIndex: newIndex };
            }
            return s;
          },
          onpointerup: (s, e) => {
            if (!__savedListSwipe.active) return s;
            __savedListSwipe.active = false;
            const pe = e;
            const endY = pe.clientY;
            const endX = pe.clientX;
            const deltaY = endY - __savedListSwipe.startY;
            const deltaX = endX - __savedListSwipe.startX;
            const threshold = 30;
            try {
              const el = e.currentTarget;
              if (__savedListSwipe.pointerId != null) el.releasePointerCapture?.(__savedListSwipe.pointerId);
            } catch (err2) {
            }
            if (Math.abs(deltaY) < threshold || Math.abs(deltaY) < Math.abs(deltaX)) return s;
            const dir = deltaY > 0 ? 1 : -1;
            const list = s.savedTemplates ?? [];
            if (!list || list.length === 0) return s;
            const current = s.selectedSavedTemplateIndex ?? 0;
            const len = list.length;
            const newIndex = ((current + dir) % len + len) % len;
            return { ...s, selectedSavedTemplateIndex: newIndex };
          },
          onpointercancel: (s) => {
            __savedListSwipe.active = false;
            __savedListSwipe.pointerId = null;
            return s;
          }
        }, [
          !t ? h("div", { style: { ...baseStyle } }, text(i18n.map.storage_tab_no_templates ?? "No templates")) : h("div", { style: { display: "flex", gap: "8px", alignItems: "flex-start", padding: "0", minHeight: "80px" } }, [
            state.editingTemplateId === t.id ? h("div", { style: { display: "flex", flexDirection: "column", gap: "4px", flex: "1" } }, [
              Input({ disabled: false, style: storageNameInputStyle, className: "darkbot-storage-name", type: "text", value: state.editingTemplateName ?? (t.name ?? ""), onChange: (s, e) => ({ ...s, editingTemplateName: e.currentTarget.value }) }),
              h("div", { style: { display: "flex", gap: "6px", justifyContent: "center" } }, [
                Input({ disabled: false, type: "number", value: state.editingTemplateX ?? (t.x ?? "").toString(), onChange: (s, e) => ({ ...s, editingTemplateX: e.currentTarget.value }) }),
                Input({ disabled: false, type: "number", value: state.editingTemplateY ?? (t.y ?? "").toString(), onChange: (s, e) => ({ ...s, editingTemplateY: e.currentTarget.value }) })
              ]),
              h("div", { style: { display: "flex", gap: "6px", justifyContent: "center" } }, [
                h("button", { style: deleteButtonStyle, class: "darkbot-forced", onclick: (s) => {
                  (async () => {
                    await idb.updateSavedTemplate(t.id, { name: s.editingTemplateName || t.name, x: s.editingTemplateX ? parseInt(s.editingTemplateX) : void 0, y: s.editingTemplateY ? parseInt(s.editingTemplateY) : void 0 });
                    const list = await idb.getSavedTemplates();
                    gui.setSavedTemplates(list);
                  })();
                  return { ...s, editingTemplateId: null, editingTemplateName: "", editingTemplateX: "", editingTemplateY: "" };
                } }, text("Save")),
                h("button", { style: buttonStyle, onclick: (s) => ({ ...s, editingTemplateId: null, editingTemplateName: "", editingTemplateX: "", editingTemplateY: "" }) }, text("Cancel"))
              ])
            ]) : h("div", { style: { display: "flex", flexDirection: "column", gap: "4px", flex: "1" } }, [
              h("div", { style: { ...baseStyle, fontWeight: "bold", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, title: t.name ?? t.filename }, text((t.name ?? t.filename).length > 8 ? (t.name ?? t.filename).substring(0, 8) + "..." : t.name ?? t.filename)),
              h("div", { style: { ...monospaceStyle } }, text(`${t.x ?? "-"}:${t.y ?? "-"}`)),
              h("div", { style: { display: "flex", gap: "6px" } }, [
                h("button", { style: buttonStyle, onclick: (s) => ({ ...s, editingTemplateId: t.id, editingTemplateName: t.name ?? "", editingTemplateX: (t.x ?? "").toString(), editingTemplateY: (t.y ?? "").toString() }) }, PencilIcon({ size: 16 })),
                h("button", { style: buttonStyle, onclick: (s) => {
                  actions.call("storage_quick_upload", t);
                  return s;
                } }, UploadIcon({ size: 16 })),
                h("button", { style: storagePreviewButtonStyle, onmouseenter: (state2) => ({ ...state2, showStorageTemplatePreview: true }), onmouseleave: (state2) => ({ ...state2, showStorageTemplatePreview: false }) }, EyeIcon({ size: 16 })),
                h("button", { style: buttonStyle, onclick: (s) => {
                  (async () => {
                    await idb.deleteSavedTemplate(t.id);
                    const list = await idb.getSavedTemplates();
                    gui.setSavedTemplates(list);
                    const oldIndex = s.selectedSavedTemplateIndex ?? 0;
                    const newIndex = list.length === 0 ? 0 : Math.max(0, Math.min(list.length - 1, oldIndex));
                    gui.setSelectedSavedTemplateIndex(newIndex);
                  })();
                  return s;
                } }, DeleteIcon({ size: 16 }))
              ])
            ])
          ]),
          TemplateDisplay({
            showTemplate: state.showStorageTemplatePreview ?? false,
            templateDbRecord: t ? { value: t.value, filename: t.filename } : null,
            mouseClientX: state.mouseClientX,
            mouseClientY: state.mouseClientY
          }),
          state.savedTemplates && state.savedTemplates.length > 1 && state.editingTemplateId !== t?.id && h("div", { style: mouseScrollHintStyle, class: "mouse-scroll-icon", title: "Scroll saved templates" }, MouseScrollIcon({ size: 18 }))
        ])
      ])
    ]);
  };
  var storage_default = StorageTab;

  // src/GUI/components/tabs/keyboard/index.ts
  var bindingsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    columnGap: "8px"
  };
  var keyBindingRowStyle = {
    display: "grid",
    gridTemplateColumns: "subgrid",
    gridColumn: "1 / -1",
    marginTop: "2px",
    marginBottom: "2px"
  };
  var keyBindingHeaderStyle = {
    ...keyBindingRowStyle,
    marginTop: "0px",
    marginBottom: "5px"
  };
  var keyBindingRowHrStyle = {
    ...keyBindingRowStyle,
    opacity: "0.5",
    backgroundColor: "darkred"
  };
  var keyButtonStyle = {
    ...buttonStyle,
    width: "100%",
    textAlign: "center",
    border: "none"
  };
  var keyDescriptionStyle = {
    ...baseStyle,
    padding: "2px"
  };
  var actionToDescription = {
    switch_bot: () => i18n.map.keyboard_tab_actions_switch_bot,
    change_template_coords_to_mouse: () => i18n.map.keyboard_tab_actions_update_coords,
    change_revival_api: () => i18n.map.keyboard_tab_actions_revival_api
  };
  var KeyboardTab = ({
    visible
  }) => {
    let currentlyEditingAction = contexts.get("keyboard_section", "currently_editing_action");
    if (!visible) {
      if (currentlyEditingAction !== null) {
        currentlyEditingAction.controller.abort();
        contexts.set("keyboard_section", "currently_editing_action", null);
      }
      currentlyEditingAction = null;
    }
    if (!visible) {
      return null;
    }
    const buttonsAndDescriptions = [];
    const currentMap = global2.storage.get("keyboard_map");
    for (const action in actionToDescription) {
      const typedAction = action;
      const description = actionToDescription[typedAction]();
      const currentKey = currentMap[typedAction];
      const keyIsCurrentlyEditing = currentlyEditingAction?.action === typedAction;
      buttonsAndDescriptions.push(Hr({
        style: keyBindingRowHrStyle
      }));
      buttonsAndDescriptions.push(
        h("div", { style: keyBindingRowStyle }, [
          h("div", {
            style: keyButtonStyle,
            onclick: (state) => {
              const inputController = global2.keyboardBindings.inputNewBinding({
                action: typedAction,
                onChange: (map2) => {
                  global2.storage.set("keyboard_map", map2);
                  contexts.set("keyboard_section", "currently_editing_action", null);
                }
              });
              contexts.set("keyboard_section", "currently_editing_action", {
                action: typedAction,
                controller: inputController
              });
              return state;
            }
          }, keyIsCurrentlyEditing ? ctext(i18n.map.keyboard_tab_press_some_key) : text(currentKey)),
          h("div", { style: keyDescriptionStyle }, ctext(description))
        ])
      );
    }
    return h("div", {}, [
      h("div", { style: tabTitleStyle }, ctext(i18n.map.keyboard_tab_title)),
      h("div", { style: bindingsStyle }, [
        h("div", { style: keyBindingHeaderStyle }, [
          h("div", { style: { ...baseStyle, placeSelf: "center" } }, ctext(i18n.map.keyboard_tab_key)),
          h("div", { style: baseStyle }, ctext(i18n.map.keyboard_tab_action))
        ]),
        ...buttonsAndDescriptions
      ])
    ]);
  };

  // src/GUI/components/app.ts
  var rootStyle4 = {
    color: textColor,
    position: "absolute",
    fontWeight: "normal",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: defaultFontSize,
    width: `${uiWidth}px`,
    background: "linear-gradient(180deg, rgba(20, 10, 45, 0.98) 0%, rgba(10, 0, 30, 0.96) 100%)",
    padding: "6px",
    border: "1px solid",
    borderColor,
    borderRadius: "8px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(108, 92, 231, 0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  };
  var App = ({
    left,
    top,
    zIndex,
    width,
    classSuffix
  }, children) => {
    const widthValue = width ?? uiWidth;
    const header = children[0];
    const body = children.slice(1);
    return h("div", {
      style: {
        ...rootStyle4,
        width: `${widthValue}px`,
        left: `${Math.max(0, left)}px`,
        top: `${top}px`,
        zIndex: zIndex.toString()
      },
      class: classSuffix ?? "darkbot-app"
    }, [
      header,
      h("div", { class: "darkbot-content", style: { overflow: "hidden" } }, body)
    ]);
  };

  // src/GUI/components/tabs/other/fun-thing.ts
  var style6 = {
    gridColumn: "1 / -1",
    display: "flex",
    gap: "5px",
    alignItems: "center"
  };
  var tickerId = null;
  var currentHueRotate = 0;
  function funThingTick() {
    tickerId = window.requestAnimationFrame(() => {
      document.body.style.filter = `hue-rotate(${currentHueRotate}deg)`;
      currentHueRotate += 0.5;
      if (currentHueRotate > 360) {
        currentHueRotate = 0;
      }
      funThingTick();
    });
  }
  if (global2.storage.get("fun_thing")) {
    funThingTick();
  }
  global2.storage.on("fun_thing", (enabled2) => {
    if (enabled2) {
      funThingTick();
    } else {
      if (tickerId) {
        cancelAnimationFrame(tickerId);
        document.body.style.filter = "";
      }
    }
  });
  var FunThing = () => {
    const funThing = global2.storage.get("fun_thing");
    return h("div", { style: style6 }, [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.other_tab_fun_thing)),
      Checkbox({
        checked: funThing,
        onchange: (state, checked) => {
          global2.storage.set("fun_thing", checked);
          return state;
        }
      })
    ]);
  };

  // src/GUI/components/tabs/other/debug-option.ts
  var style7 = {
    gridColumn: "1 / -1",
    display: "flex",
    gap: "5px",
    alignItems: "center"
  };
  var DebugOption = () => {
    const debug = global2.storage.get("debug");
    return h("div", { style: style7 }, [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.other_tab_debug)),
      Checkbox({
        checked: debug,
        onchange: (state, checked) => {
          global2.storage.set("debug", checked);
          return state;
        }
      })
    ]);
  };

  // src/GUI/components/tabs/other/void-theme.ts
  var style8 = {
    gridColumn: "1 / -1",
    display: "flex",
    gap: "5px",
    alignItems: "center"
  };
  var VoidTheme = () => {
    const voidThemeEnabled = global2.storage.get("void_theme");
    return h("div", { style: style8 }, [
      h("span", { style: { ...baseStyle, ...checkboxLabelStyle } }, ctext(i18n.map.other_tab_void_theme)),
      Checkbox({
        checked: voidThemeEnabled,
        onchange: (state, checked) => {
          global2.storage.set("void_theme", checked);
          return state;
        }
      })
    ]);
  };

  // src/GUI/components/tabs/other/index.ts
  var containerStyle2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "8px",
    rowGap: "8px"
  };
  var OtherTab = ({
    visible
  }) => {
    if (!visible) return null;
    return h("div", {}, [
      h("div", { style: tabTitleStyle }, ctext(i18n.map.other_tab_title)),
      h("div", { style: containerStyle2 }, [
        Language(),
        VoidTheme(),
        FunThing(),
        DebugOption()
      ])
    ]);
  };

  // src/checkpoints/checkpoints.ts
  var Checkpoints = class extends StrictEmitter {
    constructor(list) {
      super();
      this.list = list;
    }
    getAll() {
      return this.list;
    }
    exists(name2) {
      return this.list.some((p) => p.name === name2);
    }
    create(data) {
      const exists = this.exists(data.name);
      if (exists) throw new Error(`checkpoint with name ${data.name} already exists`);
      this.list.unshift(data);
      this.emit("change", this.list);
    }
    delete(name2) {
      const index = this.getIndexByName(name2);
      this.list.splice(index, 1);
      this.emit("change", this.list);
    }
    update(name2, changes) {
      const index = this.getIndexByName(name2);
      const current = this.list[index];
      const updated = { ...current, ...changes };
      this.list[index] = updated;
      this.emit("change", this.list);
    }
    swap(name1, name2) {
      const index1 = this.getIndexByName(name1);
      const index2 = this.getIndexByName(name2);
      const [item1] = this.list.splice(index1, 1);
      this.list.splice(index2, 0, item1);
      this.emit("change", this.list);
    }
    getIndexByName(name2) {
      const index = this.list.findIndex((point) => point.name === name2);
      if (index === -1) throw new Error(`cant find checkpoint ${name2}`);
      return index;
    }
  };

  // src/checkpoints/index.ts
  var checkpoints = new Checkpoints(global2.storage.get("checkpoints"));
  checkpoints.on("change", (list) => global2.storage.set("checkpoints", list));

  // src/GUI/components/delete-button.ts
  var style9 = {
    ...deleteButtonStyle,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var DeleteButton = ({
    onclick
  }) => h("button", { style: style9, onclick, class: "darkbot-forced" }, [
    DeleteIcon({
      size: 16
    })
  ]);

  // src/GUI/components/check-button.ts
  var style10 = {
    ...buttonStyle,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var CheckButton = ({
    onclick,
    icon = "square"
  }) => h("button", { style: style10, onclick }, [
    icon === "tick" ? TickIcon({ size: 16 }) : CheckIcon({ size: 16 })
  ]);

  // src/GUI/components/pencil-button.ts
  var style11 = {
    ...buttonStyle,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  var PencilButton = ({
    onclick
  }) => h("button", { style: style11, onclick }, [
    PencilIcon({
      size: 16
    })
  ]);

  // src/GUI/components/tabs/checkpoints/checkpoint.ts
  var DraggableBody = ({
    checkpoint,
    style: style12
  }, children) => h("div", {
    style: style12,
    draggable: true,
    ondragstart: (state, e) => {
      e.dataTransfer?.setData("text/plain", checkpoint.name);
      return state;
    },
    ondragover: (state, e) => {
      e.preventDefault();
      const target = e.currentTarget;
      if (target) {
        target.style.borderColor = dragOverStyle.borderColor;
        target.style.backgroundColor = dragOverStyle.backgroundColor;
      }
      return state;
    },
    ondragleave: (state, e) => {
      const target = e.currentTarget;
      if (target) {
        target.style.borderColor = "transparent";
        target.style.backgroundColor = "transparent";
      }
      return state;
    },
    ondrop: (state, e) => {
      e.preventDefault();
      const draggedName = e.dataTransfer?.getData("text/plain");
      if (draggedName && draggedName !== checkpoint.name) {
        checkpoints.swap(draggedName, checkpoint.name);
      }
      const target = e.currentTarget;
      if (target) {
        target.style.borderColor = "transparent";
        target.style.backgroundColor = "transparent";
      }
      return state;
    }
  }, children);
  var editableCheckpointStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "5px"
  };
  var editableCheckpointInputsStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "5px"
  };
  var editableCheckpointButtonsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px"
  };
  var coordsInputStyle = {
    ...inputStyle,
    width: "75px"
  };
  var zoomInputStyle = {
    ...inputStyle,
    width: "40px"
  };
  var EditableCheckpoint = ({
    editableValues
  }) => {
    return DraggableBody({
      style: editableCheckpointStyle,
      checkpoint: editableValues
    }, [
      h("div", { style: editableCheckpointInputsStyle }, [
        h("input", {
          type: "text",
          style: checkpointTextboxStyle,
          class: "darkbot-checkpoint-input",
          value: editableValues.name,
          oninput: (state, e) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", {
              ...editableValues,
              name: e.currentTarget.value
            });
            return state;
          }
        }),
        h("input", {
          style: coordsInputStyle,
          type: "number",
          value: editableValues.x.toString(),
          oninput: (state, e) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", {
              ...editableValues,
              x: parseInt(e.currentTarget.value || "0")
            });
            return state;
          }
        }),
        h("input", {
          style: coordsInputStyle,
          type: "number",
          value: editableValues.y.toString(),
          oninput: (state, e) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", {
              ...editableValues,
              y: parseInt(e.currentTarget.value || "0")
            });
            return state;
          }
        }),
        h("input", {
          style: zoomInputStyle,
          type: "number",
          value: editableValues.zoom.toString(),
          oninput: (state, e) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", {
              ...editableValues,
              zoom: parseInt(e.currentTarget.value || "0")
            });
            return state;
          }
        })
      ]),
      h("div", { style: editableCheckpointButtonsStyle }, [
        CheckButton({
          icon: "tick",
          onclick: (state) => {
            const originalName = contexts.get("checkpoints_section", "currently_editing_checkpoint_name");
            checkpoints.update(originalName, editableValues);
            contexts.set("checkpoints_section", "currently_editing_checkpoint", null);
            contexts.set("checkpoints_section", "currently_editing_checkpoint_name", null);
            return state;
          }
        }),
        DeleteButton({
          onclick: (state) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", null);
            contexts.set("checkpoints_section", "currently_editing_checkpoint_name", null);
            return state;
          }
        })
      ])
    ]);
  };
  var linkCheckpointStyle = {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: "10px",
    cursor: "move",
    userSelect: "none",
    // padding: '5px',
    border: "1px solid transparent",
    transition: "border-color 0.2s"
  };
  var dragOverStyle = {
    borderColor: "#666",
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  };
  var LinkCheckpoint = ({
    location: location2
  }) => {
    const canvasName = global2.api?.getCanvasNameByIdent?.(location2.canvasIdent) ?? location2.canvasIdent;
    return DraggableBody(
      {
        style: linkCheckpointStyle,
        checkpoint: location2
      },
      [
        h("div", {
          style: {
            ...baseStyle,
            ...cursorPointerStyle
          },
          onclick: (state) => {
            global2.csa?.goto(location2);
            return state;
          }
        }, [
          text(location2.name),
          h("span", { style: { color: textColor } }, [
            text(` - ${canvasName} ${location2.x} ${location2.y}`)
          ])
        ]),
        PencilButton({
          onclick: (state) => {
            contexts.set("checkpoints_section", "currently_editing_checkpoint", location2);
            contexts.set("checkpoints_section", "currently_editing_checkpoint_name", location2.name);
            return state;
          }
        }),
        DeleteButton({
          onclick: (state) => {
            checkpoints.delete(location2.name);
            return state;
          }
        })
      ]
    );
  };
  var Checkpoint = ({
    location: location2
  }) => {
    const currentlyEditingCheckpoint = contexts.get("checkpoints_section", "currently_editing_checkpoint");
    const currentlyEditingCheckpointName = contexts.get("checkpoints_section", "currently_editing_checkpoint_name");
    const editable = currentlyEditingCheckpointName === location2.name;
    if (editable && currentlyEditingCheckpoint) {
      return EditableCheckpoint({
        editableValues: currentlyEditingCheckpoint
      });
    } else {
      return LinkCheckpoint({
        location: location2
      });
    }
  };

  // src/GUI/components/tabs/checkpoints/index.ts
  var containerStyle3 = {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    paddingTop: "0px",
    maxHeight: "200px",
    overflow: "auto",
    scrollbarWidth: "none",
    //@ts-expect-error
    "-ms-overflow-style": "none"
  };
  var addCheckpointFromCurrentPosition = (name2) => {
    const csa = global2.csa;
    if (!csa) return;
    const current = csa.getCurrentLocation();
    if (!current) return;
    checkpoints.create({
      name: name2,
      canvasIdent: current.canvasIdent,
      x: current.x,
      y: current.y,
      zoom: current.zoom
    });
  };
  var addSectionStyle = {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "5px"
  };
  var CheckpointsTab = ({
    visible
  }) => {
    if (!visible) return null;
    const list = checkpoints.getAll();
    return h("div", {}, [
      h(
        "div",
        { style: tabTitleStyle },
        ctext(i18n.map.checkpoints_tab_title)
      ),
      h("div", { style: containerStyle3 }, [
        h("div", { style: addSectionStyle }, [
          h("input", {
            style: checkpointTextboxStyle,
            class: "darkbot-checkpoint-input",
            type: "text",
            name: "checkpoint_name",
            placeholder: i18n.map.checkpoints_tab_add_placeholder,
            value: contexts.get("checkpoints_section", "new_checkpoint_name"),
            oninput: (state, value) => {
              contexts.set("checkpoints_section", "new_checkpoint_name", value.target.value);
              return state;
            }
          }),
          h("button", {
            style: buttonStyle,
            onclick: (state) => {
              addCheckpointFromCurrentPosition(contexts.get("checkpoints_section", "new_checkpoint_name"));
              contexts.set("checkpoints_section", "new_checkpoint_name", "");
              return state;
            }
          }, ctext(i18n.map.checkpoints_tab_add))
        ]),
        ...list.map((checkpoint) => Checkpoint({
          location: checkpoint
        }))
      ])
    ]);
  };

  // src/GUI/components/crop-overlay.ts
  // ===== Pixel-Perfect Crop Tool with Pixel Grid Snapping =====
  var isDragging = false;
  var dragStartPixelX = 0;
  var dragStartPixelY = 0;
  var cropKeyHandlerAttached = false;

  var CropOverlay = ({
    cropMode,
    cropSelection,
    templateDbRecord,
    setCropSelectionAction: setCropSelectionAction2,
    applyCropAction: applyCropAction2,
    toggleCropModeAction: toggleCropModeAction2
  }) => {
    if (!cropMode) {
      isDragging = false;
      return null;
    }

    // Keyboard shortcut listener (Escape to cancel crop)
    if (!cropKeyHandlerAttached && typeof window !== "undefined") {
      cropKeyHandlerAttached = true;
      const keyHandler = (e) => {
        if (e.key === "Escape") {
          isDragging = false;
          window.removeEventListener("keydown", keyHandler);
          cropKeyHandlerAttached = false;
          if (global2.guiDispatch) {
            global2.guiDispatch(toggleCropModeAction2, void 0);
          }
        }
      };
      window.addEventListener("keydown", keyHandler);
    }

    // Helper to calculate pixel-scaled dimensions so small images (like 32x32)
    // are magnified crisply with pixelated rendering for easy, precise editing
    const getScaledImageStyle = (imgEl) => {
      const base = { ...cropTemplateImageStyle };
      if (!imgEl) return base;
      const natW = imgEl.naturalWidth || 1;
      const natH = imgEl.naturalHeight || 1;
      const maxW = Math.floor(window.innerWidth * 0.75);
      const maxH = Math.floor(window.innerHeight * 0.72);
      
      // If small template (e.g. 32x32 Normal-Select.webp), scale it up using integer scale
      if (natW < 320 && natH < 320) {
        const intScale = Math.max(1, Math.min(Math.floor(maxW / natW), Math.floor(maxH / natH), 20));
        return {
          ...base,
          width: `${natW * intScale}px`,
          height: `${natH * intScale}px`
        };
      }
      return base;
    };

    // Mouse Down: Start pixel selection snapped to image pixel grid
    const handleMouseDown = (state, e) => {
      if (e.button !== 0 && !("touches" in e)) return state;
      const imgEl = document.getElementById("crop-template-img");
      if (!imgEl) return state;
      const rect = imgEl.getBoundingClientRect();
      const natW = imgEl.naturalWidth || 1;
      const natH = imgEl.naturalHeight || 1;
      const pixelW = rect.width / natW;
      const pixelH = rect.height / natH;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      // Snap to exact pixel coordinates on the image
      const pX = Math.max(0, Math.min(Math.floor(relX / pixelW), natW - 1));
      const pY = Math.max(0, Math.min(Math.floor(relY / pixelH), natH - 1));

      dragStartPixelX = pX;
      dragStartPixelY = pY;
      isDragging = true;

      // Selection payload: [pixelX, pixelY, pixelW, pixelH, screenLeft, screenTop, screenW, screenH]
      const screenLeft = pX * pixelW;
      const screenTop = pY * pixelH;
      const screenW = pixelW;
      const screenH = pixelH;

      return setCropSelectionAction2(state, [pX, pY, 1, 1, screenLeft, screenTop, screenW, screenH]);
    };

    // Mouse Move: Update selection rectangle snapped strictly to pixel edges
    const handleMouseMove = (state, e) => {
      if (!isDragging) return state;
      const imgEl = document.getElementById("crop-template-img");
      if (!imgEl) return state;
      const rect = imgEl.getBoundingClientRect();
      const natW = imgEl.naturalWidth || 1;
      const natH = imgEl.naturalHeight || 1;
      const pixelW = rect.width / natW;
      const pixelH = rect.height / natH;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      const currPX = Math.max(0, Math.min(Math.floor(relX / pixelW), natW - 1));
      const currPY = Math.max(0, Math.min(Math.floor(relY / pixelH), natH - 1));

      const selPixelX = Math.min(dragStartPixelX, currPX);
      const selPixelY = Math.min(dragStartPixelY, currPY);
      const selPixelW = Math.abs(currPX - dragStartPixelX) + 1;
      const selPixelH = Math.abs(currPY - dragStartPixelY) + 1;

      // Screen coordinates snapped exactly to pixel edges
      const screenLeft = selPixelX * pixelW;
      const screenTop = selPixelY * pixelH;
      const screenW = selPixelW * pixelW;
      const screenH = selPixelH * pixelH;

      return setCropSelectionAction2(state, [
        selPixelX, selPixelY, selPixelW, selPixelH,
        screenLeft, screenTop, screenW, screenH
      ]);
    };

    const handleMouseUp = (state) => {
      isDragging = false;
      return state;
    };

    // Double-click to apply crop
    const handleDoubleClick = (state) => {
      if (state.cropSelection) {
        actions.call("apply_crop", {
          selection: state.cropSelection
        });
        isDragging = false;
        return applyCropAction2(state, void 0);
      }
      return state;
    };

    // Right-click to cancel crop
    const handleRightClick = (state, e) => {
      e.preventDefault();
      isDragging = false;
      return toggleCropModeAction2(state, void 0);
    };

    const imgEl = typeof document !== "undefined" ? document.getElementById("crop-template-img") : null;
    const computedImgStyle = getScaledImageStyle(imgEl);
    const imgRectNow = imgEl ? imgEl.getBoundingClientRect() : null;

    return h("div", {
      style: { ...cropOverlayStyle, touchAction: "none" },
      onmousedown: handleMouseDown,
      onmousemove: handleMouseMove,
      onmouseup: handleMouseUp,
      ontouchstart: handleMouseDown,
      ontouchmove: handleMouseMove,
      ontouchend: handleMouseUp,
      ondblclick: handleDoubleClick,
      oncontextmenu: handleRightClick
    }, [
      templateDbRecord?.value ? h("img", {
        id: "crop-template-img",
        src: templateDbRecord.value,
        style: computedImgStyle
      }) : null,

      // Pixel-perfect visual selection box snapped to image pixel grid
      cropSelection && cropSelection[2] > 0 && cropSelection[3] > 0 && imgRectNow ? h("div", {
        style: {
          ...cropSelectionStyle,
          left: `${imgRectNow.left + cropSelection[4]}px`,
          top: `${imgRectNow.top + cropSelection[5]}px`,
          width: `${cropSelection[6]}px`,
          height: `${cropSelection[7]}px`
        }
      }) : null,

      // Enhanced Info Bar with blue-purple gradient theme and controls
      h("div", {
        style: cropInfoBarStyle
      }, [
        h("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, [
          h("span", { style: { fontWeight: "bold", color: "#e0e0ff" } }, text("✂️ Pixel Crop Mode")),
          cropSelection ? h("span", {
            style: {
              background: "linear-gradient(135deg, #4a90e2, #9b59b6)",
              padding: "2px 8px",
              borderRadius: "4px",
              color: "#ffffff",
              fontSize: "12px",
              fontFamily: "monospace",
              fontWeight: "bold",
              boxShadow: "0 2px 6px rgba(108, 92, 231, 0.4)"
            }
          }, text(`Selection: ${cropSelection[2]}×${cropSelection[3]} px at (${cropSelection[0]}, ${cropSelection[1]})`)) :
          h("span", { style: { color: "#c8b6ff", fontSize: "12px" } }, text("Drag on image to select pixels"))
        ]),
        h("span", { style: cropInfoBarSeparatorStyle }, text("|")),
        h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, [
          h("button", {
            style: {
              background: cropSelection ? "linear-gradient(135deg, #4a90e2, #9b59b6)" : "rgba(255, 255, 255, 0.1)",
              border: "1px solid #6c5ce7",
              color: "#ffffff",
              padding: "4px 12px",
              borderRadius: "4px",
              cursor: cropSelection ? "pointer" : "default",
              fontWeight: "bold",
              fontSize: "12px",
              opacity: cropSelection ? "1" : "0.5",
              boxShadow: cropSelection ? "0 2px 8px rgba(108, 92, 231, 0.5)" : "none"
            },
            onclick: (state) => {
              if (!state.cropSelection) return state;
              actions.call("apply_crop", { selection: state.cropSelection });
              isDragging = false;
              return applyCropAction2(state, void 0);
            }
          }, text("✓ Apply")),
          h("button", {
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #6c5ce7",
              color: "#e0e0ff",
              padding: "4px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px"
            },
            onclick: (state) => {
              isDragging = false;
              return toggleCropModeAction2(state, void 0);
            }
          }, text("✕ Cancel"))
        ]),
        h("span", { style: cropInfoBarSeparatorStyle }, text("|")),
        h("span", { style: { fontSize: "11px", opacity: "0.75", color: "#c8b6ff" } }, text("Double-click to apply | Esc or Right-click to cancel"))
      ])
    ]);
  };

  // src/GUI/GUI.ts
  var GUI = class {
    root = document.createElement("div");
    dispatch;
    constructor({
      initialState,
      appZIndex: appZIndex2
    }) {
      document.body.appendChild(this.root);
      this.root.id = generateRandomId();
      this.dispatch = app({
        init: initialState,
        view: (state) => {
          const widthToUse = state.appWidth;
          const leftToUse = state.windowX;
          return App({
            left: leftToUse,
            top: state.windowY,
            zIndex: appZIndex2,
            width: widthToUse,
            classSuffix: this.root.id
          }, [
            Header({
              appElement: this.root,
              onChangeWindowCoords: this.setWindowCoords.bind(this),
              isMinimized: state.isMinimized
            }),
            ...state.showFirstRun ? [FirstRun()] : [],
            Hr(),
            ...!state.isMinimized ? [
              h("div", {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                  padding: "2px"
                }
              }, [
                h("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    width: "120px",
                    boxSizing: "border-box",
                    padding: "4px"
                  }
                }, [
                  TabsPanel({
                    currentTab: state.currentTab,
                    onChange: setCurrentTabAction
                  })
                ]),
                h("div", { style: { width: "1px", background: "linear-gradient(180deg, rgba(74, 144, 226, 0.5), rgba(155, 89, 182, 0.5))", opacity: "0.6", borderRadius: "1px", margin: "4px 2px" } }),
                h("div", {
                  style: {
                    flex: "1 1 auto",
                    minWidth: "200px",
                    overflow: "hidden",
                    padding: "6px 10px"
                  }
                }, [
                  BotTab({
                    state,
                    visible: state.currentTab === "bot",
                    setStrategyAction,
                    setTemplateDbRecord: this.setTemplateDbRecord.bind(this),
                    setTemplateCoordsAction,
                    toggleCropModeAction,
                    restoreCropAction
                  }),
                  BotOptionsTab({
                    state,
                    visible: state.currentTab === "advanced"
                  }),
                  storage_default({
                    state,
                    visible: state.currentTab === "storage",
                    setStorageSaveNameAction,
                    setStorageSaveCoordsAction
                  }),
                  CheckpointsTab({
                    visible: state.currentTab === "checkpoints"
                  }),
                  CanvasUtilsTab({
                    visible: state.currentTab === "canvas utils",
                    screenshotCoords: state.screenshotCoords,
                    onChange: setScreenshotCoordsAction,
                    canvasApiReady: state.canvasApiReady,
                    pixelRadarEnabled: state.pixelRadarEnabled,
                    setPixelRadarEnabledAction
                  }),
                  KeyboardTab({
                    visible: state.currentTab === "keyboard"
                  }),
                  OtherTab({
                    visible: state.currentTab === "other"
                  }),
                  CropOverlay({
                    cropMode: state.cropMode,
                    cropSelection: state.cropSelection,
                    templateDbRecord: state.templateDbRecord,
                    setCropSelectionAction,
                    applyCropAction,
                    toggleCropModeAction
                  })
                ])
              ])
            ] : []
          ]);
        },
        node: this.root
      });
      global2.guiDispatch = this.dispatch;
      global2.guiRoot = this.root;
    }
    setStrategy(strategy) {
      this.dispatch(setStrategyAction, strategy);
    }
    setTemplateDbRecord(record) {
      this.dispatch(setTemplateDbRecordAction, record);
    }
    setSavedTemplates(templates) {
      this.dispatch(setSavedTemplatesAction, templates);
    }
    setStorageSaveName(name2) {
      this.dispatch(setStorageSaveNameAction, name2);
    }
    setCurrentTab(tab) {
      this.dispatch(setCurrentTabAction, tab);
    }
    setSelectedSavedTemplateIndex(index) {
      this.dispatch(setSelectedSavedTemplateIndexAction, index);
    }
    setMouseClientCoords(coords) {
      this.dispatch(setMouseClientCoordsAction, coords);
    }
    setWindowCoords(coords) {
      this.dispatch(setWindowCoordsAction, coords);
    }
    addStrategy(strategy) {
      this.dispatch(addStrategyAction, strategy);
    }
    addStrategies(strategies2) {
      this.dispatch(addStrategiesAction, strategies2);
    }
    setBotStatus(status) {
      this.dispatch(setBotStatusAction, status);
    }
    setCooldown(cd) {
      this.dispatch(setCooldownAction, cd);
    }
    setCooldownThreshold(cooldownThreshold) {
      this.dispatch(setCooldownThresholdAction, cooldownThreshold);
    }
    setBotOnline(online) {
      this.dispatch(setBotOnlineAction, online);
    }
    setBuildPredict(from, to) {
      this.dispatch(setBuildPredictAction, [from, to]);
    }
    setProgress(errors2, all) {
      this.dispatch(setProgressAction, [errors2, all]);
    }
    setLastPlaced(...pxl) {
      this.dispatch(setLastPlacedAction, pxl);
    }
    setTemplateCoords(x, y) {
      this.dispatch(setTemplateCoordsAction, [x.toString(), y.toString()]);
    }
    setDisableBotInputs(disable) {
      this.dispatch(setDisableBotInputsAction, disable);
    }
    disableBotInputs() {
      this.dispatch(setDisableBotInputsAction, true);
    }
    enableBotInputs() {
      this.dispatch(setDisableBotInputsAction, false);
    }
    setBotWorksNow(works) {
      this.dispatch(setBotWorksNowAction, works);
    }
    setCanvasApiReady() {
      this.dispatch(setCanvasApiReadyAction);
    }
  };

  // src/Targeter/strategies/simple.ts
  var simple_exports = {};
  __export(simple_exports, {
    chessCorner_1x1: () => chessCorner_1x1,
    chess_1x1: () => chess_1x1,
    chess_2x2: () => chess_2x2,
    chess_3x3: () => chess_3x3,
    circle_inToOut: () => circle_inToOut,
    circle_outToIn: () => circle_outToIn,
    line_RightToLeft: () => line_RightToLeft,
    line_downToUp: () => line_downToUp,
    line_leftToRight: () => line_leftToRight,
    line_upToDown: () => line_upToDown,
    random: () => random,
    squareBySquare: () => squareBySquare,
    squareBySquareVertical: () => squareBySquareVertical,
    square_inToOut: () => square_inToOut,
    square_outToIn: () => square_outToIn,
    throughLine: () => throughLine,
    woyken: () => woyken,
    xPattern: () => xPattern,
    zipper: () => zipper
  });

  // src/Targeter/SuperTargeter.ts
  var SuperTargeter = class {
    api;
    template;
    get width() {
      return this.template.width;
    }
    get height() {
      return this.template.height;
    }
    constructor({
      api,
      template
    }) {
      this.api = api;
      this.template = template;
      if (this.template.readyState === Template.LOADED) {
        this.template.quantize(this.api.palette);
      }
    }
    _countErrors() {
      const pal = this.api.palette;
      let errors2 = 0;
      let timeToEnd = 0;
      this.template.iterateOverVisible((x, y, tmpClr) => {
        const worldX = x + this.template.x1;
        const worldY = y + this.template.y1;
        const cnvClr = this.api.get(worldX, worldY);
        const same = pal.sameColors(tmpClr, cnvClr);
        if (!same) {
          errors2++;
          timeToEnd += this.api.predictCooldown(worldX, worldY);
        }
      });
      return { errors: errors2, timeToEnd };
    }
    getTargetIfWrongColorAt(t) {
      const id2 = this.template.get(t[0], t[1]);
      const cnv = this.api.get(
        t[0] + this.template.x1,
        t[1] + this.template.y1
      );
      if (this.api.palette.sameColors(id2, cnv)) {
        return void 0;
      }
      return {
        x: t[0] + this.template.x1,
        y: t[1] + this.template.y1,
        id: id2
      };
    }
    targetToPixel(t) {
      return {
        x: t[0] + this.template.x1,
        y: t[1] + this.template.y1,
        id: this.template.get(t[0], t[1])
      };
    }
  };

  // src/Targeter/CycledCounter.ts
  var CycledCounter_default = class {
    constructor(max2, cycle = true) {
      this.max = max2;
      this.cycle = cycle;
    }
    value = 0;
    get() {
      return this.value;
    }
    inc(num = 1) {
      for (let i = 0; i !== num; i++) {
        this.value++;
        if (this.cycle) {
          if (this.value === this.max) {
            this.value = 0;
          }
        } else {
          if (this.value > this.max) {
            this.value = this.max;
          }
        }
      }
      return this.value;
    }
    deinc() {
      this.value--;
      if (this.value === -1) {
        if (this.cycle) {
          this.value = this.max - 1;
        } else {
          this.value = 0;
        }
      }
      return this.value;
    }
  };

  // src/Targeter/SortingTargeter.ts
  var SortingTargeter = class extends SuperTargeter {
    targets = null;
    counter = null;
    sort;
    name;
    constructor({
      api,
      template,
      sort,
      name: name2 = ""
    }) {
      super({ api, template });
      this.sort = sort;
      this.name = name2;
    }
    getAllTargets() {
      if (!this.targets) {
        throw new Error("Targeter is not initialized");
      }
      return this.targets;
    }
    async init() {
      this.targets = await this.sort(this.template);
      this.counter = new CycledCounter_default(this.targets.length);
    }
    nexts(needed) {
      if (!this.targets || !this.counter) {
        throw new Error("Targeter is not initialized");
      }
      const targetsAmount = this.targets.length;
      const pixels = [];
      const pixel = this.getTargetIfWrongColorAt(this.targets[this.counter.get()]);
      if (pixel && pixels.push(pixel) === needed) {
        return pixels;
      }
      for (let i = 0; i !== targetsAmount; i++) {
        if (this.counter.get() === 0) {
          break;
        }
        const pixel2 = this.getTargetIfWrongColorAt(this.targets[this.counter.deinc()]);
        if (pixel2) {
          if (pixels.push(pixel2) === needed) {
            return pixels;
          }
        } else {
          break;
        }
      }
      for (let i = 0; i !== targetsAmount; i++) {
        const pixel2 = this.getTargetIfWrongColorAt(this.targets[this.counter.inc()]);
        if (pixel2 && pixels.push(pixel2) === needed) {
          return pixels;
        }
      }
      return pixels;
    }
    countErrors() {
      return this._countErrors();
    }
    countTargets() {
      if (!this.targets) {
        throw new Error("Targeter is not initialized");
      }
      return this.targets.length;
    }
    // private countErrorsUsingTargets() {
    // 	const pal = this.api.palette;
    // 	let errors = 0;
    // 	let timeToEnd = 0;
    // 	for (let i = 0; i !== this.targets.length; i++) {
    // 		const target = this.targets[i];
    // 		const x = target[0] + this.template.x1;
    // 		const y = target[1] + this.template.y1;
    // 		const haveError = !pal.sameColors(
    // 			this.template.get(target[0], target[1]),
    // 			this.api.get(x, y));
    // 		if (haveError) {
    // 			errors++;
    // 			timeToEnd += this.api.predictCooldown(x, y);
    // 		}
    // 	}
    // 	return { errors, timeToEnd };
    // }
  };

  // src/Targeter/strategies/utils/index.ts
  var createTargets = (tmp) => {
    const targets = [];
    tmp.iterateOverVisible((x, y) => targets.push([x, y]));
    return targets;
  };
  var shuffle = (array) => {
    for (let i = array.length - 1; i !== -1; i--) {
      const j = Math.trunc(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  function rasterizeRing(radius, handle) {
    let x = 0;
    let y = radius;
    let delta = 3 - (y << 1);
    while (x <= y) {
      handle(+x, +y);
      handle(+x, -y);
      handle(-x, +y);
      handle(-x, -y);
      handle(+y, +x);
      handle(+y, -x);
      handle(-y, +x);
      handle(-y, -x);
      if (delta < 0) {
        delta += (x << 2) + 6;
      } else {
        delta += (x - y << 2) + 10;
        y--;
      }
      x++;
    }
  }
  function vec2ToNumber(vec) {
    return vec[0] | vec[1] << 16;
  }
  function numberToVec2(num) {
    return [
      num & 255,
      num >> 16
    ];
  }
  var squareDistance = (t1, t2) => sq(t1[0] - t2[0]) + sq(t1[1] - t2[1]);
  var sortAscending = (slice, handle) => slice.sort((a, b) => handle(a) > handle(b) ? 1 : -1);
  var sortDescending = (slice, handle) => slice.sort((a, b) => handle(a) < handle(b) ? 1 : -1);
  function pointsCenter(targets) {
    let sumX = 0;
    let sumY = 0;
    targets.forEach((t) => {
      sumX += t[0];
      sumY += t[1];
    });
    return [
      Math.trunc(sumX / targets.length),
      Math.trunc(sumY / targets.length)
    ];
  }
  function segmentize(tmp, all) {
    const width = tmp.width - 1;
    const height = tmp.height - 1;
    const borders = [];
    const other = [];
    all.forEach((t) => {
      if (t[0] === 0 || t[1] === 0 || t[0] === width || t[1] === height || tmp.isOutline(t[0], t[1])) {
        borders.push(t);
      } else {
        other.push(t);
      }
    });
    return [borders, other];
  }
  function groupByColor(tmp, targets) {
    const groups = {};
    targets.forEach((t) => {
      const color = tmp.get(t[0], t[1]);
      let group5 = groups[color];
      if (!group5) {
        group5 = [];
        groups[color] = group5;
      }
      group5.push(t);
    });
    return groups;
  }
  function sortNear(targets) {
    if (targets.length <= 5) {
      return shuffle(targets);
    }
    const left = /* @__PURE__ */ new Map();
    for (let i = 1; i !== targets.length; i++) {
      left.set(vec2ToNumber(targets[i]), i);
    }
    for (let i = 0; i !== targets.length - 1; i++) {
      let current = targets[i];
      let closest = void 0;
      let closestDistance = Infinity;
      let closestPriority;
      let radius = -1;
      if (left.size === 1) {
        closest = numberToVec2(left.keys().next().value);
      } else {
        while (!closest) {
          radius++;
          rasterizeRing(radius, (x, y) => {
            const target = [
              current[0] + x,
              current[1] + y
            ];
            const priority = left.get(vec2ToNumber(target));
            if (priority !== void 0) {
              const d = squareDistance(current, target);
              if (d < closestDistance || d == closestDistance && priority < closestPriority) {
                closestDistance = d;
                closest = target;
                closestPriority = priority;
              }
            }
          });
        }
      }
      left.delete(vec2ToNumber(closest));
      targets[i + 1] = closest;
    }
    return targets;
  }
  function miniLines(targets, solid = false) {
    const getRandomInRange = (min, max2) => {
      return Math.floor(Math.random() * (Math.abs(max2 - min) + 1)) + min;
    };
    const deCasteljau = (points, t) => {
      let tempPoints = points.slice();
      while (tempPoints.length > 1) {
        tempPoints = tempPoints.slice(1).map((p, i2) => [
          Math.floor((1 - t) * tempPoints[i2][0] + t * p[0]),
          Math.floor((1 - t) * tempPoints[i2][1] + t * p[1])
        ]);
      }
      return tempPoints[0];
    };
    const generateBezierCurve = (controlPoints, curveLen) => {
      const curvePoints = [];
      for (let t = 0; t <= 1; t += 1 / curveLen) {
        curvePoints.push(deCasteljau(controlPoints, t));
      }
      return curvePoints;
    };
    const randn_bm = (min, max2, skew) => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      let num = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
      num = Math.pow(num / 10 + 0.5, skew) * (max2 - min) + min;
      return num;
    };
    const bresenhamLine = (x1, y1, x2, y2) => {
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      const sx = x1 < x2 ? 1 : -1;
      const sy = y1 < y2 ? 1 : -1;
      let err2 = dx - dy;
      const linePoints = [];
      while (true) {
        linePoints.push([x1, y1]);
        if (x1 === x2 && y1 === y2) break;
        const e2 = 2 * err2;
        if (e2 > -dy) {
          err2 -= dy;
          x1 += sx;
        }
        if (e2 < dx) {
          err2 += dx;
          y1 += sy;
        }
      }
      return linePoints;
    };
    const drawCurveLine = (curvePoints) => {
      const linePoints = [];
      for (let i2 = 0; i2 < curvePoints.length - 1; i2++) {
        const p1 = curvePoints[i2];
        const p2 = curvePoints[i2 + 1];
        const line = bresenhamLine(p1[0], p1[1], p2[0], p2[1]);
        linePoints.push(...line);
      }
      return linePoints;
    };
    const out = [];
    const usedPoints = /* @__PURE__ */ new Set();
    const targetSet = new Set(targets.map((p) => `${p[0]},${p[1]}`));
    let i = 0;
    while (i < targets.length) {
      const j = getRandomInRange(2, 5);
      const controlPoints = targets.slice(i, i + j);
      const x1 = controlPoints.at(0)[0];
      const y1 = controlPoints.at(0)[1];
      const x2 = controlPoints.at(-1)[0];
      const y2 = controlPoints.at(-1)[1];
      const distance = Math.sqrt(sq(x1 - x2) + sq(y1 - y2));
      const curvePoints = generateBezierCurve(controlPoints, Math.floor(randn_bm(7, 20, 0.44)));
      const linePoints = solid || distance < 5 ? drawCurveLine(curvePoints) : curvePoints;
      for (const point of linePoints) {
        const pointStr = `${point[0]},${point[1]}`;
        if (targetSet.has(pointStr) && !usedPoints.has(pointStr)) {
          out.push(point);
          usedPoints.add(pointStr);
        }
      }
      i += j;
    }
    return out;
  }

  // src/Targeter/strategies/simple.ts
  var randomStrategyFunc = (tmp) => shuffle(createTargets(tmp));
  var random = {
    name: "random",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: randomStrategyFunc, name: "random" })
  };
  var line_upToDownStrategyFunc = createTargets;
  var line_upToDown = {
    name: "line (up to down)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: line_upToDownStrategyFunc })
  };
  var line_downToUpStrategyFunc = (tmp) => createTargets(tmp).reverse();
  var line_downToUp = {
    name: "line (down to up)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: line_downToUpStrategyFunc })
  };
  var line_leftToRightStrategyFunc = (tmp) => sortAscending(createTargets(tmp), (t) => t[0]);
  var line_leftToRight = {
    name: "line (left to right)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: line_leftToRightStrategyFunc })
  };
  var line_RightToLeftStrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => t[0]);
  var line_RightToLeft = {
    name: "line (right to left)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: line_RightToLeftStrategyFunc })
  };
  var circle_inToOutStrategyFunc = (tmp) => {
    const center = tmp.localCenter;
    const layersAmount = Math.floor(squareDistance(center, [tmp.width, tmp.height])) + 1;
    const layers = new Array(layersAmount).fill(0).map(() => []);
    tmp.iterateOverVisible((x, y) => {
      const target = [x, y];
      const d = Math.trunc(squareDistance(center, target));
      layers[d].push(target);
    });
    return layers.map(shuffle).flat();
  };
  var circle_inToOut = {
    name: "circle (in to out)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: circle_inToOutStrategyFunc })
  };
  var circle_outToInStrategyFunc = (tmp) => circle_inToOutStrategyFunc(tmp).reverse();
  var circle_outToIn = {
    name: "circle (out to in)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: circle_outToInStrategyFunc })
  };
  var throughLineStrategyFunc = (tmp) => {
    const offset = tmp.size;
    return sortDescending(createTargets(tmp), (t) => {
      if ((t[1] & 1) === 0) {
        return t[0] + t[1] - offset;
      } else {
        return t[0] + t[1];
      }
    });
  };
  var throughLine = {
    name: "through line",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: throughLineStrategyFunc })
  };
  var zipperStrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => Math.trunc(Math.sqrt(t[0] + t[1])));
  var zipper = {
    name: "zipper",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: zipperStrategyFunc })
  };
  var chess_1x1StrategyFunc = (tmp) => {
    const offset = tmp.size;
    return sortDescending(createTargets(tmp), (t) => {
      if ((t[0] & 1) !== (t[1] & 1)) {
        return t[1] + offset;
      } else {
        return t[1];
      }
    });
  };
  var chess_1x1 = {
    name: "chess (1x1)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: chess_1x1StrategyFunc })
  };
  var chess_2x2StrategyFunc = (tmp) => {
    const offset = tmp.size;
    return sortDescending(createTargets(tmp), (t) => {
      if ((t[0] & 3 ^ t[1] & 3) <= 1) {
        return t[1] - offset;
      } else {
        return t[1];
      }
    });
  };
  var chess_2x2 = {
    name: "chess (2x2)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: chess_2x2StrategyFunc })
  };
  var chess_3x3StrategyFunc = (tmp) => {
    const offset = tmp.size;
    return sortDescending(createTargets(tmp), (t) => {
      if ((t[0] & 7 ^ t[1] & 7) <= 3) {
        return t[1] - offset;
      } else {
        return t[1];
      }
    });
  };
  var chess_3x3 = {
    name: "chess (3x3)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: chess_3x3StrategyFunc })
  };
  var chessCorner_1x1StrategyFunc = (tmp) => {
    const offset = tmp.size;
    return sortDescending(createTargets(tmp), (t) => {
      if ((t[0] & 1) !== (t[1] & 1)) {
        return t[0] + t[1] + offset;
      } else {
        return t[0] + t[1];
      }
    });
  };
  var chessCorner_1x1 = {
    name: "chess corner (1x1)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: chessCorner_1x1StrategyFunc })
  };
  var squareBySquareHorizontalStrategyFunc = (tmp) => {
    const all = [];
    const blockSize = 8;
    for (let y = 0; y < tmp.height; y += blockSize) {
      for (let x = 0; x < tmp.width; x += blockSize) {
        for (let localY = y; localY !== y + blockSize; localY++) {
          if (localY >= tmp.height) {
            break;
          }
          for (let localX = x; localX !== x + blockSize; localX++) {
            if (localX >= tmp.width || tmp.isTransparent(localX, localY)) {
              continue;
            }
            all.push([localX, localY]);
          }
        }
      }
    }
    return all;
  };
  var squareBySquare = {
    name: "square by square (horizontal)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: squareBySquareHorizontalStrategyFunc })
  };
  var squareBySquareVerticalStrategyFunc = (tmp) => {
    const all = [];
    const blockSize = 8;
    for (let x = 0; x < tmp.width; x += blockSize) {
      for (let y = 0; y < tmp.height; y += blockSize) {
        for (let localX = x; localX !== x + blockSize; localX++) {
          if (localX >= tmp.width) {
            break;
          }
          for (let localY = y; localY !== y + blockSize; localY++) {
            if (localY >= tmp.height || tmp.isTransparent(localX, localY)) {
              continue;
            }
            all.push([localX, localY]);
          }
        }
      }
    }
    return all;
  };
  var squareBySquareVertical = {
    name: "square by square (vertical)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: squareBySquareVerticalStrategyFunc })
  };
  var woykenStrategyFunc = (tmp) => {
    const size = tmp.size;
    const gridSize = 8;
    const [centerX, centerY] = tmp.localCenter;
    return sortAscending(createTargets(tmp), (t) => {
      const x = t[0];
      const y = t[1];
      if (x !== 0 && y !== 0 && x !== tmp.width - 1 && y !== tmp.height - 1) {
        if (tmp.isOutline(x, y)) {
          return -size + y;
        }
      }
      if ((x + y) % gridSize === 0 || Math.abs(x - y) % gridSize === 0) {
        return y;
      }
      const sqDist = squareInt(x - centerX) + squareInt(y - centerY);
      return size - Math.trunc(Math.sqrt(sqDist));
    });
  };
  var woyken = {
    name: "woyken",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: woykenStrategyFunc })
  };
  var square_inToOutStrategyFunc = (tmp) => {
    const [centerX, centerY] = tmp.localCenter;
    return sortAscending(createTargets(tmp), (t) => {
      const distX = Math.abs(t[0] - centerX);
      const distY = Math.abs(t[1] - centerY);
      return Math.max(distX, distY) * 1e3 + Math.min(distX, distY);
    });
  };
  var square_inToOut = {
    name: "square (in to out)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: square_inToOutStrategyFunc })
  };
  var square_outToInStrategyFunc = (tmp) => {
    const [centerX, centerY] = tmp.localCenter;
    return sortDescending(createTargets(tmp), (t) => {
      const distX = Math.abs(t[0] - centerX);
      const distY = Math.abs(t[1] - centerY);
      return Math.max(distX, distY) * 1e3 + Math.min(distX, distY);
    });
  };
  var square_outToIn = {
    name: "square (out to in)",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: square_outToInStrategyFunc })
  };
  var xPatternStrategyFunc = (tmp) => {
    const targets = createTargets(tmp);
    const [centerX, centerY] = tmp.localCenter;
    return sortAscending(targets, (t) => {
      const distToMainDiag = Math.abs(t[0] - centerX - (t[1] - centerY));
      const distToAntiDiag = Math.abs(t[0] - centerX + (t[1] - centerY));
      return Math.min(distToMainDiag, distToAntiDiag);
    });
  };
  var xPattern = {
    name: "x pattern",
    tag: "simple" /* SIMPLE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: xPatternStrategyFunc })
  };

  // src/Targeter/strategies/effective.ts
  var effective_exports = {};
  __export(effective_exports, {
    complex: () => complex,
    complex2: () => complex2,
    human: () => human,
    humanLines1: () => humanLines1,
    humanLines2: () => humanLines2,
    humanLines3: () => humanLines3,
    near: () => near,
    zipper2: () => zipper2
  });
  var humanStrategyFunc = async (tmp) => {
    const bodyBuffer = tmp.compressIdsWithSizes();
    const res = await fetch(historyStrategyUrl, {
      method: "POST",
      body: bodyBuffer
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch strategy: ${res.status}: ${await res.text()}`);
    }
    const compressedTargets = await res.arrayBuffer();
    return decompressTargets(compressedTargets);
  };
  var human = {
    name: "human",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: humanStrategyFunc })
  };
  var humanLines1StrategyFunc = (tmp) => {
    const targets = shuffle(createTargets(tmp));
    return miniLines(targets, true);
  };
  var humanLines1 = {
    name: "humanLines1 (by nof)",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: humanLines1StrategyFunc })
  };
  var humanLines2StrategyFunc = (tmp) => {
    const targets = shuffle(createTargets(tmp));
    return miniLines(targets);
  };
  var humanLines2 = {
    name: "humanLines2 (by nof)",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: humanLines2StrategyFunc })
  };
  var humanLines3StrategyFunc = (tmp) => {
    const targets = createTargets(tmp);
    const rowMap = /* @__PURE__ */ new Map();
    for (const [x, y] of targets) {
      if (!rowMap.has(y)) rowMap.set(y, []);
      rowMap.get(y).push(x);
    }
    const sortedYs = Array.from(rowMap.keys()).sort((a, b) => a - b);
    const out = [];
    const used = /* @__PURE__ */ new Set();
    let leftToRight = Math.random() < 0.5;
    for (let yi = 0; yi < sortedYs.length; yi++) {
      const y = sortedYs[yi];
      const xs2 = rowMap.get(y).slice().sort((a, b) => a - b);
      const ordered = leftToRight ? xs2 : xs2.reverse();
      const rowTargets = [];
      for (const x of ordered) {
        if (!used.has(`${x},${y}`)) {
          rowTargets.push([x, y]);
        }
      }
      if (rowTargets.length === 0) {
        leftToRight = !leftToRight;
        continue;
      }
      const skipStart = 1 + Math.floor(Math.random() * Math.max(1, rowTargets.length - 2));
      const skipLen = 1 + Math.floor(Math.random() * 3);
      const skipEnd = Math.min(skipStart + skipLen, rowTargets.length - 1);
      const driftPositions = [];
      if (yi < sortedYs.length - 1) {
        const nextY = sortedYs[yi + 1];
        const driftCount = 1 + Math.floor(Math.random() * 2);
        const driftXs = /* @__PURE__ */ new Set();
        for (let d = 0; d < driftCount; d++) {
          driftXs.add(rowTargets[Math.floor(Math.random() * rowTargets.length)][0]);
        }
        for (let i = 0; i < rowTargets.length; i++) {
          const [x] = rowTargets[i];
          if (driftXs.has(x) && rowMap.get(nextY)?.includes(x)) {
            driftPositions.push(i);
          }
        }
      }
      for (let i = 0; i < rowTargets.length; i++) {
        const [x, cy] = rowTargets[i];
        const key = `${x},${y}`;
        if (i >= skipStart && i < skipEnd) {
          continue;
        }
        if (driftPositions.includes(i)) {
          const nextY = sortedYs[yi + 1];
          const driftKey = `${x},${nextY}`;
          if (!used.has(driftKey)) {
            out.push([x, nextY]);
            used.add(driftKey);
          }
        }
        out.push([x, cy]);
        used.add(key);
      }
      for (let i = skipEnd; i < rowTargets.length; i++) {
        const [x, cy] = rowTargets[i];
        const key = `${x},${y}`;
        if (!used.has(key)) {
          out.push([x, cy]);
          used.add(key);
        }
      }
      for (let i = skipStart; i < skipEnd; i++) {
        const [x, cy] = rowTargets[i];
        const key = `${x},${y}`;
        if (!used.has(key)) {
          out.push([x, cy]);
          used.add(key);
        }
      }
      leftToRight = !leftToRight;
    }
    for (const [x, y] of targets) {
      const key = `${x},${y}`;
      if (!used.has(key)) {
        out.push([x, y]);
        used.add(key);
      }
    }
    return out;
  };
  var humanLines3 = {
    name: "humanLines3",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: humanLines3StrategyFunc })
  };
  var zipper2StrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => Math.trunc(Math.sqrt(t[0] + t[1] - 3 * tmp.get(t[0], t[1]))));
  var zipper2 = {
    name: "zipper 2",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: zipper2StrategyFunc })
  };
  var nearStrategyFunc = (tmp) => sortNear(shuffle(createTargets(tmp)));
  var near = {
    name: "near",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: nearStrategyFunc })
  };
  var complexStrategyFunc = (tmp) => {
    let [borders, internals] = segmentize(tmp, createTargets(tmp));
    const internalCells = Object.values(groupByColor(tmp, internals));
    const borderCells = sortAscending(
      Object.values(groupByColor(tmp, borders)),
      (border) => border.length
    );
    borders = internals = [];
    const internalCenters = internalCells.map(pointsCenter);
    const usedInternals = [];
    const parts = [];
    for (let i = 0; i !== borderCells.length; i++) {
      const border = borderCells[i];
      const borderCenter = pointsCenter(border);
      const borderColor2 = tmp.get(border[0][0], border[0][1]);
      parts.push(sortNear(shuffle(border)));
      let closest = -1;
      let closestDistance = Infinity;
      internalCells.forEach((internal, j) => {
        const internalColor = tmp.get(internal[0][0], internal[0][1]);
        if (borderColor2 !== internalColor || usedInternals.includes(j)) {
          return;
        }
        const d = squareDistance(borderCenter, internalCenters[j]);
        if (d < closestDistance) {
          closestDistance = d;
          closest = j;
        }
      });
      if (closest === -1) {
        if (usedInternals.length === internalCells.length) {
          parts.push(...borderCells.slice(i + 1).map(sortNear));
          break;
        }
        while (closest === -1) {
          closest = Math.trunc(Math.random() * internalCells.length);
          if (usedInternals.includes(closest)) {
            closest = -1;
          }
        }
      } else {
        usedInternals.push(closest);
        parts.push(sortNear(internalCells[closest]));
      }
    }
    return [].concat(...parts);
  };
  var complex = {
    name: "complex",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: complexStrategyFunc })
  };
  var complex2StrategyFunc = (tmp) => {
    const targets = createTargets(tmp);
    const colorGroups = groupByColor(tmp, targets);
    const groups = Object.values(colorGroups).map((group5) => sortNear(shuffle(group5)));
    return [].concat(...groups);
  };
  var complex2 = {
    name: "complex2",
    tag: "effective" /* EFFECTIVE */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: complex2StrategyFunc })
  };

  // src/Targeter/strategies/useless.ts
  var useless_exports = {};
  __export(useless_exports, {
    alien1: () => alien1,
    alien2: () => alien2,
    alien3: () => alien3,
    alien4: () => alien4,
    alienRandom: () => alienRandom,
    binary: () => binary,
    colorByColor: () => colorByColor,
    rhombLine: () => rhombLine,
    rhombLine2: () => rhombLine2
  });
  var rhombLineStrategyFunc = (tmp) => {
    const [centerX, centerY] = tmp.localCenter;
    return createTargets(tmp).sort((a, b) => Math.sin(Math.abs(a[0] - centerX) + Math.abs(a[1] - centerY)) - Math.sin(Math.abs(b[0] - centerX) + Math.abs(b[1] - centerY)));
  };
  var rhombLine = {
    name: "rhomb line",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: rhombLineStrategyFunc })
  };
  var rhombLine2StrategyFunc = (tmp) => {
    const [centerX, centerY] = tmp.localCenter;
    return createTargets(tmp).sort((a, b) => Math.tan(Math.abs(a[0] - centerX) + Math.abs(a[1] - centerY)) - Math.tan(Math.abs(b[0] - centerX) + Math.abs(b[1] - centerY)));
  };
  var rhombLine2 = {
    name: "rhomb line 2",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: rhombLine2StrategyFunc })
  };
  var alienRandomStrategyFunc = (tmp) => createTargets(tmp).sort((a, b) => Math.tan(sq(a[0] - b[1]) - sq(a[1] - b[0])));
  var alienRandom = {
    name: "alien random",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: alienRandomStrategyFunc })
  };
  var alien1StrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => Math.tan(sq(t[0]) + sq(t[1])));
  var alien1 = {
    name: "alien 1",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: alien1StrategyFunc })
  };
  var alien2StrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => Math.exp(Math.cos(t[0] * t[1])));
  var alien2 = {
    name: "alien 2",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: alien2StrategyFunc })
  };
  var alien3StrategyFunc = (tmp) => {
    const xCache = /* @__PURE__ */ new Map();
    return sortDescending(createTargets(tmp), (t) => {
      let xCached = xCache.get(t[0]);
      if (xCached === void 0) {
        xCached = Math.pow(7, t[0] * Math.sin(t[0]));
        xCache.set(t[0], xCached);
      }
      return xCached - Math.pow(t[0], 7 * Math.sin(t[1]));
    });
  };
  var alien3 = {
    name: "alien 3",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: alien3StrategyFunc })
  };
  var alien4StrategyFunc = (tmp) => {
    const xCache = /* @__PURE__ */ new Map();
    const yCache = /* @__PURE__ */ new Map();
    return sortDescending(createTargets(tmp), (t) => {
      let xCached = xCache.get(t[0]);
      if (xCached === void 0) {
        xCached = Math.pow(Math.sin(t[0]), t[0]);
        xCache.set(t[0], xCached);
      }
      let yCached = yCache.get(t[1]);
      if (yCached === void 0) {
        yCached = Math.pow(Math.cos(t[1]), t[1]);
        yCache.set(t[1], yCached);
      }
      return xCached + yCached;
    });
  };
  var alien4 = {
    name: "alien 4",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: alien4StrategyFunc })
  };
  var binaryStrategyFunc = (tmp) => sortDescending(createTargets(tmp), (t) => t[0] & t[1]);
  var binary = {
    name: "binary",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: binaryStrategyFunc })
  };
  var colorByColorStrategyFunc = (tmp) => {
    let all = createTargets(tmp);
    const colors2 = {};
    all.forEach((t) => {
      const clr = tmp.get(t[0], t[1]);
      const group5 = colors2[clr];
      if (!group5) {
        colors2[clr] = [t];
      } else {
        group5.push(t);
      }
    });
    all = new Array(all.length);
    const size = tmp.size;
    const center = [tmp.width / 2, tmp.height / 2];
    let i = 0;
    Object.values(colors2).forEach((colorGroup) => {
      sortDescending(colorGroup, (t) => size - Math.trunc(Math.sqrt(
        squareInt(t[0] - center[0]) + squareInt(t[1] - center[1])
      )));
      colorGroup.forEach((t) => all[i++] = t);
    });
    return all;
  };
  var colorByColor = {
    name: "color by color",
    tag: "exotic (and useless)" /* FUNNY */,
    builder: (api, tmp) => new SortingTargeter({ api, template: tmp, sort: colorByColorStrategyFunc })
  };

  // src/Targeter/strategies/composite.ts
  var composite_exports = {};
  __export(composite_exports, {
    compositeCircleRandom: () => compositeCircleRandom,
    compositeRandomSquare: () => compositeRandomSquare
  });

  // src/Targeter/CompositeTargeter.ts
  var CompositeTargeter = class extends SuperTargeter {
    targeters;
    currentTargeterIndex = 0;
    pixelsPerTargeter;
    pixelsPlacedWithCurrentTargeter = 0;
    constructor({
      api,
      template,
      pixelsPerStrategy,
      strategies: strategies2
    }) {
      super({ api, template });
      this.pixelsPerTargeter = pixelsPerStrategy;
      this.targeters = strategies2.map((strategy) => strategy.builder(api, template));
    }
    switchToNextStrategy() {
      this.currentTargeterIndex = (this.currentTargeterIndex + 1) % this.targeters.length;
      this.pixelsPlacedWithCurrentTargeter = 0;
    }
    async init() {
      await Promise.all(this.targeters.map((t) => t.init()));
    }
    nexts(amount) {
      const result = [];
      let remaining = amount;
      if (this.targeters.length === 0 || remaining <= 0) {
        return result;
      }
      let consecutiveEmptyCount = 0;
      const targetersCount = this.targeters.length;
      while (remaining > 0) {
        if (this.pixelsPlacedWithCurrentTargeter >= this.pixelsPerTargeter) {
          this.switchToNextStrategy();
          consecutiveEmptyCount = 0;
        }
        const currentTargeter = this.targeters[this.currentTargeterIndex];
        const remainingQuota = this.pixelsPerTargeter - this.pixelsPlacedWithCurrentTargeter;
        const currentAmount = Math.min(remaining, remainingQuota);
        const pixels = currentTargeter.nexts(currentAmount);
        if (pixels.length === 0) {
          consecutiveEmptyCount++;
          if (consecutiveEmptyCount >= targetersCount) {
            break;
          }
          this.switchToNextStrategy();
          continue;
        }
        consecutiveEmptyCount = 0;
        result.push(...pixels);
        remaining -= pixels.length;
        this.pixelsPlacedWithCurrentTargeter += pixels.length;
      }
      return result;
    }
    countErrors() {
      const errors2 = this.targeters.reduce((acc, t) => acc + t.countErrors().errors, 0);
      const timeToEnd = this.targeters[0].countErrors().timeToEnd;
      return { errors: errors2, timeToEnd };
    }
    countTargets() {
      return this.targeters.reduce((acc, t) => acc + t.countTargets(), 0);
    }
    getAllTargets() {
      const lists = this.targeters.map((t) => t.getAllTargets().slice());
      const indices = new Array(lists.length).fill(0);
      const result = [];
      while (true) {
        let appended = 0;
        for (let i = 0; i < lists.length; i++) {
          const list = lists[i];
          const idx = indices[i];
          if (idx >= list.length) continue;
          const take = Math.min(this.pixelsPerTargeter, list.length - idx);
          for (let j = 0; j < take; j++) {
            result.push(list[idx + j]);
          }
          indices[i] += take;
          appended += take;
        }
        if (appended === 0) break;
      }
      return result;
    }
  };

  // src/Targeter/strategies/composite.ts
  var compositeRandomSquare = {
    name: "squarebysquare+random",
    tag: "composite" /* COMPOSITE */,
    builder: (api, tmp) => new CompositeTargeter({
      api,
      template: tmp,
      pixelsPerStrategy: 30,
      strategies: [squareBySquare, random]
    })
  };
  var compositeCircleRandom = {
    name: "circle_inToOut+random",
    tag: "composite" /* COMPOSITE */,
    builder: (api, tmp) => new CompositeTargeter({
      api,
      template: tmp,
      pixelsPerStrategy: 30,
      strategies: [circle_inToOut, random]
    })
  };

  // src/Targeter/strategies/index.ts
  var getStrategyByNameOrDefault = (name2) => {
    const found = Object.values(strategies).find((strategy) => strategy.name === name2);
    return found ?? strategies[DEFAULT_STRATEGY];
  };
  var strategies = {
    ...simple_exports,
    ...effective_exports,
    ...useless_exports,
    ...composite_exports
  };

  // src/GUI/index.ts
  var appZIndex;
  if (location.hostname === "wplace.live") {
    appZIndex = 10;
  } else {
    appZIndex = 0;
  }
  var gui = new GUI({
    appZIndex,
    initialState: {
      botStatus: i18n.map.bot_status_init,
      disableBotInputs: true,
      strategies: {},
      cd: "-",
      online: null,
      buildPredict: "-",
      templateErrors: "-",
      progress: "-",
      windowX: global2.storage.get("window.x") ?? unsafeWindow.innerWidth - uiWidth - DEFAULT_WINDOW_POS[0],
      windowY: global2.storage.get("window.y") ?? DEFAULT_WINDOW_POS[1],
      placedPixel: null,
      templateDbRecord: null,
      placedPixelColor: null,
      botWorksNow: false,
      stopOnCaptcha: global2.storage.get("stopOnCaptcha") ?? DEFAULT_STOP_ON_CAPTCHA,
      smartPlace: global2.storage.get("smartPlace") ?? DEFAULT_SMART_PLACE,
      defendAfterFinish: global2.storage.get("defendAfterFinish") ?? DEFAULT_DEFEND_AFTER_FINISH,
      templateCoords: [
        global2.storage.get("template.x")?.toString() ?? "",
        global2.storage.get("template.y")?.toString() ?? ""
      ],
      storageSaveName: "",
      storageSaveX: global2.storage.get("template.x")?.toString() ?? "",
      storageSaveY: global2.storage.get("template.y")?.toString() ?? "",
      savedTemplates: [],
      editingTemplateId: null,
      editingTemplateName: "",
      editingTemplateX: "",
      editingTemplateY: "",
      selectedSavedTemplateIndex: 0,
      selectedStrategy: DEFAULT_STRATEGY,
      mouseClientX: 0,
      mouseClientY: 0,
      showTemplate: false,
      isMinimized: false,
      followBot: global2.storage.get("follow_bot") ?? DEFAULT_FOLLOW_BOT,
      cooldownThreshold: global2.storage.get("cooldownThreshold") ?? DEFAULT_COOLDOWN_THRESHOLD,
      advancedMode: global2.storage.get("advanced") ?? false,
      currentTab: "bot",
      screenshotCoords: global2.storage.get("screenshot_coords") ?? ["", "", "", ""],
      appWidth: uiWidth,
      showFirstRun: (global2.storage.isEmptyOnLoad && typeof global2.storage.isEmptyOnLoad === "function" ? global2.storage.isEmptyOnLoad() : false) && !(global2.storage.get("first_run_shown") ?? false),
      showStorageTemplatePreview: false,
      canvasApiReady: false,
      pixelRadarEnabled: global2.storage.get("pixelRadarEnabled") ?? false,
      reversePainting: global2.storage.get("reversePainting") ?? DEFAULT_REVERSE_PAINTING,
      skipProtect: global2.storage.get("skipProtect") ?? DEFAULT_SKIP_PROTECT,
      cropMode: false,
      cropSelection: null,
      isCropped: false,
      revivalApiEnabled: false
    }
  });
  window.addEventListener("mousemove", (e) => {
    gui.setMouseClientCoords([
      e.clientX,
      e.clientY
    ]);
  });
  idb.getTemplate().then((template) => {
    if (!template) return;
    gui.setTemplateDbRecord(template);
  });
  idb.getSavedTemplates().then((list) => {
    if (!list) return;
    gui.setSavedTemplates(list);
  });
  gui.addStrategies(Object.values(strategies).map((strategy) => ({
    name: strategy.name,
    tag: strategy.tag
  })));
  gui.setStrategy(hashString(global2.storage.get("strategy")));

  // src/BotLoop.ts
  var Info = new Logger("BotLoop");
  var Trace = new Logger("BotLoop");
  var Warn = new Logger("BotLoop");
  var BotLoop = class extends StrictEmitter {
    status = 0 /* IDLE */;
    placingAborter = null;
    loopAborter = null;
    options;
    api;
    targeter;
    solver;
    protectedPixels = /* @__PURE__ */ new Set();
    constructor({
      api,
      targeter,
      solver,
      ...restOptions
    }) {
      super();
      this.api = api;
      this.targeter = targeter;
      this.solver = solver;
      this.options = {
        ...DEFAULT_BOT_OPTIONS,
        ...restOptions
      };
    }
    changeSkipProtect(value) {
      this.options.skipProtect = value;
    }
    changeCooldownThreshold(value) {
      this.options.cooldownThreshold = value;
    }
    get works() {
      return this.status === 2 /* WORKS */;
    }
    get idle() {
      return this.status === 0 /* IDLE */;
    }
    async start() {
      this.status = 2 /* WORKS */;
      this.emit("start");
      await this.loop();
    }
    stop() {
      if (this.status === 0 /* IDLE */) {
        return;
      }
      if (this.status === 1 /* STOPPING */) {
        return this.wait("loop_end");
      }
      this.status = 1 /* STOPPING */;
      this.abortPlacing();
      this.abortLoop();
      const endPromise = this.wait("loop_end").finally(() => {
        this.emit("stop");
      });
      return endPromise;
    }
    changeSmartPlace(value) {
      this.options.smartPlace = value;
    }
    async loop() {
      this.emit("bot_progress_info", this.targeter.countErrors());
      while (this.status === 2 /* WORKS */) {
        let delay;
        let iterationResult;
        try {
          [delay, iterationResult] = await this.iteration();
        } catch (e) {
          const err2 = e;
          if (err2 === errDisconnected) {
            Warn.warn("no connection, waiting for reconnect...");
            await sleep(5e3);
            continue;
          }
          [delay, iterationResult] = [0, `${err2.message}
${err2.stack}`];
          if (err2 === errSeveralNoPlacePixelResult) {
            Warn.warn(err2.name, err2.message);
          } else {
            throw err2;
          }
        }
        if (this.status !== 2 /* WORKS */) break;
        Info.debugOnly(`next tick after ${delay.toString()} :: ${iterationResult}`);
        this.loopAborter = new Aborter();
        await Promise.any([sleep(delay), this.loopAborter.promise]);
        if (this.loopAborter) {
          this.loopAborter.destroy();
          this.loopAborter = null;
        }
      }
      this.status = 0 /* IDLE */;
      this.emit("loop_end");
    }
    filterProtectedPixels(pixels) {
      if (!this.options.skipProtect || this.protectedPixels.size === 0) {
        return pixels;
      }
      return pixels.filter((p) => !this.protectedPixels.has(`${p.x}_${p.y}`));
    }
    async iteration() {
      const cd = this.api.info.minCd;
      const max2 = this.api.pixelsCanPlace();
      if (this.api.info.haveStack && max2 <= 1 || max2 === 0) {
        const totalCd = this.api.getCooldown();
        const thresholdMs = (this.options.cooldownThreshold ?? 0) * 1e3;
        if (thresholdMs > 0 && totalCd > thresholdMs) {
          return [Math.max(0, totalCd - thresholdMs), `cooldown threshold ${this.options.cooldownThreshold}`];
        }
        let delay = 0;
        if (totalCd < cd) {
          delay = totalCd;
        } else {
          delay = totalCd - randDuration(0, cd);
        }
        return [delay, "cooldown"];
      }
      const pixels = this.filterProtectedPixels(this.targeter.nexts(max2));
      if (pixels.length === 0) {
        try {
          const errorsInfo = this.targeter.countErrors();
          this.emit("bot_progress_info", errorsInfo);
        } catch (e) {
        }
        return [
          randDuration(3e3, Math.min(5 * cd, this.api.info.stack)),
          "no pixels to place"
        ];
      } else {
        Trace.debugOnly("place", pixels.map((p) => `[${p.x}_${p.y} ${p.id}]`).join(", "));
        try {
          await this.placePixels(pixels);
          const errorsInfo = this.targeter.countErrors();
          this.emit("bot_progress_info", errorsInfo);
          const text2 = this.options.showErrors ? `left ${errorsInfo.errors} errors` : "pass";
          return [50, text2];
        } catch (e) {
          const err2 = e;
          switch (err2) {
            case null:
              break;
            case errAborterTriggered:
              break;
            case errors.errNoPlacePixelResult:
              Warn.warn(errors.errNoPlacePixelResult);
              break;
            case errors.errFullStack:
              Warn.debugOnly("unexpected cooldown", this.api.getCooldown());
              break;
            case errors.errPixelProtected:
              Warn.warn("protected pixel");
              for (const p of pixels) {
                this.protectedPixels.add(`${p.x}_${p.y}`);
              }
              notifyProtectedPixel();
              break;
            case errors.errCaptcha:
              if (this.solver === null) {
                this.emit("captcha");
                return [6e3, `tried place ${pixels.length} pixels with CAPTCHA`];
              } else {
                this.emit("captcha_solving");
                const solved = await this.solveCaptcha();
                if (solved) {
                  this.emit("bot_progress_info", this.targeter.countErrors());
                }
                if (!solved) {
                  Warn.warn("captcha solving failed");
                  return [6e3, `captcha solving failed`];
                }
                try {
                  await this.placePixels(pixels);
                  const errorsInfo = this.targeter.countErrors();
                  this.emit("bot_progress_info", errorsInfo);
                  const text2 = this.options.showErrors ? `left ${errorsInfo.errors} errors` : "pass";
                  return [50, text2];
                } catch (e2) {
                  const err22 = e2;
                  switch (err22) {
                    case null:
                      break;
                    case errAborterTriggered:
                      break;
                    case errors.errNoPlacePixelResult:
                      Warn.warn(errors.errNoPlacePixelResult);
                      break;
                    case errors.errFullStack:
                      Warn.debugOnly("unexpected cooldown", this.api.getCooldown());
                      break;
                    case errors.errPixelProtected:
                      Warn.warn("protected pixel");
                      for (const p of pixels) {
                        this.protectedPixels.add(`${p.x}_${p.y}`);
                      }
                      notifyProtectedPixel();
                      break;
                    case errors.errCaptcha:
                      Warn.warn("still captcha after solving");
                      return [6e3, `tried place ${pixels.length} pixels with CAPTCHA`];
                    case errWplaceTooManyRequests:
                      return [2e4, "too many requests, let's wait a little..."];
                    case errors.errParallelPlace:
                      break;
                    default:
                      throw err22;
                  }
                  return [0, ""];
                }
              }
            case errWplaceTooManyRequests:
              return [2e4, "too many requests, let's wait a little..."];
            case errors.errParallelPlace:
              break;
            default:
              throw err2;
          }
          return [0, ""];
        }
      }
    }
    async placePixels(pixels) {
      if (this.api.apiName === "pixelya" && "name" in this.targeter && this.targeter.name === "random") {
        for (const pixel of pixels) {
          await this.api.placePixels([pixel]);
          await sleep(60);
        }
      } else if (this.options.smartPlace) {
        this.placingAborter = new Aborter();
        try {
          await this.api.smartPlace(pixels, this.placingAborter);
        } catch (e) {
          throw e;
        } finally {
          if (this.placingAborter) {
            this.placingAborter.destroy();
            this.placingAborter = null;
          }
        }
      } else {
        await this.api.placePixels(pixels);
      }
    }
    abortPlacing() {
      if (this.placingAborter) {
        Info.info("stop bot placing with aborter");
        this.placingAborter.abort();
      }
    }
    abortLoop() {
      if (this.loopAborter) {
        Info.info("stop bot loop with aborter");
        this.loopAborter.abort();
      }
    }
    async solveCaptcha() {
      if (!this.solver) throw new Error("no captcha solver in bot instance");
      let attempt = 0;
      while (true) {
        attempt += 1;
        Info.info(`have captcha (attempt ${attempt})`);
        let captcha;
        try {
          captcha = await this.api.getCaptcha();
        } catch (e) {
          Warn.warn("failed to fetch captcha", e);
          await sleep(2e3);
          continue;
        }
        Info.info("captcha loaded, send to solver...");
        let solution;
        try {
          solution = await this.solver.solve(captcha);
        } catch (e) {
          Warn.warn("solver failed", e);
          await sleep(2e3);
          continue;
        }
        Info.info(`answer from solver "${JSON.stringify(solution)}", send to canvas...`);
        let result;
        try {
          result = await this.api.sendAnswer(solution);
        } catch (e) {
          Warn.warn("sendAnswer thrown exception", e);
          await sleep(2e3);
          continue;
        }
        if (result === true) {
          Info.info("solution is right");
          return true;
        }
        if (result === false) {
          Info.info("solution is wrong, try again...");
          await sleep(1e3);
          continue;
        }
        if (result instanceof Error) {
          Warn.warn("sendAnswer returned error", result);
          await sleep(2e3);
          continue;
        }
        Warn.warn("unknown sendAnswer response", result);
        await sleep(2e3);
      }
    }
  };

  // src/eventBus.ts
  var eventBus_default = new StrictEmitter();

  // src/fix-legacy.ts
  async function fixLegacy() {
    const template = storage.get("template.src");
    if (template) {
      await idb.setTemplate({
        filename: "template.png",
        value: template
      });
      storage.delete("template.src");
    }
  }

  // src/index.ts
  var import_group_items4 = __toESM(require_dist());

  // src/VoidServerAPI/VoidServerAPI.ts
  var import_lz_string2 = __toESM(require_lz_string());

  // src/VoidServerAPI/packets.ts
  var deserializeOnlinePacketPayload = (buffer) => {
    const view = new DataView(buffer);
    const payloadBuffer = buffer.slice(4);
    const payloadString = bytesToString(new Uint8Array(payloadBuffer));
    return {
      connectionsAmount: view.getUint16(0, true),
      ipsAmount: view.getUint16(2, true),
      ...JSON.parse(payloadString)
    };
  };
  var serializeConnectionsTagsMessage = ({
    tags
  }) => {
    const tagsPayload = stringToBytes(tags.join(","));
    const uint8 = new Uint8Array(1 + tagsPayload.byteLength);
    uint8[0] = 1 /* CONNECTIONS_TAGS */;
    uint8.set(tagsPayload, 1);
    return uint8;
  };

  // src/VoidServerAPI/VoidServerAPI.ts
  var logger11 = new Logger("VoidServer");
  var VoidServerAPI = class extends StrictEmitter {
    ws;
    constructor(url, options) {
      super();
      this.ws = new EnhancedWS(
        url,
        {
          reconnectDelay: 3e3,
          hideReconnectErrors: false,
          ...options
        }
      );
      this.ws.on("connect", () => {
        logger11.debugOnly("connected to void");
        this.sendConnectionsTags(options?.botTags ?? ["void-bot"]);
      });
      this.ws.on("disconnect", () => logger11.debugOnly("disconnected from void"));
      this.ws.on("string", (msg) => {
        const unpacked = stringToBytes((0, import_lz_string2.decompressFromBase64)(msg));
        const opcode = unpacked[0];
        const payload = unpacked.slice(1).buffer;
        if (opcode === 0 /* ONLINE */) {
          this.emit("online", deserializeOnlinePacketPayload(payload));
        } else {
          logger11.warn(`undefined void server opcode "${opcode}"`);
        }
      });
      this.ws.connect();
    }
    sendConnectionsTags = (tags) => {
      const serialized = serializeConnectionsTagsMessage({
        tags
      });
      const compressed = (0, import_lz_string2.compressToBase64)(bytesToString(serialized));
      this.ws.send(compressed);
    };
  };

  // src/VoidServerAPI/index.ts
  var tagsWithVersion = GM_info?.script.version ? ENV_BOT_TAGS.concat(`v${GM_info.script.version}`) : ENV_BOT_TAGS;
  var voidApi = new VoidServerAPI(voidServerWebsocketUrl, {
    hideReconnectErrors: true,
    botTags: tagsWithVersion
  });
  voidApi.on("online", (online) => {
    gui.setBotOnline(online);
  });

  // src/solvers/GlobalpixelSolver.ts
  var GlobalpixelSolver = class {
    AI_URL = "https://m2zm-globalpixel.hf.space/gradio_api/call/predict";
    async fetchPredict(svg) {
      const res = await fetch(this.AI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [svg] })
      });
      throwIfBadResponse(res);
      const result = await res.json();
      return result.event_id;
    }
    async fetchSolution(event_id) {
      const res = await fetch(this.AI_URL + "/" + event_id);
      throwIfBadResponse(res);
      const text2 = await res.text();
      return text2.match(/"([^\"]+)"/)[1];
    }
    async solve(captcha) {
      const event_id = await this.fetchPredict(captcha.svg);
      const answer = await this.fetchSolution(event_id);
      return {
        id: captcha.id,
        solution: answer
      };
    }
  };

  // src/voidTheme/voidTheme.css
  var import_lz_string3 = __toESM(require_lz_string());
  var voidTheme_default = import_lz_string3.default.decompressFromBase64("HQQwxgLglg9gdgIwK4QvAzgGgFDDACxDjgFMAbBCOHYCEBAWjKnQgaghIFscBrBACY4IQ7BHw0A7lDgNoEMiRpgAbpWrYAxAAcQi1CQQwAHjQREZAMxgACAN7YbNsDDIwATgC4bKkO4AUDAxcIDIMLm7uAJQA3I425mC8AObuMEhwAuGuHt6+AUGJKWkZWREesdgAvti4AIKK7hDKhAoyvC0gVCBcSrhcMAJ6NgBU9vGcxmzohAIwkt4ADDbLAIzaxjaaiztxNZ5pMBDjTkEhYeVeNu4kAnGnchyK2ZHeYO5QXOjw9zZBn9oPHQ4GxLm8Pl8fvEgvgoMl8Mx4aCcld3p9vnBfoUPAISO4XrkbEN3LwbndoQwiql0pkCVd3MlzP5FpgVqyWStgAAOACslQesPhiPwbCpJVpYOujJA/gAbAAWVkKpWKzm8/l/BgCFj0Z5imllFHeVIkACecQpYCQ7m++NxlhASDIEG81rI/hFEG06E8AHpfWgkARbghTcTeKR0OhgMkOPgkAhgLBfawkJZLL7tNpLAB9IwQHMAJl9ADkPCEyAwAMrkEiQYCSQzaKI2ADMNi5rPtjudWPC1ttwRgKhIrvc7s93r9AfSwYEofDkejsfECaTMBTEDTGazufzRdL5b01dr9cbCGbbY7XZIDqdED7VptHi1t57yNeNjdHtQU/9gbnBc/AjEgoxjOM12TVN00zbM8yOA8y3cCsT0UM8mxbdtOyJN970fAcX27e85G4bQyC6Ucv3HH8vR9f9Z3wEMw2ApdwNXRMoK3GDd3ggtiyQlCazQiAGwwq9sKI3tLQIu1cOdBhYVYDxTTHCdfzomcg0Y+dmJJViV3jDiN2gnc4P3fij0rIS6xE89Lywm87ykh4n0HSSPxfeBVJov9NMA3SQLAgzIOMrjTL3BCLOQ49rPQi9MOvHCnIfaTn1k5KSK4MiKIYLyqLU2jpwA7SgL00DlwgozN23WCIr4w9oqs09bLEhykvffC0tfDLFLQdxTVyuBvMnDTiqYxdyrYwz12q7izMihrBOa0T4vExyOtSwcBhHOlhvUoqGPGljJuCqqTNq3jEMs1CbJW+zEvczqtuHEhMuyzg9sK+itKOsqgsqmbzp48zFpi5a7ISiS5JSlyZKHHbeuUz7fLGnSJv+9jAbCi6QYEsHhLuyH1rw6paiMARTROBJwGKA1vIAIhG6coCTLhkmtPAYC4X1TWMU0ACsAHUEETbQ4GSemWzAEgQTxX0XBHdwbDgGAGBubQSC6PZajwQhiHIdROggL5khaDRdfNggQVNDWzYgG2+k52Wpl6OAkBsAA+IkoBUZQYA8IxTC0FwA5MHBNCsGAaAGIZKzQbRDdweBmFIQOaDoRhmFYdhOC4TwVYgfxQEgH2SCiKQwnkRRlDUKgaHAaB4GQVAMAr2R48TiAvBBfBwlhMgBH8Qs4BbBwnC7oh0A4WAhuppJqVKOlOULHlFnQbXcAIIhSAoKhPHwF73CNk398Ps3gHQZrbjN0/Fbth2L6v0QLftjXb7xP3neNmX3a97UVHfkfTe/t3CB0AeHEOoCTDgK0JHGBxdG6IBQGgOAWB+g/09t7FQ/RBjHg7nvA+d8k5wBToYaBhCP64AzkwFgbAODcHzkcIuDdS5RHgdIduTxRwUKAXgWuQ0eFtzkDABOBCz5iG7uIPuUAB5DxHlTfUi9JT5ECApOECJ1GihpgvCUKJKg1FwCwpuyDW44NjgonEeI1YgG1EgH0NhCzrGMNrfgAgLHuFxPiZRfhVFGA8VYy4GoGDnl4BwSkJgGAzBsfMbwKtSDa11l0CA6AqbeIKOwLKQIiAeWiNrfAhYcD4FbIU+UqSjQ+B8UEKur1AkJIaHiZom89Y7wEM/FwX9XZIGjrgsg3TY7CNEebGOehI59L0CnDouBATaCQNodO9AaHZ3oTwXAHCBnmF4RwuYkgcAgF2Z4CZ+yVAsHoaIZuKCcAyBmY0y+wkymfhUWcUIshamkyKVTEIDIZDeFlBsPJpSx42E+bGWe8o/mk0+MkAA2noCAABeemABhOoAAFAAKoigAEnUemABdKmlgZGcFRPACerB/CrGACvFsMhFaF1WBqPxnjvBOJsN8ZgbiGRMlWKsWUrIV48n5TyQVao+S/CZVY9wNioB2JZYscFNQ+GQvccymwrL2VQDcY88J/ivF6PFZY/EUrbH2NWDsAApOK7R4oBDeGNVAY8qRpUy0LggciSRWTyh5Oa1kZJWQAHZFg+q2FyBAOwdgahEeADgKlOQ8gSVbe+ttgEdIwX/H2NAbgN2EckZIzwJ4euwOc+Aly4DXJwLcmyCjrUGl2hU9JijdGRH0UWkxGgrkoArc1FVVjWCmkUN4DV5InASvxNIAQ4gWXgpHYajJIBkiUVIX4BgTrtQuv8PEJw49bAfCRDYeOOAt1bu1ecF5eiVg+s3ceypwRnl0hbKsb1h6j37qlag3QNwQQ2FXuaq9UQr2rG1sWuA1b542rnQu7wS78SrqgOuq9aBriaP3SI59ThtWX3aYaZtbIENvvQB+l1Nh/XeviBqVyhJAQyGJQkrNkAc15ten3OsvBbg2GAHRtgaBc35qlUkUDtMlHlO1YKDRSJ70JNdogzNmt6PccY0EYMSRbiAMYYXDjsmuMwB40x7U6BdS3BbBp7N8neM0wEzo7DhJtUAiySCCTbylaAtHXWjDdZ4BWdyfEYF3zv0bBWNrPZ2AQAHPaAS0lwSSCaO8IGxYkmekTPgdQrOdDc4INLvsnh9zrM3tE8KHJLakxwD8JrHterPyaAEDyKrVX4v9PwebNZDW27bLK65m9LnXmKuS7QnO3ALPgclBPd9JWQQJuaeQVpn9JjfzdmMuOIjE7AGmbMoRzXVkyFa85mti9Pjzsot+Rm+1/Qs0hRzFw3NeYC2FqLcWksrVgdrVPAAXpRBWeIHuCdpICKeiC3guo+6TWgCyUt9a4OlkcA3a1pNUXlzRlIdtNoqAkrZ8w2v2tlX55xQOmtcLK3kDrs6utNO3pNtppKSAuwwc52dGP7FcgVU0kEIiPl+BBQM7wYLsc1E0IjfqlbIB+1cNsxAYdgGhyDpoSBadYFwGsDQZOMgyGbG249oTDyOuI88+R4TN7T0OZnbq6xJrvCOMZ8ATpmD/5Q/VzlhtWuDc2Ge+wTIlOWV1MaI0i3PSbeZE8Fe6DK77Xru2DsWU5cr2HaZid1m7N3Cc0u3zIWItlt3cZQ79Wms2DGDtSQDWWt4iNqyJnroDBY0qzVnnrPn3LORKgK9t4h8DW6qnZsIdWxw0e4aej6VmPViFnN8Mys7TOAghoCt7Q2RZZj422e6fxxAWSk0JYeUK+V91b0KoGb83cToDANlq4+B0DkSHoWDkZqg2sgAJw8mAK2YNixgDh43wPH2mq8S+8894I/J/HF8psPKMGv6oAeyHfi2tgL6GMOTJTIvhTiCN4PTPTL8D9tPHlISsYLcL8PHEsL8IoJYC6AFvELuiKDgYXkcGgHnIQSOlrnatKo6sHiCP4MNgRqNs0B3jsJYBqM7ptm7n8IBvEFRrLPiCQCOCCPYnEiQHsKML6DrIfORDARMPhqgbPFGmADGnGuvIXjQdcHQZWLBuuswYRmPuwYsJwb8JATYIIcSgwCIS6uIfAJIdIaTCTt0L0J/nWoYawZJugMkAft4Mvq2JYIEa2N4ckEVtYH4VsOmFfqsCALKKEcALYV+rARVlfgIGAFyOmAkSaADlMJEZoFfqvpYIUQkoYJTvkemCvoIONl0BMpETZpkk0Nkg5oqqwF0L4GQEgCQPkXWGAFflkc4elsYi3KgvAtLuQuIlLiAmAoIrLtYPApbumgAllqrl9l/lsK2LKJsa2P6hvBYWAEQL4CkgLogk4XwuoG1jDtiEbsThAWMAcdoBAFvE4f/FCtUgisiuilijivioCoSs6HiN4LSg0hSuARYXvmkGQBQH4E4Z4J4JFggKEtMO8K4NCU5vEBRlcFYYDk4OOpOsRsADyNOnPGsR4fhkYSlPsPCSEmEhCaiRsnIPGFwAgD3ibmqvKtjtQWrn7lsPKKsPKIWPKPKNrHCQiUiZEiiVCQyauMyYAp/saDcOaIMeGPmAwBXnSVKTCYChqWicEpqviRIViF8LlIrJYG4JIJEvbAOsrA4b8IfGaTEjYLCK0jLAkiqUcGqarDqRsqKTSciZCWiVTHifgKQU4IxNFoQVUEAA=");

  // src/voidTheme/voidTheme.ts
  var VoidTheme2 = class {
    styleElement = null;
    disabledStyleLink = null;
    get enabled() {
      return !!this.styleElement;
    }
    constructor() {
      const bodyObserver = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.type !== "childList") continue;
          mutation.addedNodes.forEach((node) => {
            if (this.enabled && node instanceof HTMLLinkElement && node.getAttribute("rel") === "stylesheet") {
              this.disabledStyleLink = node;
              node.removeAttribute("rel");
            }
          });
        }
      });
      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false
      });
    }
    toggle(value) {
      if (value) {
        this.enable();
      } else {
        this.disable();
      }
    }
    enable() {
      if (this.styleElement) return;
      const firstAppChild = document.querySelector("#app")?.firstElementChild;
      if (firstAppChild && firstAppChild instanceof HTMLLinkElement && firstAppChild.getAttribute("rel") === "stylesheet") {
        firstAppChild.removeAttribute("rel");
        this.disabledStyleLink = firstAppChild;
      }
      this.styleElement = document.createElement("style");
      this.styleElement.textContent = voidTheme_default;
      document.head.appendChild(this.styleElement);
    }
    disable() {
      if (this.disabledStyleLink) {
        const app2 = document.querySelector("#app");
        if (app2) {
          this.disabledStyleLink.setAttribute("rel", "stylesheet");
          this.disabledStyleLink = null;
        }
      }
      if (!this.styleElement) return;
      this.styleElement.remove();
      this.styleElement = null;
    }
  };

  // src/voidTheme/index.ts
  var voidTheme = new VoidTheme2();
  if (global2.storage.get("void_theme")) {
    voidTheme.enable();
  }
  global2.storage.on("void_theme", (enabled2) => {
    voidTheme.toggle(enabled2);
  });

  // src/sounds.ts
  var errorSound = () => {
    const audioCtx = new AudioContext();
    const oscillatorNode = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillatorNode.type = "sine", oscillatorNode.detune.value = -900, oscillatorNode.start(audioCtx.currentTime), oscillatorNode.frequency.setValueAtTime(600, audioCtx.currentTime), oscillatorNode.frequency.setValueAtTime(1400, audioCtx.currentTime + 0.025), oscillatorNode.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.05), oscillatorNode.frequency.setValueAtTime(900, audioCtx.currentTime + 0.075), oscillatorNode.stop(audioCtx.currentTime + 0.3);
    const oscillatorNode2 = audioCtx.createOscillator();
    oscillatorNode2.type = "sine", oscillatorNode2.start(audioCtx.currentTime), oscillatorNode2.frequency.setValueAtTime(2, audioCtx.currentTime), oscillatorNode2.stop(audioCtx.currentTime + 0.3), oscillatorNode2.connect(gainNode), gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime), gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 3), oscillatorNode.connect(gainNode), gainNode.connect(audioCtx.destination);
  };
  var successSound = () => {
    const audioCtx = new AudioContext();
    const oscillatorNode = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillatorNode.type = "sine";
    oscillatorNode.detune.value = 0;
    oscillatorNode.start(audioCtx.currentTime);
    oscillatorNode.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillatorNode.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.1);
    oscillatorNode.frequency.setValueAtTime(1e3, audioCtx.currentTime + 0.2);
    oscillatorNode.stop(audioCtx.currentTime + 0.4);
    const oscillatorNode2 = audioCtx.createOscillator();
    oscillatorNode2.type = "triangle";
    oscillatorNode2.start(audioCtx.currentTime);
    oscillatorNode2.frequency.setValueAtTime(1200, audioCtx.currentTime);
    oscillatorNode2.frequency.setValueAtTime(1600, audioCtx.currentTime + 0.1);
    oscillatorNode2.frequency.setValueAtTime(1500, audioCtx.currentTime + 0.2);
    oscillatorNode2.stop(audioCtx.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.3);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
    oscillatorNode.connect(gainNode);
    oscillatorNode2.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  };

  // src/utils/telegramNotify.ts
  function isExtensionContext() {
    if (typeof window === "undefined") return false;
    return !!window.__DARKBOT_EXTENSION__;
  }
  function dispatchExtensionMessage(type, siteName) {
    if (typeof window !== "undefined") {
      const text2 = siteName && i18n.map.notification_captcha_body_with_site ? i18n.map.notification_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_captcha_body;
      window.postMessage(
        { __darkbot_bridge: true, data: { type, text: text2, siteName: siteName || (typeof document !== "undefined" ? document.domain : location.hostname) } },
        window.location.origin
      );
    }
  }
  function dispatchIdleCaptchaExtensionMessage(siteName) {
    if (typeof window !== "undefined") {
      const text2 = siteName && i18n.map.notification_idle_captcha_body_with_site ? i18n.map.notification_idle_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_idle_captcha_body;
      window.postMessage(
        { __darkbot_bridge: true, data: { type: "idle_captcha", text: text2, siteName: siteName || (typeof document !== "undefined" ? document.domain : location.hostname) } },
        window.location.origin
      );
    }
  }
  async function sendTelegramNotify(siteName) {
    if (!isExtensionContext()) {
      return;
    }
    dispatchExtensionMessage("captcha", siteName);
  }
  async function sendIdleCaptchaTelegramNotify(siteName) {
    if (!isExtensionContext()) {
      return;
    }
    dispatchIdleCaptchaExtensionMessage(siteName);
  }

  // src/utils/discordNotify.ts
  function isExtensionContext2() {
    if (typeof window === "undefined") return false;
    return !!window.__DARKBOT_EXTENSION__;
  }
  function dispatchExtensionMessage2(type, siteName) {
    if (typeof window !== "undefined") {
      const description = siteName && i18n.map.notification_captcha_body_with_site ? i18n.map.notification_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_captcha_body;
      window.postMessage(
        { __darkbot_bridge: true, data: { type, description, siteName: siteName || document.domain || location.hostname } },
        window.location.origin
      );
    }
  }
  function dispatchIdleCaptchaExtensionMessage2(siteName) {
    if (typeof window !== "undefined") {
      const description = siteName && i18n.map.notification_idle_captcha_body_with_site ? i18n.map.notification_idle_captcha_body_with_site.replace("{site}", siteName) : i18n.map.notification_idle_captcha_body;
      window.postMessage(
        { __darkbot_bridge: true, data: { type: "idle_captcha", description, siteName: siteName || document.domain || location.hostname } },
        window.location.origin
      );
    }
  }
  async function sendDiscordNotify(siteName) {
    if (!isExtensionContext2()) {
      return;
    }
    dispatchExtensionMessage2("captcha", siteName);
  }
  async function sendIdleCaptchaDiscordNotify(siteName) {
    if (!isExtensionContext2()) {
      return;
    }
    dispatchIdleCaptchaExtensionMessage2(siteName);
  }

  // src/index.ts
  if (typeof document !== "undefined") {
    const currentScript = document.currentScript;
    const scriptSrc = currentScript?.src || "";
    if (scriptSrc.startsWith("chrome-extension://")) {
      window.__DARKBOT_EXTENSION__ = true;
    }
  }
  runProtectionCode();
  var logger12 = new Logger("Bot");
  var originalTemplateFilename = "template.png";
  var getCooldownThresholdForApi = (apiName) => {
    const thresholds = global2.storage.get("cooldownThresholds") ?? {};
    return thresholds[apiName] ?? global2.storage.get("cooldownThreshold") ?? DEFAULT_COOLDOWN_THRESHOLD;
  };
  var setCooldownThresholdForApi = (apiName, cooldownThreshold) => {
    const thresholds = global2.storage.get("cooldownThresholds") ?? {};
    thresholds[apiName] = cooldownThreshold;
    global2.storage.set("cooldownThresholds", thresholds);
  };
  (async () => {
    const templateRecord = await idb.getTemplate();
    if (templateRecord?.filename) {
      originalTemplateFilename = templateRecord.filename;
    }
  })();
  if (unsafeWindow.document.readyState === "loading") {
    unsafeWindow.document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
  async function main() {
    await fixLegacy();
    let { api, csa } = await createCanvasApi();
    global2.api = api;
    global2.csa = csa;
    gui.setCanvasApiReady();
    if (global2.api) {
      gui.setCooldownThreshold(getCooldownThresholdForApi(global2.api.apiName));
    }
    setInterval(async () => {
      gui.setCooldown(api.getCooldown() / 1e3);
    }, 110);
    initializeTitleUpdater();
    initializePixelRadarFromStorage();
    api.on("place_pixels", (pixels) => {
      const pxl = last(pixels);
      if (!pxl) return;
      gui.setLastPlaced(
        pxl.x,
        pxl.y,
        api.palette.idToRGBA(pxl.id) ?? pxl.id
      );
      if (global2.storage.get("follow_bot")) {
        global2.csa?.goto({
          x: pxl.x,
          y: pxl.y
        });
      }
    });
    prepareDebugLogic();
    const mouse = {
      worldX: 0,
      worldY: 0
    };
    let gotCaptcha = false;
    let bot = null;
    let targeter = null;
    let template = null;
    let finishedAnnounced = false;
    let templateLoadedLogged = false;
    eventBus_default.on("bot_progress_info", async (info) => {
      const [errors2, time] = info ? [info.errors, info.timeToEnd] : [null, null];
      const prepareTargeterResult = await prepareTargeter();
      if (!prepareTargeterResult) return;
      const { targeter: readyTargeter } = prepareTargeterResult;
      const targets = readyTargeter.countTargets();
      if (time) {
        if (time instanceof Array) {
          gui.setBuildPredict(time[0] / 1e3, time[1] / 1e3);
        } else {
          gui.setBuildPredict(time / 1e3);
        }
      }
      const readyBot = await bot;
      if (readyBot?.works && !finishedAnnounced) {
        gui.setBotStatus(i18n.map.bot_status_works);
      } else if (readyBot?.works && finishedAnnounced && global2.storage.get("defendAfterFinish") && errors2 === 0) {
        gui.setBotStatus(i18n.map.bot_status_defending);
      }
      gui.setProgress(errors2, targets);
      if (errors2 !== null && errors2 > 0 && finishedAnnounced && !global2.storage.get("defendAfterFinish")) {
        finishedAnnounced = false;
      }
      if (errors2 === 0 && typeof targets === "number" && targets > 0 && !finishedAnnounced) {
        finishedAnnounced = true;
        gui.setBotStatus(i18n.map.bot_status_done);
        try {
          successSound();
        } catch (e) {
        }
        notifyTemplateCompleted();
        Promise.resolve().then(async () => {
          try {
            const botPromise = bot;
            if (!botPromise) return;
            const readyBot2 = await botPromise;
            if (readyBot2 && readyBot2.works) {
              if (global2.storage.get("defendAfterFinish")) {
                gui.setBotStatus(i18n.map.bot_status_defending);
              } else {
                await readyBot2.stop();
              }
            }
          } catch (e) {
          }
        });
      }
    });
    eventBus_default.on("captcha", async () => {
      if (!bot) {
        log("captcha emited but there is no bot instance");
      }
      if (global2.storage.get("stopOnCaptcha")) {
        (await bot)?.stop();
      } else {
        gui.setBotStatus(i18n.map.bot_status_captcha);
      }
      if (!gotCaptcha) {
        if (!global2.storage.get("captcha-solver")) {
          errorSound();
        }
        const siteName = document.domain || location.hostname;
        notifyCaptcha(siteName);
        sendTelegramNotify(siteName);
        sendDiscordNotify(siteName);
      }
      gotCaptcha = true;
    });
    eventBus_default.on("captcha_solving", async () => {
      if (!bot) {
        log("captcha solving emited but there is no bot instance");
      }
      if (global2.storage.get("stopOnCaptcha")) {
        (await bot)?.stop();
      } else {
        gui.setBotStatus(i18n.map.bot_status_captcha_solving);
      }
      if (!gotCaptcha) {
        if (!global2.storage.get("captcha-solver")) {
          errorSound();
        }
        const siteName = document.domain || location.hostname;
        notifyCaptchaSolving(siteName);
      }
      gotCaptcha = true;
    });
    actions.on("change_mouse_position", ([x, y]) => {
      mouse.worldX = x;
      mouse.worldY = y;
    });
    actions.on("change_template_coords_to_mouse", async () => {
      actions.call("change_template_coords", [mouse.worldX, mouse.worldY]);
    });
    actions.on("change_template_file", async (file) => {
      if ((await bot)?.works) {
        log("bot is working, reject template change");
        return;
      }
      await idb.setTemplate({
        filename: file.name,
        value: await fileToDataUrl(file)
      });
      originalTemplateFilename = file.name;
      template = null;
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
      templateLoadedLogged = false;
    });
    actions.on("storage_quick_upload", async (saved) => {
      if ((await bot)?.works) {
        log("bot is working, reject quick upload");
        return;
      }
      await idb.setTemplate({ filename: saved.filename, value: saved.value });
      if (typeof saved.x === "number" && typeof saved.y === "number") {
        global2.storage.set("template.x", saved.x);
        global2.storage.set("template.y", saved.y);
        gui.setTemplateCoords(saved.x, saved.y);
      }
      template = null;
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
      gui.setTemplateDbRecord({ filename: saved.filename, value: saved.value });
      originalTemplateFilename = saved.filename;
      try {
        gui.setCurrentTab("bot");
      } catch (e) {
      }
    });
    actions.on("change_template_coords", async ([x, y]) => {
      if ((await bot)?.works) {
        log("bot is working, reject coords change");
        return;
      }
      let coordsIsChanged = false;
      if (x !== global2.storage.get("template.x")) {
        coordsIsChanged = true;
        global2.storage.set("template.x", x);
      }
      if (y !== global2.storage.get("template.y")) {
        coordsIsChanged = true;
        global2.storage.set("template.y", y);
      }
      if (!coordsIsChanged) return;
      gui.setTemplateCoords(x, y);
      if (!template) return;
      (await template).move(x, y);
    });
    let originalTemplate = null;
    // Handle apply_crop with exact integer pixel coordinates (no rounding error, no tileSize bug)
    actions.on("apply_crop", async ({ selection, imgRect: imgRect2 }) => {
      if ((await bot)?.works) {
        log("bot is working, reject crop");
        return;
      }
      if (!template) {
        try {
          template = createTemplate();
        } catch (e) {
          return;
        }
      }
      const readyTemplate = await template;

      let cropPixelX, cropPixelY, cropPixelW, cropPixelH;
      if (Array.isArray(selection) && selection.length >= 4) {
        // Direct pixel-grid coordinates from Pixel Crop Mode
        cropPixelX = Math.round(selection[0]);
        cropPixelY = Math.round(selection[1]);
        cropPixelW = Math.max(1, Math.round(selection[2]));
        cropPixelH = Math.max(1, Math.round(selection[3]));
      } else if (selection && imgRect2) {
        // Fallback for legacy calls
        const imgNaturalWidth = readyTemplate.canvas?.width ?? readyTemplate.width ?? 0;
        const imgNaturalHeight = readyTemplate.canvas?.height ?? readyTemplate.height ?? 0;
        const scaleX = imgNaturalWidth / imgRect2.width;
        const scaleY = imgNaturalHeight / imgRect2.height;
        cropPixelX = Math.floor(selection[0] * scaleX);
        cropPixelY = Math.floor(selection[1] * scaleY);
        cropPixelW = Math.max(1, Math.floor(selection[2] * scaleX));
        cropPixelH = Math.max(1, Math.floor(selection[3] * scaleY));
      } else {
        log("Invalid crop selection parameters");
        return;
      }

      if (!originalTemplate) {
        originalTemplate = readyTemplate;
      }
      const cropped = readyTemplate.cropRegion(cropPixelX, cropPixelY, cropPixelW, cropPixelH);
      cropped.quantize(api.palette);
      template = Promise.resolve(cropped);
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
      gui.setTemplateCoords(cropped.x1, cropped.y1);
      const croppedDataUrl = cropped.canvas?.toDataURL("image/png");
      if (croppedDataUrl) {
        gui.setTemplateDbRecord({ filename: "cropped", value: croppedDataUrl });
      }
      log(`Template cropped successfully: ${cropPixelW}x${cropPixelH} at (${cropPixelX}, ${cropPixelY})`);
    });
    actions.on("restore_crop", async () => {
      if ((await bot)?.works) {
        log("bot is working, reject restore crop");
        return;
      }
      if (!originalTemplate) {
        log("no original template to restore");
        return;
      }
      template = Promise.resolve(originalTemplate);
      const restored = await template;
      originalTemplate = null;
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
      gui.setTemplateCoords(restored.x1, restored.y1);
      const restoredDataUrl = restored.canvas?.toDataURL("image/png");
      if (restoredDataUrl) {
        const templateRecord = await idb.getTemplate();
        const filenameToRestore = templateRecord?.filename ?? originalTemplateFilename;
        gui.setTemplateDbRecord({ filename: filenameToRestore, value: restoredDataUrl });
      }
    });
    actions.on("change_stop_on_captcha", async (stopOnCaptcha) => {
      if ((await bot)?.works) {
        log("bot is working, reject stop on captcha change");
        return;
      }
      global2.storage.set("stopOnCaptcha", stopOnCaptcha);
    });
    actions.on("change_strategy", async (strategy) => {
      if ((await bot)?.works) {
        log("bot is working, reject strategy change");
        return;
      }
      global2.storage.set("strategy", strategy);
      log(`change strategy to "${strategy}"`);
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
    });
    actions.on("change_advanced", (advancedModeEnabled) => {
      global2.storage.set("advanced", advancedModeEnabled);
    });
    actions.on("switch_bot", async () => {
      if (!bot) {
        const readyTemplate = await prepareTemplate();
        if (!readyTemplate) return;
        if (!targeter) {
          targeter = createTargeter({
            api,
            template: readyTemplate
          });
          await targeter;
        }
        bot = prepareBot({
          api,
          targeter: await targeter
        });
        await bot;
        log("bot instance is ready");
        finishedAnnounced = false;
      }
      const readyBot = await bot;
      if (readyBot.works) {
        finishedAnnounced = false;
        await readyBot.stop();
        gotCaptcha = false;
      } else if (readyBot.idle) {
        gui.setBotStatus(i18n.map.bot_status_updating_workspace);
        await updateWorkspaceIfNeeded();
        try {
          finishedAnnounced = false;
          gui.setBotStatus(i18n.map.bot_status_works);
          await readyBot.start();
          if (!finishedAnnounced) {
            if (gotCaptcha && global2.storage.get("stopOnCaptcha")) {
              gui.setBotStatus(i18n.map.bot_status_idle_captcha);
              const siteName = document.domain || location.hostname;
              notifyIdleCaptcha(siteName);
              sendIdleCaptchaTelegramNotify(siteName);
              sendIdleCaptchaDiscordNotify(siteName);
            } else {
              gui.setBotStatus(i18n.map.bot_status_idle);
            }
          }
        } catch (e) {
          const err2 = e;
          if (e === errors.errMustAuth) {
            gui.setBotStatus(i18n.map.bot_status_must_be_logged_in);
            readyBot.stop();
          } else if (e === errWplaceTokenRefresh) {
            global2.storage.set("start_when_ready", true);
            location.reload();
          } else if (e === errors.errCanvasAPIInteraction) {
            actions.call("change_revival_api", true);
          } else {
            log("got error at bot start or inside bot loop");
            logError(err2);
            gui.setBotStatus(err2);
            notifyError(err2.message || String(err2));
            readyBot.stop();
          }
        } finally {
          gotCaptcha = false;
        }
      }
    });
    actions.on("change_revival_api", async (checked) => {
      if (!checked) return;
      gui.setBotStatus(i18n.map.bot_status_reviving_api);
      if (bot) {
        try {
          const readyBot = await bot;
          if (readyBot.works) {
            readyBot.stop();
          }
        } catch (e) {
          logError(e);
        }
      }
      bot = null;
      targeter = null;
      try {
        const { api: newApi, csa: newCsa } = await createCanvasApi();
        api = newApi;
        csa = newCsa;
        global2.api = api;
        global2.csa = csa;
        global2.api.on("place_pixels", (pixels) => {
          const pxl = last(pixels);
          if (!pxl) return;
          gui.setLastPlaced(
            pxl.x,
            pxl.y,
            global2.api.palette.idToRGBA(pxl.id) ?? pxl.id
          );
          if (global2.storage.get("follow_bot")) {
            global2.csa?.goto({
              x: pxl.x,
              y: pxl.y
            });
          }
        });
        gui.setBotStatus(i18n.map.bot_status_idle);
        log("API revived successfully");
      } catch (e) {
        gui.setBotStatus(i18n.map.bot_status_cant_create_api);
        logError(e);
      }
    });
    actions.on("download_heatmap", async () => {
      const prepareTargeterResult = await prepareTargeter();
      if (!prepareTargeterResult) return;
      const { targeter: readyTargeter, template: readyTemplate } = prepareTargeterResult;
      const ctx = createHeatmap(readyTargeter);
      if (ctx) {
        const [filename, ext] = readyTemplate.name.split(".");
        const strategyName = global2.storage.get("strategy") ?? "nostrat";
        downloadCanvas(ctx.canvas, `${filename}-${strategyName}.${ext ?? "png"}`);
      } else {
        log("heatmap canvas is undefined");
      }
    });
    actions.on("download_heatweb", async () => {
      const prepareTargeterResult = await prepareTargeter();
      if (!prepareTargeterResult) return;
      const html = createHeatweb({
        targeter: prepareTargeterResult.targeter,
        template: prepareTargeterResult.template,
        api
      });
      if (html) {
        const [filename] = prepareTargeterResult.template.name.split(".");
        const strategyName = global2.storage.get("strategy") ?? "nostrat";
        downloadHTML(html, `${filename}-${strategyName}.html`);
      }
    });
    actions.on("change_smart_place", async (smartPlace) => {
      if ((await bot)?.works) {
        log("bot is working, reject smart place change");
        return;
      }
      global2.storage.set("smartPlace", smartPlace);
      (await bot)?.changeSmartPlace(smartPlace);
    });
    actions.on("change_cooldown_threshold", async (cooldownThreshold) => {
      const apiName = global2.api?.apiName;
      if (apiName) {
        setCooldownThresholdForApi(apiName, cooldownThreshold);
      } else {
        global2.storage.set("cooldownThreshold", cooldownThreshold);
      }
      (await bot)?.changeCooldownThreshold(cooldownThreshold);
    });
    actions.on("change_defend_template", async (defendAfterFinish) => {
      if ((await bot)?.works) {
        log("bot is working, reject defend template change");
        return;
      }
      global2.storage.set("defendAfterFinish", defendAfterFinish);
    });
    actions.on("change_reverse_painting", async (reversePainting) => {
      if ((await bot)?.works) {
        log("bot is working, reject reverse painting change");
        return;
      }
      global2.storage.set("reversePainting", reversePainting);
      targeter = null;
      bot = null;
      finishedAnnounced = false;
      templateLoadedLogged = false;
    });
    actions.on("change_skip_protect", async (skipProtect) => {
      if ((await bot)?.works) {
        log("bot is working, reject skip protect change");
        return;
      }
      global2.storage.set("skipProtect", skipProtect);
      (await bot)?.changeSkipProtect(skipProtect);
    });
    if (global2.storage.get("start_when_ready")) {
      actions.call("switch_bot");
      global2.storage.set("start_when_ready", false);
    }
    async function updateWorkspaceIfNeeded() {
      if (!template) return;
      const workspace = api.createWorkspace(...(await template).toArray());
      if (api.hasWorkspace(workspace)) return;
      await api.changeWorkspace(workspace);
    }
    async function prepareBot({
      api: api2,
      targeter: targeter2
    }) {
      const hostname = window.location.hostname;
      let solverInstance = null;
      if (hostname.endsWith("globalpixel.fun") && global2.storage.get("captcha-solver")) {
        solverInstance = new GlobalpixelSolver();
      }
      const bot2 = new BotLoop({
        api: api2,
        targeter: targeter2,
        solver: solverInstance,
        smartPlace: global2.storage.get("smartPlace") ?? DEFAULT_SMART_PLACE,
        cooldownThreshold: getCooldownThresholdForApi(api2.apiName),
        skipProtect: global2.storage.get("skipProtect") ?? DEFAULT_SKIP_PROTECT
      });
      bot2.on("bot_progress_info", (info) => eventBus_default.emit("bot_progress_info", info));
      bot2.on("captcha", () => eventBus_default.emit("captcha"));
      bot2.on("captcha_solving", () => eventBus_default.emit("captcha_solving"));
      bot2.on("start", () => {
        gui.disableBotInputs();
        gui.setBotWorksNow(true);
      });
      bot2.on("stop", () => {
        gui.enableBotInputs();
        gui.setBotWorksNow(false);
      });
      return bot2;
    }
    async function prepareTargeter() {
      const readyTemplate = await prepareTemplate();
      if (!readyTemplate) return null;
      let readyTargeter;
      try {
        if (!targeter) {
          targeter = createTargeter({
            api,
            template: readyTemplate
          });
        }
        readyTargeter = await targeter;
      } catch (e) {
        handleCreateTargeterError(e);
        targeter = null;
        return null;
      }
      return {
        targeter: readyTargeter,
        template: readyTemplate
      };
    }
    function handleCreateTargeterError(e) {
      gui.setBotStatus(i18n.map.bot_status_error_targeter_creation);
      logError(e);
    }
    async function prepareTemplate() {
      let readyTemplate;
      try {
        if (!template) {
          template = createTemplate();
        }
        readyTemplate = await template;
      } catch (e) {
        handleCreateTemplateError(e);
        template = null;
        return null;
      }
      if (!templateLoadedLogged) {
        log("template is loaded");
        templateLoadedLogged = true;
      }
      if (readyTemplate.readyState !== Template.QUANTIZED) {
        const start = performance.now();
        readyTemplate.quantize(api.palette);
        const delta = performance.now() - start;
        log("template quantized in", (delta / 1e3).toFixed(3), "s.");
      }
      return readyTemplate;
    }
    function handleCreateTemplateError(e) {
      if (e === errNoTemplatePosition) {
        gui.setBotStatus(i18n.map.bot_status_fill_x_and_y_fields);
      } else if (e === errNoTemplateSrc) {
        gui.setBotStatus(i18n.map.bot_status_select_template_file);
      } else {
        gui.setBotStatus(i18n.map.bot_status_error_template_creation);
        logError(e);
      }
    }
  }
  async function createTemplate() {
    const x = global2.storage.get("template.x");
    const y = global2.storage.get("template.y");
    if (x === null || y === null) {
      throw errNoTemplatePosition;
    }
    const templateRecord = await idb.getTemplate();
    if (!templateRecord) {
      throw errNoTemplateSrc;
    }
    const tmp = new Template({
      name: templateRecord.filename,
      x,
      y
    });
    await tmp.load(templateRecord.value);
    originalTemplateFilename = templateRecord.filename;
    return tmp;
  }
  async function createTargeter({
    api,
    template
  }) {
    const selectedStrategy = getStrategyByNameOrDefault(
      global2.storage.get("strategy") ?? DEFAULT_STRATEGY
    );
    const start = performance.now();
    const targeter = selectedStrategy.builder(api, template);
    await targeter.init();
    if (global2.storage.get("reversePainting")) {
      const allTargets = targeter.getAllTargets();
      allTargets.reverse();
    }
    log("targeter is ready in", ((performance.now() - start) / 1e3).toFixed(3), "s.");
    return targeter;
  }
  async function createCanvasApi() {
    const [lla, csa] = await asyncRetry({
      func: defineAndRunCanvasApi,
      maxAttempts: 5,
      delay: 1e3,
      onerror: (e) => {
        gui.setBotStatus(i18n.map.bot_status_cant_create_api);
        log(e);
      }
    });
    global2.csa = csa;
    const api = new CanvasAPI(lla);
    log("api is ready");
    gui.setBotStatus(i18n.map.bot_status_idle);
    gui.enableBotInputs();
    return {
      api,
      csa
    };
  }
  function prepareDebugLogic() {
    Logger.setDebugCheck(() => global2.storage.get("debug") === true);
    global2.storage.on(
      "debug",
      (debug) => debug ? enableDebugThings() : disableDebugThings()
    );
    if (global2.storage.get("debug")) {
      enableDebugThings();
    }
  }
  function logVerboseBotOnline(online) {
    const grouped = (0, import_group_items4.group)(online.connections).by("tags").asArrays();
    logger12.debug("void bot online:");
    grouped.sort((a, b) => b.length - a.length).forEach((group5) => {
      const strTags = group5[0].tags.map((i) => online.numberToTag[i]).join(", ");
      logger12.debug(`	${strTags || "no tags"}: ${group5.length}`);
    });
  }
  async function enableDebugThings() {
    voidApi.on("online", logVerboseBotOnline);
  }
  async function disableDebugThings() {
    voidApi.off("online", logVerboseBotOnline);
  }
  function log(...messages) {
    logger12.info(...messages.map((e) => typeof e === "object" && e.hasOwnProperty("toString") ? e.toString() : e));
  }
  function logError(e) {
    logger12.error(e.name, e.message, e.stack ?? "");
  }
})();
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
