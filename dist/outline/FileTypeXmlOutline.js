import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function m(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    t("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l4 6m-4 0 4-6m11 0v6h3m-11 0v-6l2.5 3 2.5-3v6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as F
};
