import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function h(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M22 12h-4M2 9h5m-5 6h5M6 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14" }, null, -1),
    t("path", { d: "M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as I
};