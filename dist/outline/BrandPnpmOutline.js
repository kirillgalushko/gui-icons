import { openBlock as t, createElementBlock as n, createElementVNode as h } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
const r = {}, m = {
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
function i(s, e) {
  return t(), n("svg", m, e[0] || (e[0] = [
    h("path", { d: "M3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm0-7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4zm0-7h4v4h-4zM3 3h4v4H3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(r, [["render", i]]);
export {
  d as B
};
