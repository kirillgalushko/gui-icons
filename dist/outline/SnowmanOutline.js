import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
  return t(), n("svg", m, e[0] || (e[0] = [
    o("path", { d: "M12 3a4 4 0 0 1 2.906 6.75 6 6 0 1 1-5.81 0A4 4 0 0 1 12 3m5.5 8.5L20 10M6.5 11.5 4 10m8 3h.01M12 16h.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as S
};
