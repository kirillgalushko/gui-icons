import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function s(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    t("path", { d: "M13.5 17H6V3H4" }, null, -1),
    t("path", { d: "m6 5 14 1-.858 6.004M16.5 13H6m13 3-2 3h4l-2 3" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as S
};
