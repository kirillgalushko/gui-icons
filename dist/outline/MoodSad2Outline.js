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
    t("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    t("path", { d: "M14.5 16.05a3.5 3.5 0 0 0-5 0m.5-6.8c-.5 1-2.5 1-3 0m10 0c-.5 1-2.5 1-3 0" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as M
};
