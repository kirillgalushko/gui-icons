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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function h(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" }, null, -1),
    t("path", { d: "M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0-7h4M9 18h6" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", h]]);
export {
  a as I
};
