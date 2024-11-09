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
function l(m, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M4 20v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-4 8H8" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as S
};
