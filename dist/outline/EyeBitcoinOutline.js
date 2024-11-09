import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(h, e) {
  return n(), o("svg", m, e[0] || (e[0] = [
    t("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    t("path", { d: "M13.193 17.924q-.585.075-1.193.076-5.4 0-9-6 3.6-6 9-6 4.508 0 7.761 4.181M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as E
};
