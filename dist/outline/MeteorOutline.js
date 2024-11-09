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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "m21 3-5 9h5l-6.891 7.086A6.5 6.5 0 1 1 5.254 9.58L13 3l-1 5z" }, null, -1),
    t("path", { d: "M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as M
};
