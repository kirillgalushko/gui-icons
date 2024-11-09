import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M14 3v4a1 1 0 0 0 1 1h4m0 10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-2-4h3m4.5 0h3m4.5 0h3" }, null, -1),
    t("path", { d: "M5 10V5a2 2 0 0 1 2-2h7l5 5v2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as P
};
