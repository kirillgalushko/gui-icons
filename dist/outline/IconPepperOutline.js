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
function l(c, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0 3 3 0 0 0-6 0" }, null, -1),
    t("path", { d: "M16 8c0-2 2-4 4-4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
