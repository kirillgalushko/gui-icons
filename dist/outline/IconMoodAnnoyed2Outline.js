import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
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
function c(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" }, null, -1),
    t("path", { d: "M15 14c-2 0-3 1-3.5 2.05M10 9.25c-.5 1-2.5 1-3 0m10 0c-.5 1-2.5 1-3 0" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", c]]);
export {
  h as I
};
