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
function h(s, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" }, null, -1),
    t("path", { d: "m13 7.35-2-2a2 2 0 0 0-2.11-.461M6.76 6.763 5.344 8.178a2 2 0 0 0 0 2.828l9 9" }, null, -1),
    t("path", { d: "M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12m0-4v.01M3 3l18 18" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", h]]);
export {
  c as C
};
