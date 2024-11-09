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
function m(h, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M8 9h8m-8 4h6m-2.005 5.603L8 21v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", m]]);
export {
  a as M
};
