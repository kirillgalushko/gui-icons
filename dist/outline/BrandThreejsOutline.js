import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function s(h, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M8 22 3 3l19 5.5z" }, null, -1),
    e("path", { d: "m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" }, null, -1),
    e("path", { d: "M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as B
};
