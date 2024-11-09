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
function l(m, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as B
};
