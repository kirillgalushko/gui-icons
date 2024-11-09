import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function s(m, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M12 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }, null, -1),
    e("path", { d: "m5 8 3 4 4.5 1 7.5-1M3 18.75A2.4 2.4 0 0 0 4 19a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 1-.25M12 16l.5-3" }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "M6.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as W
};
