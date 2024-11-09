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
function m(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01m5.465 7.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.525 8.985" }, null, -1),
    e("path", { d: "m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" }, null, -1),
    e("path", { d: "m14 14 1-1c.928-.893 2.072-.893 3 0l2 2m-4 4h6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as P
};
