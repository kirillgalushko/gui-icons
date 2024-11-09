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
function m(c, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M4 12c-1.333-1.854-1.333-4.146 0-6m4 6c-1.333-1.854-1.333-4.146 0-6m8 12c1.333-1.854 1.333-4.146 0-6m4 6c1.333-1.854 1.333-4.146 0-6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as Q
};
