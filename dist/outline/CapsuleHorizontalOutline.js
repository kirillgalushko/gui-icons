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
    n("path", { d: "M3 12a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as C
};
