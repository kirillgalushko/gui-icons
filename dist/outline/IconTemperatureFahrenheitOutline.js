import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, m = {
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
function s(h, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    o("path", { d: "M4 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 4h5m2-6h-6a1 1 0 0 0-1 1v11" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};