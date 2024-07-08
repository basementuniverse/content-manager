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

/***/ "./content-processors/image-name.processor.ts":
/*!****************************************************!*\
  !*** ./content-processors/image-name.processor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageNameProcessor = void 0;
const defaultOptions = {
    imageNameFieldName: 'imageName',
    imageFieldName: 'image',
};
const ImageNameProcessor = async (content, item, options) => {
    const actualOptions = Object.assign({}, defaultOptions, options !== null && options !== void 0 ? options : {});
    if (typeof item.content === 'object' &&
        item.content !== null) {
        const processObject = (o) => {
            var _a;
            for (const key in o) {
                if (key === actualOptions.imageNameFieldName) {
                    const imageName = o[key];
                    const imageItem = (_a = content[imageName]) === null || _a === void 0 ? void 0 : _a.content;
                    if (imageItem) {
                        o[actualOptions.imageFieldName] = imageItem;
                        delete o[key];
                    }
                }
                else if (typeof o[key] === 'object' &&
                    o[key] !== null) {
                    processObject(o[key]);
                }
            }
        };
        processObject(item.content);
    }
};
exports.ImageNameProcessor = ImageNameProcessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbmFtZS5wcm9jZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LXByb2Nlc3NvcnMvaW1hZ2UtbmFtZS5wcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0EsTUFBTSxjQUFjLEdBQThCO0lBQ2hELGtCQUFrQixFQUFFLFdBQVc7SUFDL0IsY0FBYyxFQUFFLE9BQU87Q0FDeEIsQ0FBQztBQUVLLE1BQU0sa0JBQWtCLEdBQXFCLEtBQUssRUFDdkQsT0FBTyxFQUNQLElBQUksRUFDSixPQUE0QyxFQUM3QixFQUFFO0lBQ2pCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQUMsQ0FBQztJQUV2RSxJQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUNyQjtRQUNBLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7O1lBQ2xDLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEdBQUcsS0FBSyxhQUFhLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVDLE1BQU0sU0FBUyxHQUFJLENBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxTQUFTLEdBQUcsTUFBQSxPQUFPLENBQUMsU0FBUyxDQUFDLDBDQUFFLE9BQU8sQ0FBQztvQkFDOUMsSUFBSSxTQUFTLEVBQUU7d0JBQ1osQ0FBUyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxTQUFTLENBQUM7d0JBQ3JELE9BQVEsQ0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDRjtxQkFBTSxJQUNMLE9BQVEsQ0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVE7b0JBQ2xDLENBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQ3hCO29CQUNBLGFBQWEsQ0FBRSxDQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUM7QUEvQlcsUUFBQSxrQkFBa0Isc0JBK0I3QiJ9

/***/ }),

