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
function m(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M4 17H2V6a1 1 0 0 1 1-1h14a5 7 0 0 1 5 7v5h-2m-4 0H8" }, null, -1),
    e("path", { d: "m16 5 1.5 7H22M2 10h15M7 5v5m5-5v5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", m]]);
export {
  a as B
};
