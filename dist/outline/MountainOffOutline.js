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
    t("path", { d: "M18.281 14.26 14.08 5.388a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.456 3 20h17" }, null, -1),
    t("path", { d: "m7.5 11 2 2.5 2-2M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as M
};
