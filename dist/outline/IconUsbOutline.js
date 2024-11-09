import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
  return n(), o("svg", m, e[0] || (e[0] = [
    t("path", { d: "M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V5.5M7 10v3l5 3m0-1.5 5-2V10m-1 0h2V8h-2z" }, null, -1),
    t("path", { d: "M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-3.5h4L12 3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
