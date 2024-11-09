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
function s(d, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    e("path", { d: "M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as I
};
