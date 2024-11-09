import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function m(s, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    n("path", { d: "M9 3h6l3 7-6 2-6-2zm3 9L9 3m6 8-3-8m0 16.5L9 21l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 21z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as M
};
