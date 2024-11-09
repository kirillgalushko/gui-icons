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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function m(h, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    t("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6m3 0v6m-3-3h3m15-3v6h2m-9 0v-6l2 3 2-3v6m-9.5-6h3M9 15v6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
