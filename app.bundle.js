(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"body {\n    margin: 0;\n    min-height: 100vh;\n}\n\n.main-container {\n    border: solid black;\n    display: grid;\n   grid-template-columns: 1fr repeat(2,3fr);\n    /* grid-template-rows: repeat(3,1fr); */\n    grid-template-rows: auto 1fr auto; \n    height: 100vh;\n   column-gap: 25px;\n}\n\n.header {\n    background-color: black;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    grid-column: 1/4;\n    height: 80%;\n}\n\n#content {\n    /* height: 650px;\n    width: 650px; */\n    background-color: red;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 750px);\n    \n}\n\n.list-card {\n    height: 50px;\n    border: solid black;\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n\n.right-side-container, .left-side-container{\n    display: flex;\n    border: solid black;\n    width: 30%;\n    justify-content: space-between;\n}\n\n.delete-btn, .edit-btn{\n    width: 50px;\n    border-radius: 12px;\n}\n\n.list-title {\n    display: flex;\n    border: solid black;\n}\n\n.list-card h1 {\n    font-size: 25px;\n}\n\n.list-details {\n    display: flex;\n    border: solid;\n}\n\n\n.side-bar {\n    border: solid yellow;\n    background-color: yellow;\n    width: 200px;\n    grid-column: 1;\n    grid-row: 2/5;\n    font-size: 2rem;\n}\n\n.add-btn {\n    background-color: black;\n    color:  whitesmoke;\n}\n\ndialog {\n    border: solid black;\n    height: 250px;\n    width: 250px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n.selected {\n    border: solid black;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa;GACd,wCAAwC;IACvC,uCAAuC;IACvC,iCAAiC;IACjC,aAAa;GACd,gBAAgB;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI;mBACe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,8CAA8C;;AAElD;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;;;;AAKA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;;AAGA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:["body {\n    margin: 0;\n    min-height: 100vh;\n}\n\n.main-container {\n    border: solid black;\n    display: grid;\n   grid-template-columns: 1fr repeat(2,3fr);\n    /* grid-template-rows: repeat(3,1fr); */\n    grid-template-rows: auto 1fr auto; \n    height: 100vh;\n   column-gap: 25px;\n}\n\n.header {\n    background-color: black;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    grid-column: 1/4;\n    height: 80%;\n}\n\n#content {\n    /* height: 650px;\n    width: 650px; */\n    background-color: red;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 750px);\n    \n}\n\n.list-card {\n    height: 50px;\n    border: solid black;\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n\n.right-side-container, .left-side-container{\n    display: flex;\n    border: solid black;\n    width: 30%;\n    justify-content: space-between;\n}\n\n.delete-btn, .edit-btn{\n    width: 50px;\n    border-radius: 12px;\n}\n\n.list-title {\n    display: flex;\n    border: solid black;\n}\n\n.list-card h1 {\n    font-size: 25px;\n}\n\n.list-details {\n    display: flex;\n    border: solid;\n}\n\n\n.side-bar {\n    border: solid yellow;\n    background-color: yellow;\n    width: 200px;\n    grid-column: 1;\n    grid-row: 2/5;\n    font-size: 2rem;\n}\n\n.add-btn {\n    background-color: black;\n    color:  whitesmoke;\n}\n\ndialog {\n    border: solid black;\n    height: 250px;\n    width: 250px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n.selected {\n    border: solid black;\n}"],sourceRoot:""}]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),u=n.n(d),l=n(589),h=n.n(l),m=n(426),f={};function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function p(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=g(t);return!isNaN(Number(n))}f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const w={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const C={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}const k={ordinalNumber:(M={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(M.matchPattern);if(!n)return null;const r=n[0],a=t.match(M.parsePattern);if(!a)return null;let o=M.valueCallback?M.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var M;const B={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=b[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:(t,e,n,r)=>y[t],localize:C,match:k,options:{weekStartsOn:0,firstWeekContainsDate:1}};let I={};function E(){return I}Math.pow(10,8);const D=6048e5,S=864e5;function P(t){const e=g(t);return e.setHours(0,0,0,0),e}function T(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function Y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function W(t){const e=g(t);return function(t,e){const n=P(t),r=P(e),a=n.getTime()-T(n),o=r.getTime()-T(r);return Math.round((a-o)/S)}(e,function(t){const e=g(t),n=Y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function L(t,e){const n=E(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=g(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function j(t){return L(t,{weekStartsOn:1})}function O(t){const e=g(t),n=e.getFullYear(),r=Y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=j(r),o=Y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=j(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function q(t){const e=g(t),n=j(e).getTime()-function(t){const e=O(t),n=Y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),j(n)}(e).getTime();return Math.round(n/D)+1}function N(t,e){const n=g(t),r=n.getFullYear(),a=E(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Y(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=L(i,e),c=Y(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=L(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function F(t,e){const n=g(t),r=L(n,e).getTime()-function(t,e){const n=E(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=N(t,e),o=Y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),L(o,e)}(n,e).getTime();return Math.round(r/D)+1}function H(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const z={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return H("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):H(n+1,2)},d:(t,e)=>H(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>H(t.getHours()%12||12,e.length),H:(t,e)=>H(t.getHours(),e.length),m:(t,e)=>H(t.getMinutes(),e.length),s:(t,e)=>H(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return H(Math.floor(r*Math.pow(10,n-3)),e.length)}},G={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return z.y(t,e)},Y:function(t,e,n,r){const a=N(t,r),o=a>0?a:1-a;return"YY"===e?H(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):H(o,e.length)},R:function(t,e){return H(O(t),e.length)},u:function(t,e){return H(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return H(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return H(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return z.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return H(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=F(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):H(a,e.length)},I:function(t,e,n){const r=q(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):H(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):z.d(t,e)},D:function(t,e,n){const r=W(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):H(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return H(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return H(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return H(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return z.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):z.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):z.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):z.s(t,e)},S:function(t,e){return z.S(t,e)},X:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return U(a);default:return U(a,":")}},x:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return U(a);default:return U(a,":")}},O:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");default:return"GMT"+U(a,":")}},z:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");default:return"GMT"+U(a,":")}},t:function(t,e,n,r){const a=r._originalDate||t;return H(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return H((r._originalDate||t).getTime(),e.length)}};function Q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+H(o,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+H(Math.abs(t)/60,2):U(t,e)}function U(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+H(Math.floor(r/60),2)+e+H(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},$={p:J,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return R(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",R(r,e)).replace("{{time}}",J(a,e))}},Z=["D","DD"],_=["YY","YYYY"];function V(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;const at=[];class ot{constructor(t,e,n,r,a){this.title=t,this.description=e,this.items=n,this.dueDate=r,this.priority=a}get listTitle(){return this.title}}const it=function(){const t=document.createElement("div");t.classList.add("main-container"),document.querySelector("body").appendChild(t);const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.textContent="My Todo List",e.appendChild(n),t.appendChild(e);const r=document.getElementById("content");t.appendChild(r);const a=document.createElement("div");a.classList.add("side-bar");const o=document.createElement("p");o.textContent="My Projects";const i=document.createElement("button");return i.textContent="Add",i.classList.add("add-btn"),a.appendChild(i),a.appendChild(o),t.appendChild(a),{content:r,addButton:i}}(),st=(function(){const t=document.querySelector("dialog"),e=document.querySelector(".close-btn"),n=document.querySelector(".submit-btn"),r=document.getElementById("title"),a=document.getElementById("description"),o=document.getElementById("items"),i=document.getElementById("due-date"),s=document.getElementById("low"),c=document.getElementById("high");let d;const{addButton:u}=it;u.addEventListener("click",(e=>{t.showModal()})),e.addEventListener("click",(e=>{e.preventDefault(),t.close()})),s.addEventListener("click",(t=>{t.preventDefault(),c.classList.contains("selected")?(c.classList.remove("selected"),c.style.backgroundColor="",s.classList.add("selected"),s.style.backgroundColor="green",d="low"):(s.classList.add("selected"),s.style.backgroundColor="green",d="low")})),c.addEventListener("click",(t=>{t.preventDefault(),s.classList.contains("selected")?(s.classList.remove("selected"),s.style.backgroundColor="",c.classList.add("selected"),c.style.backgroundColor="red",d="high"):(c.classList.add("selected"),c.style.backgroundColor="red",d="high")})),n.addEventListener("click",(e=>{e.preventDefault();const n=i.value,u=function(t,e,n){const r=E(),a=n?.locale??r.locale??B,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=g(t);if(!p(s))throw new RangeError("Invalid time value");const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a,_originalDate:s};return e.match(tt).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,$[e])(t,a.formatLong):t})).join("").match(K).map((function(r){if("''"===r)return"'";const o=r[0];if("'"===o)return function(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}(r);const i=G[o];if(i)return n?.useAdditionalWeekYearTokens||(d=r,-1===_.indexOf(d))||V(r,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return-1!==Z.indexOf(t)}(r)&&V(r,e,String(t)),i(s,r,a.localize,c);var d;if(o.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}(new Date(n.replace(/-/g,"/")),"MM/dd/yyyy"),l=new ot(r.value,a.value,o.value,u,d);!function(t){at.push(t)}(l),st(l),r.value="",a.value="",o.value="",i.value="",d="",c.classList.remove("selected"),c.style.backgroundColor="",s.classList.remove("selected"),s.style.backgroundColor="",t.close()}))}(),function(t){const e=document.createElement("div");e.classList.add("list-card"),content.appendChild(e);const n=document.createElement("div");n.classList.add("left-side-container");const r=document.createElement("h1");r.textContent=t.title,r.classList.add("list-title"),n.appendChild(r),e.appendChild(n);const a=document.createElement("div");a.classList.add("right-side-container");const o=document.createElement("p");o.textContent=t.dueDate,o.classList.add("list-details"),a.appendChild(o),e.appendChild(a);const i=document.createElement("button");i.classList.add("edit-btn"),i.textContent="Edit",a.appendChild(i),i.addEventListener("click",(t=>{}));const s=document.createElement("button");s.textContent="Delete",s.classList.add("delete-btn");const c=at.length-1;s.setAttribute("data-index",c),a.appendChild(s),s.addEventListener("click",(()=>{!function(t){const e=document.querySelectorAll(".list-card"),n=parseInt(t.getAttribute("data-index"));e[n].remove(),at.splice(n,1)}(s),document.querySelectorAll(".delete-btn").forEach(((t,e)=>{t.setAttribute("data-index",e)}))}))})})()})();
//# sourceMappingURL=app.bundle.js.map