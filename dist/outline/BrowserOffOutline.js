import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(h, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702A1 1 0 0 1 19 20H5a1 1 0 0 1-1-1V5c0-.276.112-.526.293-.707M4 8h4m4 0h8M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", m]]);
export {
  d as B
};
