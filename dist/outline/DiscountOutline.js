import { openBlock as r, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function c(s, t) {
  return r(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "m9 15 6-6" }, null, -1),
    e("circle", {
      cx: "9.5",
      cy: "9.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "14.5",
      cy: "14.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1)
  ]));
}
const u = /* @__PURE__ */ o(l, [["render", c]]);
export {
  u as D
};
