function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=g();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function S(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function w(){var e=g(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:S(g())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.elements.email.setAttribute("required",""),y.elements.message.setAttribute("required",""),function(){let e=localStorage.getItem("feedback-form-state");try{e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t}))}catch(e){localStorage.removeItem("feedback-form-state"),console.log(e.name),console.log(e.message)}}(),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");const t={};new FormData(y).forEach(((e,n)=>{console.log(n,e),t[n]=e})),console.log("Дані з форми:",t),e.currentTarget.reset()})),y.addEventListener("input",e(t)((function({target:{name:e,value:t}}){let n=localStorage.getItem("feedback-form-state");try{n=n?JSON.parse(n):{}}catch(e){console.log(e.name),console.log(e.message)}n[e]=t,localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500));
//# sourceMappingURL=03-feedback.f58058d7.js.map
