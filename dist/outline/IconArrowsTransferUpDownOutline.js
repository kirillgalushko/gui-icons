import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const m = {}, i = {
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
  return t(), o("svg", i, e[0] || (e[0] = [
    n("path", { d: "M7 21v-6m13-9-3-3-3 3m-4 12-3 3-3-3M7 3v2m0 4v2m10-8v6m0 12v-2m0-4v-2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", s]]);
export {
  d as I
};
