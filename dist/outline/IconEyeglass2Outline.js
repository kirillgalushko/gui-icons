import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function l(h, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" }, null, -1),
    t("path", { d: "M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
