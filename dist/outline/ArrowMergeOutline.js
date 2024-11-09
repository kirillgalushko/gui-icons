import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function l(m, e) {
  return o(), r("svg", s, e[0] || (e[0] = [
    t("path", { d: "m8 7 4-4 4 4" }, null, -1),
    t("path", { d: "M12 3v5.394A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21m6-18v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as A
};
