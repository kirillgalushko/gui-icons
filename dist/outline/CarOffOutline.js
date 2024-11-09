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
    t("path", { d: "M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10.584-1.412a2 2 0 0 0 2.828 2.83" }, null, -1),
    t("path", { d: "M5 17H3v-6l2-5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0H9m-6-6h8m4 0h3m-6-3V6M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", l]]);
export {
  d as C
};
