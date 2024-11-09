import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M10 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 21l3-3 .75-1.5M14 21v-4l-4-3 .5-6" }, null, -1),
    e("path", { d: "m5 12 1-3 4.5-1 3.5 3 4 1" }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "M18.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", s]]);
export {
  a as I
};
