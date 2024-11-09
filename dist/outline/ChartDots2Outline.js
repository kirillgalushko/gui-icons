import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(l, t) {
  return o(), n("svg", m, t[0] || (t[0] = [
    e("path", { d: "M3 3v18h18" }, null, -1),
    e("path", { d: "M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-9-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as C
};
