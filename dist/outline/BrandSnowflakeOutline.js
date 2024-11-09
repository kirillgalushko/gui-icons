import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, l = {
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
function s(m, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", { d: "M14 21v-5.5l4.5 2.5M10 21v-5.5L5.5 18m-2-3.5L8 12 3.5 9.5m17 0L16 12l4.5 2.5M10 3v5.5L5.5 6M14 3v5.5L18.5 6M12 11l1 1-1 1-1-1z" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as B
};
