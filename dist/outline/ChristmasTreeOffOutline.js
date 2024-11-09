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
function l(m, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M9.5 5.5 12 3l4 4-2 1 4 4-1.5.5M17 17H5l4-4-3-1 3-3m5 8v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as C
};
