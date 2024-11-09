import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
const i = {}, s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(l, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M19 8v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M7 22v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0-20v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(i, [["render", a]]);
export {
  c as C
};
