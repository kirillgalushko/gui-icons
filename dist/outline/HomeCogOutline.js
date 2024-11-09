import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function s(h, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h1.6" }, null, -1),
    t("path", { d: "m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4.159M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V16m0 4v1.5m3.032-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", s]]);
export {
  d as H
};
