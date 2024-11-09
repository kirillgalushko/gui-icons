import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const h = {}, i = {
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
function l(m, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M6 15H3v-4h3m9 4h-3v-4h3m-6 4v-4" }, null, -1),
    e("path", { d: "M15 11v7h-3M6 7v8m15 0h-3v-4h3" }, null, -1),
    e("path", { d: "M21 11v7h-3" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(h, [["render", l]]);
export {
  c as I
};
