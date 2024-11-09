import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function h(s, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M17 4h1a2 2 0 0 1 2 2v1m0 10v1a2 2 0 0 1-2 2h-1M7 20H6a2 2 0 0 1-2-2v-1M4 7V6a2 2 0 0 1 2-2h1m2 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 6v2m-8-8h2m6-8v2m8 6h-2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(m, [["render", h]]);
export {
  a as P
};
