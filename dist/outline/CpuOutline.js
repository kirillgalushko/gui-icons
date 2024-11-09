import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, h = {
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
function i(s, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }, null, -1),
    t("path", { d: "M9 9h6v6H9zm-6 1h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", i]]);
export {
  d as C
};
