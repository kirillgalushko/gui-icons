import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function s(l, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14M3 20h12" }, null, -1),
    e("path", { d: "M18 7v1a1 1 0 0 0 1 1h1M4 11h10" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as G
};
