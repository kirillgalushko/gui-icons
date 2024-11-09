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
function m(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    e("path", { d: "M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" }, null, -1),
    e("path", { d: "M11 9q3.733.162 6 0m0-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6 9-3.5-1.5M11 13l2.5 3m-5 0 2.5-3m0 0 3.5-1.5M11 9v4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as C
};
