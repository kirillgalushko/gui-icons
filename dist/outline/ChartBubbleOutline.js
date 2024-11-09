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
function l(m, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m11 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as C
};
