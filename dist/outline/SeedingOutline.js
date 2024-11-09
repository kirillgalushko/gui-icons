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
    o("path", { d: "M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3m0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3m0 5V10" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as S
};
