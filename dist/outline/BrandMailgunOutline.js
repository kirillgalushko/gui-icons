import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function s(a, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M17 12a2 2 0 1 0 4 0 9 9 0 1 0-2.987 6.697" }, null, -1),
    t("path", { d: "M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" }, null, -1),
    t("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    t("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(l, [["render", s]]);
export {
  m as B
};