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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function s(c, t) {
  return o(), n("svg", i, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }, null, -1),
    e("path", { d: "M3.5 15.5 8 11c.928-.893 2.072-.893 3 0l5 5" }, null, -1),
    e("path", { d: "m14 14 1-1c.928-.893 2.072-.893 3 0l2.5 2.5" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(l, [["render", s]]);
export {
  m as I
};
