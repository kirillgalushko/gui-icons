import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function h(s, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M8 3v1m0 4v13m8-18v9m0 4v5m-8-7h6m-6-4h2m4 0h2m-6-4h6M8 18h8M3 3l18 18" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(m, [["render", h]]);
export {
  c as L
};
