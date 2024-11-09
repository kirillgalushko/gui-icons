import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as l } from "../filled/IconAccessibleFilled.js";
const r = {}, i = {
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
function s(c, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 17l5 1 .75-1.5M14 21v-4l-4-3 1-6" }, null, -1),
    t("path", { d: "M6 12V9l5-1 3 3 3 1" }, null, -1),
    t("path", {
      fill: "currentColor",
      d: "M19.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(r, [["render", s]]);
export {
  d as I
};
