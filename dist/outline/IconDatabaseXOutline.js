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
    e("path", { d: "M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" }, null, -1),
    e("path", { d: "M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6" }, null, -1),
    e("path", { d: "M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5m0 5 5-5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
