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
function m(s, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M5 4v2l5 5M2.5 9.5 4 11h6m-6 8v-2l6-6m9-7v2l-5 5m7.5-1.5L20 11h-6m6 8v-2l-6-6" }, null, -1),
    e("path", { d: "M8 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    e("path", { d: "M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", m]]);
export {
  c as S
};
