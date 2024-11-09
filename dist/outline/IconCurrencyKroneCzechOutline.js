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
function c(s, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    o("path", { d: "M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m8-12-2 2-2-2m4 6h-2a3 3 0 0 0 0 6h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};
