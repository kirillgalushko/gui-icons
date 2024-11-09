import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function m(c, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M17 11h1c1.38 0 3 1.274 3 3 0 1.657-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4M9 8v9m-3 0v-7m-3 6v-2" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as B
};
