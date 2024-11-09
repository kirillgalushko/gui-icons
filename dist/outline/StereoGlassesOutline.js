import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const s = {}, i = {
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
function l(m, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M8 3H6l-3 9m13-9h2l3 9M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707.293H20a1 1 0 0 0 1-1v-7zm4 4h1m8 0h1" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(s, [["render", l]]);
export {
  c as S
};
