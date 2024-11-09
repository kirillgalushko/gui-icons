import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" }, null, -1),
    t("path", { d: "m8 8-2 2 2 2m4-4 2 2-2 2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as Z
};
