import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" }, null, -1),
    t("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m12 3 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
