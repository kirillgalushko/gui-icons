import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function m(s, e) {
  return o(), n("svg", h, e[0] || (e[0] = [
    t("path", { d: "M17 17v4h1a2 2 0 1 0 0-4zm0-6h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    t("path", { d: "M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3m-4-8h4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as A
};