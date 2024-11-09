import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function l(m, t) {
  return o(), n("svg", h, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01M11 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" }, null, -1),
    e("path", { d: "m4 15 4-4c.928-.893 2.072-.893 3 0l3 3m0 0 1-1c.31-.298.644-.497.987-.596m2.433 3.206a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as P
};
