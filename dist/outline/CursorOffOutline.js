import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(l, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v1m0 4v5a3 3 0 0 0 3 3M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", m]]);
export {
  d as C
};
