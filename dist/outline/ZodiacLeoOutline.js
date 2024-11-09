import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m4-9a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    t("path", { d: "M7 7c0 3 2 5 2 9m6-9c0 4-2 6-2 10" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as Z
};
