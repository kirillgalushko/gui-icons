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
function l(h, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M21 12a9 9 0 1 0-8.352 8.977M9 10h.01M15 10h.01" }, null, -1),
    t("path", { d: "M9.5 15c.658.672 1.56 1 2.5 1q.153 0 .304-.012m8.817 4.133a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as M
};
