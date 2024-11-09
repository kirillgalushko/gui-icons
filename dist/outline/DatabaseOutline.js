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
    e("path", { d: "M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" }, null, -1),
    e("path", { d: "M4 6v6a8 3 0 0 0 16 0V6" }, null, -1),
    e("path", { d: "M4 12v6a8 3 0 0 0 16 0v-6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as D
};
