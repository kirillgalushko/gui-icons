import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" }, null, -1),
    t("path", { d: "M7 15v-4.5a1.5 1.5 0 0 1 3 0V15m-3-2h3m4-4v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as A
};
