import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, h = {
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
function i(m, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21m-9 6V7h3M3 17v-5h9" }, null, -1),
    e("path", { d: "M4 12V6l18-3v2" }, null, -1),
    e("path", { d: "M8 12V8L4 6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", i]]);
export {
  d as C
};
