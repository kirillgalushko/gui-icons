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
function h(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z" }, null, -1),
    t("path", { d: "M14 10h-1a2 2 0 0 0-2 2v2c0 1.105-.395 2-1.5 2H14m-4-3h3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as T
};