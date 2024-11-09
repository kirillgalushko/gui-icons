import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M9.75 5.761 13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972" }, null, -1),
    t("path", { d: "M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as I
};
