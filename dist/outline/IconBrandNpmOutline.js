import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const m = {}, i = {
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
function s(l, e) {
  return t(), n("svg", i, e[0] || (e[0] = [
    o("path", { d: "M1 8h22v7H11v2H7v-2H1zm6 0v7m7-7v7m3-4v4M4 11v4m7-4v1m9-1v4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", s]]);
export {
  d as I
};
