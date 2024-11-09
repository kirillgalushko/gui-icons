import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const s = {}, i = {
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
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M8 21h8m-4-5v5m5-16 1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" }, null, -1),
    t("path", { d: "M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(s, [["render", l]]);
export {
  d as G
};
