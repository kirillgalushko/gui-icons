import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function c(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M5.636 5.636a9 9 0 0 1 13.397.747L13.414 12l5.619 5.617A9 9 0 1 1 5.636 5.636" }, null, -1),
    t("circle", {
      cx: "11.5",
      cy: "7.5",
      r: "1",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", c]]);
export {
  d as I
};
