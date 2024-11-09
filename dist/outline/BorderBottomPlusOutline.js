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
function m(l, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "M4 20h16M4 16v-.01M20 16v-.01M4 12v-.01M20 12v-.01M4 8v-.01M20 8v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01M15 12H9m3-3v6" }, null, -1)
  ]));
}
const M = /* @__PURE__ */ n(i, [["render", m]]);
export {
  M as B
};
