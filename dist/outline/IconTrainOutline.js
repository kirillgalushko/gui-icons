import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function s(h, e) {
  return n(), o("svg", m, e[0] || (e[0] = [
    t("path", { d: "M21 13c0-3.87-3.37-7-10-7H3m0 9h16a2 2 0 0 0 2-2" }, null, -1),
    t("path", { d: "M3 6v5h17.5M3 10v4m5-3V6m5 5V6.5M3 19h18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
