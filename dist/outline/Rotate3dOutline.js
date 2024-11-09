import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function s(m, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M12 3a7 7 0 0 1 7 7v4l-3-3m6 0-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" }, null, -1),
    t("path", { d: "M3 12.5V18l5 3m0-5.455 5-3.03" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as R
};
