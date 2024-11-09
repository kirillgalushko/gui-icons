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
function s(m, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m14 6 7 7-4 4" }, null, -1),
    t("path", { d: "M5.828 18.172a2.83 2.83 0 0 0 4 0L20.414 7.586a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L5.828 14.172a2.83 2.83 0 0 0 0 4M4 20l1.768-1.768" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as B
};
