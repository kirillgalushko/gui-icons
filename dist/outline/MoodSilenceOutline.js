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
function s(h, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M9 10h-.01M15 10h-.01M8 15h8m-7-1v2m3-2v2m3-2v2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as M
};
