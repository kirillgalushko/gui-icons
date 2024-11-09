import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
  return t(), o("svg", i, e[0] || (e[0] = [
    r("path", { d: "m18 9 3 3-3 3m-3-3h6M6 9l-3 3 3 3m-3-3h6m0 6 3 3 3-3m-3-3v6m3-15-3-3-3 3m3-3v6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(m, [["render", s]]);
export {
  d as A
};
