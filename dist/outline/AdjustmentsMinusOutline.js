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
    o("path", { d: "M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.954-4.426A2 2 0 1 0 12 18m0-14v10m0 4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v6m-2 4h6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ m(r, [["render", s]]);
export {
  d as A
};