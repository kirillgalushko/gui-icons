import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
function s(m, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3.5 17.5q8.5 7 17 0" }, null, -1),
    e("path", { d: "M19 18.5 17 10l1-2 2 1 1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3m2 6.5L7 9" }, null, -1),
    e("path", { d: "m8 20 2-5h4l2 5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as I
};
