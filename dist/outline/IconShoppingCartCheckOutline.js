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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function s(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    e("path", { d: "M11.5 17H6V3H4" }, null, -1),
    e("path", { d: "m6 5 14 1-1 7H6m9 6 2 2 4-4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
