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
function s(h, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0-2 2v5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }, null, -1),
    t("path", { d: "M20 13v.172a2 2 0 0 1-.586 1.414l-4.828 4.828a2 2 0 0 1-1.414.586H13" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as I
};
