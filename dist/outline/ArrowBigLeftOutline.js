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
function l(h, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M20 15h-8v3.586a1 1 0 0 1-1.707.707l-6.586-6.586a1 1 0 0 1 0-1.414l6.586-6.586A1 1 0 0 1 12 5.414V9h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as A
};
