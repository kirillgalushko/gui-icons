import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
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
  return o(), r("svg", l, e[0] || (e[0] = [
    t("path", { d: "m11 14 4-4-4-4m5 8 4-4-4-4" }, null, -1),
    t("path", { d: "M15 10H8a4 4 0 1 0 0 8h1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", s]]);
export {
  d as I
};
