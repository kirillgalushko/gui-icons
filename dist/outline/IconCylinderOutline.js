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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function l(c, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6" }, null, -1),
    t("path", { d: "M5 6v12c0 1.657 3.134 3 7 3s7-1.343 7-3V6" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as I
};
