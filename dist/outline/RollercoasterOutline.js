import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.775 8.775 0 0 1 8.325-6H21m-1 0v12M8 21v-3m4 3V11m4-1.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", l]]);
export {
  d as R
};
