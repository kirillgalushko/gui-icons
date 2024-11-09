import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, l = {
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
function s(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" }, null, -1),
    e("path", { d: "M18 17a6 6 0 1 0-12 0" }, null, -1),
    e("path", { d: "M14 17a2 2 0 1 0-4 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as R
};
