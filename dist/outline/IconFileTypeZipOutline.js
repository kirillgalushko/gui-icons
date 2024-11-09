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
function h(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    t("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-3 6h1.5a1.5 1.5 0 0 0 0-3H16v6m-4-6v6m-7-6h3l-3 6h3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as I
};
