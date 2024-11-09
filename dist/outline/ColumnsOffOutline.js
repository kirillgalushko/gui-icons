import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function s(h, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M4 6h2m-2 4h5.5M4 14h5.5M4 18h5.5m5-12H20m-5.5 4H20m-2 4h2m-5.5 4H18M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", s]]);
export {
  d as C
};
