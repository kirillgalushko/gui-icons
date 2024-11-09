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
function s(c, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M12.59 12.59C11.82 14.008 10.055 15 8 15c-2.761 0-5-1.79-5-4a8 8 0 0 0 13.643 5.67m1.64-2.357A8 8 0 0 0 19 11a3 3 0 0 0-5.545-1.59" }, null, -1),
    t("path", { d: "M16 8c0-2 2-4 4-4M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
