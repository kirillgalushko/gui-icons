import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function h(l, t) {
  return n(), o("svg", s, t[0] || (t[0] = [
    e("path", { d: "M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h12" }, null, -1),
    e("path", { d: "M20 6H8a2 2 0 0 0-2 2v2m0 4v2a2 2 0 0 0 2 2h12" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as C
};
