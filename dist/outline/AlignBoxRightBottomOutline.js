import { openBlock as e, createElementBlock as o, createElementVNode as n } from "vue";
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
function h(s, t) {
  return e(), o("svg", m, t[0] || (t[0] = [
    n("path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 12h2m-6-3h6m-4-3h4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as A
};
