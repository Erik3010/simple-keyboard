/*!
 * 
 *   simple-keyboard v2.5.5
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.SimpleKeyboard=e():t.SimpleKeyboard=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.default=o.a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(3),a=(n.n(i),n(4)),s=n(5),r=n(6),u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function t(){var e=this;o(this,t),this.handleButtonClicked=function(t){var n=e.options.debug;if("{//}"===t)return!1;"function"===typeof e.options.onKeyPress&&e.options.onKeyPress(t),e.input[e.options.inputName]||(e.input[e.options.inputName]="");var o=e.utilities.getUpdatedInput(t,e.input[e.options.inputName],e.options,e.caretPosition);if(e.input[e.options.inputName]!==o){if(e.options.maxLength&&e.utilities.handleMaxLength(e.input,e.options,o))return!1;e.input[e.options.inputName]=o,n&&console.log("Input changed:",e.input),e.options.syncInstanceInputs&&e.syncInstanceInputs(e.input),"function"===typeof e.options.onChange&&e.options.onChange(e.input[e.options.inputName])}n&&console.log("Key pressed:",t)},this.syncInstanceInputs=function(){e.dispatch(function(t){t.replaceInput(e.input)})},this.clearInput=function(t){t=t||e.options.inputName,e.input[e.options.inputName]="",e.options.syncInstanceInputs&&e.syncInstanceInputs(e.input)},this.getInput=function(t){return t=t||e.options.inputName,e.options.syncInstanceInputs&&e.syncInstanceInputs(e.input),e.input[e.options.inputName]},this.setInput=function(t,n){n=n||e.options.inputName,e.input[n]=t,e.options.syncInstanceInputs&&e.syncInstanceInputs(e.input)},this.replaceInput=function(t){e.input=t},this.setOptions=function(t){t=t||{},e.options=Object.assign(e.options,t),e.render()},this.clear=function(){e.keyboardDOM.innerHTML="",e.keyboardDOM.className=e.keyboardDOMClass,e.buttonElements={}},this.dispatch=function(t){return window.SimpleKeyboardInstances?Object.keys(window.SimpleKeyboardInstances).forEach(function(e){t(window.SimpleKeyboardInstances[e],e)}):(console.error("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),!1)},this.addButtonTheme=function(t,n){if(!n||!t)return!1;t.split(" ").forEach(function(o){n.split(" ").forEach(function(n){e.options.buttonTheme||(e.options.buttonTheme=[]);var i=!1;e.options.buttonTheme.map(function(t){if(t.class.split(" ").includes(n)){i=!0;var e=t.buttons.split(" ");e.includes(o)||(i=!0,e.push(o),t.buttons=e.join(" "))}return t}),i||e.options.buttonTheme.push({class:n,buttons:t})})}),e.render()},this.removeButtonTheme=function(t,n){if(!t&&!n)return e.options.buttonTheme=[],e.render(),!1;if(t&&Array.isArray(e.options.buttonTheme)&&e.options.buttonTheme.length){var o=t.split(" ");o.forEach(function(t,i){e.options.buttonTheme.map(function(i,a){if(n&&n.includes(i.class)||!n){var s=void 0;o.includes(t)&&(s=i.buttons.split(" ").filter(function(e){return e!==t})),s.length?i.buttons=s.join(" "):(e.options.buttonTheme.splice(a,1),i=null)}return i})}),e.render()}},this.getButtonElement=function(t){var n=void 0,o=e.buttonElements[t];return o&&(n=o.length>1?o:o[0]),n},this.handleCaret=function(){e.options.debug&&console.log("Caret handling started");var t=function(t){var n=t.target.tagName.toLowerCase();"textarea"!==n&&"input"!==n||(e.caretPosition=t.target.selectionStart,e.options.debug&&console.log("Caret at: ",t.target.selectionStart,t.target.tagName.toLowerCase()))};document.addEventListener("keyup",t),document.addEventListener("mouseup",t),document.addEventListener("touchend",t)},this.onInit=function(){e.options.debug&&console.log("Initialized"),e.handleCaret(),"function"===typeof e.options.onInit&&e.options.onInit()},this.onRender=function(){"function"===typeof e.options.onRender&&e.options.onRender()},this.render=function(){e.clear();var t=e.options.layout?"hg-layout-custom":"hg-layout-"+e.options.layoutName,n=e.options.layout||s.a.getLayout(e.options.layoutName),o={};Array.isArray(e.options.buttonTheme)&&e.options.buttonTheme.forEach(function(t){if(t.buttons&&t.class){var e=t.buttons.split(" ");Array.isArray(e)&&e.forEach(function(e){var n=o[e];o[e]=n?n+" "+t.class:t.class})}else console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.')}),e.keyboardDOM.className+=" "+e.options.theme+" "+t,n[e.options.layoutName].forEach(function(t,n){var i=t.split(" "),a=document.createElement("div");a.className+="hg-row",i.forEach(function(t,i){var s=e.utilities.getButtonClass(t),r=o[t],u=e.utilities.getButtonDisplayName(t,e.options.display,e.options.mergeDisplay),c=document.createElement("div");c.className+="hg-button "+s+(r?" "+r:""),c.onclick=function(){return e.handleButtonClicked(t)},c.setAttribute("data-skBtn",t);var p=e.options.layoutName+"-r"+n+"b"+i;c.setAttribute("data-skBtnUID",p);var l=document.createElement("span");l.innerHTML=u,c.appendChild(l),e.buttonElements[t]||(e.buttonElements[t]=[]),e.buttonElements[t].push(c),a.appendChild(c)}),e.keyboardDOM.appendChild(a)}),e.onRender(),e.initialized||(e.initialized=!0,e.onInit())};var n="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",i="object"===u(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];i||(i={}),this.utilities=new r.a(this),this.keyboardDOM=document.querySelector(n),this.options=i,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=n.split(".").join(""),this.timers={},this.buttonElements={},this.keyboardDOM?this.render():console.error('"'+n+'" was not found in the DOM.'),window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)]=this,this.physicalKeyboardInterface=new a.a(this)};e.a=c},function(t,e){},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function t(e){var n=this;if(o(this,t),this.initKeyboardListener=function(){document.addEventListener("keydown",function(t){if(n.simpleKeyboardInstance.options.physicalKeyboardHighlight){var e=n.getSimpleKeyboardLayoutKey(t);n.simpleKeyboardInstance.dispatch(function(t){var o=t.getButtonElement(e)||t.getButtonElement("{"+e+"}");o&&(o.style.backgroundColor=n.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor||"#9ab4d0",o.style.color=n.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor||"white")})}}),document.addEventListener("keyup",function(t){if(n.simpleKeyboardInstance.options.physicalKeyboardHighlight){var e=n.getSimpleKeyboardLayoutKey(t);n.simpleKeyboardInstance.dispatch(function(t){var n=t.getButtonElement(e)||t.getButtonElement("{"+e+"}");n&&n.removeAttribute("style")})}})},this.getSimpleKeyboardLayoutKey=function(t){n.simpleKeyboardInstance.options.debug&&console.log(t);var e=void 0;return e=t.code.includes("Numpad")||t.code.includes("Shift")||t.code.includes("Space")||t.code.includes("Backspace")?t.code:t.key,(e!==e.toUpperCase()||"F"===t.code[0]&&Number.isInteger(Number(t.code[1]))&&t.code.length<=3)&&(e=e.toLowerCase()),e},this.simpleKeyboardInstance=e,window.SimpleKeyboardPhysicalKeyboardInit)return!1;window.SimpleKeyboardPhysicalKeyboardInit=!0,this.initKeyboardListener()};e.a=i},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function t(){o(this,t)};i.getLayout=function(t){return"qwerty"===t?{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}:"numeric"===t?{default:["1 2 3","4 5 6","7 8 9","{//} 0 {bksp}"]}:i.getLayout("qwerty")},e.a=i},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function(){function t(e){var n=this;o(this,t),this.getButtonClass=function(t){var e=t.includes("{")&&"{//}"!==t?"functionBtn":"standardBtn",o=t.replace("{","").replace("}","");return"hg-"+e+("standardBtn"===e?n.normalizeString(o):" hg-button-"+o)},this.getButtonDisplayName=function(t,e,o){return e=o?Object.assign({},n.getDefaultDiplay(),e):e||n.getDefaultDiplay(),e[t]||t},this.getUpdatedInput=function(t,e,o,i){var a=e;return("{bksp}"===t||"{backspace}"===t)&&a.length>0?a=n.removeAt(a,i):"{space}"===t?a=n.addStringAt(a," ",i):"{tab}"!==t||"boolean"===typeof o.tabCharOnTab&&!1===o.tabCharOnTab?"{enter}"!==t&&"{numpadenter}"!==t||!o.newLineOnEnter?t.includes("numpad")&&Number.isInteger(Number(t[t.length-2]))?a=n.addStringAt(a,t[t.length-2],i):"{numpaddivide}"===t?a=n.addStringAt(a,"/",i):"{numpadmultiply}"===t?a=n.addStringAt(a,"*",i):"{numpadsubtract}"===t?a=n.addStringAt(a,"-",i):"{numpadadd}"===t?a=n.addStringAt(a,"+",i):"{numpadadd}"===t?a=n.addStringAt(a,"+",i):"{numpaddecimal}"===t?a=n.addStringAt(a,".",i):t.includes("{")||t.includes("}")||(a=n.addStringAt(a,t,i)):a=n.addStringAt(a,"\n",i):a=n.addStringAt(a,"\t",i),a},this.updateCaretPos=function(t,e){e?n.simpleKeyboardInstance.caretPosition>0&&(n.simpleKeyboardInstance.caretPosition=n.simpleKeyboardInstance.caretPosition-t):n.simpleKeyboardInstance.caretPosition=n.simpleKeyboardInstance.caretPosition+t},this.isMaxLengthReached=function(){return Boolean(n.maxLengthReached)},this.camelCase=function(t){return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t,e){return t+e[0].toUpperCase()+e.slice(1)})},this.simpleKeyboardInstance=e}return a(t,[{key:"normalizeString",value:function(t){var e=void 0;return e="@"===t?"at":","===t?"comma":"."===t?"dot":"\\"===t?"backslash":"/"===t?"fordardslash":"*"===t?"asterisk":"&"===t?"ampersand":"$"===t?"dollarsign":"="===t?"equals":"+"===t?"plus":"-"===t?"minus":"'"===t?"apostrophe":";"===t?"colon":"["===t?"openbracket":"]"===t?"closebracket":"//"===t?"emptybutton":".com"===t?"com":"",e?" hg-button-"+e:""}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"\u2191","{arrowleft}":"\u2190","{arrowdown}":"\u2193","{arrowright}":"\u2192","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"addStringAt",value:function(t,e,n){var o=void 0;return this.simpleKeyboardInstance.options.debug&&console.log("Caret at:",n),n||0===n?(o=[t.slice(0,n),e,t.slice(n)].join(""),this.isMaxLengthReached()||this.updateCaretPos(e.length)):o=t+e,o}},{key:"removeAt",value:function(t,e){var n=void 0,o=void 0,i=void 0,a=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return e&&e>=0?(o=t.substring(e-2,e),i=o.match(a),i?(n=t.substr(0,e-2)+t.substr(e),this.updateCaretPos(2,!0)):(n=t.substr(0,e-1)+t.substr(e),this.updateCaretPos(1,!0))):(o=t.slice(-2),i=o.match(a),i?(n=t.slice(0,-2),this.updateCaretPos(2,!0)):(n=t.slice(0,-1),this.updateCaretPos(1,!0))),n}},{key:"handleMaxLength",value:function(t,e,n){var o=e.maxLength,a=t[e.inputName],s=a.length===o;if(n.length<=a.length)return!1;if(Number.isInteger(o))return e.debug&&console.log("maxLength (num) reached:",s),s?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===("undefined"===typeof o?"undefined":i(o))){var r=a.length===o[e.inputName];return e.debug&&console.log("maxLength (obj) reached:",r),r?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}}]),t}();e.a=s}])});
//# sourceMappingURL=index.js.map