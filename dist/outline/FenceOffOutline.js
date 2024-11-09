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
    o("path", { d: "M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4m0-4v-2m0-4L8 4M6 6v6m8 4v4h4v-2m0-6V6l-2-2-2 2v4M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as F
};
