import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
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
function l(h, t) {
  return n(), o("svg", s, t[0] || (t[0] = [
    e("path", { d: "M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H16a4.1 4.1 0 1 1-5-5V4a.9.9 0 0 0-1-.8" }, null, -1),
    e("path", { d: "M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as I
};