import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function h(s, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M5 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-5" }, null, -1),
    e("path", { d: "M3 14a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1),
    e("path", { d: "M4.5 17 3 22l3-1.5L9 22l-1.5-5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", h]]);
export {
  d as I
};