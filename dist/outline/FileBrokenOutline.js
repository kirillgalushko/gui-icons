import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const h = {}, i = {
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
function l(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    t("path", { d: "M5 7V5a2 2 0 0 1 2-2h7l5 5v2m0 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-3h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(h, [["render", l]]);
export {
  d as F
};