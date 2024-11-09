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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M8 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    t("path", { d: "M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5m7-4.5 1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
