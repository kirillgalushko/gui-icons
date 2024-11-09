import { openBlock as t, createElementBlock as n, createElementVNode as r } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function m(l, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    r("path", { d: "M13.5 11.5 20 18v-4m-8.5-.5L18 20M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4m5 16 2-2" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ o(i, [["render", m]]);
export {
  h as G
};
