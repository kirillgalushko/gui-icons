import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
  return t(), r("svg", s, e[0] || (e[0] = [
    n("path", { d: "M10 4v16l-6-5.5M14 20V4l6 5.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", l]]);
export {
  d as T
};