import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M9 8V7a2 2 0 1 0-4 0m10 1V7a2 2 0 1 1 4 0M4 20l3.472-7.812A2 2 0 0 1 9.3 11h5.4a2 2 0 0 1 1.828 1.188L20 20" }, null, -1),
    t("path", { d: "M6.192 15.064A2 2 0 0 1 6.667 15c.527-.009 1.026.178 1.333.5.307.32.806.507 1.333.5.527.007 1.026-.18 1.334-.5.307-.322.806-.509 1.333-.5.527-.009 1.026.178 1.333.5.308.32.807.507 1.334.5.527.007 1.026-.18 1.333-.5.307-.322.806-.509 1.333-.5q.243.005.472.064M12 8V4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as V
};
