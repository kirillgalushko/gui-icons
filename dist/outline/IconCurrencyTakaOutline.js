import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function l(c, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M15.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    t("path", { d: "M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5M8 11h6" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as I
};
