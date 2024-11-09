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
function m(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M10 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 14l4 1 .5-.5M12 18v-3l-3-2.923L9.75 7" }, null, -1),
    t("path", { d: "M6 10V8l4-1 2.5 2.5 2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1 1-11 2-1" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", m]]);
export {
  c as T
};