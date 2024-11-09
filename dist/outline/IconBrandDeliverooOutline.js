import { openBlock as o, createElementBlock as t, createElementVNode as e } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
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
function c(s, r) {
  return o(), t("svg", i, r[0] || (r[0] = [
    e("path", { d: "m15 11 1-9 5 .5L20 16l-3 6-12.5-2.5-1.5-6 7-1.5-1.5-7.5 4.5-1z" }, null, -1),
    e("circle", {
      cx: "15.5",
      cy: "15.5",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "11.5",
      cy: "14.5",
      r: "1",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const h = /* @__PURE__ */ n(l, [["render", c]]);
export {
  h as I
};
