import { openBlock as t, createElementBlock as l, createElementVNode as e } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
const n = {}, c = {
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
function i(s, r) {
  return t(), l("svg", c, r[0] || (r[0] = [
    e("path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, null, -1),
    e("circle", {
      cx: "8.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "15.5",
      cy: "15.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "12",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const u = /* @__PURE__ */ o(n, [["render", i]]);
export {
  u as D
};
