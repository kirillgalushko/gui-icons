import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function l(h, e) {
  return t(), r("svg", s, e[0] || (e[0] = [
    n("path", { d: "M3 18 6.279 6.524a.75.75 0 0 1 1.442 0L11 18M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4m3 2v-2m1-12V4M4.5 14h5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ o(i, [["render", l]]);
export {
  a as C
};
