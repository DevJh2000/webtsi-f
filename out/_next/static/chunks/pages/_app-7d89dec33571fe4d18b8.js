(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3349:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},6610:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5991:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7608:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},5255:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},6089:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return i}});var o=n(3349);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?(0,o.Z)(e):t}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),u=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||u()}},7544:function(e,t,n){e.exports=n(3857)},8589:function(e,t){"use strict";t.Z={listData:"[list] set",listDataBanner:"[listBanner] set",loading:"[load] loading",endLoading:"[endLoad] endLoading",error:"[err] error"}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,u=void 0!==i&&i;return n||o&&u}},2775:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(i=n(3244))&&i.__esModule?i:{default:i},c=n(3398),s=n(1165),f=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,s=y.length;c<s;c++){var f=y[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(l)?(p.add(l),r[f]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(s.HeadManagerContext);return u.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),u=(n(1506),n(2205)),a=n(8585),c=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){u(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},3857:function(e,t,n){"use strict";var r=n(7757),o=n(4575),i=n(3913),u=n(2205),a=n(8585),c=n(9754),s=n(8926);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n(5318);t.default=void 0;var p=l(n(7294)),d=n(4755);function y(e){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.AppInitialProps,d.NextWebVitalsMetric;var v=function(e){u(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return p.default.createElement(t,n)}}]),n}(p.default.Component);t.default=v,v.origGetInitialProps=y,v.getInitialProps=y},4799:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(5893),o=n(6610),i=n(5991),u=n(3349),a=n(5255),c=n(6089),s=n(7608),f=n(6156),l=(n(9875),n(5184),n(5179),n(2645),n(1652),n(2007),n(7807),n(8696),n(7544)),p=n(9008);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var y=function(e){(0,a.Z)(n,e);var t=d(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,r.jsx)("div",{className:"preloader ".concat(this.props.loading?"":"preloader-deactivate"),children:(0,r.jsx)("div",{className:"d-table",children:(0,r.jsx)("div",{className:"d-table-cell",children:(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("div",{className:"rect1"}),(0,r.jsx)("div",{className:"rect2"}),(0,r.jsx)("div",{className:"rect3"}),(0,r.jsx)("div",{className:"rect4"}),(0,r.jsx)("div",{className:"rect5"})]})})})})}}]),n}(n(7294).Component),h=n(7714);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var m="function"===typeof Symbol&&Symbol.observable||"@@observable",w=function(){return Math.random().toString(36).substring(7).split("").join(".")},O={INIT:"@@redux/INIT"+w(),REPLACE:"@@redux/REPLACE"+w(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+w()}};function S(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function P(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var D=P();D.withExtraArgument=P;var _=D,x=n(8589);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={data:[],listDataBanner:[],loading:!1,error:""},M=function e(t,n,r){var o;if("function"===typeof n&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(b(0));if("function"===typeof n&&"undefined"===typeof r&&(r=n,n=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(b(1));return r(e)(t,n)}if("function"!==typeof t)throw new Error(b(2));var i=t,u=n,a=[],c=a,s=!1;function f(){c===a&&(c=a.slice())}function l(){if(s)throw new Error(b(3));return u}function p(e){if("function"!==typeof e)throw new Error(b(4));if(s)throw new Error(b(5));var t=!0;return f(),c.push(e),function(){if(t){if(s)throw new Error(b(6));t=!1,f();var n=c.indexOf(e);c.splice(n,1),a=null}}}function d(e){if(!S(e))throw new Error(b(7));if("undefined"===typeof e.type)throw new Error(b(8));if(s)throw new Error(b(9));try{s=!0,u=i(u,e)}finally{s=!1}for(var t=a=c,n=0;n<t.length;n++){(0,t[n])()}return e}function y(e){if("function"!==typeof e)throw new Error(b(10));i=e,d({type:O.REPLACE})}function h(){var e,t=p;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(b(11));function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[m]=function(){return this},e}return d({type:O.INIT}),(o={dispatch:d,subscribe:p,getState:l,replaceReducer:y})[m]=h,o}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var i,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:O.INIT}))throw new Error(b(12));if("undefined"===typeof n(void 0,{type:O.PROBE_UNKNOWN_ACTION()}))throw new Error(b(13))}))}(n)}catch(a){i=a}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},a=0;a<u.length;a++){var c=u[a],s=n[c],f=e[c],l=s(f,t);if("undefined"===typeof l){t&&t.type;throw new Error(b(14))}o[c]=l,r=r||l!==f}return(r=r||u.length!==Object.keys(e).length)?o:e}}({listReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.Z.listData:return C(C({},e),{},{data:t.payload,loading:!1,error:""});case x.Z.listDataBanner:return C(C({},e),{},{listDataBanner:t.payload,loading:!1,error:""});case x.Z.loading:return C(C({},e),{},{loading:!0});case x.Z.endloading:return C(C({},e),{},{loading:!1});case x.Z.error:return C(C({},e),{},{error:t.payload});default:return e}}}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(b(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return r=j.apply(void 0,i)(n.dispatch),g(g({},n),{},{dispatch:r})}}}(_))),I=n(4987),N=n.n(I);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var $=function(e){(0,a.Z)(n,e);var t=T(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,f.Z)((0,u.Z)(e),"state",{loading:!0}),e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerHandle=setTimeout((function(){return e.setState({loading:!1})}),2e3)}},{key:"componentWillUnmount",value:function(){this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return(0,r.jsxs)(h.zt,{store:M,children:[(0,r.jsxs)(p.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("title",{children:"Jumpx - React Next AI & IT Startup Template"})]}),(0,r.jsx)(t,A({},n)),(0,r.jsx)(y,{loading:this.state.loading}),(0,r.jsx)(N(),{pageId:"114975533587822",appId:"222335366276258"})]})}}]),n}(l.default)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4799)}])},5184:function(){},2007:function(){},1652:function(){},9875:function(){},5179:function(){},2645:function(){},8696:function(){},7807:function(){},9008:function(e,t,n){e.exports=n(2775)},9921:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,m=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case i:case a:case u:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case v:case h:case c:return e;default:return t}}case o:return t}}}function S(e){return O(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=v,t.Memo=h,t.Portal=o,t.Profiler=a,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return S(e)||O(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return O(e)===s},t.isContextProvider=function(e){return O(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===v},t.isMemo=function(e){return O(e)===h},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===a},t.isStrictMode=function(e){return O(e)===u},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===a||e===u||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===m||e.$$typeof===w||e.$$typeof===g)},t.typeOf=O},9864:function(e,t,n){"use strict";e.exports=n(9921)},8079:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7294),i=a(o),u=a(n(5697));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){function t(){var e,n,r;c(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={fbLoaded:!1,shouldShowDialog:void 0},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}},{key:"componentDidUpdate",value:function(e){e.pageId===this.props.pageId&&e.appId===this.props.appId&&e.shouldShowDialog===this.props.shouldShowDialog&&e.htmlRef===this.props.htmlRef&&e.minimized===this.props.minimized&&e.themeColor===this.props.themeColor&&e.loggedInGreeting===this.props.loggedInGreeting&&e.loggedOutGreeting===this.props.loggedOutGreeting&&e.greetingDialogDisplay===this.props.greetingDialogDisplay&&e.greetingDialogDelay===this.props.greetingDialogDelay&&e.autoLogAppEvents===this.props.autoLogAppEvents&&e.xfbml===this.props.xfbml&&e.version===this.props.version&&e.language===this.props.language||(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}},{key:"componentWillUnmount",value:function(){void 0!==window.FB&&window.FB.CustomerChat.hide()}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,r=t.autoLogAppEvents,o=t.xfbml,i=t.version;window.fbAsyncInit=function(){window.FB.init({appId:n,autoLogAppEvents:r,xfbml:o,version:"v"+i}),e.setState({fbLoaded:!0})}}},{key:"loadSDKAsynchronously",value:function(){var e=this.props.language;!function(t,n,r){var o,i=t.getElementsByTagName(n)[0];t.getElementById(r)||((o=t.createElement(n)).id=r,o.src="https://connect.facebook.net/"+e+"/sdk/xfbml.customerchat.js",i.parentNode.insertBefore(o,i))}(document,"script","facebook-jssdk")}},{key:"removeFacebookSDK",value:function(){["facebook-jssdk","fb-root"].forEach((function(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})),delete window.FB}},{key:"reloadSDKAsynchronously",value:function(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}},{key:"controlPlugin",value:function(){this.props.shouldShowDialog?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}},{key:"subscribeEvents",value:function(){var e=this.props,t=e.onCustomerChatDialogShow,n=e.onCustomerChatDialogHide;t&&window.FB.Event.subscribe("customerchat.dialogShow",t),n&&window.FB.Event.subscribe("customerchat.dialogHide",n)}},{key:"createMarkup",value:function(){var e=this.props,t=e.pageId,n=e.htmlRef,r=e.minimized,o=e.themeColor,i=e.loggedInGreeting,u=e.loggedOutGreeting,a=e.greetingDialogDisplay,c=e.greetingDialogDelay;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'+t+'"\n        '+(void 0!==n?'ref="'+n+'"':"")+"\n        "+(void 0!==r?'minimized="'+r+'"':"")+"\n        "+(void 0!==o?'theme_color="'+o+'"':"")+"\n        "+(void 0!==i?'logged_in_greeting="'+i+'"':"")+"\n        "+(void 0!==u?'logged_out_greeting="'+u+'"':"")+"\n        "+(void 0!==a?'greeting_dialog_display="'+a+'"':"")+"\n        "+(void 0!==c?'greeting_dialog_delay="'+c+'"':"")+"\n      ></div>"}}},{key:"render",value:function(){var e=this,t=this.state,n=t.fbLoaded,r=t.shouldShowDialog;return n&&r!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",(function(t){var n=t.target;n.className&&"string"===typeof n.className&&n.className.includes("fb_dialog")&&e.controlPlugin()}),!1),this.subscribeEvents()),i.default.createElement("div",{key:Date(),dangerouslySetInnerHTML:this.createMarkup()})}}]),t}(o.Component);f.propTypes={pageId:u.default.string.isRequired,appId:u.default.string.isRequired,shouldShowDialog:u.default.bool,htmlRef:u.default.string,minimized:u.default.bool,themeColor:u.default.string,loggedInGreeting:u.default.string,loggedOutGreeting:u.default.string,greetingDialogDisplay:u.default.oneOf(["show","hide","fade"]),greetingDialogDelay:u.default.number,autoLogAppEvents:u.default.bool,xfbml:u.default.bool,version:u.default.string,language:u.default.string,onCustomerChatDialogShow:u.default.func,onCustomerChatDialogHide:u.default.func},f.defaultProps={shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"2.11",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0},t.default=f},4987:function(e,t,n){"use strict";var r,o=n(8079),i=(r=o)&&r.__esModule?r:{default:r};e.exports=i.default},7714:function(e,t,n){"use strict";n.d(t,{zt:function(){return f},I0:function(){return h},v9:function(){return m}});var r=n(7294),o=(n(5697),r.createContext(null));var i=function(e){e()},u=function(){return i},a={notify:function(){}};var c=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=a,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=u(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)},e}(),s="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var f=function(e){var t=e.store,n=e.context,i=e.children,u=(0,r.useMemo)((function(){var e=new c(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=(0,r.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=u.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,a]);var f=n||o;return r.createElement(f.Provider,{value:u},i)};n(8447),n(9864);function l(){return(0,r.useContext)(o)}function p(e){void 0===e&&(e=o);var t=e===o?l:function(){return(0,r.useContext)(e)};return function(){return t().store}}var d=p();function y(e){void 0===e&&(e=o);var t=e===o?d:p(e);return function(){return t().dispatch}}var h=y(),v=function(e,t){return e===t};function g(e){void 0===e&&(e=o);var t=e===o?l:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=v);var o=t(),i=function(e,t,n,o){var i,u=(0,r.useReducer)((function(e){return e+1}),0)[1],a=(0,r.useMemo)((function(){return new c(n,o)}),[n,o]),f=(0,r.useRef)(),l=(0,r.useRef)(),p=(0,r.useRef)(),d=(0,r.useRef)(),y=n.getState();try{if(e!==l.current||y!==p.current||f.current){var h=e(y);i=void 0!==d.current&&t(h,d.current)?d.current:h}else i=d.current}catch(v){throw f.current&&(v.message+="\nThe error may be correlated with this previous error:\n"+f.current.stack+"\n\n"),v}return s((function(){l.current=e,p.current=y,d.current=i,f.current=void 0})),s((function(){function e(){try{var e=n.getState(),r=l.current(e);if(t(r,d.current))return;d.current=r,p.current=e}catch(v){f.current=v}u()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),i}(e,n,o.store,o.subscription);return(0,r.useDebugValue)(i),i}}var b,m=g(),w=n(3935);b=w.unstable_batchedUpdates,i=b},8447:function(e,t,n){"use strict";var r=n(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?u:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=u;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var u=f(n);l&&(u=u.concat(l(n)));for(var a=c(t),h=c(n),v=0;v<u.length;++v){var g=u[v];if(!i[g]&&(!r||!r[g])&&(!h||!h[g])&&(!a||!a[g])){var b=p(n,g);try{s(t,g,b)}catch(m){}}}}return t}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);