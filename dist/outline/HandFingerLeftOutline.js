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
function l(m, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M12 8H3.5a1.5 1.5 0 0 0 0 3H11m-.5 0h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 0 0 0 3H11" }, null, -1),
    t("path", { d: "M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2 .208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536 1.87 1.87 0 0 0 .28 2.28L12 8" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as H
};
