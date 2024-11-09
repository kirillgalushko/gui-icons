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
    n("path", { d: "M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m6 0V4h10v8M9 8h10m0 8v3m0 3v.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as M
};