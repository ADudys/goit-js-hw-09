!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("6JpON"),i=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),a=document.querySelector("button"),f=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))};a.addEventListener("click",(function(n){n.preventDefault(),function(){for(var n=+i.value,t=1;t<=l.value;t++)f(t,n).then((function(n){e(r).Notify.success(n)})).catch((function(n){e(r).Notify.failure(n)})),n+=+c.value}()}))}();
//# sourceMappingURL=03-promises.418fa100.js.map
