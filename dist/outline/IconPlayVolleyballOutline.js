import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as l } from "../filled/IconAccessibleFilled.js";
const r = {}, i = {
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
function s(m, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "M20.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }, null, -1),
    e("path", { d: "m2 16 5 1 .5-2.5m4 6.5 2.5-5.5L8.5 12 12 8l3 4 4 2" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(r, [["render", s]]);
export {
  d as I
};
