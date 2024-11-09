import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
function s(m, e) {
  return o(), n("svg", i, e[0] || (e[0] = [
    t("path", {
      fill: "currentColor",
      d: "M12 4 4 8l8 4 8-4z"
    }, null, -1),
    t("path", { d: "m8 14-4 2 8 4 8-4-4-2" }, null, -1),
    t("path", { d: "m8 10-4 2 8 4 8-4-4-2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as I
};