/***/ "./content-processors/index.ts":
/*!*************************************!*\
  !*** ./content-processors/index.ts ***!
  \*************************************/
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
__exportStar(__webpack_require__(/*! ./image-name.processor */ "./content-processors/image-name.processor.ts"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250ZW50LXByb2Nlc3NvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF1QyJ9

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentItemStatus = exports.ContentManagerStatus = exports.ContentItemType = void 0;
const content_loaders_1 = __webpack_require__(/*! ./content-loaders */ "./content-loaders/index.ts");
const content_processors_1 = __webpack_require__(/*! ./content-processors */ "./content-processors/index.ts");
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
    ContentManagerStatus[ContentManagerStatus["Processing"] = 2] = "Processing";
    ContentManagerStatus[ContentManagerStatus["Ready"] = 3] = "Ready";
})(ContentManagerStatus = exports.ContentManagerStatus || (exports.ContentManagerStatus = {}));
var ContentItemStatus;
(function (ContentItemStatus) {
    ContentItemStatus[ContentItemStatus["Idle"] = 0] = "Idle";
    ContentItemStatus[ContentItemStatus["Loading"] = 1] = "Loading";
    ContentItemStatus[ContentItemStatus["Loaded"] = 2] = "Loaded";
    ContentItemStatus[ContentItemStatus["Processing"] = 3] = "Processing";
    ContentItemStatus[ContentItemStatus["Processed"] = 4] = "Processed";
})(ContentItemStatus = exports.ContentItemStatus || (exports.ContentItemStatus = {}));
const defaultContentLoaders = {
    [ContentItemType.JSON]: content_loaders_1.JSONLoader,
    [ContentItemType.Font]: content_loaders_1.FontLoader,
    [ContentItemType.Image]: content_loaders_1.ImageLoader,
    [ContentItemType.Audio]: content_loaders_1.AudioLoader,
    [ContentItemType.Text]: content_loaders_1.TextLoader,
};
const defaultContentProcessors = {
    imageName: content_processors_1.ImageNameProcessor,
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
const MIN_SLEEP_TIME = 1000;
const MAX_SLEEP_TIME = 3000;
class ContentManager {
    constructor(options) {
        var _a, _b, _c;
        this.currentContentList = [];
        this.currentProgress = 0;
        this.currentTotalProgress = 0;
        this.content = {};
        this.status = ContentManagerStatus.Idle;
        this.options = Object.assign({}, ContentManager.defaultOptions, options !== null && options !== void 0 ? options : {}, {
            loaders: {
                ...ContentManager.defaultOptions.loaders,
                ...((_a = options === null || options === void 0 ? void 0 : options.loaders) !== null && _a !== void 0 ? _a : {}),
            },
            processors: {
                ...((_b = ContentManager.defaultOptions.processors) !== null && _b !== void 0 ? _b : {}),
                ...((_c = options === null || options === void 0 ? void 0 : options.processors) !== null && _c !== void 0 ? _c : {}),
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
    static dispose() {
        if (ContentManager.instance === undefined) {
            throw new Error('Content manager not initialised');
        }
        delete ContentManager.instance;
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
        if (!this.currentContentList.length || this.currentTotalProgress === 0) {
            return 1;
        }
        return clamp(this.currentProgress / this.currentTotalProgress);
    }
    /**
     * Load content items
     *
     * Existing content items will be retained, and any content items which
     * already exist will be re-loaded
     */
    static async load(items) {
        var _a, _b, _c, _d, _e;
        if (!items || items.length === 0) {
            return;
        }
        const instance = ContentManager.getInstance();
        if (!instance.options.loaders ||
            Object.keys(instance.options.loaders).length === 0) {
            throw new Error('No content loaders defined');
        }
        instance.currentContentList = items;
        // Calculate how many tasks we need to perform
        const countTotalToLoad = items.length;
        const countTotalToProcess = items.reduce((a, c) => { var _a; return a + ((_a = c.processors) !== null && _a !== void 0 ? _a : []).length; }, 0);
        instance.currentProgress = 0;
        instance.currentTotalProgress = countTotalToLoad + countTotalToProcess;
        // Load items
        instance.status = ContentManagerStatus.Loading;
        for (const item of items) {
            if (!(item.type in instance.options.loaders)) {
                throw new Error(`No content loader defined for type "${item.type}"`);
            }
            if (instance.options.simulateSlowLoading) {
                await sleep(randomBetween((_a = instance.options.slowLoadingTimeMin) !== null && _a !== void 0 ? _a : MIN_SLEEP_TIME, (_b = instance.options.slowLoadingTimeMax) !== null && _b !== void 0 ? _b : MAX_SLEEP_TIME));
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
            instance.currentProgress++;
        }
        // Process items
        instance.status = ContentManagerStatus.Processing;
        for (const item of items) {
            if (!item.processors || item.processors.length === 0) {
                continue;
            }
            if (!instance.options.processors ||
                Object.keys(instance.options.processors).length === 0) {
                throw new Error('No content processors defined');
            }
            const contentItem = instance.content[item.name];
            if (!contentItem) {
                // We should never reach this point; the item will have been loaded
                // and added to the instance's content dictionary... but just in case
                throw new Error(`Cannot find item with name "${item.name}"`);
            }
            if (instance.options.simulateSlowProcessing) {
                await sleep(randomBetween((_c = instance.options.slowProcessingTimeMin) !== null && _c !== void 0 ? _c : MIN_SLEEP_TIME, (_d = instance.options.slowProcessingTimeMax) !== null && _d !== void 0 ? _d : MAX_SLEEP_TIME));
            }
            contentItem.status = ContentItemStatus.Processing;
            for (const processor of item.processors) {
                if (!(processor.name in instance.options.processors)) {
                    throw new Error(`No content processor defined with name "${processor.name}"`);
                }
                await instance.options.processors[processor.name](instance.content, contentItem, ...((_e = processor.args) !== null && _e !== void 0 ? _e : []));
                instance.currentProgress++;
            }
            contentItem.status = ContentItemStatus.Processed;
        }
        instance.status = ContentManagerStatus.Ready;
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
    processors: defaultContentProcessors,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFNMkI7QUFDM0IsNkRBRThCO0FBeUU5QixJQUFZLGVBTVg7QUFORCxXQUFZLGVBQWU7SUFDekIsZ0NBQWEsQ0FBQTtJQUNiLGdDQUFhLENBQUE7SUFDYixrQ0FBZSxDQUFBO0lBQ2Ysa0NBQWUsQ0FBQTtJQUNmLGdDQUFhLENBQUE7QUFDZixDQUFDLEVBTlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFNMUI7QUFFRCxJQUFZLG9CQUtYO0FBTEQsV0FBWSxvQkFBb0I7SUFDOUIsK0RBQVEsQ0FBQTtJQUNSLHFFQUFPLENBQUE7SUFDUCwyRUFBVSxDQUFBO0lBQ1YsaUVBQUssQ0FBQTtBQUNQLENBQUMsRUFMVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUsvQjtBQUVELElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUMzQix5REFBUSxDQUFBO0lBQ1IsK0RBQU8sQ0FBQTtJQUNQLDZEQUFNLENBQUE7SUFDTixxRUFBVSxDQUFBO0lBQ1YsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQU01QjtBQXFDRCxNQUFNLHFCQUFxQixHQUFxQjtJQUM5QyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSw0QkFBVTtJQUNsQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSw0QkFBVTtJQUNsQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSw2QkFBVztJQUNwQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSw2QkFBVztJQUNwQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSw0QkFBVTtDQUNuQyxDQUFDO0FBRUYsTUFBTSx3QkFBd0IsR0FBd0I7SUFDcEQsU0FBUyxFQUFFLHVDQUFrQjtDQUM5QixDQUFDO0FBRUYsS0FBSyxVQUFVLEtBQUssQ0FBQyxFQUFVO0lBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVcsRUFBRSxHQUFXO0lBQzdDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUU1QixNQUFxQixjQUFjO0lBb0JqQyxZQUFvQixPQUF3Qzs7UUFWcEQsdUJBQWtCLEdBQXNCLEVBQUUsQ0FBQztRQUUzQyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1Qix5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFFakMsWUFBTyxHQUFnQyxFQUFFLENBQUM7UUFFMUMsV0FBTSxHQUF5QixvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFHL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQixFQUFFLEVBQ0YsY0FBYyxDQUFDLGNBQWMsRUFDN0IsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxFQUNiO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPO2dCQUN4QyxHQUFHLENBQUMsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxtQ0FBSSxFQUFFLENBQUM7YUFDNUI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLE1BQUEsY0FBYyxDQUFDLGNBQWMsQ0FBQyxVQUFVLG1DQUFJLEVBQUUsQ0FBQztnQkFDbkQsR0FBRyxDQUFDLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsbUNBQUksRUFBRSxDQUFDO2FBQy9CO1NBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUF3QztRQUMvRCxJQUFJLGNBQWMsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN4RDtRQUVELGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLElBQUksY0FBYyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVztRQUN4QixJQUFJLGNBQWMsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUM3RDtRQUVELE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLEtBQUssUUFBUTtRQUN4QixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsT0FBTyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxLQUFLLE1BQU07UUFDdEIsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTlDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssQ0FBQyxFQUFFO1lBQ3RFLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQXlCOztRQUNoRCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUVELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU5QyxJQUNFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUNsRDtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMvQztRQUVELFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFcEMsOENBQThDO1FBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFdBQUMsT0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFBLENBQUMsQ0FBQyxVQUFVLG1DQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQSxFQUFBLEVBQ3pDLENBQUMsQ0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDN0IsUUFBUSxDQUFDLG9CQUFvQixHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO1FBRXZFLGFBQWE7UUFDYixRQUFRLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUMvQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3RFO1lBRUQsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFO2dCQUN4QyxNQUFNLEtBQUssQ0FBQyxhQUFhLENBQ3ZCLE1BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsbUNBQUksY0FBYyxFQUNyRCxNQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLG1DQUFJLGNBQWMsQ0FDdEQsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxNQUFNLFdBQVcsR0FBRztnQkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTzthQUNsQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzdELEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDYixDQUFDO1lBRUYsV0FBVyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFDOUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVCO1FBRUQsZ0JBQWdCO1FBQ2hCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO1FBQ2xELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDcEQsU0FBUzthQUNWO1lBRUQsSUFDRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3JEO2dCQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUNsRDtZQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLG1FQUFtRTtnQkFDbkUscUVBQXFFO2dCQUNyRSxNQUFNLElBQUksS0FBSyxDQUNiLCtCQUErQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQzVDLENBQUM7YUFDSDtZQUVELElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRTtnQkFDM0MsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUN2QixNQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLG1DQUFJLGNBQWMsRUFDeEQsTUFBQSxRQUFRLENBQUMsT0FBTyxDQUFDLHFCQUFxQixtQ0FBSSxjQUFjLENBQ3pELENBQUMsQ0FBQzthQUNKO1lBRUQsV0FBVyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7WUFFbEQsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQ2IsMkNBQTJDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FDN0QsQ0FBQztpQkFDSDtnQkFFRCxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDL0MsUUFBUSxDQUFDLE9BQU8sRUFDaEIsV0FBVyxFQUNYLEdBQUcsQ0FBQyxNQUFBLFNBQVMsQ0FBQyxJQUFJLG1DQUFJLEVBQUUsQ0FBQyxDQUMxQixDQUFDO2dCQUVGLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUM1QjtZQUVELFdBQVcsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1NBQ2xEO1FBRUQsUUFBUSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBSSxJQUFZO1FBQy9CLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLElBQUksYUFBYSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFZLENBQUM7SUFDN0MsQ0FBQzs7QUE3TkgsaUNBOE5DO0FBM055Qiw2QkFBYyxHQUEwQjtJQUM5RCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFVBQVUsRUFBRSx3QkFBd0I7Q0FDckMsQ0FBQyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsUUFBUSw4RUFBOEU7QUFDbko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFVBQVU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsK0RBQStELFVBQVU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsZUFBZTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOzs7Ozs7VUN6TTNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9hdWRpby5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vY29udGVudC1sb2FkZXJzL2ZvbnQubG9hZGVyLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9pbWFnZS5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vY29udGVudC1sb2FkZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtbG9hZGVycy9qc29uLmxvYWRlci50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvLi9jb250ZW50LWxvYWRlcnMvdGV4dC5sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyLy4vY29udGVudC1wcm9jZXNzb3JzL2ltYWdlLW5hbWUucHJvY2Vzc29yLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NvbnRlbnQtbWFuYWdlci8uL2NvbnRlbnQtcHJvY2Vzc29ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY29udGVudC1tYW5hZ2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jb250ZW50LW1hbmFnZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkF1ZGlvTG9hZGVyID0gdm9pZCAwO1xuY29uc3QgQXVkaW9Mb2FkZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odXJsKTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoYXVkaW8pO1xuICAgICAgICB9KTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYEVycm9yIGxvYWRpbmcgYXVkaW8gXCIke3VybH1cImApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLkF1ZGlvTG9hZGVyID0gQXVkaW9Mb2FkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFZrYVc4dWJHOWhaR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dlkyOXVkR1Z1ZEMxc2IyRmtaWEp6TDJGMVpHbHZMbXh2WVdSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRlR5eE5RVUZOTEZkQlFWY3NSMEZCYTBJc1MwRkJTeXhGUVVNM1F5eEhRVUZYTEVWQlEwY3NSVUZCUlR0SlFVTm9RaXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZ0UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU4yUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU40UXl4UFFVRlBMRU5CUVVNc1MwRkJXU3hEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU51UXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla01zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU1zUTBGQlF6dEJRVnBYTEZGQlFVRXNWMEZCVnl4bFFWbDBRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvbnRMb2FkZXIgPSB2b2lkIDA7XG5jb25zdCBGb250TG9hZGVyID0gYXN5bmMgKHVybCwgZmFtaWx5KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBGb250RmFjZShmYW1pbHksIGB1cmwoJHt1cmx9KWApO1xuICAgICAgICBmb250LmxvYWQoKVxuICAgICAgICAgICAgLnRoZW4oZm9udCA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5mb250cy5hZGQoZm9udCk7XG4gICAgICAgICAgICByZXNvbHZlKGZvbnQpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgRXJyb3IgbG9hZGluZyBmb250IFwiJHt1cmx9XCJgKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5Gb250TG9hZGVyID0gRm9udExvYWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptOXVkQzVzYjJGa1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTlqYjI1MFpXNTBMV3h2WVdSbGNuTXZabTl1ZEM1c2IyRmtaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVThzVFVGQlRTeFZRVUZWTEVkQlFXdENMRXRCUVVzc1JVRkROVU1zUjBGQlZ5eEZRVU5ZTEUxQlFXTXNSVUZEUVN4RlFVRkZPMGxCUTJoQ0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVU3VVVGREwwTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMkZCUTFJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlExZ3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZWtJc1QwRkJUeXhEUVVGRExFbEJRVmNzUTBGQlF5eERRVUZETzFGQlEzWkNMRU5CUVVNc1EwRkJRenRoUVVORUxFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVTdXVUZEVml4TlFVRk5MRU5CUVVNc2RVSkJRWFZDTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU1zUTBGQlF6dEJRV1pYTEZGQlFVRXNWVUZCVlN4alFXVnlRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkltYWdlTG9hZGVyID0gdm9pZCAwO1xuY29uc3QgSW1hZ2VMb2FkZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgRXJyb3IgbG9hZGluZyBpbWFnZSBcIiR7dXJsfVwiYCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuSW1hZ2VMb2FkZXIgPSBJbWFnZUxvYWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlV1Ykc5aFpHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2WTI5dWRHVnVkQzFzYjJGa1pYSnpMMmx0WVdkbExteHZZV1JsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZGVHl4TlFVRk5MRmRCUVZjc1IwRkJhMElzUzBGQlN5eEZRVU0zUXl4SFFVRlhMRVZCUTJkQ0xFVkJRVVU3U1VGRE4wSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJiVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1VVRkRka1FzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVNeFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOb1FpeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnNReXhQUVVGUExFTkJRVU1zUzBGQldTeERRVUZETEVOQlFVTTdVVUZEZUVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnVReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGVrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5NTEVOQlFVTXNRMEZCUXp0QlFXSlhMRkZCUVVFc1YwRkJWeXhsUVdGMFFpSjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2F1ZGlvLmxvYWRlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZm9udC5sb2FkZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ltYWdlLmxvYWRlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vanNvbi5sb2FkZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RleHQubG9hZGVyXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5amIyNTBaVzUwTFd4dllXUmxjbk12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096dEJRVUZCTEdsRVFVRXJRanRCUVVNdlFpeG5SRUZCT0VJN1FVRkRPVUlzYVVSQlFTdENPMEZCUXk5Q0xHZEVRVUU0UWp0QlFVTTVRaXhuUkVGQk9FSWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkpTT05Mb2FkZXIgPSB2b2lkIDA7XG5jb25zdCBKU09OTG9hZGVyID0gYXN5bmMgKHVybE9yRGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdXJsT3JEYXRhID09PSAnc3RyaW5nJyAmJlxuICAgICAgICB1cmxPckRhdGEuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZmV0Y2godXJsT3JEYXRhLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoYEVycm9yIGxvYWRpbmcganNvbiBcIiR7dXJsT3JEYXRhfVwiYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxPckRhdGE7XG59O1xuZXhwb3J0cy5KU09OTG9hZGVyID0gSlNPTkxvYWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuTnZiaTVzYjJGa1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTlqYjI1MFpXNTBMV3h2WVdSbGNuTXZhbk52Ymk1c2IyRmtaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVThzVFVGQlRTeFZRVUZWTEVkQlFXdENMRXRCUVVzc1JVRkROVU1zVTBGQll5eEZRVU5HTEVWQlFVVTdTVUZEWkN4SlFVTkZMRTlCUVU4c1UwRkJVeXhMUVVGTExGRkJRVkU3VVVGRE4wSXNVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGRE5VSTdVVUZEUVN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTNoRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RlFVRkZPMmRDUVVOMFFpeE5RVUZOTEVWQlFVVXNTMEZCU3p0blFrRkRZaXhQUVVGUExFVkJRVVU3YjBKQlExQXNZMEZCWXl4RlFVRkZMR2REUVVGblF6dHBRa0ZEYWtRN1lVRkRSaXhEUVVGRE8ybENRVU5ETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRFppeFBRVUZQTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVONlFpeERRVUZETEVOQlFVTTdhVUpCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTllMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5vUWl4RFFVRkRMRU5CUVVNN2FVSkJRMFFzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRWaXhOUVVGTkxFTkJRVU1zZFVKQlFYVkNMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5LTzBsQlEwUXNUMEZCVHl4VFFVRmpMRU5CUVVNN1FVRkRlRUlzUTBGQlF5eERRVUZETzBGQk1VSlhMRkZCUVVFc1ZVRkJWU3hqUVRCQ2NrSWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRleHRMb2FkZXIgPSB2b2lkIDA7XG5jb25zdCBUZXh0TG9hZGVyID0gYXN5bmMgKHVybE9yVGV4dCkgPT4ge1xuICAgIGlmICh1cmxPclRleHQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZmV0Y2godXJsT3JUZXh0LCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoYEVycm9yIGxvYWRpbmcgdGV4dCBcIiR7dXJsT3JUZXh0fVwiYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxPclRleHQudG9TdHJpbmcoKTtcbn07XG5leHBvcnRzLlRleHRMb2FkZXIgPSBUZXh0TG9hZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRDNXNiMkZrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOWpiMjUwWlc1MExXeHZZV1JsY25NdmRHVjRkQzVzYjJGa1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVOHNUVUZCVFN4VlFVRlZMRWRCUVd0Q0xFdEJRVXNzUlVGRE5VTXNVMEZCWXl4RlFVTkdMRVZCUVVVN1NVRkRaQ3hKUVVGSkxGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkRhRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU40UXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJUdG5Ra0ZEZEVJc1RVRkJUU3hGUVVGRkxFdEJRVXM3WjBKQlEySXNUMEZCVHl4RlFVRkZPMjlDUVVOUUxHTkJRV01zUlVGQlJTd3dRa0ZCTUVJN2FVSkJRek5ETzJGQlEwWXNRMEZCUXp0cFFrRkRReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUTJZc1QwRkJUeXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEZWtJc1EwRkJReXhEUVVGRE8ybENRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRFdDeFBRVUZQTEVOQlFVTXNTVUZCVXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzUTBGQlF5eERRVUZETzJsQ1FVTkVMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVU3WjBKQlExWXNUVUZCVFN4RFFVRkRMSFZDUVVGMVFpeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpsRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRTanRKUVVORUxFOUJRVThzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMEZCUXpsQ0xFTkJRVU1zUTBGQlF6dEJRWFpDVnl4UlFVRkJMRlZCUVZVc1kwRjFRbkpDSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbWFnZU5hbWVQcm9jZXNzb3IgPSB2b2lkIDA7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBpbWFnZU5hbWVGaWVsZE5hbWU6ICdpbWFnZU5hbWUnLFxuICAgIGltYWdlRmllbGROYW1lOiAnaW1hZ2UnLFxufTtcbmNvbnN0IEltYWdlTmFtZVByb2Nlc3NvciA9IGFzeW5jIChjb250ZW50LCBpdGVtLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgYWN0dWFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgaWYgKHR5cGVvZiBpdGVtLmNvbnRlbnQgPT09ICdvYmplY3QnICYmXG4gICAgICAgIGl0ZW0uY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9jZXNzT2JqZWN0ID0gKG8pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBhY3R1YWxPcHRpb25zLmltYWdlTmFtZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBvW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSXRlbSA9IChfYSA9IGNvbnRlbnRbaW1hZ2VOYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bYWN0dWFsT3B0aW9ucy5pbWFnZUZpZWxkTmFtZV0gPSBpbWFnZUl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvW2tleV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzT2JqZWN0KG9ba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcm9jZXNzT2JqZWN0KGl0ZW0uY29udGVudCk7XG4gICAgfVxufTtcbmV4cG9ydHMuSW1hZ2VOYW1lUHJvY2Vzc29yID0gSW1hZ2VOYW1lUHJvY2Vzc29yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVcxaFoyVXRibUZ0WlM1d2NtOWpaWE56YjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOWpiMjUwWlc1MExYQnliMk5sYzNOdmNuTXZhVzFoWjJVdGJtRnRaUzV3Y205alpYTnpiM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJUMEVzVFVGQlRTeGpRVUZqTEVkQlFUaENPMGxCUTJoRUxHdENRVUZyUWl4RlFVRkZMRmRCUVZjN1NVRkRMMElzWTBGQll5eEZRVUZGTEU5QlFVODdRMEZEZUVJc1EwRkJRenRCUVVWTExFMUJRVTBzYTBKQlFXdENMRWRCUVhGQ0xFdEJRVXNzUlVGRGRrUXNUMEZCVHl4RlFVTlFMRWxCUVVrc1JVRkRTaXhQUVVFMFF5eEZRVU0zUWl4RlFVRkZPMGxCUTJwQ0xFMUJRVTBzWVVGQllTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEdGQlFWQXNUMEZCVHl4alFVRlFMRTlCUVU4c1IwRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVYyUlN4SlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFJRVUZSTzFGQlEyaERMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzU1VGQlNTeEZRVU55UWp0UlFVTkJMRTFCUVUwc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVTdPMWxCUTJ4RExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVOdVFpeEpRVUZKTEVkQlFVY3NTMEZCU3l4aFFVRmhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdiMEpCUXpWRExFMUJRVTBzVTBGQlV5eEhRVUZKTEVOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRGJFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1RVRkJRU3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETERCRFFVRkZMRTlCUVU4c1EwRkJRenR2UWtGRE9VTXNTVUZCU1N4VFFVRlRMRVZCUVVVN2QwSkJRMW9zUTBGQlV5eERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03ZDBKQlEzSkVMRTlCUVZFc1EwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVTjRRanRwUWtGRFJqdHhRa0ZCVFN4SlFVTk1MRTlCUVZFc1EwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdiMEpCUTJ4RExFTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUTNoQ08yOUNRVU5CTEdGQlFXRXNRMEZCUlN4RFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEYUVNN1lVRkRSanRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVVZHTEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRE4wSTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRXZRbGNzVVVGQlFTeHJRa0ZCYTBJc2MwSkJLMEkzUWlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW1hZ2UtbmFtZS5wcm9jZXNzb3JcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTlqYjI1MFpXNTBMWEJ5YjJObGMzTnZjbk12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096dEJRVUZCTEhsRVFVRjFReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbnRlbnRJdGVtU3RhdHVzID0gZXhwb3J0cy5Db250ZW50TWFuYWdlclN0YXR1cyA9IGV4cG9ydHMuQ29udGVudEl0ZW1UeXBlID0gdm9pZCAwO1xuY29uc3QgY29udGVudF9sb2FkZXJzXzEgPSByZXF1aXJlKFwiLi9jb250ZW50LWxvYWRlcnNcIik7XG5jb25zdCBjb250ZW50X3Byb2Nlc3NvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnRlbnQtcHJvY2Vzc29yc1wiKTtcbnZhciBDb250ZW50SXRlbVR5cGU7XG4oZnVuY3Rpb24gKENvbnRlbnRJdGVtVHlwZSkge1xuICAgIENvbnRlbnRJdGVtVHlwZVtcIkpTT05cIl0gPSBcImpzb25cIjtcbiAgICBDb250ZW50SXRlbVR5cGVbXCJGb250XCJdID0gXCJmb250XCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiSW1hZ2VcIl0gPSBcImltYWdlXCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiQXVkaW9cIl0gPSBcImF1ZGlvXCI7XG4gICAgQ29udGVudEl0ZW1UeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xufSkoQ29udGVudEl0ZW1UeXBlID0gZXhwb3J0cy5Db250ZW50SXRlbVR5cGUgfHwgKGV4cG9ydHMuQ29udGVudEl0ZW1UeXBlID0ge30pKTtcbnZhciBDb250ZW50TWFuYWdlclN0YXR1cztcbihmdW5jdGlvbiAoQ29udGVudE1hbmFnZXJTdGF0dXMpIHtcbiAgICBDb250ZW50TWFuYWdlclN0YXR1c1tDb250ZW50TWFuYWdlclN0YXR1c1tcIklkbGVcIl0gPSAwXSA9IFwiSWRsZVwiO1xuICAgIENvbnRlbnRNYW5hZ2VyU3RhdHVzW0NvbnRlbnRNYW5hZ2VyU3RhdHVzW1wiTG9hZGluZ1wiXSA9IDFdID0gXCJMb2FkaW5nXCI7XG4gICAgQ29udGVudE1hbmFnZXJTdGF0dXNbQ29udGVudE1hbmFnZXJTdGF0dXNbXCJQcm9jZXNzaW5nXCJdID0gMl0gPSBcIlByb2Nlc3NpbmdcIjtcbiAgICBDb250ZW50TWFuYWdlclN0YXR1c1tDb250ZW50TWFuYWdlclN0YXR1c1tcIlJlYWR5XCJdID0gM10gPSBcIlJlYWR5XCI7XG59KShDb250ZW50TWFuYWdlclN0YXR1cyA9IGV4cG9ydHMuQ29udGVudE1hbmFnZXJTdGF0dXMgfHwgKGV4cG9ydHMuQ29udGVudE1hbmFnZXJTdGF0dXMgPSB7fSkpO1xudmFyIENvbnRlbnRJdGVtU3RhdHVzO1xuKGZ1bmN0aW9uIChDb250ZW50SXRlbVN0YXR1cykge1xuICAgIENvbnRlbnRJdGVtU3RhdHVzW0NvbnRlbnRJdGVtU3RhdHVzW1wiSWRsZVwiXSA9IDBdID0gXCJJZGxlXCI7XG4gICAgQ29udGVudEl0ZW1TdGF0dXNbQ29udGVudEl0ZW1TdGF0dXNbXCJMb2FkaW5nXCJdID0gMV0gPSBcIkxvYWRpbmdcIjtcbiAgICBDb250ZW50SXRlbVN0YXR1c1tDb250ZW50SXRlbVN0YXR1c1tcIkxvYWRlZFwiXSA9IDJdID0gXCJMb2FkZWRcIjtcbiAgICBDb250ZW50SXRlbVN0YXR1c1tDb250ZW50SXRlbVN0YXR1c1tcIlByb2Nlc3NpbmdcIl0gPSAzXSA9IFwiUHJvY2Vzc2luZ1wiO1xuICAgIENvbnRlbnRJdGVtU3RhdHVzW0NvbnRlbnRJdGVtU3RhdHVzW1wiUHJvY2Vzc2VkXCJdID0gNF0gPSBcIlByb2Nlc3NlZFwiO1xufSkoQ29udGVudEl0ZW1TdGF0dXMgPSBleHBvcnRzLkNvbnRlbnRJdGVtU3RhdHVzIHx8IChleHBvcnRzLkNvbnRlbnRJdGVtU3RhdHVzID0ge30pKTtcbmNvbnN0IGRlZmF1bHRDb250ZW50TG9hZGVycyA9IHtcbiAgICBbQ29udGVudEl0ZW1UeXBlLkpTT05dOiBjb250ZW50X2xvYWRlcnNfMS5KU09OTG9hZGVyLFxuICAgIFtDb250ZW50SXRlbVR5cGUuRm9udF06IGNvbnRlbnRfbG9hZGVyc18xLkZvbnRMb2FkZXIsXG4gICAgW0NvbnRlbnRJdGVtVHlwZS5JbWFnZV06IGNvbnRlbnRfbG9hZGVyc18xLkltYWdlTG9hZGVyLFxuICAgIFtDb250ZW50SXRlbVR5cGUuQXVkaW9dOiBjb250ZW50X2xvYWRlcnNfMS5BdWRpb0xvYWRlcixcbiAgICBbQ29udGVudEl0ZW1UeXBlLlRleHRdOiBjb250ZW50X2xvYWRlcnNfMS5UZXh0TG9hZGVyLFxufTtcbmNvbnN0IGRlZmF1bHRDb250ZW50UHJvY2Vzc29ycyA9IHtcbiAgICBpbWFnZU5hbWU6IGNvbnRlbnRfcHJvY2Vzc29yc18xLkltYWdlTmFtZVByb2Nlc3Nvcixcbn07XG5hc3luYyBmdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbmZ1bmN0aW9uIGNsYW1wKGEsIG1pbiA9IDAsIG1heCA9IDEpIHtcbiAgICByZXR1cm4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG59XG5mdW5jdGlvbiByYW5kb21CZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cbmNvbnN0IE1JTl9TTEVFUF9USU1FID0gMTAwMDtcbmNvbnN0IE1BWF9TTEVFUF9USU1FID0gMzAwMDtcbmNsYXNzIENvbnRlbnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250ZW50TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRvdGFsUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBDb250ZW50TWFuYWdlclN0YXR1cy5JZGxlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBDb250ZW50TWFuYWdlci5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIHtcbiAgICAgICAgICAgIGxvYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi5Db250ZW50TWFuYWdlci5kZWZhdWx0T3B0aW9ucy5sb2FkZXJzLFxuICAgICAgICAgICAgICAgIC4uLigoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9hZGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3NvcnM6IHtcbiAgICAgICAgICAgICAgICAuLi4oKF9iID0gQ29udGVudE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMucHJvY2Vzc29ycykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDoge30pLFxuICAgICAgICAgICAgICAgIC4uLigoX2MgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJvY2Vzc29ycykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDoge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGNvbnRlbnQgbWFuYWdlciBhbmQgcHJvdmlkZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdGlhbGlzZShvcHRpb25zKSB7XG4gICAgICAgIGlmIChDb250ZW50TWFuYWdlci5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgbWFuYWdlciBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgQ29udGVudE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgQ29udGVudE1hbmFnZXIob3B0aW9ucyk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXNwb3NlKCkge1xuICAgICAgICBpZiAoQ29udGVudE1hbmFnZXIuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250ZW50IG1hbmFnZXIgbm90IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIENvbnRlbnRNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmIChDb250ZW50TWFuYWdlci5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgbWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29udGVudE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbG9hZGluZyBwcm9ncmVzcywgcmVwcmVzZW50ZWQgYXMgYSB1bml0IHNjYWxhciBbMCwgMV1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IENvbnRlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXRQcm9ncmVzcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGNvbnRlbnQgbWFuYWdlciBzdGF0dXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBDb250ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc3RhdHVzO1xuICAgIH1cbiAgICBnZXRQcm9ncmVzcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRDb250ZW50TGlzdC5sZW5ndGggfHwgdGhpcy5jdXJyZW50VG90YWxQcm9ncmVzcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYW1wKHRoaXMuY3VycmVudFByb2dyZXNzIC8gdGhpcy5jdXJyZW50VG90YWxQcm9ncmVzcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29udGVudCBpdGVtc1xuICAgICAqXG4gICAgICogRXhpc3RpbmcgY29udGVudCBpdGVtcyB3aWxsIGJlIHJldGFpbmVkLCBhbmQgYW55IGNvbnRlbnQgaXRlbXMgd2hpY2hcbiAgICAgKiBhbHJlYWR5IGV4aXN0IHdpbGwgYmUgcmUtbG9hZGVkXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGxvYWQoaXRlbXMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IENvbnRlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmICghaW5zdGFuY2Uub3B0aW9ucy5sb2FkZXJzIHx8XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5vcHRpb25zLmxvYWRlcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb250ZW50IGxvYWRlcnMgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRDb250ZW50TGlzdCA9IGl0ZW1zO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaG93IG1hbnkgdGFza3Mgd2UgbmVlZCB0byBwZXJmb3JtXG4gICAgICAgIGNvbnN0IGNvdW50VG90YWxUb0xvYWQgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvdW50VG90YWxUb1Byb2Nlc3MgPSBpdGVtcy5yZWR1Y2UoKGEsIGMpID0+IHsgdmFyIF9hOyByZXR1cm4gYSArICgoX2EgPSBjLnByb2Nlc3NvcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKS5sZW5ndGg7IH0sIDApO1xuICAgICAgICBpbnN0YW5jZS5jdXJyZW50UHJvZ3Jlc3MgPSAwO1xuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VG90YWxQcm9ncmVzcyA9IGNvdW50VG90YWxUb0xvYWQgKyBjb3VudFRvdGFsVG9Qcm9jZXNzO1xuICAgICAgICAvLyBMb2FkIGl0ZW1zXG4gICAgICAgIGluc3RhbmNlLnN0YXR1cyA9IENvbnRlbnRNYW5hZ2VyU3RhdHVzLkxvYWRpbmc7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgaWYgKCEoaXRlbS50eXBlIGluIGluc3RhbmNlLm9wdGlvbnMubG9hZGVycykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbnRlbnQgbG9hZGVyIGRlZmluZWQgZm9yIHR5cGUgXCIke2l0ZW0udHlwZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLm9wdGlvbnMuc2ltdWxhdGVTbG93TG9hZGluZykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHJhbmRvbUJldHdlZW4oKF9hID0gaW5zdGFuY2Uub3B0aW9ucy5zbG93TG9hZGluZ1RpbWVNaW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IE1JTl9TTEVFUF9USU1FLCAoX2IgPSBpbnN0YW5jZS5vcHRpb25zLnNsb3dMb2FkaW5nVGltZU1heCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogTUFYX1NMRUVQX1RJTUUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRJdGVtID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IENvbnRlbnRJdGVtU3RhdHVzLkxvYWRpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5zdGFuY2UuY29udGVudFtpdGVtLm5hbWVdID0gY29udGVudEl0ZW07XG4gICAgICAgICAgICBjb250ZW50SXRlbS5jb250ZW50ID0gYXdhaXQgaW5zdGFuY2Uub3B0aW9ucy5sb2FkZXJzW2l0ZW0udHlwZV0oLi4uaXRlbS5hcmdzKTtcbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLnN0YXR1cyA9IENvbnRlbnRJdGVtU3RhdHVzLkxvYWRlZDtcbiAgICAgICAgICAgIGluc3RhbmNlLmN1cnJlbnRQcm9ncmVzcysrO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb2Nlc3MgaXRlbXNcbiAgICAgICAgaW5zdGFuY2Uuc3RhdHVzID0gQ29udGVudE1hbmFnZXJTdGF0dXMuUHJvY2Vzc2luZztcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ucHJvY2Vzc29ycyB8fCBpdGVtLnByb2Nlc3NvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLm9wdGlvbnMucHJvY2Vzc29ycyB8fFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm9wdGlvbnMucHJvY2Vzc29ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb250ZW50IHByb2Nlc3NvcnMgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGVudEl0ZW0gPSBpbnN0YW5jZS5jb250ZW50W2l0ZW0ubmFtZV07XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcG9pbnQ7IHRoZSBpdGVtIHdpbGwgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAgICAgICAgICAgIC8vIGFuZCBhZGRlZCB0byB0aGUgaW5zdGFuY2UncyBjb250ZW50IGRpY3Rpb25hcnkuLi4gYnV0IGp1c3QgaW4gY2FzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgaXRlbSB3aXRoIG5hbWUgXCIke2l0ZW0ubmFtZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLm9wdGlvbnMuc2ltdWxhdGVTbG93UHJvY2Vzc2luZykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHJhbmRvbUJldHdlZW4oKF9jID0gaW5zdGFuY2Uub3B0aW9ucy5zbG93UHJvY2Vzc2luZ1RpbWVNaW4pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IE1JTl9TTEVFUF9USU1FLCAoX2QgPSBpbnN0YW5jZS5vcHRpb25zLnNsb3dQcm9jZXNzaW5nVGltZU1heCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogTUFYX1NMRUVQX1RJTUUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLnN0YXR1cyA9IENvbnRlbnRJdGVtU3RhdHVzLlByb2Nlc3Npbmc7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2Nlc3NvciBvZiBpdGVtLnByb2Nlc3NvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShwcm9jZXNzb3IubmFtZSBpbiBpbnN0YW5jZS5vcHRpb25zLnByb2Nlc3NvcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29udGVudCBwcm9jZXNzb3IgZGVmaW5lZCB3aXRoIG5hbWUgXCIke3Byb2Nlc3Nvci5uYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IGluc3RhbmNlLm9wdGlvbnMucHJvY2Vzc29yc1twcm9jZXNzb3IubmFtZV0oaW5zdGFuY2UuY29udGVudCwgY29udGVudEl0ZW0sIC4uLigoX2UgPSBwcm9jZXNzb3IuYXJncykgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogW10pKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jdXJyZW50UHJvZ3Jlc3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRJdGVtLnN0YXR1cyA9IENvbnRlbnRJdGVtU3RhdHVzLlByb2Nlc3NlZDtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5zdGF0dXMgPSBDb250ZW50TWFuYWdlclN0YXR1cy5SZWFkeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYSBjb250ZW50IGl0ZW0gYnkgbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IENvbnRlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmICghKG5hbWUgaW4gaW5zdGFuY2UuY29udGVudCkpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5vcHRpb25zLnRocm93T25Ob3RGb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udGVudCBpdGVtIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuY29udGVudFtuYW1lXS5jb250ZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnRNYW5hZ2VyO1xuQ29udGVudE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbG9hZGVyczogZGVmYXVsdENvbnRlbnRMb2FkZXJzLFxuICAgIHByb2Nlc3NvcnM6IGRlZmF1bHRDb250ZW50UHJvY2Vzc29ycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3gxUkVGTk1rSTdRVUZETTBJc05rUkJSVGhDTzBGQmVVVTVRaXhKUVVGWkxHVkJUVmc3UVVGT1JDeFhRVUZaTEdWQlFXVTdTVUZEZWtJc1owTkJRV0VzUTBGQlFUdEpRVU5pTEdkRFFVRmhMRU5CUVVFN1NVRkRZaXhyUTBGQlpTeERRVUZCTzBsQlEyWXNhME5CUVdVc1EwRkJRVHRKUVVObUxHZERRVUZoTEVOQlFVRTdRVUZEWml4RFFVRkRMRVZCVGxjc1pVRkJaU3hIUVVGbUxIVkNRVUZsTEV0QlFXWXNkVUpCUVdVc1VVRk5NVUk3UVVGRlJDeEpRVUZaTEc5Q1FVdFlPMEZCVEVRc1YwRkJXU3h2UWtGQmIwSTdTVUZET1VJc0swUkJRVkVzUTBGQlFUdEpRVU5TTEhGRlFVRlBMRU5CUVVFN1NVRkRVQ3d5UlVGQlZTeERRVUZCTzBsQlExWXNhVVZCUVVzc1EwRkJRVHRCUVVOUUxFTkJRVU1zUlVGTVZ5eHZRa0ZCYjBJc1IwRkJjRUlzTkVKQlFXOUNMRXRCUVhCQ0xEUkNRVUZ2UWl4UlFVc3ZRanRCUVVWRUxFbEJRVmtzYVVKQlRWZzdRVUZPUkN4WFFVRlpMR2xDUVVGcFFqdEpRVU16UWl4NVJFRkJVU3hEUVVGQk8wbEJRMUlzSzBSQlFVOHNRMEZCUVR0SlFVTlFMRFpFUVVGTkxFTkJRVUU3U1VGRFRpeHhSVUZCVlN4RFFVRkJPMGxCUTFZc2JVVkJRVk1zUTBGQlFUdEJRVU5ZTEVOQlFVTXNSVUZPVnl4cFFrRkJhVUlzUjBGQmFrSXNlVUpCUVdsQ0xFdEJRV3BDTEhsQ1FVRnBRaXhSUVUwMVFqdEJRWEZEUkN4TlFVRk5MSEZDUVVGeFFpeEhRVUZ4UWp0SlFVTTVReXhEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN3MFFrRkJWVHRKUVVOc1F5eERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3cwUWtGQlZUdEpRVU5zUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTdzJRa0ZCVnp0SlFVTndReXhEUVVGRExHVkJRV1VzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN3MlFrRkJWenRKUVVOd1F5eERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3cwUWtGQlZUdERRVU51UXl4RFFVRkRPMEZCUlVZc1RVRkJUU3gzUWtGQmQwSXNSMEZCZDBJN1NVRkRjRVFzVTBGQlV5eEZRVUZGTEhWRFFVRnJRanREUVVNNVFpeERRVUZETzBGQlJVWXNTMEZCU3l4VlFVRlZMRXRCUVVzc1EwRkJReXhGUVVGVk8wbEJRemRDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrUXNRMEZCUXp0QlFVVkVMRk5CUVZNc1MwRkJTeXhEUVVGRExFTkJRVk1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRM2hETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wTXNRMEZCUXp0QlFVVkVMRk5CUVZNc1lVRkJZU3hEUVVGRExFZEJRVmNzUlVGQlJTeEhRVUZYTzBsQlF6ZERMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU16UXl4RFFVRkRPMEZCUlVRc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlF6VkNMRTFCUVUwc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVVUxUWl4TlFVRnhRaXhqUVVGak8wbEJiMEpxUXl4WlFVRnZRaXhQUVVGM1F6czdVVUZXY0VRc2RVSkJRV3RDTEVkQlFYTkNMRVZCUVVVc1EwRkJRenRSUVVVelF5eHZRa0ZCWlN4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVMVFpeDVRa0ZCYjBJc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRmFrTXNXVUZCVHl4SFFVRm5ReXhGUVVGRkxFTkJRVU03VVVGRk1VTXNWMEZCVFN4SFFVRjVRaXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkhMMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFpeEZRVUZGTEVWQlEwWXNZMEZCWXl4RFFVRkRMR05CUVdNc1JVRkROMElzVDBGQlR5eGhRVUZRTEU5QlFVOHNZMEZCVUN4UFFVRlBMRWRCUVVrc1JVRkJSU3hGUVVOaU8xbEJRMFVzVDBGQlR5eEZRVUZGTzJkQ1FVTlFMRWRCUVVjc1kwRkJZeXhEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTzJkQ1FVTjRReXhIUVVGSExFTkJRVU1zVFVGQlFTeFBRVUZQTEdGQlFWQXNUMEZCVHl4MVFrRkJVQ3hQUVVGUExFTkJRVVVzVDBGQlR5eHRRMEZCU1N4RlFVRkZMRU5CUVVNN1lVRkROVUk3V1VGRFJDeFZRVUZWTEVWQlFVVTdaMEpCUTFZc1IwRkJSeXhEUVVGRExFMUJRVUVzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4VlFVRlZMRzFEUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZEYmtRc1IwRkJSeXhEUVVGRExFMUJRVUVzVDBGQlR5eGhRVUZRTEU5QlFVOHNkVUpCUVZBc1QwRkJUeXhEUVVGRkxGVkJRVlVzYlVOQlFVa3NSVUZCUlN4RFFVRkRPMkZCUXk5Q08xTkJRMFlzUTBGRFJpeERRVUZETzBsQlEwb3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRjNRenRSUVVNdlJDeEpRVUZKTEdOQlFXTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRM3BETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTjRSRHRSUVVWRUxHTkJRV01zUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4alFVRmpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGVFUXNRMEZCUXp0SlFVVk5MRTFCUVUwc1EwRkJReXhQUVVGUE8xRkJRMjVDTEVsQlFVa3NZMEZCWXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVrTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUTNCRU8xRkJSVVFzVDBGQlR5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlR5eE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTjRRaXhKUVVGSkxHTkJRV01zUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTNwRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU0zUkR0UlFVVkVMRTlCUVU4c1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEV0QlFVc3NVVUZCVVR0UlFVTjRRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZPVU1zVDBGQlR5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hMUVVGTExFMUJRVTA3VVVGRGRFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJZeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUbERMRTlCUVU4c1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlU4c1YwRkJWenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNSRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlExWTdVVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVhsQ096dFJRVU5vUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTJoRExFOUJRVTg3VTBGRFVqdFJRVVZFTEUxQlFVMHNVVUZCVVN4SFFVRkhMR05CUVdNc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVVU1UXl4SlFVTkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTzFsQlEzcENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVU5zUkR0WlFVTkJMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zTkVKQlFUUkNMRU5CUVVNc1EwRkJRenRUUVVNdlF6dFJRVVZFTEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGY0VNc09FTkJRVGhETzFGQlF6bERMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOMFF5eE5RVUZOTEcxQ1FVRnRRaXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlEzUkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZkQlFVTXNUMEZCUVN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGQkxFTkJRVU1zUTBGQlF5eFZRVUZWTEcxRFFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlFTeEZRVUZCTEVWQlEzcERMRU5CUVVNc1EwRkRSaXhEUVVGRE8xRkJSVVlzVVVGQlVTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROMElzVVVGQlVTeERRVUZETEc5Q1FVRnZRaXhIUVVGSExHZENRVUZuUWl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFGQlJYWkZMR0ZCUVdFN1VVRkRZaXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEc5Q1FVRnZRaXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU12UXl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzUlVGQlJUdFpRVU40UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlF6VkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZFVOQlFYVkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzUkZPMWxCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhGUVVGRk8yZENRVU40UXl4TlFVRk5MRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRM1pDTEUxQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNiVU5CUVVrc1kwRkJZeXhGUVVOeVJDeE5RVUZCTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEcxRFFVRkpMR05CUVdNc1EwRkRkRVFzUTBGQlF5eERRVUZETzJGQlEwbzdXVUZGUkN4TlFVRk5MRmRCUVZjc1IwRkJSenRuUWtGRGJFSXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSk8yZENRVU5tTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTVHRuUWtGRFppeFBRVUZQTEVWQlFVVXNTVUZCU1R0blFrRkRZaXhOUVVGTkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1QwRkJUenRoUVVOc1F5eERRVUZETzFsQlEwWXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUXpGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVkQlFVY3NUVUZCVFN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUXpkRUxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZEWWl4RFFVRkRPMWxCUlVZc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRE9VTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlJVUXNaMEpCUVdkQ08xRkJRMmhDTEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNWVUZCVlN4RFFVRkRPMUZCUTJ4RUxFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUTNoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRjRVFzVTBGQlV6dGhRVU5XTzFsQlJVUXNTVUZEUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZUdG5Ra0ZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlEzSkVPMmRDUVVOQkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU1zUTBGQlF6dGhRVU5zUkR0WlFVVkVMRTFCUVUwc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJSV2hFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRMmhDTEcxRlFVRnRSVHRuUWtGRGJrVXNjVVZCUVhGRk8yZENRVU55UlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVOaUxDdENRVUVyUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRelZETEVOQlFVTTdZVUZEU0R0WlFVVkVMRWxCUVVrc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSVHRuUWtGRE0wTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVOMlFpeE5RVUZCTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEcxRFFVRkpMR05CUVdNc1JVRkRlRVFzVFVGQlFTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMSEZDUVVGeFFpeHRRMEZCU1N4alFVRmpMRU5CUTNwRUxFTkJRVU1zUTBGQlF6dGhRVU5LTzFsQlJVUXNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkZiRVFzUzBGQlN5eE5RVUZOTEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8yZENRVU4yUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3YjBKQlEzQkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzTWtOQlFUSkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGRE4wUXNRMEZCUXp0cFFrRkRTRHRuUWtGRlJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZETDBNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGRGFFSXNWMEZCVnl4RlFVTllMRWRCUVVjc1EwRkJReXhOUVVGQkxGTkJRVk1zUTBGQlF5eEpRVUZKTEcxRFFVRkpMRVZCUVVVc1EwRkJReXhEUVVNeFFpeERRVUZETzJkQ1FVVkdMRkZCUVZFc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF6dGhRVU0xUWp0WlFVVkVMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRMnhFTzFGQlJVUXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlNTeEpRVUZaTzFGQlF5OUNMRTFCUVUwc1VVRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTVReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJReTlDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFVkJRVVU3WjBKQlEzQkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYVVKQlFXbENMRWxCUVVrc1lVRkJZU3hEUVVGRExFTkJRVU03WVVGRGNrUTdXVUZEUkN4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOc1FqdFJRVVZFTEU5QlFVOHNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZaTEVOQlFVTTdTVUZETjBNc1EwRkJRenM3UVVFM1RrZ3NhVU5CT0U1RE8wRkJNMDU1UWl3MlFrRkJZeXhIUVVFd1FqdEpRVU01UkN4UFFVRlBMRVZCUVVVc2NVSkJRWEZDTzBsQlF6bENMRlZCUVZVc1JVRkJSU3gzUWtGQmQwSTdRMEZEY2tNc1EwRkJReUo5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=