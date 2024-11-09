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
    t("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m4-3.5 3 3m-3 0 3-3m4 0 3 3m-3 0 3-3" }, null, -1),
    t("path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as M
};
