import { openBlock as o, createElementBlock as t, createElementVNode as n } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(m, e) {
  return o(), t("svg", s, e[0] || (e[0] = [
    n("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m6 1h.01M15 13h.01M11 17h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as I
};
