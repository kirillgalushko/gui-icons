import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(h, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    n("path", { d: "M8 8H5v3h6m4 0h4V8h-7m5.5 3-.323 2.154m-.525 3.497L16 21H8L6.5 11M6 8V7c0-.296.064-.577.18-.83M9 5h7a2 2 0 0 1 2 2v1m-3-3V3M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as C
};
