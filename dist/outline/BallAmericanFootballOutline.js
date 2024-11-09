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
function m(s, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "m15 9-6 6m1-3 2 2m0-4 2 2m-6 9a5 5 0 0 0-5-5" }, null, -1),
    e("path", { d: "M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5" }, null, -1),
    e("path", { d: "M16 3a5 5 0 0 0 5 5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(l, [["render", m]]);
export {
  h as B
};
