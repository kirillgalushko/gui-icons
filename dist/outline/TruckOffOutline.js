import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function l(h, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10.585-1.414a2 2 0 0 0 2.826 2.831" }, null, -1),
    t("path", { d: "M5 17H3V6a1 1 0 0 1 1-1h1m3.96 0H13v4m0 4v4m-4 0h6m6 0v-6h-6m-2-5h5l3 5M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", l]]);
export {
  d as T
};
