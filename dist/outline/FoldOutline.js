import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function l(s, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M12 3v6l3-3M9 6l3 3m0 12v-6l3 3m-6 0 3-3m-8-3h1m4 0h1m4 0h1m4 0h1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", l]]);
export {
  d as F
};
