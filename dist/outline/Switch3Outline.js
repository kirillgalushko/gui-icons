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
function h(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 17h2.397a5 5 0 0 0 4.096-2.133l.177-.253m3.66-5.227.177-.254A5 5 0 0 1 17.603 7H21" }, null, -1),
    t("path", { d: "m18 4 3 3-3 3M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 17H21" }, null, -1),
    t("path", { d: "m18 20 3-3-3-3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as S
};