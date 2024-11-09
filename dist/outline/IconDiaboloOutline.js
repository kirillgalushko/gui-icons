import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function s(c, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" }, null, -1),
    e("path", { d: "M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3s8-1.343 8-3v-.065a1 1 0 0 0-.036-.265L18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" }, null, -1),
    e("path", { d: "M6 12c0 1.105 2.686 2 6 2s6-.895 6-2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", s]]);
export {
  a as I
};
