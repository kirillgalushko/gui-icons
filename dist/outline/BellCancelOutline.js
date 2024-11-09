import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function m(s, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", { d: "M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1m-9 5v1a3 3 0 0 0 3 3m4-2a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", m]]);
export {
  a as B
};
