import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
function l(m, e) {
  return t(), r("svg", s, e[0] || (e[0] = [
    n("path", { d: "m12 3-4 7h8zm2 14a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ o(i, [["render", l]]);
export {
  c as T
};