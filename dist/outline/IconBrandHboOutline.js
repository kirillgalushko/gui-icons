import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, m = {
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
function s(h, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M2 16V8m4 0v8m-4-4h4m3 4h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zm10-8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" }, null, -1),
    t("path", { d: "M18 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
