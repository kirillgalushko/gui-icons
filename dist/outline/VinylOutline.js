import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function s(m, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M16 3.937A9 9 0 1 0 21 12" }, null, -1),
    e("path", { d: "M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1),
    e("path", { d: "m20 4-3.5 10-2.5 2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as V
};
