import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function l(h, e) {
  return o(), r("svg", s, e[0] || (e[0] = [
    t("path", { d: "M3 12h12m-4-4 4 4-4 4" }, null, -1),
    t("path", { d: "M12 21a9 9 0 0 0 0-18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as A
};
