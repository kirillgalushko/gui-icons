import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function s(l, t) {
  return o(), n("svg", m, t[0] || (t[0] = [
    e("path", { d: "M3 3v18h18" }, null, -1),
    e("path", { d: "M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1.84-4.38 2.34 2.88m2.588-.172 2.837-4.586" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as C
};
