import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
    e("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    e("path", { d: "M11 17H6V3H4" }, null, -1),
    e("path", { d: "m6 5 14 1-.718 5.023M13 13H6m9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
