/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./content-loaders/audio.loader.ts":
/*!*****************************************!*\
  !*** ./content-loaders/audio.loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AudioLoader = void 0;\nconst AudioLoader = async (url) => {\n    return new Promise((resolve, reject) => {\n        const audio = new Audio(url);\n        audio.addEventListener('loadeddata', () => {\n            resolve(audio);\n        });\n        audio.addEventListener('error', () => {\n            reject(`Error loading audio \"${url}\"`);\n        });\n    });\n};\nexports.AudioLoader = AudioLoader;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/audio.loader.ts?");

/***/ }),

/***/ "./content-loaders/font.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/font.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FontLoader = void 0;\nconst FontLoader = async (url, family) => {\n    return new Promise((resolve, reject) => {\n        const font = new FontFace(family, `url(${url})`);\n        font.load()\n            .then(font => {\n            document.fonts.add(font);\n            resolve(font);\n        })\n            .catch(() => {\n            reject(`Error loading font \"${url}\"`);\n        });\n    });\n};\nexports.FontLoader = FontLoader;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/font.loader.ts?");

/***/ }),

/***/ "./content-loaders/image.loader.ts":
/*!*****************************************!*\
  !*** ./content-loaders/image.loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ImageLoader = void 0;\nconst ImageLoader = async (url) => {\n    return new Promise((resolve, reject) => {\n        const image = new Image();\n        image.src = url;\n        image.addEventListener('load', () => {\n            resolve(image);\n        });\n        image.addEventListener('error', () => {\n            reject(`Error loading image \"${url}\"`);\n        });\n    });\n};\nexports.ImageLoader = ImageLoader;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/image.loader.ts?");

/***/ }),

/***/ "./content-loaders/index.ts":
/*!**********************************!*\
  !*** ./content-loaders/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./audio.loader */ \"./content-loaders/audio.loader.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./font.loader */ \"./content-loaders/font.loader.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./image.loader */ \"./content-loaders/image.loader.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./json.loader */ \"./content-loaders/json.loader.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./text.loader */ \"./content-loaders/text.loader.ts\"), exports);\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/index.ts?");

/***/ }),

/***/ "./content-loaders/json.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/json.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.JSONLoader = void 0;\nconst JSONLoader = async (urlOrData) => {\n    if (typeof urlOrData === 'string' &&\n        urlOrData.startsWith('http')) {\n        return new Promise((resolve, reject) => {\n            window.fetch(urlOrData, {\n                method: 'GET',\n                headers: {\n                    'content-type': 'application/json;charset=UTF-8',\n                },\n            })\n                .then(response => {\n                return response.json();\n            })\n                .then(json => {\n                resolve(json);\n            })\n                .catch(() => {\n                reject(`Error loading json \"${urlOrData}\"`);\n            });\n        });\n    }\n    return urlOrData;\n};\nexports.JSONLoader = JSONLoader;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/json.loader.ts?");

/***/ }),

/***/ "./content-loaders/text.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/text.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TextLoader = void 0;\nconst TextLoader = async (urlOrText) => {\n    if (urlOrText.startsWith('http')) {\n        return new Promise((resolve, reject) => {\n            window.fetch(urlOrText, {\n                method: 'GET',\n                headers: {\n                    'content-type': 'text/plain;charset=UTF-8',\n                },\n            })\n                .then(response => {\n                return response.text();\n            })\n                .then(data => {\n                resolve(data);\n            })\n                .catch(() => {\n                reject(`Error loading text \"${urlOrText}\"`);\n            });\n        });\n    }\n    return urlOrText.toString();\n};\nexports.TextLoader = TextLoader;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-loaders/text.loader.ts?");

/***/ }),

/***/ "./content-processors/image-name.processor.ts":
/*!****************************************************!*\
  !*** ./content-processors/image-name.processor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ImageNameProcessor = void 0;\nconst defaultOptions = {\n    imageNameFieldName: 'imageName',\n    imageFieldName: 'image',\n};\nconst ImageNameProcessor = async (content, item, options) => {\n    const actualOptions = Object.assign({}, defaultOptions, options !== null && options !== void 0 ? options : {});\n    if (typeof item.content === 'object' &&\n        item.content !== null) {\n        const processObject = (o) => {\n            var _a;\n            for (const key in o) {\n                if (key === actualOptions.imageNameFieldName) {\n                    const imageName = o[key];\n                    const imageItem = (_a = content[imageName]) === null || _a === void 0 ? void 0 : _a.content;\n                    if (imageItem) {\n                        o[actualOptions.imageFieldName] = imageItem;\n                        delete o[key];\n                    }\n                }\n                else if (typeof o[key] === 'object' &&\n                    o[key] !== null) {\n                    processObject(o[key]);\n                }\n            }\n        };\n        processObject(item.content);\n    }\n};\nexports.ImageNameProcessor = ImageNameProcessor;\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-processors/image-name.processor.ts?");

/***/ }),

