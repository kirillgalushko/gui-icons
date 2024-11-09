import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M18.364 18.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728" }, null, -1),
    t("path", { d: "M7.757 16.243a6 6 0 0 0 8.486 0" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as I
};
