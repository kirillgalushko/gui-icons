import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function c(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M4 5h7M7 4c0 4.846 0 7 .5 8" }, null, -1),
    t("path", { d: "M10 8.5c0 2.286-2 4.5-3.5 4.5S4 11.865 4 11q0-3 3-3c3 0 5 .57 5 2.857q0 2.286-2 3.143m2 6 4-9 4 9m-.9-2h-6.2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", c]]);
export {
  a as I
};
