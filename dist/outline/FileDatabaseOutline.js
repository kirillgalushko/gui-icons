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
function s(a, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M8 12.75a4 1.75 0 1 0 8 0 4 1.75 0 1 0-8 0" }, null, -1),
    e("path", { d: "M8 12.5v3.75C8 17.216 9.79 18 12 18s4-.784 4-1.75V12.5M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as F
};
