import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M10 12H3l3-3m0 6-3-3m11 0h7l-3-3m0 6 3-3M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as V
};
