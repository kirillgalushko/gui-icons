import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M5 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0" }, null, -1),
    t("path", { d: "M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 6-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as I
};
