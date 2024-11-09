import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, h = {
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
function s(l, e) {
  return o(), n("svg", h, e[0] || (e[0] = [
    t("path", { d: "M9.5 11h.01m4.99 0h.01M9.5 15a3.5 3.5 0 0 0 5 0" }, null, -1),
    t("path", { d: "M7 5h1V3h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as I
};
