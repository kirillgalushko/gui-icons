import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
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
function s(c, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    t("path", { d: "M11.102 17.957Q6.297 17.495 3 12q3.6-6 9-6t9 6a20 20 0 0 1-.663 1.032M15 19l2 2 4-4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
