import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const h = {}, i = {
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
function m(s, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M7 7H3V3m14 0h4v4h-4zm-7 3V3h4v4h-3m-8 3h4v4H3zm14 3v-3h4v4h-3m-4 0h-4v-4m0 7h4v4h-4zM3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(h, [["render", m]]);
export {
  d as D
};
