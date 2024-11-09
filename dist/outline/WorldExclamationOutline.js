import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function m(s, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M20.986 12.51a9 9 0 1 0-5.71 7.873M3.6 9h16.8M3.6 15h10.9" }, null, -1),
    t("path", { d: "M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18m6.5-5v3m0 3v.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as W
};