import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    o("path", { d: "M17 22v-2m-8-5 6-6m-4-3 .463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5-.397.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11m14 6h2M2 7h2m3-5v2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as U
};