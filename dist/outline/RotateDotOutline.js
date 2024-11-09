import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(m, t) {
  return o(), n("svg", s, t[0] || (t[0] = [
    e("path", { d: "M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5" }, null, -1),
    e("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as R
};
