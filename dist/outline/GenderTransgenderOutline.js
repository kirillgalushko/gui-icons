import { openBlock as t, createElementBlock as n, createElementVNode as r } from "vue";
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
function s(h, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    r("path", { d: "M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7-3 6-6m0 4V3h-4M9 9 3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ o(i, [["render", s]]);
export {
  c as G
};