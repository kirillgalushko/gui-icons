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
function l(h, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a4 4 0 0 0-8 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as B
};