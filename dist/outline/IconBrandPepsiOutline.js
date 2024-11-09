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
function s(c, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "M4 16c5.713-2.973 11-3.5 13.449-11.162" }, null, -1),
    e("path", { d: "M5 17.5c5.118-2.859 15 0 14-11" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", s]]);
export {
  m as I
};
