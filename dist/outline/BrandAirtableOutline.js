import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", { d: "M3 10v8l7-3v-2.6zm0-4 9 3 9-3-9-3zm11 6.3V21l7-3v-8z" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as B
};
