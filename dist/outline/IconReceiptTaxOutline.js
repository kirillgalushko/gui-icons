import { openBlock as r, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as o } from "../filled/IconAccessibleFilled.js";
const l = {}, c = {
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
function i(s, t) {
  return r(), n("svg", c, t[0] || (t[0] = [
    e("path", { d: "m9 14 6-6" }, null, -1),
    e("circle", {
      cx: "9.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "14.5",
      cy: "13.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(l, [["render", i]]);
export {
  d as I
};
