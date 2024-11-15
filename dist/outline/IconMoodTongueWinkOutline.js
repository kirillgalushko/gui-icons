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
function m(s, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" }, null, -1),
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6-2h.01" }, null, -1),
    e("path", { d: "M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7m8.5-4c-.5-1-2.5-1-3 0" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
