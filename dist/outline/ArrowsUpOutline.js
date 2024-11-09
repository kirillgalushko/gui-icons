import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
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
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M17 3v18M4 6l3-3 3 3m10 0-3-3-3 3M7 3v18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as A
};
