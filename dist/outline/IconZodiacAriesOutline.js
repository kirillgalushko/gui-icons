import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
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
function m(c, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M12 5a5 5 0 1 0-4 8m8 0a5 5 0 1 0-4-8m0 16V5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as I
};
