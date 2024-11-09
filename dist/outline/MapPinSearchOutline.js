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
    e("path", { d: "M14.916 11.707A3 3 0 1 0 12 14" }, null, -1),
    e("path", { d: "M11.991 21.485a2 2 0 0 1-1.404-.585l-4.244-4.243a8 8 0 1 1 13.651-5.351" }, null, -1),
    e("path", { d: "M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as M
};
