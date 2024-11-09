import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const s = {}, i = {
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
function l(m, e) {
  return t(), n("svg", i, e[0] || (e[0] = [
    o("path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2m-2 14a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(s, [["render", l]]);
export {
  a as M
};
