import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function s(c, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M19 6.84a2.01 2.01 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.94 0l-6-3.844A2 2 0 0 1 4 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.05 2.05 0 0 1 2 0l6 3.582z" }, null, -1),
    t("path", { d: "M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as N
};
