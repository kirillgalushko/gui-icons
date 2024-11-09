import { openBlock as e, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function a(h, t) {
  return e(), o("svg", s, t[0] || (t[0] = [
    n("path", { d: "M3 12h2a2 2 0 1 0 0-4H3v8m9-8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", a]]);
export {
  c as H
};
