import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function m(l, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m15 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0m-6 6H7m3-3-3 3 3 3" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", m]]);
export {
  a as T
};