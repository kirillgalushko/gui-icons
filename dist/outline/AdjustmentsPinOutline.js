import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as m } from "../filled/AccessibleFilled.js";
const r = {}, i = {
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
    o("path", { d: "M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.071-5.69A2 2 0 1 0 12 18m0-14v10m0 4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v2.5m3.121 8.621a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ m(r, [["render", s]]);
export {
  h as A
};