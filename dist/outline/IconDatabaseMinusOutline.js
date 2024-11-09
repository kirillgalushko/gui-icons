import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const s = {}, i = {
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
function l(c, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" }, null, -1),
    e("path", { d: "M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" }, null, -1),
    e("path", { d: "M4 12v6c0 1.657 3.582 3 8 3q.246 0 .49-.006M20 15v-3m-4 7h6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(s, [["render", l]]);
export {
  d as I
};
