import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
function m(s, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    t("path", { d: "m12 7 4.76 3.45L15 16H9l-1.76-5.55zm0 0V3m3 13 2.5 3m-.74-8.55L20.5 9M9.06 16.05 6.5 19m.74-8.55L3.5 9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as I
};
