import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function s(m, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" }, null, -1),
    e("path", { d: "M13.5 14H16v2.5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ o(i, [["render", s]]);
export {
  a as B
};
