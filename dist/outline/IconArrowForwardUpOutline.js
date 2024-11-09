import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
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
function l(m, e) {
  return o(), r("svg", s, e[0] || (e[0] = [
    t("path", { d: "m15 14 4-4-4-4" }, null, -1),
    t("path", { d: "M19 10H8a4 4 0 1 0 0 8h1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as I
};
