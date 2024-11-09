import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function m(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" }, null, -1),
    t("path", { d: "M9 7h4.09C14.145 7 15 7.895 15 9s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H9m1-4h4m-4-5v10-9m3-1v1m0 8v1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as R
};
