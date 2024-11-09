import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function m(l, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M17 12.5a15.2 15.2 0 0 1-7.37 1.44A14.6 14.6 0 0 1 3 11m16.5 4c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as B
};
