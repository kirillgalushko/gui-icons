import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
    t("path", { d: "M9 21h6m-3-5v5M8 5a4 2 0 1 0 8 0 4 2 0 1 0-8 0" }, null, -1),
    t("path", { d: "M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(s, [["render", l]]);
export {
  d as I
};
