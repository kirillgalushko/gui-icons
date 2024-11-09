import { openBlock as n, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return n(), r("svg", m, e[0] || (e[0] = [
    t("path", { d: "m6 12 6-9 6 9-6 9z" }, null, -1),
    t("path", { d: "m6 12 6-3 6 3-6 2z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", s]]);
export {
  d as C
};
