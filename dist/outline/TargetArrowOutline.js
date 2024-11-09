import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function h(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    t("path", { d: "M12 7a5 5 0 1 0 5 5" }, null, -1),
    t("path", { d: "M13 3.055A9 9 0 1 0 20.941 11" }, null, -1),
    t("path", { d: "M15 6v3h3l3-3h-3V3zm0 3-3 3" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", h]]);
export {
  a as T
};
