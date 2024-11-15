import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M18.364 19.364a9 9 0 1 0-12.728 0" }, null, -1),
    e("path", { d: "M15.536 16.536a5 5 0 1 0-7.072 0" }, null, -1),
    e("path", { d: "M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", s]]);
export {
  m as I
};
