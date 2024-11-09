import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01m5.954 4.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" }, null, -1),
    e("path", { d: "m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" }, null, -1),
    e("path", { d: "m14 14 1-1c.928-.893 2.072-.893 3 0m-2 6.33h6m-3-3v6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as P
};
