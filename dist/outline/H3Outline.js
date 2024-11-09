import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function h(s, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M19 14a2 2 0 1 0-2-2m0 4a2 2 0 1 0 2-2M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as H
};
