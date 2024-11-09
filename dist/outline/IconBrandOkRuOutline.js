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
    e("path", { d: "M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" }, null, -1),
    e("path", { d: "M9.5 13c1.333.667 3.667.667 5 0m-5 4 2.5-3 2.5 3M12 13.5v.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
