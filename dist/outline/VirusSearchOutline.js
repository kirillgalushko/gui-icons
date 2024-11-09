import { openBlock as t, createElementBlock as m, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const n = {}, i = {
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
function s(h, e) {
  return t(), m("svg", i, e[0] || (e[0] = [
    o("path", { d: "M17 12a5 5 0 1 0-5 5m0-10V3m-1 0h2m2.536 5.464 2.828-2.828m-.707-.707 1.414 1.414M17 12h4m0-1v2m-9 4v4m1 0h-2m-2.535-5.464-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93M15 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m4.5 2L22 22" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(n, [["render", s]]);
export {
  d as V
};