import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function s(c, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "M9 3.6c5 6 7 10.5 7.5 16.2" }, null, -1),
    e("path", { d: "M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", s]]);
export {
  m as I
};
