import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, s = {
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
function i(m, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M8 21h8m-4-6v6m5-18 1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z" }, null, -1),
    t("path", { d: "M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", i]]);
export {
  d as I
};