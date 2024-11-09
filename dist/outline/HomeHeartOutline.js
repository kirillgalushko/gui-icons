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
    t("path", { d: "m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6" }, null, -1),
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413 1.627 1.627 0 0 0-2.346 0l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346 0 1.74 1.74 0 0 0 0 2.412l2.51 2.59z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as H
};
