import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M20 16h.01M4 16c9.5-4 11.5-8 14-9m-6 1 5 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};