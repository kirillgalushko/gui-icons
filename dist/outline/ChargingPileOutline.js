import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function l(s, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "m18 7-1 1m-3 3h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" }, null, -1),
    t("path", { d: "M9 11.5 7.5 14h3L9 16.5M3 20h12M4 8h10" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as C
};
