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
function c(l, e) {
  return t(), n("svg", i, e[0] || (e[0] = [
    o("path", { d: "M9 4c-2.93 1.346-5 5.046-5 8.492C4 17 8 20 12 20s8-3 8-7c0-3.513-3.5-5.513-6-5.513S9 9 9 12c0 2 1.5 3 3 3s3-1 3-3c0-3.513-2-4.508-2-6.515 0-3.504 3.5-2.603 4-1.502" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(s, [["render", c]]);
export {
  h as B
};
