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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function s(c, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "M8 12a4 9 0 1 0 8 0 4 9 0 1 0-8 0" }, null, -1),
    e("path", { d: "M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4-4.03-4-9-4-9 1.79-9 4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
