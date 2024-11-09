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
function c(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M13 22c-3 0-4.868-2.118-5-5 0-3 2-5 5-5 4 0 8.01 2.5 8 5 0 2.5-4 5-8 5" }, null, -1),
    t("path", { d: "M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614 0 5.248 3.915 5.5 8" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};
