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
function m(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 14.5L12 13V7l5 4M7 17.5l5-4.5" }, null, -1),
    t("path", { d: "m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657m-12 17.159L2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
