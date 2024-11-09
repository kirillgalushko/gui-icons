import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function m(h, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M17 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2H4m0-4h9" }, null, -1),
    e("path", { d: "M8 12V7h2a3 3 0 0 1 3 3v5" }, null, -1),
    e("path", { d: "M5 15v-2a1 1 0 0 1 1-1h7m6-1V4l-6 7" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", m]]);
export {
  c as W
};
