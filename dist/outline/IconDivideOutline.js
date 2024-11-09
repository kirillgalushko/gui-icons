import { openBlock as t, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
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
function c(s, r) {
  return t(), o("svg", l, r[0] || (r[0] = [
    e("circle", {
      cx: "12",
      cy: "6",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "12",
      cy: "18",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("path", { d: "M5 12h14" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", c]]);
export {
  d as I
};
