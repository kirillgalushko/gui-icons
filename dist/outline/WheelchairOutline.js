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
function l(m, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    t("path", { d: "M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as W
};
