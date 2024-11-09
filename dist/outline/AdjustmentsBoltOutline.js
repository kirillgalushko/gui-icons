import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m4-4a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-12v10m7 2-2 3h4l-2 3m-7-4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ m(r, [["render", s]]);
export {
  d as A
};