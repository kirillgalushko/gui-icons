import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function s(m, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4" }, null, -1),
    t("path", { d: "M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5m4 1-1.5 1.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as T
};
