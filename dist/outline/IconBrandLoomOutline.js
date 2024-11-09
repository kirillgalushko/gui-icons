import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function s(d, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M17.464 6.518a6 6 0 1 0-3.023 7.965" }, null, -1),
    t("path", { d: "M17.482 17.464a6 6 0 1 0-7.965-3.023" }, null, -1),
    t("path", { d: "M6.54 17.482a6 6 0 1 0 3.024-7.965" }, null, -1),
    t("path", { d: "M6.518 6.54a6 6 0 1 0 7.965 3.024" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", s]]);
export {
  a as I
};
