import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as l } from "../filled/AccessibleFilled.js";
const r = {}, i = {
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
function c(s, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01m4.865-1.73c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" }, null, -1),
    e("path", { d: "M3.5 15.5 8 11c.928-.893 2.072-.893 3 0l5 5" }, null, -1),
    e("path", { d: "m14 14 1-1c.928-.893 2.072-.893 3 0l2.5 2.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(r, [["render", c]]);
export {
  d as P
};
