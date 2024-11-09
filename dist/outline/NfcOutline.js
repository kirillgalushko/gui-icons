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
    e("path", { d: "M11 20a3 3 0 0 1-3-3V6l5 5" }, null, -1),
    e("path", { d: "M13 4a3 3 0 0 1 3 3v11l-5-5" }, null, -1),
    e("path", { d: "M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as N
};
