import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
import { _ as o } from "../filled/AccessibleFilled.js";
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
  return t(), r("svg", m, e[0] || (e[0] = [
    n("path", { d: "M8.5 19H5m3.599-2.521A1.5 1.5 0 1 0 7.5 19M7 4v9m8 0h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7m-5 6.01V13" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ o(i, [["render", s]]);
export {
  d as C
};
