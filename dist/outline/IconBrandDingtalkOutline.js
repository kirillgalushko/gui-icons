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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }, null, -1),
    t("path", { d: "m8 7.5 7.02 2.632a1 1 0 0 1 .567 1.33L14.5 14H16l-5 4 1-4c-3.1.03-3.114-3.139-4-6.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
