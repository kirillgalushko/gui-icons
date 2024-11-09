import { openBlock as n, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
  return n(), r("svg", l, e[0] || (e[0] = [
    t("path", { d: "M8 11a4 4 0 1 1 8 0v5H8zm0 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6m-3 3V4M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    t("circle", {
      cx: "12",
      cy: "4",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const a = /* @__PURE__ */ o(i, [["render", c]]);
export {
  a as S
};
