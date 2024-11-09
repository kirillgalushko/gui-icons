import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
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
function s(h, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M3 3v18h18M8 15.015v.015m8 .985v.015m-8-9v.015m4 3.985v.015m7-.015v.015" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", s]]);
export {
  d as C
};
