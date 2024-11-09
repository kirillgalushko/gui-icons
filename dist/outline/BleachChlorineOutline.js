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
function l(s, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19" }, null, -1),
    t("path", { d: "M11 12h-1a2 2 0 1 0 0 4h1m3-4v4h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as B
};
