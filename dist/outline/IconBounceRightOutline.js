import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
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
function c(m, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M4 15.5c3-1 5.5-.5 8 4.5.5-3 1.5-5.5 3-8m3-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};
