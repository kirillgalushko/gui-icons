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
    t("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l2-4m4 4v-4l-3-3 1-6 3 4 3 2" }, null, -1),
    t("path", { d: "m10 14-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1 3-2m-1 5v9m-1-1h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
