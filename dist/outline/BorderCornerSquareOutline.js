import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
  return t(), r("svg", s, e[0] || (e[0] = [
    o("path", { d: "M4 20V5a1 1 0 0 1 1-1h15" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as B
};
