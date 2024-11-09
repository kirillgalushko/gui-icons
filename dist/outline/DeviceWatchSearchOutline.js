import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function s(m, e) {
  return t(), o("svg", h, e[0] || (e[0] = [
    n("path", { d: "M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2m-3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22M9 18v3h3M9 6V3h6v3" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as D
};
