import { openBlock as r, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function h(l, e) {
  return r(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M7 18V6.69a.7.7 0 0 1 1.195-.495L18 16" }, null, -1),
    t("path", { d: "M13 16h5v-5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", h]]);
export {
  d as A
};
