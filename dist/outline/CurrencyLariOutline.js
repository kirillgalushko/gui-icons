import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function m(l, e) {
  return t(), r("svg", s, e[0] || (e[0] = [
    n("path", { d: "M18 13a6 6 0 1 0-6 6m-6 0h12M10 5v7m4 0V5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", m]]);
export {
  d as C
};
