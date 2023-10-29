(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),C0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),O0=Symbol.for("react.suspense"),M0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),Qu=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,Qd={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Yd}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jd(){}Jd.prototype=Ir.prototype;function Nl(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Yd}var Dl=Nl.prototype=new Jd;Dl.constructor=Nl;Zd(Dl,Ir.prototype);Dl.isPureReactComponent=!0;var Ju=Array.isArray,Kd=Object.prototype.hasOwnProperty,Rl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Kd.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:bi,type:e,key:o,ref:a,props:i,_owner:Rl.current}}function F0(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function B0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ku=/\/+/g;function Da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B0(""+e.key):t.toString(36)}function no(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case bi:case C0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Da(a,0):r,Ju(i)?(n="",e!=null&&(n=e.replace(Ku,"$&/")+"/"),no(i,t,n,"",function(f){return f})):i!=null&&(Ol(i)&&(i=F0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ku,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ju(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Da(o,s);a+=no(o,t,n,l,i)}else if(l=z0(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Da(o,s++),a+=no(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ri(e,t,n){if(e==null)return e;var r=[],i=0;return no(e,r,"","",function(o){return t.call(n,o,i++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},ro={transition:null},H0={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ro,ReactCurrentOwner:Rl};X.Children={map:Ri,forEach:function(e,t,n){Ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ir;X.Fragment=I0;X.Profiler=L0;X.PureComponent=Nl;X.StrictMode=A0;X.Suspense=O0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Rl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Kd.call(t,l)&&!ef.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:bi,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:D0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N0,_context:e},e.Consumer=e};X.createElement=tf;X.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:R0,render:e}};X.isValidElement=Ol;X.lazy=function(e){return{$$typeof:j0,_payload:{_status:-1,_result:e},_init:U0}};X.memo=function(e,t){return{$$typeof:M0,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ro.transition;ro.transition={};try{e()}finally{ro.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Xe.current.useCallback(e,t)};X.useContext=function(e){return Xe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};X.useEffect=function(e,t){return Xe.current.useEffect(e,t)};X.useId=function(){return Xe.current.useId()};X.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Xe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};X.useRef=function(e){return Xe.current.useRef(e)};X.useState=function(e){return Xe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Xe.current.useTransition()};X.version="18.2.0";(function(e){e.exports=X})(U);const ki=qd(U.exports);var gs={},nf={exports:{}},ut={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,H){var $=C.length;C.push(H);e:for(;0<$;){var ue=$-1>>>1,L=C[ue];if(0<i(L,H))C[ue]=H,C[$]=L,$=ue;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var H=C[0],$=C.pop();if($!==H){C[0]=$;e:for(var ue=0,L=C.length,O=L>>>1;ue<O;){var j=2*(ue+1)-1,W=C[j],P=j+1,Y=C[P];if(0>i(W,$))P<L&&0>i(Y,W)?(C[ue]=Y,C[P]=$,ue=P):(C[ue]=W,C[j]=$,ue=j);else if(P<L&&0>i(Y,$))C[ue]=Y,C[P]=$,ue=P;else break e}}return H}function i(C,H){var $=C.sortIndex-H.sortIndex;return $!==0?$:C.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],f=[],d=1,y=null,g=3,S=!1,m=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(C){for(var H=n(f);H!==null;){if(H.callback===null)r(f);else if(H.startTime<=C)r(f),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(f)}}function p(C){if(x=!1,u(C),!m)if(n(l)!==null)m=!0,Ye(w);else{var H=n(f);H!==null&&be(p,H.startTime-C)}}function w(C,H){m=!1,x&&(x=!1,v(T),T=-1),S=!0;var $=g;try{for(u(H),y=n(l);y!==null&&(!(y.expirationTime>H)||C&&!R());){var ue=y.callback;if(typeof ue=="function"){y.callback=null,g=y.priorityLevel;var L=ue(y.expirationTime<=H);H=e.unstable_now(),typeof L=="function"?y.callback=L:y===n(l)&&r(l),u(H)}else r(l);y=n(l)}if(y!==null)var O=!0;else{var j=n(f);j!==null&&be(p,j.startTime-H),O=!1}return O}finally{y=null,g=$,S=!1}}var E=!1,_=null,T=-1,D=5,N=-1;function R(){return!(e.unstable_now()-N<D)}function q(){if(_!==null){var C=e.unstable_now();N=C;var H=!0;try{H=_(!0,C)}finally{H?Q():(E=!1,_=null)}}else E=!1}var Q;if(typeof h=="function")Q=function(){h(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,pe=ne.port2;ne.port1.onmessage=q,Q=function(){pe.postMessage(null)}}else Q=function(){b(q,0)};function Ye(C){_=C,E||(E=!0,Q())}function be(C,H){T=b(function(){C(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||S||(m=!0,Ye(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return C()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=g;g=C;try{return H()}finally{g=$}},e.unstable_scheduleCallback=function(C,H,$){var ue=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,C){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=$+L,C={id:d++,callback:H,priorityLevel:C,startTime:$,expirationTime:L,sortIndex:-1},$>ue?(C.sortIndex=$,t(f,C),n(l)===null&&C===n(f)&&(x?(v(T),T=-1):x=!0,be(p,$-ue))):(C.sortIndex=L,t(l,C),m||S||(m=!0,Ye(w))),C},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(C){var H=g;return function(){var $=g;g=H;try{return C.apply(this,arguments)}finally{g=$}}}})(of);(function(e){e.exports=of})(rf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=U.exports,lt=rf.exports;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,ii={};function Fn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(ii[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function W0(e){return vs.call(tc,e)?!0:vs.call(ec,e)?!1:$0.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function V0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,n,r){if(t===null||typeof t>"u"||V0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,jl);Me[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,jl);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,jl);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,n,i,r)&&(n=null),r||i===null?W0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Fl=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),nc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Ra;function Wr(e){if(Ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ra=t&&t[1]||""}return`
`+Ra+e}var Oa=!1;function Ma(e,t){if(!e||Oa)return"";Oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function X0(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case ys:return"Profiler";case Fl:return"StrictMode";case ws:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case lf:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ul:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===Fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=Y0(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Es(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function bs(e,t){hf(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&ks(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ks(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Vr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function pf(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){Z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Q0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ts(e,t){if(t){if(Q0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,pr=null,mr=null;function sc(e){if(e=Ti(e)){if(typeof As!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Xo(t),As(e.stateNode,e.type,t))}}function wf(e){pr?mr?mr.push(e):mr=[e]:pr=e}function xf(){if(pr){var e=pr,t=mr;if(mr=pr=null,sc(e),t)for(e=0;e<t.length;e++)sc(t[e])}}function Sf(e,t){return e(t)}function Ef(){}var ja=!1;function bf(e,t,n){if(ja)return e(t,n);ja=!0;try{return Sf(e,t,n)}finally{ja=!1,(pr!==null||mr!==null)&&(Ef(),xf())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ls=!1;if(Yt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ls=!1}function J0(e,t,n,r,i,o,a,s,l){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(d){this.onError(d)}}var Yr=!1,yo=null,wo=!1,Ns=null,K0={onError:function(e){Yr=!0,yo=e}};function em(e,t,n,r,i,o,a,s,l){Yr=!1,yo=null,J0.apply(K0,arguments)}function tm(e,t,n,r,i,o,a,s,l){if(em.apply(this,arguments),Yr){if(Yr){var f=yo;Yr=!1,yo=null}else throw Error(I(198));wo||(wo=!0,Ns=f)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(Bn(e)!==e)throw Error(I(188))}function nm(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lc(i),e;if(o===r)return lc(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function _f(e){return e=nm(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pf(e);if(t!==null)return t;e=e.sibling}return null}var Tf=lt.unstable_scheduleCallback,uc=lt.unstable_cancelCallback,rm=lt.unstable_shouldYield,im=lt.unstable_requestPaint,Ee=lt.unstable_now,om=lt.unstable_getCurrentPriorityLevel,$l=lt.unstable_ImmediatePriority,Cf=lt.unstable_UserBlockingPriority,xo=lt.unstable_NormalPriority,am=lt.unstable_LowPriority,If=lt.unstable_IdlePriority,$o=null,Mt=null;function sm(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:cm,lm=Math.log,um=Math.LN2;function cm(e){return e>>>=0,e===0?32:31-(lm(e)/um|0)|0}var zi=64,Fi=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Gr(s):(o&=a,o!==0&&(r=Gr(o)))}else a=n&~i,a!==0?r=Gr(a):o!==0&&(r=Gr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_t(o),s=1<<a,l=i[a];l===-1?((s&n)===0||(s&r)!==0)&&(i[a]=dm(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Af(){var e=zi;return zi<<=1,(zi&4194240)===0&&(zi=64),e}function za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function Lf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Nf,Vl,Df,Rf,Of,Rs=!1,Bi=[],cn=null,dn=null,fn=null,si=new Map,li=new Map,an=[],pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function jr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&Vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mm(e,t,n,r,i){switch(t){case"focusin":return cn=jr(cn,e,t,n,r,i),!0;case"dragenter":return dn=jr(dn,e,t,n,r,i),!0;case"mouseover":return fn=jr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return si.set(o,jr(si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,li.set(o,jr(li.get(o)||null,e,t,n,r,i)),!0}return!1}function Mf(e){var t=In(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,Of(e.priority,function(){Df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Is=r,n.target.dispatchEvent(r),Is=null}else return t=Ti(n),t!==null&&Vl(t),e.blockedOn=n,!1;t.shift()}return!0}function dc(e,t,n){io(e)&&n.delete(t)}function gm(){Rs=!1,cn!==null&&io(cn)&&(cn=null),dn!==null&&io(dn)&&(dn=null),fn!==null&&io(fn)&&(fn=null),si.forEach(dc),li.forEach(dc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,gm)))}function ui(e){function t(i){return zr(i,e)}if(0<Bi.length){zr(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&zr(cn,e),dn!==null&&zr(dn,e),fn!==null&&zr(fn,e),si.forEach(t),li.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Mf(n),n.blockedOn===null&&an.shift()}var gr=Kt.ReactCurrentBatchConfig,Eo=!0;function vm(e,t,n,r){var i=ae,o=gr.transition;gr.transition=null;try{ae=1,Gl(e,t,n,r)}finally{ae=i,gr.transition=o}}function ym(e,t,n,r){var i=ae,o=gr.transition;gr.transition=null;try{ae=4,Gl(e,t,n,r)}finally{ae=i,gr.transition=o}}function Gl(e,t,n,r){if(Eo){var i=Os(e,t,n,r);if(i===null)qa(e,t,r,bo,n),cc(e,r);else if(mm(i,e,t,n,r))r.stopPropagation();else if(cc(e,r),t&4&&-1<pm.indexOf(e)){for(;i!==null;){var o=Ti(i);if(o!==null&&Nf(o),o=Os(e,t,n,r),o===null&&qa(e,t,r,bo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qa(e,t,r,null,n)}}var bo=null;function Os(e,t,n,r){if(bo=null,e=Hl(r),e=In(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(om()){case $l:return 1;case Cf:return 4;case xo:case am:return 16;case If:return 536870912;default:return 16}default:return 16}}var ln=null,Xl=null,oo=null;function zf(){if(oo)return oo;var e,t=Xl,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return oo=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function fc(){return!1}function ct(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:fc,this.isPropagationStopped=fc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=ct(Ar),Pi=ye({},Ar,{view:0,detail:0}),wm=ct(Pi),Fa,Ba,Fr,Wo=ye({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Fa=e.screenX-Fr.screenX,Ba=e.screenY-Fr.screenY):Ba=Fa=0,Fr=e),Fa)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),hc=ct(Wo),xm=ye({},Wo,{dataTransfer:0}),Sm=ct(xm),Em=ye({},Pi,{relatedTarget:0}),Ua=ct(Em),bm=ye({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),km=ct(bm),_m=ye({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=ct(_m),Tm=ye({},Ar,{data:0}),pc=ct(Tm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Am[e])?!!t[e]:!1}function Yl(){return Lm}var Nm=ye({},Pi,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dm=ct(Nm),Rm=ye({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=ct(Rm),Om=ye({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Mm=ct(Om),jm=ye({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=ct(jm),Fm=ye({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=ct(Fm),Um=[9,13,27,32],Zl=Yt&&"CompositionEvent"in window,Zr=null;Yt&&"documentMode"in document&&(Zr=document.documentMode);var Hm=Yt&&"TextEvent"in window&&!Zr,Ff=Yt&&(!Zl||Zr&&8<Zr&&11>=Zr),gc=String.fromCharCode(32),vc=!1;function Bf(e,t){switch(e){case"keyup":return Um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function $m(e,t){switch(e){case"compositionend":return Uf(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Wm(e,t){if(nr)return e==="compositionend"||!Zl&&Bf(e,t)?(e=zf(),oo=Xl=ln=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function Hf(e,t,n,r){wf(r),t=ko(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ci=null;function Gm(e){Kf(e,0)}function Vo(e){var t=or(e);if(ff(t))return e}function Xm(e,t){if(e==="change")return t}var $f=!1;if(Yt){var Ha;if(Yt){var $a="oninput"in document;if(!$a){var wc=document.createElement("div");wc.setAttribute("oninput","return;"),$a=typeof wc.oninput=="function"}Ha=$a}else Ha=!1;$f=Ha&&(!document.documentMode||9<document.documentMode)}function xc(){Qr&&(Qr.detachEvent("onpropertychange",Wf),ci=Qr=null)}function Wf(e){if(e.propertyName==="value"&&Vo(ci)){var t=[];Hf(t,ci,e,Hl(e)),bf(Gm,t)}}function qm(e,t,n){e==="focusin"?(xc(),Qr=t,ci=n,Qr.attachEvent("onpropertychange",Wf)):e==="focusout"&&xc()}function Ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(ci)}function Zm(e,t){if(e==="click")return Vo(t)}function Qm(e,t){if(e==="input"||e==="change")return Vo(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Jm;function di(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vs.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var n=Sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sc(n)}}function Vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vf(n.ownerDocument.documentElement,n)){if(r!==null&&Ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ec(n,o);var a=Ec(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eg=Yt&&"documentMode"in document&&11>=document.documentMode,rr=null,Ms=null,Jr=null,js=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;js||rr==null||rr!==vo(r)||(r=rr,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&di(Jr,r)||(Jr=r,r=ko(Ms,"onSelect"),0<r.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Wa={},Xf={};Yt&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Go(e){if(Wa[e])return Wa[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xf)return Wa[e]=t[n];return e}var qf=Go("animationend"),Yf=Go("animationiteration"),Zf=Go("animationstart"),Qf=Go("transitionend"),Jf=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Jf.set(e,t),Fn(t,[e])}for(var Va=0;Va<kc.length;Va++){var Ga=kc[Va],tg=Ga.toLowerCase(),ng=Ga[0].toUpperCase()+Ga.slice(1);Sn(tg,"on"+ng)}Sn(qf,"onAnimationEnd");Sn(Yf,"onAnimationIteration");Sn(Zf,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Qf,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tm(r,t,void 0,e),e.currentTarget=null}function Kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,f=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;_c(i,s,f),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,f=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;_c(i,s,f),o=l}}}if(wo)throw e=Ns,wo=!1,Ns=null,e}function de(e,t){var n=t[Hs];n===void 0&&(n=t[Hs]=new Set);var r=e+"__bubble";n.has(r)||(eh(t,e,2,!1),n.add(r))}function Xa(e,t,n){var r=0;t&&(r|=4),eh(n,e,r,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[$i]){e[$i]=!0,sf.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||Xa(n,!1,e),Xa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,Xa("selectionchange",!1,t))}}function eh(e,t,n,r){switch(jf(t)){case 1:var i=vm;break;case 4:i=ym;break;default:i=Gl}n=i.bind(null,t,n,e),i=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qa(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=In(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}bf(function(){var f=o,d=Hl(n),y=[];e:{var g=Jf.get(e);if(g!==void 0){var S=ql,m=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":S=Dm;break;case"focusin":m="focus",S=Ua;break;case"focusout":m="blur",S=Ua;break;case"beforeblur":case"afterblur":S=Ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Mm;break;case qf:case Yf:case Zf:S=km;break;case Qf:S=zm;break;case"scroll":S=wm;break;case"wheel":S=Bm;break;case"copy":case"cut":case"paste":S=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=mc}var x=(t&4)!==0,b=!x&&e==="scroll",v=x?g!==null?g+"Capture":null:g;x=[];for(var h=f,u;h!==null;){u=h;var p=u.stateNode;if(u.tag===5&&p!==null&&(u=p,v!==null&&(p=ai(h,v),p!=null&&x.push(hi(h,p,u)))),b)break;h=h.return}0<x.length&&(g=new S(g,m,null,n,d),y.push({event:g,listeners:x}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Is&&(m=n.relatedTarget||n.fromElement)&&(In(m)||m[Zt]))break e;if((S||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,S?(m=n.relatedTarget||n.toElement,S=f,m=m?In(m):null,m!==null&&(b=Bn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(S=null,m=f),S!==m)){if(x=hc,p="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=mc,p="onPointerLeave",v="onPointerEnter",h="pointer"),b=S==null?g:or(S),u=m==null?g:or(m),g=new x(p,h+"leave",S,n,d),g.target=b,g.relatedTarget=u,p=null,In(d)===f&&(x=new x(v,h+"enter",m,n,d),x.target=u,x.relatedTarget=b,p=x),b=p,S&&m)t:{for(x=S,v=m,h=0,u=x;u;u=Jn(u))h++;for(u=0,p=v;p;p=Jn(p))u++;for(;0<h-u;)x=Jn(x),h--;for(;0<u-h;)v=Jn(v),u--;for(;h--;){if(x===v||v!==null&&x===v.alternate)break t;x=Jn(x),v=Jn(v)}x=null}else x=null;S!==null&&Pc(y,g,S,x,!1),m!==null&&b!==null&&Pc(y,b,m,x,!0)}}e:{if(g=f?or(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var w=Xm;else if(yc(g))if($f)w=Qm;else{w=Ym;var E=qm}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=Zm);if(w&&(w=w(e,f))){Hf(y,w,n,d);break e}E&&E(e,g,f),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ks(g,"number",g.value)}switch(E=f?or(f):window,e){case"focusin":(yc(E)||E.contentEditable==="true")&&(rr=E,Ms=f,Jr=null);break;case"focusout":Jr=Ms=rr=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,bc(y,n,d);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":bc(y,n,d)}var _;if(Zl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else nr?Bf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ff&&n.locale!=="ko"&&(nr||T!=="onCompositionStart"?T==="onCompositionEnd"&&nr&&(_=zf()):(ln=d,Xl="value"in ln?ln.value:ln.textContent,nr=!0)),E=ko(f,T),0<E.length&&(T=new pc(T,e,null,n,d),y.push({event:T,listeners:E}),_?T.data=_:(_=Uf(n),_!==null&&(T.data=_)))),(_=Hm?$m(e,n):Wm(e,n))&&(f=ko(f,"onBeforeInput"),0<f.length&&(d=new pc("onBeforeInput","beforeinput",null,n,d),y.push({event:d,listeners:f}),d.data=_))}Kf(y,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ai(e,n),o!=null&&r.unshift(hi(e,o,i)),o=ai(e,t),o!=null&&r.push(hi(e,o,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,f=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&f!==null&&(s=f,i?(l=ai(n,o),l!=null&&a.unshift(hi(n,l,s))):i||(l=ai(n,o),l!=null&&a.push(hi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ig=/\r\n?/g,og=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(og,"")}function Wi(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(I(425))}function _o(){}var zs=null,Fs=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(lg)}:Us;function lg(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Lr,pi="__reactProps$"+Lr,Zt="__reactContainer$"+Lr,Hs="__reactEvents$"+Lr,ug="__reactListeners$"+Lr,cg="__reactHandles$"+Lr;function In(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[Ot])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[Ot]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Xo(e){return e[pi]||null}var $s=[],ar=-1;function En(e){return{current:e}}function he(e){0>ar||(e.current=$s[ar],$s[ar]=null,ar--)}function ce(e,t){ar++,$s[ar]=e.current,e.current=t}var xn={},Ue=En(xn),Ke=En(!1),Rn=xn;function xr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function Po(){he(Ke),he(Ue)}function Ac(e,t,n){if(Ue.current!==xn)throw Error(I(168));ce(Ue,t),ce(Ke,n)}function th(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,q0(e)||"Unknown",i));return ye({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Rn=Ue.current,ce(Ue,e),ce(Ke,Ke.current),!0}function Lc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=th(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,he(Ke),he(Ue),ce(Ue,e)):he(Ke),ce(Ke,n)}var Wt=null,qo=!1,Za=!1;function nh(e){Wt===null?Wt=[e]:Wt.push(e)}function dg(e){qo=!0,nh(e)}function bn(){if(!Za&&Wt!==null){Za=!0;var e=0,t=ae;try{var n=Wt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,qo=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),Tf($l,bn),i}finally{ae=t,Za=!1}}return null}var sr=[],lr=0,Co=null,Io=0,ft=[],ht=0,On=null,Vt=1,Gt="";function Tn(e,t){sr[lr++]=Io,sr[lr++]=Co,Co=e,Io=t}function rh(e,t,n){ft[ht++]=Vt,ft[ht++]=Gt,ft[ht++]=On,On=e;var r=Vt;e=Gt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Vt=1<<32-_t(t)+i|n<<i|r,Gt=o+e}else Vt=1<<o|n<<i|r,Gt=e}function Jl(e){e.return!==null&&(Tn(e,1),rh(e,1,0))}function Kl(e){for(;e===Co;)Co=sr[--lr],sr[lr]=null,Io=sr[--lr],sr[lr]=null;for(;e===On;)On=ft[--ht],ft[ht]=null,Gt=ft[--ht],ft[ht]=null,Vt=ft[--ht],ft[ht]=null}var st=null,ot=null,me=!1,kt=null;function ih(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ot=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:Vt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ot=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vs(e){if(me){var t=ot;if(t){var n=t;if(!Nc(e,t)){if(Ws(e))throw Error(I(418));t=hn(n.nextSibling);var r=st;t&&Nc(e,t)?ih(r,n):(e.flags=e.flags&-4097|2,me=!1,st=e)}}else{if(Ws(e))throw Error(I(418));e.flags=e.flags&-4097|2,me=!1,st=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Vi(e){if(e!==st)return!1;if(!me)return Dc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=ot)){if(Ws(e))throw oh(),Error(I(418));for(;t;)ih(e,t),t=hn(t.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=st?hn(e.stateNode.nextSibling):null;return!0}function oh(){for(var e=ot;e;)e=hn(e.nextSibling)}function Sr(){ot=st=null,me=!1}function eu(e){kt===null?kt=[e]:kt.push(e)}var fg=Kt.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ao=En(null),Lo=null,ur=null,tu=null;function nu(){tu=ur=Lo=null}function ru(e){var t=Ao.current;he(Ao),e._currentValue=t}function Gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Lo=e,tu=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(tu!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Lo===null)throw Error(I(308));ur=e,Lo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var An=null;function iu(e){An===null?An=[e]:An.push(e)}function ah(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}function Rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var i=e.updateQueue;on=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,f=l.next;l.next=null,a===null?o=f:a.next=f,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=f:s.next=f,d.lastBaseUpdate=l))}if(o!==null){var y=i.baseState;a=0,d=f=l=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,x=s;switch(g=t,S=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){y=m.call(S,y,g);break e}y=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,g=typeof m=="function"?m.call(S,y,g):m,g==null)break e;y=ye({},y,g);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(f=d=S,l=y):d=d.next=S,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=y),i.baseState=l,i.firstBaseUpdate=f,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jn|=a,e.lanes=a,e.memoizedState=y}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var lh=new af.Component().refs;function Xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=gn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),so(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=gn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),so(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=gn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(Pt(t,e,r,n),so(t,e,r))}};function Mc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,o):!0}function uh(e,t,n){var r=!1,i=xn,o=t.contextType;return typeof o=="object"&&o!==null?o=vt(o):(i=et(t)?Rn:Ue.current,r=t.contextTypes,o=(r=r!=null)?xr(e,i):xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lh,ou(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=vt(o):(o=et(t)?Rn:Ue.current,i.context=xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yo.enqueueReplaceState(i,i.state,null),No(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===lh&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function ch(e){function t(v,h){if(e){var u=v.deletions;u===null?(v.deletions=[h],v.flags|=16):u.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=vn(v,h),v.index=0,v.sibling=null,v}function o(v,h,u){return v.index=u,e?(u=v.alternate,u!==null?(u=u.index,u<h?(v.flags|=2,h):u):(v.flags|=2,h)):(v.flags|=1048576,h)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,h,u,p){return h===null||h.tag!==6?(h=rs(u,v.mode,p),h.return=v,h):(h=i(h,u),h.return=v,h)}function l(v,h,u,p){var w=u.type;return w===tr?d(v,h,u.props.children,p,u.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&zc(w)===h.type)?(p=i(h,u.props),p.ref=Br(v,h,u),p.return=v,p):(p=po(u.type,u.key,u.props,null,v.mode,p),p.ref=Br(v,h,u),p.return=v,p)}function f(v,h,u,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==u.containerInfo||h.stateNode.implementation!==u.implementation?(h=is(u,v.mode,p),h.return=v,h):(h=i(h,u.children||[]),h.return=v,h)}function d(v,h,u,p,w){return h===null||h.tag!==7?(h=Dn(u,v.mode,p,w),h.return=v,h):(h=i(h,u),h.return=v,h)}function y(v,h,u){if(typeof h=="string"&&h!==""||typeof h=="number")return h=rs(""+h,v.mode,u),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oi:return u=po(h.type,h.key,h.props,null,v.mode,u),u.ref=Br(v,null,h),u.return=v,u;case er:return h=is(h,v.mode,u),h.return=v,h;case rn:var p=h._init;return y(v,p(h._payload),u)}if(Vr(h)||Or(h))return h=Dn(h,v.mode,u,null),h.return=v,h;Gi(v,h)}return null}function g(v,h,u,p){var w=h!==null?h.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return w!==null?null:s(v,h,""+u,p);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Oi:return u.key===w?l(v,h,u,p):null;case er:return u.key===w?f(v,h,u,p):null;case rn:return w=u._init,g(v,h,w(u._payload),p)}if(Vr(u)||Or(u))return w!==null?null:d(v,h,u,p,null);Gi(v,u)}return null}function S(v,h,u,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return v=v.get(u)||null,s(h,v,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:return v=v.get(p.key===null?u:p.key)||null,l(h,v,p,w);case er:return v=v.get(p.key===null?u:p.key)||null,f(h,v,p,w);case rn:var E=p._init;return S(v,h,u,E(p._payload),w)}if(Vr(p)||Or(p))return v=v.get(u)||null,d(h,v,p,w,null);Gi(h,p)}return null}function m(v,h,u,p){for(var w=null,E=null,_=h,T=h=0,D=null;_!==null&&T<u.length;T++){_.index>T?(D=_,_=null):D=_.sibling;var N=g(v,_,u[T],p);if(N===null){_===null&&(_=D);break}e&&_&&N.alternate===null&&t(v,_),h=o(N,h,T),E===null?w=N:E.sibling=N,E=N,_=D}if(T===u.length)return n(v,_),me&&Tn(v,T),w;if(_===null){for(;T<u.length;T++)_=y(v,u[T],p),_!==null&&(h=o(_,h,T),E===null?w=_:E.sibling=_,E=_);return me&&Tn(v,T),w}for(_=r(v,_);T<u.length;T++)D=S(_,v,T,u[T],p),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?T:D.key),h=o(D,h,T),E===null?w=D:E.sibling=D,E=D);return e&&_.forEach(function(R){return t(v,R)}),me&&Tn(v,T),w}function x(v,h,u,p){var w=Or(u);if(typeof w!="function")throw Error(I(150));if(u=w.call(u),u==null)throw Error(I(151));for(var E=w=null,_=h,T=h=0,D=null,N=u.next();_!==null&&!N.done;T++,N=u.next()){_.index>T?(D=_,_=null):D=_.sibling;var R=g(v,_,N.value,p);if(R===null){_===null&&(_=D);break}e&&_&&R.alternate===null&&t(v,_),h=o(R,h,T),E===null?w=R:E.sibling=R,E=R,_=D}if(N.done)return n(v,_),me&&Tn(v,T),w;if(_===null){for(;!N.done;T++,N=u.next())N=y(v,N.value,p),N!==null&&(h=o(N,h,T),E===null?w=N:E.sibling=N,E=N);return me&&Tn(v,T),w}for(_=r(v,_);!N.done;T++,N=u.next())N=S(_,v,T,N.value,p),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?T:N.key),h=o(N,h,T),E===null?w=N:E.sibling=N,E=N);return e&&_.forEach(function(q){return t(v,q)}),me&&Tn(v,T),w}function b(v,h,u,p){if(typeof u=="object"&&u!==null&&u.type===tr&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Oi:e:{for(var w=u.key,E=h;E!==null;){if(E.key===w){if(w=u.type,w===tr){if(E.tag===7){n(v,E.sibling),h=i(E,u.props.children),h.return=v,v=h;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&zc(w)===E.type){n(v,E.sibling),h=i(E,u.props),h.ref=Br(v,E,u),h.return=v,v=h;break e}n(v,E);break}else t(v,E);E=E.sibling}u.type===tr?(h=Dn(u.props.children,v.mode,p,u.key),h.return=v,v=h):(p=po(u.type,u.key,u.props,null,v.mode,p),p.ref=Br(v,h,u),p.return=v,v=p)}return a(v);case er:e:{for(E=u.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===u.containerInfo&&h.stateNode.implementation===u.implementation){n(v,h.sibling),h=i(h,u.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=is(u,v.mode,p),h.return=v,v=h}return a(v);case rn:return E=u._init,b(v,h,E(u._payload),p)}if(Vr(u))return m(v,h,u,p);if(Or(u))return x(v,h,u,p);Gi(v,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,u),h.return=v,v=h):(n(v,h),h=rs(u,v.mode,p),h.return=v,v=h),a(v)):n(v,h)}return b}var Er=ch(!0),dh=ch(!1),Ci={},jt=En(Ci),mi=En(Ci),gi=En(Ci);function Ln(e){if(e===Ci)throw Error(I(174));return e}function au(e,t){switch(ce(gi,t),ce(mi,e),ce(jt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ps(t,e)}he(jt),ce(jt,t)}function br(){he(jt),he(mi),he(gi)}function fh(e){Ln(gi.current);var t=Ln(jt.current),n=Ps(t,e.type);t!==n&&(ce(mi,e),ce(jt,n))}function su(e){mi.current===e&&(he(jt),he(mi))}var ge=En(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function lu(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var lo=Kt.ReactCurrentDispatcher,Ja=Kt.ReactCurrentBatchConfig,Mn=0,ve=null,_e=null,Te=null,Ro=!1,Kr=!1,vi=0,hg=0;function ze(){throw Error(I(321))}function uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function cu(e,t,n,r,i,o){if(Mn=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?vg:yg,e=n(r,i),Kr){o=0;do{if(Kr=!1,vi=0,25<=o)throw Error(I(301));o+=1,Te=_e=null,t.updateQueue=null,lo.current=wg,e=n(r,i)}while(Kr)}if(lo.current=Oo,t=_e!==null&&_e.next!==null,Mn=0,Te=_e=ve=null,Ro=!1,t)throw Error(I(300));return e}function du(){var e=vi!==0;return vi=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function yt(){if(_e===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Te===null?ve.memoizedState:Te.next;if(t!==null)Te=t,_e=e;else{if(e===null)throw Error(I(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function yi(e,t){return typeof t=="function"?t(e):t}function Ka(e){var t=yt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,f=o;do{var d=f.lane;if((Mn&d)===d)l!==null&&(l=l.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};l===null?(s=l=y,a=r):l=l.next=y,ve.lanes|=d,jn|=d}f=f.next}while(f!==null&&f!==o);l===null?a=r:l.next=s,Tt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=yt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Tt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hh(){}function ph(e,t){var n=ve,r=yt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,fu(vh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,wi(9,gh.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(I(349));(Mn&30)!==0||mh(n,t,i)}return i}function mh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gh(e,t,n,r){t.value=n,t.getSnapshot=r,yh(t)&&wh(e)}function vh(e,t,n){return n(function(){yh(t)&&wh(e)})}function yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function wh(e){var t=Qt(e,1);t!==null&&Pt(t,e,1,-1)}function Fc(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=gg.bind(null,ve,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xh(){return yt().memoizedState}function uo(e,t,n,r){var i=At();ve.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Zo(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(_e!==null){var a=_e.memoizedState;if(o=a.destroy,r!==null&&uu(r,a.deps)){i.memoizedState=wi(t,n,o,r);return}}ve.flags|=e,i.memoizedState=wi(1|t,n,o,r)}function Bc(e,t){return uo(8390656,8,e,t)}function fu(e,t){return Zo(2048,8,e,t)}function Sh(e,t){return Zo(4,2,e,t)}function Eh(e,t){return Zo(4,4,e,t)}function bh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kh(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4,4,bh.bind(null,t,e),n)}function hu(){}function _h(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ph(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Th(e,t,n){return(Mn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(Tt(n,t)||(n=Af(),ve.lanes|=n,jn|=n,e.baseState=!0),t)}function pg(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Ja.transition;Ja.transition={};try{e(!1),t()}finally{ae=n,Ja.transition=r}}function Ch(){return yt().memoizedState}function mg(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e))Ah(t,n);else if(n=ah(e,t,n,r),n!==null){var i=Ge();Pt(n,e,r,i),Lh(n,t,r)}}function gg(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))Ah(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Tt(s,a)){var l=t.interleaved;l===null?(i.next=i,iu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ah(e,t,i,r),n!==null&&(i=Ge(),Pt(n,e,r,i),Lh(n,t,r))}}function Ih(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Ah(e,t){Kr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}var Oo={readContext:vt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},vg={readContext:vt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uo(4194308,4,bh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:hu,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=pg.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=At();if(me){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ce===null)throw Error(I(349));(Mn&30)!==0||mh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bc(vh.bind(null,r,o,e),[e]),r.flags|=2048,wi(9,gh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=Ce.identifierPrefix;if(me){var n=Gt,r=Vt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yg={readContext:vt,useCallback:_h,useContext:vt,useEffect:fu,useImperativeHandle:kh,useInsertionEffect:Sh,useLayoutEffect:Eh,useMemo:Ph,useReducer:Ka,useRef:xh,useState:function(){return Ka(yi)},useDebugValue:hu,useDeferredValue:function(e){var t=yt();return Th(t,_e.memoizedState,e)},useTransition:function(){var e=Ka(yi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:hh,useSyncExternalStore:ph,useId:Ch,unstable_isNewReconciler:!1},wg={readContext:vt,useCallback:_h,useContext:vt,useEffect:fu,useImperativeHandle:kh,useInsertionEffect:Sh,useLayoutEffect:Eh,useMemo:Ph,useReducer:es,useRef:xh,useState:function(){return es(yi)},useDebugValue:hu,useDeferredValue:function(e){var t=yt();return _e===null?t.memoizedState=e:Th(t,_e.memoizedState,e)},useTransition:function(){var e=es(yi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:hh,useSyncExternalStore:ph,useId:Ch,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=X0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ts(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xg=typeof WeakMap=="function"?WeakMap:Map;function Nh(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,ol=r),Ys(e,t)},n}function Dh(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ys(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ys(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rg.bind(null,e,t,n),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $c(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Sg=Kt.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?dh(t,null,n,r):Er(t,e.child,n,r)}function Wc(e,t,n,r,i){n=n.render;var o=t.ref;return vr(t,i),r=cu(e,t,n,r,o,i),n=du(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(me&&n&&Jl(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Su(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rh(e,t,o,r,i)):(e=po(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(a,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(di(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return Zs(e,t,n,r,i)}function Oh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(dr,rt),rt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(dr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(dr,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(dr,rt),rt|=r;return Ve(e,t,i,n),t.child}function Mh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zs(e,t,n,r,i){var o=et(n)?Rn:Ue.current;return o=xr(t,o),vr(t,i),n=cu(e,t,n,r,o,i),r=du(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(me&&r&&Jl(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Gc(e,t,n,r,i){if(et(n)){var o=!0;To(t)}else o=!1;if(vr(t,i),t.stateNode===null)co(e,t),uh(t,n,r),qs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=vt(f):(f=et(n)?Rn:Ue.current,f=xr(t,f));var d=n.getDerivedStateFromProps,y=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==f)&&jc(t,a,r,f),on=!1;var g=t.memoizedState;a.state=g,No(t,r,a,i),l=t.memoizedState,s!==r||g!==l||Ke.current||on?(typeof d=="function"&&(Xs(t,n,d,r),l=t.memoizedState),(s=on||Mc(t,n,s,r,g,l,f))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=f,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,sh(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Et(t.type,s),a.props=f,y=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=et(n)?Rn:Ue.current,l=xr(t,l));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==y||g!==l)&&jc(t,a,r,l),on=!1,g=t.memoizedState,a.state=g,No(t,r,a,i);var m=t.memoizedState;s!==y||g!==m||Ke.current||on?(typeof S=="function"&&(Xs(t,n,S,r),m=t.memoizedState),(f=on||Mc(t,n,f,r,g,m,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=f):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Qs(e,t,n,r,o,i)}function Qs(e,t,n,r,i,o){Mh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Lc(t,n,!1),Jt(e,t,o);r=t.stateNode,Sg.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Er(t,e.child,null,o),t.child=Er(t,null,s,o)):Ve(e,t,s,o),t.memoizedState=r.state,i&&Lc(t,n,!0),t.child}function jh(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),au(e,t.containerInfo)}function Xc(e,t,n,r,i){return Sr(),eu(i),t.flags|=256,Ve(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function zh(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ge,i&1),e===null)return Vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ko(a,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ks(n),t.memoizedState=Js,e):pu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Eg(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vn(s,o):(o=Dn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ks(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pu(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,r){return r!==null&&eu(r),Er(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ts(Error(I(422))),Xi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ko({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Er(t,e.child,null,a),t.child.memoizedState=Ks(a),t.memoizedState=Js,o);if((t.mode&1)===0)return Xi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(I(419)),r=ts(o,r,void 0),Xi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Je||s){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),Pt(r,e,i,-1))}return xu(),r=ts(Error(I(421))),Xi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Og.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=hn(i.nextSibling),st=t,me=!0,kt=null,e!==null&&(ft[ht++]=Vt,ft[ht++]=Gt,ft[ht++]=On,Vt=e.id,Gt=e.overflow,On=t),t=pu(t,r.children),t.flags|=4096,t)}function qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gs(e.return,t,n)}function ns(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n,t);else if(e.tag===19)qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ns(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Do(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ns(t,!0,n,null,o);break;case"together":ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bg(e,t,n){switch(t.tag){case 3:jh(t),Sr();break;case 5:fh(t);break;case 1:et(t.type)&&To(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?zh(e,t,n):(ce(ge,ge.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Oh(e,t,n)}return Jt(e,t,n)}var Bh,el,Uh,Hh;Bh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};el=function(){};Uh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(jt.current);var o=null;switch(n){case"input":i=Es(e,i),r=Es(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=_s(e,i),r=_s(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}Ts(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ii.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var l=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&l!==s&&(l!=null||s!=null))if(f==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(f,n)),n=l;else f==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(f,l)):f==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(f,""+l):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ii.hasOwnProperty(f)?(l!=null&&f==="onScroll"&&de("scroll",e),o||s===l||(o=[])):(o=o||[]).push(f,l))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Hh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kg(e,t,n){var r=t.pendingProps;switch(Kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return et(t.type)&&Po(),Fe(t),null;case 3:return r=t.stateNode,br(),he(Ke),he(Ue),lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(ll(kt),kt=null))),el(e,t),Fe(t),null;case 5:su(t);var i=Ln(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Uh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Fe(t),null}if(e=Ln(jt.current),Vi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[pi]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)de(Xr[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":rc(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":oc(r,o),de("invalid",r)}Ts(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Wi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Wi(r.textContent,s,e),i=["children",""+s]):ii.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":Mi(r),ic(r,o,!0);break;case"textarea":Mi(r),ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_o)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ot]=t,e[pi]=r,Bh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Cs(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)de(Xr[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":rc(e,r),i=Es(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":oc(e,r),i=_s(e,r),de("invalid",e);break;default:i=r}Ts(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?yf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gf(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oi(e,l):typeof l=="number"&&oi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&zl(e,o,l,a))}switch(n){case"input":Mi(e),ic(e,r,!1);break;case"textarea":Mi(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Hh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Ln(gi.current),Ln(jt.current),Vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Fe(t),null;case 13:if(he(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)oh(),Sr(),t.flags|=98560,o=!1;else if(o=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Ot]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else kt!==null&&(ll(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Pe===0&&(Pe=3):xu())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return br(),el(e,t),e===null&&fi(t.stateNode.containerInfo),Fe(t),null;case 10:return ru(t.type._context),Fe(t),null;case 17:return et(t.type)&&Po(),Fe(t),null;case 19:if(he(ge),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ur(o,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Do(e),a!==null){for(t.flags|=128,Ur(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>_r&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=Do(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!me)return Fe(t),null}else 2*Ee()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function _g(e,t){switch(Kl(t),t.tag){case 1:return et(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),he(Ke),he(Ue),lu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return su(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return br(),null;case 10:return ru(t.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var qi=!1,Be=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,z=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Yc=!1;function Tg(e,t){if(zs=Eo,e=Gf(),Ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,f=0,d=0,y=e,g=null;t:for(;;){for(var S;y!==n||i!==0&&y.nodeType!==3||(s=a+i),y!==o||r!==0&&y.nodeType!==3||(l=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++f===i&&(s=a),g===o&&++d===r&&(l=a),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fs={focusedElem:e,selectionRange:n},Eo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,b=m.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Et(t.type,x),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(p){xe(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return m=Yc,Yc=!1,m}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tl(t,n,o)}i=i.next}while(i!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[pi],delete t[Hs],delete t[ug],delete t[cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wh(e){return e.tag===5||e.tag===3||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}var De=null,bt=!1;function tn(e,t,n){for(n=n.child;n!==null;)Vh(e,t,n),n=n.sibling}function Vh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:Be||cr(n,t);case 6:var r=De,i=bt;De=null,tn(e,t,n),De=r,bt=i,De!==null&&(bt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(bt?(e=De,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),ui(e)):Ya(De,n.stateNode));break;case 4:r=De,i=bt,De=n.stateNode.containerInfo,bt=!0,tn(e,t,n),De=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&tl(n,t,a),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!Be&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){xe(n,t,s)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,tn(e,t,n),Be=r):tn(e,t,n);break;default:tn(e,t,n)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pg),t.forEach(function(r){var i=Mg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,bt=!1;break e;case 3:De=s.stateNode.containerInfo,bt=!0;break e;case 4:De=s.stateNode.containerInfo,bt=!0;break e}s=s.return}if(De===null)throw Error(I(160));Vh(o,a,i),De=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(f){xe(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gh(t,e),t=t.sibling}function Gh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Ct(e),r&4){try{ei(3,e,e.return),Qo(3,e)}catch(x){xe(e,e.return,x)}try{ei(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:St(t,e),Ct(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(St(t,e),Ct(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Cs(s,a);var f=Cs(s,o);for(a=0;a<l.length;a+=2){var d=l[a],y=l[a+1];d==="style"?yf(i,y):d==="dangerouslySetInnerHTML"?gf(i,y):d==="children"?oi(i,y):zl(i,d,y,f)}switch(s){case"input":bs(i,o);break;case"textarea":pf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?hr(i,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(x){xe(e,e.return,x)}}break;case 6:if(St(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){xe(e,e.return,x)}}break;case 3:if(St(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:St(t,e),Ct(e);break;case 13:St(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vu=Ee())),r&4&&Qc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(f=Be)||d,St(t,e),Be=f):St(t,e),Ct(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!d&&(e.mode&1)!==0)for(z=e,d=e.child;d!==null;){for(y=z=d;z!==null;){switch(g=z,S=g.child,g.tag){case 0:case 11:case 14:case 15:ei(4,g,g.return);break;case 1:cr(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:cr(g,g.return);break;case 22:if(g.memoizedState!==null){Kc(y);continue}}S!==null?(S.return=g,z=S):Kc(y)}d=d.sibling}e:for(d=null,y=e;;){if(y.tag===5){if(d===null){d=y;try{i=y.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,l=y.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=vf("display",a))}catch(x){xe(e,e.return,x)}}}else if(y.tag===6){if(d===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(x){xe(e,e.return,x)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;d===y&&(d=null),y=y.return}d===y&&(d=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:St(t,e),Ct(e),r&4&&Qc(e);break;case 21:break;default:St(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=Zc(e);il(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Zc(e);rl(e,s,a);break;default:throw Error(I(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cg(e,t,n){z=e,Xh(e)}function Xh(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||qi;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Be;s=qi;var f=Be;if(qi=a,(Be=l)&&!f)for(z=i;z!==null;)a=z,l=a.child,a.tag===22&&a.memoizedState!==null?ed(i):l!==null?(l.return=a,z=l):ed(i);for(;o!==null;)z=o,Xh(o),o=o.sibling;z=i,qi=s,Be=f}Jc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,z=o):Jc(e)}}function Jc(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var y=d.dehydrated;y!==null&&ui(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Be||t.flags&512&&nl(t)}catch(g){xe(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Kc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ed(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{nl(t)}catch(l){xe(t,o,l)}break;case 5:var a=t.return;try{nl(t)}catch(l){xe(t,a,l)}}}catch(l){xe(t,t.return,l)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Ig=Math.ceil,Mo=Kt.ReactCurrentDispatcher,mu=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,K=0,Ce=null,ke=null,Re=0,rt=0,dr=En(0),Pe=0,xi=null,jn=0,Jo=0,gu=0,ti=null,Qe=null,vu=0,_r=1/0,$t=null,jo=!1,ol=null,mn=null,Yi=!1,un=null,zo=0,ni=0,al=null,fo=-1,ho=0;function Ge(){return(K&6)!==0?Ee():fo!==-1?fo:fo=Ee()}function gn(e){return(e.mode&1)===0?1:(K&2)!==0&&Re!==0?Re&-Re:fg.transition!==null?(ho===0&&(ho=Af()),ho):(e=ae,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e)}function Pt(e,t,n,r){if(50<ni)throw ni=0,al=null,Error(I(185));_i(e,n,r),((K&2)===0||e!==Ce)&&(e===Ce&&((K&2)===0&&(Jo|=n),Pe===4&&sn(e,Re)),tt(e,r),n===1&&K===0&&(t.mode&1)===0&&(_r=Ee()+500,qo&&bn()))}function tt(e,t){var n=e.callbackNode;fm(e,t);var r=So(e,e===Ce?Re:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?dg(td.bind(null,e)):nh(td.bind(null,e)),sg(function(){(K&6)===0&&bn()}),n=null;else{switch(Lf(r)){case 1:n=$l;break;case 4:n=Cf;break;case 16:n=xo;break;case 536870912:n=If;break;default:n=xo}n=tp(n,qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qh(e,t){if(fo=-1,ho=0,(K&6)!==0)throw Error(I(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=So(e,e===Ce?Re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Fo(e,r);else{t=r;var i=K;K|=2;var o=Zh();(Ce!==e||Re!==t)&&($t=null,_r=Ee()+500,Nn(e,t));do try{Ng();break}catch(s){Yh(e,s)}while(1);nu(),Mo.current=o,K=i,ke!==null?t=0:(Ce=null,Re=0,t=Pe)}if(t!==0){if(t===2&&(i=Ds(e),i!==0&&(r=i,t=sl(e,i))),t===1)throw n=xi,Nn(e,0),sn(e,r),tt(e,Ee()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Ag(i)&&(t=Fo(e,r),t===2&&(o=Ds(e),o!==0&&(r=o,t=sl(e,o))),t===1))throw n=xi,Nn(e,0),sn(e,r),tt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Cn(e,Qe,$t);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=vu+500-Ee(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Us(Cn.bind(null,e,Qe,$t),t);break}Cn(e,Qe,$t);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){e.timeoutHandle=Us(Cn.bind(null,e,Qe,$t),r);break}Cn(e,Qe,$t);break;case 5:Cn(e,Qe,$t);break;default:throw Error(I(329))}}}return tt(e,Ee()),e.callbackNode===n?qh.bind(null,e):null}function sl(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Fo(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ll(t)),e}function ll(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Ag(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~gu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if((K&6)!==0)throw Error(I(327));yr();var t=So(e,0);if((t&1)===0)return tt(e,Ee()),null;var n=Fo(e,t);if(e.tag!==0&&n===2){var r=Ds(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=xi,Nn(e,0),sn(e,t),tt(e,Ee()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Qe,$t),tt(e,Ee()),null}function yu(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(_r=Ee()+500,qo&&bn())}}function zn(e){un!==null&&un.tag===0&&(K&6)===0&&yr();var t=K;K|=1;var n=gt.transition,r=ae;try{if(gt.transition=null,ae=1,e)return e()}finally{ae=r,gt.transition=n,K=t,(K&6)===0&&bn()}}function wu(){rt=dr.current,he(dr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ag(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:br(),he(Ke),he(Ue),lu();break;case 5:su(r);break;case 4:br();break;case 13:he(ge);break;case 19:he(ge);break;case 10:ru(r.type._context);break;case 22:case 23:wu()}n=n.return}if(Ce=e,ke=e=vn(e.current,null),Re=rt=t,Pe=0,xi=null,gu=Jo=jn=0,Qe=ti=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}An=null}return e}function Yh(e,t){do{var n=ke;try{if(nu(),lo.current=Oo,Ro){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ro=!1}if(Mn=0,Te=_e=ve=null,Kr=!1,vi=0,mu.current=null,n===null||n.return===null){Pe=1,xi=t,ke=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=l,d=s,y=d.tag;if((d.mode&1)===0&&(y===0||y===11||y===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=Hc(a);if(S!==null){S.flags&=-257,$c(S,a,s,o,t),S.mode&1&&Uc(o,f,t),t=S,l=f;var m=t.updateQueue;if(m===null){var x=new Set;x.add(l),t.updateQueue=x}else m.add(l);break e}else{if((t&1)===0){Uc(o,f,t),xu();break e}l=Error(I(426))}}else if(me&&s.mode&1){var b=Hc(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),$c(b,a,s,o,t),eu(kr(l,s));break e}}o=l=kr(l,s),Pe!==4&&(Pe=2),ti===null?ti=[o]:ti.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Nh(o,l,t);Rc(o,v);break e;case 1:s=l;var h=o.type,u=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(mn===null||!mn.has(u)))){o.flags|=65536,t&=-t,o.lanes|=t;var p=Dh(o,s,t);Rc(o,p);break e}}o=o.return}while(o!==null)}Jh(n)}catch(w){t=w,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Zh(){var e=Mo.current;return Mo.current=Oo,e===null?Oo:e}function xu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ce===null||(jn&268435455)===0&&(Jo&268435455)===0||sn(Ce,Re)}function Fo(e,t){var n=K;K|=2;var r=Zh();(Ce!==e||Re!==t)&&($t=null,Nn(e,t));do try{Lg();break}catch(i){Yh(e,i)}while(1);if(nu(),K=n,Mo.current=r,ke!==null)throw Error(I(261));return Ce=null,Re=0,Pe}function Lg(){for(;ke!==null;)Qh(ke)}function Ng(){for(;ke!==null&&!rm();)Qh(ke)}function Qh(e){var t=ep(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Jh(e):ke=t,mu.current=null}function Jh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kg(n,t,rt),n!==null){ke=n;return}}else{if(n=_g(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function Cn(e,t,n){var r=ae,i=gt.transition;try{gt.transition=null,ae=1,Dg(e,t,n,r)}finally{gt.transition=i,ae=r}return null}function Dg(e,t,n,r){do yr();while(un!==null);if((K&6)!==0)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hm(e,o),e===Ce&&(ke=Ce=null,Re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yi||(Yi=!0,tp(xo,function(){return yr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var a=ae;ae=1;var s=K;K|=4,mu.current=null,Tg(e,n),Gh(n,e),Km(Fs),Eo=!!zs,Fs=zs=null,e.current=n,Cg(n),im(),K=s,ae=a,gt.transition=o}else e.current=n;if(Yi&&(Yi=!1,un=e,zo=i),o=e.pendingLanes,o===0&&(mn=null),sm(n.stateNode),tt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,e=ol,ol=null,e;return(zo&1)!==0&&e.tag!==0&&yr(),o=e.pendingLanes,(o&1)!==0?e===al?ni++:(ni=0,al=e):ni=0,bn(),null}function yr(){if(un!==null){var e=Lf(zo),t=gt.transition,n=ae;try{if(gt.transition=null,ae=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,zo=0,(K&6)!==0)throw Error(I(331));var i=K;for(K|=4,z=e.current;z!==null;){var o=z,a=o.child;if((z.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var f=s[l];for(z=f;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:ei(8,d,o)}var y=d.child;if(y!==null)y.return=d,z=y;else for(;z!==null;){d=z;var g=d.sibling,S=d.return;if($h(d),d===f){z=null;break}if(g!==null){g.return=S,z=g;break}z=S}}}var m=o.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}z=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ei(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,z=v;break e}z=o.return}}var h=e.current;for(z=h;z!==null;){a=z;var u=a.child;if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,z=u;else e:for(a=h;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Qo(9,s)}}catch(w){xe(s,s.return,w)}if(s===a){z=null;break e}var p=s.sibling;if(p!==null){p.return=s.return,z=p;break e}z=s.return}}if(K=i,bn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot($o,e)}catch{}r=!0}return r}finally{ae=n,gt.transition=t}}return!1}function nd(e,t,n){t=kr(n,t),t=Nh(e,t,1),e=pn(e,t,1),t=Ge(),e!==null&&(_i(e,1,t),tt(e,t))}function xe(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=kr(n,e),e=Dh(t,e,1),t=pn(t,e,1),e=Ge(),t!==null&&(_i(t,1,e),tt(t,e));break}}t=t.return}}function Rg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Re&n)===n&&(Pe===4||Pe===3&&(Re&130023424)===Re&&500>Ee()-vu?Nn(e,0):gu|=n),tt(e,t)}function Kh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var n=Ge();e=Qt(e,t),e!==null&&(_i(e,t,n),tt(e,n))}function Og(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function Mg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Kh(e,n)}var ep;ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,bg(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,me&&(t.flags&1048576)!==0&&rh(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;co(e,t),e=t.pendingProps;var i=xr(t,Ue.current);vr(t,n),i=cu(null,t,r,e,i,n);var o=du();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ou(t),i.updater=Yo,t.stateNode=i,i._reactInternals=t,qs(t,r,e,n),t=Qs(null,t,r,!0,o,n)):(t.tag=0,me&&o&&Jl(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zg(r),e=Et(r,e),i){case 0:t=Zs(null,t,r,e,n);break e;case 1:t=Gc(null,t,r,e,n);break e;case 11:t=Wc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,Et(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Zs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Gc(e,t,r,i,n);case 3:e:{if(jh(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sh(e,t),No(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(I(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(I(424)),t),t=Xc(e,t,r,n,i);break e}else for(ot=hn(t.stateNode.containerInfo.firstChild),st=t,me=!0,kt=null,n=dh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=Jt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return fh(t),e===null&&Vs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Bs(r,i)?a=null:o!==null&&Bs(r,o)&&(t.flags|=32),Mh(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&Vs(t),null;case 13:return zh(e,t,n);case 4:return au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Wc(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ce(Ao,r._currentValue),r._currentValue=a,o!==null)if(Tt(o.value,a)){if(o.children===i.children&&!Ke.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=qt(-1,n&-n),l.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?l.next=l:(l.next=d.next,d.next=l),f.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gs(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Gs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=vt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),Vc(e,t,r,i,n);case 15:return Rh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),co(e,t),t.tag=1,et(r)?(e=!0,To(t)):e=!1,vr(t,n),uh(t,r,i),qs(t,r,i,n),Qs(null,t,r,!0,e,n);case 19:return Fh(e,t,n);case 22:return Oh(e,t,n)}throw Error(I(156,t.tag))};function tp(e,t){return Tf(e,t)}function jg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new jg(e,t,n,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zg(e){if(typeof e=="function")return Su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Ul)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function po(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Su(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return Dn(n.children,i,o,t);case Fl:a=8,i|=8;break;case ys:return e=pt(12,n,t,i|2),e.elementType=ys,e.lanes=o,e;case ws:return e=pt(13,n,t,i),e.elementType=ws,e.lanes=o,e;case xs:return e=pt(19,n,t,i),e.elementType=xs,e.lanes=o,e;case cf:return Ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lf:a=10;break e;case uf:a=9;break e;case Bl:a=11;break e;case Ul:a=14;break e;case rn:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=pt(22,e,r,t),e.elementType=cf,e.lanes=n,e.stateNode={isHidden:!1},e}function rs(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function is(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=za(0),this.expirationTimes=za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eu(e,t,n,r,i,o,a,s,l){return e=new Fg(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(o),e}function Bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function np(e){if(!e)return xn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(et(n))return th(e,n,t)}return t}function rp(e,t,n,r,i,o,a,s,l){return e=Eu(n,r,!0,e,i,o,a,s,l),e.context=np(null),n=e.current,r=Ge(),i=gn(n),o=qt(r,i),o.callback=t!=null?t:null,pn(n,o,i),e.current.lanes=i,_i(e,i,r),tt(e,r),e}function ea(e,t,n,r){var i=t.current,o=Ge(),a=gn(i);return n=np(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,a),e!==null&&(Pt(e,i,a,o),so(e,i,a)),a}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Ug(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function ku(e){this._internalRoot=e}ta.prototype.render=ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));ea(e,t,null,null)};ta.prototype.unmount=ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){ea(null,e,null,null)}),t[Zt]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Mf(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Hg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Bo(a);o.call(f)}}var a=rp(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[Zt]=a.current,fi(e.nodeType===8?e.parentNode:e),zn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=Bo(l);s.call(f)}}var l=Eu(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=l,e[Zt]=l.current,fi(e.nodeType===8?e.parentNode:e),zn(function(){ea(t,l,n,r)}),l}function ra(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Bo(a);s.call(l)}}ea(t,a,e,i)}else a=Hg(n,t,e,i,r);return Bo(a)}Nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Wl(t,n|1),tt(t,Ee()),(K&6)===0&&(_r=Ee()+500,bn()))}break;case 13:zn(function(){var r=Qt(e,1);if(r!==null){var i=Ge();Pt(r,e,1,i)}}),bu(e,1)}};Vl=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ge();Pt(t,e,134217728,n)}bu(e,134217728)}};Df=function(e){if(e.tag===13){var t=gn(e),n=Qt(e,t);if(n!==null){var r=Ge();Pt(n,e,t,r)}bu(e,t)}};Rf=function(){return ae};Of=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};As=function(e,t,n){switch(t){case"input":if(bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xo(r);if(!i)throw Error(I(90));ff(r),bs(r,i)}}}break;case"textarea":pf(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Sf=yu;Ef=zn;var $g={usingClientEntryPoint:!1,Events:[Ti,or,Xo,wf,xf,yu]},Hr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wg={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_f(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{$o=Zi.inject(Wg),Mt=Zi}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$g;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(I(200));return Bg(e,t,null,n)};ut.createRoot=function(e,t){if(!_u(e))throw Error(I(299));var n=!1,r="",i=ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Eu(e,1,!1,null,null,n,!1,r,i),e[Zt]=t.current,fi(e.nodeType===8?e.parentNode:e),new ku(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=_f(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return zn(e)};ut.hydrate=function(e,t,n){if(!na(t))throw Error(I(200));return ra(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ip;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rp(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Zt]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ta(t)};ut.render=function(e,t,n){if(!na(t))throw Error(I(200));return ra(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!na(e))throw Error(I(40));return e._reactRootContainer?(zn(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};ut.unstable_batchedUpdates=yu;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!na(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return ra(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(nf);var od=nf.exports;gs.createRoot=od.createRoot,gs.hydrateRoot=od.hydrateRoot;var ul=function(e,t){return ul=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},ul(e,t)};function wt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ul(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var B=function(){return B=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},B.apply(this,arguments)};function Si(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Rt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ia={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Pu=Ie?Symbol.for("react.element"):60103,Tu=Ie?Symbol.for("react.portal"):60106,oa=Ie?Symbol.for("react.fragment"):60107,aa=Ie?Symbol.for("react.strict_mode"):60108,sa=Ie?Symbol.for("react.profiler"):60114,la=Ie?Symbol.for("react.provider"):60109,ua=Ie?Symbol.for("react.context"):60110,Cu=Ie?Symbol.for("react.async_mode"):60111,ca=Ie?Symbol.for("react.concurrent_mode"):60111,da=Ie?Symbol.for("react.forward_ref"):60112,fa=Ie?Symbol.for("react.suspense"):60113,Vg=Ie?Symbol.for("react.suspense_list"):60120,ha=Ie?Symbol.for("react.memo"):60115,pa=Ie?Symbol.for("react.lazy"):60116,Gg=Ie?Symbol.for("react.block"):60121,Xg=Ie?Symbol.for("react.fundamental"):60117,qg=Ie?Symbol.for("react.responder"):60118,Yg=Ie?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pu:switch(e=e.type,e){case Cu:case ca:case oa:case sa:case aa:case fa:return e;default:switch(e=e&&e.$$typeof,e){case ua:case da:case pa:case ha:case la:return e;default:return t}}case Tu:return t}}}function op(e){return dt(e)===ca}se.AsyncMode=Cu;se.ConcurrentMode=ca;se.ContextConsumer=ua;se.ContextProvider=la;se.Element=Pu;se.ForwardRef=da;se.Fragment=oa;se.Lazy=pa;se.Memo=ha;se.Portal=Tu;se.Profiler=sa;se.StrictMode=aa;se.Suspense=fa;se.isAsyncMode=function(e){return op(e)||dt(e)===Cu};se.isConcurrentMode=op;se.isContextConsumer=function(e){return dt(e)===ua};se.isContextProvider=function(e){return dt(e)===la};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pu};se.isForwardRef=function(e){return dt(e)===da};se.isFragment=function(e){return dt(e)===oa};se.isLazy=function(e){return dt(e)===pa};se.isMemo=function(e){return dt(e)===ha};se.isPortal=function(e){return dt(e)===Tu};se.isProfiler=function(e){return dt(e)===sa};se.isStrictMode=function(e){return dt(e)===aa};se.isSuspense=function(e){return dt(e)===fa};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oa||e===ca||e===sa||e===aa||e===fa||e===Vg||typeof e=="object"&&e!==null&&(e.$$typeof===pa||e.$$typeof===ha||e.$$typeof===la||e.$$typeof===ua||e.$$typeof===da||e.$$typeof===Xg||e.$$typeof===qg||e.$$typeof===Yg||e.$$typeof===Gg)};se.typeOf=dt;(function(e){e.exports=se})(ia);var Iu=ia.exports,Zg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Au={};Au[Iu.ForwardRef]=Jg;Au[Iu.Memo]=ap;function ad(e){return Iu.isMemo(e)?ap:Au[e.$$typeof]||Zg}var Kg=Object.defineProperty,e1=Object.getOwnPropertyNames,sd=Object.getOwnPropertySymbols,t1=Object.getOwnPropertyDescriptor,n1=Object.getPrototypeOf,ld=Object.prototype;function sp(e,t,n){if(typeof t!="string"){if(ld){var r=n1(t);r&&r!==ld&&sp(e,r,n)}var i=e1(t);sd&&(i=i.concat(sd(t)));for(var o=ad(e),a=ad(t),s=0;s<i.length;++s){var l=i[s];if(!Qg[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var f=t1(t,l);try{Kg(e,l,f)}catch{}}}}return e}var r1=sp;function lp(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var Z;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Z||(Z={}));var fe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(fe||(fe={}));var Pr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Pr||(Pr={}));function ud(e){return e.type===fe.literal}function i1(e){return e.type===fe.argument}function up(e){return e.type===fe.number}function cp(e){return e.type===fe.date}function dp(e){return e.type===fe.time}function fp(e){return e.type===fe.select}function hp(e){return e.type===fe.plural}function o1(e){return e.type===fe.pound}function pp(e){return e.type===fe.tag}function mp(e){return!!(e&&typeof e=="object"&&e.type===Pr.number)}function cl(e){return!!(e&&typeof e=="object"&&e.type===Pr.dateTime)}var gp=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,a1=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function s1(e){var t={};return e.replace(a1,function(n){var r=n.length;switch(n[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"short":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var l1=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function u1(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(l1).filter(function(g){return g.length>0}),n=[],r=0,i=t;r<i.length;r++){var o=i[r],a=o.split("/");if(a.length===0)throw new Error("Invalid number skeleton");for(var s=a[0],l=a.slice(1),f=0,d=l;f<d.length;f++){var y=d[f];if(y.length===0)throw new Error("Invalid number skeleton")}n.push({stem:s,options:l})}return n}function c1(e){return e.replace(/^(.*?)-/,"")}var cd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,vp=/^(@+)?(\+|#+)?[rs]?$/g,d1=/(\*)(0+)|(#+)(0+)|(0+)/g,yp=/^(0+)$/;function dd(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(vp,function(n,r,i){return typeof i!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):i==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof i=="string"?i.length:0)),""}),t}function wp(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function f1(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!yp.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function fd(e){var t={},n=wp(e);return n||t}function h1(e){for(var t={},n=0,r=e;n<r.length;n++){var i=r[n];switch(i.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=i.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=c1(i.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=B(B(B({},t),{notation:"scientific"}),i.options.reduce(function(l,f){return B(B({},l),fd(f))},{}));continue;case"engineering":t=B(B(B({},t),{notation:"engineering"}),i.options.reduce(function(l,f){return B(B({},l),fd(f))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(i.options[0]);continue;case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");i.options[0].replace(d1,function(l,f,d,y,g,S){if(f)t.minimumIntegerDigits=d.length;else{if(y&&g)throw new Error("We currently do not support maximum integer digits");if(S)throw new Error("We currently do not support exact integer digits")}return""});continue}if(yp.test(i.stem)){t.minimumIntegerDigits=i.stem.length;continue}if(cd.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");i.stem.replace(cd,function(l,f,d,y,g,S){return d==="*"?t.minimumFractionDigits=f.length:y&&y[0]==="#"?t.maximumFractionDigits=y.length:g&&S?(t.minimumFractionDigits=g.length,t.maximumFractionDigits=g.length+S.length):(t.minimumFractionDigits=f.length,t.maximumFractionDigits=f.length),""});var o=i.options[0];o==="w"?t=B(B({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=B(B({},t),dd(o)));continue}if(vp.test(i.stem)){t=B(B({},t),dd(i.stem));continue}var a=wp(i.stem);a&&(t=B(B({},t),a));var s=f1(i.stem);s&&(t=B(B({},t),s))}return t}var Qi={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function p1(e,t){for(var n="",r=0;r<e.length;r++){var i=e.charAt(r);if(i==="j"){for(var o=0;r+1<e.length&&e.charAt(r+1)===i;)o++,r++;var a=1+(o&1),s=o<2?1:3+(o>>1),l="a",f=m1(t);for((f=="H"||f=="k")&&(s=0);s-- >0;)n+=l;for(;a-- >0;)n=f+n}else i==="J"?n+="H":n+=i}return n}function m1(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,r;n!=="root"&&(r=e.maximize().region);var i=Qi[r||""]||Qi[n||""]||Qi["".concat(n,"-001")]||Qi["001"];return i[0]}var os,g1=new RegExp("^".concat(gp.source,"*")),v1=new RegExp("".concat(gp.source,"*$"));function J(e,t){return{start:e,end:t}}var y1=!!String.prototype.startsWith,w1=!!String.fromCodePoint,x1=!!Object.fromEntries,S1=!!String.prototype.codePointAt,E1=!!String.prototype.trimStart,b1=!!String.prototype.trimEnd,k1=!!Number.isSafeInteger,_1=k1?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},dl=!0;try{var P1=Sp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");dl=((os=P1.exec("a"))===null||os===void 0?void 0:os[0])==="a"}catch{dl=!1}var hd=y1?function(t,n,r){return t.startsWith(n,r)}:function(t,n,r){return t.slice(r,r+n.length)===n},fl=w1?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",i=t.length,o=0,a;i>o;){if(a=t[o++],a>1114111)throw RangeError(a+" is not a valid code point");r+=a<65536?String.fromCharCode(a):String.fromCharCode(((a-=65536)>>10)+55296,a%1024+56320)}return r},pd=x1?Object.fromEntries:function(t){for(var n={},r=0,i=t;r<i.length;r++){var o=i[r],a=o[0],s=o[1];n[a]=s}return n},xp=S1?function(t,n){return t.codePointAt(n)}:function(t,n){var r=t.length;if(!(n<0||n>=r)){var i=t.charCodeAt(n),o;return i<55296||i>56319||n+1===r||(o=t.charCodeAt(n+1))<56320||o>57343?i:(i-55296<<10)+(o-56320)+65536}},T1=E1?function(t){return t.trimStart()}:function(t){return t.replace(g1,"")},C1=b1?function(t){return t.trimEnd()}:function(t){return t.replace(v1,"")};function Sp(e,t){return new RegExp(e,t)}var hl;if(dl){var md=Sp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");hl=function(t,n){var r;md.lastIndex=n;var i=md.exec(t);return(r=i[1])!==null&&r!==void 0?r:""}}else hl=function(t,n){for(var r=[];;){var i=xp(t,n);if(i===void 0||Ep(i)||N1(i))break;r.push(i),n+=i>=65536?2:1}return fl.apply(void 0,r)};var I1=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,r){for(var i=[];!this.isEOF();){var o=this.char();if(o===123){var a=this.parseArgument(t,r);if(a.err)return a;i.push(a.val)}else{if(o===125&&t>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var s=this.clonePosition();this.bump(),i.push({type:fe.pound,location:J(s,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Z.UNMATCHED_CLOSING_TAG,J(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&pl(this.peek()||0)){var a=this.parseTag(t,n);if(a.err)return a;i.push(a.val)}else{var a=this.parseLiteral(t,n);if(a.err)return a;i.push(a.val)}}}return{val:i,err:null}},e.prototype.parseTag=function(t,n){var r=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:fe.literal,value:"<".concat(i,"/>"),location:J(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(t+1,n,!0);if(o.err)return o;var a=o.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!pl(this.char()))return this.error(Z.INVALID_TAG,J(s,this.clonePosition()));var l=this.clonePosition(),f=this.parseTagName();return i!==f?this.error(Z.UNMATCHED_CLOSING_TAG,J(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:fe.tag,value:i,children:a,location:J(r,this.clonePosition())},err:null}:this.error(Z.INVALID_TAG,J(s,this.clonePosition())))}else return this.error(Z.UNCLOSED_TAG,J(r,this.clonePosition()))}else return this.error(Z.INVALID_TAG,J(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&L1(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var r=this.clonePosition(),i="";;){var o=this.tryParseQuote(n);if(o){i+=o;continue}var a=this.tryParseUnquoted(t,n);if(a){i+=a;continue}var s=this.tryParseLeftAngleBracket();if(s){i+=s;continue}break}var l=J(r,this.clonePosition());return{val:{type:fe.literal,value:i,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!A1(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(r);this.bump()}return fl.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(n==="plural"||n==="selectordinal")||r===125&&t>0?null:(this.bump(),fl(r))},e.prototype.parseArgument=function(t,n){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE,J(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Z.EMPTY_ARGUMENT,J(r,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(Z.MALFORMED_ARGUMENT,J(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE,J(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:fe.argument,value:i,location:J(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE,J(r,this.clonePosition())):this.parseArgumentOptions(t,n,i,r);default:return this.error(Z.MALFORMED_ARGUMENT,J(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),r=hl(this.message,n),i=n+r.length;this.bumpTo(i);var o=this.clonePosition(),a=J(t,o);return{value:r,location:a}},e.prototype.parseArgumentOptions=function(t,n,r,i){var o,a=this.clonePosition(),s=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(s){case"":return this.error(Z.EXPECT_ARGUMENT_TYPE,J(a,l));case"number":case"date":case"time":{this.bumpSpace();var f=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var g=C1(y.val);if(g.length===0)return this.error(Z.EXPECT_ARGUMENT_STYLE,J(this.clonePosition(),this.clonePosition()));var S=J(d,this.clonePosition());f={style:g,styleLocation:S}}var m=this.tryParseArgumentClose(i);if(m.err)return m;var x=J(i,this.clonePosition());if(f&&hd(f==null?void 0:f.style,"::",0)){var b=T1(f.style.slice(2));if(s==="number"){var y=this.parseNumberSkeletonFromString(b,f.styleLocation);return y.err?y:{val:{type:fe.number,value:r,location:x,style:y.val},err:null}}else{if(b.length===0)return this.error(Z.EXPECT_DATE_TIME_SKELETON,x);var v=b;this.locale&&(v=p1(b,this.locale));var g={type:Pr.dateTime,pattern:v,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?s1(v):{}},h=s==="date"?fe.date:fe.time;return{val:{type:h,value:r,location:x,style:g},err:null}}}return{val:{type:s==="number"?fe.number:s==="date"?fe.date:fe.time,value:r,location:x,style:(o=f==null?void 0:f.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var u=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Z.EXPECT_SELECT_ARGUMENT_OPTIONS,J(u,B({},u)));this.bumpSpace();var p=this.parseIdentifierIfPossible(),w=0;if(s!=="select"&&p.value==="offset"){if(!this.bumpIf(":"))return this.error(Z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,J(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Z.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),p=this.parseIdentifierIfPossible(),w=y.val}var E=this.tryParsePluralOrSelectOptions(t,s,n,p);if(E.err)return E;var m=this.tryParseArgumentClose(i);if(m.err)return m;var _=J(i,this.clonePosition());return s==="select"?{val:{type:fe.select,value:r,options:pd(E.val),location:_},err:null}:{val:{type:fe.plural,value:r,options:pd(E.val),offset:w,pluralType:s==="plural"?"cardinal":"ordinal",location:_},err:null}}default:return this.error(Z.INVALID_ARGUMENT_TYPE,J(a,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE,J(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Z.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,J(i,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var r=[];try{r=u1(t)}catch{return this.error(Z.INVALID_NUMBER_SKELETON,n)}return{val:{type:Pr.number,tokens:r,location:n,parsedOptions:this.shouldParseSkeletons?h1(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,r,i){for(var o,a=!1,s=[],l=new Set,f=i.value,d=i.location;;){if(f.length===0){var y=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var g=this.tryParseDecimalInteger(Z.EXPECT_PLURAL_ARGUMENT_SELECTOR,Z.INVALID_PLURAL_ARGUMENT_SELECTOR);if(g.err)return g;d=J(y,this.clonePosition()),f=this.message.slice(y.offset,this.offset())}else break}if(l.has(f))return this.error(n==="select"?Z.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Z.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);f==="other"&&(a=!0),this.bumpSpace();var S=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Z.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Z.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,J(this.clonePosition(),this.clonePosition()));var m=this.parseMessage(t+1,n,r);if(m.err)return m;var x=this.tryParseArgumentClose(S);if(x.err)return x;s.push([f,{value:m.val,location:J(S,this.clonePosition())}]),l.add(f),this.bumpSpace(),o=this.parseIdentifierIfPossible(),f=o.value,d=o.location}return s.length===0?this.error(n==="select"?Z.EXPECT_SELECT_ARGUMENT_SELECTOR:Z.EXPECT_PLURAL_ARGUMENT_SELECTOR,J(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(Z.MISSING_OTHER_CLAUSE,J(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var r=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var o=!1,a=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)o=!0,a=a*10+(s-48),this.bump();else break}var l=J(i,this.clonePosition());return o?(a*=r,_1(a)?{val:a,err:null}:this.error(n,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=xp(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(hd(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),r=this.message.indexOf(t,n);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ep(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),r=this.message.charCodeAt(n+(t>=65536?2:1));return r!=null?r:null},e}();function pl(e){return e>=97&&e<=122||e>=65&&e<=90}function A1(e){return pl(e)||e===47}function L1(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ep(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function N1(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ml(e){e.forEach(function(t){if(delete t.location,fp(t)||hp(t))for(var n in t.options)delete t.options[n].location,ml(t.options[n].value);else up(t)&&mp(t.style)||(cp(t)||dp(t))&&cl(t.style)?delete t.style.location:pp(t)&&ml(t.children)})}function D1(e,t){t===void 0&&(t={}),t=B({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new I1(e,t).parse();if(n.err){var r=SyntaxError(Z[n.err.kind]);throw r.location=n.err.location,r.originalMessage=n.err.message,r}return t!=null&&t.captureLocation||ml(n.val),n.val}function Nt(e,t){var n=t&&t.cache?t.cache:F1,r=t&&t.serializer?t.serializer:z1,i=t&&t.strategy?t.strategy:O1;return i(e,{cache:n,serializer:r})}function R1(e){return e==null||typeof e=="number"||typeof e=="boolean"}function bp(e,t,n,r){var i=R1(r)?r:n(r),o=t.get(i);return typeof o>"u"&&(o=e.call(this,r),t.set(i,o)),o}function kp(e,t,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),o=t.get(i);return typeof o>"u"&&(o=e.apply(this,r),t.set(i,o)),o}function Lu(e,t,n,r,i){return n.bind(t,e,r,i)}function O1(e,t){var n=e.length===1?bp:kp;return Lu(e,this,n,t.cache.create(),t.serializer)}function M1(e,t){return Lu(e,this,kp,t.cache.create(),t.serializer)}function j1(e,t){return Lu(e,this,bp,t.cache.create(),t.serializer)}var z1=function(){return JSON.stringify(arguments)};function Nu(){this.cache=Object.create(null)}Nu.prototype.get=function(e){return this.cache[e]};Nu.prototype.set=function(e,t){this.cache[e]=t};var F1={create:function(){return new Nu}},Dt={variadic:M1,monadic:j1},zt;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(zt||(zt={}));var kn=function(e){wt(t,e);function t(n,r,i){var o=e.call(this,n)||this;return o.code=r,o.originalMessage=i,o}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),gd=function(e){wt(t,e);function t(n,r,i,o){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(r,'". Options are "').concat(Object.keys(i).join('", "'),'"'),zt.INVALID_VALUE,o)||this}return t}(kn),B1=function(e){wt(t,e);function t(n,r,i){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(r),zt.INVALID_VALUE,i)||this}return t}(kn),U1=function(e){wt(t,e);function t(n,r){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(r,'"'),zt.MISSING_VALUE,r)||this}return t}(kn),We;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(We||(We={}));function H1(e){return e.length<2?e:e.reduce(function(t,n){var r=t[t.length-1];return!r||r.type!==We.literal||n.type!==We.literal?t.push(n):r.value+=n.value,t},[])}function _p(e){return typeof e=="function"}function mo(e,t,n,r,i,o,a){if(e.length===1&&ud(e[0]))return[{type:We.literal,value:e[0].value}];for(var s=[],l=0,f=e;l<f.length;l++){var d=f[l];if(ud(d)){s.push({type:We.literal,value:d.value});continue}if(o1(d)){typeof o=="number"&&s.push({type:We.literal,value:n.getNumberFormat(t).format(o)});continue}var y=d.value;if(!(i&&y in i))throw new U1(y,a);var g=i[y];if(i1(d)){(!g||typeof g=="string"||typeof g=="number")&&(g=typeof g=="string"||typeof g=="number"?String(g):""),s.push({type:typeof g=="string"?We.literal:We.object,value:g});continue}if(cp(d)){var S=typeof d.style=="string"?r.date[d.style]:cl(d.style)?d.style.parsedOptions:void 0;s.push({type:We.literal,value:n.getDateTimeFormat(t,S).format(g)});continue}if(dp(d)){var S=typeof d.style=="string"?r.time[d.style]:cl(d.style)?d.style.parsedOptions:r.time.medium;s.push({type:We.literal,value:n.getDateTimeFormat(t,S).format(g)});continue}if(up(d)){var S=typeof d.style=="string"?r.number[d.style]:mp(d.style)?d.style.parsedOptions:void 0;S&&S.scale&&(g=g*(S.scale||1)),s.push({type:We.literal,value:n.getNumberFormat(t,S).format(g)});continue}if(pp(d)){var m=d.children,x=d.value,b=i[x];if(!_p(b))throw new B1(x,"function",a);var v=mo(m,t,n,r,i,o),h=b(v.map(function(w){return w.value}));Array.isArray(h)||(h=[h]),s.push.apply(s,h.map(function(w){return{type:typeof w=="string"?We.literal:We.object,value:w}}))}if(fp(d)){var u=d.options[g]||d.options.other;if(!u)throw new gd(d.value,g,Object.keys(d.options),a);s.push.apply(s,mo(u.value,t,n,r,i));continue}if(hp(d)){var u=d.options["=".concat(g)];if(!u){if(!Intl.PluralRules)throw new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,zt.MISSING_INTL_API,a);var p=n.getPluralRules(t,{type:d.pluralType}).select(g-(d.offset||0));u=d.options[p]||d.options.other}if(!u)throw new gd(d.value,g,Object.keys(d.options),a);s.push.apply(s,mo(u.value,t,n,r,i,g-(d.offset||0)));continue}}return H1(s)}function $1(e,t){return t?B(B(B({},e||{}),t||{}),Object.keys(e).reduce(function(n,r){return n[r]=B(B({},e[r]),t[r]||{}),n},{})):e}function W1(e,t){return t?Object.keys(e).reduce(function(n,r){return n[r]=$1(e[r],t[r]),n},B({},e)):e}function as(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function V1(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Nt(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,Rt([void 0],n,!1)))},{cache:as(e.number),strategy:Dt.variadic}),getDateTimeFormat:Nt(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,Rt([void 0],n,!1)))},{cache:as(e.dateTime),strategy:Dt.variadic}),getPluralRules:Nt(function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,Rt([void 0],n,!1)))},{cache:as(e.pluralRules),strategy:Dt.variadic})}}var Pp=function(){function e(t,n,r,i){n===void 0&&(n=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(a){var s=o.formatToParts(a);if(s.length===1)return s[0].value;var l=s.reduce(function(f,d){return!f.length||d.type!==We.literal||typeof f[f.length-1]!="string"?f.push(d.value):f[f.length-1]+=d.value,f},[]);return l.length<=1?l[0]||"":l},this.formatToParts=function(a){return mo(o.ast,o.locales,o.formatters,o.formats,a,void 0,o.message)},this.resolvedOptions=function(){var a;return{locale:((a=o.resolvedLocale)===null||a===void 0?void 0:a.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:i==null?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=W1(e.formats,r),this.formatters=i&&i.formatters||V1(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=D1,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),He;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(He||(He={}));var nt=function(e){wt(t,e);function t(n,r,i){var o=this,a=i?i instanceof Error?i:new Error(String(i)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(r,`
`).concat(a?`
`.concat(a.message,`
`).concat(a.stack):""))||this,o.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,t),o}return t}(Error),G1=function(e){wt(t,e);function t(n,r){return e.call(this,He.UNSUPPORTED_FORMATTER,n,r)||this}return t}(nt),X1=function(e){wt(t,e);function t(n,r){return e.call(this,He.INVALID_CONFIG,n,r)||this}return t}(nt),vd=function(e){wt(t,e);function t(n,r){return e.call(this,He.MISSING_DATA,n,r)||this}return t}(nt),Du=function(e){wt(t,e);function t(n,r,i){return e.call(this,He.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(r,`
`),i)||this}return t}(nt),ss=function(e){wt(t,e);function t(n,r,i,o){var a=e.call(this,"".concat(n,`
MessageID: `).concat(i==null?void 0:i.id,`
Default Message: `).concat(i==null?void 0:i.defaultMessage,`
Description: `).concat(i==null?void 0:i.description,`
`),r,o)||this;return a.descriptor=i,a}return t}(Du),q1=function(e){wt(t,e);function t(n,r){var i=e.call(this,He.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(r,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(o){var a;return(a=o.value)!==null&&a!==void 0?a:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return i.descriptor=n,i}return t}(nt);function Un(e,t,n){return n===void 0&&(n={}),t.reduce(function(r,i){return i in e?r[i]=e[i]:i in n&&(r[i]=n[i]),r},{})}var Y1=function(e){},Z1=function(e){},Tp={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Y1,onWarn:Z1};function Cp(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Pn(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Q1(e){e===void 0&&(e=Cp());var t=Intl.RelativeTimeFormat,n=Intl.ListFormat,r=Intl.DisplayNames,i=Nt(function(){for(var s,l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return new((s=Intl.DateTimeFormat).bind.apply(s,Rt([void 0],l,!1)))},{cache:Pn(e.dateTime),strategy:Dt.variadic}),o=Nt(function(){for(var s,l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return new((s=Intl.NumberFormat).bind.apply(s,Rt([void 0],l,!1)))},{cache:Pn(e.number),strategy:Dt.variadic}),a=Nt(function(){for(var s,l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return new((s=Intl.PluralRules).bind.apply(s,Rt([void 0],l,!1)))},{cache:Pn(e.pluralRules),strategy:Dt.variadic});return{getDateTimeFormat:i,getNumberFormat:o,getMessageFormat:Nt(function(s,l,f,d){return new Pp(s,l,f,B({formatters:{getNumberFormat:o,getDateTimeFormat:i,getPluralRules:a}},d||{}))},{cache:Pn(e.message),strategy:Dt.variadic}),getRelativeTimeFormat:Nt(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(t.bind.apply(t,Rt([void 0],s,!1)))},{cache:Pn(e.relativeTime),strategy:Dt.variadic}),getPluralRules:a,getListFormat:Nt(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(n.bind.apply(n,Rt([void 0],s,!1)))},{cache:Pn(e.list),strategy:Dt.variadic}),getDisplayNames:Nt(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return new(r.bind.apply(r,Rt([void 0],s,!1)))},{cache:Pn(e.displayNames),strategy:Dt.variadic})}}function Ru(e,t,n,r){var i=e&&e[t],o;if(i&&(o=i[n]),o)return o;r(new G1("No ".concat(t," format named: ").concat(n)))}function Ji(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=B({timeZone:t},e[r]),n},{})}function yd(e,t){var n=Object.keys(B(B({},e),t));return n.reduce(function(r,i){return r[i]=B(B({},e[i]||{}),t[i]||{}),r},{})}function wd(e,t){if(!t)return e;var n=Pp.formats;return B(B(B({},n),e),{date:yd(Ji(n.date,t),Ji(e.date||{},t)),time:yd(Ji(n.time,t),Ji(e.time||{},t))})}var gl=function(e,t,n,r,i){var o=e.locale,a=e.formats,s=e.messages,l=e.defaultLocale,f=e.defaultFormats,d=e.fallbackOnEmptyString,y=e.onError,g=e.timeZone,S=e.defaultRichTextElements;n===void 0&&(n={id:""});var m=n.id,x=n.defaultMessage;lp(!!m,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(m),v=s&&Object.prototype.hasOwnProperty.call(s,b)&&s[b];if(Array.isArray(v)&&v.length===1&&v[0].type===fe.literal)return v[0].value;if(!r&&v&&typeof v=="string"&&!S)return v.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=B(B({},S),r||{}),a=wd(a,g),f=wd(f,g),!v){if(d===!1&&v==="")return v;if((!x||o&&o.toLowerCase()!==l.toLowerCase())&&y(new q1(n,o)),x)try{var h=t.getMessageFormat(x,l,f,i);return h.format(r)}catch(u){return y(new ss('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),o,n,u)),typeof x=="string"?x:b}return b}try{var h=t.getMessageFormat(v,o,a,B({formatters:t},i||{}));return h.format(r)}catch(u){y(new ss('Error formatting message: "'.concat(b,'", using ').concat(x?"default message":"id"," as fallback."),o,n,u))}if(x)try{var h=t.getMessageFormat(x,l,f,i);return h.format(r)}catch(u){y(new ss('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),o,n,u))}return typeof v=="string"?v:typeof x=="string"?x:b},Ip=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ma(e,t,n,r){var i=e.locale,o=e.formats,a=e.onError,s=e.timeZone;r===void 0&&(r={});var l=r.format,f=B(B({},s&&{timeZone:s}),l&&Ru(o,t,l,a)),d=Un(r,Ip,f);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=B(B({},d),{hour:"numeric",minute:"numeric"})),n(i,d)}function J1(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],a=o===void 0?{}:o,s=typeof i=="string"?new Date(i||0):i;try{return ma(e,"date",t,a).format(s)}catch(l){e.onError(new nt(He.FORMAT_ERROR,"Error formatting date.",l))}return String(s)}function K1(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],a=o===void 0?{}:o,s=typeof i=="string"?new Date(i||0):i;try{return ma(e,"time",t,a).format(s)}catch(l){e.onError(new nt(He.FORMAT_ERROR,"Error formatting time.",l))}return String(s)}function ev(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],a=n[2],s=a===void 0?{}:a,l=e.timeZone,f=e.locale,d=e.onError,y=Un(s,Ip,l?{timeZone:l}:{});try{return t(f,y).formatRange(i,o)}catch(g){d(new nt(He.FORMAT_ERROR,"Error formatting date time range.",g))}return String(i)}function tv(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],a=o===void 0?{}:o,s=typeof i=="string"?new Date(i||0):i;try{return ma(e,"date",t,a).formatToParts(s)}catch(l){e.onError(new nt(He.FORMAT_ERROR,"Error formatting date.",l))}return[]}function nv(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n[0],o=n[1],a=o===void 0?{}:o,s=typeof i=="string"?new Date(i||0):i;try{return ma(e,"time",t,a).formatToParts(s)}catch(l){e.onError(new nt(He.FORMAT_ERROR,"Error formatting time.",l))}return[]}var rv=["style","type","fallback"];function iv(e,t,n,r){var i=e.locale,o=e.onError,a=Intl.DisplayNames;a||o(new kn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,zt.MISSING_INTL_API));var s=Un(r,rv);try{return t(i,s).of(n)}catch(l){o(new nt(He.FORMAT_ERROR,"Error formatting display name.",l))}}var ov=["type","style"],xd=Date.now();function av(e){return"".concat(xd,"_").concat(e,"_").concat(xd)}function sv(e,t,n,r){r===void 0&&(r={});var i=Ap(e,t,n,r).reduce(function(o,a){var s=a.value;return typeof s!="string"?o.push(s):typeof o[o.length-1]=="string"?o[o.length-1]+=s:o.push(s),o},[]);return i.length===1?i[0]:i.length===0?"":i}function Ap(e,t,n,r){var i=e.locale,o=e.onError;r===void 0&&(r={});var a=Intl.ListFormat;a||o(new kn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,zt.MISSING_INTL_API));var s=Un(r,ov);try{var l={},f=n.map(function(d,y){if(typeof d=="object"){var g=av(y);return l[g]=d,g}return String(d)});return t(i,s).formatToParts(f).map(function(d){return d.type==="literal"?d:B(B({},d),{value:l[d.value]||d.value})})}catch(d){o(new nt(He.FORMAT_ERROR,"Error formatting list.",d))}return n}var lv=["type"];function uv(e,t,n,r){var i=e.locale,o=e.onError;r===void 0&&(r={}),Intl.PluralRules||o(new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,zt.MISSING_INTL_API));var a=Un(r,lv);try{return t(i,a).select(n)}catch(s){o(new Du("Error formatting plural.",i,s))}return"other"}var cv=["numeric","style"];function dv(e,t,n){var r=e.locale,i=e.formats,o=e.onError;n===void 0&&(n={});var a=n.format,s=!!a&&Ru(i,"relative",a,o)||{},l=Un(n,cv,s);return t(r,l)}function fv(e,t,n,r,i){i===void 0&&(i={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||e.onError(new kn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,zt.MISSING_INTL_API));try{return dv(e,t,i).format(n,r)}catch(a){e.onError(new Du("Error formatting relative time.",e.locale,a))}return String(n)}var hv=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function Lp(e,t,n){var r=e.locale,i=e.formats,o=e.onError;n===void 0&&(n={});var a=n.format,s=a&&Ru(i,"number",a,o)||{},l=Un(n,hv,s);return t(r,l)}function pv(e,t,n,r){r===void 0&&(r={});try{return Lp(e,t,r).format(n)}catch(i){e.onError(new nt(He.FORMAT_ERROR,"Error formatting number.",i))}return String(n)}function mv(e,t,n,r){r===void 0&&(r={});try{return Lp(e,t,r).formatToParts(n)}catch(i){e.onError(new nt(He.FORMAT_ERROR,"Error formatting number.",i))}return[]}function gv(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function vv(e){e.onWarn&&e.defaultRichTextElements&&gv(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function yv(e,t){var n=Q1(t),r=B(B({},Tp),e),i=r.locale,o=r.defaultLocale,a=r.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&a?a(new vd('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&a&&a(new vd('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(a&&a(new X1('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),vv(r),B(B({},r),{formatters:n,formatNumber:pv.bind(null,r,n.getNumberFormat),formatNumberToParts:mv.bind(null,r,n.getNumberFormat),formatRelativeTime:fv.bind(null,r,n.getRelativeTimeFormat),formatDate:J1.bind(null,r,n.getDateTimeFormat),formatDateToParts:tv.bind(null,r,n.getDateTimeFormat),formatTime:K1.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:ev.bind(null,r,n.getDateTimeFormat),formatTimeToParts:nv.bind(null,r,n.getDateTimeFormat),formatPlural:uv.bind(null,r,n.getPluralRules),formatMessage:gl.bind(null,r,n),$t:gl.bind(null,r,n),formatList:sv.bind(null,r,n.getListFormat),formatListToParts:Ap.bind(null,r,n.getListFormat),formatDisplayName:iv.bind(null,r,n.getDisplayNames)})}function Np(e){lp(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Dp=B(B({},Tp),{textComponent:U.exports.Fragment});function wv(e){return function(t){return e(U.exports.Children.toArray(t))}}function vl(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var ga={exports:{}},va={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=U.exports,Sv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,kv=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_v={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bv.call(t,r)&&!_v.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sv,type:e,key:o,ref:a,props:i,_owner:kv.current}}va.Fragment=Ev;va.jsx=Rp;va.jsxs=Rp;(function(e){e.exports=va})(ga);const M=ga.exports.Fragment,c=ga.exports.jsx,k=ga.exports.jsxs;var Ou=U.exports.createContext(null);Ou.Consumer;var Pv=Ou.Provider,Tv=Pv,Cv=Ou;function Mu(){var e=U.exports.useContext(Cv);return Np(e),e}var yl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(yl||(yl={}));var wl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(wl||(wl={}));function Op(e){var t=function(n){var r=Mu(),i=n.value,o=n.children,a=Si(n,["value","children"]),s=typeof i=="string"?new Date(i||0):i,l=e==="formatDate"?r.formatDateToParts(s,a):r.formatTimeToParts(s,a);return o(l)};return t.displayName=wl[e],t}function Ii(e){var t=function(n){var r=Mu(),i=n.value,o=n.children,a=Si(n,["value","children"]),s=r[e](i,a);if(typeof o=="function")return o(s);var l=r.textComponent||U.exports.Fragment;return c(l,{children:s})};return t.displayName=yl[e],t}function ls(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function Mp(e){return e&&Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]=_p(r)?wv(r):r,t},{})}var Sd=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var a=Mp(r),s=gl.apply(void 0,Rt([e,t,n,a],i,!1));return Array.isArray(s)?U.exports.Children.toArray(s):s},Ed=function(e,t){var n=e.defaultRichTextElements,r=Si(e,["defaultRichTextElements"]),i=Mp(n),o=yv(B(B(B({},Dp),r),{defaultRichTextElements:i}),t),a={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:i};return B(B({},o),{formatMessage:Sd.bind(null,a,o.formatters),$t:Sd.bind(null,a,o.formatters)})},Iv=function(e){wt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.cache=Cp(),n.state={cache:n.cache,intl:Ed(ls(n.props),n.cache),prevConfig:ls(n.props)},n}return t.getDerivedStateFromProps=function(n,r){var i=r.prevConfig,o=r.cache,a=ls(n);return vl(i,a)?null:{intl:Ed(a,o),prevConfig:a}},t.prototype.render=function(){return Np(this.state.intl),c(Tv,{value:this.state.intl,children:this.props.children})},t.displayName="IntlProvider",t.defaultProps=Dp,t}(U.exports.PureComponent);const Av=Iv;function Lv(e,t){var n=e.values,r=Si(e,["values"]),i=t.values,o=Si(t,["values"]);return vl(i,n)&&vl(r,o)}function jp(e){var t=Mu(),n=t.formatMessage,r=t.textComponent,i=r===void 0?U.exports.Fragment:r,o=e.id,a=e.description,s=e.defaultMessage,l=e.values,f=e.children,d=e.tagName,y=d===void 0?i:d,g=e.ignoreTag,S={id:o,description:a,defaultMessage:s},m=n(S,l,{ignoreTag:g});return typeof f=="function"?f(Array.isArray(m)?m:[m]):y?c(y,{children:U.exports.Children.toArray(m)}):c(M,{children:m})}jp.displayName="FormattedMessage";var zp=U.exports.memo(jp,Lv);zp.displayName="MemoizedFormattedMessage";const F=zp;Ii("formatDate");Ii("formatTime");Ii("formatNumber");Ii("formatList");Ii("formatDisplayName");Op("formatDate");Op("formatTime");const Nv="Portf\xF3lio",Dv="Carreira",Rv="Recomenda\xE7\xF5es",Ov="Contato",Mv="Baixar",jv="\u{1F44B} Sauda\xE7\xF5es!",zv="Desenvolvedor",Fv="trabalhos",Bv="Experi\xEAncias",Uv="Trabalhos",Hv="Projetos",$v="Tecnologias",Wv="Traget\xF3ria",Vv="Designer",Gv="depoimento",Xv="Desenvolvedor front-end e UI Designer Freelancer",qv={"about-me":"Sobre mim","about-me-emoji":"\u{1F9D0} Sobre mim",portfolio:Nv,"portfolio-emoji":"\u{1F517} Portf\xF3lio",career:Dv,"career-emoji":"\u{1F4BC} Carreira",recommendations:Rv,"recommendations-emoji":"\u{1F4AC} Recomenda\xE7\xF5es",contact:Ov,"contact-emoji":"\u{1F4EC} Contact",download:Mv,"lets-talk":"Vamos conversar!",greetings:jv,"three-years-as-a":"3 anos atuando como","4-years-as-a":"4 anos atuando como",developer:zv,work:Fv,"dozens-of-projects-and":"Dezenas de projetos e",experiences:Bv,"freelance-designer-and":"Designer freelancer e","you-can-call-me-henrique-pleasure":"pode me chamar apenas de Henrique. Prazer!","for-over-3-years-developing":"+3 anos desenvolvendo e programando interfaces com JavaScript, ReactJS e Typescript.","graduated-in-ads":"Graduado em An\xE1lise e Desenvolvimento de Sistemas pela Fatec de S\xE3o Jos\xE9 dos Campos.","interests-in-front-end":"Interesses em desenvolvimento Front-end com React JS, React Native, Vue JS e UX/UI Design.","trying-to-be-a-little-better":"Tentando ser um pouquinho melhor do que ontem todos dias.",works:Uv,"and-projects":"e projetos","see-more-projects-on-github":"Veja mais projetos no Github","see-more-projects-on-behance":"Veja mais projetos na Behance","see-more-projects-on-figma":"Veja mais projetos no Figma","nlw-04-rocketseat":"App web da NLW #04 Rocketseat. Plataforma de Pomodoro com exerc\xEDcios. O app est\xE1 dispon\xEDvel para uso, clique no card.","web-and-mobile-app-for-car-sales-ads":"App web e mobile para an\xFAncios de vendas de carros.","nlw-esports-rocketseat":"App web e mobile da NLW eSports Rocketseat. Encontre o seu duo dos games com esse app.","web-app-for-car-sales-and-purchases":"App web para vendas e compras de automoveis. Permite que pessoa f\xEDsica ou jur\xEDdica possa utilizar o app de forma simples e segura.","nlw-05-rocketseat":"App web da NLW #05 Rocketseat. Plataforma de perguntas e respostas em real-time.","etl-web-app":"ETL web app. Georeferenced data will be extracted from shapefiles and loaded into a geographic database.","nlw-02-rocketseat":"App web da NLW #02 Rocketseat. Plataforma online de estudos.","nlw-01-rocketseat":"App web da NLW #01 Rocketseat. Sistema de cadastro e pesquisa de ponto de coletas.","a-platform-for-production-control":"Uma plataforma para controle de produ\xE7\xE3o e qualidade de produtos para pequenas empresas.","experience-and-user-interfaces-for-carson":"Experi\xEAncia e interfaces de usu\xE1rio para CarsOn. App web de vendas e compras de automoveis.","specialized-brand-providing-services":"Marca especializada com presta\xE7\xE3o de servi\xE7os em solu\xE7\xF5es e tecnologias.","web-app-for-creating-and-managing-digital-minutes":"App web de cria\xE7\xE3o e gerenciamento de atas digitais.","re-design-ensinio":"Re-design da main page do site feito para a Ensinio.","design-created-for-matheus-campos":"Design criado para meu amigo e programador Matheus Campos.","rominfo-provides-services":"Rominfo presta servi\xE7os na \xE1rea de tecnologia da informa\xE7\xE3o, com foco em infraestrutura e treinamentos.","re-creation-of-the-instagram":"Recria\xE7\xE3o da rede social na vers\xE3o web com uma releitura do dark mode e adicional de elementos novos.",projects:Hv,"with-videos":"em v\xEDdeos","its-always-good-to-know-a-little-editing":"Sempre \xE9 bom saber um pouquinho de edi\xE7\xE3o","click-to-watch":"Clique para assistir","application-pitch":"Pitch da aplica\xE7\xE3o",technologies:$v,"and-skills":"e habilidades","techs-i-use-on-a-daily-basis":"Techs que uso no dia a dia","other-techs-ive-done-projects-with":"Outras techs com que j\xE1 realizei projetos",trajectory:Wv,"so-far":"at\xE9 aqui","profissional-area":"Profissional","at-the-moment":"Atualmente","academic-area":"Acad\xEAmica","front-end-developer-at-ensinio":"Desenvolvedor front-end na Ensinio","development-of-features":"Desenvolvimento de features na aplica\xE7\xE3o principal e site. com React Js e Typescript, al\xE9m do aux\xEDllio de outras tecnologias como Next, Styled Components e padr\xF5es de arquitetura.","one-year-and-7-months":"1 ano e 7 meses","april-2021-currently":"Abril/2021 \xB7 Novembro/2022","designer-at-viralizzi":"Designer na Viralizzi","viralizzi-as-a-designer":"Disponibilizando servi\xE7os para m\xEDdias digitais na Viralizzi como Designer.","three-months":"3 meses","january-2021-april-2021":"Janeiro/2021 \xB7 Abril/2021","programming-instructor-at-superGeeks":"Instrutor de programa\xE7\xE3o na SuperGeeks","acting-as-a-programming":"Atuando como instrutor de programa\xE7\xE3o, ci\xEAncia da computa\xE7\xE3o e desenvolvimento com crian\xE7as e adolescentes. Al\xE9m de suporte para cria\xE7\xE3o de conte\xFAdos e m\xEDdias digitais.","one-year-and-11-months":"1 ano e 11 meses","february-2019-january-2021":"February/2019 \xB7 January/2021","designer-editor-and-hardware-support-at-alorean":"Designer, editor e suporte em hardwares na Alorean","freelance-design-services":"Servi\xE7os freelancers de design, manuten\xE7\xE3o de hardwares, edi\xE7\xF5es de m\xEDdias digitais e gr\xE1ficas para empresas e pessoas da regi\xE3o de S\xE3o Jos\xE9 dos Campos e Jacare\xED pela marca  pr\xF3pria \u201CAlorean\u201D.","one-year":"1 ano","january-2020-january-2021":"Janeiro/2020 \xB7 Janeiro/2021","young-apprentice":"Jovem aprendiz","at-the-end-of-2016":"No fim de 2016 iniciei em fase de experi\xEAncia, no inicio de 2017 j\xE1 como Aprendiz atuando no setor de cria\xE7\xE3o, desenvolvimento e design. Suporte ao marketing digital da empresa e TI.","one-year-and-three-months":"1 ano e 3 meses","october-2016-december-2017":"Outubro/2016 \xB7 Dezembro/2017","higher-degree-systems-analysis-and-development":"Superior, An\xE1lise e Desenvolvimento de Sistemas","graduated-from-fatec":"Rec\xE9m graduado pela FATEC de S\xE3o Jos\xE9 dos Campos no curso de An\xE1lise e Desenvolvimento de Sistemas.","three-years":"3 anos","august-2019-august-2022":"Agosto/2019 \xB7 Agosto/2022","technician-computer-networks":"T\xE9cnico, Redes de Computadores","in-2019-i-graduated":"Em 2019 me formei em t\xE9cnico de Redes de Computadores pela ETEC C\xF4nego Jos\xE9 Bento em Jacare\xED.","one-year-and-six-months":"1 ano e 6 meses","february-2018-june-2019":"Fevereio/2018 \xB7 Junho/2019","english-advanced-conversation":"Ingl\xEAs \xB7 Conversa\xE7\xE3o avan\xE7ada","in-the-second-half-of-2018":"In the second half of 2018 I was able to improve my English level (Today: Advanced) with 6 months of advanced conversation at Instituto Federal de Jacare\xED (IFSP)","six-months":"6 meses","july-2018-december-2018":"Julho/2018 \xB7 Dezembro/2018","complete-high-school":"Ensinio m\xE9dio completo","advanced-computing":"Inform\xE1tica Avan\xE7ada","professional-informatics":"Inform\xE1tica Profissionalizante","at-the-end-of-2017":"Ao final de 2017 me formei no ensino m\xE9dio na escola Am\xE2ncia Dias Sampaio em Jacare\xED.","january-2015-december-2017":"Janeiro/2015 \xB7 Dezembro/2017","in-november-2017":"Em novembro de 2017 me certifiquei em inform\xE1tica avan\xE7ada pelo Instituto Educacional Iraci Veiga.","eight-months":"8 months","february-2017-november-2017":"Fevereiro/2017 \xB7 Novembro/2017","at-the-end-of-2016-i-was-certified":"Ao final de 2016 me certifiquei em inform\xE1tica profissionalizante pelo Instituto Educacional Iraci Veiga.","one-year-three-months":"1 ano e 3 meses","october-2015-december-2016":"Outubro/2015 \xB7  Dezembro/2016","seven-years-of":"7 anos de",designer:Vv,"skills-emoji":"\u{1F9D1}\u200D\u{1F4BB} Skills",in:"Em",deposition:Gv,"henrique-is-very-engaged":"Henrique \xE9 muito engajado, uma pessoa de cora\xE7\xE3o enorme e um \xF3timo profissional. Alegra as pessoas ao seu redor e se comunica muito bem. Sugere e compartilha coisas com o time recorrentemente, e busca agregar valor, vestindo genuinamente a camiseta da empresa. Foi muito legal trabalhar ao lado do Henrique e acompanhar a sua evolu\xE7\xE3o ao longo dos \xFAltimos 19 meses. Merece o mundo!","tech-lead-at-ensinio":"Tech Lead na Ensinio","washington-is-always":"O Washington est\xE1 sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse \xE9 sua melhor qualidade. Est\xE1 sempre em busca de seus objetivos, com foco e organiza\xE7\xE3o. Al\xE9m disso, tecnicamente, no que se prop\xF5e a fazer, faz bem feito. Sempre!","computer-engineer":"Engenheiro da Computa\xE7\xE3o","creative-this-is-henrique":"Criativo! Este \xE9 o Henrique que trabalhou na SuperGeeks! Estimado pelos alunos e autor de artes como o informativo semanal para os pais, Henrique desenvolveu suas atividades em aulas e oficinas de maneira satisfat\xF3ria. A habilidade e desenvoltura para conduzir a apresenta\xE7\xE3o dos trabalhos finais dos alunos \xE9 algo que merece destaque. Henrique foi um bom colaborador e, no momento, est\xE1 em busca de sonhos maiores.","education-networks-professional":"Profissional da Educa\xE7\xE3o, Redes e Seguran\xE7a da Informa\xE7\xE3o","henrique-is-a-hardworking":"O Henrique \xE9 um cara esfor\xE7ado, dedicado e objetivo. Ele tem ci\xEAncia das suas for\xE7as e fraquezas, e por causa disso est\xE1 sempre em buscas de melhorias. Tenho ele como inspira\xE7\xE3o para se tornar um \xF3timo profissional.","i-worked-with-henrique":"Trabalhei com o Henrique logo no come\xE7o de sua carreira e sua evolu\xE7\xE3o \xE9 bastante grande e cont\xEDnua. Fruto da sua determina\xE7\xE3o e curiosidade de agregar diversas ferramentas aos seus projetos e aprendizado. Tanto que depois fui seu cliente, confiei a ele o nascimento de uma marca pois n\xE3o havia d\xFAvidas quanto a qualidade do seu trabalho.","head-of-engineering-at-xcorecng":"Head of Engineering na xCoreEng","lets-talk-section":"Vamos conversar!","text-copied-to-clipboard":"Texto copiado para o clipboard!","back-to-the-top":"Voltar ao topo","front-end-developer-at-softexpert":"Desenvolvedor front-end na SoftExpert","working-in-the-application-workspace":"Atuando na \xE1rea de workspace da aplica\xE7\xE3o com desenvolvimento e manuten\xE7\xE3o do front-end em ReactJS e JavaScript.","december-2022-currently":"Dezembro/2022 \xB7 Abril/2023","front-end-developer-at-coderockr":"Desenvolvedor front-end na Coderockr","working-on-the-maintenance":"Trabalhando na manuten\xE7\xE3o de diversas aplica\xE7\xF5es de clientes em ReactJS.","november-2022-december-2022":"Novembro/2022 \xB7 Dezembro/2022","all-about-characters-episodes-and-more":"Um site com diversas informa\xE7\xF5es sobre a s\xE9rie: personagens, epis\xF3dios e mais.","site-that-brings-together":"Reune os principais portais de not\xEDcias em um s\xF3 lugar. Mundo, esportes, tecnologias, neg\xF3cios e mundo mais. ","contact-management-web-app":"APP web de gerenciamento de contatos. (CRUD)","ignite-rocketseat":"Ignite Rocketseat | ReactJS e NodeJS","improving-myself-on-the-front-end":"Me aprimorando no front-end e iniciando no back-end. Design Systems, GraphQL. JAMStack, Suspense API, Streaming SSR, Docker, TypeORM, JWT e bcrypt s\xE3o alguns dos principais conceitos que s\xE3o abordados e tem mais! Clique e veja.","know-more":"Saiba mais",freelancer:Xv,"working-as-a-freelancer":"Atuando como desenvolvedor Front-end e UI Designer com React.js, Next.js, Node.js, Typescript, TailwindCss, Styled-componens, Vercel. Netfly, Vite, Figma e outras tecnologias","may-2023-jul-2023":"Maio/2023 \xB7 Jul/2023","finance-releases-app":"App de lan\xE7amentos de finan\xE7as. Que re\xFAne v\xE1rias contas banc\xE1rias em um s\xF3 lugar.","application-focused":"Aplica\xE7\xE3o focada para utiliza\xE7\xE3o de Design System com Storybook.","the-design-of-that-website-you-are-selling":"O Design desse site que est\xE1 vendo :)","leadster-landing-page":"P\xE1gina de galeria de v\xEDdeos com filtragem e modal","browser-radio-web":"Aplica\xE7\xE3o web de R\xE1dio de navegador consumindo uma API p\xFAblica com milhares de r\xE1dios do mundo radio","site-to-find-countless":"Site para encontrar in\xFAmeras obras de arte e os mais diversos tipos de artistas.","memories-time-capsule-app":"App de c\xE1psula do tempo de mem\xF3rias realizado no evento Nlw Spacetime","front-end-intrabank":"Desenvolvedor front-end e UI Designer na Intrabank","jul-2023-actually":"Jul/2023 - Atualmente","working-at-intrabank":"Atuando como desenvolvedor Front-end e eventualmente como UI Designer. Utilizando tecnologias como React.js, Next.js, Typescript, TailwindCss, Styled-componens, Vercel, Vite, Figma e outras."},Yv="Portfolio",Zv="Career",Qv="Recommendations",Jv="Contact",Kv="Download",ey="\u{1F44B} Greetings!",ty="Developer",ny="work",ry="Experiences",iy="Works",oy="Projects",ay="Technologies",sy="Trajectory",ly="Designer",uy="deposition",cy="Freelance Front End Developer and UI Designer",dy={"about-me":"About me","about-me-emoji":"\u{1F9D0} About me",portfolio:Yv,"portfolio-emoji":"\u{1F517} Portfolio",career:Zv,"career-emoji":"\u{1F4BC} Career",recommendations:Qv,"recommendations-emoji":"\u{1F4AC} Recommendations",contact:Jv,"contact-emoji":"\u{1F4EC} Contact",download:Kv,"lets-talk":"Let's chat on whatsapp",greetings:ey,"three-years-as-a":"3 years as a","4-years-as-a":"4 years as a","seven-years-of":"7 years of",developer:ty,work:ny,"dozens-of-projects-and":"Dozens of projects and",experiences:ry,"freelance-designer-and":"Freelance designer and","you-can-call-me-henrique-pleasure":"you can just call me Henrique. Pleasure!","for-over-3-years-developing":"+3 years developing and programming interfaces with JavaScript, ReactJS and Typescript.","graduated-in-ads":"Graduated in Systems Analysis and Development from Fatec in S\xE3o Jos\xE9 dos Campos, SP.","interests-in-front-end":"Interests in Front-end development with React JS, React Native, Vue JS and UX/UI Design.","trying-to-be-a-little-better":"Trying to be a little better than yesterday every day.",works:iy,"and-projects":"and projects","see-more-projects-on-github":"See more projects on Github","see-more-projects-on-behance":"See more projects on Behance","see-more-projects-on-figma":"See more projects on Figma","nlw-04-rocketseat":"NLW #04 Rocketseat web app. Pomodoro platform with exercises. The app is available for use, click on the card.","web-and-mobile-app-for-car-sales-ads":"Web and mobile app for car sales ads.","nlw-esports-rocketseat":"NLW eSports Rocketseat web and mobile app. Find your gaming duo with this app.","web-app-for-car-sales-and-purchases":"Web app for car sales and purchases. It allows individuals or legal entities to use the app in a simple and safe way.","nlw-05-rocketseat":"NLW #05 Rocketseat web app. Real-time Q&A platform.","etl-web-app":"ETL web app. Georeferenced data will be extracted from shapefiles and loaded into a geographic database.","nlw-02-rocketseat":"NLW #02 Rocketseat web app. Online study platform.","nlw-01-rocketseat":"NLW #01 Rocketseat web app. System of registration and research of collection point.","a-platform-for-production-control":"A platform for production control and product quality for small businesses.","experience-and-user-interfaces-for-carson":"Experience and user interfaces for CarsOn. Selling cars and buying web apps.","specialized-brand-providing-services":"Specialized brand providing services in solutions and technologies.","web-app-for-creating-and-managing-digital-minutes":"Web app for creating and managing digital minutes.","re-design-ensinio":"Re-design of the main page of the website made for Ensinio.","design-created-for-matheus-campos":"Design created for my friend and programmer Matheus Campos.","rominfo-provides-services":"Rominfo provides services in the area of \u200B\u200Binformation technology, focusing on infrastructure and training.","re-creation-of-the-instagram":"Re-creation of the social network in the web version with a reinterpretation of the dark mode and additional new elements.",projects:oy,"with-videos":"with videos","its-always-good-to-know-a-little-editing":"It's always good to know a little editing","click-to-watch":"Click to watch","application-pitch":"Application pitch",technologies:ay,"and-skills":"and skills","techs-i-use-on-a-daily-basis":"Techs I use on a daily basis","other-techs-ive-done-projects-with":"Other techs I've done projects with",trajectory:sy,"so-far":"so far","profissional-area":"Professional","at-the-moment":"At the moment","academic-area":"Academic","front-end-developer-at-ensinio":"Front-end developer at Ensinio","development-of-features":"Development of features in the main application and website. with React Js and Typescript, in addition to the help of other technologies like Next, Styled Components and architectural patterns.","one-year-and-7-months":"1 year and 7 months","april-2021-currently":"April/2021 \xB7 November/2022","designer-at-viralizzi":"Designer at Viralizzi","viralizzi-as-a-designer":"Providing services for digital media at Viralizzi as a Designer.","three-months":"3 months","january-2021-april-2021":"January/2021 \xB7 April/2021","programming-instructor-at-superGeeks":"Programming Instructor at SuperGeeks","acting-as-a-programming":"Acting as a programming, computer science and development instructor with children and teenagers. In addition to support for content creation and digital media.","one-year-and-11-months":"1 year and 11 months","february-2019-january-2021":"February/2019 \xB7 January/2021","designer-editor-and-hardware-support-at-alorean":"Designer, Editor and Hardware Support at Alorean","freelance-design-services":"Freelance design services, hardware maintenance, digital and graphic media editions for companies and people in the region of S\xE3o Jos\xE9 dos Campos and Jacare\xED under the \u201CAlorean\u201D brand.","one-year":"1 year","january-2020-january-2021":"January/2020 \xB7 January/2021","young-apprentice":"Young apprentice","at-the-end-of-2016":"At the end of 2016 I started in the experience phase, at the beginning of 2017 as an Apprentice working in the creation, development and design sector. Support for digital marketing and company IT.","one-year-and-three-months":"1 year and 3 months","october-2016-december-2017":"October/2016 \xB7 December/2017","higher-degree-systems-analysis-and-development":"Higher Degree, Systems Analysis and Development","graduated-from-fatec":"Graduated from FATEC in S\xE3o Jos\xE9 dos Campos in the Systems Analysis and Development course.","three-years":"3 years","august-2019-august-2022":"August/2019 \xB7 August/2022","technician-computer-networks":"Technician, Computer Networks","in-2019-i-graduated":"In 2019 I graduated as a Computer Network Technician at ETEC C\xF4nego Jos\xE9 Bento in Jacare\xED.","one-year-and-six-months":"1 year and 6 months","february-2018-june-2019":"February/2018 \xB7 June/2019","english-advanced-conversation":"English \xB7 Advanced conversation","in-the-second-half-of-2018":"In the second half of 2018 I was able to improve my English level (Today: Advanced) with 6 months of advanced conversation at Instituto Federal de Jacare\xED (IFSP)","six-months":"6 months","july-2018-december-2018":"July/2018 \xB7 December/2018","complete-high-school":"Complete high school","advanced-computing":"Advanced Computing","professional-informatics":"Professional Informatics","at-the-end-of-2017":"I graduated from high school at Am\xE2ncia Dias Sampaio school in Jacare\xED.","january-2015-december-2017":"January/2015 \xB7 December/2017","in-november-2017":"In November 2017 I was certified in advanced computing by Instituto Educacional Iraci Veiga.","eight-months":"8 months","february-2017-november-2017":"February/2017 \xB7 November/2017","at-the-end-of-2016-i-was-certified":"At the end of 2016 I was certified in professional computing by Instituto Educacional Iraci Veiga.","one-year-three-months":"1 year 3 months","october-2015-december-2016":"October/2015 \xB7 December/2016",designer:ly,"skills-emoji":"\u{1F9D1}\u200D\u{1F4BB} Skills",in:"In",deposition:uy,"henrique-is-very-engaged":"Henrique is very engaged, a person with a huge heart and a great professional. He makes people around him happy and communicates very well. He suggests and shares things with the team on a recurring basis, and seeks to add value, genuinely wearing the company's shirt. It was really cool to work alongside Henrique and follow his evolution over the last 19 months. Deserves the world!","tech-lead-at-ensinio":"Tech Lead at Ensinio","washington-is-always":"Washington is always studying and learning, trying to improve what he does. This is your best quality. He is always in search of his goals, with focus and organization. Furthermore, technically, in what it proposes to do, it does well. Ever!","computer-engineer":"Computer engineer","creative-this-is-henrique":"Creative! This is Henrique who worked at SuperGeeks! Esteemed by students and an art author as the weekly newsletter for parents, Henrique developed his activities in classes and workshops in a satisfactory manner. The ability and resourcefulness to lead the presentation of the students' final works is something that deserves to be highlighted. Henrique was a good collaborator and is currently looking for bigger dreams.","education-networks-professional":"Education, Networks and Information Security Professional","henrique-is-a-hardworking":"Henrique is a hardworking, dedicated and objective guy. He is aware of his strengths and weaknesses, and because of that he is always looking for improvement. I have him as an inspiration to become a great professional.","i-worked-with-henrique":"I worked with Henrique right at the beginning of his career and his evolution is quite large and continuous. Result of your determination and curiosity to add several tools to your projects and learning. So much so that later I was his client, I trusted him with the birth of a brand because there was no doubt about the quality of his work.","head-of-engineering-at-xcorecng":"Head of Engineering at xCoreEng","lets-talk-section":"Let's talk!","text-copied-to-clipboard":"Text copied to clipboard!","back-to-the-top":"Back to the top","front-end-developer-at-softexpert":"Front-end developer at SoftExpert","working-in-the-application-workspace":"Working in the application workspace area with development and front-end maintenance in ReactJS and JavaScript.","december-2022-currently":"December/2022 \xB7 April/2023","front-end-developer-at-coderockr":"Front-end Developer at Coderockr","working-on-the-maintenance":"Working on the maintenance of several client applications in React JS.","november-2022-december-2022":"November/2022 \xB7 December/2022","all-about-characters-episodes-and-more":"A website with lots of information about the series: characters, episodes and more.","site-that-brings-together":"Brings together the main news portals in one place. World, sports, technologies and much more.","contact-management-web-app":"Contact management web APP. (CRUD)","ignite-rocketseat":"Ignite Rocketseat | ReactJS and NodeJS","improving-myself-on-the-front-end":"Improving myself on the front-end and starting on the back-end. Design Systems, GraphQL. JAMStack, Suspense API, Streaming SSR, Docker, TypeORM, JWT and bcrypt are some of the main concepts that are covered and there's more! Click and see.","know-more":"Know more",freelancer:cy,"working-as-a-freelancer":"Acting as Front-end developer and UI Designer with React.js, Next.js, Node.js, Typescript, TailwindCss, Styled-componens, Vercel. Netfly, Vite, Figma and other technologies.","may-2023-jul-2023":"May/2023 \xB7 July/2023","finance-releases-app":"Finance releases app. Which brings together multiple bank accounts in one place.","application-focused":"Application focused on using Design System with Storybook.","the-design-of-that-website-you-are-selling":"The Design of this site you are viewing :)","leadster-landing-page":"Video gallery page with filtering and modal","browser-radio-web":"Browser Radio web app consuming a public API with thousands of worldwide radio stations","site-to-find-countless":"Site to find countless works of art and the most diverse types of artists.","memories-time-capsule-app":"Time capsule app of memories held at the Nlw Spacetime event","front-end-intrabank":"Front-end developer and UI Designer at Intrabank","jul-2023-actually":"Jul/2023 - Atualmente","working-at-intrabank":"Working as a Front-end developer and eventually as a UI Designer. Using technologies such as React.js, Next.js, Typescript, TailwindCss, Styled-componens, Vercel, Vite, Figma and others."},Bt=()=>{const[e,t]=U.exports.useState({windowWidth:void 0,windowHeight:void 0});return U.exports.useEffect(()=>{function n(){t({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e},fy="/assets/logo.725244a9.svg";function Lt(e){const t=document.querySelector(`#${e}`);t&&(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add("comment-animation"),setTimeout(()=>{t.classList.remove("comment-animation")},1e3))}const Fp="/assets/brazil-flag.1c25a3e5.svg",Bp="/assets/usa-flag.56bdfd54.svg";function hy(e){function t(L,O,j,W,P){for(var Y=0,A=0,we=0,re=0,oe,G,Ae=0,Ze=0,ee,je=ee=oe=0,ie=0,Le=0,Dr=0,Ne=0,Di=j.length,Rr=Di-1,xt,V="",Se="",La="",Na="",en;ie<Di;){if(G=j.charCodeAt(ie),ie===Rr&&A+re+we+Y!==0&&(A!==0&&(G=A===47?10:47),re=we=Y=0,Di++,Rr++),A+re+we+Y===0){if(ie===Rr&&(0<Le&&(V=V.replace(g,"")),0<V.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:V+=j.charAt(ie)}G=59}switch(G){case 123:for(V=V.trim(),oe=V.charCodeAt(0),ee=1,Ne=++ie;ie<Di;){switch(G=j.charCodeAt(ie)){case 123:ee++;break;case 125:ee--;break;case 47:switch(G=j.charCodeAt(ie+1)){case 42:case 47:e:{for(je=ie+1;je<Rr;++je)switch(j.charCodeAt(je)){case 47:if(G===42&&j.charCodeAt(je-1)===42&&ie+2!==je){ie=je+1;break e}break;case 10:if(G===47){ie=je+1;break e}}ie=je}}break;case 91:G++;case 40:G++;case 34:case 39:for(;ie++<Rr&&j.charCodeAt(ie)!==G;);}if(ee===0)break;ie++}switch(ee=j.substring(Ne,ie),oe===0&&(oe=(V=V.replace(y,"").trim()).charCodeAt(0)),oe){case 64:switch(0<Le&&(V=V.replace(g,"")),G=V.charCodeAt(1),G){case 100:case 109:case 115:case 45:Le=O;break;default:Le=Ye}if(ee=t(O,Le,ee,G,P+1),Ne=ee.length,0<C&&(Le=n(Ye,V,Dr),en=s(3,ee,Le,O,Q,q,Ne,G,P,W),V=Le.join(""),en!==void 0&&(Ne=(ee=en.trim()).length)===0&&(G=0,ee="")),0<Ne)switch(G){case 115:V=V.replace(E,a);case 100:case 109:case 45:ee=V+"{"+ee+"}";break;case 107:V=V.replace(h,"$1 $2"),ee=V+"{"+ee+"}",ee=pe===1||pe===2&&o("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=V+ee,W===112&&(ee=(Se+=ee,""))}else ee="";break;default:ee=t(O,n(O,V,Dr),ee,W,P+1)}La+=ee,ee=Dr=Le=je=oe=0,V="",G=j.charCodeAt(++ie);break;case 125:case 59:if(V=(0<Le?V.replace(g,""):V).trim(),1<(Ne=V.length))switch(je===0&&(oe=V.charCodeAt(0),oe===45||96<oe&&123>oe)&&(Ne=(V=V.replace(" ",":")).length),0<C&&(en=s(1,V,O,L,Q,q,Se.length,W,P,W))!==void 0&&(Ne=(V=en.trim()).length)===0&&(V="\0\0"),oe=V.charCodeAt(0),G=V.charCodeAt(1),oe){case 0:break;case 64:if(G===105||G===99){Na+=V+j.charAt(ie);break}default:V.charCodeAt(Ne-1)!==58&&(Se+=i(V,oe,G,V.charCodeAt(2)))}Dr=Le=je=oe=0,V="",G=j.charCodeAt(++ie)}}switch(G){case 13:case 10:A===47?A=0:1+oe===0&&W!==107&&0<V.length&&(Le=1,V+="\0"),0<C*$&&s(0,V,O,L,Q,q,Se.length,W,P,W),q=1,Q++;break;case 59:case 125:if(A+re+we+Y===0){q++;break}default:switch(q++,xt=j.charAt(ie),G){case 9:case 32:if(re+Y+A===0)switch(Ae){case 44:case 58:case 9:case 32:xt="";break;default:G!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:re+A+Y===0&&(Le=Dr=1,xt="\f"+xt);break;case 108:if(re+A+Y+ne===0&&0<je)switch(ie-je){case 2:Ae===112&&j.charCodeAt(ie-3)===58&&(ne=Ae);case 8:Ze===111&&(ne=Ze)}break;case 58:re+A+Y===0&&(je=ie);break;case 44:A+we+re+Y===0&&(Le=1,xt+="\r");break;case 34:case 39:A===0&&(re=re===G?0:re===0?G:re);break;case 91:re+A+we===0&&Y++;break;case 93:re+A+we===0&&Y--;break;case 41:re+A+Y===0&&we--;break;case 40:if(re+A+Y===0){if(oe===0)switch(2*Ae+3*Ze){case 533:break;default:oe=1}we++}break;case 64:A+we+re+Y+je+ee===0&&(ee=1);break;case 42:case 47:if(!(0<re+Y+we))switch(A){case 0:switch(2*G+3*j.charCodeAt(ie+1)){case 235:A=47;break;case 220:Ne=ie,A=42}break;case 42:G===47&&Ae===42&&Ne+2!==ie&&(j.charCodeAt(Ne+2)===33&&(Se+=j.substring(Ne,ie+1)),xt="",A=0)}}A===0&&(V+=xt)}Ze=Ae,Ae=G,ie++}if(Ne=Se.length,0<Ne){if(Le=O,0<C&&(en=s(2,Se,Le,L,Q,q,Ne,W,P,W),en!==void 0&&(Se=en).length===0))return Na+Se+La;if(Se=Le.join(",")+"{"+Se+"}",pe*ne!==0){switch(pe!==2||o(Se,2)||(ne=0),ne){case 111:Se=Se.replace(p,":-moz-$1")+Se;break;case 112:Se=Se.replace(u,"::-webkit-input-$1")+Se.replace(u,"::-moz-$1")+Se.replace(u,":-ms-input-$1")+Se}ne=0}}return Na+Se+La}function n(L,O,j){var W=O.trim().split(b);O=W;var P=W.length,Y=L.length;switch(Y){case 0:case 1:var A=0;for(L=Y===0?"":L[0]+" ";A<P;++A)O[A]=r(L,O[A],j).trim();break;default:var we=A=0;for(O=[];A<P;++A)for(var re=0;re<Y;++re)O[we++]=r(L[re]+" ",W[A],j).trim()}return O}function r(L,O,j){var W=O.charCodeAt(0);switch(33>W&&(W=(O=O.trim()).charCodeAt(0)),W){case 38:return O.replace(v,"$1"+L.trim());case 58:return L.trim()+O.replace(v,"$1"+L.trim());default:if(0<1*j&&0<O.indexOf("\f"))return O.replace(v,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+O}function i(L,O,j,W){var P=L+";",Y=2*O+3*j+4*W;if(Y===944){L=P.indexOf(":",9)+1;var A=P.substring(L,P.length-1).trim();return A=P.substring(0,L).trim()+A+";",pe===1||pe===2&&o(A,1)?"-webkit-"+A+A:A}if(pe===0||pe===2&&!o(P,1))return P;switch(Y){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(R,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return A=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+P+"-ms-flex-pack"+A+P;case 1005:return m.test(P)?P.replace(S,":-webkit-")+P.replace(S,":-moz-")+P:P;case 1e3:switch(A=P.substring(13).trim(),O=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(O)){case 226:A=P.replace(w,"tb");break;case 232:A=P.replace(w,"tb-rl");break;case 220:A=P.replace(w,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+A+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(O=(P=L).length-10,A=(P.charCodeAt(O)===33?P.substring(0,O):P).substring(L.indexOf(":",7)+1).trim(),Y=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:P=P.replace(A,"-webkit-"+A)+";"+P;break;case 207:case 102:P=P.replace(A,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+P.replace(A,"-webkit-"+A)+";"+P.replace(A,"-ms-"+A+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return A=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+A+"-ms-flex-"+A+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(T,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(T,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if(N.test(L)===!0)return(A=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),O,j,W).replace(":fill-available",":stretch"):P.replace(A,"-webkit-"+A)+P.replace(A,"-moz-"+A.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,j+W===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+P}return P}function o(L,O){var j=L.indexOf(O===1?":":"{"),W=L.substring(0,O!==3?j:10);return j=L.substring(j+1,L.length-1),H(O!==2?W:W.replace(D,"$1"),j,O)}function a(L,O){var j=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return j!==O+";"?j.replace(_," or ($1)").substring(4):"("+O+")"}function s(L,O,j,W,P,Y,A,we,re,oe){for(var G=0,Ae=O,Ze;G<C;++G)switch(Ze=be[G].call(d,L,Ae,j,W,P,Y,A,we,re,oe)){case void 0:case!1:case!0:case null:break;default:Ae=Ze}if(Ae!==O)return Ae}function l(L){switch(L){case void 0:case null:C=be.length=0;break;default:if(typeof L=="function")be[C++]=L;else if(typeof L=="object")for(var O=0,j=L.length;O<j;++O)l(L[O]);else $=!!L|0}return l}function f(L){return L=L.prefix,L!==void 0&&(H=null,L?typeof L!="function"?pe=1:(pe=2,H=L):pe=0),f}function d(L,O){var j=L;if(33>j.charCodeAt(0)&&(j=j.trim()),ue=j,j=[ue],0<C){var W=s(-1,O,j,j,Q,q,0,0,0,0);W!==void 0&&typeof W=="string"&&(O=W)}var P=t(Ye,j,O,0,0);return 0<C&&(W=s(-2,P,j,j,Q,q,P.length,0,0,0),W!==void 0&&(P=W)),ue="",ne=0,q=Q=1,P}var y=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,m=/zoo|gra/,x=/([,: ])(transform)/g,b=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,u=/::(place)/g,p=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,T=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,R=/([^-])(image-set\()/,q=1,Q=1,ne=0,pe=1,Ye=[],be=[],C=0,H=null,$=0,ue="";return d.use=l,d.set=f,e!==void 0&&f(e),d}var py={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function my(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bd=my(function(e){return gy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Xt(){return(Xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var kd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},xl=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ia.exports.typeOf(e)},Uo=Object.freeze([]),yn=Object.freeze({});function Ei(e){return typeof e=="function"}function _d(e){return e.displayName||e.name||"Component"}function ju(e){return e&&typeof e.styledComponentId=="string"}var Tr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",zu=typeof window<"u"&&"HTMLElement"in window,vy=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Ai(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var yy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ai(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),f=0,d=r.length;f<d;f++)this.tag.insertRule(l,r[f])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),go=new Map,Ho=new Map,ri=1,Ki=function(e){if(go.has(e))return go.get(e);for(;Ho.has(ri);)ri++;var t=ri++;return go.set(e,t),Ho.set(t,e),t},wy=function(e){return Ho.get(e)},xy=function(e,t){t>=ri&&(ri=t+1),go.set(e,t),Ho.set(t,e)},Sy="style["+Tr+'][data-styled-version="5.3.6"]',Ey=new RegExp("^"+Tr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),by=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},ky=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(Ey);if(s){var l=0|parseInt(s[1],10),f=s[2];l!==0&&(xy(f,l),by(e,f,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},_y=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Up=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,f=l.length;f>=0;f--){var d=l[f];if(d&&d.nodeType===1&&d.hasAttribute(Tr))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Tr,"active"),r.setAttribute("data-styled-version","5.3.6");var a=_y();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Py=function(){function e(n){var r=this.element=Up(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}Ai(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ty=function(){function e(n){var r=this.element=Up(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Cy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Pd=zu,Iy={isServer:!zu,useCSSOMInjection:!vy},Hp=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=Xt({},Iy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&zu&&Pd&&(Pd=!1,function(o){for(var a=document.querySelectorAll(Sy),s=0,l=a.length;s<l;s++){var f=a[s];f&&f.getAttribute(Tr)!=="active"&&(ky(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return Ki(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Xt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new Cy(a):o?new Py(a):new Ty(a),new yy(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ki(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ki(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ki(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=wy(a);if(s!==void 0){var l=n.names.get(s),f=r.getGroup(a);if(l&&f&&l.size){var d=Tr+".g"+a+'[id="'+s+'"]',y="";l!==void 0&&l.forEach(function(g){g.length>0&&(y+=g+",")}),o+=""+f+d+'{content:"'+y+`"}/*!sc*/
`}}}return o}(this)},e}(),Ay=/(a)(d)/gi,Td=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Td(t%52)+n;return(Td(t%52)+n).replace(Ay,"$1-$2")}var fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$p=function(e){return fr(5381,e)};function Ly(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ei(n)&&!ju(n))return!1}return!0}var Ny=$p("5.3.6"),Dy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ly(t),this.componentId=n,this.baseHash=fr(Ny,n),this.baseStyle=r,Hp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Cr(this.rules,t,n,r).join(""),s=Sl(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var f=this.rules.length,d=fr(this.baseHash,r.hash),y="",g=0;g<f;g++){var S=this.rules[g];if(typeof S=="string")y+=S;else if(S){var m=Cr(S,t,n,r),x=Array.isArray(m)?m.join(""):m;d=fr(d,x+g),y+=x}}if(y){var b=Sl(d>>>0);if(!n.hasNameForId(i,b)){var v=r(y,"."+b,void 0,i);n.insertRules(i,b,v)}o.push(b)}}return o.join(" ")},e}(),Ry=/^\s*\/\/.*$/gm,Oy=[":","[",".","#"];function My(e){var t,n,r,i,o=e===void 0?yn:e,a=o.options,s=a===void 0?yn:a,l=o.plugins,f=l===void 0?Uo:l,d=new hy(s),y=[],g=function(x){function b(v){if(v)try{x(v+"}")}catch{}}return function(v,h,u,p,w,E,_,T,D,N){switch(v){case 1:if(D===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(T===0)return h+"/*|*/";break;case 3:switch(T){case 102:case 112:return x(u[0]+h),"";default:return h+(N===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(b)}}}(function(x){y.push(x)}),S=function(x,b,v){return b===0&&Oy.indexOf(v[n.length])!==-1||v.match(i)?x:"."+t};function m(x,b,v,h){h===void 0&&(h="&");var u=x.replace(Ry,""),p=b&&v?v+" "+b+" { "+u+" }":u;return t=h,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(v||!b?"":b,p)}return d.use([].concat(f,[function(x,b,v){x===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,S))},g,function(x){if(x===-2){var b=y;return y=[],b}}])),m.hash=f.length?f.reduce(function(x,b){return b.name||Ai(15),fr(x,b.name)},5381).toString():"",m}var Wp=ki.createContext();Wp.Consumer;var Vp=ki.createContext(),jy=(Vp.Consumer,new Hp),El=My();function zy(){return U.exports.useContext(Wp)||jy}function Fy(){return U.exports.useContext(Vp)||El}var By=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=El);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ai(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=El),this.name+t.hash},e}(),Uy=/([A-Z])/,Hy=/([A-Z])/g,$y=/^ms-/,Wy=function(e){return"-"+e.toLowerCase()};function Cd(e){return Uy.test(e)?e.replace(Hy,Wy).replace($y,"-ms-"):e}var Id=function(e){return e==null||e===!1||e===""};function Cr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=Cr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Id(e))return"";if(ju(e))return"."+e.styledComponentId;if(Ei(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var l=e(t);return Cr(l,t,n,r)}var f;return e instanceof By?n?(e.inject(n,r),e.getName(r)):e:xl(e)?function d(y,g){var S,m,x=[];for(var b in y)y.hasOwnProperty(b)&&!Id(y[b])&&(Array.isArray(y[b])&&y[b].isCss||Ei(y[b])?x.push(Cd(b)+":",y[b],";"):xl(y[b])?x.push.apply(x,d(y[b],b)):x.push(Cd(b)+": "+(S=b,(m=y[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||S in py?String(m).trim():m+"px")+";"));return g?[g+" {"].concat(x,["}"]):x}(e):e.toString()}var Ad=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ei(e)||xl(e)?Ad(Cr(kd(Uo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ad(Cr(kd(e,n)))}var Vy=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},Gy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xy=/(^-|-$)/g;function us(e){return e.replace(Gy,"-").replace(Xy,"")}var qy=function(e){return Sl($p(e)>>>0)};function eo(e){return typeof e=="string"&&!0}var bl=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Yy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Zy(e,t,n){var r=e[n];bl(t)&&bl(r)?Gp(r,t):e[n]=t}function Gp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(bl(a))for(var s in a)Yy(s)&&Zy(e,a[s],s)}return e}var Xp=ki.createContext();Xp.Consumer;var cs={};function qp(e,t,n){var r=ju(e),i=!eo(e),o=t.attrs,a=o===void 0?Uo:o,s=t.componentId,l=s===void 0?function(h,u){var p=typeof h!="string"?"sc":us(h);cs[p]=(cs[p]||0)+1;var w=p+"-"+qy("5.3.6"+p+cs[p]);return u?u+"-"+w:w}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(h){return eo(h)?"styled."+h:"Styled("+_d(h)+")"}(e):f,y=t.displayName&&t.componentId?us(t.displayName)+"-"+t.componentId:t.componentId||l,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(h,u,p){return e.shouldForwardProp(h,u,p)&&t.shouldForwardProp(h,u,p)}:e.shouldForwardProp);var m,x=new Dy(n,y,r?e.componentStyle:void 0),b=x.isStatic&&a.length===0,v=function(h,u){return function(p,w,E,_){var T=p.attrs,D=p.componentStyle,N=p.defaultProps,R=p.foldedComponentIds,q=p.shouldForwardProp,Q=p.styledComponentId,ne=p.target,pe=function(W,P,Y){W===void 0&&(W=yn);var A=Xt({},P,{theme:W}),we={};return Y.forEach(function(re){var oe,G,Ae,Ze=re;for(oe in Ei(Ze)&&(Ze=Ze(A)),Ze)A[oe]=we[oe]=oe==="className"?(G=we[oe],Ae=Ze[oe],G&&Ae?G+" "+Ae:G||Ae):Ze[oe]}),[A,we]}(Vy(w,U.exports.useContext(Xp),N)||yn,w,T),Ye=pe[0],be=pe[1],C=function(W,P,Y,A){var we=zy(),re=Fy(),oe=P?W.generateAndInjectStyles(yn,we,re):W.generateAndInjectStyles(Y,we,re);return oe}(D,_,Ye),H=E,$=be.$as||w.$as||be.as||w.as||ne,ue=eo($),L=be!==w?Xt({},w,{},be):w,O={};for(var j in L)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?O.as=L[j]:(q?q(j,bd,$):!ue||bd(j))&&(O[j]=L[j]));return w.style&&be.style!==w.style&&(O.style=Xt({},w.style,{},be.style)),O.className=Array.prototype.concat(R,Q,C!==Q?C:null,w.className,be.className).filter(Boolean).join(" "),O.ref=H,U.exports.createElement($,O)}(m,h,u,b)};return v.displayName=d,(m=ki.forwardRef(v)).attrs=g,m.componentStyle=x,m.displayName=d,m.shouldForwardProp=S,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Uo,m.styledComponentId=y,m.target=r?e.target:e,m.withComponent=function(h){var u=t.componentId,p=function(E,_){if(E==null)return{};var T,D,N={},R=Object.keys(E);for(D=0;D<R.length;D++)T=R[D],_.indexOf(T)>=0||(N[T]=E[T]);return N}(t,["componentId"]),w=u&&u+"-"+(eo(h)?h:us(_d(h)));return qp(h,Xt({},p,{attrs:g,componentId:w}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Gp({},e.defaultProps,h):h}}),m.toString=function(){return"."+m.styledComponentId},i&&r1(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var kl=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!ia.exports.isValidElementType(r))return Ai(1,String(r));var o=function(){return n(r,i,at.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Xt({},i,{},a))},o.attrs=function(a){return t(n,r,Xt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(qp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){kl[e]=kl(e)});const te=kl,Qy=te.div`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ae290;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 2s infinite;

  :hover {
    animation: none;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`;function Fu(){return c(Qy,{})}const Jy=te.div`
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  .sections {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    button {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 16px;

      color: white;
      opacity: 50%;
      border: 0;
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
      }
    }
  }

  .lang {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button.language {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      outline: none;
      border: none;
      width: 56px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      display: flex;

      color: #ffffff;
      opacity: 60%;

      img {
        width: 24px;
        height: 24px;
      }

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
      }
    }

    #pt {
      ${e=>(e==null?void 0:e.language)==="pt"&&at`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }

    #en {
      ${e=>(e==null?void 0:e.language)==="en"&&at`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }
  }
`,Ky=()=>{const{language:e,setLanguage:t}=U.exports.useContext(Aa);return k(Jy,{language:e,children:[k("div",{className:"sections",children:[k("button",{onClick:()=>Lt("status"),style:{color:"#4AE290",opacity:"100%",fontWeight:"bold"},children:[c(Fu,{})," Status"]}),c("button",{onClick:()=>Lt("hero"),children:"Home"}),c("button",{onClick:()=>Lt("aboutMe"),children:c(F,{id:"about-me"})}),c("button",{onClick:()=>Lt("portfolio"),children:c(F,{id:"portfolio"})}),c("button",{onClick:()=>Lt("skills"),children:"Skills"}),c("button",{onClick:()=>Lt("career"),children:c(F,{id:"career"})}),c("button",{onClick:()=>Lt("recommendations"),children:c(F,{id:"recommendations"})}),c("button",{onClick:()=>Lt("contacts"),children:c(F,{id:"contact"})})]}),k("div",{className:"lang",children:[k("button",{id:"pt",className:"language",onClick:()=>t("pt"),children:["PT ",c("img",{src:Fp,alt:""})]}),k("button",{id:"en",className:"language",onClick:()=>t("en"),children:["EN ",c("img",{src:Bp,alt:""})]})]})]})},e2=te.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 40px;
  width: 100%;

  background-color: var(--DARK);
  z-index: 10;

  position: absolute;
  top: 0;
  filter: drop-shadow(0px 20px 100px #090e16);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 90%;
    padding: 12px 24px;

    background: rgba(123, 74, 226, 0.15);
    border-radius: 16px;

    > img {
      width: 32px;
      height: 32px;
    }

    .social-medias {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 16px;
    }
  }
`,t2=()=>c(e2,{children:k("div",{className:"content",children:[c("img",{src:fy,alt:""}),c(Ky,{})]})});var n2=U.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ut=function(t,n,r){var i=r.get(t);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function Ld(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Yp=U.exports.forwardRef(function(e,t){var n=e.alt,r=e.color,i=e.size,o=e.weight,a=e.mirrored,s=e.children,l=e.renderPath,f=Ld(e,["alt","color","size","weight","mirrored","children","renderPath"]),d=U.exports.useContext(n2),y=d.color,g=y===void 0?"currentColor":y,S=d.size,m=d.weight,x=m===void 0?"regular":m,b=d.mirrored,v=b===void 0?!1:b,h=Ld(d,["color","size","weight","mirrored"]);return k("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i!=null?i:S,height:i!=null?i:S,fill:r!=null?r:g,viewBox:"0 0 256 256",transform:a||v?"scale(-1, 1)":void 0},h,f),children:[!!n&&c("title",{children:n}),s,c("rect",{width:"256",height:"256",fill:"none"}),l(o!=null?o:x,r!=null?r:g)]})});Yp.displayName="IconBase";const Ht=Yp;var Hn=new Map;Hn.set("bold",function(e){return k(M,{children:[c("line",{x1:"128",y1:"32",x2:"128",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("polyline",{points:"56 104 128 176 200 104",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("line",{x1:"40",y1:"216",x2:"216",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Hn.set("duotone",function(e){return k(M,{children:[c("line",{x1:"128",y1:"32",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("polyline",{points:"56 112 128 184 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"40",y1:"216",x2:"216",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Hn.set("fill",function(){return c(M,{children:c("path",{d:"M50.3,117.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,56,104h64V32a8,8,0,0,1,16,0v72h64a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8l-72,72a8.2,8.2,0,0,1-11.4,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"})})});Hn.set("light",function(e){return k(M,{children:[c("line",{x1:"128",y1:"32",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("polyline",{points:"56 112 128 184 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("line",{x1:"40",y1:"216",x2:"216",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Hn.set("thin",function(e){return k(M,{children:[c("line",{x1:"128",y1:"32",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("polyline",{points:"56 112 128 184 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("line",{x1:"40",y1:"216",x2:"216",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Hn.set("regular",function(e){return k(M,{children:[c("line",{x1:"128",y1:"32",x2:"128",y2:"184",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("polyline",{points:"56 112 128 184 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"40",y1:"216",x2:"216",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var r2=function(t,n){return Ut(t,n,Hn)},Zp=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:r2})})});Zp.displayName="ArrowLineDown";const Qp=Zp;var $n=new Map;$n.set("bold",function(e){return k(M,{children:[c("line",{x1:"128",y1:"216",x2:"128",y2:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("polyline",{points:"56 112 128 40 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});$n.set("duotone",function(e){return k(M,{children:[c("line",{x1:"128",y1:"216",x2:"128",y2:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("polyline",{points:"56 112 128 40 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});$n.set("fill",function(){return c(M,{children:c("path",{d:"M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z"})})});$n.set("light",function(e){return k(M,{children:[c("line",{x1:"128",y1:"216",x2:"128",y2:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("polyline",{points:"56 112 128 40 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});$n.set("thin",function(e){return k(M,{children:[c("line",{x1:"128",y1:"216",x2:"128",y2:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("polyline",{points:"56 112 128 40 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});$n.set("regular",function(e){return k(M,{children:[c("line",{x1:"128",y1:"216",x2:"128",y2:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("polyline",{points:"56 112 128 40 200 112",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var i2=function(t,n){return Ut(t,n,$n)},Jp=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:i2})})});Jp.displayName="ArrowUp";const o2=Jp;var Wn=new Map;Wn.set("bold",function(e){return c(M,{children:c("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});Wn.set("duotone",function(e){return k(M,{children:[c("polygon",{points:"160 208 80 128 160 48 160 208",opacity:"0.2"}),c("polygon",{points:"160 208 80 128 160 48 160 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Wn.set("fill",function(){return c(M,{children:c("path",{d:"M163.1,40.6a8.4,8.4,0,0,0-8.8,1.7l-80,80a8.1,8.1,0,0,0,0,11.4l80,80A8.3,8.3,0,0,0,160,216a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,168,208V48A8,8,0,0,0,163.1,40.6Z"})})});Wn.set("light",function(e){return c(M,{children:c("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});Wn.set("thin",function(e){return c(M,{children:c("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});Wn.set("regular",function(e){return c(M,{children:c("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var a2=function(t,n){return Ut(t,n,Wn)},Kp=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:a2})})});Kp.displayName="CaretLeft";const s2=Kp;var Vn=new Map;Vn.set("bold",function(e){return c(M,{children:c("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});Vn.set("duotone",function(e){return k(M,{children:[c("polygon",{points:"96 48 176 128 96 208 96 48",opacity:"0.2"}),c("polygon",{points:"96 48 176 128 96 208 96 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Vn.set("fill",function(){return c(M,{children:c("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"})})});Vn.set("light",function(e){return c(M,{children:c("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});Vn.set("thin",function(e){return c(M,{children:c("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});Vn.set("regular",function(e){return c(M,{children:c("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var l2=function(t,n){return Ut(t,n,Vn)},e0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:l2})})});e0.displayName="CaretRight";const u2=e0;var Gn=new Map;Gn.set("bold",function(e){return k(M,{children:[c("polyline",{points:"220 176 220 36 80 36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("rect",{x:"40",y:"76",width:"140",height:"140",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Gn.set("duotone",function(e){return k(M,{children:[c("rect",{x:"40",y:"72",width:"144",height:"144",opacity:"0.2"}),c("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Gn.set("fill",function(){return k(M,{children:[c("path",{d:"M216,32H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"}),c("rect",{x:"32",y:"64",width:"160",height:"160",rx:"8"})]})});Gn.set("light",function(e){return k(M,{children:[c("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Gn.set("thin",function(e){return k(M,{children:[c("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Gn.set("regular",function(e){return k(M,{children:[c("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var c2=function(t,n){return Ut(t,n,Gn)},t0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:c2})})});t0.displayName="CopySimple";const Nd=t0;var Xn=new Map;Xn.set("bold",function(e){return k(M,{children:[c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("line",{x1:"110.9",y1:"145.1",x2:"156.1",y2:"99.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Xn.set("duotone",function(e){return k(M,{children:[c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",opacity:"0.2"}),c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"110.9",y1:"145.1",x2:"156.1",y2:"99.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Xn.set("fill",function(){return c(M,{children:c("path",{d:"M227.7,48.3,175.3,234.2a15.9,15.9,0,0,1-14.1,11.6h-1.4a16,16,0,0,1-14.4-9.1l-35.7-75.4a4.1,4.1,0,0,1,.8-4.6l51.3-51.3a8,8,0,1,0-11.3-11.3L99.2,145.5a4.1,4.1,0,0,1-4.6.8l-75-35.5a16.6,16.6,0,0,1-9.5-15.6A15.9,15.9,0,0,1,21.8,80.7L208.1,28.2a16,16,0,0,1,17.7,6.5A16.7,16.7,0,0,1,227.7,48.3Z"})})});Xn.set("light",function(e){return k(M,{children:[c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("line",{x1:"110.9",y1:"145.1",x2:"156.1",y2:"99.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Xn.set("thin",function(e){return k(M,{children:[c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("line",{x1:"110.9",y1:"145.1",x2:"156.1",y2:"99.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Xn.set("regular",function(e){return k(M,{children:[c("path",{d:"M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"110.9",y1:"145.1",x2:"156.1",y2:"99.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var d2=function(t,n){return Ut(t,n,Xn)},n0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:d2})})});n0.displayName="PaperPlaneTilt";const f2=n0;var qn=new Map;qn.set("bold",function(e){return c(M,{children:c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});qn.set("duotone",function(e){return k(M,{children:[c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",opacity:"0.2"}),c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});qn.set("fill",function(){return c(M,{children:c("path",{d:"M232.3,114.3,88.3,26.4a15.5,15.5,0,0,0-16.1-.3A15.8,15.8,0,0,0,64,40V216a15.8,15.8,0,0,0,8.2,13.9,15.5,15.5,0,0,0,16.1-.3l144-87.9a16,16,0,0,0,0-27.4Z"})})});qn.set("light",function(e){return c(M,{children:c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});qn.set("thin",function(e){return c(M,{children:c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});qn.set("regular",function(e){return c(M,{children:c("path",{d:"M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var h2=function(t,n){return Ut(t,n,qn)},r0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:h2})})});r0.displayName="Play";const p2=r0;var Yn=new Map;Yn.set("bold",function(e){return k(M,{children:[c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Yn.set("duotone",function(e){return k(M,{children:[c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8Z",opacity:"0.2"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8Z",opacity:"0.2"}),c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Yn.set("fill",function(){return c(M,{children:c("path",{d:"M116,72v88a48,48,0,0,1-48,48,8,8,0,0,1,0-16,32.1,32.1,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32.1,32.1,0,0,1-32,32,8,8,0,0,0,0,16,48,48,0,0,0,48-48V72A16,16,0,0,0,216,56Z"})})});Yn.set("light",function(e){return k(M,{children:[c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Yn.set("thin",function(e){return k(M,{children:[c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Yn.set("regular",function(e){return k(M,{children:[c("path",{d:"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("path",{d:"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var m2=function(t,n){return Ut(t,n,Yn)},i0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:m2})})});i0.displayName="Quotes";const Dd=i0;var Zn=new Map;Zn.set("bold",function(e){return k(M,{children:[c("path",{d:"M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("path",{d:"M80,103.5A23.9,23.9,0,0,1,104,80h3.5a7.9,7.9,0,0,1,6.8,3.9l7.4,12.3a7.8,7.8,0,0,1,.3,7.7l-4.7,9.6h0a36,36,0,0,0,25.2,25.2h0l9.6-4.7a7.8,7.8,0,0,1,7.7.3l12.3,7.4a7.9,7.9,0,0,1,3.9,6.8V152a23.9,23.9,0,0,1-23.5,24A71.9,71.9,0,0,1,80,103.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Zn.set("duotone",function(e){return k(M,{children:[c("path",{d:"M128,32A96.1,96.1,0,0,0,45.4,177h0L36,210.2a7.9,7.9,0,0,0,9.8,9.8L79,210.6h0A96,96,0,1,0,128,32Zm24.1,152A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6A28.1,28.1,0,0,1,152.1,184Z",opacity:"0.2"}),c("path",{d:"M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("path",{d:"M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Zn.set("fill",function(){return k(M,{children:[c("path",{d:"M128,24A104,104,0,0,0,36.8,178l-8.5,30A15.9,15.9,0,0,0,48,227.7l30-8.5A104,104,0,1,0,128,24Zm24.1,168H152a88.1,88.1,0,0,1-88-88.1A36,36,0,0,1,100,68a14.9,14.9,0,0,1,12.9,7.5L124.6,96a15.8,15.8,0,0,1-.2,16.1L117.3,124A41.4,41.4,0,0,0,132,138.7l11.9-7.1a15.8,15.8,0,0,1,16.1-.2l20.5,11.7A14.9,14.9,0,0,1,188,156,36,36,0,0,1,152.1,192Z"}),c("path",{d:"M136.5,154.7a8.1,8.1,0,0,1-7.4.4,55.4,55.4,0,0,1-28.2-28.2,8.1,8.1,0,0,1,.4-7.4l9.4-15.6L99.4,84A19.9,19.9,0,0,0,80,103.9,72,72,0,0,0,152,176h.1A19.9,19.9,0,0,0,172,156.6l-19.9-11.3Z"})]})});Zn.set("light",function(e){return k(M,{children:[c("path",{d:"M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("path",{d:"M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Zn.set("thin",function(e){return k(M,{children:[c("path",{d:"M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("path",{d:"M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Zn.set("regular",function(e){return k(M,{children:[c("path",{d:"M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("path",{d:"M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var g2=function(t,n){return Ut(t,n,Zn)},o0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:g2})})});o0.displayName="WhatsappLogo";const v2=o0;var Qn=new Map;Qn.set("bold",function(e){return k(M,{children:[c("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});Qn.set("duotone",function(e){return k(M,{children:[c("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});Qn.set("fill",function(){return c(M,{children:c("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"})})});Qn.set("light",function(e){return k(M,{children:[c("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});Qn.set("thin",function(e){return k(M,{children:[c("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});Qn.set("regular",function(e){return k(M,{children:[c("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var y2=function(t,n){return Ut(t,n,Qn)},a0=U.exports.forwardRef(function(e,t){return c(Ht,{...Object.assign({ref:t},e,{renderPath:y2})})});a0.displayName="X";const w2=a0,x2=te.button`
  transition: all 0.2s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 10px 16px;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  :hover {
    transition: all 0.2s ease-out;
    border: 1px solid transparent;
    background: rgba(123, 74, 226, 0.1);
  }

  h1 {
    margin: 0;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: rgba(123, 74, 226, 0.5);
    white-space: nowrap;
  }
`,Bu=()=>k(x2,{onClick:()=>window.open("https://api.whatsapp.com/send/?phone=5512991668819"),children:[c(v2,{size:24,weight:"thin",color:"rgba(123, 74, 226, 0.5)"}),c("h1",{children:c(F,{id:"lets-talk"})})]}),S2=te.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;
  margin: 0;

  width: fit-content;
  height: 45px;
  background: rgba(123, 74, 226, 0.1);
  border-radius: 16px;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  color: var(--PURPLE);

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
    height: auto;
    border-radius: 8px;
  }
`,_n=({text:e,id:t})=>c(S2,{id:t,children:c(F,{id:e})}),Uu="/assets/behance-white-circle.e0dfdd94.svg",Hu="/assets/figma-white-circle.c4ba3f83.svg",$u="/assets/github-white-circle.2ca6c016.svg",Wu="/assets/linkedin-white-circle.6a979d62.svg",s0="/assets/hero-avatar.11db8b10.svg",l0="/assets/curriculo-henrique-out-2023.ab2c0f7b.pdf",E2=te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 200px;

  .left {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .name-and-title {
      h1 {
        margin: 24px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 52px;
        line-height: 61px;

        color: #ffffff;
      }

      h6 {
        margin: 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        opacity: 50%;
      }
    }

    .social-medias {
      display: flex;
      margin-top: 24px;
      gap: 16px;

      img {
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        :hover {
          transition: all 0.4s ease-in-out;
          scale: 110%;
        }
      }
    }
  }

  > img {
    transition: all 0.8s ease-in-out;
    height: 600px;

    :hover {
      transition: all 0.8s ease-in-out;
      scale: 105%;
    }
  }

  .right {
    a {
      appearance: none;
      text-decoration: none;

      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: flex-center;
      justify-content: flex-end;
      margin-bottom: 8px;
      gap: 4px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;

      text-align: center;
      text-justify: center;

      color: rgba(123, 74, 226, 0.5);

      :hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        opacity: 0.5;
      }

      svg {
        margin-top: -4px !important;
      }
    }
  }
`,b2=()=>k(E2,{children:[k("div",{className:"left",children:[c(_n,{text:"greetings"}),k("div",{className:"name-and-title",children:[k("h1",{children:["Henrique ",c("br",{})," Sousa"]}),c("h6",{children:"Front-end developer \xB7 UI designer"})]}),k("div",{className:"social-medias",children:[c("img",{src:Wu,alt:"",onClick:()=>window.open("https://www.linkedin.com/in/hsousadev/")}),c("img",{src:$u,alt:"",onClick:()=>window.open("https://github.com/hsousadev")}),c("img",{src:Hu,alt:"",onClick:()=>window.open("https://www.figma.com/@hsousadev")}),c("img",{src:Uu,alt:"",onClick:()=>window.open("https://www.behance.net/hsousadev")})]})]}),c("img",{src:s0,alt:""}),k("div",{className:"right",children:[k("a",{href:l0,download:"resume-henrique-jun-2023.pdf",target:"_blank",children:[c(F,{id:"download"})," CV",c(Qp,{size:24,color:"rgba(123, 74, 226, 0.5)"})]}),c(Bu,{})]})]}),k2=te.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  margin-top: 32px;

  button.pulse {
    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    appearance: none;
    border: none;
    gap: 4px;
    margin-top: 32px;

    background: rgba(74, 226, 144, 0.1);
    padding: 8px 16px;
    border-radius: 8px;

    font-size: 16px;
  }

  img.avatar {
    transition: all 0.6s ease-in-out;
    height: 500px;
    margin-top: 40px;
    margin-left: 5%;
  }

  .social-medias {
    width: 100%;
    gap: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lang {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button.language {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      outline: none;
      border: none;
      width: 56px;
      margin-top: 32px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      display: flex;

      color: #ffffff;
      opacity: 60%;

      img {
        width: 24px;
        height: 24px;
      }

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
        opacity: 100%;
      }
    }

    #pt {
      ${e=>(e==null?void 0:e.language)==="pt"&&at`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }

    #en {
      ${e=>(e==null?void 0:e.language)==="en"&&at`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }
  }

  .texts {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .name-and-title {
      h1 {
        margin: 16px 0 4px 0;

        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;

        color: #ffffff;
      }

      h6 {
        margin: 0;
        white-space: nowrap;

        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        opacity: 50%;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 24px;

      margin-bottom: 8px;
      margin-top: 24px;

      zoom: 90%;

      a {
        margin: 0;
        appearance: none;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;

        display: flex;
        align-items: flex-center;
        justify-content: flex-end;
        gap: 4px;

        font-family: "Raleway";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        text-justify: center;

        color: rgba(123, 74, 226, 0.5);

        :hover {
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          opacity: 0.5;
        }

        svg {
          margin-top: -4px !important;
        }
      }
    }
  }

  @media (max-width: 500px) {
    img.avatar {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    .texts {
      .name-and-title {
        h6 {
          white-space: initial;
        }
      }

      .buttons {
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`,_2=()=>{const{language:e,setLanguage:t}=U.exports.useContext(Aa);return k(k2,{language:e,children:[k("div",{className:"social-medias",children:[c("img",{src:Wu,alt:"",onClick:()=>window.open("https://www.linkedin.com/in/justhenrique/")}),c("img",{src:$u,alt:"",onClick:()=>window.open("https://github.com/justhenrique")}),c("img",{src:Hu,alt:"",onClick:()=>window.open("https://www.figma.com/@henriquedesousa")}),c("img",{src:Uu,alt:"",onClick:()=>window.open("https://www.behance.net/justhenriquedesign")})]}),k("div",{className:"lang",children:[k("button",{id:"pt",className:"language",onClick:()=>t("pt"),children:["PT ",c("img",{src:Fp,alt:""})]}),k("button",{id:"en",className:"language",onClick:()=>t("en"),children:["EN ",c("img",{src:Bp,alt:""})]})]}),k("button",{className:"pulse",onClick:()=>Lt("status"),style:{color:"#4AE290",opacity:"100%",fontWeight:"bold"},children:[c(Fu,{})," Status"]}),c("img",{className:"avatar",src:s0,alt:""}),k("div",{className:"texts",children:[c(_n,{text:"greetings"}),k("div",{className:"name-and-title",children:[k("h1",{children:["Henrique ",c("br",{})," Sousa"]}),c("h6",{children:"Front-end developer \xB7 UI designer"})]}),k("div",{className:"buttons",children:[k("a",{href:l0,download:"resume-henrique-jun-2023.pdf",target:"_blank",children:[c(F,{id:"download"})," CV"," ",c(Qp,{size:24,color:"rgba(123, 74, 226, 0.5)"})]}),c(Bu,{})]})]})]})},P2=te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,T2=()=>{const t=Bt().windowWidth<=960;return c(P2,{children:t?c(_2,{}):c(b2,{})})},C2=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 1640px;
  width: 100%;

  @media (max-width: 1150px) {
    zoom: 90%;
  }

  @media (max-width: 1045px) {
    zoom: 80%;
  }

  @media (max-width: 960px) {
    zoom: 100%;
  }
`,I2=()=>{const t=Bt().windowWidth<=960;return k(C2,{id:"hero",children:[!t&&c(t2,{}),c(T2,{})]})},A2=te.div`
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 20px 30px 20px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  width: 246px;
  height: 200px;

  ${e=>e.area==="Trabalhos"&&at`
      background-color: rgba(123, 74, 226, 0.1);
      border: 1px solid transparent;
    `}

  :hover {
    transition: all 0.5s ease-in-out;
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }

  h5 {
    margin: 8px 0 0 0;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }

  h1 {
    margin: 0;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
  }
`,Kn=({img:e,yearsDesc:t,area:n})=>k(A2,{area:n,children:[c("img",{src:e,alt:""}),c("h5",{children:c(F,{id:t})}),c("h1",{children:c(F,{id:n})})]}),_l="/assets/code-icon.902b38c7.svg",Pl="/assets/design-icon.af34c719.svg",Rd="/assets/projects-icon.e3511740.svg",L2=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 140px 0px;
  padding: 100px 0;

  border-top: 1px solid rgba(123, 74, 226, 0.2);
  border-bottom: 1px solid rgba(123, 74, 226, 0.2);

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 32px;
  }

  .descriptions {
    transition: all 0.5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 28px 20px;
    width: 898px;
    gap: 120px;

    div {
      width: 206px;

      h5 {
        margin: 0;
        text-align: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #7b4ae2;
      }

      h1 {
        margin: 0;
        text-align: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #7b4ae2;
      }
    }
  }

  @media (max-width: 1040px) {
    zoom: 90%;
  }

  @media (max-width: 960px) {
    .cards {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    margin: 80px 0px;
    padding: 80px 0px;

    .cards {
      zoom: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 340px) {
    zoom: 80%;
  }
`,N2=()=>{const e=Bt(),t=e.windowWidth<=960;return k(L2,{id:"experienceYears",children:[c("div",{className:"cards",children:e.windowWidth<=768?k(M,{children:[c(Kn,{img:_l,yearsDesc:"three-years-as-a",area:"developer"}),c(Kn,{img:Pl,yearsDesc:"4-years-as-a",area:"designer"}),c(Kn,{img:Rd,yearsDesc:"seven-years-of",area:"work"})]}):k(M,{children:[c(Kn,{img:_l,yearsDesc:"three-years-as-a",area:"developer"}),c(Kn,{img:Rd,yearsDesc:"seven-years-of",area:"work"}),c(Kn,{img:Pl,yearsDesc:"4-years-as-a",area:"designer"})]})}),!t&&k("div",{className:"descriptions",children:[k("div",{children:[c("h5",{children:c(F,{id:"developer"})}),c("h1",{children:"Front-end"})]}),k("div",{children:[c("h5",{children:c(F,{id:"dozens-of-projects-and"})}),c("h1",{children:c(F,{id:"experiences"})})]}),k("div",{children:[c("h5",{children:c(F,{id:"freelance-designer-and"})}),c("h1",{children:"UI Designer"})]})]})]})},D2="/assets/profile-pic.ddf96083.png",R2=te.div`
  width: 100%;
  max-width: 1640px;
  margin-bottom: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .description {
    width: 926px;

    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;

      color: #ffffff;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;

      color: #ffffff;
      opacity: 50%;
    }
  }

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 1280px) {
    flex-direction: column;

    .description {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 48px;
    zoom: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > img {
      height: 200px;
    }

    margin-bottom: 80px;

    .description {
      width: 100%;
      margin-top: 32px;

      h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 28px;

        color: #ffffff;
      }

      p {
        margin: 32px 0 0 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        /* or 179% */
      }
    }
  }
`,O2=()=>k(R2,{id:"aboutMe",children:[c("img",{src:D2,alt:""}),k("div",{className:"description",children:[c(_n,{text:"about-me-emoji"}),k("h1",{children:["Washington Henrique ",c("br",{})," Fernandes de Sousa"]}),k("p",{children:["\u{1F44B} Hello world,"," ",c(F,{id:"you-can-call-me-henrique-pleasure"})," ",c("br",{}),c("br",{}),"\u{1F468}\u200D\u{1F4BB} ",c(F,{id:"for-over-3-years-developing"})," ",c("br",{}),"\u{1F393} ",c(F,{id:"graduated-in-ads"})," ",c("br",{}),"\u{1F4A1} ",c(F,{id:"interests-in-front-end"})," ",c("br",{}),c("br",{}),"\u{1F680} ",c(F,{id:"trying-to-be-a-little-better"})]})]})]}),M2=te.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 5px 8px;
  width: fit-content;

  border-radius: 8px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;

  ${e=>e!=null&&e.online?at`
          color: #4ae290;
          background: rgba(74, 226, 144, 0.3);
        `:e!=null&&e.beta?at`
          background: #7b4ae2;
          color: white;
        `:at`
          color: #7b4ae2;
          background: rgba(123, 74, 226, 0.1);
        `};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,ds=({text:e,online:t,beta:n})=>c(M2,{beta:n,online:t,children:e}),j2=te.div`
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  width: 360px;
  height: 460px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  :hover {
    transition: all 0.4s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    padding: 30px;
    height: 100%;

    .info {
      h5 {
        margin: 0 0 8px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;

        color: #ffffff;
      }

      p {
        margin: 0 0 16px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: #ffffff;
        opacity: 50%;
      }
    }

    .tags-and-banner {
      .tags {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        margin-bottom: 24px;
        width: 100%;
        flex-wrap: wrap;
      }

      img {
        width: 300px;
        height: 200px;
        border-radius: 8px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 370px;

    .content {
      padding: 24px;

      .info {
        h5 {
          font-size: 16px;
          line-height: 19px;
        }

        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0 0 8px 0;
        }
      }

      .tags-and-banner {
        .tags {
          margin-bottom: 16px;
        }

        img {
          width: 252px;
          height: 160px;
        }
      }
    }
  }
`,le=({title:e,description:t,tags:n,bannerUrl:r,redirectUrl:i,online:o,beta:a})=>c(j2,{onClick:()=>window.open(`${i}`),children:k("div",{className:"content",children:[k("div",{className:"info",children:[c("h5",{children:e}),c("p",{children:c(F,{id:t})})]}),k("div",{className:"tags-and-banner",children:[c("div",{className:"tags",children:n.map((s,l)=>s==="Beta"?c(ds,{text:s,beta:a},l):s==="Online"?c(ds,{text:s,online:o},l):c(ds,{text:s},l))}),c("img",{src:r,alt:""})]})]})}),z2=()=>k(M,{children:[c(le,{title:"Nanot\xEDcia",description:"site-that-brings-together",tags:["Online","Beta","Next.js","React.js","Typescript"],bannerUrl:"https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png",redirectUrl:"https://nanoticia.vercel.app/",online:!0,beta:!0}),c(le,{title:"FinanceApp.js",description:"finance-releases-app",tags:["Node.js","Prisma","Next.js","React.js","Typescript"],bannerUrl:"https://s3-alpha.figma.com/hub/file/3650468509/38fd4283-8459-4fa9-8b5b-b057a26f9edc-cover.png",redirectUrl:"https://github.com/justhenrique/finapp-web-react"}),c(le,{title:"Ignite Lab Design System",description:"application-focused",tags:["React JS","Typescript","Storybook","Design System"],bannerUrl:"https://user-images.githubusercontent.com/54003876/236646671-8b2e4383-cd70-4a14-8fec-bfe114d68e55.png",redirectUrl:"https://github.com/justhenrique/ignite-lab-design-system"}),c(le,{title:"Rick And Morty Wiki",description:"all-about-characters-episodes-and-more",tags:["Online","Next.js","React.js","Typescript"],bannerUrl:"https://user-images.githubusercontent.com/54003876/245583973-6981008c-0103-4e96-9f81-d02ca218ddb1.png",redirectUrl:"https://rickandmortysite.vercel.app/",online:!0}),c(le,{title:"Leadster | Landing Page",description:"leadster-landing-page",tags:["Online","Next.js","React.js","Typescript","Styled-components"],bannerUrl:"https://user-images.githubusercontent.com/54003876/248530834-11d0e8a8-4a6b-49d7-a26c-1f852be8a5f5.png",redirectUrl:"https://leadster-landing-page.vercel.app/",online:!0}),c(le,{title:"Spacetime",description:"memories-time-capsule-app",tags:["Next.js","React.js","Typescript","TailwindCss"],bannerUrl:"https://user-images.githubusercontent.com/54003876/239767355-8dc91004-9c47-4186-981d-e4556e99f569.png",redirectUrl:"https://github.com/justhenrique/nlw-spacetime-web-react"}),c(le,{title:"Radio Web Browser",description:"browser-radio-web",tags:["Online","Next.js","React.js","Typescript","Styled-components"],bannerUrl:"https://user-images.githubusercontent.com/54003876/248300629-1fb0fc32-9ef0-4f88-bc72-0b1543781257.png",redirectUrl:"https://radio-browser-web.vercel.app/",online:!0}),c(le,{title:"Metropolitan Museum of Art",description:"site-to-find-countless",tags:["Online","Next.js","React.js","Typescript","Styled-components"],bannerUrl:"https://user-images.githubusercontent.com/54003876/247148740-874ef4ae-ea39-402b-bff8-0c863b96084a.png",redirectUrl:"https://metropolitan-museum-of-art-web.vercel.app/",online:!0}),c(le,{title:"Move.it",description:"nlw-04-rocketseat",tags:["Online","React JS","Typescript"],bannerUrl:"https://user-images.githubusercontent.com/54003876/108790703-226de300-755c-11eb-9590-f958ff60c91d.png",redirectUrl:"https://moveit-beta-gold.vercel.app/",online:!0}),c(le,{title:"Adicionei",description:"contact-management-web-app",tags:["Next.js","React.js","Typescript"],bannerUrl:"https://user-images.githubusercontent.com/54003876/234316093-88e43f19-7a72-4300-b24f-924f1f299457.png",redirectUrl:"https://github.com/justhenrique/adicionei"}),c(le,{title:"OneCar",description:"web-and-mobile-app-for-car-sales-ads",tags:["React JS","React Native","Typescript"],bannerUrl:"https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png",redirectUrl:"https://github.com/OneCar-API"}),c(le,{title:"eSports",description:"nlw-esports-rocketseat",tags:["React JS","React Native","Node"],bannerUrl:"https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png",redirectUrl:"https://github.com/justhenrique/esports-nlw-rocketseat"}),c(le,{title:"CarsOn",description:"web-app-for-car-sales-and-purchases",tags:["React JS","Typescript","Node"],bannerUrl:"https://user-images.githubusercontent.com/54003876/133915603-84a02ac8-f7a3-4c90-bca8-dca231fe6778.png",redirectUrl:"https://github.com/Cars-on"}),c(le,{title:"LetMeAsk",description:"nlw-05-rocketseat",tags:["React JS","Typescript","SCSS"],bannerUrl:"https://user-images.githubusercontent.com/54003876/126014850-8c0dc36e-8aeb-4d1a-84c0-9a1c1e20c128.png",redirectUrl:"https://github.com/justhenrique/esports-nlw-rocketseat"}),c(le,{title:"Typext",description:"web-app-for-creating-and-managing-digital-minutes",tags:["React JS","Typescript","Javascript","Styled-components"],bannerUrl:"https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png",redirectUrl:"https://github.com/justhenrique/typext-frontend"}),c(le,{title:"Proffy",description:"nlw-02-rocketseat",tags:["Express","Nunjucks","JavaScript","HTML","CSS"],bannerUrl:"https://user-images.githubusercontent.com/54003876/107502115-07bc6700-6b77-11eb-8e13-58c757a4ec94.png",redirectUrl:"https://github.com/justhenrique/proffy"})]}),F2=()=>k(M,{children:[c(le,{title:"Biplan",description:"a-platform-for-production-control",tags:["Design","Identidade Visual"],bannerUrl:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/917280115177581.Y3JvcCwxMzgwLDEwODAsMjU2LDA.png",redirectUrl:"https://github.com/justhenrique/esports-nlw-rocketseat"}),c(le,{title:"CarsOn | UI Design",description:"experience-and-user-interfaces-for-carson",tags:["UI Design"],bannerUrl:"https://s3-alpha.figma.com/hub/file/1925447461/b574f42b-f4dd-4b5f-8e3e-33218867b443-cover.png",redirectUrl:"https://www.figma.com/community/file/1162159871260028405"}),c(le,{title:"rubiti",description:"specialized-brand-providing-services",tags:["Design","Logo"],bannerUrl:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ec7093115181081.Y3JvcCwxNzg5LDE0MDAsMzI3LDA.png",redirectUrl:"https://www.behance.net/gallery/115181081/rubiti"}),c(le,{title:"Typext | UI Design",description:"web-app-for-creating-and-managing-digital-minutes",tags:["UI Design"],bannerUrl:"https://s3-alpha.figma.com/hub/file/1683931930/e07eb0e5-54cb-48be-af3e-d796ee5eaf1b-cover.png",redirectUrl:"https://www.figma.com/community/file/1162160606182370806"}),c(le,{title:"Re-design site Ensinio | UI Design",description:"re-design-ensinio",tags:["UI Design","Re-design"],bannerUrl:"https://s3-alpha.figma.com/hub/file/2494220563/03033aaa-f74a-4478-bf73-9f18dae1e4cd-cover.png",redirectUrl:"https://www.figma.com/community/file/1164776880594444677"}),c(le,{title:"Web Portf\xF3lio \xB7 Matheus Campos | UI Design",description:"design-created-for-matheus-campos",tags:["UI Design"],bannerUrl:"https://s3-alpha.figma.com/hub/file/1878891985/cab9faa8-1376-4488-ab71-125e5832e138-cover.png",redirectUrl:"https://www.figma.com/community/file/1162157859305054706"}),c(le,{title:"Rominfo",description:"rominfo-provides-services",tags:["Design","Identidade Visual"],bannerUrl:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f01cd8115183845.Y3JvcCwxMzgwLDEwODAsMzIxLDA.png",redirectUrl:"https://github.com/justhenrique/esports-nlw-rocketseat"}),c(le,{title:"Instagram Dark Mode | UI Design",description:"re-creation-of-the-instagram",tags:["UI Design","Re-design"],bannerUrl:"https://s3-alpha.figma.com/hub/file/2424161642/ff58a337-4773-43ab-82d8-77b26214c837-cover.png",redirectUrl:"https://www.figma.com/community/file/1162155986654328303"}),c(le,{title:"Nanot\xEDcia | UI Design",description:"site-that-brings-together",tags:["UI Design","Guide-style","Palette"],bannerUrl:"https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png",redirectUrl:"https://www.figma.com/community/file/1225460016773089534/Nanot%C3%ADcia"}),c(le,{title:"FinanceApp.js | UI Design",description:"finance-releases-app",tags:["UI Design","Guide-style","Palette"],bannerUrl:"https://s3-alpha.figma.com/hub/file/3650468509/38fd4283-8459-4fa9-8b5b-b057a26f9edc-cover.png",redirectUrl:"https://www.figma.com/community/file/1250517871747480571/FinanceApp.js"}),c(le,{title:"Rick And Morty Wiki | UI Design",description:"all-about-characters-episodes-and-more",tags:["UI Design","Palette"],bannerUrl:"https://user-images.githubusercontent.com/54003876/245583973-6981008c-0103-4e96-9f81-d02ca218ddb1.png",redirectUrl:"https://www.figma.com/community/file/1225458908057208058/Rick-and-Morty"}),c(le,{title:"My Web Portfolio | UI Design",description:"the-design-of-that-website-you-are-selling",tags:["UI Design","Palette"],bannerUrl:"https://user-images.githubusercontent.com/54003876/245594812-c3f08d5a-638b-4f53-8877-f18c673a98d9.png",redirectUrl:"https://www.figma.com/community/file/1162385628597290713/My-Web-Portfolio"})]});var u0={},c0={},d0={},ya={},Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.TraceDirectionKey=Oe.Direction=Oe.Axis=void 0;var Tl;Oe.TraceDirectionKey=Tl;(function(e){e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.NONE="NONE"})(Tl||(Oe.TraceDirectionKey=Tl={}));var Cl;Oe.Direction=Cl;(function(e){e.TOP="TOP",e.LEFT="LEFT",e.RIGHT="RIGHT",e.BOTTOM="BOTTOM",e.NONE="NONE"})(Cl||(Oe.Direction=Cl={}));var Il;Oe.Axis=Il;(function(e){e.X="x",e.Y="y"})(Il||(Oe.Axis=Il={}));Object.defineProperty(ya,"__esModule",{value:!0});ya.calculateDirection=B2;var fs=Oe;function B2(e){var t,n=fs.TraceDirectionKey.NEGATIVE,r=fs.TraceDirectionKey.POSITIVE,i=e[e.length-1],o=e[e.length-2]||0;return e.every(function(a){return a===0})?fs.TraceDirectionKey.NONE:(t=i>o?r:n,i===0&&(t=o<0?r:n),t)}var wa={},mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.resolveAxisDirection=mt.getDirectionValue=mt.getDirectionKey=mt.getDifference=void 0;var it=Oe,U2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Object.keys(t).toString();switch(n){case it.TraceDirectionKey.POSITIVE:return it.TraceDirectionKey.POSITIVE;case it.TraceDirectionKey.NEGATIVE:return it.TraceDirectionKey.NEGATIVE;default:return it.TraceDirectionKey.NONE}};mt.getDirectionKey=U2;var H2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t[t.length-1]||0};mt.getDirectionValue=H2;var $2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(t-n)};mt.getDifference=$2;var W2=function(t,n){var r=it.Direction.LEFT,i=it.Direction.RIGHT,o=it.Direction.NONE;return t===it.Axis.Y&&(r=it.Direction.BOTTOM,i=it.Direction.TOP),n===it.TraceDirectionKey.NEGATIVE&&(o=r),n===it.TraceDirectionKey.POSITIVE&&(o=i),o};mt.resolveAxisDirection=W2;Object.defineProperty(wa,"__esModule",{value:!0});wa.calculateDirectionDelta=G2;var V2=Oe,$r=mt;function G2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e.length,r=n-1,i=V2.TraceDirectionKey.NONE;r>=0;r--){var o=e[r],a=(0,$r.getDirectionKey)(o),s=(0,$r.getDirectionValue)(o[a]),l=e[r-1]||{},f=(0,$r.getDirectionKey)(l),d=(0,$r.getDirectionValue)(l[f]),y=(0,$r.getDifference)(s,d);if(y>=t){i=a;break}else i=f}return i}var xa={};Object.defineProperty(xa,"__esModule",{value:!0});xa.calculateDuration=X2;function X2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e?t-e:0}var Vu={};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.calculateMovingPosition=q2;function q2(e){if("changedTouches"in e){var t=e.changedTouches&&e.changedTouches[0];return{x:t&&t.clientX,y:t&&t.clientY}}return{x:e.clientX,y:e.clientY}}var Gu={},Sa={};Object.defineProperty(Sa,"__esModule",{value:!0});Sa.updateTrace=Y2;function Y2(e,t){var n=e[e.length-1];return n!==t&&e.push(t),e}var Ea={},ba={};Object.defineProperty(ba,"__esModule",{value:!0});ba.calculateTraceDirections=Z2;var to=Oe;function Od(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z2(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[],n=to.TraceDirectionKey.POSITIVE,r=to.TraceDirectionKey.NEGATIVE,i=0,o=[],a=to.TraceDirectionKey.NONE;i<e.length;i++){var s=e[i],l=e[i-1];if(o.length){var f=s>l?n:r;a===to.TraceDirectionKey.NONE&&(a=f),f===a?o.push(s):(t.push(Od({},a,o.slice())),o=[],o.push(s),a=f)}else s!==0&&(a=s>0?n:r),o.push(s)}return o.length&&t.push(Od({},a,o)),t}Object.defineProperty(Ea,"__esModule",{value:!0});Ea.resolveDirection=tw;var Q2=ya,J2=ba,K2=wa,Md=mt,ew=Oe;function tw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ew.Axis.X,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n){var r=(0,J2.calculateTraceDirections)(e),i=(0,K2.calculateDirectionDelta)(r,n);return(0,Md.resolveAxisDirection)(t,i)}var o=(0,Q2.calculateDirection)(e);return(0,Md.resolveAxisDirection)(t,o)}var ka={};Object.defineProperty(ka,"__esModule",{value:!0});ka.calculateVelocity=nw;function nw(e,t,n){var r=Math.sqrt(e*e+t*t);return r/(n||1)}Object.defineProperty(Gu,"__esModule",{value:!0});Gu.calculatePosition=ow;var jd=Sa,zd=Ea,rw=xa,iw=ka,Fd=Oe;function ow(e,t){var n=e.start,r=e.x,i=e.y,o=e.traceX,a=e.traceY,s=t.rotatePosition,l=t.directionDelta,f=s.x-r,d=i-s.y,y=Math.abs(f),g=Math.abs(d);(0,jd.updateTrace)(o,f),(0,jd.updateTrace)(a,d);var S=(0,zd.resolveDirection)(o,Fd.Axis.X,l),m=(0,zd.resolveDirection)(a,Fd.Axis.Y,l),x=(0,rw.calculateDuration)(n,Date.now()),b=(0,iw.calculateVelocity)(y,g,x);return{absX:y,absY:g,deltaX:f,deltaY:d,directionX:S,directionY:m,duration:x,positionX:s.x,positionY:s.y,velocity:b}}var _a={};Object.defineProperty(_a,"__esModule",{value:!0});_a.checkIsMoreThanSingleTouches=void 0;var aw=function(t){return Boolean(t.touches&&t.touches.length>1)};_a.checkIsMoreThanSingleTouches=aw;var Li={},Pa={};Object.defineProperty(Pa,"__esModule",{value:!0});Pa.createOptions=sw;function sw(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(e,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),e}Object.defineProperty(Li,"__esModule",{value:!0});Li.checkIsPassiveSupported=uw;Li.noop=void 0;var lw=Pa;function uw(e){if(typeof e=="boolean")return e;var t={isPassiveSupported:e};try{var n=(0,lw.createOptions)(t);window.addEventListener("checkIsPassiveSupported",Al,n),window.removeEventListener("checkIsPassiveSupported",Al,n)}catch{}return t.isPassiveSupported}var Al=function(){};Li.noop=Al;var Ta={};Object.defineProperty(Ta,"__esModule",{value:!0});Ta.checkIsTouchEventsSupported=void 0;function Ll(e){return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ll(e)}var cw=function(){return(typeof window>"u"?"undefined":Ll(window))==="object"&&("ontouchstart"in window||Boolean(window.navigator.maxTouchPoints))};Ta.checkIsTouchEventsSupported=cw;var Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});Ca.getInitialState=void 0;function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bd(Object(n),!0).forEach(function(r){fw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var hw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dw({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},t)};Ca.getInitialState=hw;var Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});Ia.getInitialProps=void 0;function Ud(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ud(Object(n),!0).forEach(function(r){mw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ud(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pw({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},t)};Ia.getInitialProps=gw;var Xu={};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.getOptions=vw;function vw(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return e?{passive:!1}:{}}var qu={};Object.defineProperty(qu,"__esModule",{value:!0});qu.rotateByAngle=yw;function yw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(t===0)return e;var n=e.x,r=e.y,i=Math.PI/180*t,o=n*Math.cos(i)+r*Math.sin(i),a=r*Math.cos(i)-n*Math.sin(i);return{x:o,y:a}}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ya;Object.keys(t).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===t[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return t[u]}})});var n=wa;Object.keys(n).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===n[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return n[u]}})});var r=xa;Object.keys(r).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===r[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return r[u]}})});var i=Vu;Object.keys(i).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===i[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return i[u]}})});var o=Gu;Object.keys(o).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===o[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return o[u]}})});var a=ba;Object.keys(a).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===a[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return a[u]}})});var s=ka;Object.keys(s).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===s[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return s[u]}})});var l=_a;Object.keys(l).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===l[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return l[u]}})});var f=Li;Object.keys(f).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===f[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return f[u]}})});var d=Ta;Object.keys(d).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===d[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return d[u]}})});var y=mt;Object.keys(y).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===y[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return y[u]}})});var g=Pa;Object.keys(g).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===g[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return g[u]}})});var S=Ca;Object.keys(S).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===S[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return S[u]}})});var m=Ia;Object.keys(m).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===m[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return m[u]}})});var x=Xu;Object.keys(x).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===x[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return x[u]}})});var b=Ea;Object.keys(b).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===b[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return b[u]}})});var v=qu;Object.keys(v).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===v[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return v[u]}})});var h=Sa;Object.keys(h).forEach(function(u){u==="default"||u==="__esModule"||u in e&&e[u]===h[u]||Object.defineProperty(e,u,{enumerable:!0,get:function(){return h[u]}})})})(d0);(function(e){function t(g){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},t(g)}Object.defineProperty(e,"__esModule",{value:!0});var n={};e.default=void 0;var r=a(d0),i=Oe;Object.keys(i).forEach(function(g){g==="default"||g==="__esModule"||Object.prototype.hasOwnProperty.call(n,g)||g in e&&e[g]===i[g]||Object.defineProperty(e,g,{enumerable:!0,get:function(){return i[g]}})});function o(g){if(typeof WeakMap!="function")return null;var S=new WeakMap,m=new WeakMap;return(o=function(b){return b?m:S})(g)}function a(g,S){if(!S&&g&&g.__esModule)return g;if(g===null||t(g)!=="object"&&typeof g!="function")return{default:g};var m=o(S);if(m&&m.has(g))return m.get(g);var x={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in g)if(v!=="default"&&Object.prototype.hasOwnProperty.call(g,v)){var h=b?Object.getOwnPropertyDescriptor(g,v):null;h&&(h.get||h.set)?Object.defineProperty(x,v,h):x[v]=g[v]}return x.default=g,m&&m.set(g,x),x}function s(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")}function l(g,S){for(var m=0;m<S.length;m++){var x=S[m];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}function f(g,S,m){return S&&l(g.prototype,S),m&&l(g,m),Object.defineProperty(g,"prototype",{writable:!1}),g}function d(g,S,m){return S in g?Object.defineProperty(g,S,{value:m,enumerable:!0,configurable:!0,writable:!0}):g[S]=m,g}var y=function(){function g(S){s(this,g),d(this,"state",void 0),d(this,"props",void 0),this.state=r.getInitialState(),this.props=r.getInitialProps(S),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return f(g,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(m){var x=this.props,b=Object.assign({},x,m);if(x.element!==b.element||x.target!==b.target){this.destroy(),this.props=b,this.init();return}this.props=b,(x.mouseTrackingEnabled!==b.mouseTrackingEnabled||x.preventTrackingOnMouseleave!==b.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),b.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),x.touchTrackingEnabled!==b.touchTrackingEnabled&&(this.cleanupTouchListeners(),b.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=r.getInitialState(),this.props=r.getInitialProps()}},{key:"setupTouchListeners",value:function(){var m=this.props,x=m.element,b=m.target,v=m.touchTrackingEnabled;if(x&&v){var h=b||x,u=r.checkIsPassiveSupported(),p=r.getOptions(u);h.addEventListener("touchstart",this.handleSwipeStart,p),h.addEventListener("touchmove",this.handleSwipeMove,p),h.addEventListener("touchend",this.handleSwipeEnd,p)}}},{key:"cleanupTouchListeners",value:function(){var m=this.props,x=m.element,b=m.target,v=b||x;v&&(v.removeEventListener("touchstart",this.handleSwipeStart),v.removeEventListener("touchmove",this.handleSwipeMove),v.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var m=this.props,x=m.element,b=m.mouseTrackingEnabled,v=m.preventTrackingOnMouseleave;b&&x&&(x.addEventListener("mousedown",this.handleMouseDown),x.addEventListener("mousemove",this.handleMouseMove),x.addEventListener("mouseup",this.handleMouseUp),v&&x.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var m=this.props.element;m&&(m.removeEventListener("mousedown",this.handleMouseDown),m.removeEventListener("mousemove",this.handleMouseMove),m.removeEventListener("mouseup",this.handleMouseUp),m.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(m){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},b=this.props.rotationAngle,v=x.directionDelta,h=r.calculateMovingPosition(m),u=r.rotateByAngle(h,b);return r.calculatePosition(this.state,{rotatePosition:u,directionDelta:v})}},{key:"handleSwipeStart",value:function(m){if(!r.checkIsMoreThanSingleTouches(m)){var x=this.props.rotationAngle,b=r.calculateMovingPosition(m),v=r.rotateByAngle(b,x),h=v.x,u=v.y;this.state=r.getInitialState({isSwiping:!1,start:Date.now(),x:h,y:u})}}},{key:"handleSwipeMove",value:function(m){var x=this.state,b=x.x,v=x.y,h=x.isSwiping;if(!(!b||!v||r.checkIsMoreThanSingleTouches(m))){var u=this.props.directionDelta||0,p=this.getEventData(m,{directionDelta:u}),w=p.absX,E=p.absY,_=p.deltaX,T=p.deltaY,D=p.directionX,N=p.directionY,R=p.duration,q=p.velocity,Q=this.props,ne=Q.delta,pe=Q.preventDefaultTouchmoveEvent,Ye=Q.onSwipeStart,be=Q.onSwiping;m.cancelable&&pe&&m.preventDefault(),!(w<Number(ne)&&E<Number(ne)&&!h)&&(Ye&&!h&&Ye(m,{deltaX:_,deltaY:T,absX:w,absY:E,directionX:D,directionY:N,duration:R,velocity:q}),this.state.isSwiping=!0,be&&be(m,{deltaX:_,deltaY:T,absX:w,absY:E,directionX:D,directionY:N,duration:R,velocity:q}))}}},{key:"handleSwipeEnd",value:function(m){var x=this.props,b=x.onSwiped,v=x.onTap;if(this.state.isSwiping){var h=this.props.directionDelta||0,u=this.getEventData(m,{directionDelta:h});b&&b(m,u)}else{var p=this.getEventData(m);v&&v(m,p)}this.state=r.getInitialState()}},{key:"handleMouseDown",value:function(m){var x=this.props.target;x?x===m.target&&this.handleSwipeStart(m):this.handleSwipeStart(m)}},{key:"handleMouseMove",value:function(m){this.handleSwipeMove(m)}},{key:"handleMouseUp",value:function(m){var x=this.state.isSwiping,b=this.props.target;b?(b===m.target||x)&&this.handleSwipeEnd(m):this.handleSwipeEnd(m)}},{key:"handleMouseLeave",value:function(m){var x=this.state.isSwiping;x&&this.handleSwipeEnd(m)}}],[{key:"isTouchEventsSupported",value:function(){return r.checkIsTouchEventsSupported()}}]),g}();e.default=y})(c0);var f0={},Ft={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Modifiers=e.Classnames=e.AutoplayDirection=e.ControlsStrategy=e.AutoPlayStrategy=e.AnimationType=e.EventType=void 0,function(t){t.ACTION="action",t.INIT="init",t.RESIZE="resize",t.UPDATE="update"}(e.EventType||(e.EventType={})),function(t){t.FADEOUT="fadeout",t.SLIDE="slide"}(e.AnimationType||(e.AnimationType={})),function(t){t.DEFAULT="default",t.ALL="all",t.ACTION="action",t.NONE="none"}(e.AutoPlayStrategy||(e.AutoPlayStrategy={})),function(t){t.DEFAULT="default",t.ALTERNATE="alternate",t.RESPONSIVE="responsive"}(e.ControlsStrategy||(e.ControlsStrategy={})),function(t){t.RTL="rtl",t.LTR="ltr"}(e.AutoplayDirection||(e.AutoplayDirection={})),function(t){t.ANIMATED="animated animated-out fadeOut",t.ROOT="alice-carousel",t.WRAPPER="alice-carousel__wrapper",t.STAGE="alice-carousel__stage",t.STAGE_ITEM="alice-carousel__stage-item",t.DOTS="alice-carousel__dots",t.DOTS_ITEM="alice-carousel__dots-item",t.PLAY_BTN="alice-carousel__play-btn",t.PLAY_BTN_ITEM="alice-carousel__play-btn-item",t.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",t.SLIDE_INFO="alice-carousel__slide-info",t.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",t.BUTTON_PREV="alice-carousel__prev-btn",t.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",t.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",t.BUTTON_NEXT="alice-carousel__next-btn",t.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",t.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(e.Classnames||(e.Classnames={})),function(t){t.ACTIVE="__active",t.INACTIVE="__inactive",t.CLONED="__cloned",t.CUSTOM="__custom",t.PAUSE="__pause",t.SEPARATOR="__separator",t.SSR="__ssr",t.TARGET="__target"}(e.Modifiers||(e.Modifiers={}))})(Ft);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultProps=void 0;var t=Ft;e.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:t.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:t.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:t.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:t.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}}})(f0);var h0={},p0={},Nr={},hs={},ps={},Yu={};(function(e){var t=function(){return(t=Object.assign||function(n){for(var r,i=1,o=arguments.length;i<o;i++)for(var a in r=arguments[i])Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);return n}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.mapPositionCoords=e.mapPartialCoords=void 0,e.mapPartialCoords=function(n){return n.map(function(r){return{width:r.width,position:0}})},e.mapPositionCoords=function(n,r){return r===void 0&&(r=0),n.map(function(i){return i.position>r?t(t({},i),{position:r}):i})}})(Yu);var Ni={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isVerticalTouchmoveDetected=e.getFadeoutAnimationPosition=e.getFadeoutAnimationIndex=e.getSwipeTouchendIndex=e.getSwipeTouchendPosition=e.getSwipeTransformationCursor=e.getTransformationItemIndex=e.getSwipeShiftValue=e.getItemCoords=e.getIsLeftDirection=e.shouldRecalculateSwipePosition=e.getSwipeLimitMax=e.getSwipeLimitMin=e.shouldCancelSlideAnimation=e.shouldRecalculateSlideIndex=e.getUpdateSlidePositionIndex=e.getActiveIndex=e.getStartIndex=e.getShiftIndex=void 0,e.getShiftIndex=function(t,n){return(t=t===void 0?0:t)+(n=n===void 0?0:n)},e.getStartIndex=function(t,n){if(t===void 0&&(t=0),n=n===void 0?0:n){if(n<=t)return n-1;if(0<t)return t}return 0},e.getActiveIndex=function(i){var n=i.startIndex,n=n===void 0?0:n,r=i.itemsCount,i=i.infinite;return i!==void 0&&i?n:e.getStartIndex(n,r===void 0?0:r)},e.getUpdateSlidePositionIndex=function(t,n){return t<0?n-1:n<=t?0:t},e.shouldRecalculateSlideIndex=function(t,n){return t<0||n<=t},e.shouldCancelSlideAnimation=function(t,n){return t<0||n<=t},e.getSwipeLimitMin=function(i,a){var r=i.itemsOffset,i=i.transformationSet,i=i===void 0?[]:i,o=a.infinite,a=a.swipeExtraPadding;return o?(i[r===void 0?0:r]||{}).position:(o=(i[0]||{}).width,Math.min(a===void 0?0:a,o===void 0?0:o))},e.getSwipeLimitMax=function(l,i){var r=i.infinite,i=i.swipeExtraPadding,i=i===void 0?0:i,o=l.itemsCount,a=l.itemsOffset,s=l.itemsInSlide,s=s===void 0?1:s,l=l.transformationSet,l=l===void 0?[]:l;return r?(l[(o===void 0?1:o)+e.getShiftIndex(s,a===void 0?0:a)]||{}).position||0:e.getItemCoords(-s,l).position+i},e.shouldRecalculateSwipePosition=function(t,n,r){return-n<=t||Math.abs(t)>=r},e.getIsLeftDirection=function(t){return(t=t===void 0?0:t)<0},e.getItemCoords=function(t,n){return(n=n===void 0?[]:n).slice(t=t===void 0?0:t)[0]||{position:0,width:0}},e.getSwipeShiftValue=function(t,n){return t===void 0&&(t=0),n===void 0&&(n=[]),e.getItemCoords(t,n).position},e.getTransformationItemIndex=function(t,n){return n===void 0&&(n=0),(t=t===void 0?[]:t).findIndex(function(r){return r.position>=Math.abs(n)})},e.getSwipeTransformationCursor=function(t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=0),r===void 0&&(r=0),t=e.getTransformationItemIndex(t,n),e.getIsLeftDirection(r)?t:t-1},e.getSwipeTouchendPosition=function(l,d,f){f===void 0&&(f=0);var i=l.infinite,o=l.autoWidth,a=l.isStageContentPartial,s=l.swipeAllowedPositionMax,l=l.transformationSet,f=e.getSwipeTransformationCursor(l,f,d),d=e.getItemCoords(f,l).position;if(!i){if(o&&a)return 0;if(s<d)return-s}return-d},e.getSwipeTouchendIndex=function(t,d){var r=d.transformationSet,i=d.itemsInSlide,o=d.itemsOffset,a=d.itemsCount,s=d.infinite,l=d.isStageContentPartial,f=d.activeIndex,d=d.translate3d;return!s&&(l||d===Math.abs(t))?f:(l=e.getTransformationItemIndex(r,t),s?l<(d=e.getShiftIndex(i,o))?a-i-o+l:d+a<=l?l-(d+a):l-d:l)},e.getFadeoutAnimationIndex=function(i){var n=i.infinite,r=i.activeIndex,i=i.itemsInSlide;return n?r+i:r},e.getFadeoutAnimationPosition=function(t,i){var r=i.activeIndex,i=i.stageWidth;return t<r?(r-t)*-i||0:(t-r)*i||0},e.isVerticalTouchmoveDetected=function(t,n,r){return t<(r=r===void 0?0:r)||t<.1*n}})(Ni);var Hd;function m0(){return Hd||(Hd=1,function(e){var t=function(){return(t=Object.assign||function(d){for(var y,g=1,S=arguments.length;g<S;g++)for(var m in y=arguments[g])Object.prototype.hasOwnProperty.call(y,m)&&(d[m]=y[m]);return d}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.getTransformMatrix=e.getTranslateXProperty=e.getTouchmoveTranslatePosition=e.getTranslate3dProperty=e.getRenderStageItemStyles=e.getRenderStageStyles=e.getTransitionProperty=e.getRenderWrapperStyles=e.animate=e.shouldHandleResizeEvent=e.getElementFirstChild=e.getElementCursor=e.getAutoheightProperty=e.getElementDimensions=e.getItemWidth=e.createDefaultTransformationSet=e.createAutowidthTransformationSet=e.isElement=e.createClones=e.getItemsOffset=e.getItemsCount=e.getSlides=void 0,Zu()),r=Yu,i=Ni;function o(d){return d&&d.getBoundingClientRect?{width:(d=d.getBoundingClientRect()).width,height:d.height}:{width:0,height:0}}function a(d,y,g){return(y=y===void 0?{}:y).width!==(g=g===void 0?{}:g).width}function s(d,m){var m=m||{},g=m.position,g=g===void 0?0:g,S=m.animationDuration,S=S===void 0?0:S,m=m.animationEasingFunction,m=m===void 0?"ease":m;return e.isElement(d)&&(d.style.transition="transform "+S+"ms "+m+" 0ms",d.style.transform="translate3d("+g+"px, 0, 0)"),d}function l(d){return d=f(d),d=d&&d[4]||"",Number(d)}function f(d){return e.isElement(d)&&getComputedStyle(d).transform.match(/(-?[0-9.]+)/g)||[]}e.getSlides=function(g){var y=g.children,g=g.items;return y?y.length?y:[y]:g===void 0?[]:g},e.getItemsCount=function(d){return e.getSlides(d).length},e.getItemsOffset=function(S){var y=S.infinite,g=S.paddingRight,S=S.paddingLeft;return y&&(S||g)?1:0},e.createClones=function(m){var y=e.getSlides(m);if(!m.infinite)return y;var g=e.getItemsCount(m),S=e.getItemsOffset(m),m=n.getItemsInSlide(g,m),b=Math.min(m,g)+S,x=y.slice(0,b),b=y.slice(-b);return S&&m===g&&(S=y[0],m=y.slice(-1)[0],b.unshift(m),x.push(S)),b.concat(y,x)},e.isElement=function(d){try{return d instanceof Element||d instanceof HTMLDocument}catch{return!1}},e.createAutowidthTransformationSet=function(d,y,g){y===void 0&&(y=0),g===void 0&&(g=!1);var S=0,m=!0,x=[];return e.isElement(d)&&(x=Array.from(d.children||[]).reduce(function(b,E,p){var u=0,p=p-1,w=b[p],E=o(E==null?void 0:E.firstChild).width,E=E===void 0?0:E;return m=(S+=E)<=y,w&&(u=p==0?w.width:w.width+w.position),b.push({position:u,width:E}),b},[]),g||(x=m?r.mapPartialCoords(x):(d=S-y,r.mapPositionCoords(x,d)))),{coords:x,content:S,partial:m}},e.createDefaultTransformationSet=function(d,y,g,S){S===void 0&&(S=!1);var m=0,x=!0,b=[],v=e.getItemWidth(y,g);return b=d.reduce(function(h,u,E){var w=0,E=h[E-1];return x=(m+=v)<=y,E&&(w=v+E.position||0),h.push({width:v,position:w}),h},[]),{coords:b=S?b:x?r.mapPartialCoords(b):(g=m-y,r.mapPositionCoords(b,g)),content:m,partial:x}},e.getItemWidth=function(d,y){return 0<y?d/y:d},e.getElementDimensions=o,e.getAutoheightProperty=function(d,S,m){var S=e.getElementCursor(S,m),m=e.getElementFirstChild(d,S);if(e.isElement(m))return d=getComputedStyle(m),S=parseFloat(d.marginTop),d=parseFloat(d.marginBottom),Math.ceil(m.offsetHeight+S+d)},e.getElementCursor=function(d,S){var g=S.activeIndex,S=S.itemsInSlide;return d.infinite?g+S+e.getItemsOffset(d):g},e.getElementFirstChild=function(d,y){return d=d&&d.children||[],d[y]&&d[y].firstChild||null},e.shouldHandleResizeEvent=a,e.animate=s,e.getRenderWrapperStyles=function(d,y,g){var x=d||{},S=x.paddingLeft,m=x.paddingRight,b=x.autoHeight,x=x.animationDuration,b=b?e.getAutoheightProperty(g,d,y):void 0;return{height:b,transition:b?"height "+x+"ms":void 0,paddingLeft:S+"px",paddingRight:m+"px"}},e.getTransitionProperty=function(g){var g=g||{},y=g.animationDuration,g=g.animationEasingFunction;return"transform "+(y===void 0?0:y)+"ms "+(g===void 0?"ease":g)+" 0ms"},e.getRenderStageStyles=function(d,y){return d=(d||{}).translate3d,d="translate3d("+-(d===void 0?0:d)+"px, 0, 0)",t(t({},y),{transform:d})},e.getRenderStageItemStyles=function(d,x){var b=x.transformationSet,g=x.fadeoutAnimationIndex,S=x.fadeoutAnimationPosition,m=x.fadeoutAnimationProcessing,x=x.animationDuration,b=(b[d]||{}).width;return m&&g===d?{transform:"translateX("+S+"px)",animationDuration:x+"ms",width:b+"px"}:{width:b}},e.getTranslate3dProperty=function(d,b){var g=d,S=b.infinite,m=b.itemsOffset,x=b.itemsInSlide,b=b.transformationSet;return((b===void 0?[]:b)[g=S?d+i.getShiftIndex(x===void 0?0:x,m===void 0?0:m):g]||{}).position||0},e.getTouchmoveTranslatePosition=function(d,y){return-(y-Math.floor(d))},e.getTranslateXProperty=l,e.getTransformMatrix=f}(ps)),ps}var $d;function Zu(){return $d||($d=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateInitialState=e.getItemsInSlide=e.getIsStageContentPartial=e.concatClassnames=e.canUseDOM=void 0;var t=m0(),n=Ni;e.canUseDOM=function(){var r;try{return Boolean((r=window==null?void 0:window.document)==null?void 0:r.createElement)}catch{return!1}},e.concatClassnames=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return r.filter(Boolean).join(" ")},e.getIsStageContentPartial=function(r,i,o){return i===void 0&&(i=0),o===void 0&&(o=0),!(r=r!==void 0&&r)&&o<=i},e.getItemsInSlide=function(r,d){var o,a=1,s=d.responsive,l=d.autoWidth,f=d.infinite,d=d.innerWidth;return l!==void 0&&l?f!==void 0&&f?r:a:(s&&(l=Object.keys(s)).length&&(d||e.canUseDOM())&&(o=d||window.innerWidth,l.forEach(function(y){Number(y)<o&&(a=Math.min(s[y].items,r)||a)})),a)},e.calculateInitialState=function(w,i,o){o===void 0&&(o=!1);var a,s,l=w.animationDuration,l=l===void 0?0:l,f=w.infinite,f=f!==void 0&&f,d=w.autoPlay,d=d!==void 0&&d,y=w.autoWidth,y=y!==void 0&&y,g=t.createClones(w),S=t.getTransitionProperty(),m=t.getItemsCount(w),x=t.getItemsOffset(w),b=e.getItemsInSlide(m,w),v=n.getStartIndex(w.activeIndex,m),v=n.getActiveIndex({startIndex:v,itemsCount:m,infinite:f}),h=t.getElementDimensions(i).width,u=(s=(i=y?(a=(i=t.createAutowidthTransformationSet(i,h,f)).coords,s=i.content,i.partial):(a=(i=t.createDefaultTransformationSet(g,h,b,f)).coords,s=i.content,i.partial),s),n.getItemCoords(-b,a=a).position),p=n.getSwipeLimitMin({itemsOffset:x,transformationSet:a},w),w=n.getSwipeLimitMax({itemsCount:m,itemsOffset:x,itemsInSlide:b,transformationSet:a},w),E=n.getSwipeShiftValue(m,a);return{activeIndex:v,autoWidth:y,animationDuration:l,clones:g,infinite:f,itemsCount:m,itemsInSlide:b,itemsOffset:x,translate3d:t.getTranslate3dProperty(v,{itemsInSlide:b,itemsOffset:x,transformationSet:a,autoWidth:y,infinite:f}),stageWidth:h,stageContentWidth:s,initialStageHeight:0,isStageContentPartial:i,isAutoPlaying:Boolean(d),isAutoPlayCanceledOnAction:!1,transformationSet:a,transition:S,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:p,swipeLimitMax:w,swipeAllowedPositionMax:u,swipeShiftValue:E,canUseDom:o||e.canUseDOM()}}}(hs)),hs}var g0={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isClonedItem=e.isTargetItem=e.isActiveItem=e.getRenderStageItemClasses=void 0;var t=Ft,n=Zu(),r=Ni;e.getRenderStageItemClasses=function(d,f){d===void 0&&(d=0);var a=f.fadeoutAnimationIndex,s=e.isActiveItem(d,f)?t.Modifiers.ACTIVE:"",l=e.isClonedItem(d,f)?t.Modifiers.CLONED:"",f=e.isTargetItem(d,f)?t.Modifiers.TARGET:"",d=d===a?t.Classnames.ANIMATED:"";return n.concatClassnames(t.Classnames.STAGE_ITEM,s,l,f,d)},e.isActiveItem=function(i,d){i===void 0&&(i=0);var a=d.activeIndex,s=d.itemsInSlide,l=d.itemsOffset,f=d.infinite,d=d.autoWidth,y=r.getShiftIndex(s,l);return d&&f?i-y===a+l:(d=a+y,f?d<=i&&i<d+s:a<=i&&i<d)},e.isTargetItem=function(i,f){i===void 0&&(i=0);var a=f.activeIndex,d=f.itemsInSlide,s=f.itemsOffset,l=f.infinite,f=f.autoWidth,d=r.getShiftIndex(d,s);return l?f&&l?i-d===a+s:i===a+d:i===a},e.isClonedItem=function(i,d){i===void 0&&(i=0);var a=d.itemsInSlide,s=d.itemsOffset,l=d.itemsCount,f=d.infinite,d=d.autoWidth;return f?d&&f?i<a||l-1+a<i:(d=r.getShiftIndex(a,s),i<d||l-1+d<i):!1}})(g0);var v0={};(function(e){function t(n,r){r===void 0&&(r=0);var i=void 0;return function(){for(var o=this,a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];i&&(clearTimeout(i),i=void 0),i=window.setTimeout(function(){n.apply(o,a),i=void 0},r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=void 0,e.debounce=t})(v0);var y0={};(function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]}Object.defineProperty(e,"__esModule",{value:!0}),e.debug=void 0,e.debug=t})(y0);var w0={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getSlideItemInfo=e.getSlideInfo=e.getSlideIndexForMultipleItems=e.getSlideIndexForNonMultipleItems=e.getActiveSlideDotsLength=e.getActiveSlideIndex=void 0,e.getActiveSlideIndex=function(t,i){var i=i||{},o=i.activeIndex,r=i.itemsInSlide,i=i.itemsCount,o=o+r;return r===1?e.getSlideIndexForNonMultipleItems(o,r,i):e.getSlideIndexForMultipleItems(o,r,i,t)},e.getActiveSlideDotsLength=function(t,n){var r;return n===void 0&&(n=1),(t=t===void 0?0:t)&&n?(r=Math.floor(t/n),t%n==0?r-1:r):0},e.getSlideIndexForNonMultipleItems=function(t,n,r){return t<n?r-n:r<t?0:t-1},e.getSlideIndexForMultipleItems=function(t,n,r,i){var o=e.getActiveSlideDotsLength(r,n);return t===r+n?0:i||t<n&&t!==0?o:t===0?r%n==0?o:o-1:0<n?Math.floor(t/n)-1:0},e.getSlideInfo=function(t,n){return n===void 0&&(n=0),t=(t=t===void 0?0:t)+1,t<1?t=n:n<t&&(t=1),{item:t,itemsCount:n}},e.getSlideItemInfo=function(n){var n=n||{},r=n.itemsInSlide,i=n.activeIndex,o=n.infinite,a=n.itemsCount;return n.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:o===!1&&i===0,isNextSlideDisabled:o===!1&&a-r<=i}}})(w0);var x0={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shouldCancelAutoPlayOnHover=e.shouldCancelAutoPlayOnAction=e.getItemIndexForDotNavigation=e.checkIsTheLastDotIndex=e.getDotsNavigationLength=e.hasDotForEachSlide=e.isStrategy=e.shouldDisableButtons=e.shouldDisableDots=e.shouldDisableControls=void 0;var t=Ft;function n(s,d){var s=(s||{}).controlsStrategy,d=d||{},l=d.itemsInSlide,f=d.itemsCount,d=d.autoWidth;if(e.isStrategy(s,t.ControlsStrategy.RESPONSIVE))return!d&&l===f}function r(o,a){return o.disableDotsControls||n(o,a)}function i(o,a){return o.disableButtonsControls||!o.infinite&&n(o,a)}e.shouldDisableControls=n,e.shouldDisableDots=r,e.shouldDisableButtons=i,e.isStrategy=function(o,a){return o&&o.includes(a)},e.hasDotForEachSlide=function(o,a){return o||e.isStrategy(a,t.ControlsStrategy.ALTERNATE)},e.getDotsNavigationLength=function(o,a,s){return o===void 0&&(o=0),a===void 0&&(a=1),s?o:Number(a)!==0&&Math.ceil(o/a)||0},e.checkIsTheLastDotIndex=function(o,a,s){return!a&&o===s-1},e.getItemIndexForDotNavigation=function(o,a,s,l){return(a?s-l:o*l)||0},e.shouldCancelAutoPlayOnAction=function(o){return(o=o===void 0?"":o)===t.AutoPlayStrategy.ACTION||o===t.AutoPlayStrategy.ALL},e.shouldCancelAutoPlayOnHover=function(o){return(o=o===void 0?"":o)===t.AutoPlayStrategy.DEFAULT||o===t.AutoPlayStrategy.ALL}})(x0);(function(e){var t=Object.create?function(r,i,o,a){a===void 0&&(a=o),Object.defineProperty(r,a,{enumerable:!0,get:function(){return i[o]}})}:function(r,i,o,a){r[a=a===void 0?o:a]=i[o]},n=function(r,i){for(var o in r)o==="default"||i.hasOwnProperty(o)||t(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(Zu(),e),n(m0(),e),n(g0,e),n(v0,e),n(Ni,e),n(y0,e),n(w0,e),n(x0,e),n(Yu,e)})(Nr);(function(e){var t=function(o){return o&&o.__esModule?o:{default:o}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInfo=void 0,t(U.exports)),r=Ft,i=Nr;e.SlideInfo=function(s){var l=s.activeIndex,a=s.itemsCount,s=s.renderSlideInfo,l=i.getSlideInfo(l,a).item;return typeof s=="function"?n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},s({item:l,itemsCount:a})):(s=i.concatClassnames(r.Classnames.SLIDE_INFO_ITEM,r.Modifiers.SEPARATOR),n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},l),n.default.createElement("span",{className:s},"/"),n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},a)))}})(p0);var S0={};(function(e){var t=function(r){return r&&r.__esModule?r:{default:r}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.StageItem=void 0,t(U.exports));e.StageItem=function(a){var i=a.item,o=a.className,a=a.styles;return n.default.createElement("li",{style:a,className:o},i)}})(S0);var E0={};(function(e){var t=function(o){return o&&o.__esModule?o:{default:o}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.DotsNavigation=void 0,t(U.exports)),r=Ft,i=Nr;e.DotsNavigation=function(x){var a=x.state,s=x.onClick,l=x.onMouseEnter,f=x.onMouseLeave,d=x.controlsStrategy,y=x.renderDotsItem,g=a.itemsCount,S=a.itemsInSlide,m=a.infinite,x=a.autoWidth,b=a.activeIndex,v=i.getSlideItemInfo(a).isNextSlideDisabled,h=i.hasDotForEachSlide(x,d),u=i.getDotsNavigationLength(g,S,h);return n.default.createElement("ul",{className:r.Classnames.DOTS},Array.from({length:g}).map(function(p,w){var E,_,T;if(w<u)return _=i.checkIsTheLastDotIndex(w,Boolean(m),u),E=i.getItemIndexForDotNavigation(w,_,g,S),_=i.getActiveSlideIndex(v,a),h&&((_=b)<0?_=g-1:g<=b&&(_=0),E=w),_=_===w?r.Modifiers.ACTIVE:"",T=y?r.Modifiers.CUSTOM:"",T=i.concatClassnames(r.Classnames.DOTS_ITEM,_,T),n.default.createElement("li",{key:"dot-item-"+w,onMouseEnter:l,onMouseLeave:f,onClick:function(){return s(E)},className:T},y&&y({isActive:_,activeIndex:w}))}))}})(E0);var b0={};(function(e){var t=function(o){return o&&o.__esModule?o:{default:o}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PlayPauseButton=void 0,t(U.exports)),r=Ft,i=Nr;e.PlayPauseButton=function(l){var a=l.isPlaying,s=l.onClick,l=l.renderPlayPauseButton;return typeof l=="function"?n.default.createElement("div",{className:r.Classnames.PLAY_BTN,onClick:s},l({isPlaying:a})):(l=a?r.Modifiers.PAUSE:"",a=i.concatClassnames(r.Classnames.PLAY_BTN_ITEM,l),n.default.createElement("div",{className:r.Classnames.PLAY_BTN},n.default.createElement("div",{className:r.Classnames.PLAY_BTN_WRAPPER},n.default.createElement("div",{onClick:s,className:a}))))}})(b0);var k0={};(function(e){var t=function(o){return o&&o.__esModule?o:{default:o}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=void 0,t(U.exports)),r=Ft,i=Nr;e.PrevNextButton=function(s){var l=s.name,d=s.isDisabled,a=s.onClick,y=s.renderPrevButton,s=s.renderNextButton;if(typeof y=="function")return n.default.createElement("div",{className:r.Classnames.BUTTON_PREV,onClick:a},y({isDisabled:d}));if(typeof s=="function")return n.default.createElement("div",{className:r.Classnames.BUTTON_NEXT,onClick:a},s({isDisabled:d}));var y=l==="prev",s=y?"<":">",l=y?r.Classnames.BUTTON_PREV:r.Classnames.BUTTON_NEXT,f=y?r.Classnames.BUTTON_PREV_WRAPPER:r.Classnames.BUTTON_NEXT_WRAPPER,y=y?r.Classnames.BUTTON_PREV_ITEM:r.Classnames.BUTTON_NEXT_ITEM,d=d?r.Modifiers.INACTIVE:"",y=i.concatClassnames(y,d);return n.default.createElement("div",{className:l},n.default.createElement("div",{className:f},n.default.createElement("p",{className:y,onClick:a},n.default.createElement("span",{"data-area":s}))))}})(k0);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=e.PlayPauseButton=e.DotsNavigation=e.StageItem=e.SlideInfo=void 0;var t=p0,n=(Object.defineProperty(e,"SlideInfo",{enumerable:!0,get:function(){return t.SlideInfo}}),S0),r=(Object.defineProperty(e,"StageItem",{enumerable:!0,get:function(){return n.StageItem}}),E0),i=(Object.defineProperty(e,"DotsNavigation",{enumerable:!0,get:function(){return r.DotsNavigation}}),b0),o=(Object.defineProperty(e,"PlayPauseButton",{enumerable:!0,get:function(){return i.PlayPauseButton}}),k0);Object.defineProperty(e,"PrevNextButton",{enumerable:!0,get:function(){return o.PrevNextButton}})})(h0);(function(e){var t=function(){var v=function(h,u){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,w){p.__proto__=w}||function(p,w){for(var E in w)w.hasOwnProperty(E)&&(p[E]=w[E])})(h,u)};return function(h,u){function p(){this.constructor=h}v(h,u),h.prototype=u===null?Object.create(u):(p.prototype=u.prototype,new p)}}(),n=function(){return(n=Object.assign||function(v){for(var h,u=1,p=arguments.length;u<p;u++)for(var w in h=arguments[u])Object.prototype.hasOwnProperty.call(h,w)&&(v[w]=h[w]);return v}).apply(this,arguments)},r=Object.create?function(v,h,u,p){p===void 0&&(p=u),Object.defineProperty(v,p,{enumerable:!0,get:function(){return h[u]}})}:function(v,h,u,p){v[p=p===void 0?u:p]=h[u]},i=Object.create?function(v,h){Object.defineProperty(v,"default",{enumerable:!0,value:h})}:function(v,h){v.default=h},o=function(v){if(v&&v.__esModule)return v;var h={};if(v!=null)for(var u in v)u!=="default"&&Object.hasOwnProperty.call(v,u)&&r(h,v,u);return i(h,v),h},a=function(v,h){for(var u in v)u==="default"||h.hasOwnProperty(u)||r(h,v,u)},s=function(v,h,u,p){return new(u=u||Promise)(function(w,E){function _(N){try{D(p.next(N))}catch(R){E(R)}}function T(N){try{D(p.throw(N))}catch(R){E(R)}}function D(N){var R;N.done?w(N.value):((R=N.value)instanceof u?R:new u(function(q){q(R)})).then(_,T)}D((p=p.apply(v,h||[])).next())})},l=function(v,h){var u,p,w,E={label:0,sent:function(){if(1&w[0])throw w[1];return w[1]},trys:[],ops:[]},_={next:T(0),throw:T(1),return:T(2)};return typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function T(D){return function(N){var R=[D,N];if(u)throw new TypeError("Generator is already executing.");for(;E;)try{if(u=1,p&&(w=2&R[0]?p.return:R[0]?p.throw||((w=p.return)&&w.call(p),0):p.next)&&!(w=w.call(p,R[1])).done)return w;switch(p=0,(R=w?[2&R[0],w.value]:R)[0]){case 0:case 1:w=R;break;case 4:return E.label++,{value:R[1],done:!1};case 5:E.label++,p=R[1],R=[0];continue;case 7:R=E.ops.pop(),E.trys.pop();continue;default:if(!(w=0<(w=E.trys).length&&w[w.length-1])&&(R[0]===6||R[0]===2)){E=0;continue}if(R[0]===3&&(!w||R[1]>w[0]&&R[1]<w[3])){E.label=R[1];break}if(R[0]===6&&E.label<w[1]){E.label=w[1],w=R;break}if(w&&E.label<w[2]){E.label=w[2],E.ops.push(R);break}w[2]&&E.ops.pop(),E.trys.pop();continue}R=h.call(v,E)}catch(q){R=[6,q],p=0}finally{u=w=0}if(5&R[0])throw R[1];return{value:R[0]?R[1]:void 0,done:!0}}}},f=function(v){return v&&v.__esModule?v:{default:v}},d=(Object.defineProperty(e,"__esModule",{value:!0}),f(U.exports)),y=f(c0),g=f0,S=o(h0),m=o(Nr),x=Ft,b=(a(Ft,e),function(v){function h(u){var p=v.call(this,u)||this;return p.swipeListener=null,p._handleKeyboardEvents=function(w){switch(w.code){case"Space":return p.props.autoPlay&&p._handlePlayPauseToggle();case"ArrowLeft":return p.slidePrev(w);case"ArrowRight":return p.slideNext(w)}},p._handleBeforeSlideEnd=function(w){return s(p,void 0,void 0,function(){var E,_,T;return l(this,function(D){switch(D.label){case 0:return _=this.state,T=_.activeIndex,E=_.itemsCount,_=_.fadeoutAnimationProcessing,m.shouldRecalculateSlideIndex(T,E)?(T=m.getUpdateSlidePositionIndex(T,E),[4,this._handleUpdateSlidePosition(T)]):[3,2];case 1:return D.sent(),[3,4];case 2:return _?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:D.sent(),D.label=4;case 4:return this._handleSlideChanged(w),[2]}})})},p._handleMouseEnter=function(){var w=p.props.autoPlayStrategy;m.shouldCancelAutoPlayOnHover(w)&&p.state.isAutoPlaying&&(p.isHovered=!0,p._handlePause())},p._handleMouseLeave=function(){p.state.isAutoPlaying&&(p.isHovered=!1,p._handlePlay())},p._handlePause=function(){p._clearAutoPlayTimeout()},p._handlePlayPauseToggle=function(){return s(p,void 0,void 0,function(){var w;return l(this,function(E){switch(E.label){case 0:return w=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!w,isAutoPlayCanceledOnAction:!0})];case 1:return E.sent(),w?this._handlePause():this._handlePlay(),[2]}})})},p._setRootComponentRef=function(w){return p.rootElement=w},p._setStageComponentRef=function(w){return p.stageComponent=w},p._renderStageItem=function(w,E){var _=m.getRenderStageItemStyles(E,p.state),T=m.getRenderStageItemClasses(E,p.state);return d.default.createElement(S.StageItem,{styles:_,className:T,key:"stage-item-"+E,item:w})},p._renderSlideInfo=function(){var w=p.props.renderSlideInfo,_=p.state,E=_.activeIndex,_=_.itemsCount;return d.default.createElement(S.SlideInfo,{itemsCount:_,activeIndex:E,renderSlideInfo:w})},p.state=m.calculateInitialState(u,null),p.isHovered=!1,p.isAnimationDisabled=!1,p.isTouchMoveProcessStarted=!1,p.cancelTouchAnimations=!1,p.hasUserAction=!1,p.rootElement=null,p.rootComponentDimensions={},p.stageComponent=null,p.startTouchmovePosition=void 0,p.slideTo=p.slideTo.bind(p),p.slidePrev=p.slidePrev.bind(p),p.slideNext=p.slideNext.bind(p),p._handleTouchmove=p._handleTouchmove.bind(p),p._handleTouchend=p._handleTouchend.bind(p),p._handleDotClick=p._handleDotClick.bind(p),p._handleResize=p._handleResize.bind(p),p._handleResizeDebounced=m.debounce(p._handleResize,100),p}return t(h,v),h.prototype.componentDidMount=function(){return s(this,void 0,void 0,function(){return l(this,function(u){switch(u.label){case 0:return[4,this._setInitialState()];case 1:return u.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},h.prototype.componentDidUpdate=function(u,p){var C=this.props,w=C.activeIndex,E=C.animationDuration,_=C.autoWidth,T=C.children,D=C.infinite,N=C.items,R=C.paddingLeft,q=C.paddingRight,Q=C.responsive,ne=C.swipeExtraPadding,pe=C.mouseTracking,Ye=C.swipeDelta,be=C.touchTracking,C=C.touchMoveDefaultEvents;T&&u.children!==T?(T=p.activeIndex,p=n(n({},this.props),{activeIndex:T}),this._updateComponent(p)):u.autoWidth!==_||u.infinite!==D||u.items!==N||u.paddingLeft!==R||u.paddingRight!==q||u.responsive!==Q||u.swipeExtraPadding!==ne?this._updateComponent():(u.animationDuration!==E&&this.setState({animationDuration:E}),u.activeIndex!==w&&this.slideTo(w,x.EventType.UPDATE)),u.swipeDelta===Ye&&u.mouseTracking===pe&&u.touchTracking===be&&u.touchMoveDefaultEvents===C||this._updateSwipeProps(),this.props.keyboardNavigation!==u.keyboardNavigation&&this._updateEventListeners()},h.prototype.componentWillUnmount=function(){this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(h.prototype,"eventObject",{get:function(){var p=this.state,u=p.itemsInSlide,p=p.activeIndex,E=m.getSlideItemInfo(this.state),w=E.isNextSlideDisabled,E=E.isPrevSlideDisabled;return{item:p,slide:m.getActiveSlideIndex(w,this.state),itemsInSlide:u,isNextSlideDisabled:w,isPrevSlideDisabled:E,type:x.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isFadeoutAnimationAllowed",{get:function(){var u=this.state.itemsInSlide,_=this.props,p=_.animationType,w=_.paddingLeft,E=_.paddingRight,_=_.autoWidth;return u===1&&p===x.AnimationType.FADEOUT&&!(w||E||_)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"touchmovePosition",{get:function(){return this.startTouchmovePosition!==void 0?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),h.prototype.slideTo=function(u,p){var w,E,_;u===void 0&&(u=0),this._handlePause(),this.isFadeoutAnimationAllowed?(w=m.getUpdateSlidePositionIndex(u,this.state.itemsCount),E=m.getFadeoutAnimationPosition(w,this.state),_=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:w,fadeoutAnimationIndex:_,fadeoutAnimationPosition:E,eventType:p})):this._handleSlideTo({activeIndex:u,eventType:p})},h.prototype.slidePrev=function(E){this._handlePause(),E&&E.isTrusted&&(this.hasUserAction=!0);var p,w,E=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(p=-this.state.stageWidth,w=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:E,fadeoutAnimationIndex:w,fadeoutAnimationPosition:p})):this._handleSlideTo({activeIndex:E})},h.prototype.slideNext=function(E){this._handlePause(),E&&E.isTrusted&&(this.hasUserAction=!0);var p,w,E=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(p=this.state.stageWidth,w=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:E,fadeoutAnimationIndex:w,fadeoutAnimationPosition:p})):this._handleSlideTo({activeIndex:E})},h.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},h.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},h.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},h.prototype._handleResize=function(u){return s(this,void 0,void 0,function(){var p,w,E;return l(this,function(_){switch(_.label){case 0:return w=this.props.onResizeEvent,E=m.getElementDimensions(this.rootElement),(w||m.shouldHandleResizeEvent)(u,this.rootComponentDimensions,E)?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=E,w=this.state,E=w.itemsCount,p=w.isAutoPlaying,w=m.getUpdateSlidePositionIndex(this.state.activeIndex,E),E=m.calculateInitialState(n(n({},this.props),{activeIndex:w}),this.stageComponent),w=m.getTranslate3dProperty(E.activeIndex,E),E=n(n({},E),{translate3d:w,isAutoPlaying:p}),m.animate(this.stageComponent,{position:-w}),[4,this.setState(E)]):[3,2];case 1:_.sent(),this._handleResized(),this.isAnimationDisabled=!1,p&&this._handlePlay(),_.label=2;case 2:return[2]}})})},h.prototype._handleTouchmove=function(u,T){var w=T.absY,E=T.absX,_=T.deltaX,T=this.props.swipeDelta,Q=this.state,D=Q.swipeShiftValue,N=Q.swipeLimitMin,R=Q.swipeLimitMax,q=Q.infinite,Q=Q.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(Q||!this.isTouchMoveProcessStarted&&m.isVerticalTouchmoveDetected(E,w,T))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var ne=m.getTouchmoveTranslatePosition(_,this.touchmovePosition);if(q===!1)N<ne||ne<-R||m.animate(this.stageComponent,{position:ne});else{if(m.shouldRecalculateSwipePosition(ne,N,R))try{(function pe(){m.getIsLeftDirection(_)?ne+=D:ne+=-D,m.shouldRecalculateSwipePosition(ne,N,R)&&pe()})()}catch(pe){m.debug(pe)}m.animate(this.stageComponent,{position:ne})}}},h.prototype._handleTouchend=function(u,T){var w,E,_,T=T.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,w=this.state.animationDuration,E=this.props.animationEasingFunction,_=m.getTranslateXProperty(this.stageComponent),T=m.getSwipeTouchendPosition(this.state,T,_),m.animate(this.stageComponent,{position:T,animationDuration:w,animationEasingFunction:E}),this._handleBeforeTouchEnd(T))},h.prototype._handleBeforeTouchEnd=function(u){var p=this,w=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return s(p,void 0,void 0,function(){var E,_,T,D=this;return l(this,function(N){switch(N.label){case 0:return E=m.getSwipeTouchendIndex(u,this.state),_=m.getTranslate3dProperty(E,this.state),m.animate(this.stageComponent,{position:-_}),T=m.getTransitionProperty(),[4,this.setState({activeIndex:E,translate3d:_,transition:T})];case 1:return N.sent(),setTimeout(function(){return D._handleSlideChanged()}),[2]}})})},w)},h.prototype._handleSlideTo=function(u){var E=u.activeIndex,p=E===void 0?0:E,E=u.fadeoutAnimationIndex,w=E===void 0?null:E,E=u.fadeoutAnimationPosition,_=E===void 0?null:E,T=u.eventType;return s(this,void 0,void 0,function(){var D,N,R,q,Q=this;return l(this,function(ne){switch(ne.label){case 0:return N=this.props,R=N.infinite,N=N.animationEasingFunction,D=this.state,q=D.itemsCount,D=D.animationDuration,this.isAnimationDisabled||this.state.activeIndex===p||!R&&m.shouldCancelSlideAnimation(p,q)?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(T),R=!1,q=m.getTranslate3dProperty(p,this.state),N=w!==null&&_!==null?(R=!0,m.getTransitionProperty()):m.getTransitionProperty({animationDuration:D,animationEasingFunction:N}),[4,this.setState({activeIndex:p,transition:N,translate3d:q,animationDuration:D,fadeoutAnimationIndex:w,fadeoutAnimationPosition:_,fadeoutAnimationProcessing:R})]);case 1:return ne.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return Q._handleBeforeSlideEnd(T)},D),[2]}})})},h.prototype._handleUpdateSlidePosition=function(u){return s(this,void 0,void 0,function(){var p,w,E;return l(this,function(_){switch(_.label){case 0:return p=this.state.animationDuration,w=m.getTranslate3dProperty(u,this.state),E=m.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:u,translate3d:w,transition:E,animationDuration:p,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return _.sent(),[2]}})})},h.prototype._handleResized=function(){this.props.onResized&&this.props.onResized(n(n({},this.eventObject),{type:x.EventType.RESIZE}))},h.prototype._handleSlideChange=function(u){this.props.onSlideChange&&(u=u?n(n({},this.eventObject),{type:u}):this.eventObject,this.props.onSlideChange(u))},h.prototype._handleSlideChanged=function(u){return s(this,void 0,void 0,function(){var p,w,E,_;return l(this,function(T){switch(T.label){case 0:return w=this.state,p=w.isAutoPlaying,w=w.isAutoPlayCanceledOnAction,E=this.props,_=E.autoPlayStrategy,E=E.onSlideChanged,m.shouldCancelAutoPlayOnAction(_)&&this.hasUserAction&&!w?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return T.sent(),[3,3];case 2:p&&this._handlePlay(),T.label=3;case 3:return this.isAnimationDisabled=!1,E&&(_=u?n(n({},this.eventObject),{type:u}):this.eventObject,E(_)),[2]}})})},h.prototype._handleDotClick=function(u){this.hasUserAction=!0,this.slideTo(u)},h.prototype._handlePlay=function(){this._setAutoPlayInterval()},h.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},h.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},h.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},h.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},h.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},h.prototype._setTouchmovePosition=function(){var u=m.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-u},h.prototype._setInitialState=function(){return s(this,void 0,void 0,function(){var u;return l(this,function(p){switch(p.label){case 0:return u=m.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=m.getElementDimensions(this.rootElement),[4,this.setState(u)];case 1:return p.sent(),this.props.onInitialized&&this.props.onInitialized(n(n({},this.eventObject),{type:x.EventType.INIT})),[2]}})})},h.prototype._setAutoPlayInterval=function(){var u=this,w=this.props,p=w.autoPlayDirection,w=w.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){u.isHovered||(p===x.AutoplayDirection.RTL?u.slidePrev({}):u.slideNext({}))},w)},h.prototype._setupSwipeHandlers=function(){this.swipeListener=new y.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},h.prototype._updateComponent=function(u){var p=this;u===void 0&&(u=this.props),this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:m.createClones(u)}),requestAnimationFrame(function(){p.setState(m.calculateInitialState(u,p.stageComponent))})},h.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},h.prototype._renderDotsNavigation=function(){var p=this.props,u=p.renderDotsItem,p=p.controlsStrategy;return d.default.createElement(S.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:u,controlsStrategy:p})},h.prototype._renderPrevButton=function(){var u=this.props.renderPrevButton,p=m.getSlideItemInfo(this.state).isPrevSlideDisabled;return d.default.createElement(S.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:p,renderPrevButton:u})},h.prototype._renderNextButton=function(){var u=this.props.renderNextButton,p=m.getSlideItemInfo(this.state).isNextSlideDisabled;return d.default.createElement(S.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:p,renderNextButton:u})},h.prototype._renderPlayPauseButton=function(){var u=this.props.renderPlayPauseButton,p=this.state.isAutoPlaying;return d.default.createElement(S.PlayPauseButton,{isPlaying:p,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:u})},h.prototype.render=function(){var D=this.state,_=D.translate3d,u=D.clones,T=D.transition,D=D.canUseDom,p=m.shouldDisableDots(this.props,this.state),w=m.shouldDisableButtons(this.props,this.state),E=m.getRenderWrapperStyles(this.props,this.state,this.stageComponent),_=m.getRenderStageStyles({translate3d:_},{transition:T}),T=this.props.ssrSilentMode||D?"":x.Modifiers.SSR,D=m.concatClassnames(x.Classnames.ROOT,T);return d.default.createElement("div",{className:D},d.default.createElement("div",{ref:this._setRootComponentRef},d.default.createElement("div",{style:E,className:x.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},d.default.createElement("ul",{style:_,className:x.Classnames.STAGE,ref:this._setStageComponentRef},u.map(this._renderStageItem)))),p?null:this._renderDotsNavigation(),w?null:this._renderPrevButton(),w?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},h.defaultProps=g.defaultProps,h}(d.default.PureComponent));e.default=b})(u0);const _0=qd(u0);const ww=te.div`
  cursor: pointer;

  padding: 14px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  transition: all 0.6s ease-in-out;

  :hover {
    transition: all 0.6s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }
`,P0=()=>c(ww,{children:c(u2,{size:32,color:"var(--PURPLE)"})}),xw=te.div`
  cursor: pointer;

  padding: 14px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  transition: all 0.6s ease-in-out;

  :hover {
    transition: all 0.6s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }
`,T0=()=>c(xw,{children:c(s2,{size:32,color:"var(--PURPLE)"})}),Sw=te.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;

  .header-project-video {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 53px;

    h1 {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;

      color: #ffffff;
    }

    h4 {
      margin: 8px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #fff;
      opacity: 50%;
    }
  }

  .video-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 54px;
    overflow-x: scroll;
    padding-bottom: 24px;
    zoom: 90%;

    .content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      padding-bottom: 24px;
    }
  }

  .alice-carousel {
    zoom: 90%;
    cursor: pointer;

    .alice-carousel__wrapper {
      overflow: visible;
    }
  }

  .alice-carousel__stage {
    transition: all 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: auto;
  }

  .alice-carousel__prev-btn {
    position: absolute;
    top: -40%;
    left: 90%;
  }

  .alice-carousel__next-btn {
    position: absolute;
    top: -40%;
    left: 95%;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--PURPLE);
  }

  @media (max-width: 1440px) {
    /* zoom: 80%; */
  }

  @media (max-width: 1366px) {
    .alice-carousel__stage {
      gap: 56px;
    }

    .alice-carousel__next-btn {
      left: 95%;
    }

    .alice-carousel__prev-btn {
      left: 91%;
    }
  }

  @media (max-width: 1300px) {
    .alice-carousel__next-btn {
      left: 96%;
    }
  }

  @media (max-width: 1090px) {
    .alice-carousel__next-btn {
      left: 98%;
    }
  }

  @media (max-width: 830px) {
    .alice-carousel__next-btn {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    margin-top: 80px;

    .video-cards {
      gap: 16px;
      padding-right: 64px;
    }

    .header-project-video {
      gap: 8px !important;

      h1 {
        margin: 16px 0 0 0;
        font-size: 24px;
        line-height: 28px;
      }

      h4 {
        margin: 0;
      }
    }
  }

  @media (max-width: 500px) {
    .video-cards {
      zoom: 70%;
    }
  }

  @media (max-width: 355px) {
    .video-cards {
      zoom: 60%;
    }
  }
`,Ew=te.div`
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 30px;

  width: 442px;
  height: 346px;

  :hover {
    transition: all 0.5s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;

    button.play-button {
      svg {
        transition: all 0.5s ease-in-out;
        scale: 150%;
      }
    }
  }

  img {
    width: 442px;
    height: 261px;
    border-radius: 16px;
    object-fit: cover;
  }

  .title-and-tags {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 24px 0 0 0;

    h1 {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      display: flex;
      align-items: center;

      color: #ffffff;
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 10px 0 0 0;

    p {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: rgba(255, 255, 255, 0.5);
    }

    button {
      border: none;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      color: rgba(255, 255, 255, 0.5);

      svg {
        transition: all 0.5s ease-in-out;
      }
    }
  }
`,nn=({title:e,description:t,bannerUrl:n,videoLink:r,setShowVideoModal:i,setVideoUrl:o})=>{function a(){i(!0),o(r)}return k(Ew,{onClick:()=>a(),children:[c("img",{src:n,alt:""}),c("div",{className:"title-and-tags",children:c("h1",{children:e})}),k("div",{className:"description",children:[c("p",{children:c(F,{id:t})}),k("button",{className:"play-button",children:[c(F,{id:"click-to-watch"})," ",c(p2,{color:"var(--PURPLE)",size:24})]})]})]})},bw=te.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
  background: rgba(15, 15, 15, 0.1);
  display: flex;

  .video-container {
    width: 100%;
    display: flex;
    max-width: 1338px;
    left: 0;
    align-items: flex-end;
    flex-direction: column;

    button {
      transition: all 0.2s ease-in-out;
      border: none;

      :hover {
        transition: all 0.2s ease-in-out;
        scale: 120%;
      }
    }

    img {
      transition: all ease-in-out 0.2s;
      cursor: pointer;
      margin-bottom: 10px;
      filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.6));
    }

    img:hover {
      transition: all ease-in-out 0.2s;
      transform: rotate(90deg);
    }
  }

  .iframe-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 56.25%;
    align-self: center;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }

  @media (max-width: 768px) {
    .video-container {
      width: 95%;
    }
  }

  @media screen and (max-width: 540px) {
    padding: 0;

    .video-container svg {
      margin-right: 10px;
    }

    iframe {
      border-radius: 0;
    }
  }
`,kw=({videoLink:e,setShowVideoModal:t})=>{function n(){t(!1)}return c(bw,{children:k("div",{className:"video-container",children:[c("button",{onClick:()=>n(),children:c(w2,{alt:"Fechar v\xEDdeo",size:40,color:"white"})}),c("div",{className:"iframe-container",children:c("iframe",{title:"video",allowFullScreen:!0,src:`${e}?autoplay=1`,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})})]})})},_w=()=>{const t=Bt().windowWidth<=768,[n,r]=U.exports.useState(!1),[i,o]=U.exports.useState("");return c(M,{children:n?c(kw,{videoLink:i,setShowVideoModal:r}):k(Sw,{children:[k("div",{className:"header-project-video",children:[t?k("h1",{children:[c(F,{id:"projects"})," ",c("br",{})," ",c(F,{id:"with-videos"})]}):k("h1",{children:[c(F,{id:"projects"})," ",c(F,{id:"with-videos"})]}),c("h4",{children:c(F,{id:"its-always-good-to-know-a-little-editing"})})]}),t?c("div",{className:"video-cards",children:k("div",{className:"content",children:[c(nn,{title:"VisGeo",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png",videoLink:"https://www.youtube.com/embed/hQMvhnpsWpU",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"UDA Brasil",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png",videoLink:"https://www.youtube.com/embed/vIIeVExmZiM",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"Typext",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png",videoLink:"https://www.youtube.com/embed/65Go1Nz3KBA",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"OneCar",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png",videoLink:"https://www.youtube.com/embed/LraPykzShIA",setShowVideoModal:r,setVideoUrl:o})]})}):c(_0,{mouseTracking:!0,touchTracking:!0,items:[c(nn,{title:"VisGeo",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png",videoLink:"https://www.youtube.com/embed/hQMvhnpsWpU",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"UDA Brasil",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png",videoLink:"https://www.youtube.com/embed/vIIeVExmZiM",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"Typext",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png",videoLink:"https://www.youtube.com/embed/65Go1Nz3KBA",setShowVideoModal:r,setVideoUrl:o}),c(nn,{title:"OneCar",description:"application-pitch",bannerUrl:"https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png",videoLink:"https://www.youtube.com/embed/LraPykzShIA",setShowVideoModal:r,setVideoUrl:o})],renderNextButton:P0,renderPrevButton:T0,autoWidth:!0,autoHeight:!0,disableDotsControls:!0,paddingRight:400})]})})},Pw=te.button`
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 12px 16px;
  width: 184px;
  gap: 16px;

  :hover {
    transition: all 0.4s ease-in-out;
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  :focus {
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  img {
    height: 40px;
  }

  h1 {
    margin: 0;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    color: rgba(123, 74, 226, 0.5);
  }

  @media (max-width: 768px) {
    width: 116px;
    height: 40px;

    border: 1px solid rgba(123, 74, 226, 0.5);
    border-radius: 8px;

    img {
      height: 24px;
    }

    h1 {
      font-size: 14px;
    }
  }
`,Wd=({img:e,text:t,onClick:n})=>k(Pw,{onClick:n,children:[c("img",{src:e,alt:""}),c("h1",{children:t})]}),Tw=te.div`
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4px;
  padding: 10px 16px;
  border-radius: 16px;
  border: 1px solid #4ae290;

  :hover {
    opacity: 50%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    p {
      font-family: "Raleway";
      font-weight: 600;
      color: #4ae290;

      margin: 0;
      line-height: 1.25;
      margin-block-start: 4px;
      margin-block-end: 0;
    }
  }

  @media (max-width: 768px) {
  }
`,Cw="/assets/green-arrow-right.e15ab272.svg";function ms({arrow:e,icon:t,textId:n,onClick:r}){return k(Tw,{onClick:r,children:[k("div",{className:"content",children:[c("img",{src:t,alt:"",width:32,height:32}),c("p",{children:c(F,{id:n})})]}),e&&c("img",{src:Cw,alt:""})]})}const Iw="/assets/green-github.1f1dcfed.svg",Aw="/assets/green-figma.330320b8.svg",Lw="/assets/green-behance.6b1aa2f9.svg",Nw=te.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
  margin-bottom: 100px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 100px;

    > h1 {
      margin: 24px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;

      color: #ffffff;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 32px;
    }
  }

  .cards {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    margin-bottom: 48px;
    gap: 48px;
    padding-bottom: 24px;
  }

  .see-more-projects {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }

  @media (max-width: 1910px) {
    zoom: 85%;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 1280px) {
    .cards {
      justify-content: center;
    }
  }

  @media (max-width: 840px) {
    .header {
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    margin-bottom: 80px;

    .header {
      margin-bottom: 32px;
      > h1 {
        margin: 16px 0 0 0;
        font-size: 24px;
        line-height: 28px;
      }
    }

    .cards {
      justify-content: flex-start;
      flex-wrap: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      gap: 16px;
      padding-right: 64px;
      margin-bottom: 24px;
    }

    .see-more-projects {
      .buttons {
        flex-direction: column;
      }
    }
  }
`,Dw=()=>{const e=Bt(),[t,n]=U.exports.useState("web");return k(Nw,{children:[c(_n,{text:"portfolio-emoji",id:"portfolio"}),k("div",{className:"header",children:[e.windowWidth<=768?k("h1",{children:[c(F,{id:"works"})," ",c("br",{})," ",c(F,{id:"and-projects"})]}):k("h1",{children:[c(F,{id:"works"})," ",c(F,{id:"and-projects"})]}),k("div",{className:"buttons",children:[c(Wd,{img:_l,text:"Web",onClick:()=>n("web")}),c(Wd,{img:Pl,text:"Design",onClick:()=>n("design")})]})]}),c("div",{className:"cards",children:t==="web"?c(z2,{}):c(F2,{})}),c("div",{className:"see-more-projects",children:t==="web"?c(ms,{icon:Iw,textId:"see-more-projects-on-github",onClick:()=>window.open("https://github.com/justhenrique","_blank"),arrow:!0}):k("div",{className:"buttons",children:[c(ms,{icon:Aw,textId:"see-more-projects-on-figma",onClick:()=>window.open("https://www.figma.com/@henriquedesousa","_blank"),arrow:!0}),c(ms,{icon:Lw,textId:"see-more-projects-on-behance",onClick:()=>window.open("https://www.behance.net/justhenriquedesign","_blank"),arrow:!0})]})}),c(_w,{})]})},Rw="/assets/css-icon.33cce779.svg",Ow="/assets/figma-icon.a969578a.svg",Mw="/assets/git-icon.fd9c8b0a.svg",jw="/assets/github-icon.d98165f6.svg",zw="/assets/html-icon.656dce74.svg",Fw="/assets/insomnia-icon.ca806fad.svg",Bw="/assets/javascript-icon.13633cf1.svg",Uw="/assets/next-icon.9e51b055.svg",Hw="/assets/react-icon.f33f4df5.svg",$w="/assets/typescript-icon.bad155d3.svg",Ww="/assets/bitbucket-icon.d73ce881.svg",Vw="/assets/docker-icon.00bdef54.svg",Gw="/assets/mongo-icon.6459e48a.svg",Xw="/assets/mysql-icon.36081b24.svg",qw="/assets/nodejs-icon.aa932957.svg",Yw="/assets/postgres-icon.8b3fa471.svg",Zw="/assets/python-icon.93e65a7e.svg",Qw="/assets/sass-icon.af0aa541.svg",Jw="/assets/tailwind-icon.c60bc1d5.svg",Kw="/assets/vue-icon.f5626fa8.svg",ex=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  width: 100%;
  max-width: 1645px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    color: #ffffff;
    margin: 24px 0 100px 0;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;

    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 40px 0;
  }

  .techs {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 32px;
    margin: 0 0 60px 0;
    padding-bottom: 24px;
    zoom: 90%;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 798px) {
    zoom: 100%;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin: 16px 0 32px 0;
      text-align: left;
    }

    h3 {
      text-align: left;
      font-size: 14px;
    }

    .techs {
      gap: 16px;
    }
  }

  @media (max-width: 670px) {
    .techs {
      overflow-x: scroll;
      justify-content: flex-start;
      padding-right: 24px;
    }
  }

  @media (max-width: 500px) {
    .techs {
      zoom: 60%;
    }
  }
`,tx=()=>{const t=Bt().windowWidth<=768;return k(ex,{id:"skills",children:[c(_n,{text:"skills-emoji"}),t?k("h1",{children:[c(F,{id:"technologies"})," ",c("br",{})," ",c(F,{id:"and-skills"})]}):k("h1",{children:[c(F,{id:"technologies"})," ",c(F,{id:"and-skills"})]}),c("h3",{children:c(F,{id:"techs-i-use-on-a-daily-basis"})}),k("div",{className:"techs",children:[c("img",{src:Hw,alt:""}),c("img",{src:Bw,alt:""}),c("img",{src:$w,alt:""}),c("img",{src:Uw,alt:""}),c("img",{src:Rw,alt:""}),c("img",{src:zw,alt:""}),c("img",{src:Ow,alt:""}),c("img",{src:Mw,alt:""}),c("img",{src:jw,alt:""}),c("img",{src:Fw,alt:""})]}),c("h3",{children:c(F,{id:"other-techs-ive-done-projects-with"})}),k("div",{className:"techs",children:[c("img",{src:Ww,alt:""}),c("img",{src:Kw,alt:""}),c("img",{src:qw,alt:""}),c("img",{src:Jw,alt:""}),c("img",{src:Qw,alt:""}),c("img",{src:Zw,alt:""}),c("img",{src:Yw,alt:""}),c("img",{src:Xw,alt:""}),c("img",{src:Gw,alt:""}),c("img",{src:Vw,alt:""})]})]})},nx=te.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  width: 520px;
  height: 160px;
  border-radius: 16px;
  transition: all 0.6s ease-in-out;

  ${e=>e.status?at`
          cursor: pointer;
          border: 2px solid #4ae290;
          background: rgba(74, 226, 144, 0.1);
        `:at`
          border: 1px solid rgba(123, 74, 226, 0.5);
          :hover {
            background: rgba(123, 74, 226, 0.1);
          }
        `}

  :hover {
    transition: all 0.6s ease-in-out;
    border: 1px solid transparent;
  }

  .title-and-description {
    width: 100%;

    h4 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      display: flex;
      align-items: center;
      color: #ffffff;
      margin: 0 0 8px 0;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      color: rgba(255, 255, 255, 0.5);
    }
  }

  .dates {
    ${e=>e.status?at`
            h5 {
              display: flex;
              gap: 0.5rem;
              color: #4ae290 !important;
            }
            strong {
              color: #4ae290;
            }
          `:at`
            strong {
              color: var(--PURPLE);
            }
          `}

    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    strong {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
    }

    h5 {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: right;

      color: var(--PURPLE);
    }
  }

  @media (max-width: 1440px) {
    .title-and-description {
      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    padding: 16px;

    .title-and-description {
      h4 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }

    .dates {
      strong,
      h5 {
        font-size: 12px;
      }
    }
  }
`,$e=({title:e,description:t,yearsOfExperience:n,startAndEnd:r,status:i,onClick:o,id:a})=>k(nx,{id:a,onClick:o,status:i,children:[k("div",{className:"title-and-description",children:[c("h4",{children:c(F,{id:e})}),c("p",{children:c(F,{id:t})})]}),k("div",{className:"dates",children:[k("h5",{children:[i&&c(Fu,{}),c(F,{id:r})]}),n&&c("strong",{children:c(F,{id:n})})]})]}),rx=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 1645px;
  margin: 140px 0px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin: 24px 0 0 0;

    color: #ffffff;
  }

  .columns {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 64px;
    margin: 64px 0 0 0;

    .column {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        text-align: center;
        color: #ffffff;
        margin: 0 0 8px 0;
      }

      h3 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0 0 64px 0;

        color: rgba(255, 255, 255, 0.5);
      }

      .content {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

        .cards {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;

          @media (min-width: 1080px) {
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 1080px) {
    .columns {
      flex-direction: column;

      .column {
        align-items: flex-start;

        .content {
          justify-content: flex-start;
          overflow-x: scroll;

          .cards {
            padding-bottom: 24px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    align-items: flex-start;
    margin: 0px 0px 80px 0;

    > h1 {
      font-size: 24px;
      text-align: left;
      width: 100%;
      line-height: 28px;
    }

    .columns {
      gap: 24px;
      margin-top: 24px;

      .column {
        h1 {
          font-size: 16px;
          line-height: 20px;
          margin: 8px 0 0 0;
        }
        h3 {
          font-size: 12px;
          margin: 0 0 24px 0;
        }

        .content {
          .cards {
            gap: 16px;
          }
        }
      }
    }
  }
`,ix=()=>{const t=Bt().windowWidth<=768;return U.exports.useContext(Aa),k(rx,{children:[c(_n,{text:"career-emoji"}),t?k("h1",{children:[c(F,{id:"trajectory"})," ",c("br",{})," ",c(F,{id:"so-far"})]}):k("h1",{children:[c(F,{id:"trajectory"})," ",c(F,{id:"so-far"})]}),k("div",{className:"columns",children:[k("div",{className:"column",children:[c("h1",{id:"career",children:c(F,{id:"profissional-area"})}),k("h3",{children:["2016 \xB7 ",c(F,{id:"at-the-moment"})]}),c("div",{className:"content",children:k("div",{className:"cards",children:[c($e,{id:"status",title:"front-end-intrabank",description:"working-at-intrabank",startAndEnd:"jul-2023-actually",status:!0}),c($e,{id:"status",title:"freelancer",description:"working-as-a-freelancer",startAndEnd:"may-2023-jul-2023"}),c($e,{title:"front-end-developer-at-softexpert",description:"working-in-the-application-workspace",startAndEnd:"december-2022-currently"}),c($e,{title:"front-end-developer-at-coderockr",description:"working-on-the-maintenance",startAndEnd:"november-2022-december-2022"}),c($e,{title:"front-end-developer-at-ensinio",description:"development-of-features",startAndEnd:"april-2021-currently"}),c($e,{title:"designer-at-viralizzi",description:"viralizzi-as-a-designer",startAndEnd:"january-2021-april-2021"}),c($e,{title:"programming-instructor-at-superGeeks",description:"acting-as-a-programming",startAndEnd:"february-2019-january-2021"}),c($e,{title:"designer-editor-and-hardware-support-at-alorean",description:"freelance-design-services",startAndEnd:"january-2020-january-2021"}),c($e,{title:"young-apprentice",description:"at-the-end-of-2016",startAndEnd:"october-2016-december-2017"})]})})]}),k("div",{className:"column",children:[c("h1",{children:c(F,{id:"academic-area"})}),k("h3",{children:["2015 \xB7 ",c(F,{id:"at-the-moment"})]}),c("div",{className:"content",children:k("div",{className:"cards",children:[c($e,{title:"higher-degree-systems-analysis-and-development",description:"graduated-from-fatec",startAndEnd:"august-2019-august-2022"}),c($e,{title:"technician-computer-networks",description:"in-2019-i-graduated",startAndEnd:"february-2018-june-2019"}),c($e,{title:"english-advanced-conversation",description:"in-the-second-half-of-2018",startAndEnd:"july-2018-december-2018"}),c($e,{title:"complete-high-school",description:"at-the-end-of-2017",startAndEnd:"january-2015-december-2017"}),c($e,{title:"advanced-computing",description:"in-november-2017",startAndEnd:"february-2017-november-2017"}),c($e,{title:"professional-informatics",description:"at-the-end-of-2016-i-was-certified",startAndEnd:"october-2015-december-2016"})]})})]})]})]})},ox=te.div`
  transition: all 0.6s ease-in-out;
  width: 440px;
  height: 280px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  :hover {
    transition: all 0.6s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }

  .comment {
    p {
      margin: 12px 0 12px 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .author-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 100px;
    }

    .name-and-position {
      h1 {
        margin: 0 0 4px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #ffffff;
      }

      h3 {
        margin: 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: rgba(123, 74, 226, 0.5);
      }
    }
  }

  @media (max-width: 768px) {
    width: 325px;
    height: 280px;
    padding: 16px;

    .comment {
      p {
        font-size: 14px;
      }
    }

    .author-info {
      img {
        width: 38px;
        height: 38px;
      }

      .name-and-position {
        h1,
        h3 {
          font-size: 12px;
        }

        h1 {
          line-height: 10px;
        }
      }
    }
  }

  @media (max-width: 360px) {
    width: 260px;
    height: 340px;
  }
`,It=({comment:e,authorPictureUrl:t,authorName:n,position:r})=>{const o=Bt().windowWidth<=768;return k(ox,{children:[k("div",{className:"comment",children:[o?c(Dd,{weight:"thin",size:24,color:"var(--PURPLE)"}):c(Dd,{weight:"thin",size:32,color:"var(--PURPLE)"}),c("p",{children:c(F,{id:e})})]}),k("div",{className:"author-info",children:[c("img",{src:t,alt:""}),k("div",{className:"name-and-position",children:[c("h1",{children:n}),c("h3",{children:c(F,{id:r})})]})]})]})},Vd="/assets/romario-lima.3f8045a4.jpeg",Gd="/assets/marcelo-guido.b1b19e5e.jpeg",ax=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
  margin-bottom: 140px;
  transition: all 0.6s ease-in-out;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    margin-bottom: 64px;

    h1 {
      margin: 24px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 42px;

      color: #ffffff;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;
    width: 100%;

    .content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 16px;
      padding-bottom: 24px;
    }
  }

  .alice-carousel {
    cursor: pointer;

    .alice-carousel__wrapper {
      overflow: visible;
    }
  }

  .alice-carousel__stage {
    transition: all 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: auto;
  }

  .alice-carousel__prev-btn {
    position: absolute;
    top: -40%;
    left: 90%;
  }

  .alice-carousel__next-btn {
    position: absolute;
    top: -40%;
    left: 95%;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--PURPLE);
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 1366px) {
    .alice-carousel__stage {
      gap: 32px;
    }

    .alice-carousel__next-btn {
      left: 96%;
    }

    .alice-carousel__prev-btn {
      left: 91%;
    }
  }

  @media (max-width: 1040px) {
    .alice-carousel__next-btn {
      left: 100%;
    }
  }

  @media (max-width: 840px) {
    .alice-carousel__prev-btn {
      left: 70%;
    }

    .alice-carousel__next-btn {
      left: 84%;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      display: none;
    }

    .header {
      margin-bottom: 24px;

      h1 {
        font-size: 24px;
        line-height: 24px;
      }
    }

    .alice-carousel__stage {
      gap: 16px;
    }
  }
`,sx=()=>{const t=Bt().windowWidth<=768;return k(ax,{id:"recommendations",children:[k("div",{className:"header",children:[c(_n,{text:"recommendations-emoji"}),t?k("h1",{children:[c(F,{id:"in"})," ",c("br",{})," ",c(F,{id:"deposition"})]}):k("h1",{children:[c(F,{id:"in"})," ",c(F,{id:"deposition"})]})]}),t?c("div",{className:"cards",children:k("div",{className:"content",children:[c(It,{comment:"henrique-is-very-engaged",authorPictureUrl:"https://avatars.githubusercontent.com/u/43392489?v=4",authorName:"Silvio Marques",position:"tech-lead-at-ensinio"}),c(It,{comment:"washington-is-always",authorPictureUrl:Vd,authorName:"Rom\xE1rio Lima",position:"computer-engineer"}),c(It,{comment:"creative-this-is-henrique",authorPictureUrl:Gd,authorName:"Me. Marcelo Guido",position:"education-networks-professional"}),c(It,{comment:"henrique-is-a-hardworking",authorPictureUrl:"https://avatars.githubusercontent.com/u/56457600?v=4",authorName:"Matheus Campos",position:"front-end-developer-at-ensinio"}),c(It,{comment:"i-worked-with-henrique",authorPictureUrl:"https://avatars.githubusercontent.com/u/1855228?v=4",authorName:"Anderson Brand\xE3o",position:"head-of-engineering-at-xcorecng"})]})}):c(_0,{mouseTracking:!0,touchTracking:!0,items:[c(It,{comment:"henrique-is-very-engaged",authorPictureUrl:"https://avatars.githubusercontent.com/u/43392489?v=4",authorName:"Silvio Marques",position:"tech-lead-at-ensinio"}),c(It,{comment:"washington-is-always",authorPictureUrl:Vd,authorName:"Rom\xE1rio Lima",position:"computer-engineer"}),c(It,{comment:"creative-this-is-henrique",authorPictureUrl:Gd,authorName:"Me. Marcelo Guido",position:"education-networks-professional"}),c(It,{comment:"henrique-is-a-hardworking",authorPictureUrl:"https://avatars.githubusercontent.com/u/56457600?v=4",authorName:"Matheus Campos",position:"front-end-developer-at-ensinio"}),c(It,{comment:"i-worked-with-henrique",authorPictureUrl:"https://avatars.githubusercontent.com/u/1855228?v=4",authorName:"Anderson Brand\xE3o",position:"head-of-engineering-at-xcorecng"})],renderNextButton:P0,renderPrevButton:T0,autoWidth:!0,autoHeight:!0,disableDotsControls:!0,paddingRight:400})]})};var lx=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(i){e.addRange(i)}),t&&t.focus()}},ux=lx,Xd={"text/plain":"Text","text/html":"Url",default:"Text"},cx="Copy to clipboard: #{key}, Enter";function dx(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function fx(e,t){var n,r,i,o,a,s,l=!1;t||(t={}),n=t.debug||!1;try{i=ux(),o=document.createRange(),a=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(d){if(d.stopPropagation(),t.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=Xd[t.format]||Xd.default;window.clipboardData.setData(y,e)}else d.clipboardData.clearData(),d.clipboardData.setData(t.format,e);t.onCopy&&(d.preventDefault(),t.onCopy(d.clipboardData))}),document.body.appendChild(s),o.selectNodeContents(s),a.addRange(o);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");l=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(y){n&&console.error("unable to copy using clipboardData: ",y),n&&console.error("falling back to prompt"),r=dx("message"in t?t.message:cx),window.prompt(r,e)}}finally{a&&(typeof a.removeRange=="function"?a.removeRange(o):a.removeAllRanges()),s&&document.body.removeChild(s),i()}return l}var hx=fx;const px=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 64px;

  margin-bottom: 140px;

  .tag-and-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 24px;

    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
      text-align: center;
      margin: 0;

      color: #ffffff;
    }
  }

  .wpp-and-email {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .email {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      svg {
        cursor: pointer;
        transition: all 0.6s ease-in-out;

        :hover {
          transition: all 0.6s ease-in-out;
          opacity: 50%;
        }
      }

      h4 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin: 4px 0 0 0;

        color: #7b4ae2;
      }

      h5 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        margin: 4px 0 16px 0;
      }
    }
  }

  h3 {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: rgba(123, 74, 226, 0.5);

    gap: 8px;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 768px) {
    zoom: 100%;
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 24px;

    .tag-and-title {
      align-items: flex-start;

      h1 {
        font-size: 24px;
        line-height: 24px;
      }
    }

    .wpp-and-email {
      align-items: flex-start;
      flex-direction: column;

      .email {
        align-items: flex-start;

        .email-and-copy {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }
      }
    }
  }
`,mx=()=>{const t=Bt().windowWidth<=768,[n,r]=U.exports.useState(!1);function i(){hx("henriquesousa.dev@gmail.com"),r(!0),setTimeout(()=>{r(!1)},4e3)}return k(px,{id:"contacts",children:[k("div",{className:"tag-and-title",children:[c(_n,{text:"contact-emoji"}),k("h1",{children:[c(F,{id:"lets-talk-section"})," "]})]}),k("div",{className:"wpp-and-email",children:[c(Bu,{}),k("div",{className:"email",children:[c(f2,{weight:"thin",size:40,color:"#412C7C"}),c("h4",{children:"E-mail:"}),t?c(M,{children:k("div",{className:"email-and-copy",children:[c("h5",{id:"emailToCopy",children:"henriquesousa.dev@gmail.com"}),c(Nd,{onClick:i,weight:"thin",size:32,color:"#412C7C"})]})}):k(M,{children:[c("h5",{id:"emailToCopy",children:"henriquesousa.dev@gmail.com"}),c(Nd,{onClick:i,weight:"thin",size:32,color:"#412C7C"})]}),n&&k("h4",{children:["\u2705 ",c(F,{id:"text-copied-to-clipboard"})]})]})]}),k("h3",{onClick:()=>Lt("hero"),children:[c(F,{id:"back-to-the-top"})," ",c(o2,{})]})]})},gx=te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(123, 74, 226, 0.1);

  width: 100%;
  max-width: 1640px;

  height: 60px;
  padding: 24px;

  img {
    cursor: pointer;
    :hover {
      transition: all 0.4s ease-in-out;
      scale: 110%;
    }
  }

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.5);
  }

  .social-medias {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 525px) {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
`,vx=()=>k(gx,{children:[c("h1",{children:"Copyright \xA9 Henrique Sousa \xB7 2023"}),k("div",{className:"social-medias",children:[c("img",{src:Wu,alt:"",onClick:()=>window.open("https://www.linkedin.com/in/justhenrique/")}),c("img",{src:$u,alt:"",onClick:()=>window.open("https://github.com/justhenrique")}),c("img",{src:Hu,alt:"",onClick:()=>window.open("https://www.figma.com/@henriquedesousa")}),c("img",{src:Uu,alt:"",onClick:()=>window.open("https://www.behance.net/justhenriquedesign")})]})]}),yx=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 768px) {
    padding: 0 48px;
  }

  @media (max-width: 500px) {
    padding: 0 24px;
  }
`,wx=()=>k(yx,{children:[c(I2,{}),c(N2,{}),c(O2,{}),c(Dw,{}),c(tx,{}),c(ix,{}),c(sx,{}),c(mx,{}),c(vx,{})]}),xx=te.div`
  --PURPLE: #7b4ae2;
  --DARK: #0C0F17;

  background-color: var(--DARK);
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(123, 74, 226, 0.5);
    border-radius: 16px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(123, 74, 226, 0.3);
  }

  button {
    cursor: pointer;
    appearance: none;
    outline: none;
    background: transparent;
  }
`,Aa=U.exports.createContext({language:"pt",setLanguage:()=>{}});function Sx(){const[e,t]=U.exports.useState("pt");return c(Aa.Provider,{value:{language:e,setLanguage:t},children:c(Av,{messages:e==="pt"?qv:dy,locale:"en",defaultLocale:"pt",children:c(xx,{className:"App",children:c(wx,{})})})})}gs.createRoot(document.getElementById("root")).render(c(ki.StrictMode,{children:c(Sx,{})}));
