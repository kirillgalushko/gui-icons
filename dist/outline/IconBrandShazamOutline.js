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
    e("path", { d: "m10 12 2-2a2.83 2.83 0 0 1 4 0 2.83 2.83 0 0 1 0 4l-3 3" }, null, -1),
    e("path", { d: "m14 12-2 2a2.828 2.828 0 1 1-4-4l3-3" }, null, -1),
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
