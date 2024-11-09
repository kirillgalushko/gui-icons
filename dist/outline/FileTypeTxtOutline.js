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
function h(m, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M14 3v4a1 1 0 0 0 1 1h4m-2.5 7h3" }, null, -1),
    e("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6m12-6v6m-8-6 4 6m-4 0 4-6" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as F
};
