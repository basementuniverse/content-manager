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


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioLoader = void 0;
const AudioLoader = async (url) => {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.addEventListener('loadeddata', () => {
            resolve(audio);
        });
        audio.addEventListener('error', () => {
            reject(`Error loading audio "${url}"`);
        });
    });
};
exports.AudioLoader = AudioLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8ubG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udGVudC1sb2FkZXJzL2F1ZGlvLmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLFdBQVcsR0FBa0IsS0FBSyxFQUM3QyxHQUFXLEVBQ0csRUFBRTtJQUNoQixPQUFPLElBQUksT0FBTyxDQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUN4QyxPQUFPLENBQUMsS0FBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNuQyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVpXLFFBQUEsV0FBVyxlQVl0QiJ9

/***/ }),

/***/ "./content-loaders/font.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/font.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FontLoader = void 0;
const FontLoader = async (url, family) => {
    return new Promise((resolve, reject) => {
        const font = new FontFace(family, `url(${url})`);
        font.load()
            .then(font => {
            document.fonts.add(font);
            resolve(font);
        })
            .catch(() => {
            reject(`Error loading font "${url}"`);
        });
    });
};
exports.FontLoader = FontLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC5sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LWxvYWRlcnMvZm9udC5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxVQUFVLEdBQWtCLEtBQUssRUFDNUMsR0FBVyxFQUNYLE1BQWMsRUFDQSxFQUFFO0lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxFQUFFO2FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVixNQUFNLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWZXLFFBQUEsVUFBVSxjQWVyQiJ9

/***/ }),

/***/ "./content-loaders/image.loader.ts":
/*!*****************************************!*\
  !*** ./content-loaders/image.loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageLoader = void 0;
const ImageLoader = async (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.addEventListener('error', () => {
            reject(`Error loading image "${url}"`);
        });
    });
};
exports.ImageLoader = ImageLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udGVudC1sb2FkZXJzL2ltYWdlLmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLFdBQVcsR0FBa0IsS0FBSyxFQUM3QyxHQUFXLEVBQ2dCLEVBQUU7SUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBbUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNsQyxPQUFPLENBQUMsS0FBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNuQyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWJXLFFBQUEsV0FBVyxlQWF0QiJ9

/***/ }),

/***/ "./content-loaders/index.ts":
/*!**********************************!*\
  !*** ./content-loaders/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./audio.loader */ "./content-loaders/audio.loader.ts"), exports);
__exportStar(__webpack_require__(/*! ./font.loader */ "./content-loaders/font.loader.ts"), exports);
__exportStar(__webpack_require__(/*! ./image.loader */ "./content-loaders/image.loader.ts"), exports);
__exportStar(__webpack_require__(/*! ./json.loader */ "./content-loaders/json.loader.ts"), exports);
__exportStar(__webpack_require__(/*! ./text.loader */ "./content-loaders/text.loader.ts"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LWxvYWRlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUErQjtBQUMvQixnREFBOEI7QUFDOUIsaURBQStCO0FBQy9CLGdEQUE4QjtBQUM5QixnREFBOEIifQ==

/***/ }),

/***/ "./content-loaders/json.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/json.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONLoader = void 0;
const JSONLoader = async (urlOrData) => {
    if (typeof urlOrData === 'string' &&
        urlOrData.startsWith('http')) {
        return new Promise((resolve, reject) => {
            window.fetch(urlOrData, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
            })
                .then(response => {
                return response.json();
            })
                .then(json => {
                resolve(json);
            })
                .catch(() => {
                reject(`Error loading json "${urlOrData}"`);
            });
        });
    }
    return urlOrData;
};
exports.JSONLoader = JSONLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LWxvYWRlcnMvanNvbi5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxVQUFVLEdBQWtCLEtBQUssRUFDNUMsU0FBYyxFQUNGLEVBQUU7SUFDZCxJQUNFLE9BQU8sU0FBUyxLQUFLLFFBQVE7UUFDN0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFDNUI7UUFDQSxPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUN0QixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGdDQUFnQztpQkFDakQ7YUFDRixDQUFDO2lCQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDVixNQUFNLENBQUMsdUJBQXVCLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxTQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBMUJXLFFBQUEsVUFBVSxjQTBCckIifQ==

/***/ }),

