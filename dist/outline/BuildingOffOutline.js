import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function h(s, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    o("path", { d: "M3 21h18M9 12h1m-1 4h1m4-8h1m-1 8h1M5 21V5m2-2h10c1 0 2 1 2 2v10m0 4v2M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as B
};
