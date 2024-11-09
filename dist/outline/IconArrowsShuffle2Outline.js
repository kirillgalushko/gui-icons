import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, h = {
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
function l(s, t) {
  return o(), n("svg", h, t[0] || (t[0] = [
    e("path", { d: "m18 4 3 3-3 3m0 10 3-3-3-3" }, null, -1),
    e("path", { d: "M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" }, null, -1),
    e("path", { d: "M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
