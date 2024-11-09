import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function c(m, e) {
  return o(), r("svg", l, e[0] || (e[0] = [
    t("circle", {
      cx: "12",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    t("path", { d: "M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", c]]);
export {
  d as F
};
