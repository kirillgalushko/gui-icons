import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M12 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6h8m4 0h4M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 0h2m4 0h10m-5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18h11m4 0h1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as A
};
