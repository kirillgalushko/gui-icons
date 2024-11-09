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
function s(d, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M18.364 19.364a9 9 0 1 0-12.728 0" }, null, -1),
    t("path", { d: "M15.536 16.536a5 5 0 1 0-7.072 0" }, null, -1),
    t("path", { d: "M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as B
};
