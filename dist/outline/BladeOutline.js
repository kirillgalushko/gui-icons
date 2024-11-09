import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
const r = {}, a = {
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
function i(m, e) {
  return l(), n("svg", a, e[0] || (e[0] = [
    t("path", { d: "m17.707 3.707 2.586 2.586a1 1 0 0 1 0 1.414l-.586.586a1 1 0 0 0 0 1.414l.586.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-.586-.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l.586-.586a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0M8 16l3.2-3.2m1.6-1.6L16 8m-2 0 2 2m-8 4 2 2" }, null, -1),
    t("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ o(r, [["render", i]]);
export {
  h as B
};
