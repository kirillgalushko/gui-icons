import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, m = {
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
function h(i, t) {
  return n(), o("svg", m, t[0] || (t[0] = [
    e("path", { d: "M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m6.75-5 1 2H18" }, null, -1),
    e("path", { d: "m17 4-3 5 2 3m4.25-2L19 12l1.25 2" }, null, -1),
    e("path", { d: "M22 12h-6l-2 3m4 3h-2.25l-1 2" }, null, -1),
    e("path", { d: "m17 20-3-5h-1m-1-6 2.088.008" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", h]]);
export {
  a as T
};
