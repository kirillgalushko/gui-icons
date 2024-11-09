import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
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
  return r(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, null, -1),
    e("path", { d: "m3 17 4-3h10l4 3" }, null, -1),
    e("circle", {
      cx: "7.5",
      cy: "9.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "16.5",
      cy: "9.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(l, [["render", c]]);
export {
  d as I
};