import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
    t("path", { d: "M10 4.5 16 3l-2 6.5 2-.5-4 7v-5l-3 1z" }, null, -1),
    t("path", { d: "M15 6.5 22 5 12 22 2 5l7.741 1.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
