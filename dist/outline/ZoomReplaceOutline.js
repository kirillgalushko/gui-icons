import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function m(s, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.02 7.02 0 0 1 8.242 4.403" }, null, -1),
    e("path", { d: "M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403" }, null, -1),
    e("path", { d: "M3 16v-4h4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as Z
};
