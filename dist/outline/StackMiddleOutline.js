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
function m(s, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "m16 10 4-2-8-4-8 4 4 2" }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "m12 12-4-2-4 2 8 4 8-4-4-2z"
    }, null, -1),
    e("path", { d: "m8 14-4 2 8 4 8-4-4-2" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(l, [["render", m]]);
export {
  h as S
};
