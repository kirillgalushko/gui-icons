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
function s(d, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }, null, -1),
    e("path", { d: "M13.5 13H16v3" }, null, -1),
    e("path", { d: "M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
