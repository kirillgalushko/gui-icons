import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function m(h, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M5 5h6.586a1 1 0 0 1 .707 1.707L11 8M8 8c0 1.5.5 3-2 5m6 7 4-9 4 9m-.9-2h-6.2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as L
};
