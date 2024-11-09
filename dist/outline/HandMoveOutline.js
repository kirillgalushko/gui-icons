import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, a = {
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
  return n(), o("svg", a, e[0] || (e[0] = [
    t("path", { d: "M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12" }, null, -1),
    t("path", { d: "M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13M2.541 5.594a13.5 13.5 0 0 1 2.46-1.427M14 3.458a13.4 13.4 0 0 1 3.685 1.612" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as H
};
