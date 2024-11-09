import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function s(l, e) {
  return t(), r("svg", m, e[0] || (e[0] = [
    n("path", { d: "M7 6h10m-5 0v13m-4-2 8-3m0-4-8 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", s]]);
export {
  d as C
};
