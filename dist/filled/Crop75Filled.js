import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(s, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ n(i, [["render", l]]);
export {
  a as C
};
