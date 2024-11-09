import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function s(l, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0-14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m3.5-1.5 11-11M5 7v10M19 7v10" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as S
};
