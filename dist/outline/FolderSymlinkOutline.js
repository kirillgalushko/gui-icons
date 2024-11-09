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
function h(s, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3 21v-4a3 3 0 0 1 3-3h5" }, null, -1),
    e("path", { d: "m8 17 3-3-3-3" }, null, -1),
    e("path", { d: "M3 11V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", h]]);
export {
  a as F
};
