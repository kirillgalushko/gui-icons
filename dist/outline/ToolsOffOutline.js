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
function m(s, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "m16 12 4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2-7 7v4h4l7-7m.5-8.5 4 4" }, null, -1),
    t("path", { d: "M12 8 7 3M5 5 3 7l5 5M7 8 5.5 9.5M16 12l5 5m-2 2-2 2-5-5m4 1-1.5 1.5M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as T
};
