import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function m(s, e) {
  return t(), n("svg", h, e[0] || (e[0] = [
    o("path", { d: "M21 8h-4v8h4m-4-4h2.5M4 8v8h4m2-8h4m-2 0v8" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as S
};