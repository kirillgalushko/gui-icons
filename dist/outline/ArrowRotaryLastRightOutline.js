import { openBlock as e, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(h, t) {
  return e(), o("svg", s, t[0] || (t[0] = [
    r("path", { d: "M6 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v6m2.5-11.5L18 3m-5 0h5v5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", m]]);
export {
  d as A
};
