import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
function l(m, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M21 9q-3.6 4-9 4T3 9m0 6 2.5-3.8M21 14.976 18.508 11.2M9 17l.5-4m5.5 4-.5-4" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as E
};
