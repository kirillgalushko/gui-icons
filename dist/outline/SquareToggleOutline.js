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
function s(l, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M12 2v20m2-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8m6 2a2 2 0 0 0-2-2m0 16a2 2 0 0 0 2-2m0-8v4" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as S
};
