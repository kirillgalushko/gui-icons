import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function s(m, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    n("path", { d: "M11.162 2.457 3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.99 1.99 0 0 0 .267-2.483L12.838 2.457a.996.996 0 0 0-1.676 0M12 2 7 20.9M12 2l5 18.9" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as H
};