/***/ "./content-loaders/text.loader.ts":
/*!****************************************!*\
  !*** ./content-loaders/text.loader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextLoader = void 0;
const TextLoader = async (urlOrText) => {
    if (urlOrText.startsWith('http')) {
        return new Promise((resolve, reject) => {
            window.fetch(urlOrText, {
                method: 'GET',
                headers: {
                    'content-type': 'text/plain;charset=UTF-8',
                },
            })
                .then(response => {
                return response.text();
            })
                .then(data => {
                resolve(data);
            })
                .catch(() => {
                reject(`Error loading text "${urlOrText}"`);
            });
        });
    }
    return urlOrText.toString();
};
exports.TextLoader = TextLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LWxvYWRlcnMvdGV4dC5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxVQUFVLEdBQWtCLEtBQUssRUFDNUMsU0FBYyxFQUNGLEVBQUU7SUFDZCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSwwQkFBMEI7aUJBQzNDO2FBQ0YsQ0FBQztpQkFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsSUFBUyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLHVCQUF1QixTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQXZCVyxRQUFBLFVBQVUsY0F1QnJCIn0=

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentItemStatus = exports.ContentManagerStatus = exports.ContentItemType = void 0;
const content_loaders_1 = __webpack_require__(/*! ./content-loaders */ "./content-loaders/index.ts");
var ContentItemType;
(function (ContentItemType) {
    ContentItemType["JSON"] = "json";
    ContentItemType["Font"] = "font";
    ContentItemType["Image"] = "image";
    ContentItemType["Audio"] = "audio";
    ContentItemType["Text"] = "text";
})(ContentItemType = exports.ContentItemType || (exports.ContentItemType = {}));
var ContentManagerStatus;
(function (ContentManagerStatus) {
    ContentManagerStatus[ContentManagerStatus["Idle"] = 0] = "Idle";
    ContentManagerStatus[ContentManagerStatus["Loading"] = 1] = "Loading";
    ContentManagerStatus[ContentManagerStatus["Loaded"] = 2] = "Loaded";
})(ContentManagerStatus = exports.ContentManagerStatus || (exports.ContentManagerStatus = {}));
var ContentItemStatus;
(function (ContentItemStatus) {
    ContentItemStatus[ContentItemStatus["Idle"] = 0] = "Idle";
    ContentItemStatus[ContentItemStatus["Loading"] = 1] = "Loading";
    ContentItemStatus[ContentItemStatus["Loaded"] = 2] = "Loaded";
})(ContentItemStatus = exports.ContentItemStatus || (exports.ContentItemStatus = {}));
const defaultContentLoaders = {
    [ContentItemType.JSON]: content_loaders_1.JSONLoader,
    [ContentItemType.Font]: content_loaders_1.FontLoader,
    [ContentItemType.Image]: content_loaders_1.ImageLoader,
    [ContentItemType.Audio]: content_loaders_1.AudioLoader,
    [ContentItemType.Text]: content_loaders_1.TextLoader,
};
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function clamp(a, min = 0, max = 1) {
    return a < min ? min : (a > max ? max : a);
}
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
const MIN_SIMULATED_LOADING_TIME = 1000;
const MAX_SIMULATED_LOADING_TIME = 3000;
class ContentManager {
    constructor(options) {
        var _a;
        this.currentContentList = [];
        this.content = {};
        this.status = ContentManagerStatus.Idle;
        this.options = Object.assign({}, ContentManager.defaultOptions, options !== null && options !== void 0 ? options : {}, {
            loaders: {
                ...ContentManager.defaultOptions.loaders,
                ...((_a = options === null || options === void 0 ? void 0 : options.loaders) !== null && _a !== void 0 ? _a : {}),
            },
        });
    }
    /**
     * Initialise the content manager and provide configuration options
     */
    static initialise(options) {
        if (ContentManager.instance !== undefined) {
            throw new Error('Content manager already initialised');
        }
        ContentManager.instance = new ContentManager(options);
    }
    static getInstance() {
        if (ContentManager.instance === undefined) {
            throw new Error('Content manager not properly initialised');
        }
        return ContentManager.instance;
    }
    /**
     * Current loading progress, represented as a unit scalar [0, 1]
     */
    static get progress() {
        const instance = ContentManager.getInstance();
        return instance.getProgress();
    }
    /**
     * Current content manager status
     */
    static get status() {
        const instance = ContentManager.getInstance();
        return instance.status;
    }
    getProgress() {
        if (!this.currentContentList.length) {
            return 1;
        }
        const names = this.currentContentList.map(item => item.name);
        const loaded = Object.entries(this.content).filter(([name, item]) => names.includes(name) && item.status === ContentItemStatus.Loaded);
        return clamp(loaded.length / this.currentContentList.length);
    }
    /**
     * Load content items
     *
     * Existing content items will be retained, and any content items that already exist
     * will be re-loaded
     */
    static async load(items) {
        var _a, _b;
        if (!items || items.length === 0) {
            return;
        }
        const instance = ContentManager.getInstance();
        if (!instance.options.loaders ||
            Object.keys(instance.options.loaders).length === 0) {
            throw new Error('No content loaders defined');
        }
        instance.currentContentList = items;
        instance.status = ContentManagerStatus.Loading;
        for (const item of items) {
            if (instance.options.simulateSlowLoading) {
                await sleep(randomBetween((_a = instance.options.slowLoadingTimeMin) !== null && _a !== void 0 ? _a : MIN_SIMULATED_LOADING_TIME, (_b = instance.options.slowLoadingTimeMax) !== null && _b !== void 0 ? _b : MAX_SIMULATED_LOADING_TIME));
            }
            if (!(item.type in instance.options.loaders)) {
                throw new Error(`No content loader defined for type "${item.type}"`);
            }
            const contentItem = {
                name: item.name,
                type: item.type,
                content: null,
                status: ContentItemStatus.Loading,
            };
            instance.content[item.name] = contentItem;
            contentItem.content = await instance.options.loaders[item.type](...item.args);
            contentItem.status = ContentItemStatus.Loaded;
        }
        instance.status = ContentManagerStatus.Loaded;
    }
    /**
     * Retrieve a content item by name
     */
    static get(name) {
        const instance = ContentManager.getInstance();
        if (!(name in instance.content)) {
            if (instance.options.throwOnNotFound) {
                throw new Error(`Content item "${name}" not found`);
            }
            return undefined;
        }
        return instance.content[name].content;
    }
}
exports["default"] = ContentManager;
ContentManager.defaultOptions = {
    loaders: defaultContentLoaders,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFNMkI7QUE2QzNCLElBQVksZUFNWDtBQU5ELFdBQVksZUFBZTtJQUN6QixnQ0FBYSxDQUFBO0lBQ2IsZ0NBQWEsQ0FBQTtJQUNiLGtDQUFlLENBQUE7SUFDZixrQ0FBZSxDQUFBO0lBQ2YsZ0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFOVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU0xQjtBQUVELElBQVksb0JBSVg7QUFKRCxXQUFZLG9CQUFvQjtJQUM5QiwrREFBUSxDQUFBO0lBQ1IscUVBQU8sQ0FBQTtJQUNQLG1FQUFNLENBQUE7QUFDUixDQUFDLEVBSlcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFJL0I7QUFFRCxJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IseURBQVEsQ0FBQTtJQUNSLCtEQUFPLENBQUE7SUFDUCw2REFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBcUJELE1BQU0scUJBQXFCLEdBQXFCO0lBQzlDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLDRCQUFVO0lBQ2xDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLDRCQUFVO0lBQ2xDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLDZCQUFXO0lBQ3BDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLDZCQUFXO0lBQ3BDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLDRCQUFVO0NBQ25DLENBQUM7QUFFRixLQUFLLFVBQVUsS0FBSyxDQUFDLEVBQVU7SUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMs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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzRkFBc0Y7QUFDN0g7QUFDQTtBQUNBLGdJQUFnSTtBQUNoSSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFVBQVU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOzs7Ozs7VUNuSjNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9hdWRpby5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vY29udGVudC1sb2FkZXJzL2ZvbnQubG9hZGVyLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9pbWFnZS5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vY29udGVudC1sb2FkZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9qc29uLmxvYWRlci50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvLi9jb250ZW50LWxvYWRlcnMvdGV4dC5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BdWRpb0xvYWRlciA9IHZvaWQgMDtcbmNvbnN0IEF1ZGlvTG9hZGVyID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHVybCk7XG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGF1ZGlvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGF1ZGlvIFwiJHt1cmx9XCJgKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5BdWRpb0xvYWRlciA9IEF1ZGlvTG9hZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhWa2FXOHViRzloWkdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZZMjl1ZEdWdWRDMXNiMkZrWlhKekwyRjFaR2x2TG14dllXUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkZUeXhOUVVGTkxGZEJRVmNzUjBGQmEwSXNTMEZCU3l4RlFVTTNReXhIUVVGWExFVkJRMGNzUlVGQlJUdEpRVU5vUWl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGdFFpeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVOMlJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVONFF5eFBRVUZQTEVOQlFVTXNTMEZCV1N4RFFVRkRMRU5CUVVNN1VVRkRlRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOdVF5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZWtNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNc1EwRkJRenRCUVZwWExGRkJRVUVzVjBGQlZ5eGxRVmwwUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb250TG9hZGVyID0gdm9pZCAwO1xuY29uc3QgRm9udExvYWRlciA9IGFzeW5jICh1cmwsIGZhbWlseSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBuZXcgRm9udEZhY2UoZmFtaWx5LCBgdXJsKCR7dXJsfSlgKTtcbiAgICAgICAgZm9udC5sb2FkKClcbiAgICAgICAgICAgIC50aGVuKGZvbnQgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnQpO1xuICAgICAgICAgICAgcmVzb2x2ZShmb250KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYEVycm9yIGxvYWRpbmcgZm9udCBcIiR7dXJsfVwiYCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuRm9udExvYWRlciA9IEZvbnRMb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labTl1ZEM1c2IyRmtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5amIyNTBaVzUwTFd4dllXUmxjbk12Wm05dWRDNXNiMkZrWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUlU4c1RVRkJUU3hWUVVGVkxFZEJRV3RDTEV0QlFVc3NSVUZETlVNc1IwRkJWeXhGUVVOWUxFMUJRV01zUlVGRFFTeEZRVUZGTzBsQlEyaENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1VVRkRMME1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFOUJRVThzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTzJGQlExSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMWdzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrSXNUMEZCVHl4RFFVRkRMRWxCUVZjc1EwRkJReXhEUVVGRE8xRkJRM1pDTEVOQlFVTXNRMEZCUXp0aFFVTkVMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVU3V1VGRFZpeE5RVUZOTEVOQlFVTXNkVUpCUVhWQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNc1EwRkJRenRCUVdaWExGRkJRVUVzVlVGQlZTeGpRV1Z5UWlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbWFnZUxvYWRlciA9IHZvaWQgMDtcbmNvbnN0IEltYWdlTG9hZGVyID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYEVycm9yIGxvYWRpbmcgaW1hZ2UgXCIke3VybH1cImApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLkltYWdlTG9hZGVyID0gSW1hZ2VMb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJVdWJHOWhaR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dlkyOXVkR1Z1ZEMxc2IyRmtaWEp6TDJsdFlXZGxMbXh2WVdSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRlR5eE5RVUZOTEZkQlFWY3NSMEZCYTBJc1MwRkJTeXhGUVVNM1F5eEhRVUZYTEVWQlEyZENMRVZCUVVVN1NVRkROMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCYlVJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdVVUZEZGtRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTm9RaXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU5zUXl4UFFVRlBMRU5CUVVNc1MwRkJXU3hEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU51UXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla01zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU1zUTBGQlF6dEJRV0pYTEZGQlFVRXNWMEZCVnl4bFFXRjBRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hdWRpby5sb2FkZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZvbnQubG9hZGVyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbWFnZS5sb2FkZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2pzb24ubG9hZGVyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90ZXh0LmxvYWRlclwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOWpiMjUwWlc1MExXeHZZV1JsY25NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenRCUVVGQkxHbEVRVUVyUWp0QlFVTXZRaXhuUkVGQk9FSTdRVUZET1VJc2FVUkJRU3RDTzBGQlF5OUNMR2RFUVVFNFFqdEJRVU01UWl4blJFRkJPRUlpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5KU09OTG9hZGVyID0gdm9pZCAwO1xuY29uc3QgSlNPTkxvYWRlciA9IGFzeW5jICh1cmxPckRhdGEpID0+IHtcbiAgICBpZiAodHlwZW9mIHVybE9yRGF0YSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdXJsT3JEYXRhLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmZldGNoKHVybE9yRGF0YSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGpzb24gXCIke3VybE9yRGF0YX1cImApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsT3JEYXRhO1xufTtcbmV4cG9ydHMuSlNPTkxvYWRlciA9IEpTT05Mb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52Ymk1c2IyRmtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5amIyNTBaVzUwTFd4dllXUmxjbk12YW5OdmJpNXNiMkZrWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUlU4c1RVRkJUU3hWUVVGVkxFZEJRV3RDTEV0QlFVc3NSVUZETlVNc1UwRkJZeXhGUVVOR0xFVkJRVVU3U1VGRFpDeEpRVU5GTEU5QlFVOHNVMEZCVXl4TFFVRkxMRkZCUVZFN1VVRkROMElzVTBGQlV5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkROVUk3VVVGRFFTeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlEzaERMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTzJkQ1FVTjBRaXhOUVVGTkxFVkJRVVVzUzBGQlN6dG5Ra0ZEWWl4UFFVRlBMRVZCUVVVN2IwSkJRMUFzWTBGQll5eEZRVUZGTEdkRFFVRm5RenRwUWtGRGFrUTdZVUZEUml4RFFVRkRPMmxDUVVORExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRaaXhQUVVGUExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTjZRaXhEUVVGRExFTkJRVU03YVVKQlEwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU5ZTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOb1FpeERRVUZETEVOQlFVTTdhVUpCUTBRc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEVml4TlFVRk5MRU5CUVVNc2RVSkJRWFZDTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOS08wbEJRMFFzVDBGQlR5eFRRVUZqTEVOQlFVTTdRVUZEZUVJc1EwRkJReXhEUVVGRE8wRkJNVUpYTEZGQlFVRXNWVUZCVlN4alFUQkNja0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UZXh0TG9hZGVyID0gdm9pZCAwO1xuY29uc3QgVGV4dExvYWRlciA9IGFzeW5jICh1cmxPclRleHQpID0+IHtcbiAgICBpZiAodXJsT3JUZXh0LnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmZldGNoKHVybE9yVGV4dCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIHRleHQgXCIke3VybE9yVGV4dH1cImApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsT3JUZXh0LnRvU3RyaW5nKCk7XG59O1xuZXhwb3J0cy5UZXh0TG9hZGVyID0gVGV4dExvYWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkQzVzYjJGa1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTlqYjI1MFpXNTBMV3h2WVdSbGNuTXZkR1Y0ZEM1c2IyRmtaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVThzVFVGQlRTeFZRVUZWTEVkQlFXdENMRXRCUVVzc1JVRkROVU1zVTBGQll5eEZRVU5HTEVWQlFVVTdTVUZEWkN4SlFVRkpMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdVVUZEYUVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONFF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSVHRuUWtGRGRFSXNUVUZCVFN4RlFVRkZMRXRCUVVzN1owSkJRMklzVDBGQlR5eEZRVUZGTzI5Q1FVTlFMR05CUVdNc1JVRkJSU3d3UWtGQk1FSTdhVUpCUXpORE8yRkJRMFlzUTBGQlF6dHBRa0ZEUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlEyWXNUMEZCVHl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGVrSXNRMEZCUXl4RFFVRkRPMmxDUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRXQ3hQUVVGUExFTkJRVU1zU1VGQlV5eERRVUZETEVOQlFVTTdXVUZEY2tJc1EwRkJReXhEUVVGRE8ybENRVU5FTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVN1owSkJRMVlzVFVGQlRTeERRVUZETEhWQ1FVRjFRaXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6bERMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEU2p0SlFVTkVMRTlCUVU4c1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlF6bENMRU5CUVVNc1EwRkJRenRCUVhaQ1Z5eFJRVUZCTEZWQlFWVXNZMEYxUW5KQ0luMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29udGVudEl0ZW1TdGF0dXMgPSBleHBvcnRzLkNvbnRlbnRNYW5hZ2VyU3RhdHVzID0gZXhwb3J0cy5Db250ZW50SXRlbVR5cGUgPSB2b2lkIDA7XG5jb25zdCBjb250ZW50X2xvYWRlcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnRlbnQtbG9hZGVyc1wiKTtcbnZhciBDb250ZW50SXRlbVR5cGU7XG4oZnVuY3Rpb24gKENvbnRlbnRJdGVtVHlwZSkge1xuICAgIENvbnRlbnRJdGVtVHlwZVtcIkpTT05cIl0gPSBcImpzb25cIjtcbiAgICBDb250ZW50SXRlbVR5cGVbXCJGb250XCJdID0gXCJmb250XCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiSW1hZ2VcIl0gPSBcImltYWdlXCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiQXVkaW9cIl0gPSBcImF1ZGlvXCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xufSkoQ29udGVudEl0ZW1UeXBlID0gZXhwb3J0cy5Db250ZW50SXRlbVR5cGUgfHwgKGV4cG9ydHMuQ29udGVudEl0ZW1UeXBlID0ge30pKTtcbnZhciBDb250ZW50TWFuYWdlclN0YXR1cztcbihmdW5jdGlvbiAoQ29udGVudE1hbmFnZXJTdGF0dXMpIHtcbiAgICBDb250ZW50TWFuYWdlclN0YXR1c1tDb250ZW50TWFuYWdlclN0YXR1c1tcIklkbGVcIl0gPSAwXSA9IFwiSWRsZVwiO1xuICAgIENvbnRlbnRNYW5hZ2VyU3RhdHVzW0NvbnRlbnRNYW5hZ2VyU3RhdHVzW1wiTG9hZGluZ1wiXSA9IDFdID0gXCJMb2FkaW5nXCI7XG4gICAgQ29udGVudE1hbmFnZXJTdGF0dXNbQ29udGVudE1hbmFnZXJTdGF0dXNbXCJMb2FkZWRcIl0gPSAyXSA9IFwiTG9hZGVkXCI7XG59KShDb250ZW50TWFuYWdlclN0YXR1cyA9IGV4cG9ydHMuQ29udGVudE1hbmFnZXJTdGF0dXMgfHwgKGV4cG9ydHMuQ29udGVudE1hbmFnZXJTdGF0dXMgPSB7fSkpO1xudmFyIENvbnRlbnRJdGVtU3RhdHVzO1xuKGZ1bmN0aW9uIChDb250ZW50SXRlbVN0YXR1cykge1xuICAgIENvbnRlbnRJdGVtU3RhdHVzW0NvbnRlbnRJdGVtU3RhdHVzW1wiSWRsZVwiXSA9IDBdID0gXCJJZGxlXCI7XG4gICAgQ29udGVudEl0ZW1TdGF0dXNbQ29udGVudEl0ZW1TdGF0dXNbXCJMb2FkaW5nXCJdID0gMV0gPSBcIkxvYWRpbmdcIjtcbiAgICBDb250ZW50SXRlbVN0YXR1c1tDb250ZW50SXRlbVN0YXR1c1tcIkxvYWRlZFwiXSA9IDJdID0gXCJMb2FkZWRcIjtcbn0pKENvbnRlbnRJdGVtU3RhdHVzID0gZXhwb3J0cy5Db250ZW50SXRlbVN0YXR1cyB8fCAoZXhwb3J0cy5Db250ZW50SXRlbVN0YXR1cyA9IHt9KSk7XG5jb25zdCBkZWZhdWx0Q29udGVudExvYWRlcnMgPSB7XG4gICAgW0NvbnRlbnRJdGVtVHlwZS5KU09OXTogY29udGVudF9sb2FkZXJzXzEuSlNPTkxvYWRlcixcbiAgICBbQ29udGVudEl0ZW1UeXBlLkZvbnRdOiBjb250ZW50X2xvYWRlcnNfMS5Gb250TG9hZGVyLFxuICAgIFtDb250ZW50SXRlbVR5cGUuSW1hZ2VdOiBjb250ZW50X2xvYWRlcnNfMS5JbWFnZUxvYWRlcixcbiAgICBbQ29udGVudEl0ZW1UeXBlLkF1ZGlvXTogY29udGVudF9sb2FkZXJzXzEuQXVkaW9Mb2FkZXIsXG4gICAgW0NvbnRlbnRJdGVtVHlwZS5UZXh0XTogY29udGVudF9sb2FkZXJzXzEuVGV4dExvYWRlcixcbn07XG5hc3luYyBmdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbmZ1bmN0aW9uIGNsYW1wKGEsIG1pbiA9IDAsIG1heCA9IDEpIHtcbiAgICByZXR1cm4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG59XG5mdW5jdGlvbiByYW5kb21CZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cbmNvbnN0IE1JTl9TSU1VTEFURURfTE9BRElOR19USU1FID0gMTAwMDtcbmNvbnN0IE1BWF9TSU1VTEFURURfTE9BRElOR19USU1FID0gMzAwMDtcbmNsYXNzIENvbnRlbnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGVudExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0ge307XG4gICAgICAgIHRoaXMuc3RhdHVzID0gQ29udGVudE1hbmFnZXJTdGF0dXMuSWRsZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgQ29udGVudE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7XG4gICAgICAgICAgICBsb2FkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4uQ29udGVudE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMubG9hZGVycyxcbiAgICAgICAgICAgICAgICAuLi4oKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvYWRlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBjb250ZW50IG1hbmFnZXIgYW5kIHByb3ZpZGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAgICovXG4gICAgc3RhdGljIGluaXRpYWxpc2Uob3B0aW9ucykge1xuICAgICAgICBpZiAoQ29udGVudE1hbmFnZXIuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250ZW50IG1hbmFnZXIgYWxyZWFkeSBpbml0aWFsaXNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIENvbnRlbnRNYW5hZ2VyLmluc3RhbmNlID0gbmV3IENvbnRlbnRNYW5hZ2VyKG9wdGlvbnMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmIChDb250ZW50TWFuYWdlci5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgbWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29udGVudE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcywgcmVwcmVzZW50ZWQgYXMgYSB1bml0IHNjYWxhciBbMCwgMV1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IENvbnRlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXRQcm9ncmVzcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGNvbnRlbnQgbWFuYWdlciBzdGF0dXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBDb250ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc3RhdHVzO1xuICAgIH1cbiAgICBnZXRQcm9ncmVzcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRDb250ZW50TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5jdXJyZW50Q29udGVudExpc3QubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICAgICAgY29uc3QgbG9hZGVkID0gT2JqZWN0LmVudHJpZXModGhpcy5jb250ZW50KS5maWx0ZXIoKFtuYW1lLCBpdGVtXSkgPT4gbmFtZXMuaW5jbHVkZXMobmFtZSkgJiYgaXRlbS5zdGF0dXMgPT09IENvbnRlbnRJdGVtU3RhdHVzLkxvYWRlZCk7XG4gICAgICAgIHJldHVybiBjbGFtcChsb2FkZWQubGVuZ3RoIC8gdGhpcy5jdXJyZW50Q29udGVudExpc3QubGVuZ3RoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb250ZW50IGl0ZW1zXG4gICAgICpcbiAgICAgKiBFeGlzdGluZyBjb250ZW50IGl0ZW1zIHdpbGwgYmUgcmV0YWluZWQsIGFuZCBhbnkgY29udGVudCBpdGVtcyB0aGF0IGFscmVhZHkgZXhpc3RcbiAgICAgKiB3aWxsIGJlIHJlLWxvYWRlZFxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkKGl0ZW1zKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBDb250ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoIWluc3RhbmNlLm9wdGlvbnMubG9hZGVycyB8fFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5zdGFuY2Uub3B0aW9ucy5sb2FkZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29udGVudCBsb2FkZXJzIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50Q29udGVudExpc3QgPSBpdGVtcztcbiAgICAgICAgaW5zdGFuY2Uuc3RhdHVzID0gQ29udGVudE1hbmFnZXJTdGF0dXMuTG9hZGluZztcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2Uub3B0aW9ucy5zaW11bGF0ZVNsb3dMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAocmFuZG9tQmV0d2VlbigoX2EgPSBpbnN0YW5jZS5vcHRpb25zLnNsb3dMb2FkaW5nVGltZU1pbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogTUlOX1NJTVVMQVRFRF9MT0FESU5HX1RJTUUsIChfYiA9IGluc3RhbmNlLm9wdGlvbnMuc2xvd0xvYWRpbmdUaW1lTWF4KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBNQVhfU0lNVUxBVEVEX0xPQURJTkdfVElNRSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoaXRlbS50eXBlIGluIGluc3RhbmNlLm9wdGlvbnMubG9hZGVycykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbnRlbnQgbG9hZGVyIGRlZmluZWQgZm9yIHR5cGUgXCIke2l0ZW0udHlwZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGVudEl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogQ29udGVudEl0ZW1TdGF0dXMuTG9hZGluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbnN0YW5jZS5jb250ZW50W2l0ZW0ubmFtZV0gPSBjb250ZW50SXRlbTtcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLmNvbnRlbnQgPSBhd2FpdCBpbnN0YW5jZS5vcHRpb25zLmxvYWRlcnNbaXRlbS50eXBlXSguLi5pdGVtLmFyZ3MpO1xuICAgICAgICAgICAgY29udGVudEl0ZW0uc3RhdHVzID0gQ29udGVudEl0ZW1TdGF0dXMuTG9hZGVkO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnN0YXR1cyA9IENvbnRlbnRNYW5hZ2VyU3RhdHVzLkxvYWRlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYSBjb250ZW50IGl0ZW0gYnkgbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IENvbnRlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmICghKG5hbWUgaW4gaW5zdGFuY2UuY29udGVudCkpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5vcHRpb25zLnRocm93T25Ob3RGb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udGVudCBpdGVtIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuY29udGVudFtuYW1lXS5jb250ZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnRNYW5hZ2VyO1xuQ29udGVudE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbG9hZGVyczogZGVmYXVsdENvbnRlbnRMb2FkZXJzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeDFSRUZOTWtJN1FVRTJRek5DTEVsQlFWa3NaVUZOV0R0QlFVNUVMRmRCUVZrc1pVRkJaVHRKUVVONlFpeG5RMEZCWVN4RFFVRkJPMGxCUTJJc1owTkJRV0VzUTBGQlFUdEpRVU5pTEd0RFFVRmxMRU5CUVVFN1NVRkRaaXhyUTBGQlpTeERRVUZCTzBsQlEyWXNaME5CUVdFc1EwRkJRVHRCUVVObUxFTkJRVU1zUlVGT1Z5eGxRVUZsTEVkQlFXWXNkVUpCUVdVc1MwRkJaaXgxUWtGQlpTeFJRVTB4UWp0QlFVVkVMRWxCUVZrc2IwSkJTVmc3UVVGS1JDeFhRVUZaTEc5Q1FVRnZRanRKUVVNNVFpd3JSRUZCVVN4RFFVRkJPMGxCUTFJc2NVVkJRVThzUTBGQlFUdEpRVU5RTEcxRlFVRk5MRU5CUVVFN1FVRkRVaXhEUVVGRExFVkJTbGNzYjBKQlFXOUNMRWRCUVhCQ0xEUkNRVUZ2UWl4TFFVRndRaXcwUWtGQmIwSXNVVUZKTDBJN1FVRkZSQ3hKUVVGWkxHbENRVWxZTzBGQlNrUXNWMEZCV1N4cFFrRkJhVUk3U1VGRE0wSXNlVVJCUVZFc1EwRkJRVHRKUVVOU0xDdEVRVUZQTEVOQlFVRTdTVUZEVUN3MlJFRkJUU3hEUVVGQk8wRkJRMUlzUTBGQlF5eEZRVXBYTEdsQ1FVRnBRaXhIUVVGcVFpeDVRa0ZCYVVJc1MwRkJha0lzZVVKQlFXbENMRkZCU1RWQ08wRkJjVUpFTEUxQlFVMHNjVUpCUVhGQ0xFZEJRWEZDTzBsQlF6bERMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTERSQ1FVRlZPMGxCUTJ4RExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRFJDUVVGVk8wbEJRMnhETEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxEWkNRVUZYTzBsQlEzQkRMRU5CUVVNc1pVRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTERaQ1FVRlhPMGxCUTNCRExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRFJDUVVGVk8wTkJRMjVETEVOQlFVTTdRVUZGUml4TFFVRkxMRlZCUVZVc1MwRkJTeXhEUVVGRExFVkJRVlU3U1VGRE4wSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UkN4RFFVRkRPMEZCUlVRc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlV5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGVFTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0zUXl4RFFVRkRPMEZCUlVRc1UwRkJVeXhoUVVGaExFTkJRVU1zUjBGQlZ5eEZRVUZGTEVkQlFWYzdTVUZETjBNc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlF6TkRMRU5CUVVNN1FVRkZSQ3hOUVVGTkxEQkNRVUV3UWl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVWNFF5eE5RVUZOTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVVY0UXl4TlFVRnhRaXhqUVVGak8wbEJaV3BETEZsQlFXOUNMRTlCUVhkRE96dFJRVTV3UkN4MVFrRkJhMElzUjBGQmMwSXNSVUZCUlN4RFFVRkRPMUZCUlRORExGbEJRVThzUjBGQlowTXNSVUZCUlN4RFFVRkRPMUZCUlRGRExGZEJRVTBzUjBGQmVVSXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJ5OUVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZETVVJc1JVRkJSU3hGUVVOR0xHTkJRV01zUTBGQlF5eGpRVUZqTEVWQlF6ZENMRTlCUVU4c1lVRkJVQ3hQUVVGUExHTkJRVkFzVDBGQlR5eEhRVUZKTEVWQlFVVXNSVUZEWWp0WlFVTkZMRTlCUVU4c1JVRkJSVHRuUWtGRFVDeEhRVUZITEdOQlFXTXNRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUenRuUWtGRGVFTXNSMEZCUnl4RFFVRkRMRTFCUVVFc1QwRkJUeXhoUVVGUUxFOUJRVThzZFVKQlFWQXNUMEZCVHl4RFFVRkZMRTlCUVU4c2JVTkJRVWtzUlVGQlJTeERRVUZETzJGQlF6VkNPMU5CUTBZc1EwRkRSaXhEUVVGRE8wbEJRMG9zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUYzUXp0UlFVTXZSQ3hKUVVGSkxHTkJRV01zUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTNwRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU40UkR0UlFVTkVMR05CUVdNc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRlRVFzUTBGQlF6dEpRVVZQTEUxQlFVMHNRMEZCUXl4WFFVRlhPMUZCUTNoQ0xFbEJRVWtzWTBGQll5eERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla01zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3d1EwRkJNRU1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1QwRkJUeXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNTMEZCU3l4UlFVRlJPMUZCUTNoQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEdOQlFXTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVVNVF5eFBRVUZQTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFdEJRVXNzVFVGQlRUdFJRVU4wUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhqUVVGakxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZGT1VNc1QwRkJUeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkZUeXhYUVVGWE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTI1RExFOUJRVThzUTBGQlF5eERRVUZETzFOQlExWTdVVUZGUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkRhRVFzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUTBGRGJrWXNRMEZCUXp0UlFVVkdMRTlCUVU4c1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRWGxDT3p0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMmhETEU5QlFVODdVMEZEVWp0UlFVVkVMRTFCUVUwc1VVRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTVReXhKUVVORkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMWxCUTNwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVTnNSRHRaUVVOQkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zUTBGQlF6dFRRVU12UXp0UlFVVkVMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRjRU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4dlFrRkJiMElzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZGTDBNc1MwRkJTeXhOUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEZUVJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhGUVVGRk8yZENRVU40UXl4TlFVRk5MRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRM1pDTEUxQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNiVU5CUVVrc01FSkJRVEJDTEVWQlEycEZMRTFCUVVFc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc2JVTkJRVWtzTUVKQlFUQkNMRU5CUTJ4RkxFTkJRVU1zUTBGQlF6dGhRVU5LTzFsQlJVUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU0xUXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIVkRRVUYxUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU4wUlR0WlFVVkVMRTFCUVUwc1YwRkJWeXhIUVVGSE8yZENRVU5zUWl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWs3WjBKQlEyWXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSk8yZENRVU5tTEU5QlFVOHNSVUZCUlN4SlFVRkpPMmRDUVVOaUxFMUJRVTBzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhQUVVGUE8yRkJRMnhETEVOQlFVTTdXVUZEUml4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1dVRkRNVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUTBGQlF6dFRRVU12UXp0UlFVVkVMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVa3NTVUZCV1R0UlFVTXZRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZPVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdFpRVU12UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeEZRVUZGTzJkQ1FVTndReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhKUVVGSkxHRkJRV0VzUTBGQlF5eERRVUZETzJGQlEzSkVPMWxCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGJFSTdVVUZGUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCV1N4RFFVRkRPMGxCUXpkRExFTkJRVU03TzBGQk4wbElMR2xEUVRoSlF6dEJRVE5KZVVJc05rSkJRV01zUjBGQk1FSTdTVUZET1VRc1QwRkJUeXhGUVVGRkxIRkNRVUZ4UWp0RFFVTXZRaXhEUVVGREluMD0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==