import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, l = {
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
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M6 15a6 6 0 1 0 12 0" }, null, -1),
    t("path", { d: "M18 15a6 6 0 0 0-6 6m0 0a6 6 0 0 0-6-6m6 6V11m0 0a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as M
};
