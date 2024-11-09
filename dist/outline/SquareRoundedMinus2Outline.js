import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function c(l, e) {
  return t(), n("svg", s, e[0] || (e[0] = [
    o("path", { d: "M12.5 21c-.18.002-.314 0-.5 0-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 1.136-.046 2.138-.152 3.02M16 19h6" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", c]]);
export {
  h as S
};
