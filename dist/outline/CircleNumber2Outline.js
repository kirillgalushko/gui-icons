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
function s(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    t("path", { d: "M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as C
};
