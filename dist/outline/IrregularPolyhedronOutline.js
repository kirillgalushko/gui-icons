import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(s, e) {
  return o(), r("svg", i, e[0] || (e[0] = [
    t("path", { d: "m6 12-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503a1 1 0 0 0 .592-1.204L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L4.84 4.665a1 1 0 0 0-.592 1.204z" }, null, -1),
    t("path", { d: "m4.5 5.5 6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12m-6 10V8" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(l, [["render", m]]);
export {
  d as I
};
