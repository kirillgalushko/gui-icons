import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function s(l, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" }, null, -1),
    e("path", { d: "M4 6v6c0 1.657 3.582 3 8 3q.316 0 .626-.01M20 11.5V6" }, null, -1),
    e("path", { d: "M4 12v6c0 1.657 3.582 3 8 3m5.001-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", s]]);
export {
  d as D
};
