import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
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
function c(s, t) {
  return r(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zm4 0V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" }, null, -1),
    e("circle", {
      cx: "17.5",
      cy: "15.5",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "6.5",
      cy: "8.5",
      r: "1",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", c]]);
export {
  d as I
};
