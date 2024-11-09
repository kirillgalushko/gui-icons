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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function l(s, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "m16 7-4-4-4 4M6 21v.01m0-3v.01m1-3v.01m3-2v.01" }, null, -1),
    t("path", { d: "M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
