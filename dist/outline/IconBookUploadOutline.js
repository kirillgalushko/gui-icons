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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5" }, null, -1),
    t("path", { d: "M11 16H6a2 2 0 0 0-2 2m11-2 3-3 3 3m-3-3v9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};