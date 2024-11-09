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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function s(l, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" }, null, -1),
    t("path", { d: "M12 7H9.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H8m2 0v1m0-8v1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
