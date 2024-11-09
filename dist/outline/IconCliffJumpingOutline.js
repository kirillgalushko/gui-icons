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
    t("path", { d: "M14 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3.5 11 2.5 2 2-2m3 3 3-3-4-2-1-5" }, null, -1),
    t("path", { d: "m10.5 7.5 2 3 3.5.5 3-2 .5-3M4 21v-1l2-3 .5-2.5L8 12 7 7l1-3-1-1-2 .5L3 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
