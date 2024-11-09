import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function m(s, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    n("path", { d: "M20 21h-4v-4m0 4 5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4m-1-4-3.5 6M21 5l-.5 4-4-.5m4 .5L16 3.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as A
};
