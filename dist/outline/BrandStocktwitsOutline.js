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
function l(m, t) {
  return e(), o("svg", s, t[0] || (t[0] = [
    n("path", { d: "M16 3 8 7.5l8 4.5m-8 0 8 4.5L8 21" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as B
};
