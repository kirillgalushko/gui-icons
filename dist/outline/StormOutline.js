import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1),
    t("path", { d: "M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0" }, null, -1),
    t("path", { d: "M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as S
};
