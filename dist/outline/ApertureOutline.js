import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m.6 3h10.55M6.551 4.938l3.26 10.034m7.221-10.336-8.535 6.201m12.062 3.673-8.535-6.201m.233 12.607 3.261-10.034" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", s]]);
export {
  d as A
};
