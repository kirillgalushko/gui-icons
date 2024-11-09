import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(h, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "m18 4 3 3-3 3m0 10 3-3-3-3" }, null, -1),
    t("path", { d: "M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5m0-10h-5a4.98 4.98 0 0 0-3 1m-4 8a5 5 0 0 1-3 1H3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as A
};
