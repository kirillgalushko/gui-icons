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
function l(m, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M6 10a7 7 0 1 1 13 3.6 10 10 0 0 1-2 2 8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20" }, null, -1),
    t("path", { d: "M10 10a3 3 0 1 1 5 2.2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
