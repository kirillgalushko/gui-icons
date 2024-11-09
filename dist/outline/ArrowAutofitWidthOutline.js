import { openBlock as e, createElementBlock as o, createElementVNode as r } from "vue";
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
function s(h, t) {
  return e(), o("svg", m, t[0] || (t[0] = [
    r("path", { d: "M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6m-10 6H3m18 0h-7m-8-3-3 3 3 3m12-6 3 3-3 3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", s]]);
export {
  d as A
};
