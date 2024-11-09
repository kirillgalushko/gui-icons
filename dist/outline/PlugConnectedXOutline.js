import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
  return t(), n("svg", i, e[0] || (e[0] = [
    o("path", { d: "m20 16-4 4m-9-8 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zm10 0-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5m13-13L21 3m-11 8-2 2m5 1-2 2m5 0 4 4" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(m, [["render", s]]);
export {
  h as P
};
