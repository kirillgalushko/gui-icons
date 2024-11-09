import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M11 3h2m-1 0v3M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.798a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.998 6" }, null, -1),
    t("path", { d: "M8.5 6 10 16v5m5.5-15L14 16v5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as A
};
