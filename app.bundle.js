(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"body {\n    margin: 0;\n    min-height: 100vh;\n}\n\n.main-container {\n    border: solid black;\n    display: grid;\n   grid-template-columns: 1fr repeat(2,3fr);\n    /* grid-template-rows: repeat(3,1fr); */\n    grid-template-rows: auto 1fr auto; \n    height: 100vh;\n   column-gap: 25px;\n}\n\n.header {\n    background-color: black;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    grid-column: 1/4;\n    height: 80%;\n}\n\n#content {\n    /* height: 650px;\n    width: 650px; */\n    background-color: red;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 450px);\n    \n}\n\n.list-card {\n    height: 50px;\n    border: solid black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.list-title {\n    display: flex;\n    border: solid black;\n}\n\n.list-card h1 {\n    font-size: 25px;\n}\n\n.list-details {\n    display: flex;\n    border: solid;\n}\n\n\n.side-bar {\n    border: solid yellow;\n    background-color: yellow;\n    width: 200px;\n    grid-column: 1;\n    grid-row: 2/5;\n    font-size: 2rem;\n}\n\n.add-btn {\n    background-color: black;\n    color:  whitesmoke;\n}\n\ndialog {\n    border: solid black;\n    height: 250px;\n    width: 250px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n.selected {\n    border: solid black;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa;GACd,wCAAwC;IACvC,uCAAuC;IACvC,iCAAiC;IACjC,aAAa;GACd,gBAAgB;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI;mBACe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,8CAA8C;;AAElD;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;;AAGA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:["body {\n    margin: 0;\n    min-height: 100vh;\n}\n\n.main-container {\n    border: solid black;\n    display: grid;\n   grid-template-columns: 1fr repeat(2,3fr);\n    /* grid-template-rows: repeat(3,1fr); */\n    grid-template-rows: auto 1fr auto; \n    height: 100vh;\n   column-gap: 25px;\n}\n\n.header {\n    background-color: black;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    grid-column: 1/4;\n    height: 80%;\n}\n\n#content {\n    /* height: 650px;\n    width: 650px; */\n    background-color: red;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 450px);\n    \n}\n\n.list-card {\n    height: 50px;\n    border: solid black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.list-title {\n    display: flex;\n    border: solid black;\n}\n\n.list-card h1 {\n    font-size: 25px;\n}\n\n.list-details {\n    display: flex;\n    border: solid;\n}\n\n\n.side-bar {\n    border: solid yellow;\n    background-color: yellow;\n    width: 200px;\n    grid-column: 1;\n    grid-row: 2/5;\n    font-size: 2rem;\n}\n\n.add-btn {\n    background-color: black;\n    color:  whitesmoke;\n}\n\ndialog {\n    border: solid black;\n    height: 250px;\n    width: 250px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n.selected {\n    border: solid black;\n}"],sourceRoot:""}]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=function(){const t=document.createElement("div");t.classList.add("main-container"),document.querySelector("body").appendChild(t);const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.textContent="My Todo List",e.appendChild(n),t.appendChild(e);const r=document.getElementById("content");t.appendChild(r);const a=document.createElement("div");a.classList.add("side-bar");const o=document.createElement("p");o.textContent="My Projects";const i=document.createElement("button");return i.textContent="Add",i.classList.add("add-btn"),a.appendChild(i),a.appendChild(o),t.appendChild(a),{content:r,addButton:i}}();function e(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function r(t){if(!(n=t,n instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n)||"number"==typeof t))return!1;var n;const r=e(t);return!isNaN(Number(r))}const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const u={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function d(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const l={ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(h.matchPattern);if(!n)return null;const r=n[0],a=t.match(h.parsePattern);if(!a)return null;let o=h.valueCallback?h.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var h;const m={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=a[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:(t,e,n,r)=>s[t],localize:u,match:l,options:{weekStartsOn:0,firstWeekContainsDate:1}};let f={};function g(){return f}Math.pow(10,8);const p=6048e5,b=864e5;function w(t){const n=e(t);return n.setHours(0,0,0,0),n}function A(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function v(t){const n=e(t);return function(t,e){const n=w(t),r=w(e),a=n.getTime()-A(n),o=r.getTime()-A(r);return Math.round((a-o)/b)}(n,function(t){const n=e(t),r=y(t,0);return r.setFullYear(n.getFullYear(),0,1),r.setHours(0,0,0,0),r}(n))+1}function C(t,n){const r=g(),a=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,o=e(t),i=o.getDay(),s=(i<a?7:0)+i-a;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function x(t){return C(t,{weekStartsOn:1})}function k(t){const n=e(t),r=n.getFullYear(),a=y(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=x(a),i=y(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=x(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function M(t){const n=e(t),r=x(n).getTime()-function(t){const e=k(t),n=y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),x(n)}(n).getTime();return Math.round(r/p)+1}function B(t,n){const r=e(t),a=r.getFullYear(),o=g(),i=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=y(t,0);s.setFullYear(a+1,0,i),s.setHours(0,0,0,0);const c=C(s,n),u=y(t,0);u.setFullYear(a,0,i),u.setHours(0,0,0,0);const d=C(u,n);return r.getTime()>=c.getTime()?a+1:r.getTime()>=d.getTime()?a:a-1}function I(t,n){const r=e(t),a=C(r,n).getTime()-function(t,e){const n=g(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=B(t,e),o=y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),C(o,e)}(r,n).getTime();return Math.round(a/p)+1}function D(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const S={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):D(n+1,2)},d:(t,e)=>D(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>D(t.getHours()%12||12,e.length),H:(t,e)=>D(t.getHours(),e.length),m:(t,e)=>D(t.getMinutes(),e.length),s:(t,e)=>D(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)}},E={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return S.y(t,e)},Y:function(t,e,n,r){const a=B(t,r),o=a>0?a:1-a;return"YY"===e?D(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):D(o,e.length)},R:function(t,e){return D(k(t),e.length)},u:function(t,e){return D(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return S.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=I(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},I:function(t,e,n){const r=M(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):D(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):S.d(t,e)},D:function(t,e,n){const r=v(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return D(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return D(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return S.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):S.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):S.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):S.s(t,e)},S:function(t,e){return S.S(t,e)},X:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){const a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};function P(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+D(o,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):Y(t,e)}function Y(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+D(Math.floor(r/60),2)+e+D(r%60,2)}const W=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},L=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},j={p:L,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return W(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",W(r,e)).replace("{{time}}",L(a,e))}},O=["D","DD"],q=["YY","YYYY"];function N(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const F=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,H=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,G=/''/g,Q=/[a-zA-Z]/;const{addButton:X}=t;!function(){const t=document.querySelector("dialog"),n=document.querySelector(".close-btn"),a=document.querySelector(".submit-btn"),o=document.getElementById("title"),i=document.getElementById("description"),s=document.getElementById("items"),c=document.getElementById("due-date"),u=document.getElementById("low"),d=document.getElementById("high");let l;X.addEventListener("click",(e=>{t.showModal()})),n.addEventListener("click",(e=>{e.preventDefault(),t.close()})),u.addEventListener("click",(t=>{t.preventDefault(),d.classList.contains("selected")?(d.classList.remove("selected"),d.style.backgroundColor="",u.classList.add("selected"),u.style.backgroundColor="green",l="low"):(u.classList.add("selected"),u.style.backgroundColor="green",l="low")})),d.addEventListener("click",(t=>{t.preventDefault(),u.classList.contains("selected")?(u.classList.remove("selected"),u.style.backgroundColor="",d.classList.add("selected"),d.style.backgroundColor="red",l="high"):(d.classList.add("selected"),d.style.backgroundColor="red",l="high")})),a.addEventListener("click",(n=>{n.preventDefault();const a=c.value,h=function(t,n,a){const o=g(),i=a?.locale??o.locale??m,s=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,c=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,u=e(t);if(!r(u))throw new RangeError("Invalid time value");const d={firstWeekContainsDate:s,weekStartsOn:c,locale:i,_originalDate:u};return n.match(H).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,j[e])(t,i.formatLong):t})).join("").match(F).map((function(e){if("''"===e)return"'";const r=e[0];if("'"===r)return function(t){const e=t.match(z);return e?e[1].replace(G,"'"):t}(e);const o=E[r];if(o)return a?.useAdditionalWeekYearTokens||(s=e,-1===q.indexOf(s))||N(e,n,String(t)),!a?.useAdditionalDayOfYearTokens&&function(t){return-1!==O.indexOf(t)}(e)&&N(e,n,String(t)),o(u,e,i.localize,d);var s;if(r.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("")}(new Date(a.replace(/-/g,"/")),"MM/dd/yyyy"),f=new R(o.value,i.value,s.value,h,l);console.log(f),console.log(l),function(t){const e=document.createElement("div");e.classList.add("list-card"),content.appendChild(e);const n=document.createElement("div"),r=document.createElement("h1");r.textContent=t.title,n.appendChild(r),r.classList.add("list-title"),e.appendChild(n);const a=document.createElement("p");a.textContent=t.dueDate,a.classList.add("list-details"),e.appendChild(a)}(f),o.value="",i.value="",s.value="",c.value="",l="",d.classList.remove("selected"),d.style.backgroundColor="",u.classList.remove("selected"),u.style.backgroundColor="",t.close()}))}();class R{constructor(t,e,n,r,a){this.title=t,this.description=e,this.items=n,this.dueDate=r,this.priority=a}get listTitle(){return this.title}}var U=n(379),J=n.n(U),$=n(795),Z=n.n($),_=n(569),V=n.n(_),K=n(565),tt=n.n(K),et=n(216),nt=n.n(et),rt=n(589),at=n.n(rt),ot=n(426),it={};it.styleTagTransform=at(),it.setAttributes=tt(),it.insert=V().bind(null,"head"),it.domAPI=Z(),it.insertStyleElement=nt(),J()(ot.Z,it),ot.Z&&ot.Z.locals&&ot.Z.locals,new R("Gym","My list for the gym",["body","temp","gainz","motivation"],"2/14","Urgent"),new R("Groceries","List for groceries",["bread","meats","sushi"],"12/25","Not urgent");const{content:st}=t})()})();
//# sourceMappingURL=app.bundle.js.map