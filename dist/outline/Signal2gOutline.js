import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function s(l, e) {
  return t(), n("svg", h, e[0] || (e[0] = [
    o("path", { d: "M19 8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as S
};