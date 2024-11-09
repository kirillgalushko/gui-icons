import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function m(h, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M13 16.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.5" }, null, -1),
    t("path", { d: "M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8m7 4v-6m3 3-3-3-3 3m0-10h2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", m]]);
export {
  a as I
};
