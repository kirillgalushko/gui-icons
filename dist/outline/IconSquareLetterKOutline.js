import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, m = {
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
function s(l, e) {
  return n(), o("svg", m, e[0] || (e[0] = [
    t("path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 3v8" }, null, -1),
    t("path", { d: "m14 8-2.5 4 2.5 4m-4-4h1.5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as I
};