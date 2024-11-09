import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
function c(s, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" }, null, -1),
    e("circle", {
      cx: "12",
      cy: "7.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", c]]);
export {
  d as I
};
