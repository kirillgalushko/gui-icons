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
function s(h, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771" }, null, -1),
    t("path", { d: "M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6m3 3-3-3-3 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as H
};
