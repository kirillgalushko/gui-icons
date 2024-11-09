import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m6 10v7m0-18v7m-3 8 3 3 3-3M15 6l3-3 3 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", s]]);
export {
  d as A
};
