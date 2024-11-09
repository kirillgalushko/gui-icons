import { openBlock as t, createElementBlock as n, createElementVNode as r } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function s(l, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    r("path", { d: "M12 11a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 0V3m2.5 1.5-5 3m0-3 5 3" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ o(i, [["render", s]]);
export {
  h as G
};
