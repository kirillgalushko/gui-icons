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
    t("path", { d: "M21 12a9 9 0 1 0-8.012 8.946M9 10h.01M15 10h.01" }, null, -1),
    t("path", { d: "M9.5 15a3.6 3.6 0 0 0 2.774.99m6.72 5.51 2.518-2.58a1.74 1.74 0 0 0 .004-2.413 1.627 1.627 0 0 0-2.346-.005l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346-.004 1.74 1.74 0 0 0-.004 2.412z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as M
};
