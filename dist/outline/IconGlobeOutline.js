import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0" }, null, -1),
    t("path", { d: "M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};