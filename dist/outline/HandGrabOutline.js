import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function a(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M8 11V7.5a1.5 1.5 0 0 1 3 0V10m0-.5v-3a1.5 1.5 0 0 1 3 0V10m0-2.5a1.5 1.5 0 0 1 3 0V10" }, null, -1),
    t("path", { d: "M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 17q-.468-.718-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.87 1.87 0 0 1 2.28.28L8 11" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", a]]);
export {
  d as H
};
