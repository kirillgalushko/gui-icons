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
function m(h, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 14h6v-6a3 3 0 0 0-6 0zM11 8v2.5A3.5 3.5 0 0 1 7.5 14H7a3 3 0 0 1 0-6z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as B
};
