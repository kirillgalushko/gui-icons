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
    t("path", { d: "M5 4C2.5 9 2.5 14 5 20M19 4c2.5 5 2.5 10 0 16M9 9h1c1 0 1 1 2.016 3.527C13 15 13 16 14 16h1" }, null, -1),
    t("path", { d: "M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
