import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(h, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M10.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-4-7v4M8 3v4m-4 4h10" }, null, -1),
    e("path", { d: "M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    e("path", { d: "M18 16.5V18l.5.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as C
};
