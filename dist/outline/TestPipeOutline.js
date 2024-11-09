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
    n("path", { d: "M20 8.04 7.878 20.164a2.857 2.857 0 1 1-4.041-4.04L15.959 4M7 13h8m4 2 1.5 1.6a2 2 0 1 1-3 0zM15 3l6 6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as T
};
