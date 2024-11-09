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
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0 1 19 13.6a10 10 0 0 1-.633.762m-2.045 1.96A8 8 0 0 0 15 18.6 4.5 4.5 0 0 1 8.2 20" }, null, -1),
    t("path", { d: "M11.42 7.414a3 3 0 0 1 4.131 4.13M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as E
};
