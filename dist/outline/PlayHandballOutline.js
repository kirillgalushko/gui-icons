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
function s(m, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "m13 21 3.5-2-4.5-4 2-4.5" }, null, -1),
    e("path", { d: "m7 6 2 4 5 .5 4 2.5 2.5 3M4 20l5-1 1.5-2M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "M9.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", s]]);
export {
  a as P
};
