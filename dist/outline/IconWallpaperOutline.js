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
function s(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" }, null, -1),
    e("path", { d: "M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M8 18V6a2 2 0 1 0-4 0v12" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as I
};
