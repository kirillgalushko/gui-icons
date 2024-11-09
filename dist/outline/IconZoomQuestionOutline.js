import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function m(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6m-5-2v.01" }, null, -1),
    t("path", { d: "M10 10a1.5 1.5 0 1 0-1.14-2.474" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
