import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function m(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5" }, null, -1),
    e("path", { d: "m17 17-4-2.5 4-2.5 4 2.5V19l-4 2.5z" }, null, -1),
    e("path", { d: "M13 14.5V19l4 2.5m0-4.5 4-2.5M11 4h2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as I
};
