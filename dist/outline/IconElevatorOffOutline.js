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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(s, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m7 3 2 2" }, null, -1),
    t("path", { d: "m10 14 2 2 2-2M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
