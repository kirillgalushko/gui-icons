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
    t("path", { d: "M5 17.5A1.5 1.5 0 0 1 6.5 16h11a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5m7-1.5Q9.5 8 6 8q-2.5 0-3 2c2.953.31 3.308 3.33 4 6m5 0q2.5-8 6-8 2.5 0 3 2c-2.953.31-3.308 3.33-4 6" }, null, -1),
    t("path", { d: "M9 9.5Q11 6 12 6t3 3.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as J
};
