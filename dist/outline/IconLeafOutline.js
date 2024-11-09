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
function c(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M5 21c.5-4.5 2.5-8 7-10" }, null, -1),
    t("path", { d: "M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9 0 1 0 3 2 5h3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};
