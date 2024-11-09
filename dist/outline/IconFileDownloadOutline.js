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
function s(h, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-4v-6" }, null, -1),
    e("path", { d: "M9.5 14.5 12 17l2.5-2.5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", s]]);
export {
  a as I
};
