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
function h(m, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M5 12h2m10 0h2m-8 0h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as L
};
