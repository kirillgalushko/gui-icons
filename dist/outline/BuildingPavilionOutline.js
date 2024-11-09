import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function l(h, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m12 9v-9M6 12h12a3 3 0 0 0 3-3 9 8 0 0 1-9-6 9 8 0 0 1-9 6 3 3 0 0 0 3 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as B
};