/***/ "./content-processors/index.ts":
/*!*************************************!*\
  !*** ./content-processors/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./image-name.processor */ \"./content-processors/image-name.processor.ts\"), exports);\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./content-processors/index.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ContentItemStatus = exports.ContentManagerStatus = exports.ContentItemType = void 0;\nconst content_loaders_1 = __webpack_require__(/*! ./content-loaders */ \"./content-loaders/index.ts\");\nconst content_processors_1 = __webpack_require__(/*! ./content-processors */ \"./content-processors/index.ts\");\nvar ContentItemType;\n(function (ContentItemType) {\n    ContentItemType[\"JSON\"] = \"json\";\n    ContentItemType[\"Font\"] = \"font\";\n    ContentItemType[\"Image\"] = \"image\";\n    ContentItemType[\"Audio\"] = \"audio\";\n    ContentItemType[\"Text\"] = \"text\";\n})(ContentItemType = exports.ContentItemType || (exports.ContentItemType = {}));\nvar ContentManagerStatus;\n(function (ContentManagerStatus) {\n    ContentManagerStatus[\"Idle\"] = \"idle\";\n    ContentManagerStatus[\"Loading\"] = \"loading\";\n    ContentManagerStatus[\"Processing\"] = \"processing\";\n    ContentManagerStatus[\"Ready\"] = \"ready\";\n})(ContentManagerStatus = exports.ContentManagerStatus || (exports.ContentManagerStatus = {}));\nvar ContentItemStatus;\n(function (ContentItemStatus) {\n    ContentItemStatus[\"Idle\"] = \"idle\";\n    ContentItemStatus[\"Loading\"] = \"loading\";\n    ContentItemStatus[\"Loaded\"] = \"loaded\";\n    ContentItemStatus[\"Processing\"] = \"processing\";\n    ContentItemStatus[\"Processed\"] = \"processed\";\n})(ContentItemStatus = exports.ContentItemStatus || (exports.ContentItemStatus = {}));\nconst defaultContentLoaders = {\n    [ContentItemType.JSON]: content_loaders_1.JSONLoader,\n    [ContentItemType.Font]: content_loaders_1.FontLoader,\n    [ContentItemType.Image]: content_loaders_1.ImageLoader,\n    [ContentItemType.Audio]: content_loaders_1.AudioLoader,\n    [ContentItemType.Text]: content_loaders_1.TextLoader,\n};\nconst defaultContentProcessors = {\n    imageName: content_processors_1.ImageNameProcessor,\n};\nasync function sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\nfunction clamp(a, min = 0, max = 1) {\n    return a < min ? min : (a > max ? max : a);\n}\nfunction randomBetween(min, max) {\n    return Math.random() * (max - min) + min;\n}\nconst MIN_SLEEP_TIME = 1000;\nconst MAX_SLEEP_TIME = 3000;\nclass ContentManager {\n    constructor(options) {\n        var _a, _b, _c;\n        this.currentContentList = [];\n        this.currentProgress = 0;\n        this.currentTotalProgress = 0;\n        this.content = {};\n        this.status = ContentManagerStatus.Idle;\n        this.options = Object.assign({}, ContentManager.defaultOptions, options !== null && options !== void 0 ? options : {}, {\n            loaders: {\n                ...ContentManager.defaultOptions.loaders,\n                ...((_a = options === null || options === void 0 ? void 0 : options.loaders) !== null && _a !== void 0 ? _a : {}),\n            },\n            processors: {\n                ...((_b = ContentManager.defaultOptions.processors) !== null && _b !== void 0 ? _b : {}),\n                ...((_c = options === null || options === void 0 ? void 0 : options.processors) !== null && _c !== void 0 ? _c : {}),\n            },\n        });\n    }\n    /**\n     * Initialise the content manager and provide configuration options\n     */\n    static initialise(options) {\n        if (ContentManager.instance !== undefined) {\n            throw new Error('Content manager already initialised');\n        }\n        ContentManager.instance = new ContentManager(options);\n    }\n    static dispose() {\n        if (ContentManager.instance === undefined) {\n            throw new Error('Content manager not initialised');\n        }\n        delete ContentManager.instance;\n    }\n    static getInstance() {\n        if (ContentManager.instance === undefined) {\n            throw new Error('Content manager not properly initialised');\n        }\n        return ContentManager.instance;\n    }\n    /**\n     * Current loading progress, represented as a unit scalar [0, 1]\n     */\n    static get progress() {\n        const instance = ContentManager.getInstance();\n        return instance.getProgress();\n    }\n    /**\n     * Current content manager status\n     */\n    static get status() {\n        const instance = ContentManager.getInstance();\n        return instance.status;\n    }\n    getProgress() {\n        if (!this.currentContentList.length || this.currentTotalProgress === 0) {\n            return 1;\n        }\n        return clamp(this.currentProgress / this.currentTotalProgress);\n    }\n    /**\n     * Load content items\n     *\n     * Existing content items will be retained, and any content items which\n     * already exist will be re-loaded\n     */\n    static async load(items) {\n        var _a, _b, _c, _d, _e;\n        if (!items || items.length === 0) {\n            return;\n        }\n        const instance = ContentManager.getInstance();\n        if (!instance.options.loaders ||\n            Object.keys(instance.options.loaders).length === 0) {\n            throw new Error('No content loaders defined');\n        }\n        instance.currentContentList = items;\n        // Calculate how many tasks we need to perform\n        const countTotalToLoad = items.length;\n        const countTotalToProcess = items.reduce((a, c) => { var _a; return a + ((_a = c.processors) !== null && _a !== void 0 ? _a : []).length; }, 0);\n        instance.currentProgress = 0;\n        instance.currentTotalProgress = countTotalToLoad + countTotalToProcess;\n        // Load items\n        instance.status = ContentManagerStatus.Loading;\n        for (const item of items) {\n            if (!(item.type in instance.options.loaders)) {\n                throw new Error(`No content loader defined for type \"${item.type}\"`);\n            }\n            if (instance.options.simulateSlowLoading) {\n                await sleep(randomBetween((_a = instance.options.slowLoadingTimeMin) !== null && _a !== void 0 ? _a : MIN_SLEEP_TIME, (_b = instance.options.slowLoadingTimeMax) !== null && _b !== void 0 ? _b : MAX_SLEEP_TIME));\n            }\n            const contentItem = {\n                name: item.name,\n                type: item.type,\n                content: null,\n                status: ContentItemStatus.Loading,\n            };\n            instance.content[item.name] = contentItem;\n            contentItem.content = await instance.options.loaders[item.type](...item.args);\n            contentItem.status = ContentItemStatus.Loaded;\n            instance.currentProgress++;\n        }\n        // Process items\n        instance.status = ContentManagerStatus.Processing;\n        for (const item of items) {\n            if (!item.processors || item.processors.length === 0) {\n                continue;\n            }\n            if (!instance.options.processors ||\n                Object.keys(instance.options.processors).length === 0) {\n                throw new Error('No content processors defined');\n            }\n            const contentItem = instance.content[item.name];\n            if (!contentItem) {\n                // We should never reach this point; the item will have been loaded\n                // and added to the instance's content dictionary... but just in case\n                throw new Error(`Cannot find item with name \"${item.name}\"`);\n            }\n            if (instance.options.simulateSlowProcessing) {\n                await sleep(randomBetween((_c = instance.options.slowProcessingTimeMin) !== null && _c !== void 0 ? _c : MIN_SLEEP_TIME, (_d = instance.options.slowProcessingTimeMax) !== null && _d !== void 0 ? _d : MAX_SLEEP_TIME));\n            }\n            contentItem.status = ContentItemStatus.Processing;\n            for (const processor of item.processors) {\n                if (!(processor.name in instance.options.processors)) {\n                    throw new Error(`No content processor defined with name \"${processor.name}\"`);\n                }\n                await instance.options.processors[processor.name](instance.content, contentItem, ...((_e = processor.args) !== null && _e !== void 0 ? _e : []));\n                instance.currentProgress++;\n            }\n            contentItem.status = ContentItemStatus.Processed;\n        }\n        instance.status = ContentManagerStatus.Ready;\n    }\n    /**\n     * Retrieve a content item by name\n     */\n    static get(name) {\n        const instance = ContentManager.getInstance();\n        if (!(name in instance.content)) {\n            if (instance.options.throwOnNotFound) {\n                throw new Error(`Content item \"${name}\" not found`);\n            }\n            return undefined;\n        }\n        return instance.content[name].content;\n    }\n}\nexports[\"default\"] = ContentManager;\nContentManager.defaultOptions = {\n    loaders: defaultContentLoaders,\n    processors: defaultContentProcessors,\n};\n\n\n//# sourceURL=webpack://@basementuniverse/content-manager/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});