import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function m(h, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m6 0V4h10v9M9 8h10m-3 14 5-5m0 4.5V17h-4.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as M
};