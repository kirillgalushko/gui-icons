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
function s(m, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M16 3h5v5M8 3H3v5" }, null, -1),
    e("path", { d: "m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6m2 2.02v-.01M10 10v.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as R
};
