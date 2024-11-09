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
    t("path", { d: "M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" }, null, -1),
    t("path", { d: "M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9m-5 10h6m-3-3v6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as H
};
