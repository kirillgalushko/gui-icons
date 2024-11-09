import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
    e("path", { d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }, null, -1),
    e("circle", {
      cx: "9",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "15",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const u = /* @__PURE__ */ n(l, [["render", c]]);
export {
  u as O
};
